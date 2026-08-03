import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000000] border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#141416] border border-white/15 flex items-center justify-center font-display font-black text-white text-xs">
            RK
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xs text-white">
              R HARIKRISHNAN
            </span>
            <span className="text-[10px] font-mono text-zinc-500">
              Software Engineer
            </span>
          </div>
        </div>

        <div className="text-xs font-mono text-zinc-400 flex flex-wrap items-center gap-2 text-center">
          <span>Made with 🖤 by</span>
          <strong className="text-white">R Harikrishnan</strong>
          <span>|</span>
          <a href="https://x.com/hari_2k4" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            @hari_2k4
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-[#141416] border border-white/10 hover:border-white text-zinc-300 hover:text-white transition-all flex items-center gap-2 text-xs font-mono group"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 text-zinc-400 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
