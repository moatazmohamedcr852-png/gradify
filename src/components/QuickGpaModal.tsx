import React, { useState } from 'react';
import { 
  X, 
  Calculator, 
  Plus, 
  Trash2, 
  Sparkles, 
  Award, 
  RotateCcw,
  CheckCircle2
} from 'lucide-react';
import { Course, GradeLetter } from '../types';
import { GRADE_POINTS } from '../data/mockData';

interface QuickGpaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickGpaModal: React.FC<QuickGpaModalProps> = ({ isOpen, onClose }) => {
  const [courses, setCourses] = useState<Course[]>([
    { id: '1', code: 'CS 301', name: 'Data Structures', credits: 4, grade: 'A' },
    { id: '2', code: 'MATH 240', name: 'Linear Algebra', credits: 4, grade: 'A-' },
    { id: '3', code: 'PHYS 211', name: 'University Physics', credits: 4, grade: 'B+' },
    { id: '4', code: 'ECON 102', name: 'Macroeconomics', credits: 3, grade: 'A' },
  ]);

  if (!isOpen) return null;

  let totalCredits = 0;
  let totalQualityPoints = 0;

  courses.forEach((c) => {
    const pts = GRADE_POINTS[c.grade] ?? 0;
    totalCredits += c.credits;
    totalQualityPoints += c.credits * pts;
  });

  const gpa = totalCredits > 0 ? totalQualityPoints / totalCredits : 0;

  const addCourse = () => {
    setCourses([
      ...courses,
      {
        id: `c-${Date.now()}`,
        code: `ELECT ${courses.length + 1}`,
        name: 'New Course',
        credits: 3,
        grade: 'A',
      },
    ]);
  };

  const removeCourse = (id: string) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  const updateGrade = (id: string, grade: GradeLetter) => {
    setCourses(courses.map((c) => (c.id === id ? { ...c, grade } : c)));
  };

  const updateCredits = (id: string, credits: number) => {
    setCourses(courses.map((c) => (c.id === id ? { ...c, credits } : c)));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl p-6 sm:p-8 rounded-[36px] bg-[#0c0c11] border border-[#7C4DFF]/30 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-[#7C4DFF]">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0B1020] dark:text-white">Interactive GPA Simulator</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">Real-time credit weighted calculation</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 text-zinc-600 dark:text-zinc-400 hover:text-[#0B1020] dark:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* GPA Hero Card */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-purple-950/60 to-black border border-[#7C4DFF]/30 flex items-center justify-between">
          <div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400 font-semibold">Calculated Standing</div>
            <div className="text-4xl font-black font-['Space_Grotesk'] text-[#0B1020] dark:text-white flex items-baseline gap-1 mt-0.5">
              <span>{gpa.toFixed(2)}</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-500 font-normal">/ 4.00</span>
            </div>
            <div className="text-xs text-purple-300 font-medium mt-1">
              {totalCredits} Credits • {totalQualityPoints.toFixed(1)} Quality Pts
            </div>
          </div>

          <div className="text-right">
            <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              {gpa >= 3.75 ? "Dean's List" : gpa >= 3.5 ? 'Honors' : 'Good Standing'}
            </div>
          </div>
        </div>

        {/* Courses list */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-zinc-700 dark:text-zinc-300">
            <span>Enrolled Courses</span>
            <button
              onClick={addCourse}
              className="text-xs text-[#4F8CFF] hover:text-indigo-300 flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              Add Course
            </button>
          </div>

          <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
            {courses.map((course) => (
              <div
                key={course.id}
                className="p-3 rounded-2xl bg-zinc-900/80 border border-zinc-200 dark:border-white/5 flex items-center justify-between gap-3 text-xs"
              >
                <div className="flex-1 font-mono font-bold text-[#0B1020] dark:text-white">
                  {course.code}
                </div>

                <div className="flex items-center gap-2">
                  <select
                    value={course.credits}
                    onChange={(e) => updateCredits(course.id, Number(e.target.value))}
                    className="bg-black/50 border border-zinc-200 dark:border-white/10 rounded-lg px-2 py-1 text-[#0B1020] dark:text-white text-xs outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6].map((cr) => (
                      <option key={cr} value={cr}>
                        {cr} cr
                      </option>
                    ))}
                  </select>

                  <select
                    value={course.grade}
                    onChange={(e) => updateGrade(course.id, e.target.value as GradeLetter)}
                    className="bg-purple-950/40 border border-[#7C4DFF]/30 rounded-lg px-2 py-1 text-purple-200 text-xs font-bold outline-none"
                  >
                    {Object.keys(GRADE_POINTS).map((g) => (
                      <option key={g} value={g} className="bg-zinc-900 text-[#0B1020] dark:text-white">
                        {g} ({GRADE_POINTS[g as GradeLetter].toFixed(1)})
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={() => removeCourse(course.id)}
                    className="p-1 rounded text-zinc-500 dark:text-zinc-500 hover:text-rose-400"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal footer */}
        <div className="flex items-center justify-between pt-2 border-t border-zinc-200 dark:border-white/10">
          <span className="text-[11px] text-zinc-600 dark:text-zinc-400">
            Powered by Gradify Academic Engine
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#4F8CFF] to-purple-600 text-[#0B1020] dark:text-white text-xs font-bold hover:opacity-90 shadow"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
