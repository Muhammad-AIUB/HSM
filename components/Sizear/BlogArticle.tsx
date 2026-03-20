"use client";
import { colors } from "@/lib/utils";

export default function BlogArticle() {
    const blogArticles = [
        {
            year: "2026",
            title: "Breathing in Danger: The Twin Threat of Climate Change and Air Pollution in Bangladesh",
            journal: "Global South",
            link: "https://globalsouth.org/2026/02/breathing-in-danger-the-twin-threat-of-climate-change-and-air-pollution-in-bangladesh/",
            titleLink:
                "https://globalsouth.org/2026/02/breathing-in-danger-the-twin-threat-of-climate-change-and-air-pollution-in-bangladesh/",
            firstAuthor: false,
        },
        {
            year: "2026",
            title: "From knowledge to practice: Bangladesh's oral rehydration solution legacy",
            journal: "Frontiers in Global Women's Health, Volume 5",
            link: "https://globaldev.blog/from-knowledge-to-practice-bangladeshs-oral-rehydration-solution-legacy/",
            titleLink:
                "https://globaldev.blog/from-knowledge-to-practice-bangladeshs-oral-rehydration-solution-legacy/",
            firstAuthor: false,
        },
        {
            year: "2026",
            title: "Healing Bangladesh's Health Sector: Systemic Reform to Combat Corruption",
            journal: "Frontiers in Global Women's Health, Volume 5",
            link: "https://gnacta.org/blog/healing-bangladeshs-health-sector-systemic-reform-combat-corruption",
            titleLink:
                "https://gnacta.org/blog/healing-bangladeshs-health-sector-systemic-reform-combat-corruption",
            firstAuthor: false,
            awardWinningArticle: true,
        },
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



    return (
        <div className="pt-16">
            <h3 className="text-xl font-bold underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#ef4444] pb-6">
                Blog Article
            </h3>

        
            <div className="space-y-6 mt-6">
                {blogArticles.map((blogArticle, index) => (
                    <div
                        key={index}
                        className={`transition-all duration-200 group bg-white border shadow-sm rounded-md p-6 border-l-4 border-blue-500 flex md:items-center md:space-x-6 space-y-2 flex-col md:flex-row justify-between md:mx-12 ${
                            colors[index % colors.length]
                        }`}
                    >
                        {/* Left: Year */}
                        <div className="w-[5%]">
                            <h3 className="text-lg font-semibold text-[#001844]">
                                {blogArticle.year}
                            </h3>
                        </div>

                        {/* Middle: Author / Award Tag */}
                        <span className="bg-blue-800 text-white px-2 min-w-[10rem] text-center font-bold">
                            {blogArticle.awardWinningArticle ? "Award Winning Article" : blogArticle.firstAuthor ? "First Author" : ""}
                        </span>

                        {/* Right: Title & Link */}
                        <div className="md:w-3/4 break-words">
                            <h4 className="text-md font-semibold text-gray-800">
                                {blogArticle.title}
                            </h4>
                            <a
                                href={blogArticle.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 text-sm mt-1 hover:underline group-hover:text-black block"
                            >
                                {blogArticle.link}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
