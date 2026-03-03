'use client';
import { useLayoutEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import skillsData from '../../data/skills.json';
import SkillCard from './SkillCard';
import { useTheme } from '../../context/ThemeContext';

const SkillsSection = () => {
  const { skills } = skillsData;
  const { theme } = useTheme();
  const [isSmall, setIsSmall] = useState(false);

  useLayoutEffect(() => {
    const check = () => setIsSmall(typeof window !== 'undefined' && window.innerWidth <= 425);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const isOddTotal = skills.length % 2 !== 0;

  return (
    <motion.section
      id="skills"
      className={`py-8 min-[375px]:py-10 sm:py-12 md:py-20 px-3 min-[375px]:px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === 'light'
          ? 'bg-gradient-to-b from-gray-50 to-white'
          : 'bg-gradient-to-b from-[#000d1a] to-[#001a33]'
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto overflow-x-visible px-0 sm:px-4 w-full max-w-full box-border">
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
        <div className="w-full max-w-full box-border grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          {skills.map((skill, index) => {
            // On mobile, centre the last card if total is odd
            const isLastOdd = isSmall && isOddTotal && index === skills.length - 1;

            if (isSmall) {
              return (
                <div
                  key={index}
                  className={`min-w-0 w-full flex ${isLastOdd ? 'col-span-2 justify-center' : 'col-span-1'}`}
                >
                  <div className={isLastOdd ? 'w-1/2' : 'w-full flex'}>
                    <SkillCard skill={skill} isMobile={true} />
                  </div>
                </div>
              );
            }

            return (
              <motion.div
                className="min-w-0 w-full col-span-1 flex flex-1"
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
                <SkillCard skill={skill} isMobile={false} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
