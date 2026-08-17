import React, { useState } from 'react';
import { 
  Calculator, 
  Calendar, 
  Target, 
  BarChart3, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ChevronRight,
  TrendingUp,
  Award,
  Bell,
  BookOpen
} from 'lucide-react';
import { GradifyLogo } from './GradifyLogo';

export const InteractiveAppMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'planner' | 'goals'>('overview');
  const [gpaScore, setGpaScore] = useState<number>(3.88);

  return (
    <div id="interactive-app-mockup" className="relative mx-auto w-full max-w-[420px] sm:max-w-[480px]">
      {/* Glow aura behind phone */}
      <div 
        aria-hidden="true" 
        className="absolute -inset-4 bg-gradient-to-tr from-[#4F8CFF]/20 via-purple-600/30 to-pink-500/20 rounded-[48px] blur-2xl opacity-70 pointer-events-none"
      />

      {/* Phone chassis */}
      <div className="relative rounded-[40px] p-3 bg-gradient-to-b from-zinc-700/60 via-zinc-900/90 to-black border border-white/20 shadow-2xl shadow-purple-950/40 backdrop-blur-2xl">
        {/* Dynamic Island / Speaker Notch */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-4 bg-zinc-950 rounded-full flex items-center justify-between px-3 z-30 border border-zinc-200 dark:border-white/10 shadow-inner">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-800/90 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
          </div>
          <div className="w-2 h-2 rounded-full bg-zinc-800" />
        </div>

        {/* Screen container */}
        <div className="relative rounded-[32px] overflow-hidden bg-[#0a0a0f] border border-zinc-200 dark:border-white/5 pt-8 pb-4 px-4 sm:px-5 flex flex-col min-h-[580px]">
          {/* App Top Bar */}
          <div className="flex items-center justify-between mb-4 pt-2">
            <div className="flex items-center gap-2">
              <GradifyLogo size="sm" showText={false} />
              <div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 dark:text-zinc-500">Gradify Academic</div>
                <div className="text-xs font-bold text-[#0B1020] dark:text-white flex items-center gap-1">
                  <span>Spring Semester</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#7C4DFF]/20 border border-[#7C4DFF]/30 text-purple-300 flex items-center gap-1">
                <Award className="w-3 h-3 text-amber-400" />
                Dean's List
              </span>
              <button className="p-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:text-[#0B1020] dark:text-white">
                <Bell className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Screen Content based on Active Tab */}
          <div className="flex-1 space-y-3.5 overflow-y-auto pr-0.5 text-left">
            {activeTab === 'overview' && (
              <>
                {/* GPA Hero Card inside Mockup */}
                <div className="relative rounded-2xl p-4 bg-gradient-to-br from-indigo-950/50 via-purple-950/40 to-black border border-purple-500/20 overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-bl-full pointer-events-none" />
                  
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[11px] font-medium text-zinc-600 dark:text-zinc-400 flex items-center gap-1">
                        <span>Cumulative Standing</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#4F8CFF]/20 text-indigo-300 font-mono">4.0 Scale</span>
                      </div>
                      <div className="text-3xl font-extrabold text-[#0B1020] dark:text-white tracking-tight flex items-baseline gap-1 mt-0.5">
                        <span className="font-['Space_Grotesk'] text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-pink-200">
                          {gpaScore.toFixed(2)}
                        </span>
                        <span className="text-xs font-normal text-zinc-500 dark:text-zinc-500">/ 4.00</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                        <TrendingUp className="w-3 h-3" />
                        +0.07 this term
                      </div>
                      <div className="text-[10px] text-zinc-600 dark:text-zinc-400 mt-1 font-mono">69 / 120 Credits</div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-3 space-y-1">
                    <div className="flex justify-between text-[10px] text-zinc-600 dark:text-zinc-400">
                      <span>Target: 3.90 (Summa Cum Laude)</span>
                      <span className="text-purple-300 font-medium">97% Reached</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 rounded-full w-[97%]" />
                    </div>
                  </div>
                </div>

                {/* Quick Action Widget Grid */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-zinc-200 dark:border-white/5 hover:border-zinc-200 dark:border-white/10 transition">
                    <div className="flex items-center gap-1.5 text-xs text-[#4F8CFF] font-semibold mb-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Today's Focus</span>
                    </div>
                    <div className="text-xs font-bold text-zinc-800 dark:text-zinc-200 truncate">CS 301 Problem Set</div>
                    <div className="text-[10px] text-zinc-600 dark:text-zinc-400 flex items-center gap-1 mt-0.5">
                      <Clock className="w-2.5 h-2.5 text-amber-400" />
                      <span>Due 11:59 PM</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-zinc-200 dark:border-white/5 hover:border-zinc-200 dark:border-white/10 transition">
                    <div className="flex items-center gap-1.5 text-xs text-pink-400 font-semibold mb-1">
                      <Target className="w-3.5 h-3.5" />
                      <span>Grade Needed</span>
                    </div>
                    <div className="text-xs font-bold text-zinc-800 dark:text-zinc-200">A in PHYS 211</div>
                    <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>Secures 3.85 GPA</span>
                    </div>
                  </div>
                </div>

                {/* Live enrolled courses list */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-zinc-600 dark:text-zinc-400">
                    <span>Enrolled Courses (18 cr)</span>
                    <button 
                      onClick={() => setActiveTab('courses')}
                      className="text-[#4F8CFF] hover:text-indigo-300 text-[10px] flex items-center gap-0.5"
                    >
                      View All <ChevronRight className="w-2.5 h-2.5" />
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    {[
                      { code: 'CS 301', name: 'Data Structures', grade: 'A', pts: '4.0', color: 'border-l-indigo-500' },
                      { code: 'MATH 240', name: 'Linear Algebra', grade: 'A-', pts: '3.7', color: 'border-l-cyan-500' },
                      { code: 'PHYS 211', name: 'Univ Physics w/ Lab', grade: 'B+', pts: '3.3', color: 'border-l-pink-500' },
                    ].map((c) => (
                      <div 
                        key={c.code}
                        className={`flex items-center justify-between p-2 rounded-lg bg-zinc-900/60 border border-zinc-200 dark:border-white/5 border-l-2 ${c.color} text-xs`}
                      >
                        <div>
                          <span className="font-bold text-zinc-800 dark:text-zinc-200">{c.code}</span>
                          <span className="text-[10px] text-zinc-600 dark:text-zinc-400 ml-1.5">{c.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-zinc-600 dark:text-zinc-400 text-[10px]">{c.pts}</span>
                          <span className="font-bold text-[11px] px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 text-[#0B1020] dark:text-white">
                            {c.grade}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === 'courses' && (
              <div className="space-y-2 animate-in fade-in duration-200">
                <div className="text-xs font-bold text-zinc-800 dark:text-zinc-200 flex items-center justify-between">
                  <span>Semester Courses (5)</span>
                  <span className="text-[10px] text-zinc-600 dark:text-zinc-400 font-mono">18 Credits</span>
                </div>
                {[
                  { code: 'CS 301', name: 'Data Structures & Algorithms', cr: 4, grade: 'A', col: 'text-[#4F8CFF]' },
                  { code: 'MATH 240', name: 'Linear Algebra & Matrix Theory', cr: 4, grade: 'A-', col: 'text-cyan-400' },
                  { code: 'ECON 102', name: 'Principles of Macroeconomics', cr: 3, grade: 'A', col: 'text-[#7C4DFF]' },
                  { code: 'PHYS 211', name: 'University Physics with Lab', cr: 4, grade: 'B+', col: 'text-pink-400' },
                  { code: 'ENG 205', name: 'Technical Communications', cr: 3, grade: 'A', col: 'text-emerald-400' },
                ].map((item) => (
                  <div key={item.code} className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-200 dark:border-white/5 flex items-center justify-between">
                    <div>
                      <div className={`text-xs font-bold ${item.col}`}>{item.code}</div>
                      <div className="text-[10px] text-zinc-600 dark:text-zinc-400 truncate max-w-[180px]">{item.name}</div>
                      <div className="text-[9px] text-zinc-500 dark:text-zinc-500 mt-0.5">{item.cr} Credit Hours</div>
                    </div>
                    <div className="text-center px-2 py-1 rounded-lg bg-black/10 dark:bg-white/10 border border-zinc-200 dark:border-white/10">
                      <div className="text-xs font-extrabold text-[#0B1020] dark:text-white">{item.grade}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'planner' && (
              <div className="space-y-2 animate-in fade-in duration-200">
                <div className="text-xs font-bold text-zinc-800 dark:text-zinc-200 flex items-center justify-between">
                  <span>Smart Weekly Planner</span>
                  <span className="text-[10px] text-amber-400 font-medium">3 Pending</span>
                </div>
                {[
                  { title: 'CS 301 - Dynamic Prog HW', due: 'Tomorrow 11:59 PM', prio: 'High Priority', tag: 'bg-rose-500/20 text-rose-300' },
                  { title: 'MATH 240 - Midterm II Exam', due: 'Thursday 2:00 PM', prio: 'Exam', tag: 'bg-[#7C4DFF]/20 text-purple-300' },
                  { title: 'PHYS 211 - Wave Lab Report', due: 'Friday 5:00 PM', prio: 'Assignment', tag: 'bg-blue-500/20 text-blue-300' },
                  { title: 'ECON 102 - Case Study (Done)', due: 'Completed', prio: 'Submitted', tag: 'bg-emerald-500/20 text-emerald-300' },
                ].map((t, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-zinc-900/70 border border-zinc-200 dark:border-white/5 flex items-start gap-2.5">
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 ${idx === 3 ? 'text-emerald-400' : 'text-zinc-600'}`} />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 truncate">{t.title}</div>
                      <div className="text-[10px] text-zinc-600 dark:text-zinc-400 flex items-center gap-2 mt-0.5">
                        <span>{t.due}</span>
                        <span className={`text-[8px] font-bold px-1.5 py-0.2 rounded-full ${t.tag}`}>{t.prio}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'goals' && (
              <div className="space-y-2.5 animate-in fade-in duration-200">
                <div className="text-xs font-bold text-zinc-800 dark:text-zinc-200 flex items-center justify-between">
                  <span>Target GPA Engine</span>
                  <span className="text-[10px] text-pink-400 font-mono">Goal: 3.90</span>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-pink-950/30 to-purple-950/20 border border-pink-500/20 space-y-2">
                  <div className="text-[11px] text-zinc-700 dark:text-zinc-300">
                    To graduate with <strong className="text-pink-300">Summa Cum Laude (≥ 3.90)</strong>, you need:
                  </div>
                  <div className="p-2 rounded-lg bg-black/40 border border-zinc-200 dark:border-white/10 text-xs font-mono text-emerald-300 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span>Average 3.92 in remaining 51 credits</span>
                  </div>
                  <div className="text-[10px] text-zinc-600 dark:text-zinc-400">
                    Path: Minimum 10 A's and no grade below A- in major electives.
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Dock Navigation inside Mockup */}
          <div className="pt-3 border-t border-zinc-200 dark:border-white/10 grid grid-cols-4 gap-1 text-center">
            {[
              { id: 'overview', label: 'Dashboard', icon: BarChart3 },
              { id: 'courses', label: 'Courses', icon: Calculator },
              { id: 'planner', label: 'Planner', icon: Calendar },
              { id: 'goals', label: 'Goals', icon: Target },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex flex-col items-center gap-0.5 py-1 rounded-lg transition ${
                    isActive
                      ? 'text-[#7C4DFF] bg-black/5 dark:bg-white/5 font-semibold'
                      : 'text-zinc-500 dark:text-zinc-500 hover:text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="text-[9px]">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
