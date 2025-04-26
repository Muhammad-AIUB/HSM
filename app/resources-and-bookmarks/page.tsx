"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ResourceImage from "@/public/images/resource-bookmark/resourse-homepage.jpg";
import BookmarkImage from "@/public/images/resource-bookmark/bookmark.webp";
import { SectionTitleWithSub } from "@/components/Shared/SectionTitle/SectionTitle";

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
        <Image src={image} alt={title} className="w-full h-full object-cover" />
      </Link>

      {/* Content Section (Right) */}
      <Link
        href={link}
        className="w-full md:w-2/3 p-6 flex flex-col justify-center"
      >
        <h2 className="text-2xl font-semibold mb-2 hover:underline text-[#001844]">
          {title}
        </h2>
        <p className="text-base mb-4 line-clamp-3 text-justify">
          {description}
        </p>

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

const ResourcesAndBookmarksPage = () => {
  const resources = [
    {
      title: "Resource",
      description:
        "The Resources section aspire to be a repository of essential resources on health systems and global health.",
      image: ResourceImage,
      link: "/resources",
    },
    {
      title: "Bookmark",
      description:
        "The Global Health Bookmarks section indicates the resources either document, entities, courses, career, podcast and so on pertained with the global health and health systems are covered.",
      image: BookmarkImage,
      link: "/bookmarks",
    },
  ];

  return (
    <div className="pb-16">
      <SectionTitleWithSub
        title="RESOURCE AND BOOKMARK"
        subTitle="Explore the comprehensive resource hub to supercharge your
              knowledge and complement your rewarding career journey. The
              Resource section lets you download valuable materials with a
              single click, while the Bookmarks section connects you to useful
              contents and tools crucial for professional success."
      />

      <div className=" flex flex-col max-w-screen-xl mx-auto">
        <div className="max-w-screen-xl py-16 mx-auto px-12 md:px-16">
          <motion.div
            className="grid gap-4 grid-cols-1 md:grid-cols-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
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

export default ResourcesAndBookmarksPage;
