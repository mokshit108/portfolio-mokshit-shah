import PortfolioHeader from "./component/PortfolioHeader";
import SkillsSection from "./component/sections/SkillsSection";
import ExperienceSection from "./component/ExperienceSection";
import EducationSection from "./component/EducationSection";
import ProjectSection from "./component/ProjectSection";
import FooterSection from "./component/FooterSection";
export default function Home() {
  return (
    <>
    <PortfolioHeader/>
    <SkillsSection/>
    <ExperienceSection/>
    <EducationSection/>
    <ProjectSection/>
    <FooterSection/>
    </>
  );
}
