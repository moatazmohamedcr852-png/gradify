import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Circle, 
  Plus, 
  Bell, 
  AlertCircle, 
  BookOpen, 
  FileText, 
  CalendarDays,
  Sparkles,
  Filter
} from 'lucide-react';
import { TaskItem } from '../types';
import { INITIAL_TASKS } from '../data/mockData';

export const AcademicPlannerSection: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>(INITIAL_TASKS);
  const [filterType, setFilterType] = useState<string>('all');
  const [selectedDay, setSelectedDay] = useState<string>('all');
  
  // Add task state
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCourse, setNewCourse] = useState('CS 301');
  const [newType, setNewType] = useState<TaskItem['type']>('assignment');
  const [newDueDate, setNewDueDate] = useState('This Friday');
  const [newTime, setNewTime] = useState('11:59 PM');
  const [newPriority, setNewPriority] = useState<TaskItem['priority']>('high');

  const daysOfWeek = ['All Days', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Weekend'];

  const toggleTaskCompleted = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newTask: TaskItem = {
      id: `task-${Date.now()}`,
      title: newTitle.trim(),
      courseCode: newCourse,
      type: newType,
      dueDate: newDueDate,
      time: newTime,
      priority: newPriority,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
    setNewTitle('');
    setShowAddForm(false);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filterType !== 'all' && task.type !== filterType) return false;
    return true;
  });

  const pendingCount = tasks.filter((t) => !t.completed).length;

  return (
    <section 
      id="planner" 
      className="py-24 bg-zinc-50 dark:bg-[#0B1020] border-b border-zinc-200 dark:border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3 text-left">
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#0B1020] dark:text-white/40 font-mono">
              02. Smart Academic Planner
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1020] dark:text-white font-['Space_Grotesk'] tracking-tight uppercase">
            Workload & Deep Work Schedule.
          </h2>

          <p className="text-sm sm:text-base text-[#0B1020] dark:text-white/60 font-['Newsreader'] italic leading-relaxed">
            Organize assignments, laboratory blocks, and midterm milestones by priority. Intelligently indexed by course credit weight and deadline criticality.
          </p>
        </div>

        {/* Planner Interactive Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Task Feed */}
          <div className="lg:col-span-8 space-y-4">
            <div className="p-6 sm:p-8 bg-zinc-50 dark:bg-[#0B1020] border border-zinc-200 dark:border-white/10 space-y-6">
              {/* Top toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0B1020] dark:text-white">Active Agenda</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 border border-white/20 text-[#0B1020] dark:text-white/70">
                    {pendingCount} PENDING
                  </span>
                </div>

                {/* Filter tabs in Editorial style */}
                <div className="flex items-center space-x-1 border border-zinc-300 dark:border-white/15 p-0.5">
                  {[
                    { id: 'all', label: 'All' },
                    { id: 'assignment', label: 'Assignments' },
                    { id: 'exam', label: 'Exams' },
                    { id: 'project', label: 'Projects' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setFilterType(tab.id)}
                      className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider transition ${
                        filterType === tab.id
                          ? 'bg-white text-black font-bold'
                          : 'text-[#0B1020] dark:text-white/40 hover:text-[#0B1020] dark:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add task button trigger */}
              {!showAddForm ? (
                <button
                  onClick={() => setShowAddForm(true)}
                  className="w-full py-2.5 px-4 border border-dashed border-white/20 text-[10px] uppercase font-mono tracking-widest text-[#0B1020] dark:text-white/60 hover:text-[#0B1020] dark:text-white hover:border-white/40 flex items-center justify-center gap-2 transition"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Insert Agenda Entry</span>
                </button>
              ) : (
                <form 
                  onSubmit={handleAddTask}
                  className="p-4 border border-white/20 bg-white/[0.01] space-y-3 animate-in fade-in duration-150"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#0B1020] dark:text-white/70">
                    <span>New Milestone Definition</span>
                    <button 
                      type="button" 
                      onClick={() => setShowAddForm(false)}
                      className="text-[#0B1020] dark:text-white/40 hover:text-[#0B1020] dark:text-white"
                    >
                      Cancel
                    </button>
                  </div>

                  <input
                    type="text"
                    placeholder="Task Title (e.g. CS 301 - Lab 4 Dynamic Memory)"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-3 py-1.5 bg-black border border-white/20 text-xs text-[#0B1020] dark:text-white placeholder-white/30 focus:border-white outline-none font-mono"
                    required
                  />

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <select
                      value={newCourse}
                      onChange={(e) => setNewCourse(e.target.value)}
                      className="px-2 py-1.5 bg-black border border-white/20 text-xs text-[#0B1020] dark:text-white outline-none font-mono"
                    >
                      <option value="CS 301">CS 301</option>
                      <option value="MATH 240">MATH 240</option>
                      <option value="PHYS 211">PHYS 211</option>
                      <option value="ECON 102">ECON 102</option>
                      <option value="ENG 205">ENG 205</option>
                    </select>

                    <select
                      value={newType}
                      onChange={(e) => setNewType(e.target.value as any)}
                      className="px-2 py-1.5 bg-black border border-white/20 text-xs text-[#0B1020] dark:text-white outline-none font-mono"
                    >
                      <option value="assignment">Assignment</option>
                      <option value="exam">Exam</option>
                      <option value="project">Project</option>
                      <option value="quiz">Quiz</option>
                    </select>

                    <select
                      value={newDueDate}
                      onChange={(e) => setNewDueDate(e.target.value)}
                      className="px-2 py-1.5 bg-black border border-white/20 text-xs text-[#0B1020] dark:text-white outline-none font-mono"
                    >
                      <option value="Today">Today</option>
                      <option value="Tomorrow">Tomorrow</option>
                      <option value="Thursday">Thursday</option>
                      <option value="This Friday">This Friday</option>
                      <option value="Next Week">Next Week</option>
                    </select>

                    <button
                      type="submit"
                      className="bg-white text-black text-[10px] font-black uppercase tracking-wider py-1.5 px-3 hover:bg-zinc-200 transition"
                    >
                      Save
                    </button>
                  </div>
                </form>
              )}

              {/* Task Cards List */}
              <div className="divide-y divide-white/10 border-y border-zinc-200 dark:border-white/10">
                {filteredTasks.map((task) => (
                  <div
                    key={task.id}
                    className={`py-3.5 px-2 flex items-start sm:items-center justify-between gap-3 transition-colors ${
                      task.completed
                        ? 'opacity-40 line-through'
                        : 'hover:bg-white/[0.02]'
                    }`}
                  >
                    {/* Checkbox and task content */}
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <button
                        onClick={() => toggleTaskCompleted(task.id)}
                        className="mt-0.5 text-[#0B1020] dark:text-white/40 hover:text-[#0B1020] dark:text-white transition"
                        title={task.completed ? 'Mark incomplete' : 'Mark complete'}
                      >
                        {task.completed ? (
                          <CheckCircle2 className="w-4 h-4 text-[#0B1020] dark:text-white" />
                        ) : (
                          <Circle className="w-4 h-4 text-[#0B1020] dark:text-white/40 hover:text-[#0B1020] dark:text-white" />
                        )}
                      </button>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-[10px] font-bold text-[#0B1020] dark:text-white border border-white/20 px-1.5 py-0.2">
                            {task.courseCode}
                          </span>
                          <span className="text-xs sm:text-sm font-medium text-[#0B1020] dark:text-white/90 truncate">
                            {task.title}
                          </span>
                        </div>

                        {task.notes && (
                          <p className="text-[11px] text-[#0B1020] dark:text-white/40 mt-1 line-clamp-1 font-['Newsreader'] italic">
                            {task.notes}
                          </p>
                        )}

                        <div className="flex flex-wrap items-center gap-3 mt-1.5 text-[10px] font-mono text-[#0B1020] dark:text-white/40">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#0B1020] dark:text-white/50" />
                            <span>{task.dueDate} • {task.time}</span>
                          </span>

                          <span>•</span>

                          <span className="uppercase text-[#0B1020] dark:text-white/70">
                            {task.priority} Priority
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Quick reminder status */}
                    <div className="flex items-center gap-2 self-start sm:self-center">
                      <div className="p-1 border border-zinc-300 dark:border-white/15 text-[#0B1020] dark:text-white/40" title="Reminder Active">
                        <Bell className="w-3.5 h-3.5 text-[#0B1020] dark:text-white/60" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Smart Reminder & Study Rhythm Summary */}
          <div className="lg:col-span-4 space-y-6">
            {/* Smart Study Radar */}
            <div className="p-6 sm:p-8 bg-zinc-50 dark:bg-[#0B1020] border border-zinc-300 dark:border-white/15 space-y-5">
              <div className="flex items-center justify-between border-b border-zinc-200 dark:border-white/10 pb-3">
                <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#0B1020] dark:text-white/40">
                  Critical Milestones
                </span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#0B1020] dark:text-white px-2 py-0.5 border border-white/20">
                  Synced
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 border border-zinc-300 dark:border-white/15 space-y-1 bg-white/[0.01]">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#0B1020] dark:text-white/60">
                    <span className="flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-[#0B1020] dark:text-white/80" />
                      High Weight
                    </span>
                    <span>T-14 hrs</span>
                  </div>
                  <div className="text-xs font-bold text-[#0B1020] dark:text-white">CS 301 Dynamic Memory Lab</div>
                  <div className="text-[10px] text-[#0B1020] dark:text-white/40 font-mono">Weight: 8% of term total</div>
                </div>

                <div className="p-3.5 border border-zinc-300 dark:border-white/15 space-y-1 bg-white/[0.01]">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#0B1020] dark:text-white/60">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="w-3 h-3 text-[#0B1020] dark:text-white/80" />
                      Midterm Exam II
                    </span>
                    <span>T-48 hrs</span>
                  </div>
                  <div className="text-xs font-bold text-[#0B1020] dark:text-white">MATH 240 (Linear Transformations)</div>
                  <div className="text-[10px] text-[#0B1020] dark:text-white/40 font-mono">Weight: 20% of term total</div>
                </div>
              </div>

              {/* Sync Features */}
              <div className="pt-3 border-t border-zinc-200 dark:border-white/10 space-y-1.5 text-[10px] font-mono text-[#0B1020] dark:text-white/40">
                <div className="flex items-center gap-1.5 text-[#0B1020] dark:text-white/80">
                  <Sparkles className="w-3 h-3 text-[#0B1020] dark:text-white/60" />
                  <span>Calendar Protocol (iCal / Google)</span>
                </div>
                <p className="text-[10px] text-[#0B1020] dark:text-white/40 leading-relaxed font-sans">
                  One-click bi-directional calendar subscription with automatic schedule conflict detection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
