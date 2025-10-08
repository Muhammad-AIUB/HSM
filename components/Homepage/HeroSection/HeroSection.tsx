import { Separator } from "@/components/ui/separator";
import HSMOffers from "./HSMOffers";


const HeroSection = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-10 md:px-12 pb-20">
            <div className="flex flex-col items-center px-2 md:px-4 gap-y-2 mt-2 md:mt-12">
                <div className="w-full max-w-4xl">
                    {/* Knowledge for Solutions - Left Aligned Header */}
                    <h2 className="text-2xl md:text-[26px] font-bold text-[#1E60AC] text-left mb-6 md:ml-60">
                        Knowledge for Solutions
                    </h2>

                    {/* Main Content Section */}
                    <div className="md:flex items-center justify-start gap-4">
                        {/* Health Systems HUB Logo */}
                        <div className="flex items-center justify-start mb-6 md:mb-0 flex-shrink-0 md:-ml-20">
                            <h2 className="text-xl md:text-3xl font-bold text-center mr-4 text-[#35A6EA]">
                                Health <br /> Systems{" "}
                            </h2>
                            <Separator
                                orientation="vertical"
                                className="h-16 md:h-20 w-1 bg-red-500"
                            />
                            <h1 className="transform -rotate-90 text-xl md:text-3xl mr-5 font-semibold text-[#35A6EA]">
                                HUB
                            </h1>
                        </div>

                        {/* Description Text */}
                        <div className="flex-1 max-w-xl md:-ml-8">
                            <p className="text-justify text-base font-medium text-gray-700">
                                <span className="font-bold">
                                    Health Systems Matter (HSM)
                                </span>{" "}
                                is a knowledge platform dedicated to global health. We empower professionals with resources, insights, career opportunities, and news. Our platform helps you stay informed and confident in the ever-evolving global health landscape.
                            </p>
                        </div>
                    </div>

                    {/* HSM Offers Section */}
                    <div className="flex items-center justify-center mt-8 scale-[70%] sm:scale-100 w-full">
                        <HSMOffers />
                    </div>
                </div>
            </div>

            {/* Bottom Banner */}
            <div className="px-4 md:px-0">
                <div className="bg-[#001844] max-w-3xl mx-auto text-white text-center font-semibold text-lg py-4 mt-16">
                    Do not settle.{" "}
                    <span className="text-[#FFCE00]">
                        Better public health begins with trusted knowledge.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
