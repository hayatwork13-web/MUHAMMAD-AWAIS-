import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import UpworkCredibility from './components/UpworkCredibility';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StaticExporter from './components/StaticExporter';

export default function App() {
  const [isExporterOpen, setIsExporterOpen] = useState(false);

  const handleScrollToSegment = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-200">
      
      {/* Universal Code-Pages Promotion Header banner */}
      <div className="bg-blue-600 text-white text-xs py-2 px-4 text-center font-sans font-semibold flex items-center justify-center gap-2">
        <span>Need the raw pure HTML/CSS/JS file package for direct GitHub Pages upload?</span>
        <button
          onClick={() => setIsExporterOpen(true)}
          className="bg-white text-blue-700 hover:bg-blue-50 focus:ring-1 focus:ring-white px-2.5 py-0.5 rounded text-[11px] font-bold transition whitespace-nowrap"
        >
          View Static Code (3 Files)
        </button>
      </div>

      {/* Main Navigation bar */}
      <Header
        onScrollTo={handleScrollToSegment}
        onOpenExporter={() => setIsExporterOpen(true)}
      />

      {/* Hero Header block */}
      <Hero onScrollTo={handleScrollToSegment} />

      {/* Core trust metrics & JSS status counters */}
      <TrustBar />

      {/* About Muhammad Awais section */}
      <About />

      {/* Core services and flows configuration solutions */}
      <Services />

      {/* Interactive live email layout previews */}
      <Portfolio />

      {/* Case studies demonstrating real store LTV outcomes */}
      <CaseStudies />

      {/* Verified reviews block */}
      <Testimonials />

      {/* Deep-dive credibility Upwork partner badge section */}
      <UpworkCredibility />

      {/* Free Audit form and direct channels */}
      <Contact />

      {/* Dark Navy Elegant Footer */}
      <Footer />

      {/* Code exporter model */}
      <StaticExporter
        isOpen={isExporterOpen}
        onClose={() => setIsExporterOpen(false)}
      />

    </div>
  );
}
