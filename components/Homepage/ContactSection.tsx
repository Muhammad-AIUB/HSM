"use client";

import Link from "next/link";
import { Separator } from "../ui/separator";
import { Card } from "../Shared/CustomCard/CustomCard";
import StayConnectedImage from "@/public/images/contact/stay-connected-homepage.jpg";
import SupportCollaborateImage from "@/public/images/contact/support-collaborate-homepage.jpg";

const ContactSection = ({ version = "homepage" }) => {
  const resources = [
    {
      title: "Stay Connected",
      description:
        "Thank you for your interest. Whether you have a question, are eager to collaborate, or simply want to connect, I’m always happy to hear from you. Even, any kind of feedback is also highly appreciated. Feel free to leave a message, and I’ll get back to you as soon as possible.",
      image: StayConnectedImage,
      link: "/contact/stay-connected",
    },
    {
      title: "Support and Collaborate",
      description:
        "This is a volunteer-driven initiative, and we greatly appreciate any sponsorships or contributions to support the site and promote our page. We Value Collaboration! At Health Systems Matter, we welcome partnerships that align with our mission and vision.",
      image: SupportCollaborateImage,
      link: "/support-hsm",
    },
  ];

  return (
    <section className="bg-[#CDEDEC] to-white py-10 px-8 pb-24 ">
      {version === "homepage" && (
        <div className="flex flex-col max-w-screen-xl mx-auto md:flex-row gap-5 items-center w-full px-4 md:px-12">
          <div className="flex gap-4 items-center">
            <Link
              href="/contact"
              className="text-[30px] font-[1000] text-[#001844] whitespace-nowrap"
            >
              <h2 className="text-center sm:text-left">CONTACT</h2>
            </Link>
            <Separator
              orientation="vertical"
              className="h-24 w-1 bg-[#FFCE00] hidden md:block"
            />
          </div>

          <p className="text-lg sm:text-[20px] text-[#001844] text-justify">
            We would love to hear from you! Whether for support or
            collaboration, feel free to reach out — just send us a message, and
            we will get back to you promptly.
          </p>
        </div>
      )}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 px-4">
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
    </section>
  );
};

export default ContactSection;
