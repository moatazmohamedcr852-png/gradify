import React from 'react';

interface GradifyLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'hero';
  showText?: boolean;
  withGlow?: boolean;
  className?: string;
  badgeText?: string;
}

export const GradifyLogo: React.FC<GradifyLogoProps> = ({
  size = 'md',
  showText = true,
  withGlow = false,
  className = '',
  badgeText,
}) => {
  const sizeMap = {
    sm: { icon: 28, text: 'text-lg', cap: 10 },
    md: { icon: 38, text: 'text-2xl', cap: 14 },
    lg: { icon: 52, text: 'text-3xl', cap: 18 },
    xl: { icon: 72, text: 'text-4xl', cap: 24 },
    '2xl': { icon: 96, text: 'text-5xl', cap: 32 },
    hero: { icon: 130, text: 'text-6xl', cap: 42 },
  };

  const currentSize = sizeMap[size];

  return (
    <div id="gradify-brand-logo" className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className={`relative flex items-center justify-center ${withGlow ? 'group' : ''}`}>
        {withGlow && (
          <div
            aria-hidden="true"
            className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/40 via-purple-600/50 to-pink-500/40 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"
          />
        )}

          <img
            src="/favicon.png"
            alt="Gradify Logo"
            width={currentSize.icon}
            height={currentSize.icon}
            className="relative z-10 transition-transform duration-300 group-hover:scale-105"
          />
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span
              className={`font-['Space_Grotesk',sans-serif] font-bold tracking-tight text-[#0B1020] dark:text-white ${currentSize.text} bg-clip-text`}
            >
              .gradify
            </span>
            {badgeText && (
              <span className="text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-full bg-[#7C4DFF]/10 dark:bg-[#7C4DFF]/20 border border-[#7C4DFF]/20 dark:border-[#7C4DFF]/30 text-[#7C4DFF] dark:text-[#7C4DFF]">
                {badgeText}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
