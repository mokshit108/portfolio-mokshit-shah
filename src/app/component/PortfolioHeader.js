'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../data/homehero.json';
import { useTheme } from '../context/ThemeContext';

const PortfolioHeader = () => {
  const { personalInfo, backgroundImage, styles } = portfolioData;
  const { theme } = useTheme();
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const titles = ['Frontend Developer', 'Full Stack Developer', 'Backend Developer'];
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const currentTitle = titles[titleIndex];

    if (!isDeleting && displayText === currentTitle) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(currentTitle.substring(0, isDeleting ? displayText.length - 1 : displayText.length + 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <div className={`min-h-screen relative overflow-hidden flex items-center py-12 sm:py-16 lg:py-20 transition-colors duration-300 ${
      theme === 'light' ? 'bg-gradient-to-br from-white via-gray-50 to-white' : 'bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a]'
    }`}>
      {/* Background Image - only show in dark theme */}
      {theme === 'dark' && (
        <>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.stockcake.com/public/9/f/6/9f6994d9-b91e-46ef-b05c-df5d06ebad05_large/coding-on-laptop-stockcake.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(0.25)',
              zIndex: 0
            }}
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-br from-black/60 via-black/50 to-black/60" />
        </>
      )}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Top Row: Left (Developer Info) and Right (Image) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 mb-8 md:mb-12">
          {/* Left Content - Developer Info */}
          <motion.div 
            className="flex-1 space-y-5 sm:space-y-6 lg:space-y-8 text-center md:text-left w-full md:w-auto"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight font-acme transition-colors duration-300 ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                {personalInfo.name}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-palanquin min-h-[40px] sm:min-h-[50px] transition-colors duration-300 ${
                theme === 'light' ? 'text-blue-600' : 'text-sky-400'
              }`}>
                <span className="mr-2 sm:mr-4">I'm</span>
                {displayText}
                <span className="animate-pulse ml-1">|</span>
              </h2>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div 
            className="flex-shrink-0 flex flex-col items-center gap-4 sm:gap-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Profile Image */}
            <motion.div
              className="flex-shrink-0 -mt-12 sm:-mt-16 lg:-mt-20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, -10, 0],
              }}
              transition={{
                x: { duration: 0.6, delay: 0.1 },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56">
                <motion.img
                  src={personalInfo.profileImage.src}
                  alt={personalInfo.profileImage.alt}
                  className="rounded-full object-cover m-4 sm:m-6 lg:m-10 shadow-lg ring-4 ring-blue-500"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </div>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              className="flex items-center justify-center gap-5 sm:gap-6 mt-8 sm:mt-10 lg:mt-12 ml-14 sm:ml-16 lg:ml-18"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a 
                href="https://www.linkedin.com/in/mokshit-shah-4493321a7/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className={`p-2.5 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  theme === 'light' 
                    ? 'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:shadow-md' 
                    : 'bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 hover:shadow-lg hover:shadow-sky-500/20'
                }`}
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.23 0H1.77C.792 0 0 .77 0 1.724v20.551C0 23.228.792 24 1.77 24h20.459C23.208 24 24 23.228 24 22.275V1.724C24 .77 23.208 0 22.23 0zM7.09 20.452H3.677V9.034H7.09v11.418zm-1.707-13.01a2.013 2.013 0 01-2.018-2.02A2.012 2.012 0 015.377 3.4c1.115 0 2.018.903 2.018 2.021a2.013 2.013 0 01-2.018 2.021zm14.262 13.01h-3.413v-5.604c0-1.337-.024-3.06-1.866-3.06-1.868 0-2.154 1.457-2.154 2.963v5.701H8.799V9.034H12v1.561h.049c.447-.847 1.539-1.74 3.165-1.74 3.386 0 4.012 2.23 4.012 5.127v6.47z" /></svg>
              </a>
              <a 
                href="https://github.com/mokshit108" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className={`p-2.5 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  theme === 'light' 
                    ? 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-md' 
                    : 'bg-gray-800/50 text-white hover:bg-gray-700 hover:shadow-lg'
                }`}
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.426 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.109-1.462-1.109-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.339-2.22-.254-4.555-1.112-4.555-4.946 0-1.092.39-1.987 1.03-2.684-.104-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.697 1.029 1.592 1.029 2.684 0 3.842-2.338 4.688-4.566 4.937.36.309.681.92.681 1.855 0 1.338-.013 2.419-.013 2.749 0 .268.18.579.688.481C19.138 20.203 22 16.446 22 12.021 22 6.484 17.523 2 12 2z" clipRule="evenodd" /></svg>
              </a>
              <a
                href="https://drive.google.com/file/d/10mJUsm9VHLNQfNA1UPntA7Y1a44FXnBq/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume"
                className={`p-2.5 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  theme === 'light' 
                    ? 'bg-teal-50 text-teal-600 hover:bg-teal-100 hover:shadow-md' 
                    : 'bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 hover:shadow-lg hover:shadow-teal-500/20'
                }`}
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM13 9V3.5L18.5 9H13zM8 13h8v2H8v-2zm0 4h5v2H8v-2z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Row: Description (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full -mt-4 sm:-mt-6 lg:-mt-8"
        >
          <p className={`text-base sm:text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed transition-colors duration-300 text-center md:text-left ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-300'
          }`}>
            {personalInfo.description}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 md:mt-6 -mt-2 sm:-mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/assets/Resume_MokshitShah.pdf"
              download
              className="px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
            <a
              href="#contact"
              className={`px-6 sm:px-8 py-3 sm:py-3.5 bg-transparent border-2 rounded-full font-semibold transition-all duration-300 text-center text-sm sm:text-base shadow-md hover:shadow-lg hover:scale-105 active:scale-95 ${
                theme === 'light' 
                  ? 'border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700' 
                  : 'border-sky-400 text-sky-400 hover:bg-sky-500/10 hover:border-sky-300'
              }`}
            >
              Let's Talk
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioHeader;