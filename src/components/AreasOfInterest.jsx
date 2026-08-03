import React from 'react';
import { Layout, Palette, Code, Layers } from 'lucide-react';

export default function AreasOfInterest() {
  const interests = [
    {
      title: 'Web Development',
      icon: Layout,
      description: 'A strong interest in both Front-end and Back-end Development, building responsive, functional, and user-centric web applications.',
      tags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'TailwindCSS'],
    },
    {
      title: 'UI/UX Designing',
      icon: Palette,
      description: 'Passionate about UI/UX design and enjoy creating intuitive, user-friendly digital experiences.',
      tags: ['Figma', 'User Research', 'Wireframing', 'Prototyping'],
    },
    {
      title: 'Graphic Designing',
      icon: Layers,
      description: 'I find joy in turning imagination into eye-catching designs that speak louder than words.',
      tags: ['Adobe Photoshop', 'Canva', 'Event Branding', 'Visual Strategy'],
    },
    {
      title: 'Programming',
      icon: Code,
      description: 'Enjoy programming and solving problems by building efficient and innovative solutions through code.',
      tags: ['Python', 'C / C#', 'Java', 'Data Structures', 'Machine Learning'],
    },
  ];

  return (
    <section id="interest" className="py-20 bg-[#09090b] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left max-w-3xl mb-12">
          <span className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-widest">
            CORE DOMAINS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Areas of <span className="text-zinc-400">Interests</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interests.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="human-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#18181b] border border-white/10 flex items-center justify-center text-white mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-[#141416] border border-white/10 text-[11px] font-mono text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
