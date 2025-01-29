import React from "react";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import footerPic from "/fotter.svg";
import Icons from "../components/trainer-detail/Icons";

const Footer = () => {
  return (
    <footer>
      {/* Main Footer Section */}
      <div className="bg-white text-black py-12 px-5 md:px-20">
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-8">
          {/* Column 1 */}
          <div className="w-full md:w-[25%]">
            <a href="/home">
              <img
                src={footerPic}
                alt="Logo"
                className="w-[150px] md:w-[200px] h-auto mb-4"
              />
            </a>
            <p className="text-[#9A9999] mb-4">
              When an unknown printer took galle tyand scram bled it to make
              typnknown pret specimen book printer took galle of tyand scram.
            </p>
            <div className="flex space-x-4">
              <Icons />
            </div>
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-[25%]">
            <h4 className="font-bold text-xl mb-2">Our Classes</h4>
            <div className="w-[40px] h-[4px] bg-[#FF0336] mb-4"></div>
            <ul className="space-y-4">
              {[
                "Fitness Classes",
                "Aerobics Classes",
                "Power Yoga",
                "Lean Machines",
                "Full-Body Strength",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-[#9A9999] hover:text-[#FF0336] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full md:w-[25%]">
            <h4 className="font-bold text-lg mb-2">Quick Links</h4>
            <div className="w-[40px] h-[4px] bg-[#FF0336] mb-4"></div>
            <ul className="space-y-4">
              {[
                "Fitness Classes",
                "Aerobics Classes",
                "Power Yoga",
                "Lean Machines",
                "Full-Body Strength",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-[#9A9999] hover:text-[#FF0336] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="w-full md:w-[25%]">
            <h4 className="font-bold text-lg mb-2">Contact Us</h4>
            <div className="w-[40px] h-[4px] bg-[#FF0336] mb-4"></div>
            <p className="text-[#9A9999] mb-4">
              178 West 27th Street, Suite 527, New York NY 10012 United States
            </p>
            <div className="flex items-center mb-2">
              <FaPhoneAlt className="text-xl text-[#FF0336] mr-2" />
              <span className="text-black font-bold text-lg">
                +1 (234) 567-890
              </span>
            </div>
            <a
              href="gymat@yourname.com"
              className="text-[#9A9999] hover:text-[#FF0336] transition-colors"
            >
              gymat@yourname.com
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="flex justify-center items-center mt-6 bg-black w-full h-[70px]">
        <p className="text-[#9A9999] hover:text-[#FF0336] text-sm sm:text-md text-center">
          © 2025 Gymat. All Rights Reserved by RadiusTheme
        </p>
      </div>
    </footer>
  );
};

export default Footer;
