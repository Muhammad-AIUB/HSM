"use client";
import { useState, useEffect } from "react";

import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { FaLinkedin } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

import ZarifImg from "@/public/images/testimonial/Zarif.jpeg";
import YemeImg from "@/public/images/testimonial/Yemi.jpg";
import IffatImg from "@/public/images/testimonial/Iffat.jpg";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      name: "Dr. Zarif Rasul",
      link: "https://www.linkedin.com/in/zarif-rasul/",
      title: "Water Specialist",
      company: "World Bank",
      content:
        "For someone not directly involved with the health sector, Health System Matters is a great platform to stay updated on major policies and other developments in the sector. I particularly enjoy learning about leading experts and their contributions. This is an excellent resource for anyone working in the policy and development space.",
      image: ZarifImg,
    },
    {
      name: "Yemelaknesh Wolde",
      link: "https://www.linkedin.com/in/yemelaknesh-yemi-wolde-md-msc-a3143b45/",
      title: "Health Financing and Systems Strengthening Expert",
      // company: "Open Development",
      content:
        "Health Systems Matter is a dynamic platform that empowers global health professionals with access to curated knowledge, career opportunities, and capacity-building initiatives. By providing timely resources and actionable insights, it creates a space for professionals to grow, collaborate, and drive meaningful change in public health.",
      image: YemeImg,
    },
    {
      name: "Dr. Iffat Ara Begum",
      link: "https://www.linkedin.com/in/dr-iffat-ara-begum-a19a3b20b/",
      title: "Public Health Surveillance Officer, Jhpiego",
      // company: "Open Development",
      content:
        "As a young professional in global health, I find Health Systems Matter to be an invaluable platform to learn about the development sector, health systems strengthening, and policy innovations. It’s a great space to access curated knowledge, stay inspired by sector leaders, and grow professionally.",
      image: IffatImg,
    },
  ];

  const [api, setApi] = useState<any>(null);
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
    <div className="bg-[#E2E4F0] to-white py-16 px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row gap-5 items-center w-full  px-4 md:px-12">
          <div className="flex gap-4 items-center ">
            <Link
              href="/testimonials"
              className="text-[30px] font-[700] text-[#001844] whitespace-nowrap"
            >
              <h2 className="text-center sm:text-left">TESTIMONIALS</h2>
            </Link>
            <Separator
              orientation="vertical"
              className="h-24 w-1 bg-[#FFCE00] hidden md:block"
            />
          </div>

          <p className="text-lg sm:text-[20px] text-[#001844] text-justify">
            Users have shared their experiences, underscoring the value of the
            Health Systems Matter platform. We are truly honored to receive such
            positive feedback and extend our heartfelt gratitude to everyone who
            has shared their appreciation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-4 px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
                stopOnFocusIn: true,
              }),
            ]}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="-ml-2 md:-ml-4 pb-10">
              {testimonials.map((testimonial: any, index: number) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2 pt-1 pb-4"
                >
                  <div className="h-full">
                    <Card className="bg-[#6BCBD5]/50 hover:bg-[#6BCBD5] dark:bg-gray-800  transition-all duration-300 h-full hover:scale-[1.01] dark:shadow-gray-900/30">
                      <CardContent className="p-8 h-full flex flex-col">
                        {/* Profile Image */}
                        <div className="flex items-center gap-4 mb-6">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={100}
                            height={100}
                            className="w-28 h-28 rounded-full border-2 border-[#FFCE00]"
                          />
                          <div>
                            <Link
                              href={testimonial.link}
                              className="font-semibold text-gray-900 dark:text-white text-xl hover:underline"
                            >
                              {testimonial.name}
                            </Link>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {testimonial.title}
                            </div>
                            <div className="text-sm text-primary font-medium">
                              {testimonial.company}
                            </div>
                            <Link
                              href={testimonial.link}
                              className="text-sm font-medium cursor-pointer"
                            >
                              <FaLinkedin className="w-5 h-5" />
                            </Link>
                          </div>
                        </div>

                        <blockquote className="mb-6 text-gray-700 dark:text-gray-300 flex-grow text-justify">
                          <span className="text-5xl font-bold font-space-grotesk rotate-180 inline-block mr-2 relative mt-2 -top-2">
                            "
                          </span>
                          {testimonial.content}{" "}
                          <span className="relative">
                            <span className="text-5xl font-bold font-space-grotesk inline-block absolute ml-2 top-2">
                              "
                            </span>
                          </span>
                        </blockquote>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-10 border-0 bg-[#ffe590] border-[#001844] text-[#001844] text-xl hover:bg-[#001844]  dark:bg-gray-800/80 dark:hover:bg-gray-800" />
            <CarouselNext className="hidden md:flex  border-0 bg-[#ffe590] border-[#001844] text-[#001844] text-xl hover:bg-[#001844]  dark:bg-gray-800/80 dark:hover:bg-gray-800" />
          </Carousel>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_: any, index: number) => (
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
      </div>
    </div>
  );
}
