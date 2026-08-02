import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Award, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES, EDUCATIONS, EY_AWARDS } from '../data/resumeData';

export const ResumeSection: React.FC = () => {
  const [expandedExp, setExpandedExp] = useState<string>('exp-ey');

  const toggleExp = (id: string) => {
    setExpandedExp(prev => (prev === id ? '' : id));
  };

  return (
    <section id="resume" className="pt-6 pb-4 space-y-6 border-t border-white/10">
      {/* Section Eyebrow Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            03 // RESUME & CAREER TIMELINE
          </span>
        </div>
        <div className="hidden sm:block text-xs font-mono text-slate-500">
          15+ YEARS EXECUTIVE RECORD
        </div>
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        Professional Journey & Education
      </h2>

      {/* EY Honors Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-[#181c28] to-emerald-500/10 border border-amber-500/30 space-y-3">
        <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold">
          <Award className="w-5 h-5 text-amber-400" />
          <span>EY Leadership Recognition & Honors</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {EY_AWARDS.map((award, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#12151e] border border-amber-500/20 space-y-1">
              <div className="text-sm font-bold text-white">{award.title}</div>
              <div className="text-xs font-mono text-amber-400">{award.period}</div>
              <p className="text-xs text-slate-400 leading-relaxed pt-1">{award.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Experience Timeline */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-lg font-bold text-white">
          <Briefcase className="w-5 h-5 text-emerald-400" />
          <span>Professional Work Experience</span>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-emerald-500/30 space-y-8">
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedExp === exp.id;
            return (
              <div key={exp.id} className="relative group">
                {/* Timeline Dot */}
                <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                  isExpanded ? 'bg-emerald-400 border-emerald-300 shadow-[0_0_12px_rgba(40,233,140,0.8)] scale-125' : 'bg-[#0b0d12] border-slate-600 group-hover:border-emerald-400'
                }`} />

                {/* Card Container */}
                <div className={`p-6 rounded-2xl transition-all border ${
                  isExpanded ? 'bg-[#181c28] border-emerald-500/40 shadow-xl' : 'bg-[#12151e]/80 border-white/5 hover:border-white/20'
                }`}>
                  {/* Card Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 cursor-pointer" onClick={() => toggleExp(exp.id)}>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-emerald-400 font-semibold px-2.5 py-0.5 rounded-md bg-emerald-500/10">
                          {exp.period}
                        </span>
                        {exp.award && (
                          <span className="text-[11px] font-mono text-amber-300 px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30">
                            ★ {exp.award}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                        <span className="text-emerald-400">{exp.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-slate-500" />{exp.location}</span>
                      </div>
                    </div>

                    <button className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Highlights & Skills (Expandable) */}
                  {isExpanded && (
                    <div className="mt-5 pt-5 border-t border-white/10 space-y-4">
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                        {exp.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="text-[11px] font-mono text-slate-300 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">
                            #{skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Education & Academic Qualifications */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center gap-2 text-lg font-bold text-white">
          <GraduationCap className="w-5 h-5 text-cyan-400" />
          <span>Education & Qualifications</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {EDUCATIONS.map((edu) => (
            <div key={edu.id} className="p-5 rounded-2xl bg-[#12151e]/80 border border-white/5 hover:border-cyan-500/30 transition-all space-y-2">
              <div className="text-xs font-mono text-cyan-400">{edu.year}</div>
              <h4 className="text-sm font-bold text-white leading-snug">{edu.degree}</h4>
              <p className="text-xs text-slate-400">{edu.institution}</p>
              {edu.note && (
                <div className="text-[11px] text-emerald-400/90 pt-1 font-mono">
                  ★ {edu.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
