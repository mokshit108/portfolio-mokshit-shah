"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import ExperienceCard from './ExperienceCard';
import experienceData from '../../data/experience.json';

const ExperienceSection = () => {
  return (
    <section className="py-16 bg-black min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-center justify-center gap-4 mb-16">
          <FontAwesomeIcon
            icon={faBriefcase}
            className="text-green-400 w-8 h-8"
          />
          <h2 className="text-5xl font-bold text-white tracking-wide font-palanquin">Experience</h2>
        </div>

        <div className="relative">
          {experienceData.experiences.map((experience) => (
            <ExperienceCard key={experience.id} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;