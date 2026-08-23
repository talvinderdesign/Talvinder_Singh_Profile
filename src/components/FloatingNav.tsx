import React from 'react';
import { Home, User, Briefcase, Settings, Award, FolderKanban, Mail } from 'lucide-react';

interface FloatingNavProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
}

export const navItems = [
  { id: 'home', label: 'Home', icon: Home, code: '01' },
  { id: 'about', label: 'About', icon: User, code: '02' },
  { id: 'resume', label: 'Experience', icon: Briefcase, code: '03' },
  { id: 'skills', label: 'Skills', icon: Settings, code: '04' },
  { id: 'badges', label: 'EY Badges', icon: Award, code: '05' },
  { id: 'portfolio', label: 'Portfolio', icon: FolderKanban, code: '06' },
  { id: 'contact', label: 'Contact', icon: Mail, code: '07' },
];

export const FloatingNav: React.FC<FloatingNavProps> = ({ activeSection, onSelectSection }) => {
  return (
    <>
      {/* Desktop Floating Right Dock */}
      <nav className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 p-3 rounded-full bg-[#12151e]/90 backdrop-blur-xl border border-emerald-500/20 shadow-[0_0_25px_rgba(40,233,140,0.1)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectSection(item.id)}
              className={`relative group p-3 rounded-full transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(40,233,140,0.5)] scale-110'
                  : 'text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10'
              }`}
              title={item.label}
            >
              <Icon className="w-5 h-5" />

              {/* Tooltip */}
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#181c28] border border-emerald-500/30 text-xs font-mono text-emerald-300 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 shadow-xl flex items-center gap-2">
                <span className="text-emerald-500 font-bold">{item.code} //</span>
                <span>{item.label}</span>
              </div>
            </button>
          );
        })}
      </nav>

      {/* Mobile Sticky Bottom Floating Bar */}
      <nav className="lg:hidden fixed bottom-4 left-4 right-4 z-40 flex items-center justify-around p-2.5 rounded-2xl bg-[#12151e]/95 backdrop-blur-2xl border border-emerald-500/30 shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-x-auto custom-scrollbar">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectSection(item.id)}
              className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all cursor-pointer min-w-[50px] ${
                isActive
                  ? 'text-emerald-400 bg-emerald-500/15 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-[10px] whitespace-nowrap">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
