import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from 'react-icons/si';

const Skills = () => {
  return (
    <div id="skills" className="py-20 bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-11 text-center">Skills</h2>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Skills & Content Section */}
          <div className="p-6 md:p-10 bg-gray-950 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-[#854ce6]">
            <p className="text-lg leading-7 mb-6">
              Hi! I'm <b className='text-[#854ce6]'>Vikash Kumar</b>, a passionate Full-Stack Developer specializing in the MERN stack. With a strong foundation in computer science, data structures, and algorithms, I specialize in building scalable web applications, integrating AI-powered solutions, and optimizing system performance.
            </p>
            <p className="text-lg leading-7 mb-6">
              Currently pursuing my Master of Computer Applications (MCA) at SRM Institute of Science and Technology, I have maintained a CGPA of 9.54, showcasing my dedication to learning and problem-solving.
            </p>

            <p className="text-lg leading-7 mb-6">
              <b className='text-red-50'>Core Concepts:</b> Object-Oriented Programming, Database Management Systems, Computer Networks, and Operating Systems.
            </p>

            {/* Skills Grid */}
            <div className="mt-5">
              <h1 className="font-bold text-2xl mb-5 text-blue-400">Technical Skills</h1>
              <div className="flex flex-wrap gap-4 mb-5 text-sm">
                {["Java","Python","C++","Html","CSS","Bootstrap","javascript","React.js", "Tailwind CSS", "Redux-Toolkit", "Node.js", "Express.js", "PHP", "MySql", "MongoDB", "Git/Github","VS Code"].map((skill) => (
                  <p key={skill} className="bg-gray-900 cursor-pointer text-gray-300 px-3 py-1 rounded-full border border-blue-500 shadow-md shadow-blue-500 hover:bg-blue-500 hover:text-white transition">
                    {skill}
                  </p>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-5 mt-5">
                <a href="https://github.com/vikash032002" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-2xl hover:text-white transition">
                  <FaGithub />
                </a>
                <a href="https://leetcode.com/u/vikash0302/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 text-2xl hover:text-white transition">
                  <SiLeetcode />
                </a>
                <a href="https://www.geeksforgeeks.org/user/vikuvikash03/" target="_blank" rel="noopener noreferrer" className="text-green-400 text-2xl hover:text-white transition">
                  <SiGeeksforgeeks />
                </a>
                <a href="https://www.hackerrank.com/profile/vikuvikash03" target="_blank" rel="noopener noreferrer" className="text-green-500 text-2xl hover:text-white transition">
                  <SiHackerrank />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
