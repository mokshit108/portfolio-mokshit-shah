"use client";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendarAlt,
  faLink,
  faBuilding,
  faLaptopCode,
  faCircle,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { getTechIcon } from "./utils";
import experienceData from "../../data/experience.json";
import { iconMap } from "./utils";

const ExperienceCard = ({
  company,
  role,
  period,
  description,
  technologies,
  projects,
}) => {
  const year = period.split(" ").pop();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative flex flex-col md:flex-row gap-4 md:gap-8 mb-8 md:mb-16">
      {/* Year label */}
      <div className="flex md:w-28 pt-2 md:pt-6 text-left md:text-right items-center md:justify-end gap-2">
        <FontAwesomeIcon
          icon={faCalendarAlt}
          className="text-teal-400 w-4 h-4 md:w-6 md:h-6"
        />
        <span className="text-white font-bold text-lg md:text-xl">{year}</span>
      </div>

      {/* Timeline dot and line */}
      <div className="hidden md:flex relative flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-teal-300 mt-8 flex items-center justify-center">
          <FontAwesomeIcon icon={faCircle} className="text-teal-700 w-2 h-2" />
        </div>
        <div className="w-0.5 h-full bg-gray-700 -mt-2" />
      </div>

      {/* Content card */}
      <div className="flex-1">
        <div className="bg-teal-400 bg-opacity-5 rounded-xl p-4 md:p-6 border border-gray-700/50 backdrop-blur-sm hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 md:mb-6">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-xl flex items-center justify-center transform transition-transform duration-300 hover:rotate-12">
                <FontAwesomeIcon
                  icon={faBuilding}
                  className="text-teal-400 w-5 h-5 md:w-6 md:h-6"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg md:text-xl text-white mb-1">{company}</h3>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="text-cyan-300 w-3 h-3 md:w-4 md:h-4"
                  />
                  <p className="text-cyan-300 font-md text-sm md:text-base">{role}</p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="text-gray-400 w-3 h-3"
                  />
                  <p className="text-slate-400 font-normal text-xs md:text-sm">{period}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4 text-gray-300 text-sm md:text-base">
            {description.map((item, index) => (
              <p key={index} className="flex gap-2 md:gap-3 items-start group">
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="text-teal-500 w-3 h-3 md:w-4 md:h-4 mt-1 transform group-hover:translate-x-1 transition-transform duration-300"
                />
                {item}
              </p>
            ))}

            {technologies && (
              <div className="mt-4 md:mt-6 pt-4 border-t border-gray-700/50">
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <FontAwesomeIcon
                    icon={faLaptopCode}
                    className="text-white w-3 h-3 md:w-4 md:h-4"
                  />
                  <h4 className="text-white font-medium text-sm md:text-base">Technologies</h4>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {technologies.split(", ").map((tech, index) => {
                    const { icon, color } = getTechIcon(
                      tech,
                      experienceData.techIcons,
                      iconMap
                    );
                    return (
                      <span
                        key={index}
                        className="px-2 md:px-3 py-1 md:py-1.5 bg-slate-50 border-2 border-cyan-700 rounded-lg text-xs md:text-sm flex items-center gap-1.5 md:gap-2 hover:bg-teal-500 hover:bg-opacity-90 hover:text-white hover:transform hover:scale-105 transition-colors duration-300"
                        style={{
                          color: hoveredIndex === index ? "white" : color,
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <FontAwesomeIcon icon={icon} className="w-3 h-3 md:w-4 md:h-4" />
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {projects && (
              <div className="mt-4 md:mt-6 pt-4 border-t border-gray-700/50">
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="text-white w-3 h-3 md:w-4 md:h-4"
                  />
                  <h4 className="text-white font-medium text-sm md:text-base">Key Projects</h4>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {projects.map((project, index) => (
                    <Link
                      key={index}
                      href={project.url}
                      className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-700/50 rounded-lg text-xs md:text-sm text-sky-200 hover:text-white hover:bg-teal-500 hover:bg-opacity-90 transition-all duration-300 flex items-center gap-1.5 md:gap-2 hover:translate-x-1"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faLink} className="w-2.5 h-2.5 md:w-3 md:h-3" />
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
