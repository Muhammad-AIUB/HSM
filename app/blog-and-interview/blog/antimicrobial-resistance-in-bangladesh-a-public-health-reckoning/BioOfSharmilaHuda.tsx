"use client";

import { FaEnvelope, FaGlobe } from "react-icons/fa";

const BioOfSharmilaHuda = () => {
  return (
    <div className="bg-gradient-to-br from-[#001844] via-[#2D8CBB] to-[#001844] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-[#FFCE00]">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Author Bio Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4">
                <h2 className="text-4xl font-bold text-[#001844]">About Dr. Sharmila Huda</h2>
                
                {/* Small Contact Buttons */}
                <div className="flex gap-2">
                  <a
                    href="mailto:sharmila.bmc@gmail.com"
                    className="bg-[#2D8CBB] hover:bg-[#001844] text-white px-3 py-1 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-1 text-sm"
                  >
                    <FaEnvelope className="w-3 h-3" />
                    <span className="font-semibold">Contact</span>
                  </a>
                  
                  <a
                    href="https://publichealthfoundation.org.bd/dr-sharmila-huda/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FFCE00] hover:bg-[#001844] text-black hover:text-white p-2 rounded-full transition-all duration-300 hover:scale-105 flex items-center"
                    title="Portfolio"
                  >
                    <FaGlobe className="w-3 h-3" />
                  </a>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-800 leading-relaxed">
                <p className="text-lg">
                  Dr. Sharmila Huda, Vice-chairperson, PHFBD, is an accomplished Pharmacologist and Associate Professor in the Department of Pharmacology, Bangladesh Medical College, with a strong commitment to academic excellence and medical education.
                </p>
                
                <p className="text-lg">
                  Dr. Huda has served as a consultant in the development of Standard Treatment Guidelines (STG) for common infectious diseases in Bangladesh, under the Directorate General of Health Services (DGHS), ensured alignment with WHO's antimicrobial stewardship and AMR containment strategies.
                </p>
                
                <p className="text-lg">
                  She also served as a consultant for COVID-19 IPC and Pharmacovigilance (PV) support in Bangladesh under the USAID (MTaPS) Program. She is actively involved in research, particularly in areas related to rational drug use, and public health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioOfSharmilaHuda;
