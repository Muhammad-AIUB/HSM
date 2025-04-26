"use client";

import { Separator } from "../ui/separator";
import Link from "next/link";

import ResourceImage from "@/public/images/resource-bookmark/resourse-homepage.jpg";
import BookmarkImage from "@/public/images/resource-bookmark/bookmark.webp";
import { Card } from "../Shared/CustomCard/CustomCard";

export default function ResourcesSection() {
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
    <section className="bg-[#E1F0DB] to-white py-16 flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto px-4 md:px-16 ">
        <div className="flex justify-between mb-8">
          <div className="flex flex-col md:flex-row gap-5 items-center w-full px-4 md:px-12">
            <div className="flex gap-4 items-center">
              <Link
                href="/resources-and-bookmarks"
                className="text-[30px] font-[700] text-[#001844] whitespace-nowrap"
              >
                <h2 className="text-center sm:text-left">
                  RESOURCE <br className="md:hidden" /> AND BOOKMARK
                </h2>
              </Link>
              <Separator
                orientation="vertical"
                className="h-24 w-1 bg-[#FFCE00] hidden md:block"
              />
            </div>

            <p className="text-lg sm:text-[20px] text-[#001844] text-justify px-4">
              Explore the comprehensive resource hub to supercharge your
              knowledge and complement your rewarding career journey. The{" "}
              <span className="font-semimedium">Resource</span> section lets you
              download valuable materials with a single click, while the{" "}
              <span className="font-semimedium">Bookmarks</span> section
              connects you to useful contents and tools crucial for professional
              success.
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 px-9 md:px-0">
            {resources.map((resource, index) => (
              <Card
                key={index}
                title={resource.title}
                description={resource.description}
                image={resource.image}
                link={resource.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
