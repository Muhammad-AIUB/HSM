"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import AboutHSMImage from "@/public/images/about/about-hsm.jpg";
import MissionImage from "@/public/images/about/our-mission.jpg";

import ApproachImage from "@/public/images/about/activities-approach.png";
import WhyHsmImg from "@/public/images/about/why-hsm.jpg";
import { SectionTitleWithSub } from "@/components/Shared/SectionTitle/SectionTitle";

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
    <motion.div
      className="relative w-full flex flex-col md:flex-row bg-white shadow-lg overflow-hidden transition-transform transform border hover:scale-105 hover:border-r-4 hover:border-b-4 border-[#2D8CBB] hover:shadow-md duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Image Section (Left) */}
      <Link
        href={link}
        className="w-full md:w-[50%] relative hover:scale-110 transition-all duration-300 ease-in-out block"
      >
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-contain"
          width={500}
          height={400}
        />
      </Link>

      {/* Content Section (Right) */}
      <Link
        href={link}
        className="w-full md:w-2/3 p-6 flex flex-col justify-center text-gray-800"
      >
        <h2 className="text-2xl font-semibold mb-2 hover:underline">{title}</h2>
        <p className="text-sm text-gray-600 mb-4 text-justify">{description}</p>

        {/* Explore Button */}
        <div className="inline-flex justify-end items-center text-blue-600 hover:text-blue-500">
          <Button className="text-base flex bg-[#FFCE00] text-black hover:bg-[#2D8CBB] hover:text-white">
            Explore
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </div>
      </Link>
    </motion.div>
  );
};

const AboutPage = () => {
  const resources = [
    {
      title: "About HSM",
      description:
        "“Information is power” and “Evidence lies at the heart of public health policy.” Inspired by the principles of valuing information and evidence, Health Systems Matter (HSM) offers essential resources on health systems, public health events, and career opportunities. HSM serves as an independent, comprehensive global health resource, providing updates on public health issues and career opportunities. The site hunts crucial reports, current information, and scholarly articles from global entities, ensuring proper referencing. ",
      image: AboutHSMImage,
      link: "/about/about-hsm",
    },
    {
      title: "Vision & Mission",
      description:
        "The vision of Health Systems Matter is to create an evidence-based platform that empowers emerging public health professionals to become informed and confident global health advocates, dedicated to promoting public health issues and contributing to global health.",
      image: MissionImage,
      link: "/about/vision-and-mission",
    },
    {
      title: "Activities & Approach",
      description:
        "Showcasing health systems and global health documents daily. Generating and regenerating demand for impactful documents. Disseminating major public health events and milestones. Promoting pages and events focused on health systems and global health. Introducing individuals in the health systems field dedicated to enhancing global health. Highlighting organizations working on public health agendas.",
      image: ApproachImage,
      link: "/about/activities-and-approach",
    },
    {
      title: "Why HSM",
      description:
        "Q1: What inspired the establishment of Health Systems Matter, and what is its foundational background? Sizear: Two key factors inspired me to create the HSM knowledge platform. First, early in my career in public health, I faced significant challenges in accessing relevant documents on the Bangladesh health system. Understanding its complexities and gaining a comprehensive overview was difficult due to the absence of a centralized resource. This experience underscored the need for a dedicated platform that systematically compiles both local and global health system insights. Recognizing this gap, I envisioned HSM as a continuously updated resource hub, ensuring professionals have easy access to the latest records in a welldocumented manner. ",
      image: WhyHsmImg,
      link: "/about/why-health-systems-matter",
    },
  ];

  return (
    <div className=" bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <SectionTitleWithSub
        title="About"
        subTitle="HSM is a resource hub, offering evidence-based insights, expert
              knowledge, global events, and career opportunities."
      />

      {/* New Left Image - Right Content Layout */}
      <div className="max-w-6xl py-8 mx-auto px-12 md:px-16">
        <motion.div
          className="flex flex-col gap-8"
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
  );
};

export default AboutPage;
