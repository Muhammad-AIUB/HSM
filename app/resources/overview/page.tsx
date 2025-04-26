import NextButton from "@/components/Shared/NextButton";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";

import Image from "next/image";
import Link from "next/link";
import OverviewPageImage from "@/public/images/resource-bookmark/overview-page-image.webp";

const ResourcesOverview = () => {
  return (
    <div className="pb-16">
      <SectionTitleWithoutSub title="overview" />

      <div className="bg-white">
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
              <div className="w-full text-gray-700 text-justify">
                <p className="text-base leading-7">
                  The Resources section aspires to be a repository of essential
                  resources on health systems and global health. By compiling
                  major reports, books, groundbreaking publications, significant
                  policy briefs and presentations, thought-provoking interviews,
                  and insightful analyses, it supports public health
                  professionals and beyond in their pursuit of knowledge and
                  professional development. Resources are organized by topic to
                  facilitate systematic access. Each resource is sourced from
                  esteemed organizations, with due credit given to acknowledge
                  their invaluable contributions.
                </p>
              </div>
            </div>

            {/* Right Featured Resources Section */}
            <FeaturedResources />
          </div>
        </div>
      </div>

      <NextButton
        href="/resources/essential-reading-list"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default ResourcesOverview;

export const FeaturedResources = function () {
  return (
    <div className="bg-[#6BCBD5] p-5 rounded-lg border border-gray-200 shadow-md w-full max-w-md self-start">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Featured Resources
      </h2>
      <ul className="space-y-1">
        <li>
          <Link
            href="/resources/essential-reading-list"
            className="flex items-center p-3 border rounded-md bg-white hover:bg-gray-100 transition group"
          >
            <span className="text-xl text-blue-700 group-hover:text-[#F18A00]">
              📖
            </span>
            <span className="ml-3 text-base text-gray-800 font-medium group-hover:underline group-hover:text-[#F18A00]">
              Essential Reading List
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/resources/reports"
            className="flex items-center p-3 border rounded-md bg-white hover:bg-gray-100 transition group"
          >
            <span className="text-xl text-blue-700 group-hover:text-[#F18A00]">
              📑
            </span>
            <span className="ml-3 text-base text-gray-800 font-medium group-hover:underline group-hover:text-[#F18A00]">
              Reports
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/resources/books"
            className="flex items-center p-3 border rounded-md bg-white hover:bg-gray-100 transition group"
          >
            <span className="text-xl text-blue-700 group-hover:text-[#F18A00]">
              📚
            </span>
            <span className="ml-3 text-base text-gray-800 font-medium group-hover:underline group-hover:text-[#F18A00]">
              Books
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/resources/interview-and-insights"
            className="flex items-center p-3 border rounded-md bg-white hover:bg-gray-100 transition group"
          >
            <span className="text-xl text-blue-700 group-hover:text-[#F18A00]">
              🎙️
            </span>
            <span className="ml-3 text-base text-gray-800 font-medium group-hover:underline group-hover:text-[#F18A00]">
              Interview and Insights
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
