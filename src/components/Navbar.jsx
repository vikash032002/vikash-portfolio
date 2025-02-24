import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { FaChevronRight } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-gray-950 -mb-7 z-50 w-full py-3 fixed">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-0">
        {/* logo section */}
        <div>
          <a href="/">
            <img
              src={Logo}
              alt=""
              className="w-[170px] h-[50px] object-contain "
            />
          </a>
        </div>
        {/* Menu section  */}
        <nav className="hidden md:block">
          <ul className="flex gap-7 text-xl items-center font-semibold text-white">
            <a href="/">
              <li className="cursor-pointer hover:text-[#1E90FF] transition-colors duration-300">
                About
              </li>
            </a>
            <a href="#skills">
              <li className="cursor-pointer hover:text-[#1E90FF] transition-colors duration-300">
                Skills
              </li>
            </a>
            <a href="#education">
              <li className="cursor-pointer hover:text-[#1E90FF] transition-colors duration-300">
                Education & Experience
              </li>
            </a>
            <a href="#project">
              <li className="cursor-pointer hover:text-[#1E90FF] transition-colors duration-300">
                Projects
              </li>
            </a>
            <a href="#contact">
              <li className="cursor-pointer pr-2 hover:text-[#1E90FF] transition-colors duration-300">
                Contact
              </li>
            </a>
          </ul>
        </nav>

        <div className="md:hidden text-white text-4xl">
          {showMenu ? (
            <HiMenuAlt3 onClick={toggleMenu} />
          ) : (
            <HiMenuAlt1 onClick={toggleMenu} />
          )}
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Navbar;
