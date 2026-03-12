'use client';
import { useLayoutEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import uniqueValueData from '../../data/uniquevalue.json';
import UniqueValueCard from './UniqueValueCard';
import { useTheme } from '../../context/ThemeContext';

const UniqueValueSection = () => {
  const { uniqueValues } = uniqueValueData;
  const { theme } = useTheme();
  const [isSmall, setIsSmall] = useState(false);

  useLayoutEffect(() => {
    const check = () => setIsSmall(typeof window !== 'undefined' && window.innerWidth <= 425);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <motion.section
      id="unique-value"
      className={`py-8 min-[375px]:py-10 sm:py-12 md:py-20 px-3 min-[375px]:px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === 'light'
          ? 'bg-gradient-to-b from-white to-gray-50'
          : 'bg-gradient-to-b from-[#001a33] to-[#000d1a]'
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
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 px-4">
            <FontAwesomeIcon
              icon={faStar}
              className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors duration-300 ${
                theme === 'light' ? 'text-teal-600' : 'text-teal-400'
              }`}
            />
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-palanquin transition-colors duration-300 relative z-10 leading-tight py-2 ${
              theme === 'light'
                ? 'bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent'
            }`}>
              What Sets Me Apart
            </h2>
          </div>
          <div className={`w-24 h-1 mx-auto rounded-full mb-6 transition-colors duration-300 ${
            theme === 'light' ? 'bg-teal-600' : 'bg-teal-500'
          }`} />
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto transition-colors duration-300 ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
          }`}>
            Distinctive qualities and experiences that differentiate me from other executives in the tech industry
          </p>
        </motion.div>

        {/* Unique Values Grid */}
        <div className="w-full max-w-full box-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {uniqueValues.map((value, index) => (
            <motion.div
              className="min-w-0 w-full col-span-1 flex flex-1"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <UniqueValueCard value={value} isMobile={isSmall} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default UniqueValueSection;