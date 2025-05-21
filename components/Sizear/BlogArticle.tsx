"use client";
import { colors } from "@/lib/utils";
// import { colors } from "@/lib/utils";
import { motion } from "framer-motion";
// import { useMemo } from "react";

// List of random hover background classes
// const hoverColors = [
//     "hover:bg-blue-100",
//     "hover:bg-pink-100",
//     "hover:bg-green-100",
//     "hover:bg-yellow-100",
//     "hover:bg-purple-100",
//     "hover:bg-rose-100",
// ];

export default function BlogArticle() {
    const blogArticles = [
        {
            year: "2025",
            title: "Rethinking resource allocation methods promotes efficiency of health budget utilization: a case study in Bangladesh",
            journal: "Frontiers in Global Women’s Health, Volume 5",
            link: "https://healthsystemsglobal.org/news/rethinking-resource-allocation-methods-promotes-efficiency-of-health-budget-utilization-a-case-study-in-bangladesh/",
            titleLink:
                "https://healthsystemsglobal.org/news/rethinking-resource-allocation-methods-promotes-efficiency-of-health-budget-utilization-a-case-study-in-bangladesh/",
            firstAuthor: false,
        },
        {
            year: "2024",
            title: "Building a Sustainable Social Sector Ecosystem",
            journal: "Frontiers in Global Women’s Health, Volume 5",
            link: "https://www.opendevelopment.co/latest/building-a-sustainable-health-sector-ecosystem",
            titleLink:
                "https://www.opendevelopment.co/latest/building-a-sustainable-health-sector-ecosystem",
            firstAuthor: false,
        },
        {
            year: "2024",
            title: "Increasing Impact of Climate Change on Tuberculosis in Bangladesh",
            journal: "Frontiers in Global Women’s Health, Volume 5",
            link: "https://publichealthfoundation.org.bd/increasing-impact-of-climate-change-on-tuberculosis-in-bangladesh/",
            titleLink:
                "https://publichealthfoundation.org.bd/increasing-impact-of-climate-change-on-tuberculosis-in-bangladesh/",
            firstAuthor: false,
        },
    ];

    // Generate a random hover class for each card using useMemo
    // const hoverClasses = useMemo(() => {
    //     return blogArticles.map(
    //         () => hoverColors[Math.floor(Math.random() * hoverColors.length)]
    //     );
    // }, []);

    return (
        <div className="pt-16">
            <h3 className="text-xl font-bold underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#ef4444] pb-6">
                Blog Article
            </h3>

            {/* Content */}
            <div className="space-y-6 mt-6">
                {blogArticles.map((blogArticle, index) => (
                    <motion.div
                        key={index}
                        className={`transition duration-200 group bg-white border shadow-sm rounded-md p-6 border-l-4 border-blue-500 flex md:items-center md:space-x-6 space-y-2 flex-col md:flex-row justify-between md:mx-12 ${
                            colors[index % colors.length]
                        }`}
                    >
                        {/* Left: Year */}
                        <div className="w-[5%]">
                            <h3 className="text-lg font-semibold text-[#001844]">
                                {blogArticle.year}
                            </h3>
                        </div>

                        {/* Middle: Author Tag */}
                        <span className="bg-blue-800 text-white px-2 w-28 text-center font-bold">
                            {blogArticle.firstAuthor ? "First Author" : ""}
                        </span>

                        {/* Right: Title & Link */}
                        <div className="md:w-3/4 break-words">
                            <a
                                href={blogArticle.titleLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-md font-semibold text-gray-800 hover:bg-blue-500 hover:text-white hover:underline transition duration-200 rounded"
                            >
                                {blogArticle.title}
                            </a>
                            <a
                                href={blogArticle.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 text-sm mt-1 hover:underline group-hover:text-black block"
                            >
                                {blogArticle.link}
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
