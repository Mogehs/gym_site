import React, { useRef } from "react";
import LeftElement from "./LeftElement";
import RightElement from "./RightElement";

const StickyScrollContainer = () => {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-4 p-6"
    >
      {/* Left Element (Scrollable) */}
      <div className="p-4 rounded-lg">
        <LeftElement />
      </div>

      {/* Right Element (Sticky) */}
      <div className="p-4 rounded-lg sticky max-h-fit top-0 overflow-y-auto">
        <RightElement />
      </div>
    </div>
  );
};

export default StickyScrollContainer;
