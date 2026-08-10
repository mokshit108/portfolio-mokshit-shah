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

  const hovered = isMobile ? false : isHovered;

  return (
    <motion.div
      whileHover={!isMobile ? { scale: 1.02, translateY: -8 } : {}}
      whileTap={isMobile ? { scale: 0.98 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative w-full h-full min-w-0 box-border flex flex-col gap-4 p-5 sm:p-7 rounded-2xl border overflow-hidden ${theme === 'light'
          ? `bg-white/80 backdrop-blur-sm border-gray-100 shadow-xl ${!isMobile ? 'hover:border-teal-300 hover:shadow-2xl' : ''}`
          : `bg-[#0a192f] border-teal-500/20 shadow-xl ${!isMobile ? 'hover:border-teal-400/50 hover:shadow-[0_20px_40px_rgba(45,212,191,0.15)]' : ''}`
        }`}
      onMouseEnter={() => { if (!isMobile) setIsHovered(true); }}
      onMouseLeave={() => { if (!isMobile) setIsHovered(false); }}
    >
      {/* Background Gradient Blob on Hover */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1.2 : 0.8 }}
          transition={{ duration: 0.5 }}
          className={`absolute -top-20 -right-20 w-48 h-48 rounded-full blur-[50px] z-0 pointer-events-none ${theme === 'light' ? 'bg-teal-300/40' : 'bg-teal-600/30'
            }`}
        />
      )}

      {/* Content wrapper to stay above background blob */}
      <div className="relative z-10 flex flex-col h-full gap-3">
        <div className="flex items-center gap-4 mb-2">
          {/* Icon Container */}
          <motion.div
            animate={{
              rotate: hovered ? [0, -10, 10, -5, 5, 0] : 0,
              scale: hovered ? 1.1 : 1
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex-shrink-0 shadow-inner ${hovered
                ? theme === 'light' ? 'bg-teal-100 text-teal-600' : 'bg-teal-900/60 text-teal-300'
                : theme === 'light' ? 'bg-gray-50 text-gray-500' : 'bg-gray-800/80 text-gray-400'
              }`}
          >
            <FontAwesomeIcon
              icon={iconMap[value.icon]}
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </motion.div>

          {/* Title */}
          <h3 className={`text-lg sm:text-xl font-bold flex-1 tracking-wide ${!isMobile ? 'transition-colors duration-300' : ''
            } ${hovered
              ? theme === 'light' ? 'text-teal-700' : 'text-teal-300'
              : theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
            {value.title}
          </h3>
        </div>

        {/* Description */}
        <div className="flex-1 mt-1">
          <p className={`text-sm sm:text-base leading-relaxed ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}>
            {value.description}
          </p>
        </div>
      </div>

      {/* Decorative accent line */}
      {!isMobile && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ originX: 0 }}
          className={`absolute bottom-0 left-0 right-0 h-1.5 rounded-b-2xl ${theme === 'light' ? 'bg-gradient-to-r from-teal-400 to-blue-500' : 'bg-gradient-to-r from-teal-500 to-blue-600'
            }`}
        />
      )}
    </motion.div>
  );
};

export default UniqueValueCard;