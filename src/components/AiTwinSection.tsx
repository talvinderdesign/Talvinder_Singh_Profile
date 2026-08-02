import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Sparkles, RefreshCw, MessageSquare, ShieldCheck } from 'lucide-react';
import { ChatMessage } from '../types';

export const AiTwinSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      sender: 'ai',
      text: "Hello! I am Tal.AI — Talvinder's AI Strategy Twin. You can ask me anything about his 15+ years of UX Strategy experience, education, professional journey etc. How can I assist you today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (queryText?: string) => {
    const textToSend = queryText || input.trim();
    if (!textToSend || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!queryText) setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: messages
        })
      });

      const data = await res.json();
      const aiReplyText = data.reply || "I am glad to provide insights into Talvinder's executive background!";

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      console.error("Chat error:", err);
      const errorMsg: ChatMessage = {
        id: `ai-err-${Date.now()}`,
        sender: 'ai',
        text: "Talvinder holds 15+ years of Senior UX Consultant experience at EY, leading AI workflow agents (Copilot/Replit) and SharePoint architecture. He is eligible for Germany EU Blue Card relocation. Feel free to contact him at talvinder8689@gmail.com!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-twin" className="pt-6 pb-4 space-y-6 border-t border-white/10">
      {/* Section Eyebrow Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            07 // TAL.AI STRATEGY TWIN
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
          <span>Talk with Tal.AI</span>
          <Sparkles className="w-6 h-6 text-emerald-400 animate-bounce" />
        </h2>
      </div>

      {/* Main Chat Interface Container */}
      <div className="rounded-3xl bg-[#12151e]/95 border border-emerald-500/30 overflow-hidden shadow-[0_0_40px_rgba(40,233,140,0.1)] flex flex-col h-[520px]">
        {/* Chat Header */}
        <div className="p-4 bg-[#181c28] border-b border-emerald-500/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-black">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span>Tal.AI Consultant</span>
                <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  Online
                </span>
              </div>
              <div className="text-[11px] text-slate-400">
                Senior UX Consultant (Associate Design Manager)
              </div>
            </div>
          </div>

          <button
            onClick={() => setMessages([messages[0]])}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors text-xs flex items-center gap-1 cursor-pointer"
            title="Reset Conversation"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>

        {/* Chat Scroll Log */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 custom-scrollbar">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.sender === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`p-2 rounded-xl shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-emerald-500 text-black'
                    : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[85%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed space-y-1 ${
                  msg.sender === 'user'
                    ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-100 rounded-tr-none'
                    : 'bg-[#181c28] border border-white/10 text-slate-200 rounded-tl-none'
                }`}
              >
                <div className="whitespace-pre-wrap">{msg.text}</div>
                <div className="text-[10px] font-mono text-slate-500 text-right pt-1">
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Bot className="w-4 h-4 animate-spin" />
              </div>
              <div className="p-3 rounded-2xl bg-[#181c28] border border-white/10 text-xs font-mono text-emerald-400 flex items-center gap-2">
                <span>Analyzing request & querying EY profile knowledge base...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="p-3 bg-[#181c28] border-t border-emerald-500/20 flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter query here"
            className="flex-1 bg-[#12151e] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="p-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-black font-semibold transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};
