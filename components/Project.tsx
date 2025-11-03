"use client";

import { useEffect, useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Future coding website",
      description:
        "A platform for coding enthusiasts offering internships, hackathons, and quizzes, complete with certificates for participants.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Saniya-khan68/FutureCoding",
      live: "https://future-coding.vercel.app/"
    },
    {
      title: "Alnnovate Academy",
      description:
        "An educational platform providing courses, quizzes, and certifications to enhance learning experiences.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/XRS5548/alnnovate-academy",
      live: "https://alnnovate-academy.vercel.app/"
    },
    {
      title: "Job Board Platform",
      description:
        "job portal with candidate & employer dashboards, job posting, and notifications.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Saniya-khan68/CODSOFT",
      live: "https://jobboard-seven-phi.vercel.app/"
    },

    {
      title: "React icon library",
      description:
        " A reusable React component library with customizable UI elements for building modern web applications efficiently.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Saniya-khan68/pixel-ui-library",
      live: "https://pixel-ui-library.vercel.app/"
    },


  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-black text-white flex flex-col items-center"
    >
      <h2 className="text-4xl font-semibold mb-10 text-center text-teal-400">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 max-w-6xl">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`p-6 rounded-lg border border-gray-700 bg-[#0f0f0f] hover:bg-[#1a1a1a] transition-all duration-500 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <h3 className="text-xl font-semibold text-teal-400 mb-2">
              {p.title}
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {p.tech.map((t, index) => (
                <span
                  key={index}
                  className="text-sm bg-gray-800 border border-gray-700 rounded-md px-2 py-1 text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-auto">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-white border border-gray-600 px-4 py-2 rounded-md hover:bg-gray-800 transition"
                >
                  <FiGithub className="text-lg" />
                  Code
                </a>
              )}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-white border border-gray-600 px-4 py-2 rounded-md hover:bg-gray-800 transition"
                >
                  <FiExternalLink className="text-lg" />
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
