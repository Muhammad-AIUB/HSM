"use client";

import { useState } from "react";

const BioOfJavedIqbal = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-screen-lg mx-auto pt-16 py-12 relative bg-[#6BCBD5]/50 px-12">
      {/* Title */}
      <h2
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer text-3xl md:text-4xl font-extrabold text-gray-800 text-center "
      >
        About Dr. Jabed Iqbal
        <span className="block w-24 h-1 bg-[#FFCE00] mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="overflow-hidden relative max-w-screen-md mx-auto">
        <div className="py-6 font-medium">
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            Dr. Jabed Iqbal is a Senior Consultant in Anatomical Pathology at Singapore General Hospital (SGH) and Associate Professor at Duke-NUS Medical School. With an MBBS from Dhaka Medical College and a PhD in Molecular Biology, he completed pathology training in oncologic and hematopathology in the U.S., becoming American Board-certified in 2006.
          </p>
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            His research expertise centers on triple-negative breast cancer and hematological malignancies, with a strong focus on immune response, hypoxia-related biomarkers, and epigenetic regulation. He leads the Translational Research and Innovation Laboratory (TRAIL) and A*STAR Diagnostics Development Hub. He also holds the position of Vice-chair of research in SingHealth Pathology Academic Clinical Program.
          </p>
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            An active contributor to global health, he serves on the Strategic Advisory Group of Experts on In Vitro Diagnostics (SAGE IVD) and has authored numerous peer-reviewed publications in cancer research and global health. Dr. Iqbal is deeply committed to education, mentorship, and advancing equitable, evidence-based diagnostics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioOfJavedIqbal;

