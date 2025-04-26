"use client";

import { motion } from "framer-motion";
import BookMarksSectionCard from "@/components/ui/BookMarksSectionCard";
import { SectionTitleWithSub } from "@/components/Shared/SectionTitle/SectionTitle";
import SubForNewsletter from "@/public/images/news-newsletter/sub-for-newsletter.jpg";
import AllPrevIssues from "@/public/images/news-newsletter/all-previous-issues.png";

const bookmarksData = [
  {
    title: "Subscribe for Newsletter",
    href: "/subscribe",
    description:
      "If you’re interested in receiving updates on public health issues, events, blogs, and interviews directly in your inbox, a single subscription is all you need.",
    Icon: SubForNewsletter,
  },
  {
    title: "All Previous Issues",
    href: "/newsletter/all-previous-issues",
    description:
      "Explore our archive below to find all previous newsletters, neatly organized by quarter.",
    Icon: AllPrevIssues,
  },
];

// Define animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const NewsletterPage = () => {
  return (
    <div className="pb-16">
      <SectionTitleWithSub
        title="Newsletter"
        subTitle="The Health Systems Matter Newsletter provides valuable insights
              and resources on global health, upcoming events, and career
              opportunities. Subscribers receive periodic emails, preferably
              monthly, featuring highlights from our recent social media posts,
              new blogs, interviews, and more. The newsletter also covers
              significant global health topics and news from around the world,
              keeping you updated and informed."
      />

      {/* Content */}
      <div className="max-w-6xl mx-auto py-8 px-12 md:px-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {bookmarksData.map((bookmark, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
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
  );
};

export default NewsletterPage;
