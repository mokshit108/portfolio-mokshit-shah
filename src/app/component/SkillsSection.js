import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faVuejs,
  faJs,
  faCuttlefish,
  faHtml5,
  faCss3Alt,
  faNode
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faCode,
  faCubes,
  faGears,
  faBoxArchive,
  faFileCode,
  faServer
} from '@fortawesome/free-solid-svg-icons';

const SkillsSection = () => {
  const skills = [
    { title: 'React.js', icon: faReact, color: '#61DAFB' },
    { title: 'Vue.js', icon: faVuejs, color: '#41B883' },
    { title: 'JavaScript', icon: faJs, color: '#F7DF1E' },
    { title: 'Data Structures', icon: faCubes, color: '#FF6B6B' },
    { title: 'Algorithms', icon: faGears, color: '#4CAF50' },
    { title: 'Redux', icon: faBoxArchive, color: '#764ABC' },
    { title: 'C++', icon: faCuttlefish, color: '#00599C' },
    { title: 'HTML', icon: faHtml5, color: '#E34F26' },
    { title: 'CSS', icon: faCss3Alt, color: '#1572B6' },
    { title: 'TailwindCSS', icon: faCode, color: '#38B2AC' },
    { title: 'Zod', icon: faFileCode, color: '#3068B7' },
    { title: 'SQL', icon: faDatabase, color: '#336791' },
    { title: 'JSON', icon: faFileCode, color: '#000000' },
    { title: 'XML', icon: faServer, color: '#F16529' }
  ];

  return (
    <section id="skills" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12 justify-center">
          <FontAwesomeIcon
            icon={faCode}
            className="w-8 h-8 text-blue-400"
          />
          <h2 className="text-2xl font-bold text-white text-center align-middle">Skills</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-3 rounded-lg bg-black border border-green-950 hover:bg-gray-700 transition-all duration-300 hover:transform hover:scale-105"
            >
              <FontAwesomeIcon
                icon={skill.icon}
                className="w-5 h-5"
                style={{ color: skill.color }}
              />
              <span className="font-bold text-white text-lg">{skill.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;