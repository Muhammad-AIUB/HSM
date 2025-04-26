"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Link from "next/link";

// Images
import AboutHSMImage from "@/public/images/about/about-hsm.jpg";
import MissionImage from "@/public/images/about/our-mission.jpg";

import ApproachImage from "@/public/images/about/activities-approach.png";
import WhyHsmImg from "@/public/images/about/why-hsm.jpg";

export default function AboutSection() {
  const resources = [
    {
      title: "About HSM",
      description:
        "“Information is power” and “Evidence lies at the heart of public health policy.”",
      image: AboutHSMImage,
      link: "/about/about-hsm",
    },
    {
      title: "Vision and Mission",
      description:
        "The vision of Health Systems Matter is to create an evidence-based platform that empowers emerging public health professionals to become informed and confident global health advocates, dedicated to promoting public health issues and contributing to global health.",
      image: MissionImage,
      link: "/about/vision-and-mission",
    },
    {
      title: "Activities and Approach",
      description:
        "In order to be aligned with the vision and mission of Health Systems Matter, the specific activities are as follows",
      image: ApproachImage,
      link: "/about/activities-and-approach",
    },
    {
      title: "Why HSM",
      description:
        "Q1: What inspired the establishment of Health Systems Matter, and what is its foundational background?",
      image: WhyHsmImg,
      link: "/about/why-health-systems-matter",
    },
  ];

  return (
    <>
      <section className="relative bg-[#C1E2E5]   bg-cover bg-center bg-no-repeat py-10 md:py-[68px] sm:px-8 flex items-center justify-center">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-between mb-8 px-4 md:px-12">
            <SectionTitle
              title="ABOUT"
              subTitle="HSM is a resource hub, offering evidence-based insights, expert knowledge, global events and career opportunities."
              href="/about"
            />
          </div>
          <div className="mx-auto">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-10"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {resources.map((resource, index) => (
                <Card
                  key={index}
                  title={resource.title}
                  description={resource.description}
                  image={resource.image}
                  link={resource.link}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

interface CardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  link: string;
  index: number;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  link,
  index,
}) => {
  return (
    <Link href={link} className="">
      <motion.div
        className="relative w-full h-60 overflow-hidden cursor-pointer group bg-white "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        <Image
          src={image}
          alt={title}
          // layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full"
        />
        <div className="absolute inset-0 transition-opacity duration-300 w-full" />
        <div className="absolute bottom-0 p-6 bg-[#001844]/90 text-white transition-all duration-500 h-28 group-hover:h-full w-full">
          <div className="">
            <h2 className="text-xl font-bold">{title}</h2>
            <p
              className={`text-base mt-4 text-gray-300 transition-opacity duration-300 opacity-0 group-hover:opacity-100`}
            >
              {description}
            </p>
            <div className="absolute bottom-4 right-4 flex items-center text-blue-400 hover:text-blue-300">
              <Button className="mt-auto text-base flex bg-[#FFCE00] text-black hover:text-white hover:bg-[#001844] hover:border hover:border-[#FFCE00]">
                Explore
                <ArrowRight className="size-4 hover:text-white" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
