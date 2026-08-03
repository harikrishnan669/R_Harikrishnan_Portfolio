import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Trash2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playClickSound } from '../utils/audio';

export default function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'R HARIKRISHNAN CLI v2.4.0 [Ready]\nType "help" to view available terminal commands.',
    },
  ]);
  const bottomRef = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const quickCommands = ['help', 'score', 'education', 'skills', 'projects', 'contact', 'sudo hire'];

  const handleCommandSubmit = (cmdStr) => {
    const rawCmd = (cmdStr || inputVal).trim().toLowerCase();
    if (!rawCmd) return;

    playClickSound('terminal');

    const newHistory = [...history, { type: 'user', text: `$ ${rawCmd}` }];

    if (rawCmd === 'clear' || rawCmd === 'cls') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let responseText = '';

    switch (rawCmd) {
      case 'help':
      case '?':
        responseText = `Available Commands:
  • score     : Display Harikrishnan's Developer Score
  • education : View B.Tech CSE & Academic Record (RIT Kottayam)
  • skills    : List Programming & Design Stack
  • projects  : View Auralex, RITU 2025, YT Summarizer & Projects
  • contact   : Get Direct Email, Phone & Social Links
  • sudo hire : Execute hire protocol (triggers celebration)
  • clear     : Reset CLI terminal output`;
        break;

      case 'score':
        responseText = `[DEVELOPER AUDIT REPORT]
Candidate  : R Harikrishnan
Score      : 950 / 990 (Top Tier Engineering & ML)
Academic   : 98/100 (CGPA 8.08 B.Tech CSE RIT Kottayam)
Full-Stack : 96/100 (React, Next.js, Node.js, Python)
UI/UX      : 97/100 (Figma, Photoshop, Ex-Design Lead)
Leadership : 95/100 (Ex-Chairperson IEEE SB RIT)`;
        break;

      case 'education':
        responseText = `[ACADEMIC BACKGROUND]
1. Rajiv Gandhi Institute of Technology (RIT), Kottayam
   • B.Tech in Computer Science & Engineering (2022-2026) | CGPA: 8.08
2. St. Joseph's Higher Secondary School
   • 12th Standard (2021-2022) | Grade: 94%
3. Christ Nagar Senior Secondary School
   • 10th Standard (2019-2020) | Grade: 88%`;
        break;

      case 'skills':
        responseText = `[CORE SKILL STACK]
  • Languages  : Python, JavaScript, TypeScript, C, C#, Java
  • Web Stack  : React, Next.js, Node.js, Express, HTML/CSS, MySQL, Firebase
  • Creative   : Figma, Adobe Photoshop, Canva, Blender, Unity Engine
  • Operating  : Windows, Ubuntu Linux`;
        break;

      case 'projects':
        responseText = `[FEATURED PROJECTS]
  1. Auralex       — Legal FIR Generator & Statutory Analyzer
  2. YT Summarizer — AI YouTube Video Study Assistant Bot
  3. RITU 2025     — Official Techno-Cultural Fest Web Portal
  4. Blogging Web  — Full Stack Blog Platform
  5. Netflix Clone — React Movie Streaming UI Clone
  6. RIT Compass   — Campus Navigation & AR Guidance Web App
  7. Supermarket   — Billing & Stock Management System (Tkinter)
  8. Design Vault  — Graphic Design & UI/UX Showcase`;
        break;

      case 'contact':
        responseText = `[DIRECT CONTACT DETAILS]
  • Email    : rharikrishnan2020@gmail.com
  • Phone    : +91 9656990468
  • LinkedIn : linkedin.com/in/hari2k4/
  • GitHub   : github.com/harikrishnan669
  • X        : x.com/hari_2k4
  • Behance  : behance.net/11er`;
        break;

      case 'sudo hire':
        responseText = `[SUCCESS] Hire protocol executed! Connecting to R Harikrishnan... 🎉`;
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00f5a0', '#00d9f6', '#ff2a5f', '#ffd700'],
        });
        setTimeout(() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 1200);
        break;

      case 'whoami':
        responseText = `guest@hari2k4.portfolio [Verified Visitor]`;
        break;

      default:
        responseText = `Command not recognized: "${rawCmd}". Type "help" for command list.`;
    }

    setHistory([...newHistory, { type: 'system', text: responseText }]);
    setInputVal('');
  };

  return (
    <section id="terminal" className="py-24 bg-[#08080a] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161618] border border-white/10 mb-4">
            <Terminal className="w-4 h-4 text-[#00d9f6]" />
            <span className="font-mono text-xs font-bold tracking-widest text-slate-300 uppercase">
              INTERACTIVE DEVELOPER TERMINAL
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Harikrishnan's Interactive CLI
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Direct terminal access to query skills, education, projects, or hire protocol.
          </p>
        </div>

        <div className="cred-card cred-card-glow rounded-3xl overflow-hidden border-white/15 shadow-2xl bg-[#09090b]">

          <div className="bg-[#121215] border-b border-white/10 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-3 font-mono text-xs text-slate-400 font-semibold">
                hari2k4@harikrishnan-portfolio:~
              </span>
            </div>

            <button
              onClick={() => {
                playClickSound('click');
                setHistory([]);
              }}
              className="p-1.5 rounded-lg bg-[#1a1a1e] hover:bg-white/10 text-slate-400 hover:text-white transition-all text-xs font-mono flex items-center gap-1"
              title="Clear Terminal"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Clear</span>
            </button>
          </div>

          <div className="bg-[#0e0e11] border-b border-white/5 px-4 py-2 flex items-center gap-2 overflow-x-auto text-xs font-mono">
            <span className="text-slate-500 uppercase tracking-widest text-[10px] shrink-0">QUICK CMDS:</span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommandSubmit(cmd)}
                className="px-2.5 py-1 rounded bg-[#18181c] border border-white/10 hover:border-[#00f5a0] text-slate-300 hover:text-[#00f5a0] shrink-0 transition-all"
              >
                {cmd}
              </button>
            ))}
          </div>

          <div ref={terminalRef}
            className="p-6 font-mono text-xs sm:text-sm min-h-[300px] max-h-[420px] overflow-y-auto flex flex-col gap-3 text-slate-200">
            {history.map((item, idx) => (
              <div
                key={idx}
                className={item.type === 'user' ? 'text-[#00f5a0] font-bold' : 'text-slate-300 whitespace-pre-wrap leading-relaxed'}
              >
                {item.text}
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommandSubmit();
            }}
            className="bg-[#121215] border-t border-white/10 p-3 sm:p-4 flex items-center gap-3"
          >
            <span className="font-mono font-bold text-[#00f5a0] shrink-0">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type a command (e.g. help, score, education, sudo hire)..."
              className="w-full bg-transparent border-none text-white font-mono text-xs sm:text-sm focus:outline-none placeholder:text-slate-600"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-[#00f5a0] text-black font-bold hover:bg-[#00d9f6] transition-colors shrink-0"
              title="Run Command"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
