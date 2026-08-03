import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AreasOfInterest from './components/AreasOfInterest';
import SkillsMatrix from './components/SkillsMatrix';
import EducationSection from './components/EducationSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsShowcase from './components/ProjectsShowcase';
import InteractiveTerminal from './components/InteractiveTerminal';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DeveloperScoreModal from './components/DeveloperScoreModal';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isScoreModalOpen, setIsScoreModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const canvasRef = useRef(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.5,
      color: Math.random() > 0.5 ? 'rgba(0, 245, 160, ' : 'rgba(0, 217, 246, ',
      alpha: Math.random() * 0.4 + 0.1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ')';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00f5a0';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-slate-100 selection:bg-[#00f5a0] selection:text-black">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-60"
      />

      <div className="relative z-10">
        <Navbar onOpenScoreModal={() => setIsScoreModalOpen(true)} />
        
        <main>
          <Hero onOpenScoreModal={() => setIsScoreModalOpen(true)} />
          <AreasOfInterest />
          <SkillsMatrix />
          <EducationSection />
          <ExperienceTimeline />
          <ProjectsShowcase />
          <InteractiveTerminal />
          <ContactSection onShowToast={showToast} />
        </main>

        <Footer />
      </div>

      <DeveloperScoreModal
        isOpen={isScoreModalOpen}
        onClose={() => setIsScoreModalOpen(false)}
      />

      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
          <div className="cred-card border-[#00f5a0]/40 p-4 rounded-2xl shadow-2xl flex items-center gap-3 text-xs font-mono text-white bg-[#0e0e11]/95 backdrop-blur-xl">
            <CheckCircle2 className="w-5 h-5 text-[#00f5a0] shrink-0" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}
