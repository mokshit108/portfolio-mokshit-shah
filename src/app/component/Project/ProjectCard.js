'use client'
import React, { useState } from 'react';
import projectsData from '../../data/projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from '../../context/ThemeContext';

const ProjectCard = ({ title, description, techStack, liveLink, githubLink, imageSrc }) => {
  const { icons } = projectsData;
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group relative border rounded-xl overflow-hidden transition-all duration-500 ${
        isHovered ? '-translate-y-6 scale-105' : 'translate-y-0 scale-100'
      } ${
        theme === 'light'
          ? `bg-white border-gray-200 shadow-md ${isHovered ? 'shadow-2xl' : ''} hover:border-blue-400`
          : `bg-gradient-to-br from-gray-900 to-black border-gray-800 shadow-lg ${isHovered ? 'shadow-2xl' : ''} hover:border-teal-500/60`
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Overlay */}
      <div className="relative h-48 sm:h-56 w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 transition-opacity duration-300 ${
          isHovered 
            ? 'opacity-0' 
            : theme === 'light' 
              ? 'bg-gradient-to-t from-white/20 to-transparent' 
              : 'bg-gradient-to-t from-black/40 to-transparent'
        }`} />
        <div className={`absolute inset-0 transition-opacity duration-300 ${
          isHovered 
            ? 'opacity-100' 
            : 'opacity-0'
        } ${
          theme === 'light' 
            ? 'bg-gradient-to-t from-blue-600/90 to-transparent' 
            : 'bg-gradient-to-t from-teal-600/90 to-transparent'
        }`} />
        
        {/* Action Buttons Overlay */}
        <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 hover:bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-110 flex items-center gap-2 shadow-lg"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 hover:bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-110 flex items-center gap-2 shadow-lg"
            >
              <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className={`p-5 sm:p-6 transition-colors duration-300 ${
        theme === 'light' ? 'bg-white' : 'bg-gradient-to-br from-gray-900 to-black'
      }`}>
        <h3 className={`text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300 ${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        }`}>
          {title}
        </h3>

        <ul className="mb-5 sm:mb-6 space-y-2">
          {description.map((desc, index) => (
            <li key={index} className={`text-sm sm:text-base leading-relaxed flex gap-3 transition-colors duration-300 ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}>
              <span className={`flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                theme === 'light' ? 'bg-blue-600' : 'bg-teal-500'
              }`} />
              <span className="flex-1">{desc}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
              theme === 'light' ? 'text-gray-500' : 'text-gray-400'
            }`}>
              Tech Stack
            </span>
            <div className={`flex-1 h-px transition-colors duration-300 ${
              theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'
            }`} />
          </div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-all duration-300 ${
                  theme === 'light'
                    ? 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100'
                    : 'bg-gray-800 text-teal-300 border border-gray-700 hover:bg-gray-700'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className={`flex items-center justify-end gap-4 mt-5 pt-4 border-t transition-colors duration-300 ${
          theme === 'light' ? 'border-gray-200' : 'border-gray-800'
        }`}>
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                theme === 'light'
                  ? 'text-blue-600 hover:bg-blue-50 hover:text-blue-700'
                  : 'text-teal-400 hover:bg-gray-800 hover:text-teal-300'
              }`}
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} className="w-4 h-4" />
              <span>View Live</span>
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                theme === 'light'
                  ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox={icons.github.viewBox}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d={icons.github.path} />
              </svg>
              <span>Source</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;