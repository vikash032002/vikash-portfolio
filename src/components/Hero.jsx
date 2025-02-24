import React, { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub , FaEnvelope } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Profile from "../assets/profile.png";
import { motion } from "framer-motion";
import "../Css/Hero.css";

const roles = [
  "Full-Stack Developer",
  "MERN Stack Enthusiast",
  "Programmer",
  "Software Developer",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Change text every 2 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="about" className="h-max md:h-screen bg-gradient-to-l bg-gray-950 text-white flex flex-col justify-center items-center relative z-10 pb-10">
      {/* stars */}
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between">
        <div className="md:space-y-6 px-4">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:text-6xl text-4xl font-bold mb-4"
          >
            Hi👋, I'm <p className="text-[#854ce6]">Vikash Kumar</p>
          </motion.h1>
          {/* Dynamic Text Effect */}
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="md:text-2xl text-lg mb-3"
          >
            {roles[index]}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="lg:w-[600px] mb-4 md:mb-0 text-sm text-gray-300"
          >
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning I am dedicated to
            delivering high-quality results. With a positive attitude and a
            growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </motion.p>
          {/* Download CV Button with Link */}
          <motion.a
            href="https://drive.google.com/file/d/1kxV5HPvNWGLhuCbAGQa_RZ12lgpSq5IQ/view?usp=sharing"
            target="_blank"
        rel="noopener noreferrer"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="px-3 py-2 inline-flex w-auto items-center gap-2 bg-blue-500 rounded-md text-white hover:bg-[#854ce6] shadow-[#854ce6] border-2 border-blue-400 transition-all shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]"
          >
            <Download className="w-5 h-5" /> Download CV
          </motion.a>

          {/* Social Media Links with Dummy URLs */}
          <div className="flex gap-3 text-2xl transition-all mt-5 md:mt-0">
            <a href="mailto:vikuvikash03@gmail.com">
              <FaEnvelope className="hover:text-red-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/vikash-kumar-b1a0231a2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-400" />
            </a>
            <a
              href="https://github.com/vikash032002"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-blue-400" />
            </a>
          </div>
        </div>
        <div className="relative group">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 0.6 }}
            transition={{ duration: 1.4, delay: 0 }}
            src={Profile}
            alt=""
            className="rounded-full border border-blue-600 md:w-[500px] w-[300px] shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-[#854ce6]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
