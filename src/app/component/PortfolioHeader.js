import React from 'react';

const PortfolioHeader = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background Image - with debug styles */}
      <div
        className="absolute inset-0 bg-red-500" // Added background color to verify div is rendering
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.2)',
          zIndex: 0
        }}
      />

      {/* Test if the background div is working */}
      <div className="absolute inset-0 z-[1] bg-black/50" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold text-white">
              Mokshit Shah
            </h1>

            <h2 className="text-2xl text-blue-400 font-semibold">
              Software Developer
            </h2>

            <p className="text-gray-300 max-w-lg">
              Computer Science graduate from NMIMS (GPA: 3.88/4) with expertise in frontend development at AcceleratBSi, specializing in Next.js and Tailwind CSS. Passionate about building responsive, user-centric applications with a focus on enhancing application reliability and performance through effective problem-solving.
            </p>
          </div>

          {/* Right Content - Image */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48">
              <img
                src="https://placehold.co/200x200"
                alt="Your Profile"
                className="rounded-full object-cover shadow-lg ring-2 ring-gray-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeader;