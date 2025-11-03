"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const roles = [
    "Web Developer", "Frontend Developer", "Full Stack Developer", "Software Engineer",
    "Tech Enthusiast", "Problem Solver", "Lifelong Learner", "Creative Coder",
    "UI/UX Advocate", "Open Source Contributor"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [animate, setAnimate] = useState(false);


  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(roleInterval);
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center text-center py-28 px-4 bg-black text-white min-h-screen">
      <h1
        className={`text-5xl md:text-6xl font-[Great_Vibes] text-teal-400 drop-shadow-[0_0_10px_rgba(56,178,172,0.6)] transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        Hi, I&apos;m Saniya Khan
      </h1>

      <p
        className={`mt-4 text-gray-300 text-xl md:text-2xl font-semibold h-10 transition-all duration-1000 delay-200 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        {roles[roleIndex]}
      </p>

      <p
        className={`mt-6 text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed transition-all duration-1000 delay-400 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        I’m passionate about crafting clean, responsive, and interactive web experiences.
        I love turning ideas into beautiful and functional digital products.
      </p>

      <a
        href="#projects"
        className={`mt-8 inline-block bg-teal-400 text-black px-10 py-4 rounded-full text-2xl font-[Great_Vibes] transition-all duration-1000 delay-600 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        View My Work
      </a>
    </section>
  );
}
