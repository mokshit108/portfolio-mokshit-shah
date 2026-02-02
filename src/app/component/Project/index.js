'use client'
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import projectsData from '../../data/projects.json';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from '../../context/ThemeContext';

const ProjectSection = () => {
  const { sectionTitle, projects } = projectsData;
  const { theme } = useTheme();

  return (
    <motion.div
      className={`min-h-screen py-8 min-[375px]:py-10 sm:py-12 md:py-20 px-3 min-[375px]:px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === 'light' 
          ? 'bg-gradient-to-b from-white to-gray-50' 
          : 'bg-gradient-to-b from-[#001a33] to-[#000d1a]'
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
            <FontAwesomeIcon
              icon={faFolderOpen}
              className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors duration-300 ${
                theme === 'light' ? 'text-teal-600' : 'text-teal-400'
              }`}
            />
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-palanquin transition-colors duration-300 ${
              theme === 'light' 
                ? 'bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent'
            }`}>
              {sectionTitle}
            </h2>
          </div>
          <div className={`w-24 h-1 mx-auto rounded-full transition-colors duration-300 ${
            theme === 'light' ? 'bg-teal-600' : 'bg-teal-500'
          }`} />
          <p className={`mt-6 text-lg sm:text-xl max-w-2xl mx-auto transition-colors duration-300 ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
          }`}>
            A collection of projects showcasing my skills and experience in web development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => {
            // Determine animation direction based on position in row (0, 1, 2)
            const positionInRow = index % 3;
            let initialX = 0;
            let initialY = 0;
            
            if (positionInRow === 0) {
              // 1st card: left to right
              initialX = -100;
              initialY = 0;
            } else if (positionInRow === 1) {
              // 2nd card: top to bottom
              initialX = 0;
              initialY = -50;
            } else {
              // 3rd card: right to left
              initialX = 100;
              initialY = 0;
            }
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: initialX, y: initialY }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <ProjectCard {...project} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSection;