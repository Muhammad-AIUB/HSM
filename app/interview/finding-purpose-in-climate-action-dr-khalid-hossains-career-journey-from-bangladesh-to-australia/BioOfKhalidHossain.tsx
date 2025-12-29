"use client";

import { useState } from "react";

const BioOfKhalidHossain = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-screen-lg mx-auto pt-16 py-12 relative bg-[#6BCBD5]/50 px-12">
      {/* Title */}
      <h2
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer text-3xl md:text-4xl font-extrabold text-gray-800 text-center "
      >
        About Dr. Khalid Hossain
        <span className="block w-24 h-1 bg-[#FFCE00] mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="overflow-hidden relative max-w-screen-md mx-auto">
        <div className="py-6 font-medium">
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            Dr. Md Khalid Hossain is a Research Fellow in the{" "}
            <a
              href="https://research.monash.edu/en/persons/mdkhalid-hossain/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline font-semibold"
            >
              Faculty of IT at Monash University
            </a>
            , specialising in digital transformation, climate resilience, and community-centred health
            systems. His work examines how{" "}
            <a
              href="https://research.monash.edu/en/projects/maternal-and-child-health-climate-resilience-in-indo-pacific-regi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline font-semibold"
            >
              climate change disrupts essential services
            </a>
            , particularly{" "}
            <a
              href="https://www.mchcarenetwork.com/countries"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline font-semibold"
            >
              maternal and child health
            </a>
            , and how information systems and inclusive technologies can
            strengthen adaptation for marginalised communities.
          </p>
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            Before academia, he worked with{" "}
            <a
              href="https://www.oxfam.org/en/what-we-do/countries/bangladesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline font-semibold"
            >
              Oxfam
            </a>{" "}
            and the{" "}
            <a
              href="https://iucn.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline font-semibold"
            >
              International Union for Conservation of Nature (IUCN)
            </a>{" "}
            on climate justice and environmental governance across South Asia. He has led{" "}
            <a
              href="https://www.mchcarenetwork.com/countries"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline font-semibold"
            >
              multidisciplinary projects
            </a>{" "}
            in Bangladesh, Indonesia, and Australia, and collaborates widely with government,
            NGOs, and global organisations. His research spans climate–health impacts, digital
            inclusion, AI adoption, and community information ecosystems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioOfKhalidHossain;
