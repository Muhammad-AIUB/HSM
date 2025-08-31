"use client";

import { useState } from "react";

const BioOfChrisWelch = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-screen-lg mx-auto pt-16 py-12 relative bg-[#6BCBD5]/50 px-12">
      {/* Title */}
      <h2
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer text-3xl md:text-4xl font-extrabold text-gray-800 text-center "
      >
        Bio of Chris Welch
        <span className="block w-24 h-1 bg-[#FFCE00] mx-auto mt-2 rounded-full"></span>
      </h2>

      <a
        href="https://www.msh.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline font-bold flex justify-center mt-3 text-lg"
      >
        Management Sciences for Health, Boston, MA.
      </a>

      <div className="overflow-hidden relative max-w-screen-md mx-auto">
        <div className="py-6 font-medium">
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            I studied math and astrophysics in college and discovered my love of public health while working with MSH in their Boston, MA office. I have worked in almost every department of MSH since 1994, spending a few years learning each part of the business, before I settled into my love – project management and oversight. I worked with about 30 countries on behalf of MSH and spent time with my teams in 15 of them, including at least 5 visits each to Afghanistan, Bangladesh, Ethiopia, Indonesia, and Malawi. For the last decade, at least half of my time has been spent working on tuberculosis, but I always tried to keep at least one major project in another technical area, be it integrated health care, supply chain, antenatal care, or MNCH. I am married with two children, both currently at university.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioOfChrisWelch;
