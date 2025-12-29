import Image from "next/image";
import Link from "next/link";

import { FaLinkedin } from "react-icons/fa";

import Heading from "../a-leading-voice-in-global-health-systems/components/Heading";

import BioOfKhalidHossain from "./BioOfKhalidHossain";

const FindingPurposeInClimateAction = () => {
  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <div className="relative w-full  border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] leading-10"
              style={{ wordSpacing: "0.4rem" }}
            >
              FINDING PURPOSE IN CLIMATE ACTION:{" "}
              <a
                href="https://www.linkedin.com/in/dr-khalid-hossain-7844726/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFCE00] px-2 rounded-md underline"
              >
                DR. KHALID HOSSAIN
              </a>
              'S CAREER JOURNEY FROM BANGLADESH TO AUSTRALIA
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
                src="/images/blog-interview/interview/Md Khalid Hossain.jpg"
                alt="Dr. Md Khalid Hossain"
                width={500}
                height={500}
                className="object-cover object-top w-full h-full"
              />
            </div>

            <div className="bg-[#FFCE00] max-w-5xl text-black p-4 sm:p-6 rounded-md shadow-md">
              <p className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-4">
                — Dr. Md Khalid Hossain – Researcher &amp; Academician, Monash University
                <a
                  href="https://www.linkedin.com/in/dr-khalid-hossain-7844726/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </p>

              <p className=" text-2xl md:text-[28px]  font-base leading-relaxed md:text-justify">
                "My career has always been driven by one central question: how can policy meaningfully
                improve people's lives? Bangladesh grounded me in real-world development challenges, while
                Australia has given me the academic and policy platforms to scale those insights globally."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Content */}
      <div className="max-w-screen-md mx-auto px-12 py-8 bg-white ">
        {/* Career Questions start */}

        <Heading>Career Questions</Heading>

        {/* Question 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. From engineering to trade diplomacy to climate health research? How would you
            describe this journey, and what motivated each shift and current focus?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Khalid Hossain:</span> My career has always been driven by one central question: how can
            policy meaningfully improve people's lives, especially those who are most marginalised?
            I began in civil engineering because I was fascinated by systems, infrastructures, and
            how they shape communities. But I soon realised that development challenges are never
            purely technical; they are deeply political and social. This led me to study diplomacy and
            trade, and later into roles with{" "}
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
            </a>
            , where I worked on climate justice, environmental governance, and
            community resilience. Those years in the field exposed me to the profound inequalities
            intensified by climate change. My current focus on digital transformation and climate
            health at Monash University is a natural evolution of that journey, allowing me to bring
            together science, technology, policy, and community knowledge to address some of
            the most urgent global challenges of our time.
          </p>
        </div>

        {/* Question 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Having significant working experiences in both Bangladesh and Australia, how do
            you compare the professional experiences and career opportunities in these two
            countries?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Khalid Hossain:</span> Working in Bangladesh and Australia has given me two very different
            but complementary perspectives. Bangladesh taught me agility, how to work in complex
            systems, navigate limited resources, and innovate quickly in response to urgent
            community needs. It is an environment where impact is direct and personal, and where
            professional roles often demand versatility and deep community engagement. Australia,
            in contrast, offers structured pathways for research, policy influence, and long-term
            career development. The systems are more stable, but also more process-driven, with
            strong institutional support for interdisciplinary work. Both contexts have shaped me:
            Bangladesh grounded me in real-world development challenges, while Australia has
            given me the academic and policy platforms to scale those insights globally.
          </p>
        </div>

        {/* Career Questions end */}

        {/* Climate Change and Global Health Questions start */}

        <Heading>Climate Change and Global Health Questions</Heading>

        {/* Question 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What is your main research focus at Monash University?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Khalid Hossain:</span> My research at{" "}
            <a
              href="https://research.monash.edu/en/persons/mdkhalid-hossain/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline font-semibold"
            >
              Monash University
            </a>{" "}
            focuses on digital transformation
            and the design of resilient systems that support health and wellbeing, particularly for
            marginalised and climate-vulnerable communities. A significant part of my work
            examines how{" "}
            <a
              href="https://research.monash.edu/en/projects/maternal-and-child-health-climate-resilience-in-indo-pacific-regi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline font-semibold"
            >
              climate change disrupts essential services
            </a>
            , most notably{" "}
            <a
              href="https://www.mchcarenetwork.com/countries"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline font-semibold"
            >
              maternal and child health
            </a>
            , and how information systems, inclusive technologies, and evidence-based
            policy can strengthen communities' ability to prepare for, adapt to, and withstand these
            disruptions. Central to my approach is co-design: working directly with communities to
            ensure that the technologies, data systems, and policies developed are meaningful,
            accessible, and grounded in real lived experience.
          </p>
        </div>

        {/* Question 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. How does climate change impact global health, particularly maternal and
            child health? Could you share an example to help people better understand this impact?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Khalid Hossain:</span> Climate change affects health through every pathway: heat, flooding,
            salinity, displacement, and food insecurity. Maternal and child health is especially
            vulnerable because it relies on consistent access to services, safe environments, and
            stable nutrition.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            A clear example comes from our work in Bangladesh's coastal belt: during extreme
            heatwaves and tidal flooding, pregnancy check-ups and childhood immunisation
            sessions are often cancelled because clinics become inaccessible. Salinity intrusion also
            increases hypertension and pregnancy complications. These disruptions are not "future
            risks", they are happening now, to millions of people, and the impacts compound over
            time. It shows how climate change is ultimately a human health crisis, not just an
            environmental one.
          </p>
        </div>

        {/* Question 5 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Is the global response to these health challenges sufficient? What areas do you
            think need more attention?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Khalid Hossain:</span> The global response to climate-related health challenges is improving,
            but it is still far from sufficient. Most efforts remain reactive, fragmented, and heavily
            concentrated in emergency relief rather than long-term resilience. Maternal and child
            health is a clear example: while climate impacts are accelerating, investments in climate-
            resilient health systems, early warning infrastructure, and community-centred information
            services are not keeping pace.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            We also see major gaps in integrating local knowledge into policy, ensuring digital
            connectivity in remote regions, and building data systems that allow governments to
            anticipate, not just respond to, health risks. What is urgently needed is a shift from short-
            term project thinking to sustained, multi-sector collaboration that links health, climate,
            technology, and social equity. Without this, vulnerable communities will continue to bear
            the greatest burden of climate-induced health inequities.
          </p>
        </div>

        {/* Question 6 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What are three key skills the next generation of global health and climate activists
            should focus on developing?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Khalid Hossain:</span> First, systems thinking, the ability to understand how climate, health,
            economics, and governance intersect. Second, evidence-based communication,
            because translating complex science into public understanding is critical. Third,
            collaborative leadership, which means working across cultures, disciplines, and sectors.
            The challenges we face cannot be solved by single actors; they require coalitions,
            empathy, and the ability to mobilise collective action.
          </p>
        </div>

        {/* Climate Change and Global Health Questions end */}

        {/* Get to know Khalid Hossain start */}

        <Heading>Get to know Khalid Hossain</Heading>

        {/* Question 7 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Who is your role model in professional life, and what about their work that inspires
            you most?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Khalid Hossain:</span> I have been inspired by many people, but one constant role model is
            late{" "}
            <a
              href="https://icccad.net/our-team/saleemul-huq/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline font-semibold"
            >
              Dr. Saleemul Huq
            </a>
            , whose life's work on climate justice reshaped global thinking.
            What inspires me most is not just his scholarship, but his humility and unwavering
            commitment to frontline communities. He showed that real leadership is about amplifying
            voices that are rarely heard, and ensuring that global policy reflects the lived realities of
            those most affected.
          </p>
        </div>

        {/* Question 8 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What book are you currently reading? What is one key insight you have taken
            from it?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Khalid Hossain:</span> I have recently read 'The Age of AI: And Our Human Future'. The book
            argues that Artificial Intelligence will reshape how we produce knowledge, govern
            societies, and even define what it means to be human. One key insight I have taken
            from it is the urgency of building ethical and governance frameworks around AI,
            especially as it begins to mediate critical domains such as health, climate change
            adaptation, and social welfare. As someone working on climate resilience and
            community wellbeing, I find the authors' warning that AI's power must be matched by
            human responsibility and foresight. If we embed AI carelessly into decision-making
            systems without ensuring transparency, accountability, and inclusion, we risk
            exacerbating the inequalities we already fight against.
          </p>
        </div>

        {/* Question 9 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Do you have a personal motto or mantra you live by?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Khalid Hossain:</span> My personal motto is: Listen first, act second. So much of our
            development and policy work fails because we enter communities with pre-made
            solutions. Listening with humility not only builds trust; it leads to far more effective and
            sustainable outcomes.
          </p>
        </div>

        {/* Question 10 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Do you see yourself returning to Bangladesh in the coming years, considering
            your current career abroad (Australia)?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Khalid Hossain:</span> Bangladesh will always be home, and my work will continue to have
            deep roots there. I am committed to contributing to Bangladesh's development through
            research, partnerships, capacity building, and collaborative projects, regardless of where
            I am physically based. My aim is to build bridges between Australia and Bangladesh so
            that knowledge, resources, and opportunities flow both ways.
          </p>
        </div>

        {/* Get to know Khalid Hossain end */}

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

      <BioOfKhalidHossain />
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

export default FindingPurposeInClimateAction;
