import React from 'react';
import { Users, Building2, Award, Star, Instagram, Facebook } from 'lucide-react';

export const StatsAndPartners: React.FC = () => {
  return (
    <section className="py-12 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rtl-text">
      <div className="flex flex-col lg:flex-row gap-4">
        
        {/* Partners Block */}
        <div className="lg:w-1/2 p-6 rounded-3xl bg-[#111]/80 backdrop-blur-xl border border-white/5 flex flex-col justify-center">
          <div className="text-sm font-bold text-[#4F8CFF] mb-4 text-center">شركاء النجاح</div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 opacity-70">
            {/* Logos text representation for now as placeholders, using SVGs or text */}
            <div className="font-bold text-lg text-white">BNU</div>
            <div className="font-bold text-lg text-white">IEEE</div>
            <div className="font-bold text-lg text-white">CREATIVA</div>
            <div className="font-bold text-lg text-white">BIDO</div>
            <div className="font-bold text-lg text-white">itida</div>
            <div className="font-bold text-sm text-white">Microsoft<br/>for Startups</div>
            <div className="font-bold text-lg text-white">aws</div>
          </div>
        </div>

        {/* Social Media Block */}
        <div className="lg:w-1/6 p-6 rounded-3xl bg-[#111]/80 backdrop-blur-xl border border-white/5 flex flex-col items-center justify-center">
          <div className="text-sm font-bold text-zinc-300 mb-4">تابعنا علي</div>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/share/1CzjMcZCYc/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-colors">
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a href="https://www.tiktok.com/@gradify.eg?_r=1&_t=ZS-990RTz0ViTZ" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-black border border-white/10 hover:border-white/30 transition-colors">
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 004 15.68a6.34 6.34 0 006.27 6.32 6.32 6.32 0 006.16-5.45l.06-.55V8.12a8.36 8.36 0 003.51 1.09V5.76a4.57 4.57 0 01-1.41.93z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/gradify.eg?igsh=MzA1NXZwcDc2Z3pl" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 hover:opacity-90 transition-opacity">
              <Instagram className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Stats Block */}
        <div className="lg:w-1/3 p-6 rounded-3xl bg-[#111]/80 backdrop-blur-xl border border-white/5 flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-1.5 text-xl font-bold text-white mb-1">
                <Users className="w-5 h-5 text-[#6c35ff]" />
                +10,000
              </div>
              <div className="text-xs text-zinc-400">طالب معنا</div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-1.5 text-xl font-bold text-white mb-1">
                <Building2 className="w-5 h-5 text-[#4F8CFF]" />
                25+
              </div>
              <div className="text-xs text-zinc-400">جامعة</div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-1.5 text-xl font-bold text-white mb-1">
                <Award className="w-5 h-5 text-[#6c35ff]" />
                9+
              </div>
              <div className="text-xs text-zinc-400">شركاء رسميين</div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-1.5 text-xl font-bold text-white mb-1">
                <Star className="w-5 h-5 text-[#4F8CFF]" />
                4.9/5
              </div>
              <div className="text-xs text-zinc-400">تقييم الطلاب</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
