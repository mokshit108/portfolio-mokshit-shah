import PortfolioHeader from "./component/PortfolioHeader";
import SkillsSection from "./component/Skill";
import ExperienceSection from "./component/Experience";
import EducationSection from "./component/Education";
import ProjectSection from "./component/Project";
import FooterSection from "./component/Footer";

export default function Home() {
  return (
    <div>
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