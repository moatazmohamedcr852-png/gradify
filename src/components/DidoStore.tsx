import React, { useState } from 'react';
import { MessageCircle, Printer, Gift, Users } from 'lucide-react';
import { whatsappLinks } from '../utils/whatsappLinks';

export const DidoStore: React.FC = () => {
  const [expandedBox, setExpandedBox] = useState<string | null>(null);

  const boxes = [
    {
      id: 'doctor',
      icon: '🩺',
      title: 'بوكس طبي',
      englishTitle: "Doctor's Box",
      subtitle: 'كل أدواتك الطبية الأساسية في مكان واحد',
      price: 950,
      originalPrice: 1025,
      contents: [
        'بالطو أبيض طبي',
        'سماعة طبية (Stethoscope)',
        'مطرقة أعصاب (Reflex Hammer)',
        'شوكة رنانة (Tuning Fork)',
      ],
      description: 'جاهز للراوندات والعملي من أول يوم!',
      color: 'from-blue-600/20 to-blue-900/20',
      borderColor: 'border-blue-600/50',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      id: 'engineer',
      icon: '⚙️',
      title: 'بوكس هندسة',
      englishTitle: "Engineer's Box",
      subtitle: 'الورش والمعامل محتاجة استعداد',
      price: 750,
      originalPrice: 850,
      contents: [
        'بالطو أبيض هندسي',
        'بالطو كحلي/أسود',
        'نظارة حماية هندسية (مجانية)',
        'أدوات أساسية للورش',
      ],
      description: 'هديتنا ليك: نظارة حماية هندسية مجاناً! 🥽',
      color: 'from-amber-600/20 to-yellow-900/20',
      borderColor: 'border-amber-600/50',
      buttonColor: 'bg-amber-600 hover:bg-amber-700',
    },
    {
      id: 'friends',
      icon: '👯‍♂️',
      title: 'باكدج الصحاب',
      englishTitle: "Friends' Box",
      subtitle: 'نفس البالطو.. نفس الرحلة!',
      price: 765,
      originalPrice: 850,
      contents: [
        '2 بالطو أساسي',
        'خصم 10% للاثنين معاً',
        'نفس المميزات للصديق',
        'توصيل مجاني',
      ],
      description: 'اطلب انت وصاحبك 2 بالطو واستفيدوا بخصم 10% ليكم إنتوا الاتنين',
      color: 'from-purple-600/20 to-pink-900/20',
      borderColor: 'border-purple-600/50',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
    },
  ];

  const specialOffers = [
    {
      icon: Printer,
      title: 'طباعة مخصصة',
      description: 'بـ 50 جنيه فقط! اطبع اسمك + أي لوجو على سكرابك أو البالطو',
    },
    {
      icon: Gift,
      title: 'طباعة مجانية',
      description: 'لوجو جامعة بنها الأهلية مجاناً على كل منتج',
    },
    {
      icon: Users,
      title: 'توصيل مجاني',
      description: 'للتوصيل المباشر لجامعة بنها الأهلية',
    },
  ];

  return (
    <section id="dido-store" className="py-24 bg-gradient-to-b from-[#0B0C10] to-[#1a1d2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 rtl-text">
          <div className="mb-4 text-6xl animate-pulse">✨</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dido Store
            <span className="text-[#6c35ff]"> - صناديق الجامعة</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            احصل على كل احتياجاتك الأكاديمية في صندوق واحد بأسعار خاصة
          </p>
        </div>

        {/* Main Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {boxes.map((box) => {
            const isExpanded = expandedBox === box.id;
            return (
              <div
                key={box.id}
                className={`group relative rounded-2xl bg-gradient-to-br ${box.color} border ${box.borderColor} p-8 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-[#6c35ff]/20 overflow-hidden`}
                onClick={() => setExpandedBox(isExpanded ? null : box.id)}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Title */}
                  <div className="mb-4">
                    <span className="text-5xl block mb-3">{box.icon}</span>
                    <h3 className="text-2xl font-bold text-white mb-1">{box.title}</h3>
                    <p className="text-sm text-zinc-400">{box.englishTitle}</p>
                  </div>

                  {/* Subtitle */}
                  <p className="text-sm text-zinc-300 mb-6">{box.subtitle}</p>

                  {/* Price Section */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-white">{box.price}</span>
                      <span className="text-sm text-zinc-500 line-through">{box.originalPrice}</span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">جنيه مصري</p>
                  </div>

                  {/* Contents List */}
                  <div className={`mb-6 transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="space-y-2 pb-4">
                      {box.contents.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-zinc-300">
                          <span className="text-[#6c35ff] mt-1">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 mb-6 italic">{box.description}</p>

                  {/* CTA Button */}
                  <a
                    href={whatsappLinks.doctorsBox}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl ${box.buttonColor} text-white font-semibold transition-all duration-300`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>اطلب الآن</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Offers */}
        <div className="mb-20 rtl-text">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">عروض خاصة 🔥</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialOffers.map((offer, idx) => {
              const Icon = offer.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-gradient-to-br from-[#1a1d2e] to-[#0f1119] border border-white/10 hover:border-[#6c35ff]/50 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#6c35ff]/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[#6c35ff]/20">
                      <Icon className="w-6 h-6 text-[#6c35ff]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">✨ {offer.title}</h4>
                      <p className="text-sm text-zinc-400">{offer.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20 pt-20 border-t border-white/10 rtl-text">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">تواصل معنا</h3>
            <p className="text-zinc-400">احصل على المزيد من المعلومات والطلب المباشر</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={whatsappLinks.didoStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-xl bg-green-600/20 border border-green-600/50 hover:bg-green-600/30 transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
              <div className="text-right">
                <div className="text-sm text-zinc-400">Dido Store - 3D Printing</div>
                <div className="font-bold text-white">01009744593</div>
              </div>
            </a>

            <a
              href={whatsappLinks.doctorsBox}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-xl bg-green-600/20 border border-green-600/50 hover:bg-green-600/30 transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
              <div className="text-right">
                <div className="text-sm text-zinc-400">صناديق الجامعة</div>
                <div className="font-bold text-white">+20 11 42669070</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};