"use client";

import NextButton from "@/components/Shared/NextButton";
import { PdfCard } from "@/components/Shared/PdfCard";

import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import Link from "next/link";

const pdfs = [
  {
    title: "Basic Epidemiology - R Bonita",
    filePath: "/files/books/Basic Epidemiology - R Bonita.pdf",
  },
  {
    title: "Designing-Benefits for UHC",
    filePath: "/files/books/Designing-Benefits for UHC.pdf",
  },
  {
    title: "Epidemiology_Gordis",
    filePath: "/files/books/Epidemiology_Gordis.pdf",
  },
  {
    title: "Global health economics - Paul Revil",
    filePath: "/files/books/Global health economics - Paul Revil.pdf",
  },
  {
    title: "Guns, Germs and Steel - Jared Diamond",
    filePath: "/files/books/Guns, Germs and Steel - Jared Diamond.pdf",
  },
  {
    title: "Health system performance assessment - Christopher and David",
    filePath:
      "/files/books/Health system performance assessment - Christopher and David.pdf",
  },
  {
    title: "Introduction to Community and Public Health - J. Mackangee",
    filePath:
      "/files/books/Introduction to Community and Public Health - J. Mackangee.pdf",
  },
  {
    title: "Performance-Incentives for Global Health - Rena and Ruth",
    filePath:
      "/files/books/Performance-Incentives for Global Health - Rena and Ruth .pdf",
  },
  {
    title: "Practical Epidemiology - Patrick Vaughan",
    filePath: "/files/books/Practical Epidemiology - Patrick Vaughan.pdf",
  },
  {
    title: "Rethinking Global Health - R. Burges",
    filePath: "/files/books/Rethinking Global Health - R. Burges.pdf",
  },
  {
    title: "Social Determinants of Public Health - Erik Blas",
    filePath:
      "/files/books/Social Determinants of Public Health - Erik Blas.pdf",
  },
  {
    title: "The New Public Health - Theodore",
    filePath: "/files/books/The New Public Health - Theodore.pdf",
  },
  {
    title: "Truth, Lies, and Public Health -Malestrom",
    filePath: "/files/books/Truth, Lies, and Public Health -Malestrom.pdf",
  },
  {
    title: "World Health System _ Xiaoming Sun 2020",
    filePath: "/files/books/World Health System _ Xiaoming Sun 2020.pdf",
  },
];

const Books = () => {
  return (
    <div className="bg-gray-50 pb-16">
      <SectionTitleWithoutSub title="Books" />

      {/* Content Section with Sidebar */}
      <div className="max-w-screen-xl mx-auto px-12 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="flex-1 mt-2 md:col-span-2">
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-gray-800 font-light mb-6 text-justify">
            The PDF books provided are significant works by renowned public
            health professionals, offering valuable insights into global health
            and health systems
          </p>

          {/* general and topic wise reports */}

          <div className="max-w-screen-xl mx-auto pb-16 flex flex-col md:flex-row gap-8">
            {/* Main Content */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto">
              {pdfs.map((pdf, index) => (
                <PdfCard key={index} pdf={pdf} />
              ))}
            </div>
          </div>
        </div>
                  {/* Right Featured Resources Section */}
                  <div className="mt-6">
          <FeaturedResources />
          </div>
      </div>

      <NextButton
        href="/resources/interview-and-insights"
        text="Next"
        className="bg-[#00DFC0] text-black"
      />
    </div>
  );
};

export default Books;


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

