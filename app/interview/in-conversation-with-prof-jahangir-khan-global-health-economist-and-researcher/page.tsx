import Image from "next/image";
import Link from "next/link";

import { FaLinkedin } from "react-icons/fa";

import Heading from "../a-leading-voice-in-global-health-systems/components/Heading";

import BioOfJahangirKhan from "./BioOfJahangirKhan";

const InConversationWithProfJahangirKhan = () => {
  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <div className="relative w-full  border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] leading-10"
              style={{ wordSpacing: "0.4rem" }}
            >
              IN CONVERSATION WITH{" "}
              <a
                href="https://www.linkedin.com/in/jahangir-khan-920986226/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFCE00] px-2 rounded-md underline"
              >
                PROF. JAHANGIR KHAN
              </a>
              : GLOBAL HEALTH ECONOMIST AND RESEARCHER
            </h1>
          </div>
        </div>
      </div>

      <section className="relative w-full bg-white">
        <div className="bg-[#001844] py-10 px-12 sm:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
            {/* Circular Image */}
            <div className="w-52 h-52 shrink-0 rounded-full overflow-hidden ">
              <Image
                src="/images/blog-interview/interview/JAHANGIR KHAN.jpeg"
                alt="Prof. Dr. Jahangir Khan"
                width={500}
                height={500}
                className="object-cover object-top w-full h-full"
              />
            </div>

            <div className="bg-[#FFCE00] max-w-5xl text-black p-4 sm:p-6 rounded-md shadow-md">
              <p className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-4">
                — Prof. Dr. Jahangir Khan – Health Economist &amp; Academician, University of Gothenburg
                <a
                  href="https://www.linkedin.com/in/jahangir-khan-920986226/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </p>

              <p className=" text-2xl md:text-[28px]  font-base leading-relaxed md:text-justify">
                “Global health values people who understand communities, systems, and what actually works
                on the ground. When your local experience is meaningful, your global opportunities will
                naturally grow.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Content */}
      <div className="max-w-screen-md mx-auto px-12 py-8 bg-white ">
        {/* Academic Journey & Path to Health Economics start */}

        <Heading>Academic Journey &amp; Path to Health Economics</Heading>

        {/* Question 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What sparked your interest in economics and led you to pursue BSc, MSc, and PhD studies at
            renowned institutions in Sweden?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Jahangir Khan:</span> My interest in economics began with a
            simple question: why do some societies prosper while others struggle despite similar resources?
            Studying economics at the BSc level gave me a solid foundation in how markets work, while my
            MSc showed me the power of data-driven research to address real-world problems. I chose to
            pursue a PhD in Sweden because its institutions combine rigorous academic training with a
            strong focus on policy, equity, and social welfare in regard with health and healthcare —an
            approach that aligns closely with my research interests and values.
          </p>
        </div>

        {/* Question 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. How did your PhD experience at Karolinska Institute shape your approach to public health?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Jahangir Khan:</span> My PhD at Karolinska Institutet, which
            centered on income redistribution in relation to sickness insurance, fundamentally shaped how I
            approach public health. It taught me that health outcomes are inseparable from economic
            incentives and social protection systems. By studying how sickness insurance redistributes
            income across different socioeconomic groups, I learned to view health not only as a medical
            issue, but as a matter of fairness, resilience, and social stability. Working in this field
            emphasized the importance of preventive policies, equitable access to resources, and designing
            systems that protect vulnerable populations. It also strengthened my belief that effective
            public health measures must be grounded in data, institutional context, and long-term social
            impact, rather than short-term cost considerations.
          </p>
        </div>

        {/* Question 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Could you share one or two mentors or teachers who had a profound impact on your personal
            and professional growth?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Jahangir Khan:</span>{" "}
            <a
              href="https://www.linkedin.com/in/bjarne-jansson-a2a62916/?originalSubdomain=se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline font-semibold"
            >
              Professor Bjarne Jansson
            </a>{" "}
            at the department of Public Health Sciences of Karolinska Institutet and{" "}
            <a
              href="https://portal.research.lu.se/en/persons/ulf-gerdtham/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline font-semibold"
            >
              Professor Ulf-G Gerdtham
            </a>{" "}
            at the department of Economics of  Lund University in Sweden. In addition,{" "}
            <a
              href="https://ki.se/en/people/clas-rehnberg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline font-semibold"
            >
              Professor Clas Rehnberg
            </a>{" "}
            from Karolinska Institutet, who contributed to my career largely.
          </p>
        </div>

        {/* Academic Journey & Path to Health Economics end */}

        {/* Global Health Impact and Career Prospects start */}

        <Heading>Global Health Impact and Career Prospects</Heading>

        {/* Question 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What key areas are you currently focusing on to advance global health?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Jahangir Khan:</span> Financial risk protection aspect of
            universal health coverage and health technology assessment (HTA).
          </p>
        </div>

        {/* Question 5 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. How would you describe your experience leading the Health Economics Unit at icddr,b? Do you
            miss working in Bangladesh?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Jahangir Khan:</span> Leading the Health Economics Unit at
            icddr,b was one of the most meaningful professional experiences of my career. I had the
            privilege of working with an exceptionally dedicated team who were deeply committed to
            improving health outcomes for vulnerable populations. My role was not just about producing
            research—it was about translating evidence into policies that directly influenced national and
            global health programs.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            I oversaw projects ranging from cost-effectiveness analyses of vaccines to evaluating health
            financing systems and equity. That work required bridging disciplines, collaborating with
            government and development partners, and ensuring that complex economic findings were
            communicated in a way that decision-makers could act on. Seeing our recommendations inform real
            public health decisions—whether in immunization planning, maternal and child health, or health
            financing—was incredibly rewarding.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            I genuinely miss working in Bangladesh. icddr,b’s blend of scientific rigor and real-world
            impact made the work deeply meaningful. The colleagues, the shared mission, and the exposure to
            health system challenges continue to influence how I approach research and policy.
          </p>
        </div>

        {/* Question 6 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Considering the current challenges in Bangladesh, which health financing strategies are most
            critical for achieving Universal Health Coverage?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Jahangir Khan:</span> Considering Bangladesh’s current
            challenges, three health financing strategies are particularly critical for moving toward
            Universal Health Coverage.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            First, we must reduce dependency on out-of-pocket payments by expanding risk-pooling mechanisms.
            When over 70% of health expenditures come directly from households, people are vulnerable to
            financial hardship and avoid seeking timely care. Introducing or scaling prepayment schemes—
            national health insurance, social health insurance for formal workers, and initially
            community-based insurance for informal sector workers —can spread risk, protect households, and
            create a more predictable funding stream. Strategic purchasing is essential here: purchasing
            services from both public and private providers under standardized benefit packages would help
            align incentives, ensure continuity of care, and leverage the rapidly expanding private sector
            rather than letting it grow in isolation.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Second, the financing system must correct the current bias toward curative care and neglect of
            preventive and promotive services. Preventive interventions are cost-effective, but they are
            chronically underfunded because their benefits appear long-term and diffuse. Dedicated budget
            lines or earmarked taxes for primary healthcare, disease prevention, and health promotion would
            ensure these services are not crowded out. Performance-based financing to reward early
            detection, continuity of care, and population health outcomes can shift providers’ focus away
            from high-margin curative services and toward prevention.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Third, incorporating private healthcare providers into the publicly funded health services.
            Incorporating private health providers into a publicly funded health system (tax-based)
            involves defining their role, setting common quality standards, and establishing clear contracts
            and pricing. Governments can reimburse approved services, integrate electronic health records to
            ensure continuity of care, and monitor performance to maintain accountability. Collaboration
            between public and private sectors should reduce wait times, expand access—especially in
            underserved areas—and support preventive and emergency services. The goal is to enhance capacity
            and efficiency while preserving equity and universal access.
          </p>
        </div>

        {/* Question 7 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What is your top piece of career advice for someone in Bangladesh aspiring to work in global
            health arena?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Jahangir Khan:</span> Focus on solving real health problems in
            Bangladesh first. Global health values people who understand communities, systems, and what
            actually works on the ground. Build strong skills, learn to communicate your work through
            writing and presentations, and connect with mentors and collaborators. When your local
            experience is meaningful, your global opportunities will naturally grow.
          </p>
        </div>

        {/* Global Health Impact and Career Prospects end */}

        {/* Skills for Health Economics start */}

        <Heading>Skills for Health Economics</Heading>

        {/* Question 8 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. In your view, what are the top three skills essential for success in health economics?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Jahangir Khan:</span>{" "}
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            1) Understanding human behavior toward maintaining good health—conceptually and in practice.
            Health economics is ultimately about people. You need to understand why individuals make
            certain health choices, how they respond to incentives, and what barriers—financial, cultural,
            psychological—shape their actions. This includes appreciating the role of family, community, and
            social norms. Successful health economists use behavioral insights both in theory (e.g., demand
            and supply, models of utility, risk aversion, time preference) and in practice—designing
            interventions that accommodate human needs. Making one’s thoughts stronger, reading philosophy
            is inevitable.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            2) Extracting appropriate quantitative data and analyzing it with theory in mind.
            Numbers alone are not enough. You must know how to gather the right data—administrative data, surveys, costing information, service utilization patterns—and then apply appropriate analytical methods. More importantly, analysis should be grounded in economic theory: demand and supply, opportunity cost, externalities, incentives, equity, and distribution. This ensures your findings explain why something is happening, not just what is happening. The best health economists maintain a tight feedback loop between real-world data and the conceptual frameworks guiding their analysis.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            3) Translating evidence into policy.
            Evidence only matters if people can use it. Health economists must be skilled at translating complex findings into clear, actionable guidance for decision-makers. That means understanding policy windows, institutional constraints, and stakeholder priorities. It also means communicating without jargon and offering practical choices—not just pointing out problems. The ability to move from analysis to policy—budgeting, benefit packages, payment mechanisms, regulation—ultimately determines whether your work improves health systems or stays confined to papers and presentations.
          </p>
        </div>

        {/* Skills for Health Economics end */}

        {/* Get to know Jahangir Khan start */}

        <Heading>Get to Know Jahangir Khan</Heading>

        {/* Question 9 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What book are you currently reading, and what key insights would you share?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Jahangir Khan:</span> Dokkōdō is a short book written by
            Miyamoto Musashi. It contains some simple rules about how to live well. It teaches that people
            should be disciplined, avoid unnecessary desires, and not rely too much on others. A truly
            valuable book in today’s stressful world.
          </p>
        </div>

        {/* Question 10 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Do you have a personal motto or mantra you live by?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Jahangir Khan:</span> “System makes things better more
            efficiently and equitably”. I believe in system development rather than improvement in any
            vertical or individual parts as the system level intervention would be more efficient and
            equitable.
          </p>
        </div>

        {/* Question 11 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Do you see yourself returning to Bangladesh in the coming years, considering your current
            career abroad (Sweden)?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Jahangir Khan:</span> Balancing personal and family interests,
            I keep the possibility of returning to Bangladesh very much alive. I’m looking for the right
            moment when I can contribute meaningfully.
          </p>
        </div>

        {/* Get to know Jahangir Khan end */}

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

      <BioOfJahangirKhan />
      <div className="flex justify-center my-8">
        <Link
          href="/interview/public-health-insights-1"
          className="mt-4 font-bold text-xl bg-[#FFCE00] text-black px-4 py-2 hover:text-white hover:bg-[#2D8CBB]   transition ease-in-out duration-200"
        >
          Next Interview
        </Link>
      </div>
    </div>
  );
};

export default InConversationWithProfJahangirKhan;


