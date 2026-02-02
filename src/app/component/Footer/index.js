'use client'
import React from 'react';
import { motion } from 'framer-motion';
import ContactLink from './ContactLink';
import footerData from '../../data/footer.json';
import { useTheme } from '../../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FooterSection = () => {
  const { header, contactLinks, credit } = footerData;
  const { theme } = useTheme();

  return (
    <motion.footer
      className={`py-12 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === 'light'
          ? 'bg-gradient-to-b from-white to-gray-50'
          : 'bg-gradient-to-b from-[#001a33] to-[#000d1a]'
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          {/* Header */}
          <motion.div
            className="text-center mb-12 sm:mb-20"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors duration-300 ${
                  theme === 'light' ? 'text-teal-600' : 'text-teal-400'
                }`}
              />
              <h3 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-palanquin transition-colors duration-300 ${
                theme === 'light' 
                  ? 'bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent' 
                  : 'bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent'
              }`}>
                {header.title}
              </h3>
            </div>
            <div className={`w-24 h-1 mx-auto rounded-full mb-6 transition-colors duration-300 ${
              theme === 'light' ? 'bg-teal-600' : 'bg-teal-500'
            }`} />
            <p className={`text-lg sm:text-xl max-w-2xl mx-auto transition-colors duration-300 ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}>
              {header.description}
            </p>
          </motion.div>

          {/* Contact Links */}
          <div className="w-full mb-12 sm:mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto px-4 sm:px-0">
              {contactLinks.map((link, index) => (
                <motion.div
                  key={link.id}
                  className="w-full flex justify-center md:justify-stretch"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                >
                  <div className="w-full max-w-sm md:max-w-none">
                    <ContactLink {...link} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <motion.div
            className={`w-full max-w-2xl h-px mb-8 sm:mb-12 transition-colors duration-300 ${
              theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'
            }`}
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />

          {/* Credit */}
          <motion.div
            className="text-center px-2 pb-16 sm:pb-20"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className={`text-sm sm:text-base transition-colors duration-300 ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}>
              {credit.text}
              <motion.span
                className={`font-semibold hover:underline cursor-pointer pl-1 sm:pl-2 transition-colors duration-300 ${
                  theme === 'light' ? 'text-teal-600' : 'text-teal-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {credit.name}
              </motion.span>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default FooterSection;