import CareerAndScholarship from "./CareerAndScholarship";
import PublicHealth from "./PublicHealth";

const NewspaperColumns = () => {
  return (
    <div className="bg-[#6BCBD5]/50">
      <div className="max-w-screen-xl mx-auto px-12 lg:px-16 py-12 ">
        <h3 className="text-2xl md:text-2xl font-bold  pb-4 underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#FFCE00]">
          Writing World
        </h3>

        <p className="text-black font-[17px] text-justify">
          Beyond academic publications, I regularly contribute columns and
          opinion pieces to newspapers and various platforms, addressing
          critical public health and social issues. As a passionate traveler, I have also documented my journeys and
          published a collection of travel essays in book form. My work spans
          the following categories:
        </p>

        <h3 className="text-2xl md:text-2xl font-bold  pt-8 underline underline-offset-[6px] font-roboto text-[#113855] decoration-[#FFCE00]">
          Newspaper Columns
        </h3>

        <PublicHealth />

        <CareerAndScholarship />
      </div>
    </div>
  );
};

export default NewspaperColumns;
