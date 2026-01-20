"use client";

import { useState } from "react";

const BioOfSabinaFaizRashid = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-screen-lg mx-auto pt-16 py-12 relative bg-[#6BCBD5]/50 px-12">
      <h2
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer text-3xl md:text-4xl font-extrabold text-gray-800 text-center "
      >
        About Dr. Sabina Faiz Rashid
        <span className="block w-24 h-1 bg-[#FFCE00] mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="overflow-hidden relative max-w-screen-md mx-auto">
        <div className="py-6 font-medium">
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            Dr. Sabina Faiz Rashid is trained in critical medical anthropology and serves at the James P Grant School of Public
            Health at BRAC University. With over two decades of research and teaching experience, she focuses on gender, sexual and reproductive
            health, urban inequities, and participatory community-based research. She founded the Centre for Gender, Sexual and Reproductive Health
            and Rights, and co-established the Centre for Urban Equity and Health. Her work emphasises contextual, ethnographic methods to inform
            policy and practice, and she has led numerous capacity-strengthening initiatives and multi-country projects that centre marginalised voices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioOfSabinaFaizRashid;
