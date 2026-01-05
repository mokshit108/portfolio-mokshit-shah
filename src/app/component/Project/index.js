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
      className={`min-h-screen py-8 sm:py-16 px-4 border-b-2 transition-colors duration-300 ${
        theme === 'light' 
          ? 'bg-white border-gray-300' 
          : 'bg-[#001a33] border-gray-600'
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FontAwesomeIcon
            icon={faFolderOpen}
            className={`w-8 h-8 sm:w-12 sm:h-12 transition-colors duration-300 ${
              theme === 'light' ? 'text-blue-600' : 'text-teal-500'
            }`}
          />
          <h2 className={`text-3xl sm:text-5xl font-bold tracking-wide font-palanquin transition-colors duration-300 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            {sectionTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSection;