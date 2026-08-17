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

        <svg
          width={currentSize.icon}
          height={currentSize.icon}
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 drop-shadow-[0_8px_16px_rgba(139,92,246,0.3)] transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            {/* Main vibrant G loop gradient */}
            <linearGradient id="gradifyGradMain" x1="10" y1="110" x2="110" y2="10" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="25%" stopColor="#06B6D4" />
              <stop offset="55%" stopColor="#8B5CF6" />
              <stop offset="80%" stopColor="#D946EF" />
              <stop offset="100%" stopColor="#F43F5E" />
            </linearGradient>

            {/* Subtle inner shadow / depth gradient */}
            <linearGradient id="gradifyGlow" x1="40" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FDA4AF" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#C084FC" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.8" />
            </linearGradient>

            <filter id="logoShadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#4C1D95" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Background smooth circle aura for contrast */}
          <circle cx="60" cy="60" r="54" fill="#0D0D12" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />

          {/* Stylized ribbon letter 'G' path */}
          <path
            d="M 68 20 
               C 92 20, 106 36, 106 58 
               C 106 82, 86 102, 58 102 
               C 30 102, 14 82, 14 58 
               C 14 36, 30 20, 54 20 
               C 62 20, 68 22, 74 26"
            stroke="url(#gradifyGradMain)"
            strokeWidth="16"
            strokeLinecap="round"
            fill="none"
            filter="url(#logoShadow)"
          />

          {/* Inner horizontal crossbar / terminal of G leading into the graduation cap */}
          <path
            d="M 60 62 L 94 62"
            stroke="url(#gradifyGradMain)"
            strokeWidth="15"
            strokeLinecap="round"
          />

          {/* Inside Trendline / Growth Chart Line in Cyan with Arrowhead */}
          <g transform="translate(30, 36)">
            {/* Chart line path */}
            <path
              d="M 2 24 L 11 15 L 18 20 L 29 6"
              stroke="#38BDF8"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-pulse"
            />
            {/* Arrowhead */}
            <path
              d="M 22 6 L 29 6 L 29 13"
              stroke="#38BDF8"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Little glowing datapoints */}
            <circle cx="2" cy="24" r="2.5" fill="#38BDF8" />
            <circle cx="11" cy="15" r="2.5" fill="#38BDF8" />
            <circle cx="18" cy="20" r="2.5" fill="#38BDF8" />
            <circle cx="29" cy="6" r="3" fill="#FFFFFF" />
          </g>

          {/* Graduation Mortarboard Cap Silhouette on the G crossbar */}
          <g transform="translate(68, 50)">
            {/* Cap Diamond */}
            <polygon
              points="14,0 28,6 14,12 0,6"
              fill="#FFFFFF"
              className="drop-shadow-sm"
            />
            {/* Cap Underneath Skullcap */}
            <path
              d="M 6 8.5 L 6 15 C 6 18, 22 18, 22 15 L 22 8.5 Z"
              fill="#F1F5F9"
            />
            {/* Cap Tassel */}
            <path
              d="M 14 6 Q 26 8, 26 18"
              stroke="#FDE047"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="26" cy="18" r="1.5" fill="#FDE047" />
          </g>
        </svg>
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
