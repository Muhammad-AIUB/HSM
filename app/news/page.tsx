"use client";

import ResourcesSectionCard from "@/components/ui/ResourcesSectionCard";
import NextButton from "@/components/Shared/NextButton";

import UpcomingEventImg from "@/public/images/news-newsletter/upcoming-events.jpg";
import HeadlineNewsImg from "@/public/images/news-newsletter/headline-news.jpg";
import GlobalHealthData from "@/public/images/news-newsletter/global-health-data-spotlights.png";
import DoYouKnowImg from "@/public/images/news-newsletter/do-you-know.jpg";
import { SectionTitleWithSub } from "@/components/Shared/SectionTitle/SectionTitle";

const resourcesSubLinks = [
  {
    title: "Upcoming Event",
    href: "/news/upcoming-event",
    description: "",
    img: UpcomingEventImg,
  },

  {
    title: "Headline News ",
    href: "/news/headline-news",
    description: "",
    img: HeadlineNewsImg,
  },

  {
    title: "Global Health Data Spotlights",
    href: "/news/data-in-global-health",
    description: "",
    img: GlobalHealthData,
  },
  {
    title: "Do You Know?",
    href: "/news/do-you-know",
    description: "",
    img: DoYouKnowImg,
  },
];

const NewsPage = () => {
  return (
    <div className="pb-16">
      <SectionTitleWithSub
        title="News"
        subTitle="This section features Upcoming Events, which covers key global
              health conferences, symposiums, webinars, campaigns, and health
              days. On the other hand, Headline News cover current major global
              health issues demanding global attention. Meanwhile, the Do You
              Know highlights significant public health milestones and
              fascinating facts. Explore a curated list of notable health days
              and activities focused on global health."
      />

      {/* Content */}
      <div className="max-w-screen-xl mx-auto py-16 px-12 md:px-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {resourcesSubLinks.map((link, index) => (
          <ResourcesSectionCard
            key={index}
            title={link.title}
            description={link.description}
            imageUrl={link.img}
            href={link.href}
            // Add two buttons to the "Reports" card only
            hasTwoButtons={link.title === "Reports"} // Only the Reports card gets two buttons
            buttonLabels={
              link.title === "Reports"
                ? ["Major Reports", "Topic Wise Reports"]
                : ["Explore"] // Other cards get only one button
            }
            buttonLinks={
              link.title === "Reports"
                ? [
                    "/resources/reports/major-reports", // Major Reports link
                    "/resources/reports/topic-wise-reports", // Topic Wise Reports link
                  ]
                : [link.href] // Other cards get their default href
            }
            index={index}
          />
        ))}
      </div>

      <NextButton href="/newsletter" text="Next" />
    </div>
  );
};

export default NewsPage;
