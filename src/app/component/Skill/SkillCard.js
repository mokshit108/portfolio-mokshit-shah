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

const SkillCard = ({ skill }) => {
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
    if (ReactIconComponent) {
      return (
        <ReactIconComponent
          className="w-4 h-4 sm:w-5 sm:h-5"
          style={{ color: skill.color }}
        />
      );
    }
    
    // Fallback for missing icons - show first letter
    return (
      <div 
        className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center"
        style={{ color: skill.color }}
      >
        <span className="text-xs font-bold">{skill.title.charAt(0)}</span>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center gap-1.5 p-2 sm:p-3 rounded-lg bg-teal-500 bg-opacity-5 border border-cyan-700 hover:bg-teal-500 hover:bg-opacity-90 transition-all duration-300 hover:transform hover:scale-105">
      {renderIcon()}
      <span className="font-bold font-sans text-center text-white text-sm sm:text-base md:text-lg">{skill.title}</span>
    </div>
  );
};

export default SkillCard;