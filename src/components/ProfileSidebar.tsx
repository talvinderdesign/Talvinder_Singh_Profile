import React from 'react';
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Download, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface ProfileSidebarProps {
  onOpenContact: () => void;
  onOpenPdf: () => void;
}

export const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ onOpenContact, onOpenPdf }) => {
  return (
    <aside className="w-full lg:w-[280px] xl:w-[300px] shrink-0 lg:sticky lg:top-6 lg:self-start lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto custom-scrollbar z-30 flex flex-col justify-between p-4 sm:p-5 rounded-3xl bg-[#12151e]/95 backdrop-blur-2xl border border-emerald-500/20 shadow-[0_0_30px_rgba(40,233,140,0.08)]">
      {/* Top Header & Avatar */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] font-semibold text-emerald-300 uppercase tracking-wider">Available</span>
          </div>
        </div>

        {/* Profile Avatar Card */}
        <div className="relative group mb-3">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 blur-md group-hover:opacity-100 transition duration-500 opacity-50" />
          <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 bg-[#1a1e2b] flex flex-col items-center justify-center p-3.5 text-center">
            {/* Styled Profile Avatar Graphic */}
            <div className="relative w-24 h-24 mb-2.5 rounded-2xl bg-gradient-to-tr from-emerald-500/50 via-teal-500/50 to-cyan-400/50 p-0.5 shadow-xl shadow-black/80 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-[14px] bg-[#0d0f17] flex items-center justify-center overflow-hidden relative">
                <img
                  src="/profile%20image.png"
                  alt="Talvinder Singh - Senior UX Consultant"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "/talvinder-portrait.svg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            
            <h1 className="text-lg font-light tracking-wide text-white mb-0.5">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider mb-1.5">
              Senior UX Consultant @ EY
            </p>
            <p className="text-[10.5px] text-slate-400 leading-snug">
              AI-Augmented Design Strategy | 15+ Years Transforming Complex Business Problems into Intuitive AI-Driven Products
            </p>
          </div>
        </div>

        {/* Key Quick Badges */}
        <div className="mb-3">
          <div className="p-2 rounded-xl bg-[#181c28] border border-white/5 flex flex-col gap-0.5">
            <div className="flex items-center gap-1 text-amber-400 text-[10.5px] font-semibold">
              <Award className="w-3 h-3" />
              <span>4x EY Award Winner</span>
            </div>
            <span className="text-[9.5px] text-slate-400">Achiever Extraordinaire</span>
          </div>
        </div>

        {/* Contact Info List */}
        <div className="space-y-1.5 mb-3 text-[10.5px] text-slate-200">
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors border border-transparent hover:border-emerald-500/20 group"
          >
            <div className="p-1 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors shrink-0">
              <Mail className="w-3.5 h-3.5" />
            </div>
            <div className="truncate min-w-0">
              <div className="text-[8.5px] text-slate-300 font-semibold uppercase tracking-wider">Email</div>
              <div className="font-semibold text-slate-100 truncate">{PERSONAL_INFO.email}</div>
            </div>
          </a>

          <a 
            href={`tel:${PERSONAL_INFO.phone}`} 
            className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors border border-transparent hover:border-emerald-500/20 group"
          >
            <div className="p-1 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors shrink-0">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[8.5px] text-slate-300 font-semibold uppercase tracking-wider">Phone</div>
              <div className="font-semibold text-slate-100">{PERSONAL_INFO.phone}</div>
            </div>
          </a>

          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="p-1 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[8.5px] text-slate-300 font-semibold uppercase tracking-wider">Location</div>
              <div className="text-slate-100 font-medium leading-tight">New Delhi, India (Open to Relocate)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons & Socials */}
      <div className="space-y-2 pt-2 border-t border-white/5">
        <button
          onClick={onOpenContact}
          className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-bold text-xs tracking-wide hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(40,233,140,0.3)] flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Let's Connect</span>
        </button>

        <div className="grid grid-cols-2 gap-2">
          <a
            href="/Talvinder_Singh_Profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Talvinder_Singh_Profile.pdf"
            className="py-1.5 px-2 rounded-xl bg-[#181c28] hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/30 text-[10.5px] font-medium transition-all flex items-center justify-center gap-1 cursor-pointer"
          >
            <Download className="w-3 h-3" />
            <span>PDF Resume</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="py-1.5 px-2 rounded-xl bg-[#181c28] hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/30 text-[10.5px] font-medium transition-all flex items-center justify-center gap-1"
          >
            <Linkedin className="w-3 h-3" />
            <span>LinkedIn</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
          </a>
        </div>
      </div>
    </aside>
  );
};
