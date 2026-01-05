'use client'
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ContactLink = ({ href, text }) => {
  const { theme } = useTheme();
  
  return (
    <a
      href={href}
      className={`flex items-center justify-center sm:justify-start gap-2 sm:gap-4 p-3 sm:p-4 rounded-lg transition-all group hover:shadow-lg ${
        theme === 'light'
          ? 'bg-blue-50 hover:bg-blue-100 hover:shadow-blue-200/50'
          : 'bg-gray-800/30 hover:bg-teal-500 hover:bg-opacity-90 hover:shadow-teal-500/10'
      }`}
    >
      <span className={`text-base sm:text-lg font-medium transition-colors ${
        theme === 'light'
          ? 'text-gray-900 group-hover:text-blue-700'
          : 'text-gray-200 group-hover:text-white'
      }`}>
        {text}
      </span>
    </a>
  );
};

export default ContactLink;
 {/* Uncomment if you want to use icons
    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
      <img
        src={icon}
        alt=""
        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
      />
    </div>
    */}