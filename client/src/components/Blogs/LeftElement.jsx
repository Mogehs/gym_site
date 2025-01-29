import React, { useState } from "react";
import { blogData } from "./Dataseeder";
import adminpic from "/images/blogs/adminPic.png";
import { FcNext } from "react-icons/fc";
import { GoArrowRight } from "react-icons/go";
import Button from "./Button";
import { GrFormNext } from "react-icons/gr";

const LeftElement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const color = "bg-[#ff0336]"; // Use a valid Tailwind class for dynamic color.

  const totalPages = Math.ceil(blogData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = blogData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* Render Current Page Data */}
      {currentData.map((item) => (
        <div key={item.id} className="p-4 ">
          <img src={item.src} alt={item.title} className="w-full rounded-lg" />
          <div className="flex items-center gap-2 mt-2">
            <img
              src={adminpic}
              alt={"adminPic"}
              className="w-8 h-8 rounded-full"
            />
            <p className="text-sm text-gray-500">{item.posted}</p>
          </div>
          <h2 className="text-4xl font-bold my-2">{item.title}</h2>
          <p className="text-gray-600">{item.description}</p>
          <div className="flex w-1/4 mt-4">
            <Button />
          </div>
        </div>
      ))}

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-4">
        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-5 py-2 rounded-lg transition-all ${
              currentPage === index + 1
                ? `${color} text-white hover:bg-black`
                : `bg-gray-200 hover:${color} hover:text-white`
            }`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-5 py-2 rounded-lg flex items-center transition-all group ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : `bg-gray-200 hover:${color} hover:text-white`
          }`}
        >
          <GrFormNext
            size={20}
            className={`transition-all group-hover:text-white 
      ${currentPage === totalPages ? "text-gray-500" : "text-black"}`}
          />
        </button>
      </div>
    </div>
  );
};

export default LeftElement;
