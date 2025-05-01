"use client";

import { useState } from "react";

const DrMadhukarPaiBio = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-screen-lg mx-auto pt-16 py-12 relative bg-[#6BCBD5]/50 pb-20 px-12">
      {/* Title */}
      <h2
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer text-3xl md:text-4xl font-extrabold text-[#001844] text-center "
      >
        Bio of Dr. Madhukar Pai
        <span className="block w-24 h-1 bg-[#FFCE00] mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="relative max-w-screen-md mx-auto">
        <div className="py-6 font-medium">
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            <strong>Prof Madhukar Pai, MD, PhD, FCAHS, FRSC</strong> is the
            Inaugural Chair, Department of Global and Public Health at the
            McGill School of Population and Global Health. He holds a Tier 1
            Canada Research Chair in Epidemiology & Global Health. He was
            previously Director of the McGill International TB Centre. He is
            Editor-In-Chief of PLOS Global Public Health. He is an elected
            Fellow of the Royal Society of Canada, and a Fellow of the Canadian
            Academy of Health Sciences.
          </p>
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            Madhu Pai did his medical training and community medicine residency
            in Vellore, India. He completed his PhD in epidemiology at UC
            Berkeley, and a postdoctoral fellowship at the UCSF.
          </p>
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            Madhu serves on the WHO Strategic and Technical Advisory Group for
            TB in the South-East Asia Region, and the WHO Advisory group on
            Tuberculosis Diagnostics and Laboratory. He is a member of the
            Scientific Advisory Committee of FIND, Geneva. He serves as the
            Chair of the Public-Private Mix (PPM) Working Group of the Stop TB
            Partnership. He serves on the editorial boards of Lancet Infectious
            Diseases, PLoS Medicine, and BMJ Global Health, among others. He is
            Editor-In-Chief of PLOS Global Public Health.
          </p>
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            Madhu’s research is mainly focused on improving the diagnosis and
            treatment of tuberculosis, especially in high-burden countries like
            India and South Africa. His research is supported by grant funding
            from the Gates Foundation, Grand Challenges Canada, and Canadian
            Institutes of Health Research. He has more than 400 publications. He
            is recipient of the Union Scientific Prize, Chanchlani Global Health
            Research Award, Haile T. Debas Prize, and David Johnston Faculty &
            Staff Award. He is an elected Fellow of the Royal Society of Canada,
            and a Fellow of the Canadian Academy of Health Sciences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DrMadhukarPaiBio;
