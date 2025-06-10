"use client";

import { useState } from "react";

const BioOfZakaria = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-screen-lg mx-auto pt-16 py-12 relative bg-[#6BCBD5]/50 px-12">
      {/* Title */}
      <h2
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer text-3xl md:text-4xl font-extrabold text-gray-800 text-center "
      >
        Bio of Zakaria Bin Amjad
        <span className="block w-24 h-1 bg-[#FFCE00] mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="overflow-hidden relative max-w-screen-md mx-auto">
        <div className="py-6 font-medium">
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            Zakaria Bin Amjad is a career Foreign Service Officer with the
            Ministry of Foreign Affairs of Bangladesh. A medical doctor turned
            diplomat, he has a keen interest in exploring the intersection of
            health and foreign policy amid shifting geopolitical dynamics. His
            broader areas of focus include global health security and the
            political determinants of health. He holds an MBBS from Mymensingh
            Medical College and an MPH from Johns Hopkins University.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioOfZakaria;
