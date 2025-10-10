"use client";

import { useState } from "react";

const BarbaraGastelBio = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-screen-lg mx-auto pt-16 py-12 relative bg-[#6BCBD5]/50 pb-20 px-12">
      {/* Title */}
      <h2
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer text-3xl md:text-4xl font-extrabold text-[#001844] text-center "
      >
        About Dr. Barbara Gastel
        <span className="block w-24 h-1 bg-[#FFCE00] mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="relative max-w-screen-md mx-auto">
        <div className="py-6 font-medium">
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            <strong>
              <a
                href="https://medicine.tamu.edu/faculty-listings/barbara-gastel.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-600"
              >
                Barbara Gastel
              </a>, Academician and Passionate Health Writer
            </strong> is a specialist in medical writing and editing, and a professor at Texas A&M University, where she directs the science journalism graduate program. She earned a BA from Yale and MD and MPH from Johns Hopkins. Before joining Texas A&M, she worked at the National Institutes of Health, MIT, Peking University Health Science Center, and the University of California, San Francisco.
          </p>
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            Dr. Gastel is lead author of the latest editions of <a
              href="https://www.goodreads.com/book/show/72160228"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600"
            >
              How to Write and Publish a Scientific Paper
            </a>, and her book Medical Editing: A Guide to Learning the Craft and Building Your Career will appear in late 2025. Long interested in international communication of science, she has given workshops in many countries in Asia, Africa, and the Americas.
          </p>
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            She has received awards from the American Medical Writers Association and the Council of Science Editors, and she is a fellow of the American Association for the Advancement of Science. Dr. Gastel's expertise spans over four decades in biomedical writing, science communication, and health journalism education.
          </p>
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            Her professional identity centers on helping others communicate medical and scientific information effectively to various audiences. She believes that "health writing remains a viable career. Artificial intelligence, as a tool, may help health writers work more efficiently and may relieve health writers of some routine tasks. However, good health writing requires considerable creativity, judgment, and fact-checking."
          </p>
        </div>
      </div>
    </div>
  );
};

export default BarbaraGastelBio;
