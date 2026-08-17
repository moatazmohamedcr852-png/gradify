import React, { useState } from 'react';
import { 
  BookOpen, 
  Brain, 
  Calculator, 
  GraduationCap, 
  Mail, 
  Sparkles, 
  Award, 
  ArrowUpRight, 
  Search, 
  Check, 
  X,
  FileDown
} from 'lucide-react';
import { ResourceItem } from '../types';
import { RESOURCE_ITEMS } from '../data/mockData';

export const ResourceHubSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalItem, setActiveModalItem] = useState<ResourceItem | null>(null);
  const [copiedScript, setCopiedScript] = useState(false);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Brain':
        return Brain;
      case 'Calculator':
        return Calculator;
      case 'GraduationCap':
        return GraduationCap;
      case 'Mail':
        return Mail;
      case 'Sparkles':
        return Sparkles;
      case 'Award':
        return Award;
      default:
        return BookOpen;
    }
  };

  const filteredResources = RESOURCE_ITEMS.filter((item) => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleCopyScript = () => {
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  return (
    <section 
      id="resource-hub" 
      className="py-24 bg-white dark:bg-[#0B1020] border-t border-zinc-200 dark:border-white/5 relative overflow-hidden"
    >
      {/* Background glow */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            University Resource Hub
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1020] dark:text-white font-['Space_Grotesk'] tracking-tight">
            Access curated academic resources, study tips, and learning materials tailored for university students.
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Engineered specifically for undergraduate and graduate coursework. Master evidence-based study cadences, optimize credit loads, and communicate professionally with faculty.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-zinc-900/80 border border-zinc-200 dark:border-white/10 text-xs">
            {[
              { id: 'all', label: 'All Resources' },
              { id: 'study', label: 'Cognitive Study' },
              { id: 'gpa', label: 'GPA Mathematics' },
              { id: 'exam', label: 'Exam Strategy' },
              { id: 'templates', label: 'Email Templates' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl font-medium transition ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:text-zinc-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-zinc-500 dark:text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search guides, formulas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-zinc-900 border border-zinc-200 dark:border-white/10 text-xs text-[#0B1020] dark:text-white placeholder-zinc-500 focus:border-emerald-500 outline-none"
            />
          </div>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((item) => {
            const Icon = getIcon(item.iconName);
            return (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="group p-6 rounded-3xl bg-zinc-900/60 hover:bg-zinc-900/90 border border-zinc-200 dark:border-white/10 hover:border-emerald-500/40 backdrop-blur-xl transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 hover:-translate-y-1 shadow-xl hover:shadow-emerald-950/20"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
                      {item.readTime}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                      {item.tag}
                    </span>
                    <h3 className="text-base font-bold text-[#0B1020] dark:text-white group-hover:text-emerald-300 transition-colors mt-0.5 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-200 dark:border-white/5 flex items-center justify-between text-xs text-emerald-400 font-semibold group-hover:text-emerald-300">
                  <span>Read Guide & Blueprint</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="w-full max-w-xl p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0e0e13] border border-emerald-500/30 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  {activeModalItem.tag} • {activeModalItem.readTime}
                </span>
                <h3 className="text-xl font-bold text-[#0B1020] dark:text-white mt-1">
                  {activeModalItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="p-2 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 text-zinc-600 dark:text-zinc-400 hover:text-[#0B1020] dark:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {activeModalItem.description}
            </p>

            {/* Key takeaways */}
            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-200 dark:border-white/10 space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
                Key Strategic Principles:
              </div>
              <ul className="space-y-2">
                {activeModalItem.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="text-xs text-zinc-700 dark:text-zinc-300 flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={handleCopyScript}
                className="px-4 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 border border-zinc-200 dark:border-white/10 text-xs font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-2 transition"
              >
                {copiedScript ? <Check className="w-4 h-4 text-emerald-400" /> : <FileDown className="w-4 h-4" />}
                <span>{copiedScript ? 'Copied to Clipboard!' : 'Save Key Takeaways'}</span>
              </button>

              <button
                onClick={() => setActiveModalItem(null)}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black text-xs font-bold shadow-lg shadow-emerald-500/20 transition"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
