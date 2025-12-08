import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import { NavSection } from './types';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<NavSection>(NavSection.HOME);

  const renderSection = () => {
    return (
      <>
        <div id={NavSection.HOME}>
          <Hero />
        </div>
        <div id={NavSection.PROJECTS} className="bg-slate-900">
          <Projects />
        </div>
        <div id={NavSection.SKILLS} className="bg-slate-950/50">
          <Skills />
        </div>
        <div id={NavSection.EDUCATION} className="bg-slate-900">
          <Education />
        </div>
        <div id={NavSection.CONTACT}>
          <Contact />
        </div>
      </>
    );
  };

  const handleNavigate = (section: NavSection) => {
    setCurrentSection(section);
    
    // For single page scroll behavior on main sections
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (section === NavSection.HOME) {
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-primary-500/30">
      <Navbar currentSection={currentSection} onNavigate={handleNavigate} />
      
      <main className="pt-16">
        {renderSection()}
      </main>
    </div>
  );
};

export default App;