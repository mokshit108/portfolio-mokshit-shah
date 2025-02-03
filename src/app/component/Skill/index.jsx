'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import skillsData from '../../data/skills.json';
import SkillCard from './SkillCard';

const SkillsSection = () => {
  const { skills } = skillsData;

  return (
    <section id="skills" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12 justify-center">
          <FontAwesomeIcon
            icon={faCode}
            className="w-8 h-8 text-blue-400"
          />
          <h2 className="text-5xl font-bold tracking-wide text-white font-palanquin">Skills</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;