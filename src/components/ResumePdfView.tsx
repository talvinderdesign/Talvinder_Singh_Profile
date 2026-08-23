import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATIONS, EY_BADGES, EY_AWARDS } from '../data/resumeData';

interface ResumePdfViewProps {
  onClose: () => void;
}

export const ResumePdfView: React.FC<ResumePdfViewProps> = ({ onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0b0d12] border border-emerald-500/30 p-6 sm:p-10 text-slate-200 shadow-2xl custom-scrollbar print:bg-white print:text-black print:max-w-none print:max-h-none print:p-0">
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
              PRINT / DOWNLOAD PDF RESUME VIEW
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/Talvinder_Singh_Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Talvinder_Singh_Profile.pdf"
              className="py-2 px-3.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold text-xs transition-colors flex items-center gap-2 cursor-pointer border border-amber-500/30"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF File</span>
            </a>

            <button
              onClick={handlePrint}
              className="py-2 px-4 rounded-xl bg-emerald-500 text-black font-bold text-xs hover:bg-emerald-400 transition-colors flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(40,233,140,0.3)]"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Document Container */}
        <div className="pt-6 space-y-6 text-xs sm:text-sm">
          {/* Header */}
          <div className="border-b border-slate-700 pb-6 space-y-2">
            <h1 className="text-3xl font-light text-white tracking-wide">{PERSONAL_INFO.name}</h1>
            <p className="text-base font-semibold text-emerald-400">{PERSONAL_INFO.title}</p>
            
            <div className="flex flex-wrap gap-4 text-xs text-slate-400 font-mono pt-1">
              <span>📍 {PERSONAL_INFO.location}</span>
              <span>📞 {PERSONAL_INFO.phone}</span>
              <span>✉️ {PERSONAL_INFO.email}</span>
            </div>

            <div className="flex flex-wrap gap-3 text-[11px] font-mono pt-2">
              <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                EU Blue Card Eligible
              </span>
              <span className="px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                Languages: English (C2 Fluent) • German (A1/A2 Basic)
              </span>
            </div>
          </div>

          {/* Awards & Badges Row */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              AWARDS & BADGES (ERNST & YOUNG)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-xl bg-[#181c28] border border-white/5">
                <span className="font-bold text-amber-300">★ Achiever Extraordinaire Award (2023 - 2026):</span>
                <span className="text-slate-300"> Winner for 4 consecutive years at EY.</span>
              </div>
              <div className="p-3 rounded-xl bg-[#181c28] border border-white/5">
                <span className="font-bold text-emerald-300">★ EY Bronze Badges:</span>
                <span className="text-slate-300"> AI Engineering (2025), Cybersecurity (2024), Innovation Design Thinking (2021), Digital (2021).</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-slate-300 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Core Competencies Matrix */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              CORE EXPERTISE & COMPETENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-[#181c28] border border-white/5 space-y-1">
                <div className="font-bold text-white">Digital Design & Social Marketing:</div>
                <div className="text-slate-300 text-[11px]">Meta/LinkedIn Ads, GDN Banners, Executive Pitch Decks (PowerPoint), Landing Visuals, Figma UI Systems.</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#181c28] border border-white/5 space-y-1">
                <div className="font-bold text-white">Brand Systems & Corporate Identity:</div>
                <div className="text-slate-300 text-[11px]">CI/CD Guidelines, Design Governance, InDesign Editorial Layout, Annual Reports, Typography Grids.</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#181c28] border border-white/5 space-y-1">
                <div className="font-bold text-white">Print Production & Prepress Mastery:</div>
                <div className="text-slate-300 text-[11px]">PDF/X-4 Compliance, CMYK & Pantone Spot Colors, Packaging Die-Lines, Large-Format OOH & Exhibition Displays.</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#181c28] border border-white/5 space-y-1">
                <div className="font-bold text-white">Motion Graphics & AI Acceleration:</div>
                <div className="text-slate-300 text-[11px]">After Effects 2D Motion, Kinetic Typography, Premiere Pro, Adobe Firefly Generative AI (3x-5x Speed).</div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              PROFESSIONAL EXPERIENCE
            </h2>

            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-1.5 border-l-2 border-emerald-500/30 pl-4 py-1">
                <div className="flex flex-wrap items-center justify-between">
                  <span className="font-bold text-white text-sm">{exp.role}</span>
                  <span className="text-xs font-mono text-emerald-400">{exp.period}</span>
                </div>
                <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  {exp.website ? (
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <span>{exp.company}</span>
                  )}
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>
                <ul className="space-y-1 pt-1 text-slate-300">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              EDUCATION & CERTIFICATIONS
            </h2>
            <div className="space-y-2 text-xs">
              {EDUCATIONS.map((edu) => (
                <div key={edu.id} className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-white">{edu.degree}</div>
                    <div className="text-slate-400">{edu.institution}</div>
                    {edu.note && <div className="text-[10px] text-emerald-400/90 pt-0.5">★ {edu.note}</div>}
                  </div>
                  <div className="font-mono text-emerald-400">{edu.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
