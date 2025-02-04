'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ProjectCard from './ProjectCard';
import projectsData from '../../data/projects.json';

const ProjectSection = () => {
  const { sectionTitle, projects } = projectsData;

  return (
    <motion.div
      className="bg-[#001a33] min-h-screen py-16 px-4 border-b-2 border-gray-600"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex items-center justify-center gap-4 mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-8 h-8">
            <Image
              src="/icons/education.svg"
              alt="Education"
              width={32}
              height={32}
              className="object-contain invert"
            />
          </div>
          <h2 className="text-5xl font-bold tracking-wide text-white font-palanquin">
            {sectionTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2
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