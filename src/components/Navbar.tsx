import React, { useState, useEffect } from 'react';
import { GradifyLogo } from './GradifyLogo';
import { 
  Calculator, 
  Calendar, 
  Target, 
  BarChart3, 
  LayoutGrid, 
  BookOpen, 
  ArrowRight,
  Menu,
  X,
  Sparkles,
  Sun,
  Moon,
  Zap,
  Facebook,
  Instagram,
  MessageCircle,
  Linkedin,
  Youtube
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    setIsDark(document.documentElement.classList.contains('dark'));
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { label: 'تواصل معنا', href: '#contact' },
    { label: 'شركاؤنا', href: '#partners' },
    { label: 'الأسعار', href: '#pricing' },
    { label: 'خصومات حصريه', href: '#exclusive-discounts', icon: Sparkles },
    { label: 'إيه اللي نساعدك فيه؟', href: '#help' },
    { label: 'المميزات', href: '#features' },
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://facebook.com/share/1CzjMcZCYc/?mibextid=wwXIfr',
      label: 'Facebook',
      color: 'hover:text-blue-600 hover:bg-blue-600/20'
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/gradify.eg?igsh=MzA1NXZwcDc2Z3pl',
      label: 'Instagram',
      color: 'hover:text-pink-600 hover:bg-pink-600/20'
    },
    { 
      icon: MessageCircle, 
      href: 'https://wa.me/201142669070',
      label: 'WhatsApp',
      color: 'hover:text-green-600 hover:bg-green-600/20'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/company/gradify-egypt',
      label: 'LinkedIn',
      color: 'hover:text-blue-500 hover:bg-blue-500/20'
    },
    { 
      icon: Youtube, 
      href: 'https://www.youtube.com/@gradify.egypt',
      label: 'YouTube',
      color: 'hover:text-red-600 hover:bg-red-600/20'
    },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0C10]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar with Social Links */}
        <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/5 rtl-text">
          <div className="flex items-center gap-1 text-xs text-zinc-400">
            <span>تابعنا على</span>
            <div className="flex items-center gap-2 ml-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className={`p-2 rounded-lg transition-all duration-300 ${social.color} text-zinc-400`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-xs text-zinc-500">جامعتك وتعلمنا</span>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex flex-col items-start gap-0.5 group">
            <GradifyLogo size="md" withGlow={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 px-3 py-1.5 rtl-text">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1.5 text-sm font-medium text-zinc-300 hover:text-white transition-colors group"
                >
                  {IconComponent && (
                    <IconComponent className="w-4 h-4 text-[#6c35ff] group-hover:animate-pulse" />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 rtl-text">
            <a
              href="https://gradify-v1.vercel.app/auth/welcome/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-sm font-semibold text-zinc-200 hover:text-white hover:bg-white/[0.05] border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300"
            >
              <span>تسجيل دخول</span>
            </a>

            <a
              href="https://linktr.ee/gradify.egypt"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden flex items-center gap-2 px-8 py-2.5 rounded-xl text-sm font-bold text-white bg-[#6c35ff] hover:opacity-95 shadow-lg shadow-[#6c35ff]/30 transition-all duration-300"
            >
              <span>إبدأ الآن</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-black/5 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:text-[#0B1020] dark:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0C10]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3 mt-2 animate-in slide-in-from-top-4 duration-200 rtl-text">
          {/* Social Links Mobile */}
          <div className="pb-4 border-b border-white/10">
            <p className="text-xs text-zinc-400 mb-3">تابعنا على</p>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className={`p-2 rounded-lg transition-all duration-300 ${social.color} text-zinc-400`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-3 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/10"
                >
                  {IconComponent && (
                    <IconComponent className="w-4 h-4 text-[#6c35ff]" />
                  )}
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-3 mt-4 border-t border-white/10 pt-4">
            <a
              href="https://gradify-v1.vercel.app/auth/welcome/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl text-sm font-semibold text-zinc-200 border border-zinc-700/50 flex items-center justify-center"
            >
              تسجيل دخول
            </a>
            <a
              href="https://linktr.ee/gradify.egypt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl text-sm font-bold text-white bg-[#6c35ff] shadow-lg shadow-[#6c35ff]/30 flex items-center justify-center"
            >
              إبدأ الآن
            </a>
          </div>
        </div>
      )}
    </header>
  );
};