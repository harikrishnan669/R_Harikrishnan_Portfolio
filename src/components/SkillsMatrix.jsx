import React from "react";
import { Code, Terminal, Palette } from "lucide-react";

import {
  SiPython,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiVite,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiUnity,
  SiBlender,
  SiNpm,
} from "react-icons/si";

import {
  FaCode,
  FaHashtag,
  FaTerminal,
  FaWindows,
  FaUbuntu,
  FaPaintBrush,
  FaJava,
  FaCss3,
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";
export default function SkillsMatrix() {
  const skillCategories = [
    {
      title: "Programming Languages & Web",
      icon: Code,
      items: [
        { name: "C Programming", tag: "Language", icon: FaCode },
        { name: "C# Programming", tag: "Language", icon: FaHashtag },
        { name: "Python", tag: "Language", icon: SiPython },
        { name: "Java", tag: "Language", icon: FaJava },
        { name: "HTML", tag: "Frontend", icon: SiHtml5 },
        { name: "CSS", tag: "Frontend", icon: FaCss3 },
        { name: "JavaScript", tag: "Language", icon: SiJavascript },
        { name: "TypeScript", tag: "Language", icon: SiTypescript },
        { name: "React", tag: "Frontend Library", icon: SiReact },
        { name: "Next.js", tag: "Framework", icon: SiNextdotjs },
        { name: "Node.js", tag: "Backend", icon: SiNodedotjs },
        { name: "Vite", tag: "Build Tool", icon: SiVite },
        { name: "MySQL", tag: "Database", icon: SiMysql },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Terminal,
      items: [
        { name: "Firebase", tag: "Backend Platform", icon: SiFirebase },
        { name: "Visual Studio Code", tag: "IDE", icon: VscVscode },
        { name: "Git", tag: "Version Control", icon: SiGit },
        { name: "GitHub", tag: "Repository", icon: SiGithub },
        { name: "Bash", tag: "Shell", icon: FaTerminal },
        { name: "NPM", tag: "Package Manager", icon: SiNpm },
        { name: "Postman", tag: "API Testing", icon: SiPostman },
        { name: "Windows", tag: "Operating System", icon: FaWindows },
        { name: "Ubuntu", tag: "Operating System", icon: FaUbuntu },
      ],
    },
    {
      title: "Design & Creative Tools",
      icon: Palette,
      items: [
        { name: "Figma", tag: "UI/UX Design", icon: SiFigma },
        { name: "Adobe Photoshop", tag: "Graphic Design", icon: FaPaintBrush },
        { name: "Canva", tag: "Visual Media", icon: FaPaintBrush },
        { name: "Unity", tag: "Game Engine", icon: SiUnity },
        { name: "Blender", tag: "3D Modeling", icon: SiBlender },
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
            My <span className="text-[#65D9ff]">Skills</span>.
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
                  {cat.items.map((skill) => {
                    const SkillIcon = skill.icon || Code;

                    return (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-[#141416] border border-white/10 flex items-center justify-between hover:border-white/20 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <SkillIcon className="w-5 h-5 text-[#65D9FF]" />

                          <span className="text-sm font-medium text-white">
                            {skill.name}
                          </span>
                        </div>

                        <span className="px-2 py-0.5 rounded bg-[#1f1f23] text-[10px] font-mono text-zinc-400">
                          {skill.tag}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
