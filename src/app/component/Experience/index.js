"use client";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import ExperienceCard from './ExperienceCard';
import experienceData from '../../data/experience.json';
import { useTheme } from '../../context/ThemeContext';

const ExperienceSection = () => {
  const { theme } = useTheme();
  
  return (
    <motion.section
      className={`py-8 md:py-16 min-h-screen border-b-2 transition-colors duration-300 ${
        theme === 'light' 
          ? 'bg-white border-gray-300' 
          : 'bg-[#001a33] border-gray-600'
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          className="flex items-center justify-center gap-2 md:gap-4 mb-8 md:mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FontAwesomeIcon
            icon={faBriefcase}
            className={`w-6 h-6 md:w-10 md:h-10 transition-colors duration-300 ${
              theme === 'light' ? 'text-blue-600' : 'text-teal-500'
            }`}
          />
          <h2 className={`text-3xl md:text-5xl font-bold tracking-wide font-palanquin transition-colors duration-300 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>Experience</h2>
        </motion.div>

        <div className="relative">
          {experienceData.experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
            >
              <ExperienceCard {...experience} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;