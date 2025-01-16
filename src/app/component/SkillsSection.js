import React from 'react';

const SkillsSection = () => {
  const skills = [
    { title: 'React.js', icon: './icons/skills.svg' },
    { title: 'Vue.js', icon: './icons/skills.svg' },
    { title: 'JavaScript', icon: './icons/skills.svg' },
    { title: 'Data Structures', icon: './icons/skills.svg' },
    { title: 'Algorithms', icon: './icons/algortihms.svg' },
    { title: 'Redux', icon: './icons/skills.svg' },
    { title: 'C++', icon: './icons/skills.svg' },
    { title: 'HTML', icon: './icons/skills.svg' },
    { title: 'CSS', icon: './icons/skills.svg' },
    { title: 'TailwindCSS', icon: './icons/skills.svg' },
    { title: 'Zod', icon: './icons/zod.svg' },
    { title: 'SQL', icon: './icons/skills.svg' },
    { title: 'JSON', icon: './icons/skills.svg' },
    { title: 'XML', icon: './icons/skills.svg' }
  ];

  return (
    <section id="skills" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-8">
            <img
              src="./icons/skills.svg"
              alt="Skills"
              width={32}
              height={32}
              className="w-full h-full object-contain brightness-0 invert"
            />
          </div>
          <h2 className="text-2xl font-bold text-white">Skills</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-3 rounded-lg bg-black border border-green-950 hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="w-5 h-5 flex-shrink-0">
                <img
                  src={skill.icon}
                  alt={skill.title}
                  width={20}
                  height={20}
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>
              <span className="font-medium text-white text-sm">{skill.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;