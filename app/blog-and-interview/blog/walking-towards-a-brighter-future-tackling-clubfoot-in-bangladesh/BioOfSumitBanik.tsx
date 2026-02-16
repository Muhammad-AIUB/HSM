"use client";

import { FaGlobe } from "react-icons/fa";
import Image from "next/image";

const BioOfSumitBanik = () => {
  return (
    <div className="bg-gradient-to-br from-[#001844] via-[#2D8CBB] to-[#001844] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-[#FFCE00]">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="relative">
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-4 border-[#FFCE00]">
                <Image
                  src="/images/blog-interview/Sumit Banik.JPG"
                  alt="Sumit Banik"
                  width={400}
                  height={400}
                  quality={100}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4">
                <h2 className="text-4xl font-bold text-[#001844]">About Sumit Banik</h2>

                <div className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/sumit-banik-bd/"
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
                  <strong>Writer | Development Journalist | Public Health Activist</strong>
                </p>

                <p className="text-lg">
                  Sumit Banik writes at the intersection of compassion, human rights, and national health development—highlighting lived realities of marginalized communities and advocating for health systems rooted in dignity and equity.
                </p>

                <p className="text-lg">
                  Connect: <a href="mailto:sumitbd.writer@gmail.com" className="text-[#2D8CBB] font-bold underline hover:text-[#001844] transition-colors">sumitbd.writer@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioOfSumitBanik;
