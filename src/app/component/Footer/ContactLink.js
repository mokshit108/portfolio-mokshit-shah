import React from 'react';

const ContactLink = ({ href, text }) => (
  <a
    href={href}
    className="flex items-center justify-center sm:justify-start gap-2 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-teal-500 hover:bg-opacity-90 transition-all group bg-gray-800/30 hover:shadow-lg hover:shadow-teal-500/10"
  >
    <span className="text-base sm:text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
      {text}
    </span>
  </a>
);

export default ContactLink;
 {/* Uncomment if you want to use icons
    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
      <img
        src={icon}
        alt=""
        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
      />
    </div>
    */}