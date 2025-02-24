import React from 'react';

const education = [
  {
    degree: "Master Of Computer Applications",
    institution: "SRM INSTITUTE OF SCIENCE AND TECHNOLOGY, CHENNAI",
    year: "2023 - 2025",
    description: "CGPA-9.54 || Built a strong foundation in computer science with a focus on object-oriented programming, artificial intelligence, and data structures. Gained hands-on experience in computer graphics and fundamental computing concepts, enhancing problem-solving and analytical skills",
    icon: "🎓",
  },
  {
    degree: "Bachelor Of Computer Applications",
    institution: "St.XAVIER's COLLEGE, RANCHI",
    year: "2020 - 2023",
    description: "CGPA-7.51 || Gained in-depth knowledge of software development, system architecture, and database management. Developed strong problem-solving skills through DSA.",
    icon: "🎓",
  },
  {
    degree: "Higher Secondary (11th-12th) ",
    institution: "St.XAVIER's COLLEGE, RANCHI",
    year: "2018 - 2020",
    description: "Percentage-78.60% || Completed 12th with a focus on Physics, Chemistry, and Mathematics (PCM) in the Science stream, developing a strong analytical mindset and problem-solving skills.",
    icon: "🎓",
  },
  {
    degree: "Secondary (10th)",
    institution: "M.K.D.A.V PUBLIC SCHOOL,DALTONGANJ",
    year: "2017-2018",
    description: "Percentage-87.20% || Completed Class 10 with a solid foundation in core subjects, fostering critical thinking, logical reasoning, and a strong academic base for future studies.",
    icon: "🎓",
  },
];

const experience = [
  {
    role: "Web Developer Intern",
    company: "Refresh InfraTech Pvt.Ltd",
    year: "Oct 2022 - Apr 2023",
    description: "Developed a front-end website platform using modern web technologies, collaborating closely with designers and back-end developers to enhance performance and functionality. Ensured a seamless, responsive, and visually appealing user experience across various devices.",
    icon: "💻",
  },
];

const Education = () => {
  return (
    <section id='education' className='bg-gray-950 py-16 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12'>Education</h2>
        <div className='space-y-6'>
          {education.map((edu, index) => (
            <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2'>
              <div className='text-4xl mr-6 text-blue-500'>{edu.icon}</div>
              <div>
                <h4 className='text-xl font-bold text-gray-200'>{edu.degree}</h4>
                <p className='text-gray-300'>{edu.institution}</p>
                <p className='text-gray-300 text-sm italic'>{edu.year}</p>
                <p className='text-gray-300 mt-2'>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className='max-w-6xl mx-auto mt-16'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12'>Experience</h2>
        <div className='space-y-6'>
          {experience.map((exp, index) => (
            <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2'>
              <div className='text-4xl mr-6 text-blue-500'>{exp.icon}</div>
              <div>
                <h4 className='text-xl font-bold text-gray-200'>{exp.role}</h4>
                <p className='text-gray-300'>{exp.company}</p>
                <p className='text-gray-300 text-sm italic'>{exp.year}</p>
                <p className='text-gray-300 mt-2'>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
