import React, { useState, useMemo } from 'react';
import { 
  Target, 
  Sparkles, 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight,
  Sliders,
  Zap,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const GoalEngineSection: React.FC = () => {
  const [currentCredits, setCurrentCredits] = useState<number>(64);
  const [currentGpa, setCurrentGpa] = useState<number>(3.72);
  const [targetGpa, setTargetGpa] = useState<number>(3.85);
  const [remainingCredits, setRemainingCredits] = useState<number>(56);

  // Goal calculations
  const goalResults = useMemo(() => {
    const currentQualityPoints = currentCredits * currentGpa;
    const totalCreditsAtGraduation = currentCredits + remainingCredits;
    const requiredTotalQualityPoints = totalCreditsAtGraduation * targetGpa;
    const neededQualityPoints = requiredTotalQualityPoints - currentQualityPoints;
    
    const requiredRemainingGpa = remainingCredits > 0 
      ? neededQualityPoints / remainingCredits 
      : 0;

    const isPossible = requiredRemainingGpa <= 4.0;
    const isAlreadyMet = currentGpa >= targetGpa && currentCredits > 0;

    let difficultyLabel = 'Target Achievable';
    let difficultyColor = 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
    let recommendation = '';

    if (requiredRemainingGpa > 4.0) {
      difficultyLabel = 'Mathematically Out of Range';
      difficultyColor = 'text-rose-400 border-rose-500/30 bg-rose-500/10';
      const maxPossibleGpa = (currentQualityPoints + remainingCredits * 4.0) / totalCreditsAtGraduation;
      recommendation = `The highest possible GPA with straight A's (4.0) is ${maxPossibleGpa.toFixed(2)}. Consider aiming for a target of ${maxPossibleGpa.toFixed(2)}.`;
    } else if (requiredRemainingGpa >= 3.9) {
      difficultyLabel = 'Elite Execution Required';
      difficultyColor = 'text-amber-400 border-amber-500/30 bg-amber-500/10';
      const approxCourses = Math.round(remainingCredits / 3.5);
      recommendation = `Requires nearly all straight A's across your remaining ~${approxCourses} courses with zero grades below A-.`;
    } else if (requiredRemainingGpa >= 3.65) {
      difficultyLabel = 'Dean’s List Trajectory';
      difficultyColor = 'text-[#7C4DFF] border-[#7C4DFF]/30 bg-purple-500/10';
      recommendation = `Target attainable with a healthy mix of A and A- grades. 1 or 2 B+ grades allowed if balanced with 4.0s.`;
    } else {
      difficultyLabel = 'Comfortable Pace';
      difficultyColor = 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10';
      recommendation = `Steady execution with solid B+ and A- coursework will hit your goal easily.`;
    }

    return {
      totalCreditsAtGraduation,
      requiredRemainingGpa,
      isPossible,
      isAlreadyMet,
      difficultyLabel,
      difficultyColor,
      recommendation,
    };
  }, [currentCredits, currentGpa, targetGpa, remainingCredits]);

  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#8b5cf6', '#06b6d4', '#ec4899', '#fde047'],
    });
  };

  return (
    <section 
      id="goal-engine" 
      className="py-24 bg-zinc-50 dark:bg-[#0B1020] border-b border-zinc-200 dark:border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3 text-left">
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#0B1020] dark:text-white/40 font-mono">
              03. Reverse Grade Engine
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1020] dark:text-white font-['Space_Grotesk'] tracking-tight uppercase">
            Trajectory & Inverse Solver.
          </h2>

          <p className="text-sm sm:text-base text-[#0B1020] dark:text-white/60 font-['Newsreader'] italic leading-relaxed">
            Set your target graduation honors threshold. Gradify solves backwards through your remaining degree requirements to chart the exact letter grade distribution required.
          </p>
        </div>

        {/* Goal Engine Interactive Playground */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls / Inputs Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-zinc-50 dark:bg-[#0B1020] border border-zinc-200 dark:border-white/10 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-white/10">
                <div className="text-xs font-bold uppercase tracking-widest text-[#0B1020] dark:text-white flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5 text-[#0B1020] dark:text-white/60" />
                  <span>Honors Target Simulator</span>
                </div>
                <span className="text-[10px] font-mono text-[#0B1020] dark:text-white/40 uppercase">Inverse Matrix</span>
              </div>

              {/* Target GPA Slider */}
              <div className="space-y-3 p-4 border border-zinc-300 dark:border-white/15 bg-white/[0.01]">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] uppercase font-mono tracking-widest text-[#0B1020] dark:text-white/50">
                    Desired Graduation Target
                  </label>
                  <span className="text-3xl font-light font-['Space_Grotesk'] text-[#0B1020] dark:text-white tabular-nums">
                    {targetGpa.toFixed(2)}
                  </span>
                </div>

                <input
                  type="range"
                  min="2.5"
                  max="4.0"
                  step="0.05"
                  value={targetGpa}
                  onChange={(e) => setTargetGpa(parseFloat(e.target.value))}
                  className="w-full h-1 bg-white/20 rounded-none appearance-none cursor-pointer accent-white"
                />

                <div className="flex justify-between text-[10px] text-[#0B1020] dark:text-white/30 font-mono">
                  <span>2.50 PASS</span>
                  <span>3.50 HONORS</span>
                  <span>3.80 MAGNA</span>
                  <span>4.00 SUMMA</span>
                </div>
              </div>

              {/* Current Standing Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-mono tracking-widest text-[#0B1020] dark:text-white/40">
                    Current Cumulative GPA
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="4.0"
                    value={currentGpa}
                    onChange={(e) => setCurrentGpa(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-1.5 bg-black border border-white/20 text-xs font-mono font-bold text-[#0B1020] dark:text-white focus:border-white outline-none"
                  />
                  <span className="text-[10px] font-mono text-[#0B1020] dark:text-white/30">Current Transcript Record</span>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-mono tracking-widest text-[#0B1020] dark:text-white/40">
                    Completed Credits
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="180"
                    value={currentCredits}
                    onChange={(e) => setCurrentCredits(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-1.5 bg-black border border-white/20 text-xs font-mono font-bold text-[#0B1020] dark:text-white focus:border-white outline-none"
                  />
                  <span className="text-[10px] font-mono text-[#0B1020] dark:text-white/30">e.g. 64 credits (Junior)</span>
                </div>
              </div>

              {/* Remaining credits slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-[#0B1020] dark:text-white/50">
                  <span>Remaining Degree Credits</span>
                  <span className="text-[#0B1020] dark:text-white font-mono">{remainingCredits} CR (~{Math.round(remainingCredits / 3.5)} COURSES)</span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="100"
                  step="1"
                  value={remainingCredits}
                  onChange={(e) => setRemainingCredits(parseInt(e.target.value) || 0)}
                  className="w-full h-1 bg-white/20 rounded-none appearance-none cursor-pointer accent-white"
                />
              </div>
            </div>

            {/* Target Presets button bar */}
            <div className="pt-4 border-t border-zinc-200 dark:border-white/10 flex flex-wrap items-center gap-2">
              <span className="text-[10px] uppercase font-mono text-[#0B1020] dark:text-white/40">Presets:</span>
              {[
                { label: "3.50 (Dean's List)", val: 3.50 },
                { label: '3.75 (Magna)', val: 3.75 },
                { label: '3.90 (Summa)', val: 3.90 },
                { label: '3.98 (Top 1%)', val: 3.98 },
              ].map((p) => (
                <button
                  key={p.val}
                  onClick={() => {
                    setTargetGpa(p.val);
                    triggerCelebration();
                  }}
                  className="px-2 py-1 border border-zinc-300 dark:border-white/15 text-[10px] font-mono uppercase text-[#0B1020] dark:text-white/60 hover:text-[#0B1020] dark:text-white hover:border-white/40 transition"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Output Roadmap Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-zinc-50 dark:bg-[#0B1020] border border-zinc-300 dark:border-white/15 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Status Header */}
              <div className="flex items-center justify-between border-b border-zinc-200 dark:border-white/10 pb-3">
                <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#0B1020] dark:text-white/40">
                  Solver Feasibility
                </span>
                <span className="px-2 py-0.5 text-[10px] font-mono uppercase border border-white/30 text-[#0B1020] dark:text-white">
                  {goalResults.difficultyLabel}
                </span>
              </div>

              {/* Required GPA highlight */}
              <div className="space-y-1">
                <div className="text-[10px] uppercase tracking-widest text-[#0B1020] dark:text-white/40 font-mono">
                  Required Remaining GPA Average
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-light tabular-nums font-['Space_Grotesk'] text-[#0B1020] dark:text-white">
                    {goalResults.requiredRemainingGpa.toFixed(2)}
                  </span>
                  <span className="text-xs font-mono text-[#0B1020] dark:text-white/30">/ 4.00</span>
                </div>
                <div className="text-[11px] font-mono text-[#0B1020] dark:text-white/50">
                  Across remaining {remainingCredits} credits to graduate with cumulative {targetGpa.toFixed(2)}.
                </div>
              </div>

              {/* Recommendation & Strategy */}
              <div className="p-4 border border-zinc-300 dark:border-white/15 bg-white/[0.02] space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#0B1020] dark:text-white/60 flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-[#0B1020] dark:text-white/80" />
                  <span>Strategic Trajectory Note</span>
                </div>
                <p className="text-xs text-[#0B1020] dark:text-white/80 leading-relaxed font-['Newsreader'] italic">
                  "{goalResults.recommendation}"
                </p>
              </div>

              {/* Course grade distribution breakdown */}
              {goalResults.isPossible && (
                <div className="space-y-2 pt-2 border-t border-zinc-200 dark:border-white/10">
                  <div className="text-[10px] uppercase font-mono tracking-widest text-[#0B1020] dark:text-white/40">Target Execution Ratio:</div>
                  <div className="h-1.5 w-full bg-black/10 dark:bg-white/10 flex">
                    <div 
                      className="bg-white h-full" 
                      style={{ width: `${Math.min(100, Math.max(10, (goalResults.requiredRemainingGpa / 4.0) * 100))}%` }} 
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-[#0B1020] dark:text-white/40 font-mono">
                    <span>INDEX: {Math.round((goalResults.requiredRemainingGpa / 4.0) * 100)}%</span>
                    <span>MARGIN: {Math.max(0, 100 - Math.round((goalResults.requiredRemainingGpa / 4.0) * 100))}%</span>
                  </div>
                </div>
              )}
            </div>

            {/* Test milestone celebration button */}
            <button
              onClick={triggerCelebration}
              className="w-full py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>Simulate Target Honors Reached</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
