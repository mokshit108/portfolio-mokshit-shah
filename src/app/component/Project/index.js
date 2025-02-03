import React from 'react';
import Image from 'next/image';
import ProjectCard from './ProjectCard';
import projectsData from '../../data/projects.json';

const ProjectSection = () => {
  const { sectionTitle, projects } = projectsData;

  return (
    <div className="bg-black min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-16">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;