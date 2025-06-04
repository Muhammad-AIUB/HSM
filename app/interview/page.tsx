"use client";

import NextButton from "@/components/Shared/NextButton";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import ShahaduzZamanImage from "@/public/images/blog-interview/Shahaduz-Zaman.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import DrMadhukarPaiImg from "@/public/images/blog-interview/interview/madhukar.jpg";
import SharmeenYasmeenImg from "@/public/images/blog-interview/interview/Sharmeen Yasmeen.jpg";
import SyedMasudImg from "@/public/images/blog-interview/interview/Syed_Masud_Ahmed_Photo.jpg";
import DrZarifImg from "@/public/images/blog-interview/interview/Zarif-Rasul.jpg";

import DrTaufiqueImg from "@/public/images/blog-interview/interview/DrTaufique.jpg";

import IstiakMannan from "@/public/images/blog-interview/interview/istiak-mannan-cover.jpg";

interface Interview {
  id: number;
  title: string;
  date: string;
  description: string;
  image: StaticImageData;
  slug: string;
}

const interviews = [
  {
    id: 1,
    title: "Public Health Insights with Dr. Madhukar Pai: A Global Leader",
    date: "May 01, 2025",
    description:
      "Dr. Madhukar Pai shares his journey, inspiration, and thoughts on the biggest global health challenges.",
    image: DrMadhukarPaiImg,
    slug: "public-health-insights-1",
  },

  {
    id: 2,
    title:
      "Public Health Systems Perspective with Prof. Dr. Syed Masud Ahmed: A Global Health System Expert",
    date: "May 02, 2025",
    description:
      "Dr. Syed Masud Ahmed, shares his thoughts on public health systems perspective",
    image: SyedMasudImg,
    slug: "public-health-system-perspective",
  },
  {
    id: 3,
    title:
      "Public Health Insights with Prof. Sharmeen Yasmeen: Distinguished Academic and Public Health Expert",
    date: "May 03, 2025",
    description:
      "Prof. Sharmeen Yasmeen shares insights on public health systems",
    image: SharmeenYasmeenImg,
    slug: "public-health-insights-2",
  },
  {
    id: 4,
    title:
      "Development Perspective with Dr. Zarif Rasul: Insights from A Global Water Specialist",
    date: "May 04, 2025",
    description:
      "Dr. Zarif shares insights from his inspiring academic and professional journey toward becoming a global development expert.",
    image: DrZarifImg,
    slug: "development-perspective",
  },
  {
    id: 5,
    title:
      "A Leading Voice in Global Health Systems: A Dialogue with Dr. Taufique Joarder",
    date: "May 28, 2025",
    description:
      "Dr. Taufique Joarder is an Associate Professor and the Lead of the Programme Evaluation Unit at the SingHealth Duke-NUS Global Health Institute, Duke-NUS Medical School under the National University of Singapore.",
    image: DrTaufiqueImg,
    slug: "a-leading-voice-in-global-health-systems",
  },
  {
    id: 6,
    title:
      "From Vision to Impact: Dr. Ishtiaq Mannan on Advancing Global health",
    date: "June 05, 2025",
    description:
      "Dr. Ishtiaq Mannan is a distinguished public health leader with deep expertise in advancing sustainable health policies and systems in low-resource and fragile settings. He has been at the forefront of developing and implementing maternal and neonatal service models that have made significant impacts both globally and nationally.",
    image: IstiakMannan,
    slug: "from-vision-to-impact",
  },
];

const InterviewPage = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="pb-16">
      <div className="relative w-full h-auto">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center w-full px-12 md:px-16 py-1 gap-4 md:gap-6">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] lg:shrink-0"
              style={{ wordSpacing: "0.4rem" }}
            >
              Interviews
            </h1>
            <div className="text-md text-black font-medium text-center md:text-left max-w-3xl w-full md:w-auto">
              <p className="text-2xl font-roboto  text-gray-800 font-semibold">
                &quot;An effective interview is a collaborative intellectual
                adventure&quot;
              </p>
              <p className="mt-2">
                <span className="font-bold text-blue-900">
                  Dr. Shahaduz Zaman{" "}
                </span>
                -{" "}
                <span className="font-medium text-blue-700/80">
                  Medical Anthropologist and Bangladeshi Writer
                </span>
              </p>
            </div>
            <div>
              <Image
                src={ShahaduzZamanImage}
                alt="Dr. Shahaduz Zaman"
                width={100}
                height={100}
                className="rounded-full my-1"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-12 mt-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={
            [
              // Autoplay({
              //   delay: 2000,
              //   stopOnInteraction: true,
              //   stopOnMouseEnter: true,
              //   stopOnFocusIn: true,
              // }),
            ]
          }
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent className="-ml-2 md:-ml-4 pb-10">
            {interviews.map((interview, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 pt-1 pb-4"
              >
                <div className="h-full flex">
                  <div
                    key={interview.id}
                    className="flex flex-col w-full h-full bg-white border transition-transform duration-300 hover:border-r-4 hover:border-b-4 border-[#2D8CBB] hover:shadow-md relative"
                  >
                    <Link
                      href={`/interview/${interview.slug}`}
                      className="flex flex-col h-full overflow-hidden" // Added overflow-hidden
                    >
                      <Image
                        src={interview.image}
                        alt={interview.title}
                        width={500}
                        height={300}
                        className="w-full h-56 object-cover hover:scale-105 hover:opacity-90 transition-transform duration-300 object-top"
                      />
                      {/* Date pill */}
                      <div className="absolute top-0 left-0 z-20 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full text-xs font-medium text-[#01748D] shadow-md backdrop-blur-sm mt-4 ml-4">
                        {interview.date}
                      </div>
                      <div className="relative flex flex-col flex-1 p-6">
                        {/* Content */}
                        <div className="">
                          <h2 className="text-lg font-bold text-gray-800 hover:underline line-clamp-3">
                            {interview.title}
                          </h2>
                          <p className="text-gray-600 mt-2 text-justify line-clamp-3">
                            {interview.description}
                          </p>
                        </div>

                        {/* Button pushed to bottom */}
                        <div className="mt-auto pt-4">
                          <button className="bg-[#2D8CBB] text-white px-4 py-2 rounded-md hover:bg-[#1B6E99] transition">
                            Explore
                          </button>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 border-0 bg-[#ffe590] border-[#001844] text-[#001844] text-xl hover:bg-[#001844]  dark:bg-gray-800/80 dark:hover:bg-gray-800" />
          <CarouselNext className="hidden md:flex -right-12 border-0 bg-[#ffe590] border-[#001844] text-[#001844] text-xl hover:bg-[#001844]  dark:bg-gray-800/80 dark:hover:bg-gray-800" />
        </Carousel>
        <div className="flex justify-center gap-2 mt-8">
          {interviews.map((_: Interview, index: number) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                current === index
                  ? "bg-[#1E60AC] w-6"
                  : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
              )}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>

      <NextButton href="/blog" text="Next" className="bg-[#01748D]" />
    </div>
  );
};

export default InterviewPage;
