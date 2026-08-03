import React from 'react';
import { X, ShieldCheck, CheckCircle2, Award, Cpu, Zap, Lock, Sparkles, Share2, GraduationCap } from 'lucide-react';
import { playClickSound } from '../utils/audio';

export default function DeveloperScoreModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const scoreMetrics = [
    {
      title: 'Academic Excellence & CSE Core',
      score: '98/100',
      percentage: 98,
      icon: GraduationCap,
      color: 'from-[#00f5a0] to-[#00d9f6]',
      details: 'B.Tech CSE from RIT Kottayam (8.08 CGPA), 94% in 12th State Board, strong Data Structures & Algorithms foundation.',
    },
    {
      title: 'Full-Stack & ML Engineering',
      score: '96/100',
      percentage: 96,
      icon: Cpu,
      color: 'from-[#00d9f6] to-[#3b82f6]',
      details: 'Built 8+ production web & AI apps including Auralex FIR Analyzer, YT Summarizer, and RITU 2025.',
    },
    {
      title: 'UI/UX & Creative Design',
      score: '97/100',
      percentage: 97,
      icon: Sparkles,
      color: 'from-[#ff2a5f] to-[#ff7b00]',
      details: 'Figma & Photoshop expert, ex-Design Lead at IEEE SB RIT, created event branding for hundreds of students.',
    },
    {
      title: 'Leadership & Community Execution',
      score: '95/100',
      percentage: 95,
      icon: Award,
      color: 'from-[#ffd700] to-[#00f5a0]',
      details: 'Ex-Chairperson of IEEE SB RIT, organized technical workshops, symposiums, and team management initiatives.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300">
      <div 
        className="cred-card border-white/20 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl shadow-black"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => {
            playClickSound('click');
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#1a1a1c] text-slate-400 hover:text-white border border-white/10 hover:border-white/30 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#1c1c20] border border-[#00f5a0]/40 flex items-center justify-center shadow-lg">
            <ShieldCheck className="w-7 h-7 text-[#00f5a0]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold tracking-widest text-[#00f5a0] uppercase">
                R HARIKRISHNAN AUDIT REPORT
              </span>
              <span className="bg-[#00f5a0]/15 text-[#00f5a0] border border-[#00f5a0]/30 text-[10px] font-mono px-2 py-0.5 rounded-full">
                B.TECH CSE RIT
              </span>
            </div>
            <h2 className="font-display text-2xl font-bold text-white">
              Developer Score Breakdown
            </h2>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-gradient-to-br from-[#18181c] to-[#0d0d0f] border border-white/10 flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-mono text-slate-400 uppercase">COMPOSITE DEVELOPER RATING</span>
            <div className="font-display text-4xl font-extrabold text-white flex items-baseline gap-2">
              <span>950</span>
              <span className="text-sm font-mono text-slate-400 font-normal">/ 990</span>
            </div>
            <span className="text-xs font-mono text-[#00f5a0] font-semibold">
              Software Engineering • ML • UI/UX & Graphic Design
            </span>
          </div>

          <div className="hidden sm:flex flex-col items-end gap-1">
            <div className="px-3 py-1 rounded-full bg-[#00f5a0]/10 border border-[#00f5a0]/30 text-[#00f5a0] text-xs font-mono font-bold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>RIT KOTTAYAM 2026</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500">CGPA: 8.08</span>
          </div>
        </div>

        <div className="flex flex-col gap-5 mb-8">
          <h3 className="text-xs font-mono font-bold text-slate-400 tracking-wider uppercase">
            AUDIT CATEGORIES
          </h3>

          {scoreMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.title}
                className="p-4 rounded-xl bg-[#141416] border border-white/10 hover:border-white/20 transition-all flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#1e1e22] text-slate-200">
                      <Icon className="w-5 h-5 text-[#00f5a0]" />
                    </div>
                    <span className="font-display font-semibold text-sm text-white">
                      {metric.title}
                    </span>
                  </div>
                  <span className="font-mono text-sm font-bold text-white">
                    {metric.score}
                  </span>
                </div>

                <div className="w-full h-2 rounded-full bg-[#202024] overflow-hidden relative">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${metric.color}`}
                    style={{ width: `${metric.percentage}%` }}
                  />
                </div>

                <p className="text-xs text-slate-400 font-normal">
                  {metric.details}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <button
            onClick={() => {
              playClickSound('high');
              alert("Harikrishnan's Developer Audit Report link copied to clipboard!");
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#161618] border border-white/10 hover:border-white/30 text-xs font-semibold text-slate-200 transition-all"
          >
            <Share2 className="w-4 h-4 text-[#00d9f6]" />
            <span>Share Audit Report</span>
          </button>

          <button
            onClick={() => {
              playClickSound('high');
              onClose();
            }}
            className="btn-cred-primary px-5 py-2 rounded-xl text-xs font-bold"
          >
            CLOSE AUDIT REPORT
          </button>
        </div>

      </div>
    </div>
  );
}
