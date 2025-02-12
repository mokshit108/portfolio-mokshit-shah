'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import EducationCard from './EducationCard';
import educationData from '../../data/education.json';

const EducationSection = () => {
  return (
    <motion.section
      id="education"
      className="py-10 sm:py-20 bg-[#001a33] border-b-2 border-gray-600"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="flex items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FontAwesomeIcon
            icon={faGraduationCap}
            className="text-teal-500 w-8 h-8 sm:w-12 sm:h-12"
          />
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-palanquin tracking-wide">
            Education
          </h2>
        </motion.div>

        <motion.div
          className="space-y-3 sm:space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {educationData.educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
            >
              <EducationCard
                logo={edu.logo}
                alt={edu.alt}
                schoolName={edu.schoolName}
                course={edu.course}
                grade={edu.grade}
                date={edu.date}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EducationSection;