import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { GpaTrackerSection } from './components/GpaTrackerSection';
import { AcademicPlannerSection } from './components/AcademicPlannerSection';
import { GoalEngineSection } from './components/GoalEngineSection';
import { SemesterOverviewSection } from './components/SemesterOverviewSection';
import { HomeWidgetsSection } from './components/HomeWidgetsSection';
import { ResourceHubSection } from './components/ResourceHubSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { QuickGpaModal } from './components/QuickGpaModal';
import { DownloadModal } from './components/DownloadModal';

export default function App() {
  const [quickGpaOpen, setQuickGpaOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1020] text-zinc-900 dark:text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200 antialiased overflow-x-hidden">
      {/* Sticky Navigation Header */}
      <Navbar 
        onOpenQuickGpa={() => setQuickGpaOpen(true)}
        onOpenDownload={() => setDownloadOpen(true)}
      />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section */}
        <HeroSection 
          onOpenQuickGpa={() => setQuickGpaOpen(true)}
          onOpenDownload={() => setDownloadOpen(true)}
        />

        {/* GPA TRACKER: Calculate semester and cumulative GPA instantly */}
        <GpaTrackerSection />

        {/* ACADEMIC PLANNER: Organize tasks by date with smart weekly planner */}
        <AcademicPlannerSection />

        {/* GOAL ENGINE: Target GPA calculation and remaining course grade solver */}
        <GoalEngineSection />

        {/* SEMESTER OVERVIEW: Academic progress charts and term statistics */}
        <SemesterOverviewSection />

        {/* HOME WIDGETS: Glance at tasks and current GPA from home & lock screens */}
        <HomeWidgetsSection />

        {/* RESOURCE HUB: Curated academic resources, study tips, and templates */}
        <ResourceHubSection />

        {/* Testimonials & Top University Scholars */}
        <TestimonialsSection />

        {/* Closing Call to Action */}
        <CtaSection 
          onOpenQuickGpa={() => setQuickGpaOpen(true)}
          onOpenDownload={() => setDownloadOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <QuickGpaModal 
        isOpen={quickGpaOpen}
        onClose={() => setQuickGpaOpen(false)}
      />

      <DownloadModal 
        isOpen={downloadOpen}
        onClose={() => setDownloadOpen(false)}
      />
    </div>
  );
}
