import React from 'react';
import projectsData from '../../data/projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ title, description, techStack, liveLink, githubLink, imageSrc }) => {
  const { icons } = projectsData;

  return (
    <div className="bg-black border border-teal-500/50 rounded-lg overflow-hidden hover:scale-[1.02] transition-transform hover:border-teal-300 duration-300 hover:shadow-lg hover:shadow-teal-500/10">
      <div className="relative h-40 sm:h-48 w-full">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 sm:p-6 text-white">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">{title}</h3>

        <ul className="mb-4 sm:mb-6 space-y-1.5 sm:space-y-2">
          {description.map((desc, index) => (
            <li key={index} className="text-gray-300 text-xs sm:text-sm flex gap-2">
              <span className="text-teal-500">•</span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <span className="text-gray-400 text-sm">TechStack</span>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm bg-gray-900 rounded-full text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 sm:gap-4">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
              />
            </a>

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 hover:bg-gray-800 rounded-full transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  className="sm:w-6 sm:h-6"
                  viewBox={icons.github.viewBox}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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