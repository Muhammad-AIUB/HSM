"use client";

import { useState } from "react";

const BioOfJahangirKhan = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-screen-lg mx-auto pt-16 py-12 relative bg-[#6BCBD5]/50 px-12">
      {/* Title */}
      <h2
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer text-3xl md:text-4xl font-extrabold text-gray-800 text-center "
      >
        About Prof. Jahangir Khan
        <span className="block w-24 h-1 bg-[#FFCE00] mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="overflow-hidden relative max-w-screen-md mx-auto">
        <div className="py-6 font-medium">
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            Professor Jahangir Khan is an internationally recognized health economist at the University of
            Gothenburg, Sweden. He began his research career at Karolinska Institutet after completing his
            BSc and MSc in Economics at Stockholm University. His work focuses on health financing,
            economic evaluation, equity in health systems, health technology assessment, and Universal
            Health Coverage.
          </p>
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            He has led research teams and translated evidence into practice, including as Head of the
            Health Economics Unit at icddr,b in Bangladesh, Senior Lecturer at the Liverpool School of
            Tropical Medicine in the UK, and lead of the Health Economics and Policy Research Group at the
            University of Gothenburg. His scholarship applies rigorous economic methods to real-world
            policy challenges—such as vaccine cost-effectiveness, strengthening health financing, and
            reducing out-of-pocket payments.
          </p>
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            He has published widely, supervised PhD students, and collaborated with governments and
            international partners. Professor Khan is a member of the Scientific Board of the Swedish
            Agency for Health Technology Assessment and Assessment of Social Services (SBU).
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioOfJahangirKhan;


