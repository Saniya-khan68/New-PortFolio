"use client";

import { useEffect, useState } from "react";

type Project = {
  title: string;
  description: string;
};

export default function Projects() {
  const projects: Project[] = [
    // { title: "Portfolio Website", description: "Built with Next.js and Tailwind CSS." },
    // { title: "Quiz App", description: "Frontend + LocalStorage scoring system." },
    // { title: "Job Board", description: "Candidates and Employers dashboard system." },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="py-16 bg-black text-white">
      <h2 className="text-3xl font-[Great_Vibes] mb-6 text-center text-teal-400 drop-shadow-[0_0_8px_rgba(56,178,172,0.5)]">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`bg-gray-800 p-6 rounded-lg shadow transition-all duration-1000 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${i * 200}ms` }}
          >
            <h3 className="text-xl font-bold text-indigo-400">{p.title}</h3>
            <p className="text-gray-300 mt-2">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
