/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

import BioOfSharmeenYasmeen from "./BioOfSharmeenYasmeen";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import SharmeenYasmeenImg from "@/public/images/blog-interview/interview/Sharmeen Yasmeen.jpg";

const PublicHealthInsightsWithSharmeenYasmeen = () => {
  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <div className="relative w-full  border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-12 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] leading-9"
              style={{ wordSpacing: "0.4rem" }}
            >
              Public Health Insights with{" "}
              <Link href="">
                <span className="bg-[#FFCE00] px-2 rounded-md font-extrabold text-[#001844] underline">
                  PROF. SHARMEEN YASMEEN:
                </span>
              </Link>{" "}
              <br /> Distinguished Academic and Public Health Expert
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
                src={SharmeenYasmeenImg}
                alt=""
                width={500}
                height={500}
                className="object-cover w-full h-full scale-125"
              />
            </div>

            <div className="bg-[#FFCE00] text-black p-4 sm:p-6 rounded-md shadow-md max-w-3xl">
              <p className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-4">
                — Prof. Sharmeen Yasmeen, Distinguished Academic and Public
                Health Expert
                <a
                  href="https://bd.linkedin.com/in/sharmeen-yasmeen-5780453a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </p>
              {/* comment */}
              <p className=" text-2xl md:text-[28px]  font-base leading-[1.45] md:text-justify">
                "Our healthcare system continues to be predominantly clinically
                oriented, which naturally draws students toward clinical
                disciplines during their academic journey. The absence of
                strategic workforce planning has resulted in an imbalanced skill
                mix in the health sector."
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
            Q. What inspired you to pursue a career in public health academia,
            and how has your journey and experience evolved through your various
            vital roles at Bangladesh Medical College?
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
            <strong>Prof. Sharmeen Yasmeen:</strong> Initially, I aspired to
            become a paediatrician, with microbiology as my second choice.
            However, my professional journey took a different turn when I was
            appointed as a Lecturer in Community Medicine at Bangladesh Medical
            College (BMC) in 1992. While teaching, I discovered the true value
            of Public Health and its critical role in health promotion and
            disease prevention. Though opportunities arose to switch to clinical
            disciplines or microbiology, my growing passion for public health
            led me to commit fully to this field.
          </p>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
            Following the completion of my postgraduate studies, I was promoted
            to Assistant Professor under the leadership of Prof. M. D. Husain, a
            dynamic and dedicated department head. Together, we actively
            promoted public health through seminars, symposia, CME, CPD
            programs, research initiatives, and journal clubs—many of which I
            led. These efforts significantly influenced our students and
            colleagues, inspiring many to pursue successful public health
            careers both nationally and internationally. Even clinicians began
            incorporating public health perspectives into their practice.
          </p>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
            I also actively participated in Mobile Health Camps organized by
            Bangladesh Medical College Hospital in rural areas across the
            country. These initiatives effectively raised community awareness
            and helped bridge the gap between curative medicine and public
            health. I remain grateful to the visionary founding leadership of
            BMC, whose support was instrumental in advancing public health
            education and practice during those formative years.
          </p>
        </div>

        {/* Question 2 */}
        <div className="mb-4">
          <h2 className="text-[18px] font-bold text-[#2D8CBB] text-justify">
            Q. As a seasoned academic, how do you assess the current landscape
            and challenges facing public health academicians in Bangladesh?
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
            <strong>Prof. Sharmeen Yasmeen:</strong> Globally, public health
            offers promising and dynamic career prospects, particularly for
            academicians. In Bangladesh, while public health education has seen
            some curriculum-based changes over the past decade, many of these
            lack practical applicability. Faculty members often remain confined
            to limited roles, receive minimal institutional support, and face
            underutilization—leading to professional dissatisfaction.
          </p>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
            Despite the evolving nature of public health challenges,
            corresponding reforms in teaching and faculty development have been
            minimal. Institutional and national initiatives to build faculty
            capacity are insufficient, and professional public health bodies
            remain largely inactive in fostering collaboration and advocacy.
          </p>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
            Our healthcare system continues to be predominantly clinically
            oriented, which naturally draws students toward clinical disciplines
            during their academic journey. The absence of strategic workforce
            planning has resulted in an imbalanced skill mix in the health
            sector.
          </p>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
            As a public health academic with 33 years of experience, it is
            disheartening to acknowledge that we have not yet done justice to
            the academic advancement of this field. Critical areas such as
            competency-based curricula, faculty development, community-engaged
            teaching, and a supportive educational environment remain
            unaddressed, leaving public health education in Bangladesh far from
            its full potential.
          </p>
        </div>

        {/* Question 3 */}
        <div className="mb-4">
          <h2 className="text-[18px] font-bold text-[#2D8CBB]">
            Q. Looking back on your career, what do you consider your most
            significant contribution or accomplishment as a faculty member
            within a leading public health institution in Bangladesh?
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
            <strong>Prof. Sharmeen Yasmeen:</strong> After completing my MPhil
            in 2005, I was promoted to Professor in 2007. Since then, I have
            been actively engaged in institutional development, including
            faculty development programs and research capacity building—both
            within Bangladesh Medical College (BMC) and in collaboration with
            external organizations.
          </p>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
            I am a founding member and former Chairperson (2019–2020) of the
            Public Health Foundation, Bangladesh (PHF, BD), where I now serve as
            an Adviser. I have played a key role in organizing 10 international
            public health conferences since 2013.
          </p>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
            As a committed social activist, I currently serve as Chairperson of
            the Autism Welfare Foundation, which provides schooling and services
            for over 150 individuals with autism. I am also the Managing
            Director of Smart Healthcare and Research Limited (SHRL), which
            focuses on maternal and child health, professional capacity
            building, research, and the use of technology to expand affordable
            healthcare access.
          </p>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
            Representing these organizations, I have participated in numerous
            national and international forums—as an advocate, speaker, expert
            panel member, and chair of scientific sessions. Each of these roles
            has enriched my professional journey, and I remain a lifelong
            learner, open to new knowledge and collaboration.
          </p>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
            The most fulfilling aspect of my career has been my students. Today,
            many of them serve in both public health and clinical disciplines
            across Bangladesh and abroad, often applying a public health lens in
            their work. Knowing I played a role in shaping their values and
            perspectives brings me profound satisfaction.
          </p>
        </div>

        {/* Question 4 */}
        <div className="mb-4">
          <h2 className="text-[18px] font-bold text-[#2D8CBB] text-justify">
            Q. You have inspired many emerging public health professionals
            through your leadership in academia and volunteer work. What
            motivates you to continue mentoring and guiding the next generation
            of public health leaders?
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
            <strong>Prof. Sharmeen Yasmeen:</strong> My inspiration comes from
            my students’ curiosity. I continuously seek ways to simplify complex
            public health concepts to enhance their understanding and enable
            effective application in exams and real-world settings. This
            approach not only strengthens their academic performance but also
            fosters genuine interest in public health and research.
          </p>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
            I remain accessible to guide, support, and encourage students
            whenever needed. As educators, we hold the responsibility to nurture
            them as future health leaders. Many of them engage as public health
            volunteers in conferences and workshops, and we organize various
            training programs for them—ranging from research and career planning
            to CPD, leadership, health fairs, camps, exhibitions, and disaster
            management events.
          </p>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
            Driven by a sense of social accountability, I believe that sharing
            knowledge and expertise is a vital contribution to building a
            healthier society. This commitment helps inspire and empower the
            next generation of public health professionals.
          </p>
        </div>

        {/* Question 5 */}
        <div className="mb-4">
          <h2 className="text-[18px] font-bold text-[#2D8CBB] text-justify">
            Q. In your view, what are the three essential qualities and skills
            women need to succeed and thrive in public health academia in
            Bangladesh, given the existing challenges and emerging
            opportunities?
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify text-[15px]">
            <strong>Prof. Sharmeen Yasmeen:</strong>
          </p>
          <ul className="list-decimal ml-10">
            <li>Stay conscience and never compromise to your self-respect.</li>
            <li>
              Become a lifetime learner to improve yourself toward infinity.
            </li>
            <li>Accepting challenge will make you more confident and bold.</li>
          </ul>
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
      <BioOfSharmeenYasmeen />

      {/* Toggle Button */}
      <div className="flex justify-center my-4 ">
        <Link
          href="/interview/development-perspective"
          // onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 font-bold text-xl bg-[#FFCE00] text-black px-4 py-2 hover:text-white hover:bg-[#2D8CBB]   transition ease-in-out duration-200"
        >
          Next Interview
        </Link>
      </div>
    </div>
  );
};

export default PublicHealthInsightsWithSharmeenYasmeen;
