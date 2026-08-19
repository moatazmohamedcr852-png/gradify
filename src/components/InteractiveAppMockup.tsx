import React, { useState } from 'react';
import { 
  Calculator, 
  Calendar, 
  Target, 
  BarChart3, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ChevronLeft,
  TrendingUp,
  Award,
  Bell,
  BookOpen,
  Home,
  LayoutGrid,
  MoreHorizontal
} from 'lucide-react';
import { GradifyLogo } from './GradifyLogo';

export const InteractiveAppMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'planner' | 'features' | 'more'>('overview');

  return (
    <div id="interactive-app-mockup" className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] rtl-text">
      {/* Glow aura behind phone */}
      <div 
        aria-hidden="true" 
        className="absolute -inset-4 bg-gradient-to-tr from-[#6c35ff]/30 via-[#4F8CFF]/10 to-transparent rounded-[48px] blur-3xl opacity-80 pointer-events-none"
      />

      {/* Phone chassis */}
      <div className="relative rounded-[40px] p-3 bg-[#111] border border-white/10 shadow-2xl shadow-purple-900/20">
        {/* Dynamic Island / Speaker Notch */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full flex items-center justify-between px-3 z-30 shadow-inner">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-800/90 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-[#6c35ff] animate-pulse" />
          </div>
          <div className="w-2 h-2 rounded-full bg-zinc-800" />
        </div>

        {/* Screen container */}
        <div className="relative rounded-[32px] overflow-hidden bg-[#0A0C10] border border-white/5 pt-10 pb-4 px-4 flex flex-col min-h-[640px]">
          
          {/* Top Bar Navigation */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-1.5">
              <GradifyLogo size="sm" showText={true} />
            </div>
            <button className="p-1.5 rounded-full bg-white/5 text-zinc-400">
              <Bell className="w-4 h-4" />
            </button>
          </div>

          {/* User Welcome */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-xl font-bold text-white flex items-center gap-2">
                مرحباً أحمد 👋
              </div>
              <div className="text-sm text-zinc-400 mt-0.5">
                السنة الثانية - هندسة
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden ring-2 ring-zinc-800">
               <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="Avatar" className="w-full h-full object-cover"/>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 space-y-4 overflow-y-auto pl-1">
            
            {/* GPA Card */}
            <div className="relative rounded-2xl p-5 bg-gradient-to-bl from-[#18192A] to-[#0A0C10] border border-white/5 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6c35ff]/20 to-transparent rounded-bl-full pointer-events-none" />
              
              <div className="text-sm font-medium text-zinc-400 mb-2">
                الحالي GPA
              </div>
              <div className="flex items-end justify-between">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold text-white font-mono tracking-tight">3.80</span>
                  <span className="text-sm text-zinc-500 font-mono">/4.00</span>
                </div>
              </div>
              
              {/* Simple Chart visualization */}
              <div className="h-12 w-full mt-4 flex items-end justify-between gap-1">
                {[30, 45, 35, 60, 50, 80, 65, 90].map((h, i) => (
                  <div key={i} className="w-full bg-[#6c35ff]/20 rounded-t-sm" style={{ height: `${h}%` }}>
                    <div className="w-full bg-[#6c35ff] rounded-t-sm" style={{ height: '3px' }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Widgets */}
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-xs text-zinc-400 mb-1">متابعتك الأسبوعية</div>
                  <div className="text-sm font-bold text-white">تمت بنجاح</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-xs text-zinc-400 mb-1">خطتك القادمة</div>
                  <div className="text-sm font-bold text-white">مراجعة أعمال السنة</div>
                  <div className="text-xs text-[#4F8CFF] mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    الأحد 7:00 م
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#4F8CFF]/10 flex items-center justify-center text-[#4F8CFF]">
                  <Calendar className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Courses List */}
            <div className="pt-2">
              <div className="flex items-center justify-between text-sm font-bold text-white mb-3">
                <span>المقررات الحالية</span>
                <span className="text-xs text-zinc-500 font-normal flex items-center gap-1 cursor-pointer hover:text-zinc-300 transition-colors">
                  <ChevronLeft className="w-3 h-3" />
                  عرض الكل
                </span>
              </div>
              
              <div className="space-y-2.5">
                {[
                  { name: 'رياضيات هندسية', grade: 'A', gpa: '3.7', col: 'bg-emerald-500/20 text-emerald-400' },
                  { name: 'فيزياء عامة', grade: 'B+', gpa: '3.3', col: 'bg-cyan-500/20 text-cyan-400' },
                  { name: 'برمجة 2', grade: 'A-', gpa: '3.6', col: 'bg-[#6c35ff]/20 text-[#6c35ff]' },
                ].map((c) => (
                  <div key={c.name} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm ${c.col}`}>
                        {c.grade}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">{c.name}</div>
                        <div className="text-xs text-zinc-500 mt-0.5 font-mono">4.0 / {c.gpa}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Navigation */}
          <div className="pt-4 mt-2 border-t border-white/10 grid grid-cols-5 gap-1">
            {[
              { id: 'overview', label: 'الرئيسية', icon: Home },
              { id: 'courses', label: 'المقررات', icon: BookOpen },
              { id: 'planner', label: 'المميزات', icon: LayoutGrid },
              { id: 'features', label: 'المتابعة', icon: Target },
              { id: 'more', label: 'المزيد', icon: MoreHorizontal },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex flex-col items-center gap-1 py-1 rounded-lg transition ${
                    isActive
                      ? 'text-[#6c35ff] font-semibold'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-[9px]">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
