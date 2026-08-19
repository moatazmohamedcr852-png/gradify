import React from 'react';
import { Users, BookOpen, Target, TrendingUp } from 'lucide-react';

export const FeaturesRow: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'متابعة شخصية',
      desc: 'مع فريق متخصص',
      color: 'text-[#6c35ff]',
      bg: 'bg-[#6c35ff]/10',
      border: 'border-[#6c35ff]/30'
    },
    {
      icon: BookOpen,
      title: 'نظامك مفهوم',
      desc: 'ببساطة ووضوح',
      color: 'text-[#4F8CFF]',
      bg: 'bg-[#4F8CFF]/10',
      border: 'border-[#4F8CFF]/30'
    },
    {
      icon: Target,
      title: 'قرارات صح',
      desc: 'في الوقت المناسب',
      color: 'text-[#4F8CFF]',
      bg: 'bg-[#4F8CFF]/10',
      border: 'border-[#4F8CFF]/30'
    },
    {
      icon: TrendingUp,
      title: 'تطوير مستمر',
      desc: 'لأعلى أداء',
      color: 'text-purple-400',
      bg: 'bg-purple-400/10',
      border: 'border-purple-400/30'
    }
  ];

  return (
    <section className="relative z-10 -mt-12 mb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 rtl-text">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div 
              key={idx}
              className={`flex items-center gap-4 p-4 md:p-6 rounded-2xl bg-[#111]/80 backdrop-blur-xl border border-white/5 hover:${feature.border} transition-colors group`}
            >
              <div className={`p-3 rounded-xl ${feature.bg} ${feature.color} group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-0.5">{feature.title}</h3>
                <p className="text-sm text-zinc-400">{feature.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
