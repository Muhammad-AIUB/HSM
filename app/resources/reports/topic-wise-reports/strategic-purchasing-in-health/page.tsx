import NextButton from "@/components/Shared/NextButton";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import { PdfCard } from "../../general-reports/page";

type PdfDocument = {
  title: string;
  filePath: string;
};

const generatePdfList = (
  category: string,
  fileNames: string[]
): PdfDocument[] => {
  return fileNames.map((fileName) => ({
    title: fileName.replace(".pdf", ""), // Remove .pdf for the title
    filePath: `/files/TopicWiseReports/${category}/${fileName}.pdf`,
  }));
};

const pdfs = generatePdfList("Strategic-Purchasing-in-Health", [
  "A Framework for Strategic Health Purchasing 2022_TW",
  "Governance for Strategic Purchasing 2019_WHO",
  "Introduction to Strategic Purchasing 2020_TW",
  "Policy Needed for Strategic Purchsaing in Health 2019",
  "Strategic Purchasing for Health- 2014",
  "Strategic Purchasing for PHC 2022_TW",
  "Strategic Purchasing for Universal Health Coverage 2022",
  "Why Strategic Purchasing Fails 2020",
]);

const StrategicPurchasingInHealth = () => {
  return (
    <div className="bg-gray-50 pb-16">
      <SectionTitleWithoutSub title="Strategic Purchasing In Health" />

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
        href="/resources/reports/topic-wise-reports/universal-health-coverage"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default StrategicPurchasingInHealth;
