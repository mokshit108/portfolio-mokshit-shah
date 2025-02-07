import React from 'react';
import Image from 'next/image';

const EducationCard = ({ logo, alt, schoolName, course, grade, date }) => (
  <ul>
  <li>
    <div className="group flex justify-between items-center p-6 bg-teal-300 bg-opacity-5 rounded-xl border border-gray-700 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/20">
      <div className="flex gap-6">
          <Image
            src={logo}
            alt={alt}
            width={80}
            height={80}
            className="rounded-lg object-contain"
          />
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-xl text-white tracking-wide group-hover:text-sky-300 transition-colors duration-300">
            {schoolName}
          </h3>
          <p className="text-teal-500 text-lg font-bold group-hover:text-sky-400 transition-colors duration-300">{course}</p>
          <p className="text-white font-md group-hover:text-sky-400 transition-colors duration-300">
            {grade}
          </p>
        </div>
      </div>
      <div className="text-white text-sm whitespace-nowrap  bg-cyan-800 px-4 py-2 rounded-full group-hover:bg-sky-400/80 group-hover:text-white transition-all duration-300">
        {date}
      </div>
    </div>
  </li>
  </ul>
);

export default EducationCard;