import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? 'left-0' : '-left-[100%]'
      } fixed top-0 bottom-0 z-20 flex h-screen w-[75%] flex-col bg-gray-950 px-8 pt-12 text-white md:hidden rounded-r-xl shadow-md transition-all`}
    >
      {/* Close Button */}
      {/* <button
        className="absolute top-5 right-5 text-gray-400 hover:text-white transition"
        onClick={() => setShowMenu(false)}
      >
        <FaChevronRight size={24} />
      </button> */}

      {/* Name Section */}
      <div className="text-center text-xl font-bold text-[#854ce6] uppercase tracking-wide border-b border-gray-700 pb-4">
        Vikash Kumar
      </div>

      {/* Navigation Menu */}
      <nav className="mt-8">
        <ul className="flex flex-col items-center gap-6 text-lg font-semibold">
          <a href="/" className="hover:text-blue-400 transition">
            <li onClick={() => setShowMenu(false)}>About</li>
          </a>
          <a href="#skills" className="hover:text-blue-400 transition">
            <li onClick={() => setShowMenu(false)}>Skills</li>
          </a>
          <a href="#education" className="hover:text-blue-400 transition">
            <li onClick={() => setShowMenu(false)}>Education & Experience</li>
          </a>
          <a href="#project" className="hover:text-blue-400 transition">
            <li onClick={() => setShowMenu(false)}>Projects</li>
          </a>
          <a href="#contact" className="hover:text-blue-400 transition">
            <li onClick={() => setShowMenu(false)}>Contact</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default ResponsiveMenu;
