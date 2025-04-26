"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaNewspaper } from "react-icons/fa";

import HumansOfIHSImg from "@/public/images/sizear/articles/humans-of-ihs.png";
import StudyInPandemicImg from "@/public/images/sizear/articles/studying-in-pandamic.jpg";
import CitySeminarImg from "@/public/images/sizear/articles/the-city-seminar.png";

const mediaFeatures = [
  {
    title:
      "স্বাস্থ্য সুরক্ষা ২০২৪: স্বপ্ন, সম্পৃক্ততা ও সম্ভাবনা | PHA সুরক্ষায় প্রতিদিন",
    date: "১৫ ডিসেম্বর ২০২৪",
    platform: "Channel 24",
    videoUrl: "https://www.youtube.com/embed/DTiSnuDqUJY",
  },
  {
    title: "সব মানুষের স্বাস্থ্যসেবা; লক্ষ্যপানে কতদূর? | সুরক্ষায় প্রতিদিন",
    date: "১২ ডিসেম্বর ২০২৪",
    platform: "Channel 24",
    videoUrl: "https://www.youtube.com/embed/4J1QXstO1RI",
  },
  {
    title: "My First Book Experience at Rokomari",
    date: "08 March 2022",
    platform: "YouTube",
    videoUrl: "https://www.youtube.com/embed/lHh4jjgvW3M?si=TCjO3ut1xAirlIid",
  },
];

const articles = [
  {
    title: "Humans of IHS: Monaemul Islam Sizear",
    image: HumansOfIHSImg,
    date: "University Blog | 28 January 2021",
    link: "https://www.ihs.nl/en/news/humans-ihs-monaemul-islam-sizear",
  },
  {
    title: "Studying in a Pandemic",
    date: "University Blog | 28 January 2021",
    link: "https://www.ihs.nl/en/news/studying-pandemic",
    image: StudyInPandemicImg,
  },
  {
    title:
      "The City Seminar of the ITP on Sustainable Urban Water and Sanitation (SUWAS)",
    date: "WaterAid Blog | 08 November 2018",
    link: "https://www.wateraid.org/bd/media/the-city-seminar-of-the-international-training-programme-itp-on-sustainable-urban-water-and",
    image: CitySeminarImg,
  },
];

const MediaFeatures = () => {
  return (
    <div className="py-16 bg-gradient-to-r bg-[#E2E4F0] px-16 ">
      <div className="rounded-md shadow-sm mx-auto max-w-6xl">
        <h3 className="text-2xl md:text-2xl font-bold underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#FFCE00] pb-4">
          Media Features and Presence
        </h3>

        <p className="text-black text-[17px] text-justify">
          I have an established media presence, particularly in Bangladesh,
          where I address topics such as public health, conferences, leadership,
          the debate movement, and career development. I also facilitate events
          and sessions aimed at supporting early-career professionals.
        </p>

        <p className="mt-2 mb-6 text-black text-[17px] text-justify">
          Below are some key highlights showcasing my appearances across various
          media outlets and platforms, with a focus on my academic and
          professional expertise.
        </p>

        {/* YouTube Videos */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {mediaFeatures.map((media, index) => (
            <motion.div
              key={index}
              className={`bg-white shadow-sm rounded-md overflow-hidden border-l-4 border-blue-500 p-4 transition-all duration-300 
        ${
          mediaFeatures.length % 2 === 1 && index === mediaFeatures.length - 1
            ? "md:col-span-2 md:mx-auto md:w-1/2"
            : ""
        }
      `}
            >
              <iframe
                className="w-full h-56 rounded-md hover:scale-105 transition-all duration-300"
                src={media.videoUrl}
                title={media.title}
                allowFullScreen
              ></iframe>
              <div className="mt-3">
                <h4 className="text-lg font-semibold text-gray-900 hover:underline">
                  <a
                    href={media.videoUrl.replace("embed/", "watch?v=")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {media.title}
                  </a>
                </h4>
                <p className="text-sm text-gray-600">
                  {media.date} | {media.platform}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Blog & News Links */}
        <div className="mt-12">
          <motion.div
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {articles.map((article, index) => (
              <a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center space-x-3 bg-white shadow-sm rounded-md border-l-4 border-blue-500 hover:bg-blue-50 transition-all duration-300 gap-4 overflow-hidden h-full
          ${
            articles.length % 2 === 1 && index === articles.length - 1
              ? "md:col-span-2 md:mx-auto md:w-1/2"
              : ""
          }
        `}
              >
                {article.image ? (
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={500}
                    height={300}
                    className="h-56 object-cover brightness-90 hover:scale-105 hover:brightness-100 transition-transform transform duration-300 ease-in-out cursor-pointer w-full"
                  />
                ) : (
                  <div className="h-56"></div>
                )}

                <div className="flex gap-4 items-center mb-4 w-full">
                  <FaNewspaper className="text-blue-500 text-xl w-12 shrink-0" />
                  <div>
                    <h5 className="text-md font-semibold text-gray-900 hover:underline">
                      {article.title}
                    </h5>
                    <p className="text-sm text-gray-600">{article.date}</p>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MediaFeatures;
