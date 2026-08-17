import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Calculator, 
  Calendar, 
  Target, 
  BarChart3, 
  ShieldCheck, 
  Download,
  Star,
  Users,
  CheckCircle2,
  TrendingUp,
  Award,
  Apple,
  Smartphone
} from 'lucide-react';
import { GradifyLogo } from './GradifyLogo';
import { InteractiveAppMockup } from './InteractiveAppMockup';

interface HeroSectionProps {
  onOpenQuickGpa?: () => void;
  onOpenDownload?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuickGpa, onOpenDownload }) => {
  return (
    <section 
      id="hero-section" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white dark:bg-[#0B1020] bg-grid-pattern"
    >
      {/* Dynamic ambient gradient glow spheres */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-indigo-900/30 via-purple-900/25 to-pink-900/20 rounded-full blur-[120px] pointer-events-none"
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 -left-32 w-96 h-96 bg-cyan-900/20 rounded-full blur-[100px] pointer-events-none"
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 -right-32 w-96 h-96 bg-fuchsia-900/20 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Typography and Calls to Action */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#7C4DFF]/30 backdrop-blur-md shadow-lg shadow-purple-500/5">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300">
                The New Standard in Academic Intelligence
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1020] dark:text-white leading-[1.15] font-['Space_Grotesk']">
                Track your GPA, plan your semester, and{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  stay on top of your academic journey
                </span>{' '}
                — all in one place.
              </h1>

              <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 max-w-2xl font-normal leading-relaxed">
                <strong className="text-[#0B1020] dark:text-white font-semibold">Gradify</strong> is your all-in-one academic companion designed for university students. Calculate instant standing, orchestrate weekly deadlines, and hit your graduation goals with mathematical precision.
              </p>
            </div>

            {/* Quick Action buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="https://apps.apple.com/pk/app/gradify-eg/id6789565780"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-200 dark:border-white/10 shadow-xl active:scale-95 transition-all duration-200 flex items-center gap-2.5"
              >
                <Apple className="w-5 h-5" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] font-medium text-zinc-400">Download on the</div>
                  <div>App Store</div>
                </div>
              </a>

              <a
                href="#"
                onClick={(e) => {
                  if (e.currentTarget.getAttribute('href') === '#') {
                    e.preventDefault();
                    alert('Google Play link coming soon!');
                  }
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-200 dark:border-white/10 shadow-xl active:scale-95 transition-all duration-200 flex items-center gap-2.5"
              >
                <Smartphone className="w-5 h-5 text-emerald-400" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] font-medium text-zinc-400">Get it on</div>
                  <div>Google Play</div>
                </div>
              </a>

              <button
                id="hero-live-calc-btn"
                onClick={onOpenQuickGpa}
                className="px-6 py-3.5 rounded-2xl text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-white/[0.05] hover:bg-white/[0.1] border border-zinc-200 dark:border-white/10 hover:border-white/20 active:scale-95 transition-all duration-200 flex items-center gap-2 shadow-sm backdrop-blur-md"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Launch Interactive Demo</span>
              </button>
            </div>

            {/* Student social proof & universities banner */}
            <div className="pt-6 border-t border-zinc-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 overflow-hidden">
                  {['🎓', '📚', '⚡', '🌟'].map((emoji, i) => (
                    <div
                      key={i}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 border-2 border-[#070709] text-xs font-bold shadow"
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
                <div className="text-left text-xs">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                    <span className="font-bold text-[#0B1020] dark:text-white ml-1.5">4.9 / 5.0</span>
                  </div>
                  <span className="text-zinc-600 dark:text-zinc-400">Trusted by 65,000+ university scholars</span>
                </div>
              </div>

              {/* Verified Features mini checklist */}
              <div className="hidden sm:flex items-center gap-4 text-xs text-zinc-600 dark:text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Instant 4.0 & 4.33 Scale
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  Home Widgets
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Device Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <InteractiveAppMockup />
          </div>
        </div>

        {/* Feature quick ribbon */}
        <div className="mt-20 pt-8 border-t border-zinc-200 dark:border-white/10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { title: 'GPA Tracker', desc: 'Real-time calculation', icon: Calculator, href: '#gpa-tracker', color: 'text-[#4F8CFF]' },
            { title: 'Academic Planner', desc: 'Smart weekly deadlines', icon: Calendar, href: '#planner', color: 'text-cyan-400' },
            { title: 'Goal Engine', desc: 'Target grade solver', icon: Target, href: '#goal-engine', color: 'text-pink-400' },
            { title: 'Semester Overview', desc: 'Trend analytics & charts', icon: BarChart3, href: '#semester-overview', color: 'text-[#7C4DFF]' },
            { title: 'Home Widgets', desc: 'Lock & home screen glances', icon: Award, href: '#widgets', color: 'text-amber-400' },
            { title: 'Resource Hub', desc: 'Curated study blueprints', icon: Sparkles, href: '#resource-hub', color: 'text-emerald-400' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.href}
                className="group p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-zinc-200 dark:border-white/5 hover:border-[#7C4DFF]/30 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-xl bg-black/5 dark:bg-white/5 ${item.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <ArrowRight className="w-3 h-3 text-zinc-600 group-hover:text-[#0B1020] dark:text-white group-hover:translate-x-0.5 transition-all" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B1020] dark:text-white group-hover:text-purple-200 transition-colors">{item.title}</div>
                  <div className="text-[11px] text-zinc-600 dark:text-zinc-400">{item.desc}</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
