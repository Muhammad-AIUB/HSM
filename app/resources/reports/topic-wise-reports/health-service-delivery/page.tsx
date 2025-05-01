import NextButton from "@/components/Shared/NextButton";
import { PdfCard } from "@/components/Shared/PdfCard";

import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";


const pdfs = [
  {
    title: "Bangladesh Essential Health Service 2016",
    filePath:
      "/files/TopicWiseReports/Health Service Delivery/Bangladesh_Essential_Health_Service_2016.pdf",
  },
  {
    title: "Delivering Quality Health Service 2018 WHO-L",
    filePath:
      "/files/TopicWiseReports/Health Service Delivery/Delevering Quality Health Service_2018_WHo-L.pdf",
  },
  {
    title: "Essential Health Service in Developing Countries 1993 WB",
    filePath:
      "/files/TopicWiseReports/Health Service Delivery/Essential Health Service in Developing Countries_1993_WB.pdf",
  },
  {
    title: "Essential Package of Health Services in Pakistan 2020 WHO",
    filePath:
      "/files/TopicWiseReports/Health Service Delivery/Essential Package of Health Services in Pakistan 2020_WHO.pdf",
  },
  {
    title: "Essential Packages of Health Service in 24 Countries 2016 USAID",
    filePath:
      "/files/TopicWiseReports/Health Service Delivery/Essential Packages of Health Service in 24 Countries_2016_USAID.pdf",
  },
];

const ClimateChangeAndPublicHealth = () => {
  return (
    <div className="bg-gray-50 pb-16">
      <SectionTitleWithoutSub title="Health Service Delivery" />

      {/* Content Section with Sidebar */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-8 mt-8">
        {/* Main Content */}
        <div className="flex-1">
          <div className="max-w-screen-xl mx-auto pb-16 flex flex-col md:flex-row gap-8">
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
        href="/resources/reports/topic-wise-reports/health-system-and-goverance"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default ClimateChangeAndPublicHealth;
