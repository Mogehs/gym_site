import React from "react";
import { BiSearch } from "react-icons/bi";
import { GrFormNext } from "react-icons/gr";

const RightElement = () => {
  const color = "bg-[#ff0336]";
  return (
    <div className="container mx-auto mt-4 flex flex-col gap-4">
      {/* Search Bar */}
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Search Here"
          className="w-full py-3 border focus:outline-none"
        />
        <button className={`${color} px-6 py-4`}>
          <BiSearch color="white" />
        </button>
      </div>

      {/* Categories */}
      <div className="p-6 mt-4 bg-gray-100 rounded-md ">
        <h2 className="text-2xl py-4">Categories</h2>
        <hr className="border-t-4 border-[#ff0336] w-1/6" />
        <div className="flex flex-col gap-4 mt-10">
          {[
            "BodyBuilding",
            "Boxing",
            "CrossFit",
            "Fitness",
            "Meditation",
            "Yoga",
          ].map((item, index) => (
            <div key={index}>
              {/* Button */}
              <button className="group text-lg flex items-center text-gray-800 hover:text-[#ff0336] transition-all">
                <GrFormNext className="text-black group-hover:text-[#ff0336] transition-all transform group-hover:translate-x-2" />
                <span className="ml-2">{item}</span>
              </button>

              {/* Divider */}
              {index < 5 && ( // Only render divider if it's not the last item
                <hr className="border-gray-200 my-2" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="p-6 mt-4 bg-gray-100 rounded-md">
        <h2 className="text-2xl py-4">Popular Tags</h2>
        <hr className="border-t-4 border-[#ff0336] w-1/5" />
        <div className="flex flex-wrap gap-4 mt-10">
          {[
            "BodyBuilding",
            "Boxing",
            "CrossFit",
            "Fitness",
            "Meditation",
            "Yoga",
          ].map((item, index) => (
            <div key={index} className="w-[130px]">
              {/* Button */}
              <button className="group text-lg w-full flex justify-center bg-white px-3 py-2 items-center text-gray-800 hover:text-white hover:bg-[#ff0336] transition-all rounded-md">
                <span className="ml-2">{item}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightElement;
