'use client'
import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactLink = ({ href, phoneHref, whatsappHref, text, type }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  
  // Get icon based on type
  const getIcon = () => {
    switch (type) {
      case 'email':
        return faEnvelope;
      case 'phone':
        return faPhone;
      case 'whatsapp':
        return faWhatsapp;
      case 'phone-whatsapp':
        return faPhone;
      default:
        return faEnvelope;
    }
  };

  // Get icon color based on type and theme
  const getIconColor = () => {
    if (isHovered) {
      return theme === 'light' ? 'text-white' : 'text-white';
    }
    switch (type) {
      case 'email':
        return theme === 'light' ? 'text-blue-600' : 'text-blue-400';
      case 'phone':
      case 'phone-whatsapp':
        return theme === 'light' ? 'text-green-600' : 'text-green-400';
      case 'whatsapp':
        return theme === 'light' ? 'text-green-600' : 'text-green-400';
      default:
        return theme === 'light' ? 'text-blue-600' : 'text-blue-400';
    }
  };

  // Get background gradient based on type
  const getBackgroundGradient = () => {
    if (isHovered) {
      switch (type) {
        case 'email':
          return theme === 'light' 
            ? 'bg-gradient-to-br from-blue-600 to-blue-700' 
            : 'bg-gradient-to-br from-blue-500 to-blue-600';
        case 'phone':
        case 'phone-whatsapp':
          return theme === 'light' 
            ? 'bg-gradient-to-br from-green-600 to-green-700' 
            : 'bg-gradient-to-br from-green-500 to-green-600';
        case 'whatsapp':
          return theme === 'light' 
            ? 'bg-gradient-to-br from-green-600 to-green-700' 
            : 'bg-gradient-to-br from-green-500 to-green-600';
        default:
          return theme === 'light' 
            ? 'bg-gradient-to-br from-blue-600 to-blue-700' 
            : 'bg-gradient-to-br from-blue-500 to-blue-600';
      }
    }
    return theme === 'light'
      ? 'bg-white border-2 border-gray-200'
      : 'bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800';
  };

  // If it's a combined phone-whatsapp card, render differently
  if (type === 'phone-whatsapp') {
    return (
      <div
        className={`group relative flex flex-col items-center justify-center gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 rounded-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 w-full max-w-full overflow-hidden ${getBackgroundGradient()}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Icon Container */}
        <div className={`relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full transition-all duration-500 flex-shrink-0 ${
          isHovered
            ? 'bg-white/20 scale-110'
            : theme === 'light'
              ? 'bg-green-50'
              : 'bg-gray-800'
        }`}>
          <FontAwesomeIcon
            icon={getIcon()}
            className={`w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 transition-all duration-500 ${getIconColor()} ${
              isHovered ? 'scale-110' : ''
            }`}
          />
          {/* Pulse effect on hover */}
          {isHovered && (
            <div className={`absolute inset-0 rounded-full animate-ping ${
              theme === 'light' ? 'bg-white/30' : 'bg-white/20'
            }`} />
          )}
        </div>

        {/* Phone Number Text */}
        <div className="text-center mb-2 sm:mb-3 w-full px-2">
          <span className={`text-xs sm:text-sm md:text-base font-semibold transition-colors duration-500 break-words ${
            isHovered
              ? 'text-white'
              : theme === 'light'
                ? 'text-gray-900'
                : 'text-white'
          }`}>
            {text}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row items-stretch sm:items-center gap-2 sm:gap-3 md:gap-4 w-full justify-center px-2 max-w-full overflow-hidden">
          <a
            href={phoneHref}
            onClick={(e) => e.stopPropagation()}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2.5 sm:py-2.5 md:py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 active:scale-95 hover:scale-105 min-h-[44px] sm:min-h-0 ${
              isHovered
                ? 'bg-white/20 text-white hover:bg-white/30'
                : theme === 'light'
                  ? 'bg-green-50 text-green-700 hover:bg-green-100 active:bg-green-200'
                  : 'bg-gray-800 text-green-400 hover:bg-gray-700 active:bg-gray-600'
            }`}
          >
            <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="whitespace-nowrap">Call</span>
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2.5 sm:py-2.5 md:py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 active:scale-95 hover:scale-105 min-h-[44px] sm:min-h-0 ${
              isHovered
                ? 'bg-white/20 text-white hover:bg-white/30'
                : theme === 'light'
                  ? 'bg-green-50 text-green-700 hover:bg-green-100 active:bg-green-200'
                  : 'bg-gray-800 text-green-400 hover:bg-gray-700 active:bg-gray-600'
            }`}
          >
            <FontAwesomeIcon icon={faWhatsapp} className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="whitespace-nowrap">WhatsApp</span>
          </a>
        </div>

        {/* Decorative accent line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-xl transition-all duration-500 ${
          isHovered
            ? 'opacity-100'
            : 'opacity-0'
        } bg-gradient-to-r from-green-400 via-green-600 to-green-400`} />

        {/* Shine effect on hover */}
        <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          theme === 'light'
            ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
            : 'bg-gradient-to-r from-transparent via-white/5 to-transparent'
        }`} />
      </div>
    );
  }

  // Regular single link card (for email)
  return (
    <a
      href={href}
      className={`group relative flex flex-col items-center justify-center gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 rounded-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 w-full max-w-full overflow-hidden ${getBackgroundGradient()}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon Container */}
      <div className={`relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full transition-all duration-500 flex-shrink-0 ${
        isHovered
          ? 'bg-white/20 scale-110'
          : theme === 'light'
            ? 'bg-blue-50'
            : 'bg-gray-800'
      }`}>
        <FontAwesomeIcon
          icon={getIcon()}
          className={`w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 transition-all duration-500 ${getIconColor()} ${
            isHovered ? 'scale-110' : ''
          }`}
        />
        {/* Pulse effect on hover */}
        {isHovered && (
          <div className={`absolute inset-0 rounded-full animate-ping ${
            theme === 'light' ? 'bg-white/30' : 'bg-white/20'
          }`} />
        )}
      </div>

      {/* Text */}
      <div className="text-center w-full px-2">
        <span className={`text-xs sm:text-sm md:text-base font-semibold transition-colors duration-500 break-words ${
          isHovered
            ? 'text-white'
            : theme === 'light'
              ? 'text-gray-900'
              : 'text-white'
        }`}>
          {text}
        </span>
      </div>

      {/* Decorative accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-xl transition-all duration-500 ${
        isHovered
          ? 'opacity-100'
          : 'opacity-0'
      } ${
        type === 'email'
          ? 'bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400'
          : 'bg-gradient-to-r from-green-400 via-green-600 to-green-400'
      }`} />

      {/* Shine effect on hover */}
      <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        theme === 'light'
          ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
          : 'bg-gradient-to-r from-transparent via-white/5 to-transparent'
      }`} />
    </a>
  );
};

export default ContactLink;