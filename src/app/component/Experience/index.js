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
      className={`py-12 sm:py-20 min-h-screen transition-colors duration-300 ${
        theme === 'light' 
          ? 'bg-gradient-to-b from-white to-gray-50' 
          : 'bg-gradient-to-b from-[#001a33] to-[#000d1a]'
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
            <FontAwesomeIcon
              icon={faBriefcase}
              className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors duration-300 ${
                theme === 'light' ? 'text-teal-600' : 'text-teal-400'
              }`}
            />
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-palanquin transition-colors duration-300 ${
              theme === 'light' 
                ? 'bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent'
            }`}>
              Experience
            </h2>
          </div>
          <div className={`w-24 h-1 mx-auto rounded-full transition-colors duration-300 ${
            theme === 'light' ? 'bg-teal-600' : 'bg-teal-500'
          }`} />
          <p className={`mt-6 text-lg sm:text-xl max-w-2xl mx-auto transition-colors duration-300 ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
          }`}>
            My professional journey and work experience
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="relative">
          {experienceData.experiences.map((experience, index) => {
            // Alternate animation direction: even index = left to right, odd index = right to left
            const isEven = index % 2 === 0;
            const initialX = isEven ? -100 : 100;
            
            return (
              <ExperienceCard 
                key={experience.id}
                {...experience}
                animationInitialX={initialX}
                animationDelay={index * 0.1}
              />
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;