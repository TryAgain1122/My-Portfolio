import { useEffect, useState } from "react"
import FloatingParticles from "./components/FloatingParticles"
import ProgressBar from "./components/ProgressBar"
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import { skills } from "./data/skillsData";
import StatsSection from "./components/StatsSection";
import ProjectSection from "./components/ProjectSection";
import { projects } from "./data/projects";
import Education from "./components/Education";
import { Code2, Briefcase, Award, Zap } from 'lucide-react';

const stats = [
  { number: "40+", label: "Projects & Mini-Apps Built", icon: <Briefcase /> },
  { number: "15+", label: "Technologies Used", icon: <Code2 /> },
  { number: "2+ Years", label: "Development Experience", icon: <Award /> },
  { number: "100%", label: "Positive Project Feedback", icon: <Zap /> }
];

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);

      const sections = document.querySelectorAll('[data-animate]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisibleElements((prev) => new Set([...prev, section.id]));
        }
      })
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  },[])

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <ProgressBar scrollProgress={scrollProgress}/>
      <FloatingParticles />
      <HeroSection visibleElements={visibleElements}/>
      <StatsSection visibleElements={visibleElements} stats={stats}/>
      <SkillsSection visibleElements={visibleElements} skills={skills}/>
      <ProjectSection visibleElements={visibleElements} projects={projects}/>
      <Education visibleElements={visibleElements}/>
      </div>
  )
}

export default App
