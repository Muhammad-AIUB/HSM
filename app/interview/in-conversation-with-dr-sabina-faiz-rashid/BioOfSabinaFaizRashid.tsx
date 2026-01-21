"use client";

import { useState } from "react";

const BioOfSabinaFaizRashid = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-screen-lg mx-auto pt-16 py-12 relative bg-[#6BCBD5]/50 px-12">
      <h2
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer text-3xl md:text-4xl font-extrabold text-gray-800 text-center "
      >
        About Dr. Sabina Faiz Rashid
        <span className="block w-24 h-1 bg-[#FFCE00] mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="overflow-hidden relative max-w-screen-md mx-auto">
        <div className="py-6 font-medium">
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            I am trained in critical medical anthropology and have been at the{" "}
            <a
              href="https://bracjpgsph.org/cgsrhr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-700"
            >
              James P Grant School of Public Health
            </a>{" "}
            at BRAC University in Dhaka for
            over 21 years. I have a deep passion for both research and teaching. In my personal life, I enjoy listening to music, with tastes that range
            from Rabindra Sangeet to Western. I also love travelling and meeting people from around the world, opportunities that my work has generously
            afforded me. These experiences continually remind me that beyond differences of race, religion, age, and gender, we are all fundamentally the
            same, seeking peace, happiness, and ways to contribute meaningfully to humanity. As I grow older, I am trying not to take myself or life too
            seriously, embracing the belief that what will be, will be. It is my husband&apos;s unwavering support, my sense of humor, the strength of close
            friendships and family, and above all my faith in God that helps me navigate and overcome the challenges I encounter along the way. I am
            fortunate to be surrounded by many well-wishers and supportive colleagues over the years, both in Bangladesh and overseas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioOfSabinaFaizRashid;
