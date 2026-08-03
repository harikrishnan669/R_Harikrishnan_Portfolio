import React, { useState } from 'react';
import { GraduationCap, Building2, ChevronDown, ChevronUp } from 'lucide-react';

export default function EducationSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const education = [
    {
      institution: 'Rajiv Gandhi Institute of Technology (RIT), Kottayam',
      period: '2022 — 2026',
      degree: 'B.Tech in Computer Science and Engineering (CSE)',
      grade: 'CGPA: 8.08',
      tag: 'Prestigious Government Engineering College',
      summary: 'I completed my Bachelor of Technology (B.Tech) in Computer Science and Engineering from Rajiv Gandhi Institute of Technology (RIT), Kottayam, a prestigious government engineering college. During my academic journey, I built a strong foundation in computer science while developing practical skills through projects, technical activities, and collaborative learning, preparing me for a career in the technology industry.',
      moreContent: 'Completing this program marked a significant milestone in my academic journey. Throughout my time at the institution, I deepened my knowledge of computer science, explored emerging technologies, and strengthened my problem-solving abilities under the guidance of experienced faculty members.',
    },
    {
      institution: "St. Joseph's Higher Secondary School",
      period: '2021 — 2022',
      degree: '12th Standard',
      grade: 'Grade: 94%',
      tag: 'State Syllabus Higher Secondary',
      summary: "I have successfully completed my 12th standard from St. Joseph's Higher Secondary School, a state syllabus institution, with an outstanding score of 94%.",
      moreContent: 'I am deeply thankful for the support and encouragement from my teachers, family, and friends who have been instrumental in my achievement.',
    },
    {
      institution: 'Christ Nagar Senior Secondary School',
      period: '2019 — 2020',
      degree: '10th Standard',
      grade: 'Grade: 88%',
      tag: 'CBSE Senior Secondary',
      summary: 'I have successfully completed my 10th standard from Christ Nagar Senior Secondary School, a CBSE institution, with an impressive score of 88%.',
      moreContent: 'I am grateful for the unwavering support of my teachers, family, and friends who have guided and encouraged me throughout this journey.',
    },
  ];

  return (
    <section id="education" className="py-20 bg-[#09090b] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left max-w-3xl mb-12">
          <span className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-widest">
            ACADEMIC BACKGROUND
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-1">
            My <span className="text-zinc-400">Education</span>.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {education.map((item, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={item.institution}
                className="human-card rounded-2xl p-6 sm:p-8 flex flex-col gap-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#18181b] border border-white/10 flex items-center justify-center text-white shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                        {item.institution}
                      </h3>
                      <span className="text-xs font-mono text-zinc-400">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-start sm:self-auto shrink-0">
                    <span className="bg-[#141416] border border-white/10 font-mono text-xs text-zinc-300 px-3 py-1 rounded-full">
                      {item.period}
                    </span>
                    <span className="font-mono text-xs font-extrabold text-white px-3 py-1 rounded-full bg-white/10 border border-white/20">
                      {item.grade}
                    </span>
                  </div>
                </div>

                <div className="text-xs font-mono text-zinc-300 font-semibold">
                  {item.degree}
                </div>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {item.summary}
                </p>

                {isExpanded && (
                  <div className="pt-3 border-t border-white/10 text-xs text-zinc-400 leading-relaxed animate-in fade-in duration-200">
                    {item.moreContent}
                  </div>
                )}

                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="self-start text-xs font-mono text-white hover:text-zinc-300 flex items-center gap-1 mt-1 focus:outline-none"
                >
                  <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
