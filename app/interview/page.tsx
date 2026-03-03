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
import React, { useEffect, useState } from "react";

import DrMadhukarPaiImg from "@/public/images/blog-interview/interview/madhukar.jpg";
import SharmeenYasmeenImg from "@/public/images/blog-interview/interview/Sharmeen Yasmeen.jpg";
import SyedMasudImg from "@/public/images/blog-interview/interview/Syed_Masud_Ahmed_Photo.jpg";
import DrZarifImg from "@/public/images/blog-interview/interview/Zarif-Rasul.jpg";

import DrTaufiqueImg from "@/public/images/blog-interview/interview/DrTaufique.jpg";

import IstiakMannan from "@/public/images/blog-interview/interview/istiak-mannan-cover-i.jpg";
// import BarbaraGastelImg from "@/public/images/blog-interview/interview/barbara-gastel-clean.jpg";

interface Interview {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string | StaticImageData;
  slug: string;
}

const interviews = [
  {
    id: 21,
    title:
      "Finding Purpose in Climate Action: Dr. Khalid Hossain's Career Journey from Bangladesh to Australia",
    date: "January 1, 2026",
    description:
      "Dr. Md Khalid Hossain, Researcher & Academician at Monash University, shares insights on climate resilience, digital transformation, and community-centered health systems.",
    image: "/images/blog-interview/interview/Md Khalid Hossain.jpg",
    slug: "finding-purpose-in-climate-action-dr-khalid-hossains-career-journey-from-bangladesh-to-australia",
  },
  {
    id: 22,
    title:
      "In Conversation with Dr. Sabina Faiz Rashid: Insights from a Medical Anthropologist and Global Health Researcher",
    date: "January 22, 2026",
    description:
      "Dr. Sabina Faiz Rashid, BRAC University: medical anthropologist focusing on gender, urban health, and participatory research.",
    image: "/images/blog-interview/interview/Sabina Faiz Rashid.jpg",
    slug: "in-conversation-with-dr-sabina-faiz-rashid",
  },
  {
    id: 20,
    title:
      "In Conversation with Prof. Jahangir Khan: Global Health Economist and Researcher",
    date: "December 20, 2025",
    description:
      "Prof. Dr. Jahangir Khan, Health Economist & Academician at the University of Gothenburg, shares insights on health financing, Universal Health Coverage, and essential skills for future health economists.",
    image: "/images/blog-interview/interview/JAHANGIR KHAN.jpeg",
    slug: "in-conversation-with-prof-jahangir-khan-global-health-economist-and-researcher",
  },
  {
    id: 10,
    title:
      "Leading with Heart and Purpose: A Grounded Conversation with Almeer Ahsan",
    date: "July 17, 2025",
    description:
      "Almeer Ahsan shares his journey, leadership philosophy, and insights from a decade in global development.",
    image: "/images/blog-interview/interview/almeer-ahsan.jpg.jpg",
    slug: "leading-with-heart-and-purpose-almeer-ahsan",
  },
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
  {
    id: 7,
    title:
      "From Clinician to Global Health Scholar: An Interview with Dr. Mohit Chowdhury",
    date: "June 24, 2025",
    description:
      "Dr. Mohit Chowdhury shares his journey from clinical practice to global health scholarship, his mentors, and his vision for the next generation of public health leaders.",
    image:
      "/images/blog-interview/interview/392b80ff-42c9-4833-92e0-19db46e0f028.jpeg",
    slug: "from-clinician-to-global-health-scholar",
  },
  {
    id: 8,
    title:
      "Global Health Financing and Career Questions: An Interview with Dr. Saba Waseem",
    date: "July 05, 2025",
    description:
      "Dr. Saba Waseem, Development Economist and Global Health System Strengthening Expert, shares insights on sustainable financing and career development in global health.",
    image: "/images/blog-interview/interview/saba-waseem.jpg",
    slug: "global-health-financing-expert",
  },
  {
    id: 9,
    title:
      "From Services to Systems: Dr. Arefin Islam's Insights for Public Health Solutions",
    date: "July 10, 2025",
    description:
      "Dr. Arefin Islam, A Global Health Expert and Co-Country Director at Noora Health, shares insights on maternal and child health, health systems strengthening, and career guidance for public health professionals.",
    image: "/images/blog-interview/interview/arefin-islam.jpg",
    slug: "global-health-expert-and-co-country-director",
  },
  {
    id: 11,
    title:
      "Alex Berland on Elevating Nursing Education and Building a Global Health Career",
    date: "July 31, 2025",
    description:
      "Alex Berland, Global Health and Nursing Education Specialist, shares insights on nursing education in Bangladesh and building a global career in nursing.",
    image: "/images/blog-interview/interview/Alex_2400px.jpg",
    slug: "alex-berland-on-elevating-nursing-education",
  },
  {
    id: 12,
    title:
      "Chris Welch, A Global Health Operations Expert & Project Management Specialist",
    date: "September 02, 2025",
    description:
      "Chris Welch shares insights on global health operations, project management, and leadership lessons from nearly 30 years of experience working across 15 countries.",
    image: "/images/blog-interview/cris1.jpg",
    slug: "chris-welch-global-health-operations-expert",
  },
  {
    id: 13,
    title:
      "Global Health Conversation with Dr. Rajat Das Gupta: A Clinical Research Epidemiologist",
    date: "September 23, 2025",
    description:
      "Dr. Rajat Das Gupta, Postdoctoral Research Fellow at Vanderbilt University Medical Center, shares insights on cancer epidemiology, global health research, and evidence-based interventions for health challenges in Bangladesh.",
    image: "/images/blog-interview/interview/Rajat Das Gupta_card.jpg",
    slug: "global-health-conversation-with-rajat-das-gupta",
  },
  {
    id: 14,
    title:
      "In Conversation with Dr. Nazmul Huda: Insights from A Global Health Manager and Academic",
    date: "October 05, 2025",
    description:
      "Professor Sk Nazmul Huda shares his extensive experience in global health management, including his groundbreaking work on female genital fistula care, breastfeeding protection, and innovative community health initiatives across Bangladesh and Africa.",
    image: "/images/blog-interview/interview/nazmul.jpg",
    slug: "in-conversation-with-dr-nazmul-huda",
  },
  {
    id: 15,
    title:
      "Prof. Barbara Gastel on Biomedical Writing, Storytelling, and Health Communication: A Thoughtful Exchange",
    date: "October 10, 2025",
    description:
      "Dr. Barbara Gastel, Academician and Passionate Health Writer, shares insights on biomedical writing, health communication, and the evolving landscape of science writing in the age of artificial intelligence.",
    image:
      "/images/blog-interview/interview/Headshot_Barbara Gastel_June 2022.jpg",
    slug: "prof-barbara-gastel-biomedical-writing-storytelling-health-communication",
  },
  {
    id: 16,
    title:
      "Bridging Research and Activism in Global Health: A Dialogue with Dr. Prima Alam",
    date: "October 24, 2025",
    description:
      "Dr. Prima Alam, Co-Founder and Director at RDA Labs, shares insights on bridging research and activism in global health, leadership lessons, and creating spaces for collective curiosity.",
    image: "/images/blog-interview/interview/Prima.jpg",
    slug: "bridging-research-and-activism-in-global-health",
  },
  {
    id: 17,
    title:
      "Deep Conversation with Dr. Tasdik Hasan: Emerging Voice in Global Mental Health",
    date: "October 31, 2025",
    description:
      "Dr. Tasdik Hasan, PhD Teaching Fellow at Monash University, shares insights on digital mental health innovation, Deaf community mental health, and building a global career in mental health research.",
    image: "/images/blog-interview/interview/tasdik.jpg",
    slug: "deep-conversation-with-dr-tasdik-hasan",
  },
  {
    id: 18,
    title:
      "Implementing Global Health: A Conversation with Dr. Samina Choudhury",
    date: "November 9, 2025",
    description:
      "Dr. Samina Choudhury, A Global Health Manager, shares insights on implementing global health programs, working with the Ministry of Health and Family Welfare in Bangladesh, and essential skills for the next generation of global health leaders.",
    image: "/images/blog-interview/interview/samina.jpg",
    slug: "implementing-global-health-dr-samina-choudhury",
  },
  {
    id: 19,
    title: "Exploring Global Health and Cancer Research with Dr. Jabed Iqbal",
    date: "November 28, 2025",
    description:
      "Dr. Jabed Iqbal – Global Health Academic and Cancer Researcher shares insights on cancer research, global health disparities, and his work on Project ABCD to establish molecular testing capabilities in Bangladesh.",
    image: "/images/blog-interview/interview/javed.jpeg",
    slug: "exploring-global-health-and-cancer-research-with-dr-javed-iqbal",
  },
  {
    id: 23,
    title:
      "In Conversation with Dr. Luchuo Engelbert Bain: Insights from A Global Health Leader",
    date: "February 04, 2026",
    description:
      "Dr. Luchuo Engelbert Bain, Global Health Activist & Researcher, discusses decolonization of global health, AMR surveillance, SRHR, and leadership skills for the next generation.",
    image: "/images/blog-interview/interview/dr_luchuo.jpg",
    slug: "in-conversation-with-dr-luchuo-engelbert-bain",
  },
  {
    id: 24,
    title:
      "Exploring Impact in Global Health: Conversation with Dr. Malabika Sarker on Implementation Research and Career",
    date: "March 06, 2026",
    description:
      "Dr. Malabika Sarker, an implementation scientist at Brown University, shares insights on implementation research, mentoring young professionals, and strengthening primary health care.",
    image: "/images/blog-interview/interview/IMG_0823.jpeg",
    slug: "exploring-impact-in-global-health-conversation-with-dr-malabika-sarker",
  },
];

const InterviewPage = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Sort interviews by date ascending
  const sortedInterviews = [...interviews].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA.getTime() - dateB.getTime();
  });

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
            {sortedInterviews.map((interview, index) => (
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
                      {interview.slug ===
                      "global-health-expert-and-co-country-director" ? (
                        <Image
                          src={interview.image}
                          alt={interview.title}
                          width={500}
                          height={400}
                          className="w-full h-72 object-contain bg-[#f3f3f3] hover:scale-105 hover:opacity-90 transition-transform duration-300 object-top"
                        />
                      ) : interview.slug ===
                        "alex-berland-on-elevating-nursing-education" ? (
                        <Image
                          src={interview.image}
                          alt={interview.title}
                          width={500}
                          height={300}
                          className="w-full h-56 object-cover hover:scale-105 hover:opacity-90 transition-transform duration-300 object-center"
                        />
                      ) : interview.slug ===
                        "chris-welch-global-health-operations-expert" ? (
                        <Image
                          src={interview.image}
                          alt={interview.title}
                          width={500}
                          height={300}
                          className="w-full h-56 object-cover hover:scale-105 hover:opacity-90 transition-transform duration-300"
                          style={{ objectPosition: "center 20%" }}
                        />
                      ) : interview.slug ===
                        "prof-barbara-gastel-biomedical-writing-storytelling-health-communication" ? (
                        <Image
                          src={interview.image}
                          alt={interview.title}
                          width={500}
                          height={300}
                          className="w-full h-56 object-cover hover:scale-105 hover:opacity-90 transition-transform duration-300"
                          style={{ objectPosition: "center 5%" }}
                        />
                      ) : interview.slug ===
                        "leading-with-heart-and-purpose-almeer-ahsan" ? (
                        <Image
                          src={interview.image}
                          alt={interview.title}
                          width={500}
                          height={300}
                          className="w-full h-56 object-cover hover:scale-105 hover:opacity-90 transition-transform duration-300"
                          style={{ objectPosition: "center 30%" }}
                        />
                      ) : (
                        <Image
                          src={interview.image}
                          alt={interview.title}
                          width={500}
                          height={300}
                          className="w-full h-56 object-cover object-center hover:scale-105 hover:opacity-90 transition-transform duration-300"
                        />
                      )}
                      {/* Date pill */}
                      <div className="absolute top-0 left-0 z-20 bg-[#EF4444] px-3 py-1 rounded-full text-xs font-medium text-white shadow-md backdrop-blur-sm mt-4 ml-4">
                        {interview.date}
                      </div>
                      {/* Serial number pill */}
                      <div className="absolute top-0 right-0 z-20 bg-[#FFCE00] px-3 py-1 rounded-full text-xs font-medium text-black shadow-md backdrop-blur-sm mt-4 mr-4">
                        Interview #{(index + 1).toString().padStart(2, "0")}
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
          {sortedInterviews.map((_: Interview, index: number) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                current === index
                  ? "bg-[#1E60AC] w-6"
                  : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600",
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
