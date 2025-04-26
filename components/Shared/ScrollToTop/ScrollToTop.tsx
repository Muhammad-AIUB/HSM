"use client";

import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex items-center justify-center gap-5 pb-6">
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="items-center space-x-2 text-lg font-semibold text-white hover:text-[#FFCE00] transition duration-300 px-6 md:px-8 opacity-0 hidden sm:flex"
        aria-label="Back to Top"
      >
        <span className="tracking-[3px]">BACK TO TOP</span>
        <FaArrowUp className="text-2xl" />
      </motion.button>
      <div className="flex-1 border-t border-gray-400 ml-12 sm:ml-0">
        {/* Placeholder to push button to the right */}
      </div>
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        className="flex items-center space-x-2 text-lg font-semibold text-white hover:text-[#FFCE00] transition duration-300 px-6 md:px-8"
        aria-label="Back to Top"
      >
        <span className="tracking-[3px]">BACK TO TOP</span>
        <FaArrowUp className="text-2xl" />
      </motion.button>
    </div>
  );
}
