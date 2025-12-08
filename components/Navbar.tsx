import React, { useState } from 'react';
import { Menu, X, Brain, Code, User, GraduationCap, Mail } from 'lucide-react';
import { NavSection } from '../types';

interface NavbarProps {
  currentSection: NavSection;
  onNavigate: (section: NavSection) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: NavSection.HOME, label: 'Home', icon: User },
    { id: NavSection.PROJECTS, label: 'Projects', icon: Code },
    { id: NavSection.SKILLS, label: 'Skills', icon: Brain },
    { id: NavSection.EDUCATION, label: 'Education', icon: GraduationCap },
    { id: NavSection.CONTACT, label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id: NavSection) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick(NavSection.HOME)}>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-indigo-500 bg-clip-text text-transparent">
              SWAROOP
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2
                    ${currentSection === item.id 
                      ? 'bg-slate-800 text-primary-400' 
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'}
                  `}
                >
                  <item.icon size={16} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2
                  ${currentSection === item.id 
                    ? 'bg-slate-800 text-primary-400' 
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'}
                `}
              >
                 <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;