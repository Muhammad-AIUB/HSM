import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface BookMarksSectionCardProps {
  title: string;
  description: string;
  href: string;
  Icon: string | StaticImageData; // Replacing Icon with imageSrc
}

const BookMarksSectionCard: React.FC<BookMarksSectionCardProps> = ({
  title,
  description,
  href,
  Icon,
}) => {
  return (
    <Link href={href}>
      <Card className="border w-full border-[#01748D] hover:border-[#F18A00] hover:border-r-4 hover:border-b-4 h-full hover:bg-white rounded-none shadow-sm bg-[#F4F3F0] hover:shadow-md flex flex-col justify-between">
        <CardHeader className="flex p-0 flex-col items-center justify-center space-y-2">
          {/* Image at the top */}
          <div className="w-full h-full mb-4">
            <div className="w-full h-52 overflow-hidden">
              <Image
                src={Icon}
                alt={title}
                height={1000}
                width={1000}
                className="object-cover w-full h-full hover:scale-110  hover:opacity-75 transition-transform transform duration-300 ease-in-out"
              />
            </div>
          </div>

          {/* Title */}
          <CardTitle className="text-2xl font-semibold pt-1 text-center text-[#001844] underline-offset-4 hover:decoration-[#F18A00]">
            <div className="hover:underline">{title}</div>
          </CardTitle>

          {/* Description */}
          <CardDescription className="pt-1 px-6 text-base text-black  text-justify ">
            {description}
          </CardDescription>
        </CardHeader>

        <div></div>

        {/* "Explore" Button */}
        <CardFooter className="flex mt-8 items-center justify-center">
          <div className="px-4 py-1 text-base font-medium text-white bg-[#01748D] rounded-md flex justify-center items-center gap-1 transition-all duration-300 transform hover:bg-[#F18A00] hover:scale-105 hover:shadow-sm">
            <span>Explore</span>
            <span className="text-base">→</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BookMarksSectionCard;
