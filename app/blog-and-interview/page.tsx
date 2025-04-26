"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import BlogImage from "@/public/images/blog-interview/blog.webp";
import InterviewImage from "@/public/images/blog-interview/interviw-homepage.webp";

interface CardProps {
  title: string;
  description: string;
  image: StaticImageData;
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
        className="w-full md:w-1/3 relative hover:scale-110 transition-all duration-300 ease-in-out"
      >
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          width={500}
          height={500}
        />
      </Link>

      {/* Content Section (Right) */}
      <Link
        href={link}
        className="w-full md:w-2/3 p-6 flex flex-col justify-center"
      >
        <h2 className="text-2xl font-semibold mb-2 hover:underline text-[#001844]">
          {title}
        </h2>
        <p className="text-[15px] mb-4 text-justify">{description}</p>

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

const BlogAndInterviewPage = () => {
  const resources = [
    {
      title: "Interview",
      description:
        "The interview section showcases the journeys and insights of global health advocates, highlighting their impactful experiences and perspectives.",
      image: InterviewImage,
      link: "/interview",
    },
    {
      title: "Blog",
      description:
        "The blog covers diverse global health topics, offering thoughtful analysis from public health professionals through a health systems perspective.",
      image: BlogImage,
      link: "/blog",
    },
  ];

  return (
    <div className="pb-20">
      <div className="relative w-full h-auto">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-16 py-3 gap-4 md:gap-6">
            <h1
              className="text-2xl md:text-[30px] uppercase font-[700] text-[#001844] lg:shrink-0"
              style={{ wordSpacing: "0.4rem" }}
            >
              Interview and Blog
            </h1>
            <p className="text-md text-black font-medium text-center md:text-justify max-w-3xl w-full md:w-auto">
              The <span className="font-bold">interview</span> section showcases
              the journeys and insights of global health advocates, highlighting
              their impactful experiences and perspectives. The{" "}
              <span className="font-bold">blog</span> covers diverse global
              health topics, offering thoughtful analysis from public health
              professionals through a health systems perspective.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-screen-xl mx-auto mt-6">
        <div className="max-w-screen-xl mx-auto px-12 md:px-16 min-h-[calc(90vh-230px)] flex items-center justify-center ">
          <motion.div
            className="flex gap-8 flex-col md:flex-row"
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
    </div>
  );
};

export default BlogAndInterviewPage;
