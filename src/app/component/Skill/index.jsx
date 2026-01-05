'use client';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import skillsData from '../../data/skills.json';
import SkillCard from './SkillCard';
import { useTheme } from '../../context/ThemeContext';

const SkillsSection = () => {
  const { skills } = skillsData;
  const { theme } = useTheme();

  return (
    <motion.section
      id="skills"
      className={`pt-0 pb-2 sm:pb-6 md:pb-8 lg:pb-6 2xl:pb-4 border-b-2 transition-colors duration-300 ${
        theme === 'light' 
          ? 'bg-white border-gray-300' 
          : 'bg-[#001a33] border-gray-600'
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-2 sm:gap-4 justify-center mt-0 mb-6 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 2xl:mt-2 2xl:mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FontAwesomeIcon
            icon={faCode}
            className={`w-8 h-8 sm:w-12 sm:h-12 transition-colors duration-300 ${
              theme === 'light' ? 'text-blue-600' : 'text-teal-500'
            }`}
          />
          <h2 className={`text-3xl sm:text-5xl font-bold tracking-wide font-palanquin transition-colors duration-300 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            Skills
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-0 mb-4 px-4 sm:gap-3 md:gap-4 sm:px-0">
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