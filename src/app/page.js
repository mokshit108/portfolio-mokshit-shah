'use client'
import PortfolioHeader from "./component/PortfolioHeader";
import SkillsSection from "./component/Skill";
import ExperienceSection from "./component/Experience";
import EducationSection from "./component/Education";
import ProjectSection from "./component/Project";
import FooterSection from "./component/Footer";
import { useTheme } from "./context/ThemeContext";

export default function Home() {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 overflow-x-hidden w-full max-w-full relative ${
      theme === 'light' ? 'bg-white' : 'bg-[#1e3a8a]'
    }`}>
      <section id="home" className="overflow-x-hidden max-w-full">
        <PortfolioHeader/>
      </section>
      
      <section id="about" className="overflow-x-hidden max-w-full">
        <SkillsSection/>
      </section>
      
      <section id="experience" className="overflow-x-hidden max-w-full">
        <ExperienceSection/>
      </section>
      
      <section id="education" className="overflow-x-hidden max-w-full">
        <EducationSection/>
      </section>
      
      <section id="projects" className="overflow-x-hidden max-w-full">
        <ProjectSection/>
      </section>
      
      <section id="contact" className="overflow-x-hidden max-w-full">
        <FooterSection/>
      </section>
    </div>
  );
}