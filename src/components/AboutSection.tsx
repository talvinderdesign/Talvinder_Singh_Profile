import React from 'react';
import { User, Cpu, Layout, Users, Palette } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="pt-6 pb-4 space-y-6 border-t border-white/10">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          02 // ABOUT ME
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        Designing High-Impact Visuals: From Digital & Social Creatives to Corporate Identity and Print.
      </h2>

      {/* Summary Narrative Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#12151e]/80 border border-emerald-500/20 backdrop-blur-md space-y-4">
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {PERSONAL_INFO.bio}
        </p>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          My career combines digital design craftsmanship with rigorous print production standards. Across global consulting (<strong className="text-white">EY</strong>), multinational retail (<strong className="text-white">WNS / Tesco</strong>), and consumer electricals (<strong className="text-white">Havells, Orient</strong>), I have crafted multi-format digital graphics, social media ad suites, C-suite pitch decks, brand design systems, error-free packaging die-lines, and large-format outdoor & trade fair graphics.
        </p>
      </div>

      {/* Strategic Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl bg-[#181c28] border border-white/5 hover:border-emerald-500/30 transition-all space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">Graphic Design & Marketing Collaterals</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Crafting high-impact graphic design solutions, promotional marketing collaterals, executive C-suite pitch decks (PowerPoint), SharePoint intranet & portal design, and social media creatives (Meta, LinkedIn, YouTube).
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#181c28] border border-white/5 hover:border-emerald-500/30 transition-all space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">Corporate Identity (CI/CD) & Brand Systems</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Developing and governing Corporate Identity (CI/CD) guidelines, typographic grid systems, annual reports, executive pitch books, and scalable vector brand asset libraries across global enterprises.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#181c28] border border-white/5 hover:border-emerald-500/30 transition-all space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Layout className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">Print Production & Prepress Mastery</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            End-to-end prepress execution: PDF/X-4 & PDF/X-1a compliance, CMYK & Pantone spot color separation, bleed/trapping, packaging die-lines, retail POS/POP displays, and large-format trade fair exhibition graphics.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#181c28] border border-white/5 hover:border-emerald-500/30 transition-all space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">AI Creative Acceleration & Motion Graphics</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Harnessing Adobe Firefly, Microsoft Copilot, Replit, and Photoshop Generative AI for rapid ideation, code-assisted UI prototypes, and 3x–5x faster production velocity, coupled with kinetic typography and video editing (After Effects, Premiere Pro).
          </p>
        </div>
      </div>

      {/* Personal Info Grid */}
      <div className="p-6 rounded-2xl bg-[#12151e]/80 border border-white/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs font-mono">
        <div>
          <span className="text-slate-300 font-semibold uppercase block mb-1">Full Name</span>
          <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>
        </div>
        <div>
          <span className="text-slate-300 font-semibold uppercase block mb-1">Target Profile</span>
          <span className="text-emerald-400 font-semibold">Senior Graphic Designer</span>
        </div>
        <div>
          <span className="text-slate-300 font-semibold uppercase block mb-1">Current Employer</span>
          <span className="text-white">Ernst & Young (EY)</span>
        </div>
        <div>
          <span className="text-slate-300 font-semibold uppercase block mb-1">Location & Mobility</span>
          <span className="text-white">Relocation Ready</span>
        </div>
        <div>
          <span className="text-slate-300 font-semibold uppercase block mb-1">Language Skills</span>
          <span className="text-white">English (B2 Level Fluent - IELTS Approved)</span>
        </div>
        <div>
          <span className="text-slate-300 font-semibold uppercase block mb-1">Work Authorization</span>
          <span className="text-emerald-300">EU Blue Card Eligible</span>
        </div>
      </div>
    </section>
  );
};
