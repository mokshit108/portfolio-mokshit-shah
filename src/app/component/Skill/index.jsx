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
      className="py-2 sm:py-8 md:py-16 bg-[#001a33] border-b-2 border-gray-600"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-1.5 sm:gap-4 justify-center my-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FontAwesomeIcon
            icon={faCode}
            className="w-7 h-7 md:w-8 md:h-8 text-sky-500"
          />
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-white font-palanquin ">
            Skills
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 my-4 px-4 sm:gap-3 md:gap-4 sm:px-0">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.1, 1) }}
              className="transform scale-50 sm:scale-85 md:scale-100"
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