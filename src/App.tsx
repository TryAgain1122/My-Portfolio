import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import FloatingParticles from "./components/FloatingParticles"
import ProgressBar from "./components/ProgressBar"
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import { skills } from "./data/skillsData";
import StatsSection from "./components/StatsSection";
import ProjectSection from "./components/ProjectSection";
import { projects } from "./data/projects";
import Education from "./components/Education";
import ProjectDetail from "./pages/ProjectDetail";
import { Code2, Briefcase, Award, Zap } from 'lucide-react';

const stats = [
  { number: "12+", label: "Web Projects Built", icon: <Briefcase /> },
  { number: "8+", label: "Frontend Tools Used", icon: <Code2 /> },
  { number: "5+", label: "Backend Tools Used", icon: <Award /> },
  { number: "3", label: "Team Projects Completed", icon: <Zap /> }
];


function HomePage() {
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:slug" element={<ProjectDetail />} />
    </Routes>
  )
}

export default App
