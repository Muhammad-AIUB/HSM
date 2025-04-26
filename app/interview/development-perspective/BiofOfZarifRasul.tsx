"use client";

import { useState } from "react";

const BioOfZarif = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-screen-lg mx-auto pt-16 py-12 relative bg-[#6BCBD5]/50 px-12">
      {/* Title */}
      <h2
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer text-3xl md:text-4xl font-extrabold text-gray-800 text-center "
      >
        Bio of Dr. Zarif Rasul
        <span className="block w-24 h-1 bg-[#FFCE00] mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="overflow-hidden relative max-w-screen-md mx-auto">
        <div className="py-6 font-medium">
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            An environmental economist by training, Zarif Rasul is a Water
            Specialist at the World Bank. He previously worked in the domains of
            public infrastructure finance, economic consulting, and water and
            sanitation policies in Bangladesh. His interests lie in the
            sustainable use of limited resources to enhance human well-being. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioOfZarif;
