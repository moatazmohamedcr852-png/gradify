import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesRow } from './components/FeaturesRow';
import { StatsAndPartners } from './components/StatsAndPartners';
import { ServicesGrid } from './components/ServicesGrid';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0C10] text-zinc-100 selection:bg-[#6c35ff]/30 selection:text-indigo-200 antialiased overflow-x-hidden">
      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="bg-[#0B0C10]">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Row */}
        <FeaturesRow />

        {/* Stats and Partners */}
        <StatsAndPartners />

        {/* Services Grid */}
        <ServicesGrid />

        {/* Closing Call to Action */}
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
