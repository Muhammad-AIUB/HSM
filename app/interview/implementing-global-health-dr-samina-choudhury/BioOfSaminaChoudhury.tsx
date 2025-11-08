"use client";

import { useState } from "react";

const BioOfSaminaChoudhury = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-screen-lg mx-auto pt-16 py-12 relative bg-[#6BCBD5]/50 px-12">
      {/* Title */}
      <h2
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer text-3xl md:text-4xl font-extrabold text-gray-800 text-center "
      >
        About Dr. Samina Choudhury
        <span className="block w-24 h-1 bg-[#FFCE00] mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="overflow-hidden relative max-w-screen-md mx-auto">
        <div className="py-6 font-medium">
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            Dynamic Program Manager with 30 years of experience in the health sector, specializing in program implementation, oversight and impact analysis. Public Health Specialist with experience in developing and managing health projects related to Maternal, Newborn and Child health (MNCH), Family Planning, HIV and AIDS, Global Health Security (GHS), Nutrition, Tuberculosis, Supply Chain Management and Pharmaceutical Quality Improvement. Demonstrated success in managing substantial budgets and engaging key stakeholders, including government counterparts, to improve public health outcomes. Skilled in implementing projects under time constraints without compromising the quality. Experienced in developing service delivery models and transforming them into sustainable health systems strengthening approaches. Adept at thriving in fast-paced environments where strategic coordination, stakeholder engagement, and systems strengthening are essential for achieving sustainable impact. Excellent networking skills with government counterparts and represented the USG in various high-level coordination forums across different ministries. Extensive experience in engaging with senior officials of the Ministry of Health and Family Welfare and the Global Fund during her tenure as Vice Chair of the Bangladesh Country Coordination Mechanism. Acted as a member of the Development Partners' Consortium, the Inter-agency Coordination Committee of GAVI and various technical committees of DGHS related to MNCH, Antimicrobial Resistance, MDR TB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioOfSaminaChoudhury;

