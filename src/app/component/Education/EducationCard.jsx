'use client'
import React from 'react';
import Image from 'next/image';
import { useTheme } from '../../context/ThemeContext';

const EducationCard = ({ logo, alt, schoolName, course, grade, date }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`group flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 rounded-xl border transition-all duration-300 hover:shadow-lg gap-4 sm:gap-0 ${
      theme === 'light'
        ? 'bg-blue-50 border-gray-300 hover:border-blue-400 hover:shadow-blue-200/50'
        : 'bg-teal-300 bg-opacity-5 border-gray-700 hover:border-cyan-300 hover:shadow-teal-400/20'
    }`}>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
        <div className="flex justify-center sm:justify-start">
          <Image
            src={logo}
            alt={alt}
            width={60}
            height={60}
            className="rounded-lg object-contain sm:w-[80px] sm:h-[80px]"
          />
        </div>
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <h3 className={`font-bold text-lg sm:text-xl tracking-wide transition-colors duration-300 ${
            theme === 'light'
              ? 'text-gray-900 group-hover:text-blue-600'
              : 'text-white group-hover:text-sky-300'
          }`}>
            {schoolName}
          </h3>
          <p className={`text-base sm:text-lg font-bold transition-colors duration-300 ${
            theme === 'light'
              ? 'text-blue-600 group-hover:text-blue-700'
              : 'text-teal-500 group-hover:text-sky-400'
          }`}>
            {course}
          </p>
          <p className={`text-sm sm:text-base font-md transition-colors duration-300 ${
            theme === 'light'
              ? 'text-gray-700 group-hover:text-gray-900'
              : 'text-white group-hover:text-sky-400'
          }`}>
            {grade}
          </p>
        </div>
      </div>
      <div className={`text-xs sm:text-sm whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 w-full sm:w-auto text-center sm:text-left mt-2 sm:mt-0 ${
        theme === 'light'
          ? 'text-blue-700 bg-blue-100 group-hover:bg-blue-200'
          : 'text-white bg-cyan-800 group-hover:bg-sky-400/80'
      }`}>
        {date}
      </div>
    </div>
  );
};

export default EducationCard;