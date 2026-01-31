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
import { useTheme } from "../../context/ThemeContext";

const ExperienceCard = ({
  company,
  role,
  period,
  description,
  technologies,
  projects,
  projectExplanations,
}) => {
  const year = period.split(" ").pop();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedExplanations, setExpandedExplanations] = useState({});
  const { theme } = useTheme();

  // Function to get first 80 words
  const getFirst80Words = (text) => {
    const words = text.split(" ");
    if (words.length <= 80) return text;
    return words.slice(0, 80).join(" ") + "...";
  };

  // Function to check if text is longer than 80 words
  const isLongText = (text) => {
    return text.split(" ").length > 80;
  };

  // Toggle expand/collapse for a specific explanation
  const toggleExplanation = (idx) => {
    setExpandedExplanations((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div className="relative flex flex-col md:flex-row gap-4 md:gap-8 mb-8 md:mb-16">
      {/* Year label */}
      <div className="flex md:w-28 pt-2 md:pt-6 text-left md:text-right items-center md:justify-end gap-2">
        <FontAwesomeIcon
          icon={faCalendarAlt}
          className={`w-4 h-4 md:w-6 md:h-6 transition-colors duration-300 ${
            theme === 'light' ? 'text-blue-600' : 'text-teal-400'
          }`}
        />
        <span className={`font-bold text-lg md:text-xl transition-colors duration-300 ${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        }`}>{year}</span>
      </div>

      {/* Timeline dot and line */}
      <div className="hidden md:flex relative flex-col items-center">
        <div className={`w-4 h-4 rounded-full mt-8 flex items-center justify-center transition-colors duration-300 ${
          theme === 'light' ? 'bg-blue-400' : 'bg-teal-300'
        }`}>
          <FontAwesomeIcon icon={faCircle} className={`w-2 h-2 transition-colors duration-300 ${
            theme === 'light' ? 'text-blue-700' : 'text-teal-700'
          }`} />
        </div>
        <div className={`w-0.5 h-full -mt-2 transition-colors duration-300 ${
          theme === 'light' ? 'bg-gray-300' : 'bg-gray-700'
        }`} />
      </div>

      {/* Content card */}
      <div className="flex-1">
        <div className={`rounded-xl p-5 sm:p-6 md:p-8 border-2 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
          theme === 'light'
            ? 'bg-white border-gray-200 hover:border-blue-400 hover:shadow-blue-200/50'
            : 'bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-teal-500/60 hover:shadow-teal-500/10'
        }`}>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5 md:mb-6">
            <div className="flex items-start gap-3 md:gap-4">
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transform transition-all duration-300 hover:rotate-12 hover:scale-110 shadow-md ${
                theme === 'light'
                  ? 'bg-gradient-to-br from-blue-50 to-blue-100'
                  : 'bg-gradient-to-br from-teal-500/20 to-teal-600/20'
              }`}>
                <FontAwesomeIcon
                  icon={faBuilding}
                  className={`w-6 h-6 md:w-7 md:h-7 transition-colors duration-300 ${
                    theme === 'light' ? 'text-blue-600' : 'text-teal-400'
                  }`}
                />
              </div>
              <div>
                <h3 className={`font-bold text-xl md:text-2xl mb-2 transition-colors duration-300 ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>{company}</h3>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className={`w-3 h-3 md:w-4 md:h-4 transition-colors duration-300 ${
                      theme === 'light' ? 'text-blue-600' : 'text-cyan-300'
                    }`}
                  />
                  <p className={`font-md text-sm md:text-base transition-colors duration-300 ${
                    theme === 'light' ? 'text-blue-600' : 'text-cyan-300'
                  }`}>{role}</p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className={`w-3 h-3 transition-colors duration-300 ${
                      theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                    }`}
                  />
                  <p className={`font-normal text-xs md:text-sm transition-colors duration-300 ${
                    theme === 'light' ? 'text-gray-600' : 'text-slate-400'
                  }`}>{period}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`space-y-3 md:space-y-4 text-sm md:text-base transition-colors duration-300 ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}>
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
              <div className={`mt-5 md:mt-6 pt-5 border-t transition-colors duration-300 ${
                theme === 'light' ? 'border-gray-200' : 'border-gray-800'
              }`}>
                <div className="flex items-center gap-2 mb-4">
                  <FontAwesomeIcon
                    icon={faLaptopCode}
                    className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-300 ${
                      theme === 'light' ? 'text-blue-600' : 'text-teal-400'
                    }`}
                  />
                  <h4 className={`font-semibold text-base md:text-lg transition-colors duration-300 ${
                    theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>Technologies</h4>
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
                        className={`px-3 md:px-4 py-1.5 md:py-2 border-2 rounded-lg text-xs md:text-sm font-medium flex items-center gap-2 hover:transform hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md ${
                          theme === 'light'
                            ? 'bg-white border-blue-300 hover:border-blue-500 hover:bg-blue-50'
                            : 'bg-gray-800 border-gray-700 hover:border-teal-500 hover:bg-teal-500/20 hover:text-teal-300'
                        }`}
                        style={{
                          color: hoveredIndex === index && theme === 'dark' ? "#5eead4" : 
                                 hoveredIndex === index && theme === 'light' ? color : color,
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <FontAwesomeIcon icon={icon} className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {projects && (
              <div className={`mt-5 md:mt-6 pt-5 border-t transition-colors duration-300 ${
                theme === 'light' ? 'border-gray-200' : 'border-gray-800'
              }`}>
                <div className="flex items-center gap-2 mb-4">
                  <FontAwesomeIcon
                    icon={faLink}
                    className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-300 ${
                      theme === 'light' ? 'text-blue-600' : 'text-teal-400'
                    }`}
                  />
                  <h4 className={`font-semibold text-base md:text-lg transition-colors duration-300 ${
                    theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>Key Projects</h4>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {projects.map((project, index) => (
                    project.url ? (
                      <Link
                        key={index}
                        href={project.url}
                        className={`px-4 md:px-5 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:translate-x-1 hover:scale-105 shadow-sm hover:shadow-md ${
                          theme === 'light'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 hover:border-blue-400'
                            : 'bg-gray-800 text-sky-300 border border-gray-700 hover:text-white hover:bg-teal-500/20 hover:border-teal-500'
                        }`}
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLink} className="w-3 h-3 md:w-3.5 md:h-3.5" />
                        {project.name}
                      </Link>
                    ) : (
                      <span
                        key={index}
                        className={`px-4 md:px-5 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-medium flex items-center gap-2 transition-all duration-300 hover:translate-x-1 cursor-pointer shadow-sm ${
                          theme === 'light'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100'
                            : 'bg-gray-800 text-sky-300 border border-gray-700 hover:bg-teal-500/20'
                        }`}
                      >
                        <FontAwesomeIcon icon={faLink} className="w-3 h-3 md:w-3.5 md:h-3.5 opacity-50" />
                        {project.name}
                      </span>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Project Explanations Section */}
            {projectExplanations && projectExplanations.length > 0 && (
              <div className={`mt-5 md:mt-6 pt-5 border-t transition-colors duration-300 ${
                theme === 'light' ? 'border-gray-200' : 'border-gray-800'
              }`}>
                <div className="flex items-center gap-2 mb-4">
                  <FontAwesomeIcon
                    icon={faLaptopCode}
                    className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-300 ${
                      theme === 'light' ? 'text-blue-600' : 'text-teal-400'
                    }`}
                  />
                  <h4 className={`font-semibold text-base md:text-lg transition-colors duration-300 ${
                    theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>Project Explanations</h4>
                </div>
                <div className="space-y-3 md:space-y-4">
                  {projectExplanations.map((proj, idx) => {
                    const isExpanded = expandedExplanations[idx];
                    const isLong = isLongText(proj.explanation);
                    const displayText = isExpanded || !isLong 
                      ? proj.explanation 
                      : getFirst80Words(proj.explanation);

                    return (
                      <div key={idx} className={`rounded-lg p-4 md:p-5 transition-all duration-300 border shadow-sm hover:shadow-md ${
                        theme === 'light' 
                          ? 'bg-blue-50 border-blue-100 hover:border-blue-300' 
                          : 'bg-gray-800/60 border-gray-700 hover:border-gray-600'
                      }`}>
                        <div className={`font-semibold text-sm md:text-base mb-2 transition-colors duration-300 ${
                          theme === 'light' ? 'text-blue-700' : 'text-teal-400'
                        }`}>{proj.name}</div>
                        <div className={`text-sm md:text-base leading-relaxed transition-colors duration-300 ${
                          theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                        }`}>
                          {displayText}
                        </div>
                        {isLong && (
                          <button
                            onClick={() => toggleExplanation(idx)}
                            className={`mt-3 text-sm font-medium transition-all duration-300 hover:underline ${
                              theme === 'light' 
                                ? 'text-blue-600 hover:text-blue-800' 
                                : 'text-teal-400 hover:text-teal-300'
                            }`}
                          >
                            {isExpanded ? 'Show less' : '...more'}
                          </button>
                        )}
                      </div>
                    );
                  })}
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
