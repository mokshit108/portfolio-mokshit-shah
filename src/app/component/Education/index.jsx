'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import EducationCard from './EducationCard';
import educationData from '../../data/education.json';

const EducationSection = () => {
  return (
    <motion.section
      id="education"
      className="py-20 bg-[#001a33] border-b-2 border-gray-600"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="flex items-center justify-center gap-4 mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-12 bg-[#00994d]/20 rounded-xl p-3">
            <Image
              src="/icons/education.svg"
              alt="Education"
              width={32}
              height={32}
              className="object-contain invert"
            />
          </div>
          <h2 className="text-5xl font-bold text-white font-palanquin tracking-wide">Education</h2>
        </motion.div>

        <div className="space-y-6">
          <ul className="space-y-6">
            {educationData.educationData.map((edu, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2
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
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default EducationSection;