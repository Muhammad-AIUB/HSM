"use client";

import { SectionTitleWithSub } from "@/components/Shared/SectionTitle/SectionTitle";
import OverviewImage from "@/public/images/resource-bookmark/resource/overview.jpeg";
import KeyPublicHealthOrgImage from "@/public/images/resource-bookmark/bookmark/key-public-health-org.jpg";
import ReportsImage from "@/public/images/resource-bookmark/bookmark/reports.webp";
import JournalsImage from "@/public/images/resource-bookmark/bookmark/journal.jpg";
import CommentariesBlogsImage from "@/public/images/resource-bookmark/bookmark/commentaries-blogs.jpg";
import InterviewsImage from "@/public/images/resource-bookmark/bookmark/interview.jpg";
import UsefulPlatformsImage from "@/public/images/resource-bookmark/bookmark/useful-platform.jpg";
import DataRespiratoryImage from "@/public/images/resource-bookmark/bookmark/data-and-respiratory.jpg";
import DataCentricImage from "@/public/images/resource-bookmark/bookmark/data-centric-org.jpg";
import DataOnTopicImage from "@/public/images/resource-bookmark/bookmark/data-on-topic.jpg";
import TrainingCoursesImage from "@/public/images/resource-bookmark/bookmark/trainging-courses.jpg";
import JobSitesImage from "@/public/images/resource-bookmark/bookmark/job-sites.jpg";
import ScholarshipImage from "@/public/images/resource-bookmark/bookmark/scholarships.jpg";
import NewsletterImage from "@/public/images/resource-bookmark/bookmark/Newsletter.jpg";
import YouTubeImage from "@/public/images/resource-bookmark/bookmark/Youtube.jpg";
import PodcastImage from "@/public/images/resource-bookmark/bookmark/Podcast.jpg";

const bookmarkSubLinks = [
  {
    title: "Overview",
    href: "/bookmarks/overview",
    description:
      "The Global Health Bookmarks section indicates the resources either document, entities, courses, career, podcast and so on pertained with the global health and health systems are covered.",
    img: OverviewImage,
  },
  {
    title: "Key Public Health Organizations ",
    href: "/bookmarks/key-public-health-organizations",
    description:
      "Many organizations, both large and small, have long been dedicated to public health and health systems strengthening.",
    img: KeyPublicHealthOrgImage,
  },
  {
    title: "Reports and Publications ",
    href: "/bookmarks/reports-and-publications",
    description:
      "This section highlights research reports and issue-based publications from leading public health organizations.",
    img: ReportsImage,
  },
  {
    title: "Journals ",
    href: "/bookmarks/journals",
    description:
      "This list offers an overview of reputable and scholarly journals focused on public health and health systems.",
    img: JournalsImage,
  },
  {
    title: "Commentaries and Blogs",
    href: "/bookmarks/commentaries-blogs",
    description:
      "A series of blogs and newsletters maintained by organizations and dedicated professionals is available.",
    img: CommentariesBlogsImage,
  },
  {
    title: "Interviews Sites on Global Health",
    href: "/bookmarks/interviews-sites",
    description:
      "This section features in-depth interviews with global health leaders, offering valuable perspectives on innovation, challenges, and personal journeys in public health.",
    img: InterviewsImage,
  },
  {
    title: "Useful Platforms and Tools ",
    href: "/bookmarks/useful-platforms-and-tools",
    description:
      "This section introduces platforms and tools designed to enhance your professional skills.",
    img: UsefulPlatformsImage,
  },
  {
    title: "Data and Respiratory of Organizations",
    href: "/bookmarks/data-and-respiratory-of-organizations",
    description:
      "This section features up-to-date data and insights curated from reputable global organizations.",
    img: DataRespiratoryImage,
  },
  {
    title: "Data-Centric Organizations and Platforms",
    href: "/bookmarks/data-centric-organizations-and-platforms",
    description:
      "This section highlights organizations that provide timely, relevant, and evidence-based insights to inform and strengthen health and development policies and practices.",
    img: DataCentricImage,
  },
  {
    title: "Data on Topic and Public Health Issues",
    href: "/bookmarks/data-on-topic-and-public-health-issues",
    description:
      "This section compiles up-to-date data and information on key public health and development issues from trusted sources.",
    img: DataOnTopicImage,
  },
  {
    title: "Training and Courses",
    href: "/bookmarks/training-and-courses",
    description:
      "This list of online training and courses in global health and health systems can help you choose and enroll in programs to enhance your skills and expand your professional network.",
    img: TrainingCoursesImage,
  },
  {
    title: "Job Sites",
    href: "/bookmarks/job-sites",
    description:
      "This section features leading job platforms that regularly post public health and development roles across global contexts.",
    img: JobSitesImage,
  },
  {
    title: "Scholarship and Fellowship Opportunities",
    href: "/bookmarks/scholarship-and-fellowship-opportunities",
    description:
      "The site offers a comprehensive list of reputed scholarships provided by various countries and authorities for pursuing higher education abroad.",
    img: ScholarshipImage,
  },
  {
    title: "Newsletter ",
    href: "/bookmarks/newsletter",
    description:
      "A series of blogs and newsletters maintained by organizations and dedicated professionals is available.",
    img: NewsletterImage,
  },
  {
    title: "YouTube",
    href: "/bookmarks/youtube",
    description:
      "In today's digital landscape, visual platforms are highly engaging, and public health professionals are no exception",
    img: YouTubeImage,
  },
  {
    title: "Podcast",
    href: "/bookmarks/podcast",
    description:
      "The curated list of podcasts offers valuable insights into global health and development issues.",
    img: PodcastImage,
  },
];

const ResourcesPage = () => {
  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-24">
      <SectionTitleWithSub
        title="Bookmark"
        subTitle="The Global Health Bookmarks section indicates the resources either
              document, entities, courses, career, podcast and so on pertained
              with the global health and health systems are covered."
      />

      {/* Contents */}
      <div className="max-w-screen-xl mx-auto pt-8 px-12 md:px-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {bookmarkSubLinks.map((link, index) => (
          <ResourcesSectionCard
            key={index}
            title={link.title}
            description={link.description}
            imageUrl={link.img}
            href={link.href}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ResourcesSectionCardProps {
  title: string;
  description?: string;
  imageUrl: string | StaticImageData;
  href: string;
  index: number;
}

const ResourcesSectionCard: React.FC<ResourcesSectionCardProps> = ({
  title,
  description,
  imageUrl,
  href,
}) => {
  return (
    <motion.div>
      <Link href={href}>
        <Card
          className={cn(
            "flex flex-col md:flex-row h-full hover:border-[#01748D] bg- overflow-hidden border-[#F18A00] rounded-none shadow-lg"
          )}
        >
          {/* Left Side: Image */}
          <div className="md:w-1/3 h-full">
            <Image
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full p-3 rounded-md"
              width={200}
              height={300}
            />
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col justify-between md:w-2/3">
            {/* Title and Description */}
            <div className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="relative group">
                  <span className="underline-offset-4  cursor-pointer transition-colors duration-200 group-hover:underline group-hover:text-[#F18A00] text-xl font-semibold text-[#001844]">
                    {title}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-justify">{description}</p>
              </CardContent>
            </div>

            <CardFooter className="flex items-center justify-end gap-3">
              <button className="px-3 py-1 text-base font-medium flex transition-all duration-300 transform rounded-md items-center gap-2 text-white bg-[#F18A00] hover:scale-105 hover:bg-[#01748D]">
                Explore <span className="text-xl">→</span>
              </button>
            </CardFooter>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};
