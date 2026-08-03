import React from 'react';
import { Code, Terminal, Palette, Cpu, Check } from 'lucide-react';

export default function SkillsMatrix() {
  const skillCategories = [
    {
      title: 'Programming Languages & Web',
      icon: Code,
      items: [
        { name: 'C Programming', tag: 'Language' },
        { name: 'C# Programming', tag: 'Language' },
        { name: 'Python', tag: 'Language' },
        { name: 'Java', tag: 'Language' },
        { name: 'HTML & CSS', tag: 'Frontend' },
        { name: 'JavaScript & TypeScript', tag: 'Language' },
        { name: 'React', tag: 'Frontend Library' },
        { name: 'Next.js', tag: 'Framework' },
        { name: 'Node.js', tag: 'Backend' },
        { name: 'Vite', tag: 'Build Tool' },
        { name: 'MySQL', tag: 'Database' },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: Terminal,
      items: [
        { name: 'Firebase', tag: 'Backend Platform' },
        { name: 'Visual Studio & VS Code', tag: 'IDE / Editor' },
        { name: 'Git & GitHub', tag: 'Version Control' },
        { name: 'Bash', tag: 'Shell' },
        { name: 'NPM', tag: 'Package Manager' },
        { name: 'Postman', tag: 'API Testing' },
        { name: 'Windows & Ubuntu', tag: 'Operating System' },
      ],
    },
    {
      title: 'Design & Creative Tools',
      icon: Palette,
      items: [
        { name: 'Figma', tag: 'UI/UX Design' },
        { name: 'Adobe Photoshop', tag: 'Graphic Design' },
        { name: 'Canva', tag: 'Visual Media' },
        { name: 'Unity', tag: 'Game Engine' },
        { name: 'Blender', tag: '3D Modeling' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#000000] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left max-w-3xl mb-12">
          <span className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-widest">
            TECHNICAL COMPETENCY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-1">
            My <span className="text-zinc-400">Skills</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="human-card rounded-2xl p-6 sm:p-7 flex flex-col gap-5"
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#18181b] border border-white/10 flex items-center justify-center text-white">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-2.5">
                  {cat.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-[#141416] border border-white/10 flex items-center justify-between hover:border-white/20 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-zinc-400 shrink-0" />
                        <span className="text-xs font-medium text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-[#1f1f23] text-[10px] font-mono text-zinc-400">
                        {skill.tag}
                      </span>
                    </div>
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
