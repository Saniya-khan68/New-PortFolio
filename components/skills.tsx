"use client";

import { useEffect, useState } from "react";

export default function Skills() {
    const skills = [
        { name: "HTML", level: 90 },
        { name: "CSS / Tailwind CSS", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "MongoDB / SQL", level: 70 },
        { name: "Git / GitHub", level: 85 },
    ];

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimate(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="skills" className="py-16 bg-black text-white min-h-screen flex flex-col items-center">
            <h2
                className={`text-3xl md:text-4xl font-[Great_Vibes] text-teal-400 drop-shadow-[0_0_10px_rgba(56,178,172,0.5)] mb-6 transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                My Skills
            </h2>

            <div className="w-full max-w-3xl space-y-6 mt-8">
                {skills.map((skill, index) => (
                    <div key={skill.name} className={`transition-all duration-1000 ${animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`} style={{ transitionDelay: `${index * 150}ms` }}>
                        <div className="flex justify-between mb-1">
                            <span className="text-lg font-[Poppins]">{skill.name}</span>
                            <span className="text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-4">
                            <div
                                className="bg-teal-400 h-4 rounded-full"
                                style={{ width: `${skill.level}%`, transition: "width 1s ease-in-out" }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
