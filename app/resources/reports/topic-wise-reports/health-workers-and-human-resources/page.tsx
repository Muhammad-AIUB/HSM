import NextButton from "@/components/Shared/NextButton";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import { PdfCard } from "../../general-reports/page";

const pdfs = [
  {
    title: "Assessment of-Healthcare Providers in Banglades 2021_WHO",
    filePath:
      "/files/TopicWiseReports/Health-workers-and-human-resources/Assessment of-Healthcare Providers in Banglades 2021_WHO.pdf",
  },
  {
    title: "Bangladesh Health Workforce Strategy 2023_MOHFW",
    filePath:
      "/files/TopicWiseReports/Health-workers-and-human-resources/Bangladesh Health Workforce Strategy 2023_MOHFW.pdf",
  },
  {
    title: "Global Strategy on Human Resources for Health_WHO 2018",
    filePath:
      "/files/TopicWiseReports/Health-workers-and-human-resources/Global Strategy on Human Resources for Health_WHO 2018.pdf",
  },
  {
    title: "Health Worker Mobility and Migration 2024_WHO",
    filePath:
      "/files/TopicWiseReports/Health-workers-and-human-resources/Health Worker Mobility and Migration 2024_WHO.pdf",
  },
  {
    title: "Health Workforce 2030_WHO",
    filePath:
      "/files/TopicWiseReports/Health-workers-and-human-resources/Health Workforce 2030_WHO.pdf",
  },
  {
    title: "Policy on Health Workforce_PAHO 2023",
    filePath:
      "/files/TopicWiseReports/Health-workers-and-human-resources/Policy on Health Workforce_PAHO 2023.pdf",
  },
];

const HealthWorkersAndHumanResources = () => {
  return (
    <div className="bg-gray-50 pb-16">
      <SectionTitleWithoutSub title="Health Workers and Human Resources" />

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
        href="/resources/reports/topic-wise-reports/maternal-and-child-health"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default HealthWorkersAndHumanResources;
