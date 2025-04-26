import NextButton from "@/components/Shared/NextButton";
import Image from "next/image";

import { FaDownload, FaBookOpen } from "react-icons/fa";
import FallbackPdfImage from "@/public/fallback-pdf.jpg";
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

export const PdfCard = function ({
  pdf,
}: {
  pdf: { title: string; filePath: string };
}) {
  return (
    <div className=" rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="w-[80px] h-[80px] mx-auto">
        <Image
          src={FallbackPdfImage.src}
          alt={pdf.title}
          width={80}
          height={80}
          className="object-contain w-full h-full"
        />
      </div>

      <div className="p-4 flex flex-col justify-between">
        <h3 className="font-semibold text-md text-gray-800 mb-4 h-9">
          {pdf.title}
        </h3>
        <div className="flex gap-2 mt-auto bg-white py-2">
          <a
            href={pdf.filePath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-green-700 hover:bg-green-900 text-white text-sm px-4 py-2 rounded-md font-bold"
          >
            <FaBookOpen /> Read
          </a>
          <a
            href={pdf.filePath}
            download
            className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-4 py-2 rounded-md"
          >
            <FaDownload /> Download
          </a>
        </div>
      </div>
    </div>
  );
};
