"use client";

import { Card } from "../Shared/CustomCard/CustomCard";
import { Separator } from "../ui/separator";
import Link from "next/link";
import NewsImage from "@/public/images/news-newsletter/news-homepage.webp";
import NewsletterImage from "@/public/images/news-newsletter/newsletter-homepage.webp";

export default function NewsNewsletterSection() {
  const resources = [
    {
      title: "News",
      description:
        "This section features Upcoming Events, which covers key global health conferences, symposiums, webinars, campaigns, and health days.",
      image: NewsImage,
      link: "/news",
    },
    {
      title: "Newsletter",
      description:
        "The Health Systems Matter Newsletter provides valuable insights and resources on global health, upcoming events, and career opportunities.",
      image: NewsletterImage,
      link: "/newsletter",
    },
  ];

  return (
    <section className=" bg-[#6BCBD5] to-white py-16 flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto px-4 md:px-16">
        <div className="flex flex-col md:flex-row gap-5 items-center w-full px-4 md:px-12">
          <div className="flex gap-4 items-center">
            <Link
              href="/news-and-newsletter"
              className="text-[30px] font-[1000] text-[#001844] whitespace-nowrap"
            >
              <h2 className="text-center sm:text-left font-[700]">
                NEWS AND <br className="md:hidden" /> NEWSLETTER
              </h2>
            </Link>
            <Separator
              orientation="vertical"
              className="h-24 w-1 bg-[#FFCE00] hidden md:block"
            />
          </div>

          <p className="text-lg sm:text-[20px] text-[#001844] text-justify px-4">
            Visit the news section to stay informed about upcoming global health
            events and subscribe to our periodic newsletter for regular updates
            on public health issues.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-8">
          <div className="grid md:grid-cols-2 gap-6 px-10 md:px-0">
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
