import NextButton from "@/components/Shared/NextButton";
import { PdfCard } from "@/components/Shared/PdfCard";

const pdfs = [
  {
    title: "Controlling NCD in Bangladesh_2017",
    filePath:
      "/files/TopicWiseReports/NCDs/Controlling NCD in Bangladesh_2017.pdf",
  },
  {
    title: "Global Agenda of NCD 2023_WHO",
    filePath: "/files/TopicWiseReports/NCDs/Global Agenda of NCD 2023_WHO.pdf",
  },
  {
    title: "Global Status Report of NCDs 2014_WHO",
    filePath:
      "/files/TopicWiseReports/NCDs/Global Status Report of NCDs 2014_WHO.pdf",
  },
  {
    title: "Multisectoral Action Plan for NCD in Bangladesh 2018-2025-MOHFW",
    filePath:
      "/files/TopicWiseReports/NCDs/Multisectoral Action Plan for NCD in Bangladesh 2018-2025-MOHFW.pdf",
  },
  {
    title: "NCD Prevention Framework of Malta_2024",
    filePath:
      "/files/TopicWiseReports/NCDs/NCD Prevention Framework of Malta_2024.pdf",
  },
  {
    title: "NCD Scenarios in Bangladesh 2016_BHW",
    filePath:
      "/files/TopicWiseReports/NCDs/NCD Scenarios in Bangladesh 2016_BHW.pdf",
  },
  {
    title: "Package of Essential NCD 2020_WHO",
    filePath:
      "/files/TopicWiseReports/NCDs/Package of Essential NCD 2020_WHO.pdf",
  },
];

const NCDs = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <div className="relative w-full  border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1 className="text-2xl md:text-[30px] font-extrabold text-[#001844]">
              NCDs
            </h1>
          </div>
        </div>
      </div>

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
        href="/resources/reports/topic-wise-reports/nutrition"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default NCDs;
