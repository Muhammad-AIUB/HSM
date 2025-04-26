import Image from "next/image";

import FamilyImg1 from "@/public/images/sizear/family-photos/family-photo-4.jpg";
import FamilyImg2 from "@/public/images/sizear/family-photos/family-photo-1.jpg";
import FamilyImg3 from "@/public/images/sizear/family-photos/family-photo-3.jpg";
import FamilyImg4 from "@/public/images/sizear/family-photos/family-photo-5.jpg";
import FamilyImg5 from "@/public/images/sizear/family-photos/family-photo-2.jpg";
import FamilyImg6 from "@/public/images/sizear/family-photos/family-photo-6.jpg";

export default function FamilySection() {
  return (
    <div className="py-16 bg-gradient-to-r bg-green-200 rounded-md shadow-sm">
      <div className="max-w-screen-xl mx-auto px-16">
        <h3 className="text-2xl md:text-2xl font-bold pt-4 underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#FFCE00]">
          Family
        </h3>
        <p className="text-center text-lg text-[#001844] font-semibold max-w-3xl mx-auto mb-8 pt-8">
          My family is my greatest source of energy and joy, and they always
          come first in my life. Our family includes my wonderful wife, our two
          super energetic daughters, and my father. My mother passed away in
          2016, and her memory continues to inspire us. ❤️
        </p>

        {/* Image Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="w-full h-full bg-gray-100 rounded-md overflow-hidden shadow-md">
            <Image
              src={FamilyImg3}
              alt="Family Photo 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full h-full bg-gray-100 rounded-md overflow-hidden shadow-md">
            <Image
              src={FamilyImg2}
              alt="Family Photo 2"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full h-full bg-gray-100 rounded-md overflow-hidden shadow-md">
            <Image
              src={FamilyImg1}
              alt="Family Photo 3"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full h-full bg-gray-100 rounded-md overflow-hidden shadow-md">
            <Image
              src={FamilyImg4}
              alt="Family Photo 4"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full h-full bg-gray-100 rounded-md overflow-hidden shadow-md">
            <Image
              src={FamilyImg5}
              alt="Family Photo 5"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full h-full bg-gray-100 rounded-md overflow-hidden shadow-md">
            <Image
              src={FamilyImg6}
              alt="Family Photo 6"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
