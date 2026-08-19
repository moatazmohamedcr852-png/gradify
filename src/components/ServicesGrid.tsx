import React from 'react';
import { BarChart3, User, Calculator, AlertTriangle, ClipboardList, Tag, Users } from 'lucide-react';

export const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: Users,
      title: 'مجتمع وموارد',
      desc: 'انضم لمجتمع طلاب متعاون ومكتبة موارد قوية',
    },
    {
      icon: Tag,
      title: 'خصومات حصرية',
      desc: 'على كورسات خارجية وأدوات ومستلزمات الجامعة.',
    },
    {
      icon: ClipboardList,
      title: 'خطة تحسين الأداء',
      desc: 'خطة مخصصة لرفع مستواك خطوة بخطوة.',
    },
    {
      icon: AlertTriangle,
      title: 'مؤشر المخاطر الذكي',
      desc: 'ينبهك قبل أي مشكلة عشان تكون مستعد دايماً.',
    },
    {
      icon: Calculator,
      title: 'محاكاة الـGPA',
      desc: 'اعرف تأثير كل مقرر على معدلك واتخذ قرارات أفضل.',
    },
    {
      icon: User,
      title: 'متابعة شخصية',
      desc: 'فريق متخصص يتابع معاك ويوجهك حسب احتياجك.',
    },
    {
      icon: BarChart3,
      title: 'متابعة أكاديمية ذكية',
      desc: 'تابع درجاتك، حضورك، ومهامك كلها في مكان واحد.',
    }
  ];

  return (
    <section className="py-16 relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center rtl-text">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        إنت بتاخد إيه مع <span className="text-[#6c35ff]">Gradify</span>؟
      </h2>
      <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12">
        كل الأدوات اللي هتحتاجها عشان تفهم. تتابع. تطور مستواك الجامعي.
      </p>

      {/* Grid container with horizontal scroll on small screens, flex wrap on large */}
      <div className="flex overflow-x-auto lg:flex-wrap justify-center gap-4 pb-8 snap-x snap-mandatory hide-scrollbar">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div 
              key={idx}
              className="flex-none w-64 lg:flex-1 lg:min-w-[160px] p-6 rounded-3xl bg-[#111]/80 backdrop-blur-xl border border-white/5 hover:border-[#6c35ff]/30 transition-all group snap-center flex flex-col items-center text-center"
            >
              <div className="mb-4">
                <Icon className="w-8 h-8 text-[#6c35ff] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">{service.title}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{service.desc}</p>
            </div>
          );
        })}
      </div>
      
      {/* Hide scrollbar styling inline for this component */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
