import {
    faReact, faVuejs, faJs, faCuttlefish, faHtml5,
    faCss3Alt, faNode
  } from '@fortawesome/free-brands-svg-icons';
  import {
    faCode, faFileCode, faDatabase, faServer
  } from '@fortawesome/free-solid-svg-icons';

  export const iconMap = {
    faReact, faVuejs, faJs, faCuttlefish, faHtml5,
    faCss3Alt, faNode, faCode, faFileCode, faDatabase, faServer
  };

  export const getTechIcon = (techName, techIcons, iconMap) => {
    // Search for matching tech in our map (case-insensitive)
    const tech = Object.keys(techIcons).find(
      key => techName.toLowerCase().includes(key.toLowerCase())
    );

    const iconConfig = techIcons[tech] || techIcons.default;
    return {
      icon: iconMap[iconConfig.icon],
      color: iconConfig.color
    };
  };