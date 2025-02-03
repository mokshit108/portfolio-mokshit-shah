"use client";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faCalendarAlt,
  faLink,
  faBuilding,
  faLaptopCode,
  faCircle,
  faCaretRight
} from '@fortawesome/free-solid-svg-icons';
import { getTechIcon } from './utils';
import experienceData from '../../data/experience.json';
import { iconMap } from './utils';

const ExperienceCard = ({ company, role, period, description, technologies, projects }) => {
  const year = period.split(" ").pop();

  return (
    <div className="relative flex gap-8 mb-16">
      {/* Year label */}
      <div className="w-28 pt-6 text-right flex items-center justify-end gap-2">
        <FontAwesomeIcon icon={faCalendarAlt} className="text-green-400 w-4 h-4" />
        <span className="text-green-400 font-bold text-xl">{year}</span>
      </div>

      {/* Timeline dot and line */}
      <div className="relative flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-green-500 mt-8 flex items-center justify-center">
          <FontAwesomeIcon icon={faCircle} className="text-green-700 w-2 h-2" />
        </div>
        <div className="w-0.5 h-full bg-gray-700 -mt-2" />
      </div>

      {/* Content card */}
      <div className="flex-1">
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center transform transition-transform duration-300 hover:rotate-12">
                <FontAwesomeIcon icon={faBuilding} className="text-green-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white mb-1">{company}</h3>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faBriefcase} className="text-green-400 w-4 h-4" />
                  <p className="text-green-400 font-medium">{role}</p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-400 w-4 h-4" />
                  <p className="text-gray-400 text-sm">{period}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-gray-300">
            {description.map((item, index) => (
              <p key={index} className="flex gap-3 items-start group">
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="text-green-400 w-4 h-4 mt-1 transform group-hover:translate-x-1 transition-transform duration-300"
                />
                {item}
              </p>
            ))}

            {technologies && (
              <div className="mt-6 pt-4 border-t border-gray-700/50">
                <div className="flex items-center gap-2 mb-4">
                  <FontAwesomeIcon icon={faLaptopCode} className="text-white w-4 h-4" />
                  <h4 className="text-white font-medium">Technologies</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {technologies.split(", ").map((tech, index) => {
                    const { icon, color } = getTechIcon(tech, experienceData.techIcons, iconMap);
                    return (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-gray-700/50 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-600/50 transition-colors duration-300"
                        style={{ color }}
                      >
                        <FontAwesomeIcon icon={icon} className="w-4 h-4" />
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {projects && (
              <div className="mt-6 pt-4 border-t border-gray-700/50">
                <div className="flex items-center gap-2 mb-4">
                  <FontAwesomeIcon icon={faLink} className="text-white w-4 h-4" />
                  <h4 className="text-white font-medium">Key Projects</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {projects.map((project, index) => (
                    <Link
                      key={index}
                      href={project.url}
                      className="px-4 py-2 bg-gray-700/50 rounded-lg text-sm text-green-400 hover:bg-gray-600/50 transition-all duration-300 flex items-center gap-2 hover:translate-x-1"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faLink} className="w-3 h-3" />
                      {project.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;