'use client'
import { useState } from 'react';
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
    <div
      className={`group relative w-full min-w-0 box-border flex flex-col gap-4 p-4 sm:p-6 rounded-xl border-2 ${
        !isMobile
          ? 'transition-all duration-500 hover:shadow-2xl hover:-translate-y-2'
          : ''
      } ${
        theme === 'light'
          ? `bg-white border-gray-200 ${!isMobile ? 'hover:border-teal-400 hover:shadow-teal-200/50' : ''}`
          : `bg-gradient-to-b from-teal-900 to-blue-950 border-teal-800 ${!isMobile ? 'hover:border-teal-600 hover:shadow-teal-900/30' : ''}`
      }`}
      onMouseEnter={() => { if (!isMobile) setIsHovered(true); }}
      onMouseLeave={() => { if (!isMobile) setIsHovered(false); }}
    >
      {/* Title and Icon in same row */}
      <div className="flex items-center gap-3 mb-2">
        {/* Icon Container */}
        <div className={`relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex-shrink-0 ${
          !isMobile ? 'transition-all duration-500' : ''
        } ${
          hovered
            ? theme === 'light' ? 'bg-teal-50' : 'bg-teal-800'
            : theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'
        }`}>
          <FontAwesomeIcon
            icon={iconMap[value.icon]}
            className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-500 ${
              hovered
                ? theme === 'light' ? 'text-teal-600' : 'text-teal-400'
                : theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}
          />

          {/* Pulse effect — desktop only */}
          {!isMobile && hovered && (
            <div className={`absolute inset-0 rounded-lg animate-pulse ${
              theme === 'light' ? 'bg-teal-200/30' : 'bg-teal-500/20'
            }`} />
          )}
        </div>

        {/* Title */}
        <h3 className={`text-lg sm:text-xl font-bold flex-1 ${
          !isMobile ? 'transition-colors duration-500' : ''
        } ${
          hovered
            ? theme === 'light' ? 'text-teal-700' : 'text-teal-300'
            : theme === 'light' ? 'text-gray-900' : 'text-white'
        }`}>
          {value.title}
        </h3>
      </div>

      {/* Description */}
      <div className="flex-1">
        <p className={`text-sm sm:text-base leading-relaxed ${
          theme === 'light' ? 'text-gray-600' : 'text-gray-300'
        }`}>
          {value.description}
        </p>
      </div>

      {/* Decorative accent line — desktop only */}
      {!isMobile && (
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-xl transition-all duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          } ${
            theme === 'light' ? 'bg-teal-500' : 'bg-teal-400'
          }`}
        />
      )}

      {/* Shine effect — desktop only */}
      {!isMobile && (
        <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          theme === 'light'
            ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
            : 'bg-gradient-to-r from-transparent via-white/5 to-transparent'
        }`} />
      )}
    </div>
  );
};

export default UniqueValueCard;