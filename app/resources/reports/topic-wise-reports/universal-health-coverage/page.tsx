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

const pdfs = generatePdfList("Universal-Health-Coverage", [
  "Designing-Benefits for UHC 2017_CGD",
  "Health Systems Development in Thailand through UHC 2018_Lancet",
  "Health Systems for UHC 2017_WHO",
  "High Performance Health Financing for UHC 2019_WB",
  "How UHC Reforms Happens in 24 Countries 2015_WB",
  "Meaning of UHC 2014_Lancet",
  "Moving Towards UHC in Bangladesh 2011_BHW",
  "Primary Health Care and UHC 2019_WHO",
  "Reaching UHC 2019_BMGF",
  "The Path to Universal Health Coverage in Bangladesh Bridging 2015_WB",
  "The Path to Universal Health Coverage_ A Closer Look inside WHO's Cube _ LinkedIn",
  "Tracking UHC 2023_WHO",
  "UHC Report for Bangladesh 2018_STC",
  "Universal Health Coverage for Sustainable-Development 2014_WB",
]);

const UniversalHealthCoverage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <SectionTitleWithoutSub title="Universal Health Coverage" />

      {/* Content Section with Sidebar */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-8 mt-8">
        {/* Main Content */}
        <div className="flex-1">
          <div className="max-w-screen-xl mx-auto  pb-16 flex flex-col md:flex-row gap-8">
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
        href="/resources/reports/topic-wise-reports/urban-health"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default UniversalHealthCoverage;
