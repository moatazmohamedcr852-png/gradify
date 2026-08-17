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
  Download,
  Sun,
  Moon
} from 'lucide-react';

interface NavbarProps {
  onOpenQuickGpa?: () => void;
  onOpenDownload?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuickGpa, onOpenDownload }) => {
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
    { label: 'GPA Tracker', href: '#gpa-tracker', icon: Calculator },
    { label: 'Planner', href: '#planner', icon: Calendar },
    { label: 'Goal Engine', href: '#goal-engine', icon: Target },
    { label: 'Semester Overview', href: '#semester-overview', icon: BarChart3 },
    { label: 'Widgets', href: '#widgets', icon: LayoutGrid },
    { label: 'Resource Hub', href: '#resource-hub', icon: BookOpen },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-[#0B1020]/80 backdrop-blur-xl border-b border-zinc-200 dark:border-white/10 shadow-2xl shadow-black/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <GradifyLogo size="md" withGlow={true} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-[#0B1020] dark:text-white hover:bg-white/[0.08] transition-colors"
              >
                <Icon className="w-3.5 h-3.5 text-[#4F8CFF]" />
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            id="nav-quick-calc-btn"
            onClick={onOpenQuickGpa}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-zinc-800 dark:text-zinc-200 bg-white/[0.05] hover:bg-white/[0.1] border border-zinc-200 dark:border-white/10 transition duration-200"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Demo</span>
          </button>

          <button
            id="nav-get-app-btn"
            onClick={onOpenDownload}
            className="relative group overflow-hidden flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#0B1020] dark:text-white bg-gradient-to-r from-[#4F8CFF] via-purple-500 to-pink-500 hover:opacity-95 shadow-lg shadow-purple-500/20 active:scale-95 transition duration-200"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Get Gradify</span>
          </button>
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

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0f]/95 backdrop-blur-2xl border-b border-zinc-200 dark:border-white/10 px-4 pt-3 pb-6 space-y-3 mt-2 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.03] border border-zinc-200 dark:border-white/5 text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:bg-black/10 dark:bg-white/10"
                >
                  <Icon className="w-4 h-4 text-[#7C4DFF]" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuickGpa?.();
              }}
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-zinc-800 dark:text-zinc-200 bg-black/5 dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Try Live GPA Demo
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload?.();
              }}
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-[#0B1020] dark:text-white bg-gradient-to-r from-[#4F8CFF] to-pink-500 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20"
            >
              <Download className="w-4 h-4" />
              Get Gradify App
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
