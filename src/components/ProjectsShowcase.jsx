import React, { useState } from 'react';
import { ExternalLink, Github, Eye, X, Layers } from 'lucide-react';

export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'auralex',
      title: 'Auralex',
      subtitle: 'First Information Report (FIR) Generator and Legal Section Analyzer',
      description: 'Auralex is a legal technology platform engineered to analyze statutory sections and generate structured FIR documentation with high precision.',
      techStack: ['React', 'TypeScript', 'TailwindCSS', 'Python', 'Firebase'],
      image: '/images/auralexx.png',
      githubUrl: 'https://github.com/harikrishnan669/AURALEX',
      demoUrl: null,
      highlights: [
        'Automated legal section mapping using NLP algorithms',
        'Structured automated FIR PDF generation engine',
        'Firebase document storage & cloud user authentication',
      ],
    },
    {
      id: 'yt-summarizer',
      title: 'YT Summarizer',
      subtitle: 'AI YouTube Study Assistant Bot',
      description: 'Your personal study assistant! This bot makes learning easier by converting YouTube videos into summarized notes with key points and takeaways.',
      techStack: ['Python', 'Streamlit', 'YouTube API'],
      image: '/images/YTSummarizer.png',
      githubUrl: 'https://github.com/harikrishnan669/Youtube_summarizer',
      demoUrl: null,
      highlights: [
        'Automated YouTube transcript fetcher & subtitle parser',
        'Text summarization & key point extraction pipeline',
        'Interactive Streamlit UI with quick export options',
      ],
    },
    {
      id: 'FOOD AR',
      title: 'FOOD AR',
      subtitle: 'An AR-based app ',
      description: 'FoodAR is a AR-based app allows customers to view 3D visualizations of Kerala dishes, showcasing their textures, ingredients, presentation in real-time using smartphones or tablets and also to submit reviews by the customers.',
      techStack: ['Unity', 'Vuforia', 'Visual Studio', 'Blender', 'Firebase', 'C#'],
      image: '/images/foodar.png',
      githubUrl: 'https://github.com/harikrishnan669/FoodAR',
      highlights: [
        'Vuforia image tracking for marker-based AR experiences',
        '3D model rendering using Blender and imported to Unity',
        'Firebase real-time database for user reviews & ratings',
      ],
    },
    {
      id: 'SpecBoot',
      title: 'SpecBoot',
      subtitle: 'An AI-powered desktop assistant',
      description: 'SpecBoot is an AI-powered desktop assistant designed to remind users to wear spec/glasses while using their laptop. The application automatically starts when the system turns on or wakes from sleep, temporarily accesses the webcam, detects whether the user is wearing glasses using AI, and alerts the user if glasses are not detected.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Electron', 'Teachable-Machine', 'Tensorflow'],
      image: '/images/specboot.png',
      githubUrl: 'https://github.com/harikrishnan669/SpecBoot',
      demoUrl: null,
      highlights: [
        'Automated real-time glasses detection using computer vision',
        'Cross-platform desktop application built with Electron',
        'Tensorflow.js & Teachable Machine for on-device AI inference',
      ],
    },
    {
      id: 'netflix-clone',
      title: 'Netflix Clone',
      subtitle: 'React Movie Streaming UI Clone',
      description: 'A Simple Netflix clone built using React, movie trailer popups, category carousels, and live movie API integration.',
      techStack: ['React', 'JavaScript', 'TailwindCSS'],
      image: '/images/clone.png',
      githubUrl: 'https://github.com/harikrishnan669/Netflix-clone',
      demoUrl: 'https://netflix-clone-kappa-pied.vercel.app/',
      highlights: [
        'Movie banner featuring trailer video integration',
        'Category horizontal scrolling lists',
        'Responsive layout matching Netflix web UI',
      ],
    },
    {
      id: 'rit-compass',
      title: 'RIT Compass',
      subtitle: 'Campus Navigation & AR Guide',
      description: 'Interactive campus navigation & guidance web app for students and visitors at RIT Kottayam.',
      techStack: ['React', 'JavaScript', 'WebGL / AR', 'Google Maps API'],
      image: '/images/ritcompass.png',
      githubUrl: 'https://github.com/harikrishnan669/RITCompass-FE',
      demoUrl: 'https://rit-compass.vercel.app/',
      highlights: [
        'Interactive campus navigation & guidance web app',
      ],
    },
    {
      id: 'supermarket-system',
      title: 'Supermarket Management System',
      subtitle: 'Python Billing & Stock Management',
      description: 'A Management system built using Tkinter which is mainly used for billing system to add and update the product stock.',
      techStack: ['Python', 'Tkinter', 'MySQL'],
      image: '/images/supermarket.png',
      githubUrl: 'https://github.com/harikrishnan669/Supermarket_management_system',
      demoUrl: null,
      highlights: [
        'Tkinter desktop GUI featuring item search and tax calculation',
        'Relational database backend tracking product inventory',
      ],
    },
    {
      id: 'design-vault',
      title: 'Design Vault',
      subtitle: 'Graphic Design & UI/UX Portfolio Showcase',
      description: 'A website to showcase my design works done using Adobe Photoshop, Figma, and Canva.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      image: '/images/designv.png',
      githubUrl: 'https://github.com/harikrishnan669/Design_Works',
      demoUrl: 'https://harikrishnan669.github.io/Design_Works/',
      highlights: [
        'Clean gallery showcasing poster designs & visual identity projects',
        'Responsive web presentation layout',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#09090b] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-left max-w-3xl mb-12">
          <span className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-widest">
            FEATURED WORKS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-1">
            My <span className="text-zinc-400">Projects</span>.
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1">
            Click on any project to view details & key highlights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="human-card rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              <div className="relative aspect-video overflow-hidden bg-[#141416]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-zinc-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-xs mt-1 leading-relaxed line-clamp-2">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-[#18181c] border border-white/10 text-[10px] font-mono text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1 text-xs font-mono text-white hover:text-zinc-300 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Details</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-[#18181c] border border-white/10 text-zinc-300 hover:text-white transition-all"
                        title="GitHub Code"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white hover:text-black transition-all"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="human-card rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-[#1a1a1c] text-zinc-400 hover:text-white border border-white/10"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase mb-2">
              <Layers className="w-4 h-4" />
              <span>PROJECT OVERVIEW</span>
            </div>

            <h2 className="font-display text-2xl font-bold text-white mb-1">
              {selectedProject.title}
            </h2>
            <p className="text-xs font-mono text-zinc-400 mb-4">
              {selectedProject.subtitle}
            </p>

            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="flex flex-col gap-3 mb-6">
              <h4 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest">
                KEY HIGHLIGHTS
              </h4>
              <ul className="flex flex-col gap-2">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                    <span className="text-white">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex flex-wrap gap-1">
                {selectedProject.techStack.map(t => (
                  <span key={t} className="px-2.5 py-1 rounded bg-[#18181c] border border-white/10 text-[11px] font-mono text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="btn-human-primary px-5 py-2 rounded-xl text-xs font-bold"
              >
                CLOSE
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
