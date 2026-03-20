"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaMedal } from "react-icons/fa";

const BLOG_LINK =
  "https://gnacta.org/blog/healing-bangladeshs-health-sector-systemic-reform-combat-corruption";

const AwardWinningBlog = () => {
  const award = {
    title: "Award‑Winning Blog",
    image: "/images/sizear/awards/Screenshot (1235).png",
    certificateImage: "/images/sizear/certificate.jpeg",
    year: "2025",
    description:
      "Recognized as the 2nd Best Blog Article in the 2025 Global Competition organized by Health Systems Global.",
  };

  return (
    <div className="py-16 bg-gradient-to-r from-blue-50 via-white to-blue-50 px-16 rounded-md shadow-sm">
      <h3 className="text-xl font-bold  font-roboto text-[#0070c0]  pb-6 ">
        ✍️{" "}
        <span className="decoration-[#ef4444] underline underline-offset-[6px]">
          Award‑Winning Blog
        </span>
      </h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <motion.div className="flex flex-col space-x-6 bg-white shadow-sm rounded-lg p-5 border-l-4 border-blue-500 transition-all duration-300 group hover:bg-red-300">
          <div className="flex flex-nowrap gap-6 items-start justify-center">
            <a
              href={BLOG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block shrink-0 w-[380px] h-[285px] overflow-hidden rounded-md border border-gray-200 bg-gray-100 hover:opacity-90 transition-opacity flex items-center justify-center"
            >
              <Image
                src={award.image}
                alt="Healing Bangladesh's Health Sector - Blog Article"
                width={380}
                height={285}
                className="w-full h-full object-contain brightness-90 hover:brightness-100 transition-all duration-300"
              />
            </a>
            <div className="shrink-0 w-[380px] h-[285px] overflow-hidden rounded-md border border-gray-200 bg-gray-100 flex items-center justify-center">
              <Image
                src={award.certificateImage}
                alt="Certificate"
                width={380}
                height={285}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

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
              <a
                href={BLOG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm font-medium text-blue-700 underline underline-offset-2 hover:text-blue-900"
              >
                Read blog article
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AwardWinningBlog;
