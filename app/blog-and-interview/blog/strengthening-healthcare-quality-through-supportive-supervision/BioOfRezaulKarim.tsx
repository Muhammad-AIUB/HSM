"use client";

import { useState } from "react";

const BioOfRezaulKarim = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-screen-lg mx-auto pt-16 py-12 relative bg-[#6BCBD5]/50 px-12">
      {/* Title */}
      <h2
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer text-3xl md:text-4xl font-extrabold text-gray-800 text-center "
      >
        Bio of Rezaul Karim
        <span className="block w-24 h-1 bg-[#FFCE00] mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="overflow-hidden relative max-w-screen-md mx-auto">
        <div className="py-6 font-medium">
          <p className="text-gray-700 mt-2 leading-relaxed text-justify">
            Rezaul Karim is a public health and nutrition professional with over 12 years of experience in health systems strengthening, training, and humanitarian response. He is currently a PhD Fellow at Haji Danesh Science and Technology University (HSTU) and serves as Manager of Training at Noora Health. Rezaul Karim holds dual master's degrees—an MPH from ASA University Bangladesh and an MNFS from the University of South Asia—alongside a Bachelor of Unani Medicine and Surgery from the University of Dhaka.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed text-justify">
            His career includes key leadership roles as National Coordinator (QIL-HUB) with UNICEF, AUHC Expert with USAID, and Humanitarian Expert under a UNHCR-funded project. His professional focus lies in quality improvement, capacity building, and integrating public health and nutrition interventions to enhance equitable healthcare delivery in Bangladesh. Rezaul is playing the role of secretary general and executive board member for the Public Health Informatics Foundation (PHIF) and MedGlobal International.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioOfRezaulKarim;
