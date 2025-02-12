'use client'
import React from 'react';
import { motion } from 'framer-motion';
import ContactLink from './ContactLink';
import footerData from '../../data/footer.json';

const FooterSection = () => {
  const { header, contactLinks, credit } = footerData;

  return (
    <motion.footer
      className="bg-[#001a33] text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="flex flex-col items-center">
          {/* Header */}
          <motion.div
            className="mb-8 sm:mb-12 text-center px-4"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl sm:text-5xl font-bold text-white font-palanquin mb-3 sm:mb-4">
              {header.title}
            </h3>
            <p className="text-gray-400 max-w-md text-sm sm:text-base">
              {header.description}
            </p>
          </motion.div>

          {/* Contact Links */}
          <div className="w-full max-w-3xl mb-8 sm:mb-16 px-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 justify-center">
              {contactLinks.map((link, index) => (
                <motion.div
                  key={link.id}
                  className="w-full sm:w-auto"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ContactLink {...link} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <motion.div
            className="w-full max-w-md h-px bg-gray-800 mb-6 sm:mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />

          {/* Credit - Added padding bottom to ensure visibility above navigation */}
          <motion.div
            className="text-center px-2 pb-16 sm:pb-20" // Added significant bottom padding
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-gray-400 text-sm sm:text-base">
              {credit.text}
              <motion.span
                className="text-sky-400 font-semibold hover:underline cursor-pointer pl-1 sm:pl-2"
                whileHover={{ scale: 1.05, color: '#60D668' }}
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