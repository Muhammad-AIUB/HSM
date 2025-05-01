/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

import BioOfSyedMasudAhmed from "./BioOfSyedMasudAhmed";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import SyedMasudImg from "@/public/images/blog-interview/interview/Syed_Masud_Ahmed_Photo.jpg";

const PublicHealthSystemPerspective = () => {
  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <div className="relative w-full  border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844]"
              style={{ wordSpacing: "0.4rem" }}
            >
              Public Health Systems Perspective with{" "}
              <Link href="https://syedmasudahmed.blogspot.com/">
                <span className="text-[#001844] underline font-extrabold bg-[#FFCE00] px-2 rounded-md">
                  Prof. Dr. Syed Masud Ahmed
                </span>
              </Link>
              : A Global Health System Expert
            </h1>
          </div>
        </div>
      </div>

      {/* <TedrosQuote /> */}
      <section className="relative w-full bg-white">
        <div className="bg-[#001844] py-10 px-12 lg:px-16">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
            {/* Circular Image */}
            <div className="w-52 h-52 shrink-0 rounded-full overflow-hidden ">
              <Image
                src={SyedMasudImg}
                alt="Zarif-Rasul.jpg"
                width={500}
                height={500}
                className="object-contain w-full h-full object-right scale-150"
              />
            </div>

            <div className="bg-[#FFCE00] text-black p-4 sm:p-6 rounded-md shadow-md max-w-3xl">
              <p className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-4">
                — Prof. Dr. Syed Masud Ahmed, Director, Centre of Excellence for
                Health Systems and Universal Health Coverage
                <a
                  href="https://bd.linkedin.com/in/syed-masud-ahmed-b5430ba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </p>
              {/* comment */}
              <p className=" text-2xl md:text-[28px]  font-base leading-[1.45] md:text-justify">
                "Motivation each day could come from the small gains—like
                finding out what should be done to improve blood transfusion
                services, how to begin a Trauma Registry programme in
                Bangladeshi hospitals for Road Traffic Injury patients and so
                on."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Content */}
      <div className="max-w-screen-md mx-auto px-12 py-8 bg-white">
        {/* Question 1 */}
        <div className="mb-4">
          <h2 className="text-[18px] font-bold text-[#2D8CBB] text-justify">
            Q. What fuels your passion for public health, and what keeps you
            motivated each day?
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
            <strong>Prof. Masud Ahmed:</strong> After graduating from Dhaka
            Medical College, during my early career, I tried to do private
            practice in a small chamber attached to a drug shop in Mirpur area.
            During these times, I had to see poor and very poor patients from
            the fringe of society, among others. I soon discovered that instead
            of earning from them, I had to give them money from my own pocket.
            After a few months, I realized that I could do little to solve their
            problems in this way. The problem is big and needs something big for
            solution. I then moved to BIRDEM, and later to icddr,b, where I had
            firsthand knowledge of doing research in public health. I developed
            an interest in research and found it to serve larger groups of
            people in a public health context. This inspired me to serve larger
            groups of people by mitigating the effects of social determinants of
            health through health systems research and practice.
          </p>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
            Motivation each day could come from the small gains—like finding out
            what should be done to improve blood transfusion services, how to
            begin a Trauma Registry programme in Bangladeshi hospitals for Road
            Traffic Injury patients, or influencing policies to combat
            antimicrobial resistance, or reducing healthcare provider
            absenteeism and so on. And beyond that, a commitment to lifelong
            learning, and the thrill of researching complex health problems, and
            sustain that energy day in and day out.
          </p>
        </div>

        {/* Question 2 */}
        <div className="mb-4">
          <h2 className="text-[18px] font-bold text-[#2D8CBB] text-justify">
            Q. Who has been the most influential figure in your public health
            system journey?
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
            <strong>Prof. Masud Ahmed:</strong> Not any particular person, to
            say honestly!
          </p>
        </div>

        {/* Question 3 */}
        <div className="mb-4">
          <h2 className="text-[18px] font-bold text-[#2D8CBB] text-justify">
            Q. Being a health system expert, how you define Bangladesh health
            system?
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
            <strong>Prof. Masud Ahmed:</strong> “A pluralistic, resource-poor,
            fragmented system burdened with financial irregularities. Including
            lack of transparency and accountability”.
          </p>
        </div>

        {/* Question 4 */}
        <div className="mb-4">
          <h2 className="text-[18px] font-bold text-[#2D8CBB] text-justify">
            Q. What do you see as the most urgent global public health
            challenge, and how can we address it with limited resources?
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
            <strong>Prof. Masud Ahmed:</strong> Tackling health systems of the
            LIC/LMICs in a way so that a minimum standard of care can be
            delivered in all circumstances and for all people, through
            strengthening of the PHC and District health systems.
          </p>
        </div>

        {/* Question 5 */}
        <div className="mb-4">
          <h2 className="text-[18px] font-bold text-[#2D8CBB] text-justify">
            Q. You launched the online platform Bangladesh Health Scenario. What
            inspired this initiative, and what is its current status?
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
            <strong>Prof. Masud Ahmed:</strong> Well, I wanted to share our
            activities ({" "}
            <Link
              href="https://bracjpgsph.org/uhc"
              className="underline font-medium text-blue-500"
              target="_blank"
            >
              Centre of excellence for Health Systems and UHC
            </Link>{" "}
            at BRAC JPGSPH/Brac University ) and ideas with a broader public
            health audience who have a stake in Bangladesh&apos;s health
            systems. Currently,{" "}
            <Link
              href="https://syedmasudahmed.blogspot.com/"
              className="font-medium underline text-blue-500"
              target="_blank"
            >
              Bangladesh Health Scenario
            </Link>{" "}
            as I have become a little bit busy to spare dedicated time for this!
          </p>
        </div>

        {/* Question 6 */}
        <div className="mb-4">
          <h2 className="text-[18px] font-bold text-[#2D8CBB] text-justify">
            Q. Reflecting on your career, what has been most fulfilling, and
            what is your next major goal to accomplish?
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
            <strong>Prof. Masud Ahmed:</strong> The fact that my work is being
            felt important to others in the field (as revealed by citation
            scores of my published papers etc.). That said, I don’t have
            anything to accomplish; I don’t operate in that way!
          </p>
        </div>

        {/* Interviewer Credit */}
        <p className="text-[#001844] text-2xl mt-4 leading-relaxed text-center font-semibold bg-yellow-200 p-2 rounded-md">
          Interview conducted by{" "}
          <Link
            href="/sizear"
            className="text-blue-700 font-bold hover:underline"
          >
            Monaemul Islam Sizear
          </Link>
        </p>
      </div>
      <BioOfSyedMasudAhmed />
      {/* Toggle Button */}
      <div className="flex justify-center my-4 ">
        <Link
          href="/interview/public-health-insights-2"
          // onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 font-bold text-xl bg-[#FFCE00] text-black px-4 py-2 hover:text-white hover:bg-[#2D8CBB]   transition ease-in-out duration-200"
        >
          Next Interview
        </Link>
      </div>
    </div>
  );
};

export default PublicHealthSystemPerspective;
