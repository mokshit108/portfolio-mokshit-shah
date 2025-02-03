import React from 'react';
import ContactLink from './ContactLink';
import footerData from '../../data/footer.json';

const FooterSection = () => {
  const { header, contactLinks, credit } = footerData;

  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center">
          {/* Header */}
          <div className="mb-12 text-center">
            <h3 className="text-5xl font-bold text-white font-palanquin mb-4">{header.title}</h3>
            <p className="text-gray-400 max-w-md">
              {header.description}
            </p>
          </div>

          {/* Contact Links */}
          <div className="w-full max-w-3xl mb-16">
            <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
              {contactLinks.map((link) => (
                <ContactLink key={link.id} {...link} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gray-800 mb-8"></div>

          {/* Credit */}
          <div className="text-center">
            <p className="text-gray-400">
              {credit.text}
              <span className="text-[#4CAF50] font-semibold hover:underline cursor-pointer pl-2">
                {credit.name}
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;