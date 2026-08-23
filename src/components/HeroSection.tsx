import React from 'react';
import { Sparkles, ArrowRight, Award, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenPdf: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenPdf }) => {
  return (
    <section id="home" className="pt-2 pb-4 space-y-8">
      {/* Main Title & Subtitle */}
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.2]">
          Senior Graphic Designer crafting{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 font-semibold">
            High-Impact Digital Design, Social Media & Marketing Collaterals, Brand Identity & Print.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
          With over <span className="text-emerald-400 font-semibold">15 years</span> of hands-on design excellence across global enterprises (including <strong className="text-white">Ernst & Young</strong>, <strong className="text-white">WNS</strong>, <strong className="text-white">Havells</strong>, and <strong className="text-white">Orient</strong>), I craft end-to-end visual deliverables: from high-converting <strong className="text-white">Digital Design, Social Media Creatives & Marketing Collaterals</strong> to comprehensive <strong className="text-white">Corporate Identity (CI/CD)</strong> and flawless <strong className="text-white">Print Production & Prepress</strong> — accelerated by modern AI tools (Adobe Firefly) for 3x–5x faster velocity. <span className="text-emerald-300 font-semibold">Eligible for the EU Blue Card with immediate relocation availability.</span>
        </p>
      </div>

      {/* Drake Style Animated Counter Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
        <div className="p-5 rounded-2xl bg-[#12151e]/80 border border-emerald-500/20 backdrop-blur-md hover:border-emerald-500/40 transition-colors group">
          <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 font-mono group-hover:scale-105 transition-transform">
            15+
          </div>
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1">
            Years Graphic Design Craft
          </div>
          <p className="text-xs font-semibold text-slate-200 mt-1.5">Digital Media, Social Ads, Brand & Print</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#12151e]/80 border border-emerald-500/20 backdrop-blur-md hover:border-emerald-500/40 transition-colors group">
          <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono group-hover:scale-105 transition-transform flex items-center gap-1">
            <span>4x</span>
            <Award className="w-6 h-6 text-amber-400 inline opacity-80" />
          </div>
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1">
            Achiever Extraordinaire
          </div>
          <p className="text-xs font-semibold text-slate-200 mt-1.5">Consecutive EY Global Awards</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#12151e]/80 border border-emerald-500/20 backdrop-blur-md hover:border-emerald-500/40 transition-colors group">
          <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono group-hover:scale-105 transition-transform">
            100%
          </div>
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1">
            Prepress & Print Precision
          </div>
          <p className="text-xs font-semibold text-slate-200 mt-1.5">Zero-Defect Packaging & Print Production</p>
        </div>
      </div>

      {/* Relocation & Status Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-[#181c28] to-cyan-950/40 border border-emerald-500/30 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">European Relocation & EU Blue Card Ready</div>
            <div className="text-xs text-slate-400">
              Eligible for fast-track EU Blue Card skilled employment with recognized university degree & 15+ years international design record. Fluent English (C2) & basic German (A1/A2).
            </div>
          </div>
        </div>

        <button
          onClick={() => onNavigate('contact')}
          className="px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold tracking-wide transition-colors whitespace-nowrap cursor-pointer"
        >
          Discuss Career Opportunities →
        </button>
      </div>
    </section>
  );
};
