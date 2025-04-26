"use client";
import { motion } from "framer-motion";
import BookMarksSectionCard from "@/components/ui/BookMarksSectionCard";

import NextButton from "@/components/Shared/NextButton";
import { SectionTitleWithSub } from "@/components/Shared/SectionTitle/SectionTitle";
import OverviewImage from "@/public/images/resource-bookmark/resource/overview.jpeg";
import EssemtialReadingListImage from "@/public/images/resource-bookmark/resource/essential-reading-list.webp";
import ReportsImage from "@/public/images/resource-bookmark/resource/reports.webp";
import BooksImage from "@/public/images/resource-bookmark/resource/books.webp";
import InterviewInsightsImage from "@/public/images/resource-bookmark/resource/interview-insights.webp";

const resourceData = [
  {
    title: "Overview",
    href: "/resources/overview",
    description:
      "The resource section aspire to be a repository of essential resources on health systems and global health. ",
    Icon: OverviewImage,
  },
  {
    title: "Essential Reading List",
    href: "/resources/essential-reading-list",
    description:
      "Reading preferences and needs vary widely yet certain resources are considered essential for global health professionals. ",
    Icon: EssemtialReadingListImage,
  },
  {
    title: "Reports",
    href: "/resources/reports",
    description:
      "Reports are a fundamental output of interventions and initiatives, serving as a cornerstone for organizations in the global development sector.",
    Icon: ReportsImage,
  },

  {
    title: "Books",
    href: "/resources/books",
    description:
      "The PDF books provided are significant works by renowned public health professionals, offering valuable insights into global health and health systems.",
    Icon: BooksImage,
  },

  {
    title: "Interview and Insights",
    href: "/resources/interview-and-insights",
    description:
      "This section features insightful interviews with global health and development professionals, covering critical issues, scholarly work, leadership, career development, and more. Explore and gain inspiration from their experiences and perspectives.",
    Icon: InterviewInsightsImage,
  },
];

const BookmarksPage = () => {
  return (
    <div className="bg-gradient-to-r from-[#01748D]/10 via-white to-[#01748D]/10 pb-16">
      <SectionTitleWithSub
        title="Resource"
        subTitle="The resource section aspire to be a repository of essential
              resources on health systems and global health."
      />

      {/* Content */}
      <div className="max-w-screen-xl mx-auto pt-8 pb-16 px-12 md:px-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resourceData.map((resource, index) => (
          <motion.div key={index}>
            <BookMarksSectionCard
              title={resource.title}
              description={resource.description}
              href={resource.href}
              Icon={resource.Icon}
            />
          </motion.div>
        ))}
      </div>

      <NextButton href="/bookmarks" text="Next" className="bg-[#01748D]" />
    </div>
  );
};

export default BookmarksPage;
