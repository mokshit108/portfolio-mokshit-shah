"use client";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import ExperienceCard from './ExperienceCard';
import experienceData from '../../data/experience.json';

const ExperienceSection = () => {
  return (
    <motion.section
      className="py-16 bg-black min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          className="flex items-center justify-center gap-4 mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FontAwesomeIcon
            icon={faBriefcase}
            className="text-green-400 w-8 h-8"
          />
          <h2 className="text-5xl font-bold text-white tracking-wide font-palanquin">Experience</h2>
        </motion.div>

        <div className="relative">
          {experienceData.experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2
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