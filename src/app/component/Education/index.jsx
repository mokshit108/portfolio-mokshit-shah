import React from 'react';
import Image from 'next/image';
import EducationCard from './EducationCard';
import educationData from '../../data/education.json';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-12 h-12 bg-[#00994d]/20 rounded-xl p-3">
            <Image
              src="/icons/education.svg"
              alt="Education"
              width={32}
              height={32}
              className="object-contain invert"
            />
          </div>
          <h2 className="text-3xl font-bold text-white tracking-wide">Education</h2>
        </div>

        <div className="space-y-6">
          <ul className="space-y-6">
            {educationData.educationData.map((edu, index) => (
              <EducationCard
                key={index}
                logo={edu.logo}
                alt={edu.alt}
                schoolName={edu.schoolName}
                course={edu.course}
                grade={edu.grade}
                date={edu.date}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;