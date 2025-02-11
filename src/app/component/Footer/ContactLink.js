import React from 'react';

const ContactLink = ({ href, text }) => (
  <a
    href={href}
    className="flex items-center gap-4 p-4 rounded-lg hover:bg-teal-500 hover:bg-opacity-90 transition-all group w-full md:w-auto"
  >
    {/* Uncomment if you want to use icons
    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
      <img
        src={icon}
        alt=""
        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
      />
    </div>
    */}
    <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
      {text}
    </span>
  </a>
);

export default ContactLink;