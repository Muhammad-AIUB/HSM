import NextButton from "@/components/Shared/NextButton";
import { PdfCard } from "@/components/Shared/PdfCard";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
const pdfs = [
  {
    title: "Bangladesh Urban Health Scenario 2014 BHW",
    filePath:
      "/files/TopicWiseReports/Urban Health/Bangladesh Urban Health Scenario_2014 BHW.pdf",
  },
  {
    title: "Global Perspectives on Urban Health",
    filePath:
      "/files/TopicWiseReports/Urban Health/Global Perspectives on Urban Health.pdf",
  },
  {
    title: "Global Report Urban Health 2016 WHO",
    filePath:
      "/files/TopicWiseReports/Urban Health/Global Report Urban Health_2016 WHO.pdf",
  },
  {
    title: "Health and Nutrition in Urban Bangladesh 2018 WB",
    filePath:
      "/files/TopicWiseReports/Urban Health/Health and Nutrition in Urban Bangladesh_2018 WB.pdf",
  },
  {
    title: "Healthcare Investments for the Urban Populations 2021",
    filePath:
      "/files/TopicWiseReports/Urban Health/Health ccare Investments for the Urban Populations_2021.pdf",
  },
  {
    title: "Urban Health Index 2014 WHO",
    filePath:
      "/files/TopicWiseReports/Urban Health/Urban Health Index_2014 WHO.pdf",
  },
  {
    title: "Urban Health Wellbeing",
    filePath: "/files/TopicWiseReports/Urban Health/Urban Health Wellbeing.pdf",
  },
  {
    title: "Urban Resilience Health Sector Guidance 2022 USAID",
    filePath:
      "/files/TopicWiseReports/Urban Health/Urban Resilience Health Sector Guidance_2022_USAID.pdf",
  },
  {
    title: "Urban Resilience Technical Guidance 2023 USAID",
    filePath:
      "/files/TopicWiseReports/Urban Health/Urban Resilience Technical Guidance_2023 USAID.pdf",
  },
];

const HealthFincancing = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <SectionTitleWithoutSub title="Urban Health" />

      {/* Content Section with Sidebar */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-8 mt-8">
        {/* Main Content */}
        <div className="flex-1">
          <div className="max-w-screen-xl mx-auto pb-16 flex flex-col md:flex-row gap-8">
            {/* Main Content */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto lg:grid-cols-3">
              {pdfs.map((pdf, index) => (
                <PdfCard pdf={pdf} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <NextButton
        href="/resources/reports/topic-wise-reports/vaccine-and-immunization"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default HealthFincancing;
