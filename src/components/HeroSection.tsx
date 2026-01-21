import { Github, Linkedin, Mail } from "lucide-react";

interface HeroSectionProps {
  visibleElements: Set<string>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ visibleElements }) => {
  return (
    <section
      id="hero"
      data-animate
      className={`h-screen flex flex-col justify-center items-center text-center px-4 transition-all duration-1000
      ${
        visibleElements.has("hero")
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse">
        Hi, I'm <span className="text-pink-500">Rafhael Luis</span>
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-gray-300">
        Front-End Developer | Back-End Developer | Editor
      </p>
      <div className="flex gap-6 mt-6">
        <a href="https://github.com/TryAgain1122" className="hover:text-cyan-400 transition">
          <Github size={28} />
        </a>
        <a href="https://www.linkedin.com/in/rafhael-luis-25ba0525b/" className="hover:text-blue-400 transition">
          <Linkedin size={28} />
        </a>
        <a href="#" className="hover:text-pink-400 transition">
          <Mail size={28} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
