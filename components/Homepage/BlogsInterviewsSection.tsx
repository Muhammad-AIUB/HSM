"use client";

import { Separator } from "../ui/separator";
import Link from "next/link";
import { Card } from "../Shared/CustomCard/CustomCard";
import BlogImage from "@/public/images/blog-interview/blog-homepage.jpg";
import InterviewImage from "@/public/images/blog-interview/interviw-homepage.webp";

export default function BlogsInterviewsSection() {
  const resources = [
    {
      title: "Interview",
      description:
        "The interview section showcases the journeys and insights of global health advocates, highlighting their impactful experiences and perspectives.",
      image: InterviewImage,
      link: "/interview",
    },
    {
      title: "Blog",
      description:
        "The blog covers diverse global health topics, offering thoughtful analysis from public health professionals through a health systems perspective.",
      image: BlogImage,
      link: "/blog",
    },
  ];

  return (
    <section className="bg-[#CDEDEC] to-white py-16 px-8 flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row gap-5 items-center w-full px-4 md:px-12">
          <div className="flex gap-4 items-center">
            <Link
              href="/blog-and-interview"
              className="text-[30px] font-[1000] text-[#001844] whitespace-nowrap"
            >
              <h2 className="text-center sm:text-left">
                INTERVIEW <br className="md:hidden" /> AND BLOG
              </h2>
            </Link>
            <Separator
              orientation="vertical"
              className="h-24 w-1 bg-[#FFCE00] hidden md:block"
            />
          </div>

          <p className="text-lg sm:text-[20px] text-[#001844] text-justify">
            The Interview and Blog section is an exciting section of the Health
            Systems Matter platform, offering original content and insights from
            public health professionals worldwide.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-8">
          <div className="grid md:grid-cols-2 gap-6 px-4">
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
