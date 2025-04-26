import NextButton from "@/components/Shared/NextButton";

import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import { PdfCard } from "../../general-reports/page";

const pdfs = [
  {
    title:
      "Diagnostic Study of Public Financial Management to Strengthen Health Financing in Bangladesh 2018 WB",
    filePath:
      "/files/TopicWiseReports/Public Financial Management/Diagnostic Study of Public Financial Management to Strengthen Health Financing in Bangladesh_2018_WB.pdf",
  },
  {
    title: "Digital Public Financial Management 2023 DI",
    filePath:
      "/files/TopicWiseReports/Public Financial Management/Digital Public Financial Management_2023_DI.pdf",
  },
  {
    title: "Framework for Assessing Public Financial Management 2016 PEFA",
    filePath:
      "/files/TopicWiseReports/Public Financial Management/Framework for Assessing Public Financial Management_2016_PEFA.pdf",
  },
  {
    title: "Global Report on PFM 2020 PEFA",
    filePath:
      "/files/TopicWiseReports/Public Financial Management/Global Report on PFM_2020_PEFA.pdf",
  },
  {
    title: "PFM Reform Action Plan in Bangladesh 2023",
    filePath:
      "/files/TopicWiseReports/Public Financial Management/PFM Reform Action Plan in Bangladesh_2023.pdf",
  },
  {
    title: "Public Financial Management Reform Literature Review 2009",
    filePath:
      "/files/TopicWiseReports/Public Financial Management/Public Financial Management Reform Literature Review_2009.pdf",
  },
  {
    title: "Public Financial Management System of Bangladesh 2018 ADB",
    filePath:
      "/files/TopicWiseReports/Public Financial Management/Public Financial Management System of Bangladesh_2018_ADB.pdf",
  },
  {
    title:
      "WB PFM Diagnostic Study of Public Financial Management to Strengthen Health Financing and Service Delivery in Bangladesh",
    filePath:
      "/files/TopicWiseReports/Public Financial Management/WB-PFM-Diagnostic-Study-of-Public-Financial-Management-To-Strengthen-Health-Financing-and-Service-Delivery-in-Bangladesh.pdf",
  },
];

const PrivatePublicMix = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <SectionTitleWithoutSub title="Public Financial Management" />

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
        href="/resources/reports/topic-wise-reports/strategic-purchasing-in-health"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default PrivatePublicMix;
