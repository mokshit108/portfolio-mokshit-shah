'use client'
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import projectsData from '../../data/projects.json';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectSection = () => {
  const { sectionTitle, projects } = projectsData;

  return (
    <motion.div
      className="bg-[#001a33] min-h-screen py-8 sm:py-16 px-4 border-b-2 border-gray-600"
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
            className="text-teal-500 w-8 h-8 sm:w-12 sm:h-12"
          />
          <h2 className="text-3xl sm:text-5xl font-bold tracking-wide text-white font-palanquin">
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