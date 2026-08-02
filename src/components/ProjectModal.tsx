import React from 'react';
import { X, CheckCircle2, Sparkles, Building2, Tag } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#12151e] border border-emerald-500/30 p-6 sm:p-8 space-y-6 shadow-[0_0_50px_rgba(40,233,140,0.2)] custom-scrollbar">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400 uppercase">
              {project.category} Case Study
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5" />
              {project.client}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h2>
        </div>

        {/* Hero Cover Image */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Problem vs Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-[#181c28] border border-white/5 space-y-1.5">
            <div className="font-bold text-red-400 uppercase tracking-wider text-[10px] font-mono">The Business Problem</div>
            <p className="text-slate-300 leading-relaxed">{project.problem}</p>
          </div>

          <div className="p-4 rounded-xl bg-[#181c28] border border-emerald-500/20 space-y-1.5">
            <div className="font-bold text-emerald-400 uppercase tracking-wider text-[10px] font-mono">The UX & AI Solution</div>
            <p className="text-slate-300 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Quantified Outcomes */}
        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Key Quantified Outcomes</span>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-2 text-xs sm:text-sm">
            {project.outcomes.map((out, idx) => (
              <div key={idx} className="flex items-start gap-2 text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{out}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2 pt-2 border-t border-white/5">
          <div className="text-[11px] font-mono uppercase text-slate-500">Tools & Technologies</div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
