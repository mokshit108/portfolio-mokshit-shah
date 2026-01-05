'use client'
import React from 'react';
import projectsData from '../../data/projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../context/ThemeContext';

const ProjectCard = ({ title, description, techStack, liveLink, githubLink, imageSrc }) => {
  const { icons } = projectsData;
  const { theme } = useTheme();

  return (
    <div className={`border rounded-lg overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:shadow-lg ${
      theme === 'light'
        ? 'bg-white border-gray-300 hover:border-blue-400 hover:shadow-blue-200/50'
        : 'bg-black border-teal-500/50 hover:border-teal-300 hover:shadow-teal-500/10'
    }`}>
      <div className="relative h-40 sm:h-48 w-full">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className={`p-4 sm:p-6 transition-colors duration-300 ${
        theme === 'light' ? 'text-gray-900' : 'text-white'
      }`}>
        <h3 className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-4 transition-colors duration-300 ${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        }`}>{title}</h3>

        <ul className="mb-4 sm:mb-6 space-y-1.5 sm:space-y-2">
          {description.map((desc, index) => (
            <li key={index} className={`text-xs sm:text-sm flex gap-2 transition-colors duration-300 ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
              <span className={theme === 'light' ? 'text-blue-600' : 'text-teal-500'}>•</span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <span className={`text-sm transition-colors duration-300 ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}>TechStack</span>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full transition-colors duration-300 ${
                    theme === 'light'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-900 text-gray-300'
                  }`}
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
              className={`p-1.5 sm:p-2 rounded-full transition-colors ${
                theme === 'light'
                  ? 'hover:bg-blue-100'
                  : 'hover:bg-gray-800'
              }`}
            >
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}
              />
            </a>

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-1.5 sm:p-2 rounded-full transition-colors ${
                  theme === 'light'
                    ? 'hover:bg-blue-100'
                    : 'hover:bg-gray-800'
                }`}
              >
                <svg
                  width="20"
                  height="20"
                  className="sm:w-6 sm:h-6"
                  viewBox={icons.github.viewBox}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={icons.github.path} fill={theme === 'light' ? '#1f2937' : '#FFF'}/>
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