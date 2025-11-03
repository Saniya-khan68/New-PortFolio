"use client";

import useAnimateiOnScroll from "@/hooks/useAnimateOnScroll";

import { useEffect, useState } from "react";

export default function About() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);  
    return () => clearTimeout(timer);
  }, []);

  const bioLines = [
    "I am Saniya Khan, a passionate and detail-oriented full-stack developer, currently pursuing my Bachelor of Computer Applications (BCA). With a strong foundation in frontend and backend development, I specialize in building modern, responsive, and user-friendly web applications.",
    "My expertise includes React.js, Next.js, Node.js, and SQL/NoSQL databases. Along with coding, I value clean design and seamless user experience, ensuring that every project I work on is both functional and visually appealing.",
    "Currently, I am enhancing my skills in Next.js and full-stack project building, while also exploring opportunities in internships and collaborations to contribute meaningfully in the field of web development."
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 bg-black text-white min-h-screen flex items-center justify-center"
    >
      <div
        className={`max-w-3xl transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        
        <h2
          className="text-4xl font-[Great_Vibes] mb-6 text-teal-400 drop-shadow-[0_0_10px_rgba(56,178,172,0.5)] text-center md:text-left"
        >
          About Me
        </h2>

        
        <div className="w-24 h-1 bg-teal-400 mb-6 rounded-full shadow-md mx-auto md:mx-0"></div>

        
        <div className="text-left text-gray-300 text-lg md:text-xl font-[Poppins] leading-relaxed space-y-4">
          {bioLines.map((line, index) => (
            <p
              key={index}
              className={`transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} delay-[${index * 200}ms]`}
            >
              {line.split(/(Saniya Khan|React\.js|Next\.js|Node\.js|SQL\/NoSQL databases|BCA)/g).map((part, i) => {
                if (["Saniya Khan", "React.js", "Next.js", "Node.js", "SQL/NoSQL databases", "BCA"].includes(part)) {
                  return (
                    <span key={i} className={`font-semibold ${part === "Saniya Khan" ? "text-teal-400" : "text-white"}`}>
                      {part}
                    </span>
                  );
                }
                return part;
              })}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
