import About from "../components/About";
import ContactForm from "../components/Contact";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Project";
import Skills from "../components/skills";



export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
    </div>
  );
}
