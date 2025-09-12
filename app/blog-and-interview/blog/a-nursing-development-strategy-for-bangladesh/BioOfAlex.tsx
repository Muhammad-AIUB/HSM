"use client";

import { useState } from "react";

const BioOfAlex = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-screen-lg mx-auto pt-16 py-12 relative bg-[#6BCBD5]/50 px-12">
      {/* Title */}
      <h2
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer text-3xl md:text-4xl font-extrabold text-gray-800 text-center "
      >
        Bio of Alex Berland
        <span className="block w-24 h-1 bg-[#FFCE00] mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="overflow-hidden relative max-w-screen-md mx-auto">
        <div className="py-6 font-medium">
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            Alex Berland (RN retired, BSc. Nursing, MSc. Health Planning and Administration). After working as a bedside nurse, Alex served as an executive in several Canadian teaching hospitals, leading clinical redesign efforts as well as accreditation and governance activities. For BC Ministry of Health, Alex led reform of the provincial mental health system, during which time he was also CEO of an 800-bed tertiary psychiatric hospital. For UK Department of Health, Alex served as Head of Hospital Policy for England, overseeing several national initiatives.
          </p>
          <p className=" text-gray-700 mt-4 leading-relaxed text-justify">
            Later as president of his own consulting company, Alex led policy and planning projects for hospitals, regional and national governments, WHO and the World Bank. Since 2004, Alex has worked with educators, NGOs and hospitals in Bangladesh as a volunteer adviser for numerous projects. Alex has authored peer-reviewed papers on topics including nurse education, transformational change, health human resources and he serves as a reviewer for several journals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioOfAlex;
