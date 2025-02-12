import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';

const SkillCard = ({ skill }) => {
  // Function to get the correct icon based on type and name
  const getIcon = (iconName, type) => {
    return type === 'brand' ? brandIcons[iconName] : solidIcons[iconName];
  };

  return (
    <div className="flex justify-center items-center gap-1.5 p-2 sm:p-3 rounded-lg bg-teal-500 bg-opacity-5 border border-cyan-700 hover:bg-teal-500 hover:bg-opacity-90 transition-all duration-300 hover:transform hover:scale-105">
      <FontAwesomeIcon
        icon={getIcon(skill.iconName, skill.type)}
        className="w-4 h-4 sm:w-5 sm:h-5"
        style={{ color: skill.color }}
      />
      <span className="font-bold font-sans text-center text-white text-sm sm:text-base md:text-lg">{skill.title}</span>
    </div>
  );
};

export default SkillCard;