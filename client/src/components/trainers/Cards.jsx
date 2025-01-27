import { FaFacebookF, FaBehance, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import CardsContent from "./CardsContent";
import { GrNext, GrPrevious } from "react-icons/gr";

const Cards = () => {
  // State to manage pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of cards per page

  // Pagination logic
  const totalPages = Math.ceil(CardsContent.length / itemsPerPage);
  const currentCards = CardsContent.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-full bg-gray-50 p-4">
      {/* Cards Section */}
      <div className="cards mt-4 w-full flex flex-wrap gap-8 justify-center">
        {currentCards.map((item) => (
          <div
            className="cards-content p-6 border border-gray-200 shadow-md rounded-3xl flex flex-col gap-4 justify-between items-center bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl md:w-[30%] w-full max-w-[400px]"
            key={item.id}
          >
            {/* Card Image */}
            <div className="img overflow-hidden rounded-3xl">
              <img
                src={item.image}
                alt="not found"
                className="rounded-3xl w-full object-cover h-40 md:h-52"
              />
            </div>

            {/* Card Title */}
            <div className="title text-center">
              <a
                href="#"
                className="text-2xl font-bold text-gray-800 hover:text-[#ff0336] transition-all"
              >
                {item.title}
              </a>
            </div>

            {/* Trainer Designation */}
            <div className="trainer-designation text-gray-500 font-medium text-sm">
              {item.designation}
            </div>

            {/* Card Paragraph */}
            <div className="paragraph text-center text-gray-600 text-sm">
              <p>{item.paragraph}</p>
            </div>

            {/* Social Icons */}
            <ul className="trainer-social-icon flex gap-4 mt-4">
              <li>
                <a
                  target="_blank"
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-[#ff0336] transition-all"
                >
                  <FaFacebookF className="text-gray-500 hover:text-white" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-[#ff0336] transition-all"
                >
                  <FaXTwitter className="text-gray-500 hover:text-white" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-[#ff0336] transition-all"
                >
                  <FaBehance className="text-gray-500 hover:text-white" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-[#ff0336] transition-all"
                >
                  <FaInstagram className="text-gray-500 hover:text-white" />
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="pagination flex justify-center items-center gap-4 mt-8">
        <button
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1 ? "bg-gray-300" : "bg-[#ff0336] text-white"
          }`}
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <GrPrevious />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 rounded-lg ${
              currentPage === index + 1
                ? "bg-[#ff0336] text-white"
                : "bg-gray-100"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={`px-4 py-2 rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-300"
              : "bg-[#ff0336] text-white"
          }`}
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
};

export default Cards;
