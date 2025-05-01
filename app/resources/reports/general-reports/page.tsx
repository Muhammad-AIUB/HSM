import NextButton from "@/components/Shared/NextButton";
import { PdfCard } from "@/components/Shared/PdfCard";

import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";

const pdfs = [
  {
    title: "Asian Development Outlook-2024",
    filePath: "/files/GeneralReports/Asian Development Outlook-2024.pdf",
  },
  {
    title: "Child, Food and Nutrition",
    filePath: "/files/GeneralReports/Child, Food and Nutrition.pdf",
  },
  {
    title: "Cost Effectiveness of Health Aid 2024",
    filePath: "/files/GeneralReports/Cost Effectiveness of Health Aid 2024.pdf",
  },
  {
    title: "Finance and Prosperity 2024",
    filePath: "/files/GeneralReports/Finance and Prosperity 2024.pdf",
  },
  {
    title: "Global Tuberculosis Report 2024",
    filePath: "/files/GeneralReports/Global Tuberculosis Report 2024.pdf",
  },
  {
    title: "Health & Climate Change_Lancet Countdown 2024",
    filePath:
      "/files/GeneralReports/Health & Climate Change_Lancet Countdown 2024.pdf",
  },
  {
    title: "Humanitarian Action Overview 2024",
    filePath: "/files/GeneralReports/Humanitarian Action Overview 2024.pdf",
  },
  {
    title: "Impact of Climate Change on Human Health_2024",
    filePath:
      "/files/GeneralReports/Impact of Climate Change on Human Health_2024.pdf",
  },
  {
    title: "International Debt Report 2024",
    filePath: "/files/GeneralReports/International Debt Report 2024.pdf",
  },
  {
    title: "Pathways out of the Polycrisis",
    filePath: "/files/GeneralReports/Pathways out of the Polycrisis.pdf",
  },
  {
    title: "Sustainable Development Report 2024",
    filePath: "/files/GeneralReports/Sustainable Development Report 2024.pdf",
  },
  {
    title: "The Global Risks Report 2024",
    filePath: "/files/GeneralReports/The Global Risks Report 2024.pdf",
  },
  {
    title: "World Bank in Bangladesh 2024",
    filePath: "/files/GeneralReports/World Bank in Bangladesh 2024.pdf",
  },
  {
    title: "World Development Report 2024",
    filePath: "/files/GeneralReports/World Development Report 2024.pdf",
  },
  {
    title: "World Hapiness Report 2024",
    filePath: "/files/GeneralReports/World Hapiness Report 2024.pdf",
  },
  {
    title: "World Health Statistics 2024",
    filePath: "/files/GeneralReports/World Health Statistics 2024.pdf",
  },
];

const GeneralReports = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <SectionTitleWithoutSub title="General Reports" />

      {/* Content Section with Sidebar */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-8 mt-8">
        {/* Main Content */}
        <div className="flex-1">
          <div className="max-w-6xl mx-auto px-6 pb-16 flex flex-col md:flex-row gap-8">
            {/* Main Content */}

            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
                {pdfs.map((pdf, index) => (
                  <PdfCard key={index} pdf={pdf} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <NextButton
        href="/resources/reports/topic-wise-reports"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default GeneralReports;


