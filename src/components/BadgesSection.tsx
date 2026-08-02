import React from 'react';
import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import { EY_BADGES } from '../data/resumeData';

interface BadgesSectionProps {
  onVerifyBadge?: (url: string) => void;
}

export const BadgesSection: React.FC<BadgesSectionProps> = () => {
  return (
    <section id="badges" className="pt-6 pb-4 space-y-6 border-t border-white/10">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            05 // EY AWARDS & CERTIFICATIONS
          </span>
        </div>
        <div className="text-xs font-mono text-amber-400">
          OFFICIAL ERNST & YOUNG CREDENTIALS
        </div>
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        Ernst & Young Badges & Recognition
      </h2>

      {/* Badges Grid displaying full original badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {EY_BADGES.map((badge) => (
          <div 
            key={badge.id}
            className="group relative p-5 rounded-2xl bg-[#12151e]/90 border border-emerald-500/20 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between items-center text-center space-y-4 hover:shadow-[0_0_25px_rgba(217,145,57,0.15)]"
          >
            <div className="w-full space-y-3 flex flex-col items-center">
              {/* Badge Category Tag */}
              <span className="text-[10px] font-mono text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                {badge.year} • {badge.type}
              </span>

              {/* Original Unaltered Official EY Badge Image */}
              <div className="py-2 flex justify-center items-center h-44 w-full">
                <img 
                  src={badge.imageUrl} 
                  alt={badge.title}
                  className="max-h-40 w-auto max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors px-1">
                {badge.title}
              </h3>

              {badge.description && (
                <p className="text-[11px] text-slate-400 leading-snug">
                  {badge.description}
                </p>
              )}
            </div>

            {/* Verify CTA */}
            <a
              href={badge.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 hover:text-amber-200 border border-amber-500/30 hover:border-amber-500/50 text-xs font-mono transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-2"
            >
              <span>Verify Credly Badge</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>

      {/* Achiever Extraordinaire Highlight Box */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#181c28] via-[#151924] to-[#181c28] border border-amber-500/30 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-amber-500/15 text-amber-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                EY 'Achiever Extraordinaire' (2023 - 2026)
              </h3>
              <p className="text-xs text-slate-400">
                Awarded for 4 consecutive years by Ernst & Young leadership for exceptional performance and UI/UX AI innovation.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-300 text-xs font-mono border border-amber-500/20">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>4 Consecutive Years</span>
          </div>
        </div>
      </div>
    </section>
  );
};

