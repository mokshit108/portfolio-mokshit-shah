'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faRocket, faGlobe, faBolt, faCogs, faBuilding, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../context/ThemeContext';

const iconMap = {
  globe: faGlobe,
  code: faCode,
  rocket: faRocket,
  industry: faBuilding,
  cogs: faCogs,
  lightbulb: faLightbulb,
  bolt: faBolt
};

const UniqueValueCard = ({ value, isMobile = false }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const hovered = isHovered;

  return (
    <motion.div
      whileHover={{ scale: 1.02, translateY: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative w-full h-full min-w-0 box-border flex flex-col gap-4 p-5 sm:p-7 rounded-2xl border overflow-hidden ${theme === 'light'
        ? 'bg-white/80 backdrop-blur-sm border-teal-200 shadow-xl hover:border-teal-300 hover:shadow-2xl'
        : 'bg-[#0a192f] border-teal-500/20 shadow-xl hover:border-teal-400/50 hover:shadow-[0_20px_40px_rgba(45,212,191,0.15)]'
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      onTouchCancel={() => setIsHovered(false)}
    >
      {/* Background Gradient Blob (Permanently visible) */}
      <div
        className={`absolute -top-16 -right-16 w-32 h-32 sm:-top-20 sm:-right-20 sm:w-48 sm:h-48 rounded-full blur-[40px] sm:blur-[50px] z-0 pointer-events-none transition-transform duration-500 scale-100 ${hovered ? 'scale-125' : ''
          } ${theme === 'light' ? 'bg-teal-300/[0.15]' : 'bg-teal-600/[0.15]'}`}
      />

      {/* Content wrapper to stay above background blob */}
      <div className="relative z-10 flex flex-col h-full gap-3">
        <div className="flex items-center gap-4 mb-2">
          {/* Icon Container (Permanently colored) */}
          <motion.div
            animate={{
              rotate: hovered ? [0, -10, 10, -5, 5, 0] : 0,
              scale: hovered ? 1.1 : 1
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex-shrink-0 shadow-inner ${theme === 'light' ? 'bg-teal-100 text-teal-600' : 'bg-teal-900/60 text-teal-300'
              }`}
          >
            <FontAwesomeIcon
              icon={iconMap[value.icon]}
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </motion.div>

          {/* Title (Permanently colored) */}
          <h3 className={`text-lg sm:text-xl font-semibold flex-1 tracking-wide antialiased ${theme === 'light' ? 'text-teal-700' : 'text-teal-300'
            }`}>
            {value.title}
          </h3>
        </div>

        {/* Description */}
        <div className="flex-1 mt-1">
          <p className={`text-sm sm:text-base leading-relaxed antialiased ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
            {value.description}
          </p>
        </div>
      </div>

      {/* Decorative accent line (Permanently visible) */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1.5 rounded-b-2xl ${theme === 'light' ? 'bg-gradient-to-r from-teal-400 to-blue-500' : 'bg-gradient-to-r from-teal-500 to-blue-600'
          }`}
      />
    </motion.div>
  );
};

export default UniqueValueCard;