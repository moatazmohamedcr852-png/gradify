import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Award, 
  Calendar, 
  Layers, 
  CheckCircle2,
  ChevronRight,
  BookCheck,
  Sparkles
} from 'lucide-react';
import { SemesterData } from '../types';
import { INITIAL_SEMESTERS } from '../data/mockData';

export const SemesterOverviewSection: React.FC = () => {
  const [semesters] = useState<SemesterData[]>(INITIAL_SEMESTERS);
  const [selectedSemester, setSelectedSemester] = useState<SemesterData>(INITIAL_SEMESTERS[3]);

  // Max GPA for bar heights
  const maxGpa = 4.0;

  return (
    <section 
      id="semester-overview" 
      className="py-24 bg-zinc-50 dark:bg-[#0B1020] border-b border-zinc-200 dark:border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3 text-left">
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#0B1020] dark:text-white/40 font-mono">
              04. Semester Analytics
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1020] dark:text-white font-['Space_Grotesk'] tracking-tight uppercase">
            Historical Progression & Yield.
          </h2>

          <p className="text-sm sm:text-base text-[#0B1020] dark:text-white/60 font-['Newsreader'] italic leading-relaxed">
            Track academic growth term-by-term. Analyze grade distribution trends, identify strong subject verticals, and evaluate honor roll continuity.
          </p>
        </div>

        {/* Main Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Chart Visualizer Container */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 bg-zinc-50 dark:bg-[#0B1020] border border-zinc-200 dark:border-white/10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-white/10">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#0B1020] dark:text-white flex items-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-[#0B1020] dark:text-white/60" />
                    <span>GPA Progression Matrix</span>
                  </div>
                  <p className="text-[10px] text-[#0B1020] dark:text-white/40 mt-0.5 font-mono">Select any semester column to inspect granular grade breakdown</p>
                </div>

                <div className="flex items-center gap-3 text-[10px] font-mono uppercase text-[#0B1020] dark:text-white/50">
                  <span className="flex items-center gap-1.5 text-[#0B1020] dark:text-white">
                    <span className="w-2 h-2 bg-white" />
                    Term GPA
                  </span>
                </div>
              </div>

              {/* Custom SVG / CSS Bar Chart in Editorial Wireframe */}
              <div className="pt-6 pb-2">
                <div className="h-60 flex items-end justify-between gap-3 sm:gap-6 border-b border-zinc-200 dark:border-white/10 px-2 sm:px-4 relative">
                  {/* Grid guidelines */}
                  <div className="absolute inset-x-0 top-0 border-b border-zinc-200 dark:border-white/5 flex justify-between text-[9px] font-mono text-[#0B1020] dark:text-white/30">
                    <span>4.00 MAX</span>
                  </div>
                  <div className="absolute inset-x-0 top-1/4 border-b border-zinc-200 dark:border-white/5 flex justify-between text-[9px] font-mono text-[#0B1020] dark:text-white/30">
                    <span>3.75 DEAN</span>
                  </div>
                  <div className="absolute inset-x-0 top-2/4 border-b border-zinc-200 dark:border-white/5 flex justify-between text-[9px] font-mono text-[#0B1020] dark:text-white/30">
                    <span>3.50 HONORS</span>
                  </div>

                  {/* Bars for each semester */}
                  {semesters.map((sem) => {
                    const heightPercent = (sem.gpa / maxGpa) * 100;
                    const isSelected = selectedSemester.id === sem.id;

                    return (
                      <button
                        key={sem.id}
                        onClick={() => setSelectedSemester(sem)}
                        className="flex-1 flex flex-col items-center gap-2 group h-full justify-end relative transition-all"
                      >
                        {/* Hover / Selected floating tooltip */}
                        <div className={`text-[10px] font-mono px-1.5 py-0.5 transition-all ${
                          isSelected
                            ? 'bg-white text-black font-black'
                            : 'border border-white/20 text-[#0B1020] dark:text-white/60 group-hover:text-[#0B1020] dark:text-white'
                        }`}>
                          {sem.gpa.toFixed(2)}
                        </div>

                        {/* Bar Pillar */}
                        <div className="w-full max-w-[44px] bg-white/[0.02] border border-zinc-200 dark:border-white/10 p-0.5 flex flex-col justify-end h-full">
                          <div
                            style={{ height: `${heightPercent}%` }}
                            className={`w-full transition-all duration-300 ${
                              isSelected
                                ? 'bg-white'
                                : 'bg-white/20 group-hover:bg-white/40'
                            }`}
                          />
                        </div>

                        {/* Term Label */}
                        <div className="text-center pt-2">
                          <div className={`text-[10px] font-mono uppercase tracking-wider transition-colors ${
                            isSelected ? 'text-[#0B1020] dark:text-white font-bold' : 'text-[#0B1020] dark:text-white/40 group-hover:text-[#0B1020] dark:text-white/70'
                          }`}>
                            {sem.term}
                          </div>
                          <div className="text-[9px] text-[#0B1020] dark:text-white/30 font-mono">{sem.year}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Cumulative stats badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-zinc-200 dark:border-white/10">
                <div className="p-3 border border-zinc-200 dark:border-white/10 bg-white/[0.01]">
                  <div className="text-[9px] text-[#0B1020] dark:text-white/40 uppercase font-mono tracking-widest">Total Credits</div>
                  <div className="text-base font-light text-[#0B1020] dark:text-white font-mono mt-0.5">69 CR</div>
                </div>

                <div className="p-3 border border-zinc-200 dark:border-white/10 bg-white/[0.01]">
                  <div className="text-[9px] text-[#0B1020] dark:text-white/40 uppercase font-mono tracking-widest">Cumulative GPA</div>
                  <div className="text-base font-light text-[#0B1020] dark:text-white font-mono mt-0.5">
                    3.85
                  </div>
                </div>

                <div className="p-3 border border-zinc-200 dark:border-white/10 bg-white/[0.01]">
                  <div className="text-[9px] text-[#0B1020] dark:text-white/40 uppercase font-mono tracking-widest">Honors Streaks</div>
                  <div className="text-base font-light text-[#0B1020] dark:text-white font-mono mt-0.5">4 Terms</div>
                </div>

                <div className="p-3 border border-zinc-200 dark:border-white/10 bg-white/[0.01]">
                  <div className="text-[9px] text-[#0B1020] dark:text-white/40 uppercase font-mono tracking-widest">Graduation Pace</div>
                  <div className="text-base font-light text-[#0B1020] dark:text-white font-mono mt-0.5">On Track</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Selected Semester Breakdown Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 bg-zinc-50 dark:bg-[#0B1020] border border-zinc-300 dark:border-white/15 space-y-5">
              {/* Semester info banner */}
              <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-white/10">
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-[#0B1020] dark:text-white/40">Term Ledger Record</div>
                  <div className="text-sm font-bold uppercase tracking-wider text-[#0B1020] dark:text-white">
                    {selectedSemester.term} {selectedSemester.year}
                  </div>
                </div>

                {selectedSemester.honors && (
                  <div className="px-2 py-0.5 border border-white/30 text-[#0B1020] dark:text-white text-[10px] font-mono uppercase tracking-wider flex items-center gap-1">
                    <Award className="w-3 h-3 text-[#0B1020] dark:text-white/70" />
                    <span>{selectedSemester.honors}</span>
                  </div>
                )}
              </div>

              {/* Semester GPA score card */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 border border-zinc-200 dark:border-white/10 bg-white/[0.01] space-y-1">
                  <div className="text-[9px] font-mono uppercase text-[#0B1020] dark:text-white/40">Semester GPA</div>
                  <div className="text-3xl font-light font-['Space_Grotesk'] text-[#0B1020] dark:text-white">
                    {selectedSemester.gpa.toFixed(2)}
                  </div>
                </div>

                <div className="p-3.5 border border-zinc-200 dark:border-white/10 bg-white/[0.01] space-y-1">
                  <div className="text-[9px] font-mono uppercase text-[#0B1020] dark:text-white/40">Term Credits</div>
                  <div className="text-3xl font-light text-[#0B1020] dark:text-white font-mono">
                    {selectedSemester.credits}
                  </div>
                </div>
              </div>

              {/* Course list breakdown */}
              <div className="space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#0B1020] dark:text-white/50 flex items-center justify-between border-b border-zinc-200 dark:border-white/10 pb-1">
                  <span>Enrolled Courses ({selectedSemester.courses.length})</span>
                  <span>Earned</span>
                </div>

                <div className="divide-y divide-white/10 max-h-[240px] overflow-y-auto pr-1">
                  {selectedSemester.courses.map((course) => (
                    <div
                      key={course.id}
                      className="py-2 flex items-center justify-between text-xs"
                    >
                      <div>
                        <span className="font-mono font-bold text-[#0B1020] dark:text-white">{course.code}</span>
                        <span className="text-[11px] text-[#0B1020] dark:text-white/60 ml-2">{course.name}</span>
                        <div className="text-[10px] text-[#0B1020] dark:text-white/30 font-mono mt-0.5">{course.credits} Credits</div>
                      </div>

                      <div className="text-right">
                        <span className="px-2 py-0.5 border border-white/20 text-[#0B1020] dark:text-white font-bold font-mono text-[11px]">
                          {course.grade}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom badge */}
              <div className="p-3 border border-zinc-300 dark:border-white/15 text-[10px] text-[#0B1020] dark:text-white/60 font-['Newsreader'] italic flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#0B1020] dark:text-white/70 flex-shrink-0" />
                <span>Registrar verified calculations ready for official transcript audits.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
