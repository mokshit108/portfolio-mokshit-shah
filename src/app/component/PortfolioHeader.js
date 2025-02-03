'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Acme, Inter } from 'next/font/google';
import portfolioData from '../data/homehero.json';

// Initialize the Acme font for headings and Inter for body text
const acmeFont = Acme({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const interFont = Inter({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
});

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
    <div className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.2)',
          zIndex: 0
        }}
      />

      <div className="absolute inset-0 z-[1] bg-black/50" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h1 className={`text-6xl font-bold tracking-wide text-white ${acmeFont.className}`}>
              {personalInfo.name}
            </h1>

            <h2 className="text-3xl text-blue-400 font-semibold font-mono min-h-[40px]">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>

            <p className={`text-gray-300 text-xl font-semibold leading-relaxed ${interFont.className}`}>
              Innovative tech architect crafting cutting-edge solutions with precision and passion. Transforming complex challenges into elegant, scalable digital experiences.
            </p>
          </div>

          {/* Right Content - Animated Image */}
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
            <div className="w-56 h-56">
              <motion.img
                src={personalInfo.profileImage.src}
                alt={personalInfo.profileImage.alt}
                className="rounded-full object-cover shadow-lg ring-4 ring-blue-500"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeader;