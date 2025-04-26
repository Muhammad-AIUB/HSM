"use client";
import { colors } from "@/lib/utils";
import { motion } from "framer-motion";

const OpinionArticle = () => {
  const opinionArticle = {
    year: "2024",
    title:
      "Urgent need to address increasing caesarean section rates in lower-middle-income countries like Bangladesh",
    journal: "Frontiers in Global Women’s Health, Volume 5",
    link: "https://doi.org/10.3389/fgwh.2024.1365504",
    titleLink: "#", // Update this with the actual title link
    firstAuthor: true,
  };

  return (
    <div className="pt-16">
      <h3 className="text-xl font-bold underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#ef4444] pb-6">
        Opinion Article
      </h3>

      {/* Content */}
      <motion.div
        className={`bg-white border shadow-sm rounded-md p-6 border-l-4 border-blue-500 flex md:items-center md:space-x-6 space-y-2 group flex-col md:flex-row  justify-between ${colors[0]} md:mx-12`}
      >
        {/* Left Side: Year */}
        <div className="w-[5%]">
          <h3 className="text-lg font-semibold text-[#001844]">
            {opinionArticle.year}
          </h3>
        </div>

        {opinionArticle.firstAuthor ? (
          <span className="bg-blue-800 text-white px-2 w-28 font-bold">
            First Author
          </span>
        ) : (
          <span className="bg-blue-800 text-white px-2 w-28"></span>
        )}

        {/* Right Side: Title & Journal */}
        <div className="md:w-3/4 break-words">
          <a
            href={opinionArticle.titleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-md font-semibold text-gray-800  hover:bg-blue-500 hover:text-white hover:underline transition duration-200 rounded"
          >
            {opinionArticle.title}
          </a>
          <p className="text-gray-600 text-sm">{opinionArticle.journal}</p>
          <a
            href={opinionArticle.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-sm mt-1 hover:underline group-hover:text-black"
          >
            {opinionArticle.link}
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default OpinionArticle;
