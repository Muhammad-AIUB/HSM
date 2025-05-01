import NextButton from "@/components/Shared/NextButton";
import { PdfCard } from "@/components/Shared/PdfCard";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";

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

const pdfs = generatePdfList("Primary-health-care", [
  "A Vision for PHC in 21 Century_WHO 2018",
  "Implementing the PHC Approach_WHO 2024",
  "Improving Urban Health through PHC in South Asia_Lancet",
  "Operational Framework for PHC_WHO 2020",
  "PHC Measurement Framework and Indicators_WHO 2022",
  "PHC System in Bangladesh_WHO 2017",
  "PHC_Now More Than Ever-WHO 2008",
  "Strengthening Primary Care in-India_2024",
  "The State of PHC in South Asia_Lancet 2024",
]);

const PrimaryHealthCare = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <SectionTitleWithoutSub title="Primary Health Care" />

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
        href="/resources/reports/topic-wise-reports/private-public-mix"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default PrimaryHealthCare;
