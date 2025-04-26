import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const SectionTitle = ({
  title,
  subTitle,
  href,
}: {
  title: string;
  subTitle: string;
  href?: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 items-center w-full px-10">
      <div className="flex gap-4">
        <Link
          href={href || "#"}
          className="text-[30px] font-[700] text-[#001844]"
        >
          <h2>{title}</h2>
        </Link>
        <Separator
          orientation="vertical"
          className="h-10 w-1 bg-[#FFCE00] hidden md:block"
        />
      </div>

      <p className="text-lg sm:text-[20px] text-[#001844] text-justify">
        {subTitle}
      </p>
    </div>
  );
};

export default SectionTitle;

export const SectionTitleWithoutSub = ({ title }: { title: string }) => {
  return (
    <div className="relative w-full  border-t-2 border-[#FFCE00]">
      <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
        <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-10 text-center md:px-16 flex-wrap gap-6 py-4">
          <h1
            className="text-2xl md:text-[30px] uppercase font-[700] text-[#001844]"
            style={{ wordSpacing: "0.4rem" }}
          >
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export const SectionTitleWithSub = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="relative w-full h-auto">
      <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center w-full px-10 md:px-16 py-3 gap-4 md:gap-6">
          <h1
            className="text-2xl md:text-[30px] uppercase font-[700] text-[#001844] lg:shrink-0 text-center  md:text-left"
            style={{ wordSpacing: "0.4rem" }}
          >
            {title}
          </h1>
          <p className="text-md text-black font-medium text-center max-w-3xl w-full md:w-auto md:text-justify">
            {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};
