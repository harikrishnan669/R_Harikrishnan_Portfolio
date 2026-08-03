import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function ExperienceTimeline() {
  const experiences = [
    {
      role: 'QUEST GLOBAL — PROJECT INTERN',
      logo: '/images/logos/qg.jpeg',
      period: 'Feb 2026 — Apr 2026',
      description: 'Worked on a smart parking system project focused on efficient vehicle detection and slot management using embedded hardware components. Gained hands-on experience in circuit design and schematic development using Cadence Capture, along with practical exposure to hardware integration, debugging, and system-level design.',
      labels: ['Embedded Engineering', 'Hardware', 'Cadence-Capture'],
    },
    {
      role: 'IEEE SB RIT — CHAIRPERSON',
      logo: '/images/logos/ieeesbrit.png',
      period: 'Apr 2025 — Apr 2026',
      description: 'Lead a diverse student community as Chairperson of IEEE SB RIT, organizing events, technical workshops, and team initiatives that encourage learning, innovation, and active participation.',
      labels: ['Leadership', 'Team management', 'Decision Making'],
    },
    {
      role: 'IEEE SB RIT — DESIGN LEAD',
      logo: '/images/logos/ieeesbrit.png',
      period: 'Feb 2024 — Mar 2025',
      description: "As a seasoned Design Lead proficient in Figma, Adobe Photoshop, and Canva, I've spearheaded innovative visual strategies at IEEE, shaping the organization's digital and print materials to resonate with global audiences.",
      labels: ['Figma', 'Adobe Photoshop', 'Canva'],
    },
    {
      role: 'ISTE SC RIT — DESIGNER',
      logo: '/images/logos/iste.png',
      period: 'Dec 2023 — Apr 2024',
      description: 'Contributed as a graphic designer, creating visually engaging posters, social media content, and event branding materials. Collaborated with the core team to maintain a consistent visual identity for various technical and non-technical events.',
      labels: ['Figma', 'Adobe Photoshop'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[#000000] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-left max-w-3xl mb-12">
          <span className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-widest">
            WORK & RESPONSIBILITIES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-1">
            My <span className="text-[#65D9ff]">Experience</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="human-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-5"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center overflow-hidden shrink-0">
                      <img
                        src={exp.logo}
                        alt={exp.role}
                        className="w-15 h-15 object-cover"
                      />
                    </div>

                    <h3 className="font-mono text-sm font-bold text-white leading-tight break-words">
                      {exp.role}
                    </h3>
                  </div>

                  <span className="bg-[#141416] border border-white/10 font-mono text-[10px] text-zinc-400 px-2.5 py-1 rounded-full shrink-0">
                    {exp.period}
                  </span>
                </div>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                {exp.labels.map((lbl) => (
                  <span
                    key={lbl}
                    className="px-2.5 py-1 rounded-lg bg-[#141416] border border-white/10 text-[10px] font-mono text-zinc-300"
                  >
                    {lbl}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
