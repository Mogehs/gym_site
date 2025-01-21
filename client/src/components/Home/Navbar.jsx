import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between w-[100vw] px-4 pr-6 fixed z-10 h-[4.5rem] text-white shadow-md bg-black">
      {/* Logo */}
      <div className="bg-fixed bg-no-repeat w-fit">
        <img src="/svgs/logo.svg" alt="Logo" className="h-8 lg:h-[3rem]" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center items-center gap-[15vw] lg:text-[1.2rem]">
        <ul className="flex justify-center items-center gap-[3vw]">
          <li className="cursor-pointer hover:text-gray-600 transition">
            Home
          </li>
          <li className="cursor-pointer hover:text-gray-600 transition">
            About
          </li>
          <li className="cursor-pointer hover:text-gray-600 transition">
            Contact
          </li>
          <li className="cursor-pointer hover:text-gray-600 transition">
            Blogs
          </li>
        </ul>
        <ul className="flex justify-center items-center gap-[3vw]">
          <li className="cursor-pointer hover:text-gray-600 transition">
            Sign Up
          </li>
          <li className="cursor-pointer hover:text-gray-600 transition">
            Log In
          </li>
        </ul>
      </div>

      {/* Hamburger Menu */}
      <CiMenuFries
        className="text-white text-[2rem] font-extrabold md:hidden cursor-pointer"
        onClick={toggleMenu}
      />

      {/* Fly-Out Menu */}
      <div
        className={`fixed inset-0 bg-white transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden shadow-lg`}
      >
        {/* Close Button */}

        <RxCross1
          className="absolute top-4 right-4 text-2xl text-black"
          onClick={toggleMenu}
        />

        {/* Menu Items */}
        <ul className="flex flex-col items-start gap-6 p-6 mt-10 text-lg">
          <li className="cursor-pointer text-black font-bold hover:text-gray-600 transition">
            Home
          </li>
          <li className="cursor-pointer text-black font-bold hover:text-gray-600 transition">
            About
          </li>
          <li className="cursor-pointer text-black font-bold hover:text-gray-600 transition">
            Contact
          </li>
          <li className="cursor-pointer text-black font-bold hover:text-gray-600 transition">
            Blogs
          </li>
        </ul>
        <ul className="flex flex-col items-start gap-6 p-6 border-t border-gray-300 mt-4 text-lg">
          <li className="cursor-pointer text-black font-bold hover:text-gray-600 transition">
            Sign Up
          </li>
          <li className="cursor-pointer text-black font-bold hover:text-gray-600 transition">
            Log In
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
