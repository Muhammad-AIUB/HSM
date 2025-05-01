import { FaDownload, FaBookOpen } from "react-icons/fa";

import Image from "next/image";
import NextButton from "@/components/Shared/NextButton";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import EssentialReadingListImg from "@/public/images/resource-bookmark/resource/essential-reading-list.webp";
import Link from "next/link";

const EssentialReadingList = () => {
  // Sample PDF data
  const pdfs = [
    {
      title: "A System of Health Accounts 2011",
      filePath:
        "/files/Essential-Reading-List/A-System-of-Health-Accounts-2011.pdf",
    },
    {
      title: "Alma Ata Conference Report on PHC_WHO 1978",
      filePath:
        "/files/Essential-Reading-List/Alma-Ata-Conference-Report-on-PHC_WHO-1978.pdf",
    },
    {
      title: "Basic Epidemiology_WHO 2006",
      filePath: "/files/Essential-Reading-List/Basic Epidemiology_WHO 2006.pdf",
    },
    {
      title: "Delivering Quality Health Services_WHO 2018",
      filePath:
        "/files/Essential-Reading-List/Delivering Quality Health Services_WHO 2018.pdf",
    },
    {
      title: "Everybody's Business- Strengthening Health Systems_WHo 2007",
      filePath:
        "/files/Essential-Reading-List/Everybody's Business- Strengthening Health Systems_WHo 2007.pdf",
    },
    {
      title: "Guns, Germs and Steel - Jared Diamond_1997",
      filePath:
        "/files/Essential-Reading-List/Guns, Germs and Steel - Jared Diamond_1997.pdf",
    },
    {
      title: "Health Systems - Improving Performance_WHO_2000",
      filePath:
        "/files/Essential-Reading-List/Health Systems - Improving Performance_WHO_2000.pdf",
    },
    {
      title: "Health Systems Building Blocks_WHO 2010",
      filePath:
        "/files/Essential-Reading-List/Health Systems Building Blocks_WHO 2010.pdf",
    },
    {
      title: "Health Systems Financing_WHO 2010",
      filePath:
        "/files/Essential-Reading-List/Health Systems Financing_WHO 2010.pdf",
    },
    {
      title: "International Profiles of Health Care Systems_2020",
      filePath:
        "/files/Essential-Reading-List/International Profiles of Health Care Systems_2020.pdf",
    },
    {
      title: "Investing in Health_WDR 1993",
      filePath:
        "/files/Essential-Reading-List/Investing in Health_WDR 1993.pdf",
    },
    {
      title: "Now More Than Ever-PHC_WHO 2008",
      filePath:
        "/files/Essential-Reading-List/Now More Than Ever-PHC_WHO 2008.pdf",
    },
    {
      title: "Tracking Universal health Coverage_WHO 2015",
      filePath:
        "/files/Essential-Reading-List/Tracking Universal health Coverage_WHO 2015.pdf",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <SectionTitleWithoutSub title="Essential Reading List" />

      <div className="flex max-w-screen-xl mx-auto flex-col md:flex-row-reverse justify-between w-full px-12 md:px-16 gap-8 pb-16 pt-8">
        {/* Image Section */}
        <div className="w-full">
          <Image
            src={EssentialReadingListImg}
            alt="Essential reading list"
            width={1000}
            height={1000}
            className="w-full h-44 object-cover"
          />
        </div>

        {/* Description Section */}
        <div className="w-full text-gray-900 italic text-justify">
          <p className="text-lg/9">
            Reading preferences and needs vary widely yet certain resources are
            considered essential for global health professionals. Explore this
            curated reading list to discover materials that can enrich your
            knowledge and support your professional growth.
          </p>
        </div>
      </div>
      {/* Content Section with Sidebar */}
      <div className="max-w-7xl mx-auto px-12 md:px-16 pb-16 flex flex-col md:flex-row gap-4 justify-between">
        {/* Main Content */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto">
          {pdfs.map((pdf, index) => {
            const imageName = pdf.title + ".png";
            const imagePath = `/images/resource-bookmark/resource/essential-reading-list/${imageName}`;

            return (
              <div
                key={index}
                className=" rounded-lg shadow-md overflow-hidden border border-gray-200 w-[350px"
              >
                <div className="w-[250px] h-[250px] mx-auto">
                  <Image
                    src={imagePath}
                    alt={pdf.title}
                    width={350}
                    height={350}
                    className="object-contain w-full h-full"
                  />
                </div>

                <div className="p-4 flex flex-col justify-between">
                  <h3 className="font-semibold text-md text-gray-800 mb-4 h-10">
                    {pdf.title}
                  </h3>
                  <div className="flex gap-2 mt-auto">
                    <a
                      href={pdf.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-green-700 hover:bg-green-900 text-white text-sm px-4 py-2 rounded-md font-bold"
                    >
                      <FaBookOpen /> Read
                    </a>
                    <a
                      href={pdf.filePath}
                      download
                      className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-4 py-2 rounded-md"
                    >
                      <FaDownload /> Download
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sidebar Section */}
        <div className="md:w-1/3">
          <FeaturedResources />
        </div>
      </div>

      <NextButton
        href="/resources/reports"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default EssentialReadingList;

const FeaturedResources = function () {
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