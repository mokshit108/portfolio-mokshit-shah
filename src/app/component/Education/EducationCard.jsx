import React from 'react';
import Image from 'next/image';

const EducationCard = ({ logo, alt, schoolName, course, grade, date }) => (
  <div className="group flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 bg-teal-300 bg-opacity-5 rounded-xl border border-gray-700 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/20 gap-4 sm:gap-0">
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
      <div className="flex justify-center sm:justify-start">
        <Image
          src={logo}
          alt={alt}
          width={60}
          height={60}
          className="rounded-lg object-contain sm:w-[80px] sm:h-[80px]"
        />
      </div>
      <div className="flex flex-col gap-1 text-center sm:text-left">
        <h3 className="font-bold text-lg sm:text-xl text-white tracking-wide group-hover:text-sky-300 transition-colors duration-300">
          {schoolName}
        </h3>
        <p className="text-teal-500 text-base sm:text-lg font-bold group-hover:text-sky-400 transition-colors duration-300">
          {course}
        </p>
        <p className="text-white text-sm sm:text-base font-md group-hover:text-sky-400 transition-colors duration-300">
          {grade}
        </p>
      </div>
    </div>
    <div className="text-white text-xs sm:text-sm whitespace-nowrap bg-cyan-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full group-hover:bg-sky-400/80 group-hover:text-white transition-all duration-300 w-full sm:w-auto text-center sm:text-left mt-2 sm:mt-0">
      {date}
    </div>
  </div>
);

export default EducationCard;