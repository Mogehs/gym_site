import React, { useState } from "react";
import { FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa"; // Import icons
import headerPic from "/navbar.svg"; // Replace with your image path
import PagesComponents from "../components/PagesComponents"; // Import PagesComponents

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPagesHovered, setIsPagesHovered] = useState(false); // State to track hover over "Pages"

  return (
    <header className="w-full bg-black shadow-md">
      <div className="flex items-center justify-between py-4 px-5 md:px-20">
        {/* Logo / Image */}
        <div className="flex items-center">
          <img src={headerPic} alt="Logo" className="w-[140px] h-auto object-contain" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          {/* Group 1: Home, About */}
          {["Home", "About"].map((item, index) => (
            <a
              key={index}
              href={`/${item.toLowerCase()}`}
              className={`text-white font-medium hover:text-[#FF0336] transition-all ${
                index === 0
                  ? "relative after:block after:h-[2px] after:w-full after:bg-[#FF0336] after:absolute after:bottom-0"
                  : ""
              }`}
            >
              {item}
            </a>
          ))}

          {/* Pages dropdown hover effect */}
          <div
            className="relative"
            onMouseEnter={() => setIsPagesHovered(true)} // Show PagesComponents on hover
            onMouseLeave={() => setIsPagesHovered(false)} // Hide PagesComponents when not hovered
          >
            <a
              href="/pages"
              className="text-white font-medium hover:text-[#FF0336] transition-all"
            >
              Pages
            </a>

            {/* PagesComponents visible on hover for md and larger screens */}
            {isPagesHovered && (
             <div className="absolute top-full left-0 mt-2 w-full bg-black text-white shadow-lg md:block flex justify-center items-center">
             <PagesComponents />
           </div>
           
            )}
          </div>

          {/* Group 2: Blog, Contact */}
          {["Blog", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`/${item.toLowerCase()}`}
              className="text-white font-medium hover:text-[#FF0336] transition-all"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <div className="hidden md:flex relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF0336]"
            />
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Additional Icon */}
          <button className="text-white hover:text-[#FF0336]">
            <FaUser className="text-2xl" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl text-white hover:text-[#FF0336]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-black py-4">
          {["Home", "About", "Pages", "Blog", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`/${item.toLowerCase()}`}
              className={`text-white font-medium hover:text-[#FF0336] transition-all ${
                index === 0
                  ? "relative after:block after:h-[2px] after:w-full after:bg-[#FF0336] after:absolute after:bottom-0"
                  : ""
              }`}
            >
              {item}
            </a>
          ))}
          {/* Search in Mobile */}
          <div className="flex items-center space-x-2 w-[90%]">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF0336] w-full"
              />
              <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
