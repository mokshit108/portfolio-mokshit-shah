import React from 'react';
import Image from 'next/image';

const EducationCard = ({ logo, alt, schoolName, course, grade, date }) => (
  <ul>
  <li>
    <div className="group flex justify-between items-center p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-[#00994d] transition-all duration-300 hover:shadow-lg hover:shadow-[#00994d]/20">
      <div className="flex gap-6">
        <div className="relative min-w-[60px] h-[60px] bg-gray-800 rounded-lg p-2 group-hover:bg-gray-700 transition-colors duration-300">
          <Image
            src={logo}
            alt={alt}
            width={60}
            height={60}
            className="rounded-lg object-contain"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-xl text-white tracking-wide group-hover:text-[#00994d] transition-colors duration-300">
            {schoolName}
          </h3>
          <p className="text-[#00994d] font-medium">{course}</p>
          <p className="text-gray-400">
            <span className="text-gray-300 font-semibold">Grade: </span>
            {grade}
          </p>
        </div>
      </div>
      <div className="text-gray-400 text-sm whitespace-nowrap bg-gray-800 px-4 py-2 rounded-full group-hover:bg-[#00994d]/10 group-hover:text-[#00994d] transition-all duration-300">
        {date}
      </div>
    </div>
  </li>
  </ul>
);

export default EducationCard;