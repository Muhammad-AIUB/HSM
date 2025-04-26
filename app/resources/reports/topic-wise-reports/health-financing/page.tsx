import NextButton from "@/components/Shared/NextButton";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import { PdfCard } from "../../general-reports/page";
const pdfs = [
  {
    title:
      "Bangladesh Health Financing Context Analysis revised October 2019 (clean)",
    filePath:
      "/files/TopicWiseReports/Health-Financing/Bangladesh Health Financing Context Analysis revised October 2019 (clean).docx",
  },
  {
    title: "Budget Matters for Health 2018_WHO",
    filePath:
      "/files/TopicWiseReports/Health-Financing/Budget Matters for Health 2018_WHO.pdf",
  },
  {
    title: "Costing of Covid-19 Vaccine in bangladesh - TW_2024",
    filePath:
      "/files/TopicWiseReports/Health-Financing/Costing of Covid-19 Vaccine in bangladesh - TW_2024.pdf",
  },
  {
    title: "Crowd Funding in Health Research 2021_WHO",
    filePath:
      "/files/TopicWiseReports/Health-Financing/Crowd Funding in Health Research 2021_WHO.pdf",
  },
  {
    title: "Domestic Co-financing policy in Global health 2024_CGD",
    filePath:
      "/files/TopicWiseReports/Health-Financing/Domestic Co-financing policy in Global health 2024_CGD.pdf",
  },
  {
    title: "Financing Global Health 2021",
    filePath:
      "/files/TopicWiseReports/Health-Financing/Financing Global Health 2021.pdf",
  },
  {
    title: "Financing TB -USAID 2022",
    filePath:
      "/files/TopicWiseReports/Health-Financing/Financing TB -USAID 2022.pdf",
  },
  {
    title: "Financing the Future- 2024_IDA",
    filePath:
      "/files/TopicWiseReports/Health-Financing/Financing the Future- 2024_IDA.pdf",
  },
  {
    title: "Funding by Neglected Disease 2023",
    filePath:
      "/files/TopicWiseReports/Health-Financing/Funding by Neglected Disease 2023.pdf",
  },
  {
    title: "Global Expenditure on Health 2021_WHO",
    filePath:
      "/files/TopicWiseReports/Health-Financing/Global Expenditure on Health 2021_WHO.pdf",
  },
  {
    title: "Health care Financing in LMICs",
    filePath:
      "/files/TopicWiseReports/Health-Financing/Health care Financing in LMICs.pdf",
  },
  {
    title: "Health Financing Challenges for NCDs 2024",
    filePath:
      "/files/TopicWiseReports/Health-Financing/Health Financing Challenges for NCDs 2024.pdf",
  },
  {
    title: "Health Financing in a Time of Global Shock 2023-WB",
    filePath:
      "/files/TopicWiseReports/Health-Financing/Health Financing in a Time of Global Shock 2023-WB.pdf",
  },
  {
    title: "Health Financing in Times of Uncertainty 2021_WHO",
    filePath:
      "/files/TopicWiseReports/Health-Financing/Health Financing in Times of Uncertainty 2021_WHO.pdf",
  },
  {
    title: "Health Financing Policy 2016_WB",
    filePath:
      "/files/TopicWiseReports/Health-Financing/Health Financing Policy 2016_WB.pdf",
  },
  {
    title: "Health Financing Policy Guidance 2008_WHO",
    filePath:
      "/files/TopicWiseReports/Health-Financing/Health Financing Policy Guidance 2008_WHO.pdf",
  },
  {
    title: "Health Financing Practitionars' Guide 2006_WB",
    filePath:
      "/files/TopicWiseReports/Health-Financing/Health Financing Practitionars' Guide 2006_WB.pdf",
  },
  {
    title: "Health Financing Progress Matrix of Bangladesh 2021_WHO",
    filePath:
      "/files/TopicWiseReports/Health-Financing/Health Financing Progress Matrix of Bangladesh 2021_WHO.pdf",
  },
  {
    title: "Health-Financing Designing 2001_DFID",
    filePath:
      "/files/TopicWiseReports/Health-Financing/Health-Financing Designing 2001_DFID.pdf",
  },
  {
    title: "Health-Financing Trends in Sub-Saharan Africa 2012_OPM",
    filePath:
      "/files/TopicWiseReports/Health-Financing/Health-Financing Trends in Sub-Saharan Africa 2012_OPM.pdf",
  },
  {
    title: "National Health Financing Strategy 2017_WHO",
    filePath:
      "/files/TopicWiseReports/Health-Financing/National Health Financing Strategy 2017_WHO.pdf",
  },
  {
    title: "Political Economy Analysis for Health Financing - 2024_WHO",
    filePath:
      "/files/TopicWiseReports/Health-Financing/Political Economy Analysis for Health Financing - 2024_WHO.pdf",
  },
  {
    title: "Public health Expenditure Review of Bangladesh- HEU_2021",
    filePath:
      "/files/TopicWiseReports/Health-Financing/Public health Expenditure Review of Bangladesh- HEU_2021.pdf",
  },
];

const HealthFincancing = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <SectionTitleWithoutSub title="Health Financing" />

      {/* Content Section with Sidebar */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-8 mt-8">
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
        href="/resources/reports/topic-wise-reports/health-policy-and-analysis"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default HealthFincancing;
