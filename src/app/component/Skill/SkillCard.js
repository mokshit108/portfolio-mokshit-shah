'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

// Map reactIcon keys to Simple Icons CDN slugs
const ICON_SLUG_MAP = {
  SiReact: 'react',
  SiPython: 'python',
  SiJavascript: 'javascript',
  SiTypescript: 'typescript',
  SiNodedotjs: 'nodedotjs',
  SiFlask: 'flask',
  SiRedux: 'redux',
  SiPostgresql: 'postgresql',
  SiHtml5: 'html5',
  SiCss3: 'css3',
  SiTailwindcss: 'tailwindcss',
  SiMysql: 'mysql',
  SiNextdotjs: 'nextdotjs',
  SiFastapi: 'fastapi',
  SiMui: 'mui',
};

const SkillCard = ({ skill, isMobile = false }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  // On mobile, hover is never active
  const hovered = isMobile ? false : isHovered;

  const renderIcon = () => {
    const slug = ICON_SLUG_MAP[skill.reactIcon];

    const darkThemeWhiteIcons = ['SiFlask', 'SiNextdotjs', 'SiMysql'];
    const shouldBeWhiteInDark = darkThemeWhiteIcons.includes(skill.reactIcon);
    const iconColor = theme === 'dark' && shouldBeWhiteInDark ? 'FFFFFF' : skill.color.replace('#', '');

    if (slug) {
      return (
        <img
          src={`https://cdn.simpleicons.org/${slug}/${iconColor}`}
          alt={skill.title}
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
        />
      );
    }

    // Fallback: first letter of skill name
    return (
      <div
        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center"
        style={{ color: `#${iconColor}` }}
      >
        <span className="text-sm sm:text-base font-bold">{skill.title.charAt(0)}</span>
      </div>
    );
  };

  return (
    <motion.div
      whileHover={!isMobile ? { scale: 1.05, translateY: -5 } : {}}
      whileTap={isMobile ? { scale: 0.95 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative w-full h-full min-w-0 box-border flex-1 flex flex-col justify-center items-center gap-2 p-3 sm:p-4 md:p-5 rounded-2xl border border-solid transition-colors overflow-hidden ${theme === 'light'
        ? `bg-white shadow-sm border-gray-200 ${!isMobile ? 'hover:shadow-md' : ''}`
        : `bg-[#0a192f] shadow-none border-[#1e293b] ${!isMobile ? 'hover:shadow-lg' : ''}`
        }`}
      onMouseEnter={() => { if (!isMobile) setIsHovered(true); }}
      onMouseLeave={() => { if (!isMobile) setIsHovered(false); }}
    >
      {/* Icon Container */}
      <motion.div
        animate={{
          rotate: hovered ? [0, -10, 10, -5, 5, 0] : 0,
          scale: hovered ? 1.1 : 1
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`relative z-10 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex-shrink-0`}
        style={{
          backgroundColor: theme === 'light' ? `${skill.color}15` : `${skill.color}25`
        }}
      >
        {renderIcon()}
      </motion.div>

      {/* Skill Name */}
      <div className="text-center w-full relative z-10">
        <span className={`text-xs sm:text-sm font-medium whitespace-normal break-words tracking-wide antialiased ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'
          }`}>
          {skill.title}
        </span>
      </div>

      {/* Decorative accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
        style={{ backgroundColor: skill.color }}
      />
    </motion.div>
  );
};

export default SkillCard;
