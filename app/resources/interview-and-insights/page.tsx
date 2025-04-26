"use client";

import { motion } from "framer-motion";

import BookMarksSectionCard from "@/components/ui/BookMarksSectionCard";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";

import RecordedInterviewImage from "@/public/images/resource-bookmark/resource/recorded-interviews.jpg";
import WrittenInterviewImage from "@/public/images/resource-bookmark/resource/written-interviews.jpg";

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

      <div className="max-w-screen-xl mx-auto px-12 md:px-16 flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <p className="text-lg max-w-4xl mx-auto mt-4 md:text-xl leading-relaxed text-black font-light mb-6 text-justify">
            This section features insightful interviews with global health and
            development professionals, covering critical issues, scholarly work,
            leadership, career development, and more. Explore and gain
            inspiration from their experiences and perspectives.
          </p>

          {/* general and topic wise reports */}

          <div className="max-w-screen-lg mx-auto pt-8 pb-16 md:px-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
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
      </div>
    </div>
  );
};

export default InterviewInsights;
