import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Removed Navigation
import 'swiper/css';
import 'swiper/css/pagination';
import { FaGithub } from 'react-icons/fa';

// Import project images
import appSS1 from '../assets/appSS1.png';
import app2 from '../assets/app2.png';
import app3 from '../assets/app3.png';
import e1 from '../assets/e1.png';
import e2 from '../assets/e2.png';
import e3 from '../assets/e3.png';

const Project = () => {
  const projects = [
    {
      title: "AI NEWS APP",
      description: "This is a Conversational Voice Controlled React News Application built using Alan AI.",
      techStack: ["React.js", "Alan AI", "News API", "Material UI"],
      link: "https://github.com/vikash032002/AI_News_App",
      github: "https://github.com/vikash032002/AI_News_App",
      images: [appSS1, app2, app3],
    },
    {
      title: "E-Learning Website",
      description: "A web-based interactive E-learning platform with secure authentication, quizzes, and a payment gateway for premium content access.",
      techStack: ["Html", "CSS", "javaScript", "PHP", "MySql"],
      link: "https://github.com/vikash032002/E_Learning_Website",
      github: "https://github.com/vikash032002/E_Learning_Website",
      images: [e1, e2, e3],
    },
    
  ];

  return (
    <section id="project" className="bg-gradient-to-r bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-300 mb-12">Projects</h2>

        {/* Centered Grid */}
        <div className="flex flex-wrap justify-center gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-950 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 w-[350px]">
              
              {/* Swiper Carousel for Images */}
              <Swiper
                modules={[Pagination, Autoplay]} // Removed Navigation
                pagination={{ clickable: true, dynamicBullets: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                className="relative w-full h-48"
              >
                {project.images.map((image, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={image} alt={`Slide ${idx + 1}`} className="w-full h-48 object-cover px-3 pt-3 rounded-2xl"/>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Project Info */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-300 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <div key={idx} className="bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="flex justify-center gap-3">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
                    View Project
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-colors">
                    <FaGithub /> Github
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
