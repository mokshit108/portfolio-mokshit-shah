import React from 'react';

const ContactLink = ({ href, icon, text }) => (
  <a
    href={href}
    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-900 transition-all group w-full md:w-auto"
  >
    {/* <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
      <img
        src={icon}
        alt=""
        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
      />
    </div> */}
    <span className="text-lg font-medium text-gray-200 group-hover:text-[#4CAF50] transition-colors">
      {text}
    </span>
  </a>
);

const FooterSection = () => {
  const contactLinks = [
    {
      href: "mailto:Singhaditya3116@gmail.com",
      icon: "/api/placeholder/48/48",
      text: "Singhaditya3116@gmail.com"
    },
    {
      href: "tel:+919619117437",
      icon: "/api/placeholder/48/48",
      text: "+91 9619117437"
    },
    {
      href: "https://wa.me/+919619117437",
      icon: "/api/placeholder/48/48",
      text: "WhatsApp: +91 9619117437"
    }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center">
          {/* Header */}
          <div className="mb-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-400 max-w-md">
              Feel free to reach out through any of the following channels
            </p>
          </div>

          {/* Contact Links */}
          <div className="w-full max-w-3xl mb-16">
            <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
              {contactLinks.map((link, index) => (
                <ContactLink key={index} {...link} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gray-800 mb-8"></div>

          {/* Credit */}
          <div className="text-center">
            <p className="text-gray-400">
              Developed with by
              <span className="text-[#4CAF50] font-semibold hover:underline cursor-pointer pl-2">
                Mokshit Shah
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;