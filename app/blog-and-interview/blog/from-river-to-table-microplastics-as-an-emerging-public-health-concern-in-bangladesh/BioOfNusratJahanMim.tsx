"use client";

import { FaGlobe } from "react-icons/fa";

const BioOfNusratJahanMim = () => {
  return (
    <div className="bg-gradient-to-br from-[#001844] via-[#2D8CBB] to-[#001844] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-[#FFCE00]">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Author Bio Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4">
                <h2 className="text-4xl font-bold text-[#001844]">About Nusrat Jahan Mim</h2>
                
                {/* Small Contact Buttons */}
                <div className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/nusratjahanmim3494/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2D8CBB] hover:bg-[#001844] text-white px-3 py-1 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-1 text-sm"
                  >
                    <FaGlobe className="w-3 h-3" />
                    <span className="font-semibold">LinkedIn</span>
                  </a>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-800 leading-relaxed">
                <p className="text-lg">
                  Nusrat Jahan Mim is an Environmental Science graduate and current Master's student in Environment Management at Independent University, Bangladesh. She works as a Research, Knowledge & Communications Associate with Health Systems Matter, contributing to public health research, content development and knowledge management.
                </p>
                
                <p className="text-lg">
                  Committed to environmental health, climate action and sustainable development, Nusrat combines research with creative communication to raise awareness and aims to inspire positive change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioOfNusratJahanMim;

