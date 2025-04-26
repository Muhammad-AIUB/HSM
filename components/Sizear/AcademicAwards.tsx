"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaAward } from "react-icons/fa";
import JapanScholarshipAward from "@/public/images/sizear/scholarship-fellowship/joint-japan1.jpg";
import JapanScholarshipAward2 from "@/public/images/sizear/scholarship-fellowship/joint-japan2.jpg";
import Fellowship1 from "@/public/images/sizear/scholarship-fellowship/fellowship-1.jpg";
import Fellowship2 from "@/public/images/sizear/scholarship-fellowship/fellowship-2.jpg";

const AcademicAwards = () => {
  const awards = [
    {
      title: "Joint Japan/World Bank Scholarship",
      year: "2020-21",
      description:
        "For Masters in Erasmus University Rotterdam, The Netherlands",
      image: JapanScholarshipAward,
      image2: JapanScholarshipAward2,
    },
    {
      title: "Fellowship",
      year: "2017-18",
      description:
        "Awarded and funded by Swedish International Development Cooperation Agency (SIDA)",
      image: Fellowship1,
      image2: Fellowship2,
    },
    {
      title: "Next Generation of Public Health Experts Scholarship",
      year: "2014-15",
      description:
        "Funded by USAID for MPH program in James P Grant School of Public Health, BRAC University, Bangladesh",
    },
  ];

  return (
    <div className="py-16 mt-8 bg-gradient-to-r from-yellow-50 via-white to-yellow-50 px-16 rounded-md shadow-sm">
      <h3 className="text-xl font-bold  font-roboto text-[#0070c0]  pb-6 ">
        🎓{" "}
        <span className="decoration-[#ef4444] underline underline-offset-[6px]">
          Academic Awards and Fellowship
        </span>
      </h3>

      {/* Awards List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-3xl mx-auto"
      >
        {awards.map((award, index) => (
          <motion.div
            key={index}
            className="flex flex-col space-x-6 bg-white shadow-sm rounded-lg p-5 border-l-4 border-blue-500 transition-all duration-300 group hover:bg-red-300"
          >
            <div className="flex flex-col md:flex-row gap-1">
              {award.image && (
                <Image
                  src={award.image}
                  alt={award.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover brightness-90 hover:scale-105 hover:brightness-100 transition-transform transform duration-300 ease-in-out cursor-pointer"
                />
              )}
              {award.image2 && (
                <Image
                  src={award.image2}
                  alt={award.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover brightness-90 hover:scale-105 hover:brightness-100 transition-transform transform duration-300 ease-in-out cursor-pointer object-top"
                />
              )}
            </div>

            <div className="flex items-center gap-4 mt-4">
              <FaAward className="text-blue-500 text-4xl flex-shrink-0 mb-2" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {award.title}
                </h3>
                <p className="text-sm text-gray-600">{award.year}</p>
                <p className="text-sm text-gray-700 italic">
                  {award.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AcademicAwards;
