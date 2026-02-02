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
    <div className={`min-h-screen transition-colors duration-300 overflow-x-hidden w-full max-w-full ${
      theme === 'light' ? 'bg-white' : 'bg-[#1e3a8a]'
    }`}>
      <section id="home">
        <PortfolioHeader/>
      </section>
      
      <section id="about">
        <SkillsSection/>
      </section>
      
      <section id="experience">
        <ExperienceSection/>
      </section>
      
      <section id="education">
        <EducationSection/>
      </section>
      
      <section id="projects">
        <ProjectSection/>
      </section>
      
      <section id="contact">
        <FooterSection/>
      </section>
    </div>
  );
}