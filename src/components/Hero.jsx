import React from 'react';
import { FileText, ArrowDown, Mail, ArrowUpRight } from 'lucide-react';
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  const socialLinks = [
    {
      name: "WhatsApp",
      href: "https://wa.me/9656990468",
      icon: FaWhatsapp,
      color: "hover:text-green-500",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/hari2k4/",
      icon: FaLinkedin,
      color: "hover:text-[#0A66C2]",
    },
    {
      name: "GitHub",
      href: "https://github.com/harikrishnan669",
      icon: FaGithub,
      color: "hover:text-white",
    },
    {
      name: "X / Twitter",
      href: "https://x.com/hari_2k4",
      icon: FaXTwitter,
      color: "hover:text-white",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/hari_2k4/",
      icon: FaInstagram,
      color: "hover:text-pink-500",
    },
    {
      name: "Behance",
      href: "https://www.behance.net/11er",
      icon: FaBehance,
      color: "hover:text-[#1769FF]",
    },
  ];

  return (
    <section id="home" className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-[#000000] bg-monochrome-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Avatar Profile */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl p-1.5 bg-gradient-to-b from-white/30 via-white/10 to-transparent border border-white/20 shadow-2xl">
                <img
                  src="/images/rhari.jpg"
                  alt="R Harikrishnan"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Introduction */}
          <div className="lg:col-span-8 flex flex-col gap-6 text-left">

            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#121215] border border-white/15">
              <span className="w-2 h-2 rounded-full bg-[#65D9ff] animate-pulse" />
              <span className="text-xs font-mono font-medium text-zinc-300">
                B.Tech CSE Graduate • RIT Kottayam
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I am <span className="text-[#65D9ff]">R Harikrishnan</span>.
            </h1>

            <div className="text-zinc-300 text-sm sm:text-base font-normal leading-relaxed flex flex-col gap-3 max-w-3xl">
              <p>
                I am a <strong className="text-white font-semibold">Computer Science and Engineering</strong> graduate with a Bachelor of Technology (<strong className="text-white font-semibold">B.Tech</strong>) from <strong className="text-white font-semibold">Rajiv Gandhi Institute of Technology (RIT), Kottayam</strong>. My academic journey has provided me with a strong foundation in software engineering, data structures, algorithms, databases, and modern web technologies.
              </p>
              <p className="text-zinc-400">
                I am passionate about <strong className="text-zinc-200 font-medium">Machine Learning</strong> and <strong className="text-zinc-200 font-medium">Software Development</strong>, building scalable, responsive, and user-centric applications. Alongside development, I have a keen interest in <strong className="text-zinc-200 font-medium">UI/UX Design</strong> and <strong className="text-zinc-200 font-medium">Graphic Design</strong>.
              </p>
            </div>

            {/* Social Icons Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {socialLinks.map((s) => {
                const Icon = s.icon;

                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.name}
                    className={`group w-10 h-10 rounded-xl bg-[#141416] border border-white/10 hover:border-white flex items-center justify-center transition-all duration-300`}
                  >
                    <Icon
                      size={20}
                      className={`text-zinc-400 ${s.color} transition-colors duration-300`}
                    />
                  </a>
                );
              })}
            </div>
            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://www.papermark.com/view/cmmyerx2a000dk004k6qu7ing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-human-primary px-6 py-3.5 rounded-2xl text-xs font-bold tracking-wider flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>RESUME</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="btn-human-secondary px-6 py-3.5 rounded-2xl text-xs font-semibold"
              >
                MY PROJECTS
              </a>

              <a
                href="#contact"
                className="btn-human-secondary px-6 py-3.5 rounded-2xl text-xs font-semibold flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>GET IN TOUCH</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
