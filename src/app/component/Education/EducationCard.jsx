'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from '../../context/ThemeContext';

const EducationCard = ({ logo, alt, schoolName, course, grade, date }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`group relative flex flex-col lg:flex-row items-start lg:items-center justify-between p-6 sm:p-8 rounded-xl border transition-all duration-500 gap-6 lg:gap-8 ${
        theme === 'light'
          ? 'bg-white border-gray-200 shadow-md hover:shadow-2xl hover:border-blue-400 hover:-translate-y-1'
          : 'bg-gradient-to-br from-gray-900 to-black border-gray-800 shadow-lg hover:shadow-2xl hover:border-teal-500/60 hover:-translate-y-1'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Section - Logo and Details */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 flex-1 w-full lg:w-auto">
        {/* Logo Container */}
        <div className="flex justify-center sm:justify-start flex-shrink-0">
          <div className={`relative p-4 rounded-xl transition-all duration-500 ${
            theme === 'light'
              ? 'bg-blue-50 border-2 border-blue-100 group-hover:bg-blue-100 group-hover:border-blue-300'
              : 'bg-gray-800 border-2 border-gray-700 group-hover:bg-gray-700 group-hover:border-teal-500/50'
          }`}>
            <div className={`absolute inset-0 rounded-xl transition-opacity duration-500 ${
              isHovered 
                ? 'opacity-100' 
                : 'opacity-0'
            } ${
              theme === 'light'
                ? 'bg-gradient-to-br from-blue-400/20 to-blue-600/20'
                : 'bg-gradient-to-br from-teal-500/20 to-teal-600/20'
            }`} />
            <Image
              src={logo}
              alt={alt}
              width={80}
              height={80}
              className={`relative rounded-lg object-contain transition-transform duration-500 ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-2 sm:gap-3 text-center sm:text-left flex-1">
          <h3 className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${
            theme === 'light'
              ? 'text-gray-900 group-hover:text-blue-600'
              : 'text-white group-hover:text-teal-400'
          }`}>
            {schoolName}
          </h3>
          
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg w-fit mx-auto sm:mx-0 transition-all duration-300 ${
            theme === 'light'
              ? 'bg-blue-50 text-blue-700 group-hover:bg-blue-100 group-hover:text-blue-800'
              : 'bg-teal-500/10 text-teal-400 group-hover:bg-teal-500/20 group-hover:text-teal-300'
          }`}>
            <span className="text-base sm:text-lg font-semibold">
              {course}
            </span>
          </div>
          
          <p className={`text-sm sm:text-base font-medium transition-colors duration-300 ${
            theme === 'light'
              ? 'text-gray-600 group-hover:text-gray-800'
              : 'text-gray-300 group-hover:text-gray-200'
          }`}>
            {grade}
          </p>
        </div>
      </div>

      {/* Right Section - Date Badge */}
      <div className={`flex-shrink-0 w-full lg:w-auto lg:ml-4`}>
        <div className={`inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
          theme === 'light'
            ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md group-hover:shadow-lg group-hover:from-blue-700 group-hover:to-blue-800'
            : 'bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-md group-hover:shadow-lg group-hover:from-teal-500 group-hover:to-teal-600'
        }`}>
          <svg 
            className={`w-4 h-4 mr-2 transition-transform duration-300 ${
              isHovered ? 'rotate-12' : ''
            }`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{date}</span>
        </div>
      </div>

      {/* Decorative Accent Line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-xl transition-all duration-500 ${
        isHovered
          ? theme === 'light'
            ? 'bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400'
            : 'bg-gradient-to-r from-teal-400 via-teal-600 to-teal-400'
          : 'opacity-0'
      }`} />
    </div>
  );
};

export default EducationCard;