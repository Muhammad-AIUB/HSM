"use client";

import { useState } from "react";

const BioOfTarique = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-screen-lg mx-auto pt-16 py-12 relative bg-[#6BCBD5]/50 px-12">
      {/* Title */}
      <h2
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer text-3xl md:text-4xl font-extrabold text-gray-800 text-center "
      >
        Bio of Dr. Taufique Joarder
        <span className="block w-24 h-1 bg-[#FFCE00] mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="overflow-hidden relative max-w-screen-md mx-auto">
        <div className="py-6 font-medium">
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            Dr. Taufique Joarder is an Associate Professor and the Lead of the
            Programme Evaluation Unit at the{" "}
            <a
              href="https://www.duke-nus.edu.sg/sdghi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              SingHealth Duke-NUS Global Health Institute
            </a>
            ,{" "}
            <a
              href="https://www.duke-nus.edu.sg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Duke-NUS Medical School
            </a>{" "}
            under the{" "}
            <a
              href="https://nus.edu.sg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              National University of Singapore
            </a>{" "}
            With a doctorate in public health in health policy and systems from
            the{" "}
            <a
              href="https://publichealth.jhu.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Johns Hopkins Bloomberg School of Public Health
            </a>
            , he has 16 years of experience in health policy and systems
            research, implementation research and evaluation. He has taught
            global health and research methods and published extensively, with
            46 peer-reviewed articles and 10 books/chapters. His background
            includes a consultancy position at the{" "}
            <a
              href="https://www.who.int/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              World Health Organization
            </a>{" "}
            headquarters, leadership at{" "}
            <a
              href="https://www.fhi360.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Family Health International
            </a>{" "}
            (FHI 360), faculty roles at{" "}
            <a
              href="https://bracjpgsph.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              BRAC
            </a>{" "}
            and{" "}
            <a
              href="https://www.northsouth.edu/academic/shls/public-health.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              North South University
            </a>
            , and significant policy and media engagement. He is also an Editor
            of{" "}
            <a
              href="https://globalizationandhealth.biomedcentral.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              BMC Globalization and Health
            </a>
            , an alumnus of{" "}
            <a
              href="https://ev4gh.bracjpgsph.org/about.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Emerging Voices for Global Health
            </a>{" "}
            (EV2010), and a board member of{" "}
            <a
              href="https://healthsystemsglobal.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Health Systems Global.
            </a>{" "}
            His areas of expertise include health and nutrition policy, human
            resources for health, implementation science, program evaluation,
            and psychometrics. He also serves as the Vice-Chairperson of the{" "}
            <a
              href="https://publichealthfoundation.org.bd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Public Health Foundation, Bangladesh.
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioOfTarique;
