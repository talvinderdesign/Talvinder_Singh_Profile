import React, { useState } from 'react';
import { Cpu, Layout, Video, Sparkles, Check, Figma } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/resumeData';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(SKILL_CATEGORIES[0]?.id || 'cat-digital-marketing');

  return (
    <section id="skills" className="pt-6 pb-4 space-y-6 border-t border-white/10">
      {/* Section Eyebrow Header */}
      <div className="flex items-center gap-3">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          04 // TECHNICAL SKILLS & COMPETENCIES
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        Core Capabilities & Tool Matrix
      </h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {SKILL_CATEGORIES.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(40,233,140,0.3)]'
                  : 'bg-[#181c28] text-slate-300 hover:text-white border border-white/5 hover:border-emerald-500/30'
              }`}
            >
              <span>{cat.category}</span>
            </button>
          );
        })}
      </div>

      {/* Active Category Skills Grid */}
      {SKILL_CATEGORIES.filter(c => c.id === activeTab).map((cat) => (
        <div key={cat.id} className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {cat.skills.map((skill, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#12151e]/80 border border-white/5 hover:border-emerald-500/30 transition-all space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white">{skill.name}</span>
                <span className="text-xs font-mono text-emerald-400 font-semibold">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden p-0.5 border border-white/5">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 shadow-[0_0_10px_rgba(40,233,140,0.5)] transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {skill.description && (
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {skill.description}
                </p>
              )}

              {skill.tags && skill.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {skill.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}

      {/* Tech Stack Pills List */}
      <div className="p-6 rounded-2xl bg-[#181c28] border border-white/5 space-y-3">
        <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
          Complete Software & Production Arsenal
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
          {[
            "Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop", "Adobe Creative Cloud", "Figma",
            "Print Production & Prepress", "Final Artwork Execution", "PDF/X-4 & PDF/X-1a", "CMYK & Pantone (PMS)", "Bleed & Trapping",
            "Corporate Identity (CI/CD)", "Brand Guidelines", "Typography & Typesetting", "Packaging & Die-Lines",
            "Large-Format Print", "Trade Fair & Exhibition Displays", "Roll-up Banners", "OOH Billboards", "Retail POS/POP",
            "Social Media Marketing Creatives", "Performance Ad Suites", "Display Banners", "Executive Pitch Decks (PowerPoint)",
            "Adobe After Effects", "Motion Graphics", "Kinetic Typography", "Adobe Premiere Pro", "Adobe Audition",
            "Adobe Firefly", "Photoshop Generative AI", "AI Creative Workflows", "SharePoint Online", "Design Systems"
          ].map((item, i) => (
            <span key={i} className="px-3 py-1.5 rounded-lg bg-[#12151e] border border-emerald-500/20 text-emerald-300/90 hover:border-emerald-500/50 hover:text-emerald-300 transition-colors">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
