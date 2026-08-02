import React from 'react';
import { Sparkles, ArrowRight, Award, Bot, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenPdf: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenPdf }) => {
  return (
    <section id="home" className="pt-2 pb-4 space-y-8">
      {/* Top Bar - AI Twin CTA */}
      <div className="flex items-center justify-end">
        <button
          onClick={() => onNavigate('ai-twin')}
          className="py-2 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-bold text-xs sm:text-sm tracking-wide hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(40,233,140,0.3)] flex items-center gap-2 cursor-pointer"
        >
          <Bot className="w-4 h-4" />
          <span>Talk with Tal.AI</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Main Title & Subtitle */}
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.15]">
          Architecting <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 font-semibold">
            Enterprise UX & Autonomous AI Workflows.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
          With over <span className="text-emerald-400 font-semibold">15 years</span> of experience at the intersection of creativity, strategy, and technology, I specialize in transforming complex business problems into intuitive, high-impact digital experiences. As a Senior UX Consultant at <strong className="text-white">EY</strong>, I work with cross-functional teams to deliver scalable solutions—from enterprise-grade dashboards to consumer-facing mobile products—that drive measurable ROI and brand loyalty.
        </p>
      </div>

      {/* Drake Style Animated Counter Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
        <div className="p-5 rounded-2xl bg-[#12151e]/80 border border-emerald-500/20 backdrop-blur-md hover:border-emerald-500/40 transition-colors group">
          <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 font-mono group-hover:scale-105 transition-transform">
            15+
          </div>
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1">
            Years Experience
          </div>
          <p className="text-xs font-semibold text-slate-200 mt-1.5">UX, AI, Design & Motion Graphic</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#12151e]/80 border border-emerald-500/20 backdrop-blur-md hover:border-emerald-500/40 transition-colors group">
          <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono group-hover:scale-105 transition-transform flex items-center gap-1">
            <span>4x</span>
            <Award className="w-6 h-6 text-amber-400 inline opacity-80" />
          </div>
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1">
            Achiever Extraordinaire
          </div>
          <p className="text-xs font-semibold text-slate-200 mt-1.5">Consecutive EY Awards</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#12151e]/80 border border-emerald-500/20 backdrop-blur-md hover:border-emerald-500/40 transition-colors group">
          <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono group-hover:scale-105 transition-transform">
            4
          </div>
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1">
            EY Bronze Badges
          </div>
          <p className="text-xs font-semibold text-slate-200 mt-1.5">AI, Cyber, Innovation& Digital</p>
        </div>
      </div>

      {/* Relocation & Status Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-[#181c28] to-cyan-950/40 border border-emerald-500/30 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Global Relocation & Work Authorization</div>
            <div className="text-xs text-slate-400">
              Eligible for EU Blue Card (Germany / European Union). Holds recognized university degrees & 15+ years senior IT record.
            </div>
          </div>
        </div>

        <button
          onClick={() => onNavigate('contact')}
          className="px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold tracking-wide transition-colors whitespace-nowrap cursor-pointer"
        >
          Discuss Relocation Opportunity →
        </button>
      </div>
    </section>
  );
};
