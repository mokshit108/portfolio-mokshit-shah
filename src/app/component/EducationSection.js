import React from 'react';
import Image from 'next/image';

const EducationCard = ({ logo, alt, schoolName, course, grade, date }) => (
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
);

const EducationSection = () => {
  const educationData = [
    {
      logo: "",
      alt: "SIES College",
      schoolName: "SIES Graduate School of Technology",
      course: "IT Engineering",
      grade: "CGPI: 9.11/10",
      date: "May 2017 - May 2021"
    },
    {
      logo: "",
      alt: "NES Ratnam Junior College",
      schoolName: "NES Ratnam Junior College",
      course: "HSC Science",
      grade: "Grade: 88.40%",
      date: "March 2015 - March 2017"
    },
    {
      logo: "",
      alt: "Guru Nanak English High School",
      schoolName: "Guru Nanak English High School",
      course: "SSC",
      grade: "Grade: 84.80%",
      date: "March 2015"
    }
  ];

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
            {educationData.map((edu, index) => (
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