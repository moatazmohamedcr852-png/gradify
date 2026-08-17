import React, { useState } from 'react';
import { 
  Download, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  ShieldCheck,
  Smartphone,
  Apple
} from 'lucide-react';
import { GradifyLogo } from './GradifyLogo';

interface CtaSectionProps {
  onOpenQuickGpa?: () => void;
  onOpenDownload?: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenQuickGpa, onOpenDownload }) => {
  return (
    <section className="py-24 bg-white dark:bg-[#0B1020] border-t border-zinc-200 dark:border-white/5 relative overflow-hidden">
      {/* Background radial glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/25 to-pink-600/20 rounded-full blur-[160px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 rounded-[40px] bg-gradient-to-b from-zinc-900/90 via-zinc-950/95 to-black border border-zinc-300 dark:border-white/15 shadow-2xl backdrop-blur-2xl text-center space-y-8 relative overflow-hidden">
          {/* Logo centerpiece */}
          <div className="flex justify-center">
            <GradifyLogo size="lg" withGlow={true} />
          </div>

          {/* Main User Prompt Closing Text */}
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1020] dark:text-white font-['Space_Grotesk'] tracking-tight leading-tight">
              Whether you're aiming for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-400 to-[#7C4DFF]">
                Dean's List
              </span>{' '}
              or just trying to stay on track, Gradify gives you the clarity and tools to succeed.
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Join thousands of university scholars who trust Gradify for semester planning, real-time GPA tracking, and graduation confidence.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://apps.apple.com/pk/app/gradify-eg/id6789565780"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-2xl text-sm font-bold text-[#0B1020] bg-white hover:bg-zinc-100 shadow-xl active:scale-95 transition-all flex items-center gap-2.5"
            >
              <Apple className="w-5 h-5" />
              <div className="text-left leading-tight">
                <div className="text-[10px] font-medium text-zinc-500">Download on the</div>
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
              className="px-6 py-4 rounded-2xl text-sm font-bold text-[#0B1020] bg-white hover:bg-zinc-100 shadow-xl active:scale-95 transition-all flex items-center gap-2.5"
            >
              <Smartphone className="w-5 h-5 text-emerald-500" />
              <div className="text-left leading-tight">
                <div className="text-[10px] font-medium text-zinc-500">Get it on</div>
                <div>Google Play</div>
              </div>
            </a>

            <button
              onClick={onOpenQuickGpa}
              className="px-6 py-4 rounded-2xl text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 border border-zinc-200 dark:border-white/10 active:scale-95 transition flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Open Online GPA Calculator</span>
            </button>
          </div>

          {/* Guarantee bullet points */}
          <div className="pt-6 border-t border-zinc-200 dark:border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-600 dark:text-zinc-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Free Core Student Features
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Private & Local Device Storage
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              100% Registrar Grade Compatible
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
