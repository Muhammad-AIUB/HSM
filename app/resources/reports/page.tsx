"use client";

import { motion } from "framer-motion";

import BookMarksSectionCard from "@/components/ui/BookMarksSectionCard";

import NextButton from "@/components/Shared/NextButton";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import GeneralReportsImg from "@/public/images/resource-bookmark/resource/general-reports.jpg";
import TopicwiseReportsImg from "@/public/images/resource-bookmark/resource/topic-wise-reports.jpg";

const bookmarksData = [
  {
    title: "General Reports",
    href: "/resources/reports/general-reports",
    description: "",
    Icon: GeneralReportsImg,
  },
  {
    title: "Topic Wise Reports",
    href: "/resources/reports/topic-wise-reports",
    description: "",
    Icon: TopicwiseReportsImg,
  },
];

const Reports = () => {
  return (
    <div className="bg-gray-50 pb-16">
      <SectionTitleWithoutSub title="Reports" />

      {/* Content Section with Sidebar */}
      <div className="max-w-screen-xl mx-auto md:px-16 flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 mt-2 px-12">
          <p className="text-lg leading-relaxed font-light mb-6 text-justify">
            Reports are a fundamental output of interventions and initiatives,
            serving as a cornerstone for organizations in the global development
            sector. Given the mandatory and periodic nature of these
            publications, the volume of reports continues to grow rapidly. This
            section organizes reports by topic, including organizational
            reports, key policy briefs, and presentations, providing users with
            a systematic and accessible resource.
          </p>

          {/* general and topic wise reports */}

          <div className="max-w-screen-lg mx-auto pt-8 pb-16 px-2 md:px-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
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
      <NextButton
        href="/resources/books"
        text="Next"
        className="bg-[#00DFC0] text-black mb-8"
      />
    </div>
  );
};

export default Reports;
