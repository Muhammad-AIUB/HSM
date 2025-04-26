// import { FaBook, FaFileAlt, FaClipboardList } from "react-icons/fa";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import {
  BookOpen,
  FileText,
  Bookmark,
  Scroll,
  BarChart,
  Globe,
  Users,
  Activity,
  GraduationCap,
  Search,
  Newspaper,
  Youtube,
  Mic,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import OverviewPageImage from "@/public/images/resource-bookmark/overview-page-image.webp";
import NextButton from "@/components/Shared/NextButton";

const bookmarks = [
  {
    href: "/bookmarks/key-public-health-organizations",
    icon: <BookOpen />,
    text: "Key Public Health Organizations",
  },
  {
    href: "/bookmarks/reports-and-publications",
    icon: <FileText />,
    text: "Reports and Publications",
  },
  {
    href: "/bookmarks/journals",
    icon: <Bookmark />,
    text: "Journals",
  },
  {
    href: "/bookmarks/commentaries-blogs",
    icon: <Scroll />,
    text: "Commentaries and Blogs",
  },
  {
    href: "/bookmarks/interviews-sites",
    icon: <BarChart />,
    text: "Interviews & Insights on Global Health",
  },
  {
    href: "/bookmarks/useful-platforms-and-tools",
    icon: <Globe />,
    text: "Useful Platforms and Tools",
  },
  // {
  //   href: "/bookmarks/data-and-facts",
  //   icon: <Database />,
  //   text: "Data and Facts",
  // },
  {
    href: "/bookmarks/data-and-respiratory-of-organizations",
    icon: <Users />,
    text: "Data Repository of Organizations",
  },
  {
    href: "/bookmarks/data-centric-organizations-and-platforms",
    icon: <Activity />,
    text: "Data-Centric Organizations and Platforms",
  },
  {
    href: "/bookmarks/data-on-topic-and-public-health-issues",
    icon: <Globe />,
    text: "Data on Public Health Issues",
  },
  {
    href: "/bookmarks/training-and-courses",
    icon: <GraduationCap />,
    text: "Training and Courses",
  },
  // {
  //   href: "/bookmarks/career-scope",
  //   icon: <Briefcase />,
  //   text: "Career Scope",
  // },
  {
    href: "/bookmarks/job-sites",
    icon: <Search />,
    text: "Job Sites",
  },
  {
    href: "/bookmarks/scholarship-and-fellowship-opportunities",
    icon: <GraduationCap />,
    text: "Scholarship and Fellowship Opportunities",
  },
  {
    href: "/bookmarks/newsletter",
    icon: <Newspaper />,
    text: "Newsletter",
  },
  {
    href: "/bookmarks/youtube",
    icon: <Youtube />,
    text: "YouTube",
  },
  {
    href: "/bookmarks/podcast",
    icon: <Mic />,
    text: "Podcast",
  },
];

const ResourcesOverview = () => {
  return (
    <div className="pb-16 bg-[#DCF0F9]">
      <SectionTitleWithoutSub title="Overview" />

      {/* Content Section with Sidebar */}
      <div className="">
        <div className="max-w-screen-xl mx-auto px-12 md:px-16 pt-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Content Section */}
            <div className="md:col-span-2 flex flex-col gap-8">
              {/* Image Section */}
              <div className="w-full">
                <Image
                  src={OverviewPageImage}
                  alt="Overview"
                  width={1000}
                  height={300}
                  className="w-full h-64 brightness-75 object-cover mix-blend-darken"
                />
              </div>

              {/* Description Section */}
              <div className="w-full  text-justify">
                <p className="text-base leading-7 text-[17px]">
                  The Global Health Bookmarks section indicates the resources
                  either document, entities, courses, career, podcast and so on
                  pertained with the global health and health systems are
                  covered. The section offers a comprehensive list of resources
                  that may enrich one global health professionals’ career. If
                  these given resources are well utilized, anyone can attain the
                  knowledge of the contemporary trend of the global health and
                  health systems challenges.
                </p>
              </div>
            </div>

            <FeaturedBookmarks />
          </div>
        </div>
      </div>
      <NextButton
        href="/bookmarks/key-public-health-organizations"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default ResourcesOverview;

export const FeaturedBookmarks = function () {
  return (
    <div>
      <div className="bg-[#6BCBD5] p-5 rounded-lg border border-gray-200 shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Featured Bookmarks
        </h2>
        <ul className="space-y-1">
          {bookmarks.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="flex items-center p-3 border rounded-md bg-white hover:bg-gray-100 transition group"
              >
                <span className="text-xl text-blue-700 group-hover:text-[#F18A00]">
                  {item.icon}
                </span>
                <span className="ml-3 text-base text-gray-800 font-medium group-hover:underline group-hover:text-[#F18A00]">
                  {item.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
