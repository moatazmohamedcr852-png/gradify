import React from 'react';
import { InteractiveAppMockup } from './InteractiveAppMockup';
import { Play, ArrowLeft, Star } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero-section" 
      className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#0B0C10] bg-grid-pattern"
    >
      {/* Dynamic ambient gradient glow spheres */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#6c35ff]/20 via-[#4F8CFF]/10 to-transparent rounded-full blur-[120px] pointer-events-none"
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 -left-32 w-96 h-96 bg-[#7C4DFF]/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8 justify-between">
          
          {/* Right Column (Visuals - Phone Mockup) */}
          <div className="lg:w-5/12 flex justify-center lg:justify-end relative">
            <InteractiveAppMockup />
          </div>

          {/* Left Column (Text Content) */}
          <div className="lg:w-6/12 space-y-8 text-right rtl-text">
            
            {/* Student social proof banner */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex -space-x-3 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0B0C10] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0B0C10] object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0B0C10] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64" alt="" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0B0C10] object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=64&h=64" alt="" />
              </div>
              
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              
              <span className="text-sm text-zinc-300">
                Gradify +10,000 طالب بيثقوا في رحلتهم مع
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight font-['Cairo']">
                متدخلش الجامعة <br />
                <span className="text-[#6c35ff]">تايه.</span>
              </h1>

              <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-200">
                معاك من أول يوم لحد التخرج.
              </h2>

              <p className="text-base sm:text-lg text-zinc-400 max-w-xl font-normal leading-relaxed">
                نفهمك نظام وأعمال GPA والسنوات جامعتك، نتابع مستواك معاك شخصياً، 
                ونساعدك تعرف إمتى إنذار لأزم تتحرك قبل ما درجاتك تضيع.
              </p>
            </div>

            {/* Quick Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                className="group px-8 py-4 rounded-xl text-lg font-bold text-white bg-[#6c35ff] hover:opacity-95 shadow-lg shadow-[#6c35ff]/30 active:scale-95 transition-all duration-200 flex items-center gap-2"
              >
                <span>ابدأ رحلتك مع Gradify</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </button>

              <button
                className="px-8 py-4 rounded-xl text-lg font-semibold text-zinc-200 hover:text-white hover:bg-white/[0.05] border border-zinc-700/50 hover:border-zinc-500 active:scale-95 transition-all duration-200 flex items-center gap-3"
              >
                <div className="p-1 rounded-full border border-zinc-500">
                  <Play className="w-3 h-3 fill-current" />
                </div>
                <span>اعرف إزاي Gradify هيساعدني</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
