"use client";

import { motion } from "framer-motion";

import BookMarksSectionCard from "@/components/ui/BookMarksSectionCard";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";

import RecordedInterviewImage from "@/public/images/resource-bookmark/resource/recorded-interviews.jpg";
import WrittenInterviewImage from "@/public/images/resource-bookmark/resource/written-interviews.jpg";
import Link from "next/link";

const bookmarksData = [
  {
    title: "Recorded Interviews",
    href: "/resources/interview-and-insights/recorded-interviews",
    description: "",
    Icon: RecordedInterviewImage,
  },
  {
    title: "Written Interviews",
    href: "/resources/interview-and-insights/written-interviews",
    description: "",
    Icon: WrittenInterviewImage,
  },
];

const InterviewInsights = () => {
  return (
    <div className="bg-gray-50 pb-10">
      <SectionTitleWithoutSub title="Interview and Insights" />

      <div className="max-w-screen-xl mx-auto px-12 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="flex-1 md:col-span-2">
          <p className="text-lg max-w-4xl mx-auto mt-4 md:text-xl leading-relaxed text-black font-light mb-6 text-justify">
            This section features insightful interviews with global health and
            development professionals, covering critical issues, scholarly work,
            leadership, career development, and more. Explore and gain
            inspiration from their experiences and perspectives.
          </p>

          {/* general and topic wise reports */}

          <div className="max-w-screen-lg mx-auto pt-8 pb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {bookmarksData.map((bookmark, index) => (
              <motion.div
                key={index}
                // variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Adjusts when animation triggers
                transition={{ duration: 0.2, delay: index * 0.1 }} // Staggered effect
              >
                <BookMarksSectionCard
                  title={bookmark.title}
                  description={bookmark.description}
                  href={bookmark.href}
                  Icon={bookmark.Icon}
                />
              </motion.div>
            ))}
          </div>

        </div>

          {/* Right Featured Resources Section */}
          <div className="mt-6">
          <FeaturedResources />
          </div>
      </div>
    </div>
  );
};

export default InterviewInsights;

const FeaturedResources = function () {
  return (
    <div className="bg-[#6BCBD5] p-5 rounded-lg border border-gray-200 shadow-md w-full max-w-md self-start">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Featured Resources
      </h2>
      <ul className="space-y-1">
        <li>
          <Link
            href="/resources/essential-reading-list"
            className="flex items-center p-3 border rounded-md bg-white hover:bg-gray-100 transition group"
          >
            <span className="text-xl text-blue-700 group-hover:text-[#F18A00]">
              📖
            </span>
            <span className="ml-3 text-base text-gray-800 font-medium group-hover:underline group-hover:text-[#F18A00]">
              Essential Reading List
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/resources/reports"
            className="flex items-center p-3 border rounded-md bg-white hover:bg-gray-100 transition group"
          >
            <span className="text-xl text-blue-700 group-hover:text-[#F18A00]">
              📑
            </span>
            <span className="ml-3 text-base text-gray-800 font-medium group-hover:underline group-hover:text-[#F18A00]">
              Reports
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/resources/books"
            className="flex items-center p-3 border rounded-md bg-white hover:bg-gray-100 transition group"
          >
            <span className="text-xl text-blue-700 group-hover:text-[#F18A00]">
              📚
            </span>
            <span className="ml-3 text-base text-gray-800 font-medium group-hover:underline group-hover:text-[#F18A00]">
              Books
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/resources/interview-and-insights"
            className="flex items-center p-3 border rounded-md bg-white hover:bg-gray-100 transition group"
          >
            <span className="text-xl text-blue-700 group-hover:text-[#F18A00]">
              🎙️
            </span>
            <span className="ml-3 text-base text-gray-800 font-medium group-hover:underline group-hover:text-[#F18A00]">
              Interview and Insights
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

