import NextButton from "@/components/Shared/NextButton";
import { PdfCard } from "@/components/Shared/PdfCard";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";

const pdfs = [
  {
    title: "Bangladesh Mental health Situational Assessment_2020",
    filePath:
      "/files/TopicWiseReports/Mental-Health/Bangladesh Mental health Situational Assessment_2020.pdf",
  },
  {
    title: "Bangladesh National Mental Health-Strategic Plan_2020",
    filePath:
      "/files/TopicWiseReports/Mental-Health/Bangladesh National Mental Health-Strategic Plan_2020.pdf",
  },
  {
    title: "Mental health Policy in Workplace_WHO 2005",
    filePath:
      "/files/TopicWiseReports/Mental-Health/Mental health Policy in Workplace_WHO 2005.pdf",
  },
  {
    title: "State of Mental Health in America_2024",
    filePath:
      "/files/TopicWiseReports/Mental-Health/State of Mental Health in America_2024.pdf",
  },
  {
    title: "Transforming Mental Health_WHO 2024",
    filePath:
      "/files/TopicWiseReports/Mental-Health/Transforming Mental Health_WHO 2024.pdf",
  },
  {
    title: "World Mental Health Report_WHO 2022",
    filePath:
      "/files/TopicWiseReports/Mental-Health/World Mental Health Report_WHO 2022.pdf",
  },
];

const MentalHealth = () => {
  return (
    <div className="bg-gray-50 pb-16">
      <SectionTitleWithoutSub title="Mental Health" />

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
        href="/resources/reports/topic-wise-reports/ncds"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default MentalHealth;
