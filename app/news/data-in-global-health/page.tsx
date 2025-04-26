"use client";
import NextButton from "@/components/Shared/NextButton";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaBaby,
  FaVenus,
  FaWeight,
  FaUserMd,
  FaFemale,
  FaSmoking,
  FaGlobeAmericas,
  FaBrain,
  FaTint,
} from "react-icons/fa";

const DataInGlobalHealth = () => {
  const data = [
    {
      icon: <FaHeartbeat className="text-2xl text-[#2D8CBB]" />,
      fact: "Global average <strong>life expectancy</strong> is approximately <strong>73 years</strong>.",
    },
    {
      icon: <FaBaby className="text-2xl text-[#ef4444]" />,
      fact: "<strong>1 in 700 babies</strong> are born with a cleft lip and/or palate globally. Clefts cause difficulties <strong>eating, breathing, hearing, and speaking</strong>.",
    },
    {
      icon: <FaVenus className="text-2xl text-[#FF69B4]" />,
      fact: "<strong>1 in 3 women and girls</strong>—about <strong>1.3 billion worldwide</strong>—experience gender-based violence over their lifetime.",
    },
    {
      icon: <FaWeight className="text-2xl text-[#FFA500]" />,
      fact: "Worldwide obesity has <strong>nearly tripled since 1975</strong>, with <strong>650 million adults</strong> classified as obese in 2022.",
    },
    {
      icon: <FaUserMd className="text-2xl text-[#00BFFF]" />,
      fact: "<strong>5 billion people</strong> worldwide lack access to <strong>life-saving surgical care</strong>.",
    },
    {
      icon: <FaFemale className="text-2xl text-[#D946EF]" />,
      fact: "In the United States, <strong>1 in 4 women</strong> will have an <strong>abortion by age 45</strong>.",
    },
    {
      icon: <FaSmoking className="text-2xl text-[#A855F7]" />,
      fact: "More than <strong>70 percent of adult men smoke in Indonesia</strong>, a testament to how commercial advertising harms the population's health.",
    },
    {
      icon: <FaGlobeAmericas className="text-2xl text-[#22C55E]" />,
      fact: "<strong>Climate change</strong> is projected to cause <strong>250,000 additional deaths annually</strong> between 2030 and 2050 due to <strong>malnutrition, malaria, diarrhea, and heat stress</strong>.",
    },
    {
      icon: <FaBrain className="text-2xl text-[#06B6D4]" />,
      fact: "<strong>Depression</strong> is a leading cause of disability worldwide, affecting <strong>280 million people</strong>. <br /> <strong>Anxiety disorders</strong> affect <strong>301 million people</strong>.",
    },
    {
      icon: <FaTint className="text-2xl text-[#F43F5E]" />,
      fact: "<strong>1 in 6 people globally</strong> suffer from <strong>dietary iron deficiency</strong>, leading to anemia, impaired immunity, and reduced cognitive and physical performance.",
    },
  ];

  const colors = [
    "hover:bg-blue-100",
    "hover:bg-purple-100",
    "hover:bg-yellow-100",
    "hover:bg-cyan-100",
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-12 md:px-16 py-12 pb-24">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#2D8CBB]">
          Global Health Data Spotlights
        </h1>
      </div>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-5xl mx-auto"
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            className={`bg-white border shadow-sm rounded-md p-6 border-l-4 border-blue-500 flex items-start space-x-4 group ${
              colors[index % colors.length]
            } transition-all duration-300`}
          >
            <div>{item.icon}</div>
            <div>
              <p
                className="text-[19px] text-gray-800"
                dangerouslySetInnerHTML={{ __html: item.fact }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
      <NextButton
        href="/news/do-you-know"
        text="Next"
        className="bg-[#00DFC0] text-black mt-16"
      />
    </div>
  );
};

export default DataInGlobalHealth;
