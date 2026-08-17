import React, { useState } from 'react';
import { 
  LayoutGrid, 
  Smartphone, 
  Sparkles, 
  Clock, 
  Award, 
  CheckCircle2, 
  TrendingUp,
  Target,
  Bell,
  Layers,
  Flame
} from 'lucide-react';
import { GradifyLogo } from './GradifyLogo';

export const HomeWidgetsSection: React.FC = () => {
  const [activeSize, setActiveSize] = useState<'small' | 'medium' | 'large' | 'lockscreen'>('medium');
  const [activeTheme, setActiveTheme] = useState<'onyx' | 'neon' | 'glass'>('onyx');

  return (
    <section 
      id="widgets" 
      className="py-24 bg-white dark:bg-[#0B1020] border-t border-zinc-200 dark:border-white/5 relative overflow-hidden"
    >
      {/* Background glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <LayoutGrid className="w-3.5 h-3.5 text-amber-400" />
            Home & Lock Screen Widgets
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1020] dark:text-white font-['Space_Grotesk'] tracking-tight">
            Add Gradify widgets to your home screen for a quick glance at today's tasks and current GPA.
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            No need to open the app. Stay synchronized with your degree milestones, upcoming exam countdowns, and real-time GPA right from your iOS and Android device screens.
          </p>
        </div>

        {/* Interactive Widget Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Widget Size & Theme Selector */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-200 dark:border-white/10 backdrop-blur-xl space-y-6">
              <div>
                <h3 className="text-sm font-bold text-[#0B1020] dark:text-white mb-1">Choose Widget Geometry</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">Designed natively for iOS 17/18 & Android 14/15 Material You</p>
              </div>

              {/* Size selectors */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'small', title: 'Small (2×2)', subtitle: 'Quick GPA & Countdown', icon: '◻️' },
                  { id: 'medium', title: 'Medium (4×2)', subtitle: 'Today’s Tasks & Standing', icon: '▭' },
                  { id: 'large', title: 'Large (4×4)', subtitle: 'Full Weekly Dashboard', icon: '⧉' },
                  { id: 'lockscreen', title: 'Lock Screen', subtitle: 'Always-On Glances', icon: '📱' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveSize(s.id as any)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      activeSize === s.id
                        ? 'bg-gradient-to-br from-indigo-950/80 to-purple-950/60 border-purple-500/50 shadow-lg shadow-purple-500/10'
                        : 'bg-zinc-950/60 border-zinc-200 dark:border-white/5 hover:border-zinc-300 dark:border-white/15'
                    }`}
                  >
                    <div className="text-sm font-bold text-[#0B1020] dark:text-white flex items-center justify-between">
                      <span>{s.title}</span>
                      <span className="text-base">{s.icon}</span>
                    </div>
                    <div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-1">{s.subtitle}</div>
                  </button>
                ))}
              </div>

              {/* Theme selectors */}
              <div className="space-y-2 pt-2 border-t border-zinc-200 dark:border-white/10">
                <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Widget Appearance:</div>
                <div className="flex items-center gap-2">
                  {[
                    { id: 'onyx', label: 'Onyx Dark', color: 'bg-zinc-950 border-zinc-800' },
                    { id: 'neon', label: 'Neon Cyber', color: 'bg-indigo-950 border-purple-800' },
                    { id: 'glass', label: 'Frosted Glass', color: 'bg-black/10 dark:bg-white/10 border-white/20' },
                  ].map((th) => (
                    <button
                      key={th.id}
                      onClick={() => setActiveTheme(th.id as any)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium border flex items-center gap-1.5 transition ${
                        activeTheme === th.id
                          ? 'bg-black/10 dark:bg-white/10 text-[#0B1020] dark:text-white border-purple-500/50 shadow'
                          : 'text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-white/5 hover:text-zinc-800 dark:text-zinc-200'
                      }`}
                    >
                      <span className={`w-2.5 h-2.5 rounded-full ${th.color}`} />
                      <span>{th.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Highlights feature bullets */}
              <div className="space-y-2.5 text-xs text-zinc-600 dark:text-zinc-400 pt-2 border-t border-zinc-200 dark:border-white/10">
                <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 font-semibold">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>Instant Zero-Latency Updates</span>
                </div>
                <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Interactive widgets allow checking off completed assignments directly from the home screen without launching the full application.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Live Rendered Device Screen Preview */}
          <div className="lg:col-span-7 flex items-center justify-center">
            {/* Phone Screen Canvas */}
            <div className="w-full max-w-[440px] p-6 sm:p-8 rounded-[44px] bg-gradient-to-b from-zinc-900/90 via-black to-zinc-950 border border-zinc-300 dark:border-white/15 shadow-2xl shadow-purple-950/30 backdrop-blur-2xl relative">
              {/* Wallpaper Grid Background */}
              <div className="absolute inset-4 rounded-[36px] overflow-hidden opacity-30 pointer-events-none">
                <div className="w-full h-full bg-dots-pattern" />
              </div>

              {/* Status Header */}
              <div className="flex items-center justify-between text-zinc-600 dark:text-zinc-400 text-xs mb-8 font-semibold relative z-10 px-2">
                <span>9:41 AM</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/40" />
                  <div className="w-2 h-2 rounded-full bg-white/40" />
                  <div className="w-4 h-2 rounded-full border border-white/40" />
                </div>
              </div>

              {/* Dynamic Rendered Widget Preview Container */}
              <div className="relative z-10 flex items-center justify-center min-h-[280px]">
                {/* SMALL WIDGET */}
                {activeSize === 'small' && (
                  <div className={`w-[180px] h-[180px] p-4 rounded-[28px] border flex flex-col justify-between shadow-2xl transition-all duration-300 ${
                    activeTheme === 'onyx'
                      ? 'bg-zinc-950/95 border-zinc-200 dark:border-white/10 text-[#0B1020] dark:text-white'
                      : activeTheme === 'neon'
                      ? 'bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 border-purple-500/40 text-[#0B1020] dark:text-white'
                      : 'bg-black/10 dark:bg-white/10 backdrop-blur-xl border-white/20 text-[#0B1020] dark:text-white'
                  }`}>
                    <div className="flex items-center justify-between">
                      <GradifyLogo size="sm" showText={false} />
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                        3.88 GPA
                      </span>
                    </div>

                    <div>
                      <div className="text-[10px] text-zinc-600 dark:text-zinc-400 font-medium">Next Due</div>
                      <div className="text-xs font-bold text-[#0B1020] dark:text-white truncate mt-0.5">CS 301 Problem Set</div>
                      <div className="text-[10px] text-amber-400 flex items-center gap-1 mt-1">
                        <Clock className="w-2.5 h-2.5" />
                        <span>In 14 hours</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* MEDIUM WIDGET */}
                {activeSize === 'medium' && (
                  <div className={`w-full max-w-[360px] p-4.5 rounded-[30px] border flex flex-col justify-between shadow-2xl transition-all duration-300 ${
                    activeTheme === 'onyx'
                      ? 'bg-zinc-950/95 border-zinc-200 dark:border-white/10 text-[#0B1020] dark:text-white'
                      : activeTheme === 'neon'
                      ? 'bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 border-purple-500/40 text-[#0B1020] dark:text-white'
                      : 'bg-black/10 dark:bg-white/10 backdrop-blur-xl border-white/20 text-[#0B1020] dark:text-white'
                  }`}>
                    {/* Widget header */}
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-200 dark:border-white/10">
                      <div className="flex items-center gap-2">
                        <GradifyLogo size="sm" showText={false} />
                        <div>
                          <div className="text-[11px] font-bold text-[#0B1020] dark:text-white">Gradify Today</div>
                          <div className="text-[9px] text-zinc-600 dark:text-zinc-400">Spring Term • 18 Credits</div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 font-mono">
                          3.88 GPA
                        </div>
                        <div className="text-[9px] text-emerald-400">Dean's List</div>
                      </div>
                    </div>

                    {/* Today's Tasks */}
                    <div className="space-y-1.5 py-2">
                      <div className="flex items-center justify-between text-xs p-1.5 rounded-xl bg-white/[0.03]">
                        <div className="flex items-center gap-2 truncate">
                          <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-500 flex-shrink-0" />
                          <span className="truncate font-medium text-zinc-800 dark:text-zinc-200 text-[11px]">CS 301 - Dynamic Prog</span>
                        </div>
                        <span className="text-[9px] font-mono text-amber-400 flex-shrink-0">11:59 PM</span>
                      </div>

                      <div className="flex items-center justify-between text-xs p-1.5 rounded-xl bg-white/[0.03]">
                        <div className="flex items-center gap-2 truncate">
                          <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-500 flex-shrink-0" />
                          <span className="truncate font-medium text-zinc-800 dark:text-zinc-200 text-[11px]">MATH 240 - Midterm II</span>
                        </div>
                        <span className="text-[9px] font-mono text-[#7C4DFF] flex-shrink-0">Thu 2 PM</span>
                      </div>
                    </div>

                    {/* Bottom quick ticker */}
                    <div className="pt-1.5 border-t border-zinc-200 dark:border-white/10 flex items-center justify-between text-[9px] text-zinc-600 dark:text-zinc-400">
                      <span>Target: 3.90 (97% Reached)</span>
                      <span className="text-indigo-300 font-semibold">Tap to add task →</span>
                    </div>
                  </div>
                )}

                {/* LARGE WIDGET */}
                {activeSize === 'large' && (
                  <div className={`w-full max-w-[360px] p-5 rounded-[32px] border flex flex-col justify-between shadow-2xl transition-all duration-300 ${
                    activeTheme === 'onyx'
                      ? 'bg-zinc-950/95 border-zinc-200 dark:border-white/10 text-[#0B1020] dark:text-white'
                      : activeTheme === 'neon'
                      ? 'bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 border-purple-500/40 text-[#0B1020] dark:text-white'
                      : 'bg-black/10 dark:bg-white/10 backdrop-blur-xl border-white/20 text-[#0B1020] dark:text-white'
                  }`}>
                    <div className="flex items-center justify-between mb-3">
                      <GradifyLogo size="sm" showText={true} />
                      <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-md bg-[#7C4DFF]/20 text-purple-300">
                        3.88 GPA
                      </span>
                    </div>

                    <div className="p-3 rounded-2xl bg-white/[0.03] border border-zinc-200 dark:border-white/5 space-y-1.5 mb-3">
                      <div className="flex justify-between text-[11px] font-semibold">
                        <span>Weekly Academic Load</span>
                        <span className="text-emerald-400">5 Courses Active</span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-400 to-[#7C4DFF] rounded-full w-[78%]" />
                      </div>
                    </div>

                    <div className="space-y-1.5 mb-3">
                      <div className="text-[10px] uppercase font-bold text-zinc-500 dark:text-zinc-500">Upcoming Deadlines</div>
                      {[
                        { title: 'CS 301 - Algorithm HW', time: 'Tomorrow' },
                        { title: 'PHYS 211 - Wave Lab Report', time: 'Friday' },
                        { title: 'ECON 102 - Case Study', time: 'Next Mon' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between text-xs p-1.5 rounded-lg bg-zinc-900/60">
                          <span className="text-zinc-800 dark:text-zinc-200 text-[11px] truncate">{item.title}</span>
                          <span className="text-zinc-600 dark:text-zinc-400 text-[10px] font-mono">{item.time}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-zinc-200 dark:border-white/10 text-[10px] text-zinc-600 dark:text-zinc-400 flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <Award className="w-3 h-3 text-amber-400" />
                        Summa Cum Laude Track
                      </span>
                      <span>18 / 18 cr</span>
                    </div>
                  </div>
                )}

                {/* LOCK SCREEN WIDGET */}
                {activeSize === 'lockscreen' && (
                  <div className="w-full max-w-[320px] p-4 rounded-3xl bg-zinc-950/80 border border-zinc-200 dark:border-white/10 backdrop-blur-2xl text-[#0B1020] dark:text-white space-y-3 shadow-2xl">
                    <div className="text-center text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                      Lock Screen Accessory Preview
                    </div>

                    {/* Circular Accessory */}
                    <div className="flex items-center justify-around gap-2">
                      <div className="w-16 h-16 rounded-full border-2 border-dashed border-cyan-400/80 p-1 flex flex-col items-center justify-center bg-black/60">
                        <span className="text-[9px] uppercase font-bold text-cyan-300">GPA</span>
                        <span className="text-xs font-black font-mono">3.88</span>
                      </div>

                      {/* Rectangular Inline Accessory */}
                      <div className="flex-1 p-2 rounded-2xl bg-black/5 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs">
                        <div className="text-[10px] font-bold text-amber-400 flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5" />
                          <span>CS 301 HW</span>
                        </div>
                        <div className="text-[11px] text-zinc-700 dark:text-zinc-300 font-semibold truncate">Due in 14h (11:59p)</div>
                      </div>
                    </div>

                    <div className="text-[10px] text-zinc-500 dark:text-zinc-500 text-center">
                      Compatible with iOS Lock Screen Complications & Android Always-on Display
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Home Indicator */}
              <div className="w-32 h-1 bg-white/20 rounded-full mx-auto mt-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
