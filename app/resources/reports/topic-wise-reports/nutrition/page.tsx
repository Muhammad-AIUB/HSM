"use client";

import NextButton from "@/components/Shared/NextButton";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import { PdfCard } from "../../general-reports/page";

const pdfs = [
  {
    title: "Bangladesh Nutrition Plan 2016-2025",
    filePath:
      "/files/TopicWiseReports/Nutrition/Bangladesh Nutrition Plan 2016-2025.pdf",
  },
  {
    title: "Food System for Nutrition 2024_IFPRI",
    filePath:
      "/files/TopicWiseReports/Nutrition/Food System for Nutrition 2024_IFPRI.pdf",
  },
  {
    title: "Implementation Plan of Nutrition and Child Health 2014_WHO",
    filePath:
      "/files/TopicWiseReports/Nutrition/Implementation Plan of Nutrition and Child Health 2014_WHO.pdf",
  },
  {
    title: "Investment Framework for Nutrition 2024_WB",
    filePath:
      "/files/TopicWiseReports/Nutrition/Investment Framework for Nutrition 2024_WB.pdf",
  },
  {
    title: "School Health and nutrition around the World 2023",
    filePath:
      "/files/TopicWiseReports/Nutrition/School Health and nutrition around the World 2023.pdf",
  },
  {
    title: "State of Food Insecurity and Nutrition 2024",
    filePath:
      "/files/TopicWiseReports/Nutrition/State of Food Insecurity and Nutrition 2024.pdf",
  },
  {
    title: "State of School Feeding Worldwide 2022_WFP",
    filePath:
      "/files/TopicWiseReports/Nutrition/State of School Feeding Worldwide 2022_WFP.pdf",
  },
];

const Nutrition = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <SectionTitleWithoutSub title="Nutrition" />

      {/* Content Section with Sidebar */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-8 mt-8">
        {/* Main Content */}
        <div className="flex-1">
          <div className="max-w-screen-xl mx-auto px-6 pb-16 flex flex-col md:flex-row gap-8">
            {/* Main Content */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto lg:grid-cols-3">
              {pdfs.map((pdf, index) => (
                <PdfCard key={index} pdf={pdf} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <NextButton
        href="/resources/reports/topic-wise-reports/primary-health-care"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default Nutrition;
