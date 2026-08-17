import React from 'react';
import { Star, Quote, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Maya Lin',
      major: 'Computer Science & Mathematics',
      university: 'Stanford University',
      gpa: '3.96 GPA',
      avatar: '👩‍💻',
      quote:
        'Gradify was the single reason I achieved Dean’s High Honors junior year. The reverse Goal Engine told me the exact minimum grades I needed across 19 credits so I never wasted energy over-studying low-weight electives.',
    },
    {
      name: 'Julian Vance',
      major: 'Pre-Med & Molecular Biology',
      university: 'Johns Hopkins University',
      gpa: '3.92 GPA',
      avatar: '🧬',
      quote:
        'Between organic chemistry labs and clinical hours, my schedule was chaotic. The lock screen widgets keep my upcoming exam countdowns in view all day. It replaced three separate apps.',
    },
    {
      name: 'Ethan Ross',
      major: 'Finance & Econometrics',
      university: 'NYU Stern',
      gpa: '3.89 GPA',
      avatar: '📈',
      quote:
        'The cumulative semester analytics gave me the exact transcript projections I needed when applying for investment banking summer internships. Sleekest dark mode academic app built.',
    },
  ];

  const universities = [
    'Stanford',
    'MIT',
    'Harvard',
    'UC Berkeley',
    'Oxford',
    'NYU',
    'U of Toronto',
    'Georgia Tech',
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#0B1020] border-t border-zinc-200 dark:border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* University Logos ticker */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-xs uppercase font-bold tracking-widest text-zinc-500 dark:text-zinc-500">
            Empowering students at leading institutions worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-70">
            {universities.map((uni, i) => (
              <span
                key={i}
                className="text-sm sm:text-base font-bold font-['Space_Grotesk'] text-zinc-600 dark:text-zinc-400 hover:text-[#0B1020] dark:text-white transition-colors"
              >
                {uni}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-200 dark:border-white/10 backdrop-blur-xl flex flex-col justify-between space-y-4 hover:border-purple-500/40 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold font-mono text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    {t.gpa}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-zinc-200 dark:border-white/5">
                <div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-lg border border-zinc-200 dark:border-white/10">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B1020] dark:text-white">{t.name}</div>
                  <div className="text-[10px] text-zinc-600 dark:text-zinc-400">{t.major}</div>
                  <div className="text-[10px] text-[#7C4DFF] font-semibold">{t.university}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
