"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// import { ArrowRightCircle } from "lucide-react";

export const BlogCard = ({
  item,
}: {
  item: {
    title: string;
    description: string;
    date: string;
    type: string;
    thumbnail: string | StaticImageData;
  };
}) => {
  // Determine the correct page link based on type
  const pageLink =
    item.type === "blog"
      ? `/blog-and-interview/blog/${item.title
          .replace(/[:\s]+/g, "-")
          .replace(/['’]/g, "")
          .toLowerCase()}`
      : `/interviews/${item.title.replace(/\s+/g, "-").toLowerCase()}`;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full h-full group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background blur effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#01748D] to-[#01748D]/70 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

      <Link href={pageLink} className="relative block h-full">
        <div className="relative bg-white/95 dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transition-all duration-300 flex flex-col h-full">
          {/* Top accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#01748D] transform rotate-45 translate-x-10 -translate-y-10 z-10"></div>

          {/* Date pill */}
          <div className="absolute top-4 left-4 z-20 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full text-sm font-medium text-blue-900 shadow-md backdrop-blur-sm">
            {item.date}
          </div>

          {/* Image */}
          <div className="overflow-hidden">
            <Image
              src={item.thumbnail || "/placeholder.svg"}
              alt={item.title}
              width={600}
              height={400}
              className="w-60 h-60 mx-auto object-cover object-top transition-all duration-500 group-hover:scale-110 brightness-75"
            />
          </div>

          {/* Content area */}
          <div className="flex flex-col flex-1 justify-between p-6 pt-5 relative">
            {/* Title */}
            <p className="text-xl transition-transform duration-300 group-hover:translate-y-1 text-[#01748D] font-bold hover:underline">
              {item.title}
            </p>

            {/* Explore Button */}
            <motion.div
              className="mt-6 border px-4 py-2 bg-[#01748D] rounded-md text-white flex items-center gap-2 hover:bg-[#FFCE00] hover:text-[#01748D] transition-all duration-300 w-fit self-end"
              animate={{ x: isHovered ? 0 : 5 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
            >
              <span className="font-bold">Explore</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
