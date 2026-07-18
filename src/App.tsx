import { Routes, Route } from "react-router-dom";
import GradientBackdrop from "./components/GradientBackdrop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import ExperienceSection from "./components/ExperienceSection";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./pages/ProjectDetail";
import { projects } from "./data/projects";

function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <GradientBackdrop />
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Projects projects={projects} />
        <ExperienceSection />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:slug" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
