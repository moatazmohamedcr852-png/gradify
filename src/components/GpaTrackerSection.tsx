import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Plus, 
  Trash2, 
  RotateCcw, 
  Award, 
  TrendingUp, 
  CheckCircle, 
  Sparkles, 
  Info,
  ShieldAlert
} from 'lucide-react';
import { Course, GradeLetter } from '../types';
import { GRADE_POINTS, INITIAL_COURSES } from '../data/mockData';

export const GpaTrackerSection: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>(INITIAL_COURSES);
  const [gradingScale, setGradingScale] = useState<'4.0' | '4.33' | 'percentage'>('4.0');
  
  // Prior cumulative data simulation
  const [includePrior, setIncludePrior] = useState<boolean>(true);
  const [priorGpa, setPriorGpa] = useState<number>(3.84);
  const [priorCredits, setPriorCredits] = useState<number>(51);

  // New course form inputs
  const [newCode, setNewCode] = useState('');
  const [newName, setNewName] = useState('');
  const [newCredits, setNewCredits] = useState<number>(3);
  const [newGrade, setNewGrade] = useState<GradeLetter>('A');

  // Semester Calculations
  const semesterStats = useMemo(() => {
    let totalCredits = 0;
    let totalQualityPoints = 0;

    courses.forEach((course) => {
      const pts = GRADE_POINTS[course.grade] ?? 0;
      totalCredits += Number(course.credits);
      totalQualityPoints += Number(course.credits) * pts;
    });

    const semesterGpa = totalCredits > 0 ? totalQualityPoints / totalCredits : 0;

    // Cumulative calculation
    let cumulativeCredits = totalCredits;
    let cumulativeQualityPoints = totalQualityPoints;

    if (includePrior && priorCredits > 0) {
      cumulativeCredits += priorCredits;
      cumulativeQualityPoints += priorCredits * priorGpa;
    }

    const cumulativeGpa = cumulativeCredits > 0 ? cumulativeQualityPoints / cumulativeCredits : 0;

    let honorsTitle = 'Good Academic Standing';
    let honorsColor = 'text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/80 border-zinc-700';

    if (cumulativeGpa >= 3.9) {
      honorsTitle = "Summa Cum Laude / Dean's High Distinction";
      honorsColor = 'text-amber-300 bg-amber-500/10 border-amber-500/30';
    } else if (cumulativeGpa >= 3.75) {
      honorsTitle = "Dean's List Honors";
      honorsColor = 'text-purple-300 bg-purple-500/10 border-[#7C4DFF]/30';
    } else if (cumulativeGpa >= 3.5) {
      honorsTitle = "Honor Roll";
      honorsColor = 'text-cyan-300 bg-cyan-500/10 border-cyan-500/30';
    }

    return {
      totalCredits,
      totalQualityPoints,
      semesterGpa,
      cumulativeCredits,
      cumulativeQualityPoints,
      cumulativeGpa,
      honorsTitle,
      honorsColor,
    };
  }, [courses, includePrior, priorGpa, priorCredits]);

  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCode.trim()) return;

    const newCourseItem: Course = {
      id: `custom-${Date.now()}`,
      code: newCode.toUpperCase(),
      name: newName.trim() || 'Course Elective',
      credits: Number(newCredits),
      grade: newGrade,
    };

    setCourses([...courses, newCourseItem]);
    setNewCode('');
    setNewName('');
  };

  const handleRemoveCourse = (id: string) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  const handleGradeChange = (id: string, grade: GradeLetter) => {
    setCourses(
      courses.map((c) => (c.id === id ? { ...c, grade } : c))
    );
  };

  const handleCreditsChange = (id: string, credits: number) => {
    setCourses(
      courses.map((c) => (c.id === id ? { ...c, credits } : c))
    );
  };

  const handleReset = () => {
    setCourses(INITIAL_COURSES);
    setPriorGpa(3.84);
    setPriorCredits(51);
  };

  return (
    <section 
      id="gpa-tracker" 
      className="py-24 bg-zinc-50 dark:bg-[#0B1020] border-b border-zinc-200 dark:border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3 text-left">
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#0B1020] dark:text-white/40 font-mono">
              01. GPA Tracker Engine
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1020] dark:text-white font-['Space_Grotesk'] tracking-tight uppercase">
            Precision Grade Accounting.
          </h2>

          <p className="text-sm sm:text-base text-[#0B1020] dark:text-white/60 font-['Newsreader'] italic leading-relaxed">
            Calculate your semester and cumulative GPA dynamically. Input your courses, credit hours, and target grades to observe real-time transcript standing.
          </p>
        </div>

        {/* Live Interactive GPA Calculator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Main Column: Course table & Input interface */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 sm:p-8 bg-zinc-50 dark:bg-[#0B1020] border border-zinc-200 dark:border-white/10 space-y-6">
              {/* Controls bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-white/10">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#0B1020] dark:text-white flex items-center gap-2">
                    <span>Enrolled Course Ledger</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 border border-white/20 text-[#0B1020] dark:text-white/70">
                      {courses.length} ACTIVE
                    </span>
                  </div>
                  <p className="text-[11px] text-[#0B1020] dark:text-white/40 mt-1">Adjust credit weights or simulated grades below</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleReset}
                    className="px-3 py-1.5 border border-white/20 hover:border-white/40 text-[#0B1020] dark:text-white/70 hover:text-[#0B1020] dark:text-white text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5 transition"
                    title="Reset to default courses"
                  >
                    <RotateCcw className="w-3 h-3 text-[#0B1020] dark:text-white/50" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Course rows in editorial ledger styling */}
              <div className="divide-y divide-white/10 border-y border-zinc-200 dark:border-white/10">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 group hover:bg-white/[0.02] px-2 transition-colors"
                  >
                    {/* Course Code & Name */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2.5">
                        <span className="font-bold text-[#0B1020] dark:text-white text-xs font-mono border border-zinc-300 dark:border-white/15 px-2 py-0.5">
                          {course.code}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-[#0B1020] dark:text-white/90 truncate">
                          {course.name}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#0B1020] dark:text-white/40 mt-1 flex items-center gap-3 font-mono">
                        <span>{course.credits} Credits</span>
                        <span>•</span>
                        <span className="text-[#0B1020] dark:text-white/60">
                          {((GRADE_POINTS[course.grade] ?? 0) * course.credits).toFixed(1)} Quality Pts
                        </span>
                      </div>
                    </div>

                    {/* Interactive Controls: Credits + Grade Selector + Delete */}
                    <div className="flex items-center gap-2.5 self-end sm:self-center">
                      {/* Credits Input */}
                      <div className="flex items-center gap-1 border border-white/20 px-2 py-1 bg-black">
                        <span className="text-[10px] uppercase font-mono text-[#0B1020] dark:text-white/40">Cr:</span>
                        <select
                          value={course.credits}
                          onChange={(e) => handleCreditsChange(course.id, Number(e.target.value))}
                          className="bg-transparent text-xs font-mono font-bold text-[#0B1020] dark:text-white outline-none cursor-pointer"
                        >
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num} className="bg-black text-[#0B1020] dark:text-white">
                              {num}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Grade Selector */}
                      <div className="flex items-center gap-1 border border-white/30 px-2 py-1 bg-white/[0.05]">
                        <span className="text-[10px] uppercase font-mono text-[#0B1020] dark:text-white/50">G:</span>
                        <select
                          value={course.grade}
                          onChange={(e) => handleGradeChange(course.id, e.target.value as GradeLetter)}
                          className="bg-transparent text-xs font-mono font-bold text-[#0B1020] dark:text-white outline-none cursor-pointer"
                        >
                          {Object.keys(GRADE_POINTS).map((g) => (
                            <option key={g} value={g} className="bg-black text-[#0B1020] dark:text-white font-mono">
                              {g} ({GRADE_POINTS[g as GradeLetter].toFixed(1)})
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Delete button */}
                      <button
                        onClick={() => handleRemoveCourse(course.id)}
                        className="p-1 text-[#0B1020] dark:text-white/30 hover:text-[#0B1020] dark:text-white transition"
                        title="Remove Course"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add New Course Inline Form */}
              <form 
                onSubmit={handleAddCourse}
                className="p-4 border border-dashed border-white/20 space-y-3 bg-white/[0.01]"
              >
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#0B1020] dark:text-white/60 flex items-center gap-1.5">
                  <Plus className="w-3 h-3 text-[#0B1020] dark:text-white/70" />
                  <span>Append Course to Ledger</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
                  <div className="sm:col-span-3">
                    <input
                      type="text"
                      placeholder="e.g. CS 350"
                      value={newCode}
                      onChange={(e) => setNewCode(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-black border border-white/20 text-xs font-semibold text-[#0B1020] dark:text-white placeholder-white/30 focus:border-white outline-none uppercase font-mono"
                      required
                    />
                  </div>

                  <div className="sm:col-span-4">
                    <input
                      type="text"
                      placeholder="Course Name"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-black border border-white/20 text-xs text-[#0B1020] dark:text-white placeholder-white/30 focus:border-white outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <select
                      value={newCredits}
                      onChange={(e) => setNewCredits(Number(e.target.value))}
                      className="w-full px-2 py-1.5 bg-black border border-white/20 text-xs text-[#0B1020] dark:text-white outline-none cursor-pointer font-mono"
                    >
                      {[1, 2, 3, 4, 5, 6].map((cr) => (
                        <option key={cr} value={cr} className="bg-black text-[#0B1020] dark:text-white">
                          {cr} Credits
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <select
                      value={newGrade}
                      onChange={(e) => setNewGrade(e.target.value as GradeLetter)}
                      className="w-full px-2 py-1.5 bg-black border border-white/20 text-xs text-[#0B1020] dark:text-white outline-none cursor-pointer font-mono font-bold"
                    >
                      {Object.keys(GRADE_POINTS).map((g) => (
                        <option key={g} value={g} className="bg-black text-[#0B1020] dark:text-white">
                          {g} ({GRADE_POINTS[g as GradeLetter].toFixed(1)})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-1">
                    <button
                      type="submit"
                      className="w-full h-full min-h-[30px] bg-white text-black text-xs font-black uppercase flex items-center justify-center hover:bg-zinc-200 active:scale-95 transition"
                      title="Add course"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </form>

              {/* Cumulative Prior Toggle and Inputs */}
              <div className="pt-4 border-t border-zinc-200 dark:border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-[#0B1020] dark:text-white/80">
                    <input
                      type="checkbox"
                      checked={includePrior}
                      onChange={(e) => setIncludePrior(e.target.checked)}
                      className="rounded bg-black border-white/30 text-[#0B1020] dark:text-white focus:ring-0 w-3.5 h-3.5"
                    />
                    <span className="text-[11px] uppercase tracking-wider font-mono">Factor in Prior Cumulative History</span>
                  </label>
                  <span className="text-[10px] font-mono text-[#0B1020] dark:text-white/40">Degree Standing</span>
                </div>

                {includePrior && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 border border-zinc-200 dark:border-white/10 bg-black">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-[#0B1020] dark:text-white/40 mb-1">
                        Prior Cumulative GPA
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        max="4.0"
                        value={priorGpa}
                        onChange={(e) => setPriorGpa(parseFloat(e.target.value) || 0)}
                        className="w-full px-3 py-1.5 bg-black border border-white/20 text-xs font-mono font-bold text-[#0B1020] dark:text-white focus:border-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-[#0B1020] dark:text-white/40 mb-1">
                        Prior Completed Credits
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="200"
                        value={priorCredits}
                        onChange={(e) => setPriorCredits(parseInt(e.target.value) || 0)}
                        className="w-full px-3 py-1.5 bg-black border border-white/20 text-xs font-mono font-bold text-[#0B1020] dark:text-white focus:border-white outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Live Real-Time Standing & Honors Card */}
          <div className="lg:col-span-4 space-y-6">
            {/* Real-time score display in Stark Editorial Box */}
            <div className="p-6 sm:p-8 bg-zinc-50 dark:bg-[#0B1020] border border-zinc-300 dark:border-white/15 space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-200 dark:border-white/10 pb-3">
                <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#0B1020] dark:text-white/40">
                  Standing Output
                </span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#0B1020] dark:text-white px-2 py-0.5 border border-white/20">
                  Live Engine
                </span>
              </div>

              {/* Semester GPA */}
              <div className="space-y-1">
                <div className="text-[10px] uppercase tracking-widest text-[#0B1020] dark:text-white/40 font-mono">Term Grade Point Average</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-light tabular-nums font-['Space_Grotesk'] text-[#0B1020] dark:text-white">
                    {semesterStats.semesterGpa.toFixed(2)}
                  </span>
                  <span className="text-xs font-mono text-[#0B1020] dark:text-white/30">/ 4.00</span>
                </div>
                <div className="text-[11px] text-[#0B1020] dark:text-white/50 font-mono">
                  {semesterStats.totalCredits} Credits • {semesterStats.totalQualityPoints.toFixed(1)} Quality Pts
                </div>
              </div>

              {/* Cumulative GPA if enabled */}
              <div className="p-4 border border-zinc-200 dark:border-white/10 bg-white/[0.02] space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase tracking-widest text-[#0B1020] dark:text-white/50 font-mono">Cumulative GPA</span>
                  <span className="font-mono font-bold text-[#0B1020] dark:text-white text-lg tabular-nums">
                    {semesterStats.cumulativeGpa.toFixed(2)}
                  </span>
                </div>
                <div className="text-[10px] text-[#0B1020] dark:text-white/40 font-mono">
                  Across {semesterStats.cumulativeCredits} Total Degree Credits
                </div>
              </div>

              {/* Honors status badge */}
              <div className="p-4 border border-white/20 bg-white/[0.03] space-y-1">
                <div className="flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-[#0B1020] dark:text-white/70" />
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0B1020] dark:text-white">
                    {semesterStats.honorsTitle}
                  </div>
                </div>
                <p className="text-[10px] text-[#0B1020] dark:text-white/50 font-['Newsreader'] italic">
                  {semesterStats.cumulativeGpa >= 3.5 
                    ? "On track for Dean's List and Latin Honors upon term completion." 
                    : "Maintain consistent standing to exceed university distinction thresholds."}
                </p>
              </div>

              {/* Quick Math Breakdown */}
              <div className="pt-4 border-t border-zinc-200 dark:border-white/10 space-y-2 text-[10px] font-mono text-[#0B1020] dark:text-white/40">
                <div className="flex justify-between">
                  <span>SCALE:</span>
                  <span className="text-[#0B1020] dark:text-white/80">Standard 4.00 Registrar</span>
                </div>
                <div className="flex justify-between">
                  <span>WEIGHTING:</span>
                  <span className="text-[#0B1020] dark:text-white/80">Credit-Hour Proportional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
