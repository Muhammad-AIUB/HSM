"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaMedal } from "react-icons/fa";

import LiteratureAwardImg from "@/public/images/sizear/awards/Literature-Award.jpg";

const LiteratureAward = () => {
  const award = {
    title: "Best Letter Writing Prize",
    image: LiteratureAwardImg,
    year: "2024",
    description:
      "Received in a nationwide competition organized by UNFPA and Prothom Alo.",
  };

  return (
    <div className="py-16 bg-gradient-to-r from-blue-50 via-white to-blue-50 px-16 rounded-md shadow-sm">
      <h3 className="text-xl font-bold  font-roboto text-[#0070c0]  pb-6 ">
        ✍️{" "}
        <span className="decoration-[#ef4444] underline underline-offset-[6px]">
          Literature Award
        </span>
      </h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <motion.div className="flex flex-col space-x-6 bg-white shadow-sm rounded-lg p-5 border-l-4 border-blue-500 transition-all duration-300 group hover:bg-red-300">
          <Image
            src={award.image}
            alt={award.title}
            width={500}
            height={400}
            className="w-full h-96 object-cover brightness-90 hover:scale-105 hover:brightness-100 transition-transform transform duration-300 ease-in-out cursor-pointer"
          />

          <div className="flex items-center gap-4 mt-4">
            <FaMedal className="text-blue-500 text-4xl flex-shrink-0 mb-2" />
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
      </motion.div>
    </div>
  );
};

export default LiteratureAward;
