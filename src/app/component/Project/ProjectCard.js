import React from 'react';
import projectsData from '../../data/projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ title, description, techStack, liveLink, githubLink, imageSrc }) => {
  const { icons } = projectsData;

  return (
    <div className="bg-black border border-[#4CAF50] rounded-lg overflow-hidden hover:scale-[1.02] transition-transform">
      <div className="relative h-48 w-full">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 text-white">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>

        <ul className="mb-6 space-y-2">
          {description.map((desc, index) => (
            <li key={index} className="text-gray-300 text-sm">
              • {desc}
            </li>
          ))}
        </ul>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-gray-400">TechStack :</span>
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-gray-900 rounded-full text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <FontAwesomeIcon 
                icon={faExternalLinkAlt} 
                className="w-6 h-6 text-white"
              />
            </a>
            
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
              >
                <svg width="24" height="24" viewBox={icons.github.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d={icons.github.path} fill="#FFF"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;