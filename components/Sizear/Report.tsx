"use client";
import { motion } from "framer-motion";
import { colors } from "@/lib/utils";

const Report = () => {
  const reports = [
    {
      title:
        "Country Report on Health Promotion Situation, Services, Education and Capacity Building Assessment in Bangladesh, 2025",
      year: "2026",
      link: "https://bridges.monash.edu/articles/report/Health_Promotion_Situation_Services_Education_and_Capacity_Building_Assessment_in_Bangladesh_2025/31562086/1?file=62488393",
      source: "Monash Bridges",
    },
  ];

  return (
    <div className="pt-10 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="max-w-screen-xl mx-auto px-12 lg:px-16 py-16">
        <h3 className="text-xl font-bold underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#ef4444] pb-6">
          Report
        </h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 max-w-3xl"
        >
          {reports.map((report, index) => (
            <motion.div
              key={index}
              className={`bg-white border shadow-sm rounded-md p-6 border-l-4 border-blue-500 flex items-start space-x-6 group transition-all duration-300 ${
                colors[index % colors.length]
              } border-blue-500`}
            >
              <div className="w-1/4 shrink-0">
                <h3 className="text-lg font-semibold text-gray-900">
                  {report.year}
                </h3>
              </div>

              <div className="w-3/4">
                <p className="text-md font-semibold text-gray-800">
                  <a
                    href={report.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 hover:underline text-md transition duration-200"
                  >
                    {report.title}
                  </a>
                </p>
                <p className="text-gray-600 text-sm">{report.source}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Report;
