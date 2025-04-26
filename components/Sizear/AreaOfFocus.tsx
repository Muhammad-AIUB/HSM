"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AreaOfFocusImg from "@/public/images/sizear/area-of-research.jpeg";

const AreaOfFocus = () => {
  const focusAreas = [
    { title: "Health System Strengthening", color: "bg-yellow-100" },
    { title: "Environmental Health", color: "bg-red-100" },
    { title: "Health Seeking Behavior", color: "bg-blue-100" },
    { title: "Policy and Advocacy", color: "bg-green-100" },
    { title: "Public Financial Management", color: "bg-orange-100" },
    { title: "Strategic Purchasing", color: "bg-purple-100" },
    { title: "Program Development and Implementation", color: "bg-cyan-100" },
    { title: "Partnership and Collaboration", color: "bg-slate-100" },
    { title: "Knowledge Management", color: "bg-teal-100" },
  ];

  return (
    <div className="bg-[#6ACBD4]/10">
      <div className="max-w-screen-xl mx-auto px-10 md:px-12 lg:px-16 py-16">
        <h3 className="text-2xl md:text-2xl font-bold pb-4 underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#FFCE00]">
          Area of Focus and Research
        </h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 bg-transparent rounded-lg border-l-4 border-[#6ACBD4] pl-4"
        >
          <div className="flex flex-col-reverse md:flex-row items-center justify-center md:items-start gap-10">
            <p className="text-[17px] leading-relaxed text-justify text-lg max-w-3xl">
              My research and professional interests encompass health systems
              and financing, environmental health, and health-seeking behavior.
              In the context of growing urbanization and increasingly complex
              health service delivery, my work emphasizes public financial
              management, the role of the private sector, and human-centered
              design. These elements are critical for rethinking and formulating
              comprehensive urban health policies aimed at building sustainable
              and resilient health systems. I also engage in research to
              understand complex health sector challenges and generate evidence
              to support government initiatives through targeted advocacy.
            </p>

            <div className="max-w-[200px]">
              <Image
                src={AreaOfFocusImg}
                alt="Area of Focus"
                className="rounded-lg object-contain mx-auto"
                width={200}
                height={200}
              />
            </div>
          </div>
        </motion.div>

        {/* Focus Area Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className={`p-6 rounded-md shadow-md text-center font-semibold text-[#003366] ${area.color}`}
            >
              {area.title}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AreaOfFocus;
