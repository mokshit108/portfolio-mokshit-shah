import React from 'react';
import Image from 'next/image';

const ProjectCard = ({ title, description, techStack, liveLink, githubLink, imageSrc }) => (
  <div className="bg-black border border-[#4CAF50] rounded-lg overflow-hidden hover:scale-[1.02] transition-transform">
    <div className="relative h-48 w-full">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="p-6 text-white">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>

      <ul className="mb-6 space-y-2">
        {description.map((desc, index) => (
          <li key={index} className="text-gray-300 text-sm">
            • {desc}
          </li>
        ))}
      </ul>

      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-gray-400">TechStack :</span>
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-gray-900 rounded-full text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.3344 24H4.00098C2.93247 24 1.92799 23.5839 1.17252 22.8283C0.417046 22.0728 0.000976562 21.0683 0.000976562 19.9999V6.66663C0.000976562 5.59817 0.417093 4.5937 1.17257 3.83823C1.92804 3.08277 2.93251 2.66665 4.00103 2.66665H9.33439C10.0708 2.66665 10.6677 3.26357 10.6677 3.99999C10.6677 4.73641 10.0708 5.33333 9.33439 5.33333H4.00098C3.64481 5.33333 3.31002 5.47204 3.05822 5.72383C2.80643 5.97562 2.66768 6.31046 2.66768 6.66663V19.9999C2.66768 20.3561 2.80638 20.6909 3.05822 20.9428C3.31002 21.1945 3.64481 21.3333 4.00098 21.3333H17.3344C17.6905 21.3333 18.0253 21.1946 18.2772 20.9427C18.529 20.6909 18.6677 20.3561 18.6677 19.9999V14.6666C18.6677 13.9302 19.2646 13.3333 20.0011 13.3333C20.7375 13.3333 21.3345 13.9303 21.3345 14.6666V19.9999C21.3345 21.0684 20.9183 22.0728 20.1628 22.8284C19.4073 23.5839 18.4028 24 17.3344 24Z" fill="#FFF"/>
            </svg>
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0.666656C5.37 0.666656 0 6.17614 0 12.9712C0 18.4087 3.438 23.0197 8.205 24.6454C8.805 24.7613 9.025 24.3804 9.025 24.0538C9.025 23.7616 9.015 22.9874 9.01 21.9616C5.672 22.7035 4.968 20.3109 4.968 20.3109C4.422 18.8907 3.633 18.5109 3.633 18.5109C2.546 17.7481 3.717 17.7638 3.717 17.7638C4.922 17.8494 5.555 19.0316 5.555 19.0316C6.625 20.913 8.364 20.3693 9.05 20.0552C9.158 19.2591 9.467 18.7175 9.81 18.4097C7.145 18.1019 4.344 17.0438 4.344 12.3294C4.344 10.9865 4.809 9.88878 5.579 9.02792C5.444 8.71697 5.039 7.46586 5.684 5.77128C5.684 5.77128 6.689 5.44154 8.984 7.03282C9.944 6.75943 10.964 6.62378 11.984 6.61752C13.004 6.62378 14.024 6.75943 14.984 7.03282C17.264 5.44154 18.269 5.77128 18.269 5.77128C18.914 7.46586 18.509 8.71697 18.389 9.02792C19.154 9.88878 19.619 10.9865 19.619 12.3294C19.619 17.0563 16.814 18.0967 14.144 18.3993C14.564 18.7686 14.954 19.5231 14.954 20.6761C14.954 22.3227 14.939 23.6458 14.939 24.0454C14.939 24.3679 15.149 24.7529 15.764 24.6298C20.565 23.0145 24 18.4003 24 12.9712C24 6.17614 18.627 0.666656 12 0.666656Z" fill="#FFF"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const ProjectSection = () => {
  const projects = [
    {
      title: "Netflix Gemini",
      description: [
        "Developed a responsive movie recommendation platform with a Netflix-like UI, showcasing popular, trending, and now-playing movies.",
        "Designed a secure user authentication system using Firebase as the backend to store and manage user information.",
        "Integrated Google Gemini API to provide intelligent movie recommendations based on user input."
      ],
      techStack: ["HTML", "CSS", "JS", "React", "Tailwind", "Zod"],
      liveLink: "https://coldstar.netlify.app/",
      githubLink: "https://github.com/Singhaditya3116/Netflix",
      imageSrc: "/api/placeholder/400/320"
    },
    {
      title: "Youtube Clone",
      description: [
        "This web application is a clone of YouTube, allowing users to browse and watch videos sourced from the YouTube API.",
        "Additionally, a nested comment feature is build, fostering a community-like experience."
      ],
      techStack: ["React.js", "Redux", "TailwindCSS", "Firebase"],
      liveLink: "https://youtubevanced.netlify.app/",
      githubLink: "https://github.com/Singhaditya3116/youtube",
      imageSrc: "/api/placeholder/400/320"
    },
    {
      title: "Swiggy Clone",
      description: [
        "This web application showcases the complete menu of a restaurant, allowing users to browse through all available products.",
        "Customers can easily add their selected items to a cart."
      ],
      techStack: ["React.js", "Redux", "CSS"],
      liveLink: "https://twiggy-food-order.netlify.app/",
      githubLink: "https://github.com/Singhaditya3116/Twiggy-Food-Order-App",
      imageSrc: "/api/placeholder/400/320"
    },
    {
        title: "Netflix Gemini",
        description: [
          "Developed a responsive movie recommendation platform with a Netflix-like UI, showcasing popular, trending, and now-playing movies.",
          "Designed a secure user authentication system using Firebase as the backend to store and manage user information.",
          "Integrated Google Gemini API to provide intelligent movie recommendations based on user input."
        ],
        techStack: ["HTML", "CSS", "JS", "React", "Tailwind", "Zod"],
        liveLink: "https://coldstar.netlify.app/",
        githubLink: "https://github.com/Singhaditya3116/Netflix",
        imageSrc: "/api/placeholder/400/320"
      },
      {
        title: "Youtube Clone",
        description: [
          "This web application is a clone of YouTube, allowing users to browse and watch videos sourced from the YouTube API.",
          "Additionally, a nested comment feature is build, fostering a community-like experience."
        ],
        techStack: ["React.js", "Redux", "TailwindCSS", "Firebase"],
        liveLink: "https://youtubevanced.netlify.app/",
        githubLink: "https://github.com/Singhaditya3116/youtube",
        imageSrc: "/api/placeholder/400/320"
      },
      {
        title: "Swiggy Clone",
        description: [
          "This web application showcases the complete menu of a restaurant, allowing users to browse through all available products.",
          "Customers can easily add their selected items to a cart."
        ],
        techStack: ["React.js", "Redux", "CSS"],
        liveLink: "https://twiggy-food-order.netlify.app/",
        githubLink: "https://github.com/Singhaditya3116/Twiggy-Food-Order-App",
        imageSrc: "/api/placeholder/400/320"
      }
  ];

  return (
    <div className="bg-black min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-8 h-8">
             <Image
                          src="/icons/education.svg"
                          alt="Education"
                          width={32}
                          height={32}
                          className="object-contain invert"
                        />
          </div>
          <h2 className="text-3xl font-bold text-white tracking-wide">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;