import React from 'react';
import { X, Download, Smartphone, Apple, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { GradifyLogo } from './GradifyLogo';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg p-6 sm:p-8 rounded-[36px] bg-[#0c0c11] border border-zinc-300 dark:border-white/15 shadow-2xl space-y-6 text-center relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 text-zinc-600 dark:text-zinc-400 hover:text-[#0B1020] dark:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex justify-center pt-2">
          <GradifyLogo size="lg" withGlow={true} />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-extrabold text-[#0B1020] dark:text-white font-['Space_Grotesk']">
            Get Gradify for iOS & Android
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-xs mx-auto">
            Take control of your academic journey. Free for university scholars.
          </p>
        </div>

        {/* Platform Buttons */}
        <div className="space-y-3 pt-2">
          <button
            onClick={() => {
              alert('Gradify iOS client simulator: In a production App Store environment, this links to the TestFlight / App Store listing!');
            }}
            className="w-full py-3.5 px-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-200 dark:border-white/10 text-[#0B1020] dark:text-white font-semibold text-xs flex items-center justify-between group transition"
          >
            <div className="flex items-center gap-3">
              <Apple className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />
              <div className="text-left">
                <div className="text-[10px] text-zinc-600 dark:text-zinc-400">Download on the</div>
                <div className="text-xs font-bold text-[#0B1020] dark:text-white">Apple App Store</div>
              </div>
            </div>
            <span className="text-[11px] text-[#7C4DFF] group-hover:translate-x-0.5 transition-transform">iOS 16+ →</span>
          </button>

          <button
            onClick={() => {
              alert('Gradify Android client simulator: In a production environment, this opens Google Play Store listing!');
            }}
            className="w-full py-3.5 px-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-200 dark:border-white/10 text-[#0B1020] dark:text-white font-semibold text-xs flex items-center justify-between group transition"
          >
            <div className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-emerald-400" />
              <div className="text-left">
                <div className="text-[10px] text-zinc-600 dark:text-zinc-400">Get it on</div>
                <div className="text-xs font-bold text-[#0B1020] dark:text-white">Google Play Store</div>
              </div>
            </div>
            <span className="text-[11px] text-emerald-400 group-hover:translate-x-0.5 transition-transform">Android 12+ →</span>
          </button>
        </div>

        {/* Features check */}
        <div className="pt-4 border-t border-zinc-200 dark:border-white/10 flex items-center justify-around text-[10px] text-zinc-600 dark:text-zinc-400">
          <span className="flex items-center gap-1 text-zinc-700 dark:text-zinc-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            No Ads or Subscriptions
          </span>
          <span className="flex items-center gap-1 text-zinc-700 dark:text-zinc-300">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            Offline-First Data
          </span>
        </div>
      </div>
    </div>
  );
};
