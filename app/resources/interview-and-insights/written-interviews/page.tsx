"use client";

import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const writtenInterviews = [
    {
        title: "Paul Farmer’s Interview",
        url: "https://news.harvard.edu/gazette/story/2018/05/harvards-paul-farmer-on-traveling-the-world-to-fight-inequality-in-health/",
    },
    {
        title: "Madhukar Pai on how the 'know-do' gap undermines health goals",
        url: "https://www.exemplars.health/stories/madhukar-pai-on-how-the-know-do-gap-undermines-health-goals",
    },
    {
        title: "“Major Reforms Have Been Driven by Crisis” By Jeremy Farrar, Molly Galvin",
        url: "https://issues.org/jeremy-farrar-interview-wellcome-covid/?utm_source=chatgpt.com",
    },
    {
        title: "Interview with WHO Chief Scientist Dr. Soumya Swaminathan: Mobilizing Evidence in Health Emergencies",
        url: "https://www.who.int/news/item/07-11-2021-interview-with-who-chief-scientist-dr-soumyaswaminathan-on-mobilizing-evidence-in-health-emergencies?utm_source=chatgpt.com",
    },
    {
        title: "The Do’s and Don’ts of a Global Health Experience",
        url: "https://students-residents.aamc.org/getting-experience/do-s-and-don-ts-global-healthexperience-interview-jessica-evert-md?utm_source=chatgpt.com",
    },
    {
        title: "How the fight for global health lost steam — and how to get it back.",
        url: "https://www.vox.com/future-perfect/372672/bill-gates-interview-child-hunger-globalhealth?utm_source=chatgpt.com",
    },
    {
        title: "Bill Gates – The Vaccine Interview",
        url: "https://www.gavi.org/vaccineswork/bill-gates-vaccineinterview?gad_source=1&gclid=CjwKCAiAtNK8BhBBEiwA8wVt97_-FolI09hdiydsSdzJtRlOfYz0B8fEG8zQONlX86Gs16LvHx_xKBoCTccQAvD_BwE",
    },
    {
        title: "Designing A New National Center for Disease Control",
        url: "https://www.thinkglobalhealth.org/article/designing-new-national-center-disease-control",
    },
    {
        title: "Interview with Dr. Madhukar Pai",
        url: "https://healthenews.mcgill.ca/a-face-to-face-with-our-research-leaders-interview-with-drmadhukar-pai/",
    },
    {
        title: "Should We Be Panicked About Bird Flu?",
        url: "https://news.harvard.edu/gazette/story/2025/01/should-we-be-panicked-about-bird-flu-williambill-hanage/",
    },
    {
        title: "Harnessing Private Sector Collaboration for Universal Health Coverage",
        url: "https://www.ifc.org/en/interviews/2024/interview-with-david-clarke",
    },
    {
        title: "Q&A with Dean Andrea Baccarelli on His Deanship and Vision for Harvard Chan School",
        url: "https://hsph.harvard.edu/news/dean-andrea-baccarelli/",
    },
];

const WrittenInterviews = () => {
    return (
        <div className="bg-[#DCF0F9]  min-h-screen pb-16">
            <SectionTitleWithoutSub title="📝 Written Interviews" />

            <div className="py-10 px-12 md:px-16 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {writtenInterviews.map((interview, index) => (
                    <motion.a
                        key={index}
                        href={interview.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-4 bg-white p-6 rounded-xl border border-gray-100 shadow hover:shadow-lg hover:bg-blue-50 transition-all duration-300 organization-card"
                    >
                        <FileText className="text-blue-500 w-6 h-6 shrink-0" />
                        <span className="text-lg font-semibold text-blue-600 hover:underline">
                            {interview.title}
                        </span>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default WrittenInterviews;
