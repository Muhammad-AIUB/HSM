import NextButton from "@/components/Shared/NextButton";
import { PdfCard } from "@/components/Shared/PdfCard";

import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";

const pdfs = [
  {
    title: "Climate Afflictions 2021_WB",
    filePath:
      "/files/TopicWiseReports/Climate-change-and-public-health/Climate Afflictions 2021_WB.pdf",
  },
  {
    title:
      "Climate Change Impacts on Human Health and the Health Sector 2022_USAID",
    filePath:
      "/files/TopicWiseReports/Climate-change-and-public-health/Climate Change Impacts on Human Health and the Health Sector 2022_USAID.pdf",
  },
  {
    title: "Climate Finance Guide 2020",
    filePath:
      "/files/TopicWiseReports/Climate-change-and-public-health/Climate Finance Guide 2020.pdf",
  },
  {
    title: "Climate Finance in Bangladesh 2017_USAID",
    filePath:
      "/files/TopicWiseReports/Climate-change-and-public-health/Climate Finance in Bangladesh 2017_USAID.pdf",
  },
  {
    title:
      "Climate Financing for Sustainable Development of Bangladesh 2023_MOF",
    filePath:
      "/files/TopicWiseReports/Climate-change-and-public-health/Climate Financing for Sustainable Development of Bangladesh 2023_MOF.pdf",
  },
  {
    title:
      "Estimates of the Impact of Climate Change on Extreme Poverty 2020_WB",
    filePath:
      "/files/TopicWiseReports/Climate-change-and-public-health/Estimates of the Impact of Climate Change on Extreme Poverty 2020_WB.pdf",
  },
  {
    title: "Handbook on Climate Chnage Impact 2024",
    filePath:
      "/files/TopicWiseReports/Climate-change-and-public-health/Handbook on Climate Chnage Impact 2024.pdf",
  },
  {
    title: "Health and Climate Change_Lancet Countdown 2022",
    filePath:
      "/files/TopicWiseReports/Climate-change-and-public-health/Health and Climate Change_Lancet Countdown 2022.pdf",
  },
  {
    title: "IDU08d9e0a9203ad50400d09a6e078489562e7e8",
    filePath:
      "/files/TopicWiseReports/Climate-change-and-public-health/IDU08d9e0a9203ad50400d09a6e078489562e7e8.pdf",
  },
  {
    title:
      "Impacts of climate change on health in Bangladesh Policy brief 2023",
    filePath:
      "/files/TopicWiseReports/Climate-change-and-public-health/Impacts of climate change on health in Bangladesh Policy brief 2023.pdf",
  },
  {
    title: "People in a Changing Climate 2024_WB",
    filePath:
      "/files/TopicWiseReports/Climate-change-and-public-health/People in a Changing Climate 2024_WB.pdf",
  },
  {
    title: "Quantifying the Impact of Climate Change 2024_WB",
    filePath:
      "/files/TopicWiseReports/Climate-change-and-public-health/Quantifying the Impact of Climate Change 2024_WB.pdf",
  },
  {
    title:
      "Socioeconomic Impact on Climate Change Developing-Countries Next Decades 2024_CGD",
    filePath:
      "/files/TopicWiseReports/Climate-change-and-public-health/Socioeconomic Impact on Climate Change Developing-Countries Next Decades 2024_CGD.pdf",
  },
  {
    title: "The Impact of Heat on Health and the Economy of Bangladesh 2024_WB",
    filePath:
      "/files/TopicWiseReports/Climate-change-and-public-health/The Impact of Heat on Health and the Economy of Bangladesh 2024_WB.pdf",
  },
  {
    title: "What Can I Do about the Climate Emergency",
    filePath:
      "/files/TopicWiseReports/Climate-change-and-public-health/What Can I Do about the Climate Emergency.pdf",
  },
];

const ClimateChangeAndPublicHealth = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <SectionTitleWithoutSub title="Climate Change And Public Health" />

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
        href="/resources/reports/topic-wise-reports/health-financing"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default ClimateChangeAndPublicHealth;
