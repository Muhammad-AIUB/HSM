"use client";
import { SectionTitleWithSub } from "@/components/Shared/SectionTitle/SectionTitle";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import NewsImg from "@/public/images/news-newsletter/News.jpg";
import NewsLetterImg from "@/public/images/news-newsletter/Newsletter.jpg";

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

const NewsAndNewsletterPage = () => {
  const resources = [
    {
      title: "News",
      description:
        "This section features Upcoming Events, which covers key global health conferences, symposiums, webinars, campaigns, and health days. On the other hand, Headline News cover current major global health issues demanding global attention. Meanwhile, the Do You Know highlights significant public health milestones and fascinating facts. Explore a curated list of notable health days and activities focused on global health.",
      image: NewsImg,
      link: "/news",
    },
    {
      title: "Newsletter",
      description:
        "The Health Systems Matter Newsletter provides valuable insights and resources on global health, upcoming events, and career opportunities. Subscribers receive periodic emails, preferably monthly, featuring highlights from our recent social media posts, new blogs, interviews, and more. The newsletter also covers significant global health topics and news from around the world, keeping you updated and informed.",
      image: NewsLetterImg,
      link: "/newsletter",
    },
  ];

  return (
    <div className="pb-16">
      <SectionTitleWithSub
        title="News and Newsletter"
        subTitle="Visit the news section to stay informed about upcoming global
              health events and subscribe to our periodic newsletter for regular
              updates on public health issues."
      />
      <div className="flex flex-col max-w-screen-xl mx-auto">
        <div className="max-w-screen-xl py-8 mx-auto px-12 md:px-16">
          <motion.div
            className="flex gap-8 flex-col lg:flex-row"
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

export default NewsAndNewsletterPage;
