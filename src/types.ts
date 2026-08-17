export type GradeLetter = 
  | 'A+' | 'A' | 'A-' 
  | 'B+' | 'B' | 'B-' 
  | 'C+' | 'C' | 'C-' 
  | 'D+' | 'D' | 'F';

export interface Course {
  id: string;
  code: string;
  name: string;
  credits: number;
  grade: GradeLetter;
  color?: string;
}

export interface TaskItem {
  id: string;
  title: string;
  courseCode: string;
  type: 'assignment' | 'exam' | 'project' | 'quiz' | 'reading';
  dueDate: string;
  time: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
  notes?: string;
}

export interface SemesterData {
  id: string;
  term: string;
  year: number;
  gpa: number;
  cumulativeGpa: number;
  credits: number;
  courses: Course[];
  honors?: string;
}

export interface ResourceItem {
  id: string;
  category: 'study' | 'gpa' | 'exam' | 'templates';
  title: string;
  description: string;
  tag: string;
  readTime: string;
  iconName: string;
  url?: string;
  keyTakeaways: string[];
}

export interface WidgetPreset {
  id: string;
  name: string;
  size: 'small' | 'medium' | 'large' | 'lockscreen';
  description: string;
  accent: string;
}
