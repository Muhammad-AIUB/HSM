import NextButton from "@/components/Shared/NextButton";

import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import { PdfCard } from "../../general-reports/page";

const pdfs = [
  {
    title: "Building Health Systems Resilience after COVID-19 2021 WHO",
    filePath:
      "/files/TopicWiseReports/Health Systems and Governance/Building Health Systems Resilience after COVID 19_2021 WHO.pdf",
  },
  {
    title: "Country Level Health Systems Analysis 2010 WB",
    filePath:
      "/files/TopicWiseReports/Health Systems and Governance/Country Level Health System Analysis_2010 WB.pdf",
  },
  {
    title: "Framework to Assess Health Governance 2016",
    filePath:
      "/files/TopicWiseReports/Health Systems and Governance/Framework to Assess Health Governance_2016.pdf",
  },
  {
    title: "Governance for Health in 21st Century 2012 WHO",
    filePath:
      "/files/TopicWiseReports/Health Systems and Governance/Governance for Health in 21st Century_2012 WHO.pdf",
  },
  {
    title: "Governance of Private Health Care Sector 2024 WHO",
    filePath:
      "/resourfilesces/TopicWiseReports/Health Systems and Governance/Governance of Private Health Care Sector_2024 WHO.pdf",
  },
  {
    title: "Health Governance Concepts 2008 USAID",
    filePath:
      "/files/TopicWiseReports/Health Systems and Governance/Health Governance Concpets_2008_USAID.pdf",
  },
  {
    title: "Health Systems Performance Accelerator 2024 USAID",
    filePath:
      "/files/TopicWiseReports/Health Systems and Governance/Health System Performance Accelerator_2024 USAID.pdf",
  },
  {
    title: "Health Systems Assessment Approach 2012 USAID",
    filePath:
      "/files/TopicWiseReports/Health Systems and Governance/Health Systems Assessment Approach_2012 USAID.pdf",
  },
  {
    title: "Health Systems Governance - Legal Framework 2021",
    filePath:
      "/files/TopicWiseReports/Health Systems and Governance/Health Systems Governance - Legal Framework_2021.pdf",
  },
  {
    title: "Health Systems Performance Assessment 2022 WHO",
    filePath:
      "/files/TopicWiseReports/Health Systems and Governance/Health Systems performance Assessment_ 2022 WHO.pdf",
  },
  {
    title: "Improving Health Systems Service Delivery 2009 WB",
    filePath:
      "/files/TopicWiseReports/Health Systems and Governance/Imporving Health Service Delivery_2009 WB.pdf",
  },
  {
    title: "International Profiles of Health Care Systems 2020",
    filePath:
      "/files/TopicWiseReports/Health Systems and Governance/International Profiles of Health Care Systems_2020.pdf",
  },
  {
    title: "Preparing Health Systems for Shocks 2024 WB",
    filePath:
      "/files/TopicWiseReports/Health Systems and Governance/Preparing Health Systems for Schocks_2024 WB.pdf",
  },
  {
    title: "Strengthening Health Systems Framework 2007 WHO",
    filePath:
      "/files/TopicWiseReports/Health Systems and Governance/Strenthening Health System framework_2007 WHO.pdf",
  },
];

const ClimateChangeAndPublicHealth = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <SectionTitleWithoutSub title="Health System and Governance" />

      {/* Content Section with Sidebar */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-8 mt-8">
        {/* Main Content */}
        <div className="flex-1">
          <div className="max-w-screen-xl mx-auto px-6 pb-16 flex flex-col md:flex-row gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
              {pdfs.map((pdf, index) => (
                <PdfCard key={index} pdf={pdf} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <NextButton
        href="/resources/reports/topic-wise-reports/health-workers-and-human-resources"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default ClimateChangeAndPublicHealth;
