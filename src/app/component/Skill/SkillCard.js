'use client'
import { useState } from 'react';
import { 
  SiTailwindcss, 
  SiNextdotjs, 
  SiRedux, 
  SiTypescript, 
  SiPostgresql, 
  SiFastapi,
  SiMui,
  SiReact,
  SiPython,
  SiJavascript,
  SiNodedotjs,
  SiFlask,
  SiHtml5,
  SiCss3,
  SiMysql
} from 'react-icons/si';
import { useTheme } from '../../context/ThemeContext';

const SkillCard = ({ skill, isMobile = false }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  // On mobile, hover is never active
  const hovered = isMobile ? false : isHovered;

  const getReactIcon = (reactIconName) => {
    const reactIcons = {
      SiTailwindcss,
      SiNextdotjs,
      SiRedux,
      SiTypescript,
      SiPostgresql,
      SiFastapi,
      SiMui,
      SiReact,
      SiPython,
      SiJavascript,
      SiNodedotjs,
      SiFlask,
      SiHtml5,
      // react-icons v5 renamed SiCss3 → SiCss; alias both keys
      SiCss3: SiCss3,
      SiMysql
    };
    return reactIcons[reactIconName];
  };

  const renderIcon = () => {
    const ReactIconComponent = getReactIcon(skill.reactIcon);

    const darkThemeWhiteIcons = ['SiFlask', 'SiNextdotjs', 'SiMysql'];
    const shouldBeWhiteInDark = darkThemeWhiteIcons.includes(skill.reactIcon);
    const iconColor = theme === 'dark' && shouldBeWhiteInDark ? '#FFFFFF' : skill.color;

    if (ReactIconComponent) {
      return (
        <ReactIconComponent
          className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${
            !isMobile ? 'transition-all duration-500' : ''
          } ${!isMobile && hovered ? 'scale-110' : 'scale-100'}`}
          style={{ color: iconColor }}
        />
      );
    }

    return (
      <div
        className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center ${
          !isMobile ? 'transition-all duration-500' : ''
        } ${!isMobile && hovered ? 'scale-110' : 'scale-100'}`}
        style={{ color: iconColor }}
      >
        <span className="text-sm sm:text-base font-bold">{skill.title.charAt(0)}</span>
      </div>
    );
  };

  return (
    <div
      className={`group relative w-full min-w-0 box-border flex-1 flex flex-col justify-center items-center gap-2 p-2 sm:p-3 md:p-4 rounded-xl border-2 ${
        !isMobile
          ? 'transition-all duration-500 hover:shadow-2xl hover:-translate-y-2'
          : ''
      } ${
        theme === 'light'
          ? `bg-white border-gray-200 ${!isMobile ? 'hover:border-blue-400 hover:shadow-blue-200/50' : ''}`
          : `bg-gradient-to-b from-teal-900 to-blue-950 border-teal-800 ${!isMobile ? 'hover:border-blue-900 hover:shadow-blue-900/30' : ''}`
      }`}
      onMouseEnter={() => { if (!isMobile) setIsHovered(true); }}
      onMouseLeave={() => { if (!isMobile) setIsHovered(false); }}
    >
      {/* Icon Container */}
      <div className={`relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg ${
        !isMobile ? 'transition-all duration-500' : ''
      } ${
        hovered
          ? theme === 'light' ? 'bg-blue-50' : 'bg-gray-800'
          : theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'
      }`}>
        {renderIcon()}

        {/* Pulse effect — desktop only */}
        {!isMobile && hovered && (
          <div className={`absolute inset-0 rounded-lg animate-pulse ${
            theme === 'light' ? 'bg-blue-200/30' : 'bg-teal-500/20'
          }`} />
        )}
      </div>

      {/* Skill Name */}
      <div className="text-center w-full">
        <span className={`text-xs sm:text-sm font-semibold whitespace-normal break-words ${
          !isMobile ? 'transition-colors duration-500' : ''
        } ${
          hovered
            ? theme === 'light' ? 'text-blue-700' : 'text-teal-400'
            : theme === 'light' ? 'text-gray-900' : 'text-white'
        }`}>
          {skill.title}
        </span>
      </div>

      {/* Decorative accent line — desktop only */}
      {!isMobile && (
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-xl transition-all duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: `linear-gradient(to right, ${skill.color}40, ${skill.color}, ${skill.color}40)`
          }}
        />
      )}

      {/* Shine effect — desktop only */}
      {!isMobile && (
        <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          theme === 'light'
            ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
            : 'bg-gradient-to-r from-transparent via-white/5 to-transparent'
        }`} />
      )}
    </div>
  );
};

export default SkillCard;
