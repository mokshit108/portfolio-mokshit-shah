'use client'
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
  SiJson,
  SiMysql
} from 'react-icons/si';
import { useTheme } from '../../context/ThemeContext';

const SkillCard = ({ skill }) => {
  const { theme } = useTheme();
  // Function to get React Icon component
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
      SiCss3,
      SiJson,
      SiMysql
    };
    return reactIcons[reactIconName];
  };

  // Function to render the icon
  const renderIcon = () => {
    const ReactIconComponent = getReactIcon(skill.reactIcon);
    
    // Icons that should be white in dark theme
    const darkThemeWhiteIcons = ['SiFlask', 'SiNextdotjs', 'SiMysql'];
    const shouldBeWhiteInDark = darkThemeWhiteIcons.includes(skill.reactIcon);
    
    // Determine icon color based on theme
    const iconColor = theme === 'dark' && shouldBeWhiteInDark 
      ? '#FFFFFF' 
      : skill.color;
    
    if (ReactIconComponent) {
      return (
        <ReactIconComponent
          className="w-4 h-4 sm:w-5 sm:h-5"
          style={{ color: iconColor }}
        />
      );
    }
    
    // Fallback for missing icons - show first letter
    return (
      <div 
        className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center"
        style={{ color: iconColor }}
      >
        <span className="text-xs font-bold">{skill.title.charAt(0)}</span>
      </div>
    );
  };

  return (
    <div className={`flex justify-center items-center gap-1.5 p-2 sm:p-3 rounded-lg border transition-all duration-300 hover:transform hover:scale-105 ${
      theme === 'light'
        ? 'bg-blue-50 border-blue-300 hover:bg-blue-100'
        : 'bg-teal-500 bg-opacity-5 border-cyan-700 hover:bg-teal-500 hover:bg-opacity-90'
    }`}>
      {renderIcon()}
      <span className={`font-bold font-sans text-center text-sm sm:text-base md:text-lg transition-colors duration-300 ${
        theme === 'light' ? 'text-gray-900' : 'text-white'
      }`}>{skill.title}</span>
    </div>
  );
};

export default SkillCard;