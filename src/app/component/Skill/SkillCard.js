import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';

const SkillCard = ({ skill }) => {
  // Function to get the correct icon based on type and name
  const getIcon = (iconName, type) => {
    return type === 'brand' ? brandIcons[iconName] : solidIcons[iconName];
  };

  return (
    <div className="flex justify-center items-center gap-2 p-3 rounded-lg bg-teal-500 bg-opacity-5 border-2 border-cyan-700 hover:bg-sky-700  transition-all duration-300 hover:transform hover:scale-105 ">
      <FontAwesomeIcon
        icon={getIcon(skill.iconName, skill.type)}
        className="w-5 h-5"
        style={{ color: skill.color }}
      />
      <span className="font-bold font-sans text-center text-white text-lg">{skill.title}</span>
    </div>
  );
};

export default SkillCard;