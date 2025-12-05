"use client";

import { FaGlobe } from "react-icons/fa";

const BioOfArefinIslam = () => {
  return (
    <div className="bg-gradient-to-br from-[#001844] via-[#2D8CBB] to-[#001844] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-[#FFCE00]">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Author Bio Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4">
                <h2 className="text-4xl font-bold text-[#001844]">About Dr. Arefin Islam</h2>
                
                {/* Small Contact Buttons */}
                <div className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/nh2468/"
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
                  Dr. Arefin Amal Islam is a public health professional with a medical background and over 35 years of experience in reproductive and child health in Bangladesh. Previously, he served as the Co-Country Director for Partnership and Advocacy at Noora Health, following a successful five-year term as Country Director.
                </p>
                
                <p className="text-lg">
                  He holds an MPH from NIPSOM, University of Dhaka, and has completed various specialized trainings, including a certificate course on Community-Based Rehabilitation from Queen's University, Canada, and a diploma in Leadership in Humanitarians by Relief International and FranklinCovey. He is also a graduate and trainer of Save the Children's Managing High Performance (MHP) program.
                </p>
                
                <p className="text-lg">
                  Dr. Islam is a life member of the Public Health Association of Bangladesh, a member of the Bangladesh Urban Health Network, and an alumnus of the CDC's STOP Polio Transmission Program. He has served as a national and international trainer and coach with Save the Children, START Network, and CHS Alliance.
                </p>
                
                <p className="text-lg">
                  Connect: <a href="mailto:arefin.amal@gmail.com" className="text-[#2D8CBB] font-bold underline hover:text-[#001844] transition-colors">arefin.amal@gmail.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioOfArefinIslam;

