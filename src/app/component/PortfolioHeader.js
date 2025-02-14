'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../data/homehero.json';

const PortfolioHeader = () => {
  const { personalInfo, backgroundImage, styles } = portfolioData;
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
    <div className="min-h-screen relative overflow-hidden flex items-center py-8 sm:py-12">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://images.stockcake.com/public/9/f/6/9f6994d9-b91e-46ef-b05c-df5d06ebad05_large/coding-on-laptop-stockcake.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.3)',
          zIndex: 0
        }}
      />

      <div className="absolute inset-0 z-[1] bg-black/50" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-4 sm:space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white font-acme">
              {personalInfo.name}
            </h1>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-sky-400 font-bold font-palanquin min-h-[40px]">
              <span className="mr-2 sm:mr-4">I’m</span>
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-semibold leading-relaxed">
              {personalInfo.description}
            </p>
          </div>

          {/* Right Content - Profile Image and CTA */}
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <motion.div
              className="flex-shrink-0"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56">
                <motion.img
                  src={personalInfo.profileImage.src}
                  alt={personalInfo.profileImage.alt}
                  className="rounded-full object-cover m-4 sm:m-6 lg:m-10 shadow-lg ring-4 ring-blue-500"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row max-sm:ml-7 gap-4 mt-12 lg:mt-28">
              <a
                href="/assets/Resume_MokshitShah.pdf"
                download
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-teal-500 bg-opacity-90 text-white rounded-full font-semibold hover:bg-teal-700 transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-transparent border-2 border-sky-700 text-white rounded-full font-semibold hover:bg-sky-100/10 transition-colors duration-300 text-center text-sm sm:text-base"
              >
                Let’s Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeader;