"use client";
import { motion } from "framer-motion";

const steps = [
  {
    text: "Resources",
    className: "clip-left mr-[-26.5px] bg-[#48AFDF]",
  },
  {
    text: "Insights",
    className: "clip-middle mr-[-26px] w-[116px] text-center pl-9 bg-[#208BD1]",
  },
  {
    text: "Events",
    className: "clip-middle w-[116px] text-center pl-9 bg-[#2E8ED2]",
  },
  {
    text: "Career",
    className: "clip-middle w-[112px] text-center pl-9 bg-[#35A6EA]",
  },
];

export default function HSMOffers() {
  return (
    <div className="flex items-center">
      <div className="flex items-center overflow-hidden scale-[90%] md:scale-100">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-[#1E60AC] text-white font-semibold px-6 py-6 pl-3 clip-right mx-5"
        >
          HSM Offers
        </motion.div>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={` text-white font-semibold px-8 py-3 ${step.className} ${
              index !== steps.length - 1 ? "mr-[-25px]" : ""
            }`}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5 + index * 0.3,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            {step.text}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
