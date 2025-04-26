import Image from "next/image";

// Importing 9 travel images
import TravelImg1 from "@/public/images/sizear/visited-countries/visited-countries-1.jpg";
import TravelImg2 from "@/public/images/sizear/visited-countries/visited-countries-2.jpg";
import TravelImg3 from "@/public/images/sizear/visited-countries/visited-countries-3.jpg";
import TravelImg4 from "@/public/images/sizear/visited-countries/visited-countries-4.jpg";
import TravelImg5 from "@/public/images/sizear/visited-countries/visited-countries-5.jpg";
import TravelImg6 from "@/public/images/sizear/visited-countries/visited-countries-6.jpg";
import TravelImg7 from "@/public/images/sizear/visited-countries/visited-countries-7.jpg";
import TravelImg8 from "@/public/images/sizear/visited-countries/visited-countries-8.jpg";
import TravelImg9 from "@/public/images/sizear/visited-countries/visited-countries-9.jpg";
import { Globe, Plane } from "lucide-react";

export default function TravelTrajectory() {
  return (
    <div className="bg-blue-200">
      <div className="max-w-5xl mx-auto px-16 py-16">
        <h3 className="text-2xl md:text-2xl font-bold pt-16 underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#FFCE00] flex items-center gap-2">
          <Plane /> Travel Trajectory
        </h3>

        <p className="text-center text-black text-[17px] max-w-5xl mx-auto mb-8 mt-4">
          Exploring new places and cultures is a central aspect of my life. I
          have had the privilege of visiting over
          <span className="font-semibold text-blue-600">
            {" "}
            100 cities across 11 countries.
          </span>{" "}
          My wife and I prioritize creating extraordinary moments and enriching
          experiences through our travels, often valuing these experiences over
          saving money.
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-bold underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#ef4444] pb-6 flex items-center gap-2">
            <Globe />
            Visited Countries:
          </h3>
          <div className="ml-10 text-[17px]">
            <p>
              <span className="font-bold bg-red-400 text-white inline-block px-2 w-20">
                Europe:
              </span>{" "}
              The Netherlands, Sweden, Germany, Denmark, France, Belgium, and
              Luxembourg
            </p>
            <p className="mt-2">
              <span className="font-bold bg-yellow-400 text-white inline-block px-2 w-20">
                Asia:
              </span>{" "}
              India, Cambodia, Malaysia, and Bangladesh
            </p>
          </div>
        </div>

        {/* Travel Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            TravelImg1,
            TravelImg2,
            TravelImg9,
            TravelImg3,
            TravelImg4,
            TravelImg6,
            TravelImg5,
            TravelImg7,
            TravelImg8,
          ].map((img, index) => (
            <div
              key={index}
              className="w-full h-full rounded-md overflow-hidden flex items-center"
            >
              <div>
                <Image
                  src={img}
                  alt={`Travel Photo ${index + 1}`}
                  unoptimized
                  className="object-contain w-full h-full rounded-md bg-blue-100 p-2 shadow-md border border-blue-950/30"
                  placeholder="blur"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
