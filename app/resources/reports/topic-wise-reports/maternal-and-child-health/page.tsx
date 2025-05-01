"use client";

import NextButton from "@/components/Shared/NextButton";
import { PdfCard } from "@/components/Shared/PdfCard";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";

const pdfs = [
  {
    title: "Improving Maternal and Reproductive Health_WB 2017",
    filePath:
      "/files/TopicWiseReports/Maternal-and-child-health/Improving Maternal and Reproductive Health_WB 2017.pdf",
  },
  {
    title: "Levels and Trends in Child Mortality_UNICEF 2024",
    filePath:
      "/files/TopicWiseReports/Maternal-and-child-health/Levels and Trends in Child Mortality_UNICEF 2024.pdf",
  },
  {
    title: "Maternal and Child Survival_WB 2014",
    filePath:
      "/files/TopicWiseReports/Maternal-and-child-health/Maternal and Child Survival_WB 2014.pdf",
  },
  {
    title: "Maternal, Neonetal and Child Health Resource Guide_2020",
    filePath:
      "/files/TopicWiseReports/Maternal-and-child-health/Maternal, Neonetal and Child Health Resource Guide_2020.pdf",
  },
  {
    title: "Repreductive, Maternal, Newborn and Child health_WB 2016",
    filePath:
      "/files/TopicWiseReports/Maternal-and-child-health/Repreductive, Maternal, Newborn and Child health_WB 2016.pdf",
  },
  {
    title: "Success Factors for Child and Maternal Mortality_2014",
    filePath:
      "/files/TopicWiseReports/Maternal-and-child-health/Success Factors for Child and Maternal Mortality_2014.pdf",
  },
  {
    title: "Trends in Maternal Mortality_WHO 2023",
    filePath:
      "/files/TopicWiseReports/Maternal-and-child-health/Trends in Maternal Mortality_WHO 2023.pdf",
  },
];

const MeternalAndChildHealth = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <SectionTitleWithoutSub title="Maternal and Child Health" />
      {/* Content Section with Sidebar */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-8 mt-8">
        {/* Main Content */}
        <div className="flex-1">
          <div className="max-w-screen-xl mx-auto px-6 pb-16 flex flex-col md:flex-row gap-8">
            {/* Main Content */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
              {pdfs.map((pdf, index) => (
                <PdfCard key={index} pdf={pdf} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <NextButton
        href="/resources/reports/topic-wise-reports/mental-health"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default MeternalAndChildHealth;
