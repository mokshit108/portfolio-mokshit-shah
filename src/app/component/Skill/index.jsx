'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import skillsData from '../../data/skills.json';
import SkillCard from './SkillCard';

const SkillsSection = () => {
  const { skills } = skillsData;

  return (
    <motion.section
      id="skills"
      className="py-16 bg-[#001a33] border-b-2 border-gray-600"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-12 justify-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FontAwesomeIcon
            icon={faCode}
            className="w-10 h-10 text-sky-500"
          />
          <h2 className="text-5xl font-bold tracking-wide text-white font-palanquin">Skills</h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;