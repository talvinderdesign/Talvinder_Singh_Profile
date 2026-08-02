import React, { useState, useEffect } from 'react';
import { ProfileSidebar } from './components/ProfileSidebar';
import { FloatingNav } from './components/FloatingNav';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ResumeSection } from './components/ResumeSection';
import { SkillsSection } from './components/SkillsSection';
import { BadgesSection } from './components/BadgesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AiTwinSection } from './components/AiTwinSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { ResumePdfView } from './components/ResumePdfView';
import { ProjectItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [showPdfView, setShowPdfView] = useState<boolean>(false);

  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Smooth Scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Observe active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['home', 'about', 'resume', 'skills', 'badges', 'portfolio', 'ai-twin', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0d12] text-slate-100 selection:bg-emerald-500 selection:text-black font-sans relative">
      {/* Matrix Tech Background Glow & Particle Grid */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/20 via-[#0b0d12] to-[#0b0d12] z-0" />
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
        style={{
          backgroundImage: `radial-gradient(#28e98c 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Main Layout Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12 items-start">
          
          {/* Sticky Left Profile Sidebar */}
          <ProfileSidebar 
            onOpenContact={() => handleNavigate('contact')}
            onOpenPdf={() => setShowPdfView(true)}
          />

          {/* Right Main Scrollable Content */}
          <main className="flex-1 min-w-0 space-y-8 xl:space-y-10 lg:pr-8 xl:pr-12">
            <HeroSection 
              onNavigate={handleNavigate}
              onOpenPdf={() => setShowPdfView(true)}
            />

            <AboutSection />

            <ResumeSection />

            <SkillsSection />

            <BadgesSection 
              onVerifyBadge={(url) => window.open(url, '_blank')}
            />

            <PortfolioSection 
              onSelectProject={(proj) => setSelectedProject(proj)}
            />

            <AiTwinSection />

            <ContactSection />
          </main>
        </div>
      </div>

      {/* Right Floating Nav Dock */}
      <FloatingNav 
        activeSection={activeSection}
        onSelectSection={handleNavigate}
      />

      {/* Case Study Modal */}
      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* PDF Printable Resume Overlay */}
      {showPdfView && (
        <ResumePdfView 
          onClose={() => setShowPdfView(false)}
        />
      )}
    </div>
  );
}
