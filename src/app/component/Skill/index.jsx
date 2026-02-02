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
      className={`py-12 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === 'light' 
          ? 'bg-gradient-to-b from-gray-50 to-white' 
          : 'bg-gradient-to-b from-[#000d1a] to-[#001a33]'
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
            <FontAwesomeIcon
              icon={faCode}
              className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors duration-300 ${
                theme === 'light' ? 'text-teal-600' : 'text-teal-400'
              }`}
            />
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-palanquin transition-colors duration-300 ${
              theme === 'light' 
                ? 'bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent'
            }`}>
              Skills
            </h2>
          </div>
          <div className={`w-24 h-1 mx-auto rounded-full mb-6 transition-colors duration-300 ${
            theme === 'light' ? 'bg-teal-600' : 'bg-teal-500'
          }`} />
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto transition-colors duration-300 ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
          }`}>
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100, y: -100 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut"
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