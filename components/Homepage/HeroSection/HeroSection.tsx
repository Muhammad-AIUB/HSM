import { Separator } from "@/components/ui/separator";
import HSMOffers from "./HSMOffers";

import HeroImg from "@/public/images/homepage/hero-image.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-10 md:px-12 pb-20">
      <div className="flex flex-col md:flex-row items-center  px-2 md:px-4 gap-x-12 gap-y-2 mt-2 md:mt-12">
        <div className="w-full md:w-[65%]">
          <div className="md:flex items-center justify-center">
            <div className="flex items-center justify-center lg:ps-12">
              <h2 className="text-xl md:text-3xl font-bold text-center mr-4  text-[#35A6EA]">
                Health <br /> Systems{" "}
              </h2>{" "}
              <Separator
                orientation="vertical"
                className="h-16 md:h-20 w-1 bg-red-500"
              />{" "}
              <h1 className="transform -rotate-90 text-xl md:text-3xl mr-5 font-semibold text-[#35A6EA]">
                {" "}
                HUB{" "}
              </h1>
              {/* text-[#1E60AC] */}
            </div>
            <div>
              <h2 className="text-2xl md:text-[26px] font-bold  text-[#1E60AC] text-center mb-4 mt-4 md:mt-0">
                Knowledge for Solutions
              </h2>
              <p className="text-justify text-base font-medium text-gray-700">
                <span className="font-bold">Health Systems Matter (HSM)</span>{" "}
                is a knowledge platform that covers global health issues. HSM
                empowers professionals by providing resources, insights, career
                opportunities, and news. It serves as a hub for staying informed
                and confident in the ever eveloving global health industry,
                where knowledge matters.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end mt-4 scale-[70%] sm:scale-100 w-full">
            <HSMOffers />
          </div>
        </div>

        <div className="w-72 h-72">
          <Image src={HeroImg} alt="Hero Image" className="w-full h-full" />
        </div>
      </div>

      <div className="px-4 md:px-0">
        <div className="bg-[#001844] max-w-3xl mx-auto text-white text-center font-semibold text-lg py-4 mt-8">
          Do not settle.{" "}
          <span className="text-[#FFCE00]">
            Better public health starts with knowledge.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
