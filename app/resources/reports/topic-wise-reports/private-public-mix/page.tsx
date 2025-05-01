import NextButton from "@/components/Shared/NextButton";
import { PdfCard } from "@/components/Shared/PdfCard";

import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";

const pdfs = [
  {
    title: "Engaging Private Sector in TB Care 2018",
    filePath:
      "/files/TopicWiseReports/Private Sector and Public Private Mix/Engaging Private Sector in TB Care_2018.pdf",
  },
  {
    title: "Future of NGOs 2024 PI",
    filePath:
      "/files/TopicWiseReports/Private Sector and Public Private Mix/Future of NGOs_2024_PI.pdf",
  },
  {
    title: "Managing Public Private Mix to Achieve UHC 2016",
    filePath:
      "/files/TopicWiseReports/Private Sector and Public Private Mix/Managing Public Private Mix to Achieve UHC_2016.pdf",
  },
  {
    title: "Private Sector in Primary Health Care 2018 WHO",
    filePath:
      "/files/TopicWiseReports/Private Sector and Public Private Mix/Private Sector in Primary Health Care_2018_WHO.pdf",
  },
  {
    title: "Roadmap for Systematic Private Sector Engagement in Health",
    filePath:
      "/files/TopicWiseReports/Private Sector and Public Private Mix/Roadmap for Systematic Private Sector Engagement in Health.pdf",
  },
  {
    title: "What is Private Sector in Health System 2018",
    filePath:
      "/files/TopicWiseReports/Private Sector and Public Private Mix/What is Private Sector. in Health System_2018.pdf",
  },
];

const PrivatePublicMix = () => {
  return (
    <div className="bg-gray-50 pb-16">
      <SectionTitleWithoutSub title="Private Sector and Public Private Mix" />

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
        href="/resources/reports/topic-wise-reports/public-financial-management"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default PrivatePublicMix;
