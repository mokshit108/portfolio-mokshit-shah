'use client'
import React from 'react';
import { motion } from 'framer-motion';
import ContactLink from './ContactLink';
import footerData from '../../data/footer.json';

const FooterSection = () => {
  const { header, contactLinks, credit } = footerData;

  return (
    <motion.footer
      className="bg-black text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center">
          {/* Header */}
          <motion.div
            className="mb-12 text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-5xl font-bold text-white font-palanquin mb-4">{header.title}</h3>
            <p className="text-gray-400 max-w-md">
              {header.description}
            </p>
          </motion.div>

          {/* Contact Links */}
          <div className="w-full max-w-3xl mb-16">
            <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
              {contactLinks.map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ContactLink {...link} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <motion.div
            className="w-full max-w-md h-px bg-gray-800 mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />

          {/* Credit */}
          <motion.div
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-gray-400">
              {credit.text}
              <motion.span
                className="text-[#4CAF50] font-semibold hover:underline cursor-pointer pl-2"
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