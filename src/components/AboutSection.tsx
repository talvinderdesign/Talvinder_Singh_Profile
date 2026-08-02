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
        A Strategic Leader Who Bridges High-Level Strategy with Hands-on Execution.
      </h2>

      {/* Summary Narrative Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#12151e]/80 border border-emerald-500/20 backdrop-blur-md space-y-4">
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {PERSONAL_INFO.bio}
        </p>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          My background goes far beyond traditional UX; it is deeply rooted in directing cross-functional teams and managing global client portfolios across the tech, FMCG, and FMEG sectors. Whether I am steering global stakeholder communications, mentoring and leading multidisciplinary design teams, or integrating next-generation AI solutions, I operate not just as a contributor, but as a dedicated business partner invested in long-term scale and innovation.
        </p>
      </div>

      {/* Strategic Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl bg-[#181c28] border border-white/5 hover:border-emerald-500/30 transition-all space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">AI Agent Development & Copilot</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Engineering custom AI workflow agents inside Copilot and Replit environments. Automating complex consulting reporting, document synthesis, and rapid prototyping for EY leadership.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#181c28] border border-white/5 hover:border-emerald-500/30 transition-all space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
              <Layout className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">SharePoint & Web Architecture</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Designing highly scalable SharePoint Online (O365) platforms for enterprise service lines, ensuring information architecture, brand adherence, and robust security compliance.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#181c28] border border-white/5 hover:border-emerald-500/30 transition-all space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">Marketing Design & Multimedia Champion</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Crafting 360-degree marketing campaigns, digital visual assets, corporate video edits, audio production, and brand identity systems across global enterprise ecosystems.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#181c28] border border-white/5 hover:border-emerald-500/30 transition-all space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">Team Leadership & Mentorship</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Proven track record directing teams of up to 8 design professionals (WNS), managing delivery schedules for Tier-1 USA & UK accounts, and mentoring EY designers.
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
          <span className="text-slate-300 font-semibold uppercase block mb-1">Current Role</span>
          <span className="text-emerald-400 font-semibold">Senior UX Consultant @ EY</span>
        </div>
        <div>
          <span className="text-slate-300 font-semibold uppercase block mb-1">Location</span>
          <span className="text-white">New Delhi, India (Relocation Ready)</span>
        </div>
        <div>
          <span className="text-slate-300 font-semibold uppercase block mb-1">Languages</span>
          <span className="text-white">English (Fluent / Business Level)</span>
        </div>
        <div>
          <span className="text-slate-300 font-semibold uppercase block mb-1">Work Authorization</span>
          <span className="text-emerald-300">EU Blue Card Eligible (Germany)</span>
        </div>
        <div>
          <span className="text-slate-300 font-semibold uppercase block mb-1">Experience</span>
          <span className="text-white">15+ Years Multidisciplinary</span>
        </div>
      </div>
    </section>
  );
};
