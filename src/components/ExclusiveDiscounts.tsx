import React from 'react';
import { 
  Code2, 
  Cpu, 
  Wrench, 
  Zap,
  MessageCircle,
  ChevronRight
} from 'lucide-react';
import { whatsappLinks } from '../utils/whatsappLinks';

export const ExclusiveDiscounts: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: 'Mindcraft Courses',
      description: 'Build • Code • Create',
      icon: Code2,
      courses: ['Programming Fundamentals', 'Web Development', 'Game Development'],
      image: '/mind_craft.jpeg',
    },
    {
      id: 2,
      title: 'C++ Courses',
      description: 'Master modern C++ programming',
      icon: Code2,
      courses: ['C++ Basics', 'Advanced C++', 'Competitive Programming'],
    },
    {
      id: 3,
      title: 'IoT & Arduino',
      description: 'Internet of Things Development',
      icon: Cpu,
      courses: ['Arduino Basics', 'Smart Home Projects', 'IoT Systems'],
    },
    {
      id: 4,
      title: 'SolidWorks',
      description: '3D Design & CAD',
      icon: Wrench,
      courses: ['Basic 3D Modeling', 'Advanced Assembly', 'Technical Drawings'],
    },
    {
      id: 5,
      title: 'PCB Design',
      description: 'Circuit Board Design',
      icon: Zap,
      courses: ['Circuit Design', 'PCB Layout', 'Manufacturing Basics'],
    },
  ];

  return (
    <section id="exclusive-discounts" className="py-24 bg-[#0B0C10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 rtl-text">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            خصومات حصريه
            <span className="text-[#6c35ff]"> لطلابك</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            احصل على أفضل الدورات بأسعار خاصة وحصرية لطلاب جامعتك
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <div
                key={course.id}
                className="group relative rounded-2xl bg-gradient-to-br from-[#1a1d2e] to-[#0f1119] border border-white/10 hover:border-[#6c35ff]/50 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-[#6c35ff]/20 overflow-hidden"
              >
                {/* Image Section */}
                {course.image && (
                  <div className="mb-6 rounded-xl overflow-hidden h-40 bg-gradient-to-br from-[#6c35ff]/20 to-transparent flex items-center justify-center">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6c35ff]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 inline-flex p-3 rounded-xl bg-[#6c35ff]/20 group-hover:bg-[#6c35ff]/30 transition-colors">
                    <IconComponent className="w-8 h-8 text-[#6c35ff]" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                  <p className="text-zinc-400 text-sm mb-6">{course.description}</p>

                  {/* Courses List */}
                  <div className="space-y-2 mb-8">
                    {course.courses.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-zinc-300">
                        <ChevronRight className="w-4 h-4 text-[#6c35ff] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={whatsappLinks.mindcraft}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#6c35ff] hover:bg-[#6c35ff]/90 text-white font-semibold transition-all duration-300 w-full justify-center group/btn"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>استفسر الآن</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Information */}
        <div className="mt-16 pt-16 border-t border-white/10 rtl-text">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">للمزيد من المعلومات</h3>
            <p className="text-zinc-400">تواصل معنا عبر الواتس اب</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappLinks.mindcraft}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-xl bg-green-600/20 border border-green-600/50 hover:bg-green-600/30 transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
              <div className="text-right">
                <div className="text-sm text-zinc-400">اتصل بنا</div>
                <div className="font-bold text-white">20 12 75472765</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};