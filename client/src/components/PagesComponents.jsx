import React from "react";

const PagesComponents = () => {
  return (
    <div className="bg-white text-black py-12 px-5 md:px-20">
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-8">
        {/* Column 2 */}
        <div className="w-full">
          <div className="w-[40px] h-[4px] bg-[#FF0336] mb-4"></div>
          <ul className="space-y-4 w-full bg-blue-500">
            {["Trainer", "Pricing Page", "Gallery Page"].map((item, index) => (
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
      </div>
    </div>
  );
};

export default PagesComponents;
