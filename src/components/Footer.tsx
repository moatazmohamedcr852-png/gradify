import React from 'react';
import { GradifyLogo } from './GradifyLogo';
import { Heart, Github, Twitter, Linkedin, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050507] border-t border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <GradifyLogo size="md" withGlow={false} />
            <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed">
              The all-in-one academic companion engineered for university students worldwide. Precision GPA tracking, intelligent weekly planning, and graduation goal solvers.
            </p>
            <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 border border-zinc-200 dark:border-white/5 text-purple-300">
                v2.4.0 Live
              </span>
              <span className="text-[11px] text-zinc-500 dark:text-zinc-500">Dark Mode Standard</span>
            </div>
          </div>

          {/* Core Modules */}
          <div className="space-y-3">
            <div className="font-bold text-[#0B1020] dark:text-white uppercase tracking-wider text-[11px]">
              Features & Tools
            </div>
            <ul className="space-y-2">
              <li><a href="#gpa-tracker" className="hover:text-[#0B1020] dark:text-white transition">GPA Tracker Engine</a></li>
              <li><a href="#planner" className="hover:text-[#0B1020] dark:text-white transition">Academic Planner</a></li>
              <li><a href="#goal-engine" className="hover:text-[#0B1020] dark:text-white transition">Target Goal Solver</a></li>
              <li><a href="#semester-overview" className="hover:text-[#0B1020] dark:text-white transition">Semester Analytics</a></li>
              <li><a href="#widgets" className="hover:text-[#0B1020] dark:text-white transition">Home & Lock Widgets</a></li>
              <li><a href="#resource-hub" className="hover:text-[#0B1020] dark:text-white transition">Curated Resource Hub</a></li>
            </ul>
          </div>

          {/* Academic Scales */}
          <div className="space-y-3">
            <div className="font-bold text-[#0B1020] dark:text-white uppercase tracking-wider text-[11px]">
              Supported Standards
            </div>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>Standard 4.0 Scale (US / Canada)</li>
              <li>4.33 Scale (With A+ Distinction)</li>
              <li>Weighted Credit Hours Matrix</li>
              <li>Dean's List & Latin Honors</li>
              <li>ECTS & UK Degree Classifications</li>
            </ul>
          </div>

          {/* Privacy & Trust */}
          <div className="space-y-3">
            <div className="font-bold text-[#0B1020] dark:text-white uppercase tracking-wider text-[11px]">
              Student First
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Gradify respects academic privacy. Your course data, transcripts, and study notes remain strictly on your client device.
            </p>
            <div className="pt-2 text-zinc-500 dark:text-zinc-500 text-[11px]">
              Designed with care for university scholars everywhere.
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-zinc-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 dark:text-zinc-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Gradify. All rights reserved. Built for university excellence.
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a href="https://linktr.ee/gradify.egypt" target="_blank" rel="noopener noreferrer" className="hover:text-[#4F8CFF] transition">Linktree</a>
            <a href="https://apps.apple.com/pk/app/gradify-eg/id6789565780" target="_blank" rel="noopener noreferrer" className="hover:text-[#4F8CFF] transition">App Store</a>
            <a href="https://web.facebook.com/people/Gradify/61589312063349/?rdid=Xhy3klbqLUhXm0Dh&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1RVAqVkTpG%2F%3F_rdc%3D1%26_rdr" target="_blank" rel="noopener noreferrer" className="hover:text-[#4F8CFF] transition">Facebook</a>
            <a href="https://www.instagram.com/gradify.eg" target="_blank" rel="noopener noreferrer" className="hover:text-[#4F8CFF] transition">Instagram</a>
            <a href="https://www.tiktok.com/@gradify.eg" target="_blank" rel="noopener noreferrer" className="hover:text-[#4F8CFF] transition">TikTok</a>
            <a href="#hero-section" className="hover:text-zinc-700 dark:text-zinc-300 transition ml-4 border-l border-zinc-200 dark:border-white/10 pl-4">Back to Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
