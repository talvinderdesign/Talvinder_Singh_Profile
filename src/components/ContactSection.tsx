import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    const targetEmail = "talvinder8689@gmail.com";
    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setSuccessMsg(data.message || `Thank you ${formData.name}! Your message has been sent to ${targetEmail}.`);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Trigger default email app with prefilled details
      window.location.href = mailtoUrl;
    } catch (err) {
      setSuccessMsg(`Thank you ${formData.name}! Your message has been routed to ${targetEmail}.`);
      window.location.href = mailtoUrl;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-6 pb-4 space-y-6 border-t border-white/10">
      {/* Section Eyebrow Header */}
      <div className="flex items-center gap-3">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          07 // CONTACT
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        Let's Discuss Your Next Strategic Initiative
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Direct Contact Cards */}
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-[#12151e]/80 border border-emerald-500/20 space-y-4">
            <h3 className="text-xl font-bold text-white">
              Connect at:
            </h3>

            <div className="space-y-3 pt-2 text-xs">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#181c28] hover:bg-emerald-500/10 hover:text-emerald-300 border border-white/5 hover:border-emerald-500/30 transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-300 font-semibold uppercase tracking-wider font-mono">Email Address</div>
                  <div className="font-mono text-slate-100 font-bold">{PERSONAL_INFO.email}</div>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#181c28] hover:bg-emerald-500/10 hover:text-emerald-300 border border-white/5 hover:border-emerald-500/30 transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-300 font-semibold uppercase tracking-wider font-mono">Direct Phone</div>
                  <div className="font-mono text-slate-100 font-bold">{PERSONAL_INFO.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#181c28] border border-white/5">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-300 font-semibold uppercase tracking-wider font-mono">Current Base</div>
                  <div className="text-slate-100 font-bold">{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#12151e]/90 border border-emerald-500/30 space-y-4">
          <h3 className="text-xl font-bold text-white">Send Direct Inquiry</h3>

          {successMsg && (
            <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{successMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-400 font-mono mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Add text here"
                  className="w-full bg-[#181c28] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-mono mb-1">Your Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Add text here"
                  className="w-full bg-[#181c28] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 font-mono mb-1">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Add text here"
                className="w-full bg-[#181c28] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50"
              />
            </div>

            <div>
              <label className="block text-slate-400 font-mono mb-1">Message *</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Add text here"
                className="w-full bg-[#181c28] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-bold text-sm tracking-wide hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(40,233,140,0.3)]"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Sending Message...' : 'Submit Message'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
