import NextButton from "@/components/Shared/NextButton";
import { PdfCard } from "@/components/Shared/PdfCard";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";

const pdfs = [
  {
    title: "2018_RTI",
    filePath: "/files/TopicWiseReports/Health-Policy-and-Analysis/2018_RTI.pdf",
  },
  {
    title: "Disease control policy in developing countires 2006_WB",
    filePath:
      "/files/TopicWiseReports/Health-Policy-and-Analysis/Disease control policy in developing countires 2006_WB.pdf",
  },
  {
    title: "Health in All Policies 2015_WHO",
    filePath:
      "/files/TopicWiseReports/Health-Policy-and-Analysis/Health in All Policies 2015_WHO.pdf",
  },
  {
    title: "Health policy Analysis 2008",
    filePath:
      "/files/TopicWiseReports/Health-Policy-and-Analysis/Health policy Analysis 2008.pdf",
  },
  {
    title: "Health policy analysis for MIC 2018_WHO",
    filePath:
      "/files/TopicWiseReports/Health-Policy-and-Analysis/Health policy analysis for MIC 2018_WHO.pdf",
  },
  {
    title: "Health policy Challenges 2023",
    filePath:
      "/files/TopicWiseReports/Health-Policy-and-Analysis/Health policy Challenges 2023.pdf",
  },
  {
    title: "Health Policy Handbook_2023",
    filePath:
      "/files/TopicWiseReports/Health-Policy-and-Analysis/Health Policy Handbook_2023.pdf",
  },
  {
    title: "International Health Regulations 2015_WHO",
    filePath:
      "/files/TopicWiseReports/Health-Policy-and-Analysis/International Health Regulations 2015_WHO.pdf",
  },
];

const HealthPolicyAndAnalysis = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <SectionTitleWithoutSub title="Health Policy and Analysis" />

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
        href="/resources/reports/topic-wise-reports/health-service-delivery"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default HealthPolicyAndAnalysis;
