import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import { PdfCard } from "../../general-reports/page";

const pdfs = [
  {
    title: "Electronic Immunization Registry 2017 WHO",
    filePath:
      "/files/TopicWiseReports/Vaccine and Immunization/Electronic Immunization Registry_2017_WHO.pdf",
  },
  {
    title: "Immunization Data Quality Assessment 2025 WHO",
    filePath:
      "/files/TopicWiseReports/Vaccine and Immunization/Immunization Data Quality Assessment_2025_WHO.pdf",
  },
  {
    title: "Immunization in Practice 2015 WHO",
    filePath:
      "/files/TopicWiseReports/Vaccine and Immunization/Immunization in Practice_2015_WHO.pdf",
  },
  {
    title: "Playbook for GAVI for Sustainable Vaccine 2024 CGD",
    filePath:
      "/files/TopicWiseReports/Vaccine and Immunization/Playbook for GAVI for Sustainable Vaccine_2024_CGD.pdf",
  },
  {
    title: "State of World's Children and Vaccination 2023 UNICEF",
    filePath:
      "/files/TopicWiseReports/Vaccine and Immunization/State of World_s Children and Vaccination_2023_UNICEF.pdf",
  },
  {
    title: "Zero Dose Learning Hub of Bangladesh Landscape 2023 GAVI",
    filePath:
      "/files/TopicWiseReports/Vaccine and Immunization/Zero Dose Learning Hub of Bangladesh Landscape_2023_GAVI.pdf",
  },
];

const HealthFincancing = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <SectionTitleWithoutSub title="Vaccine and Immunization" />

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
    </div>
  );
};

export default HealthFincancing;
