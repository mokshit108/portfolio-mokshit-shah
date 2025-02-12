"use client";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import ExperienceCard from './ExperienceCard';
import experienceData from '../../data/experience.json';

const ExperienceSection = () => {
  return (
    <motion.section
      className="py-8 md:py-16 bg-[#001a33] min-h-screen border-b-2 border-gray-600"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          className="flex items-center justify-center gap-2 md:gap-4 mb-8 md:mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FontAwesomeIcon
            icon={faBriefcase}
            className="text-teal-500 w-6 h-6 md:w-10 md:h-10"
          />
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide font-palanquin">Experience</h2>
        </motion.div>

        <div className="relative">
          {experienceData.experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
            >
              <ExperienceCard {...experience} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;