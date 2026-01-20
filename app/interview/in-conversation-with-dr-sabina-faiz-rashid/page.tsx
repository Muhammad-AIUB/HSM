import Image from "next/image";
import Link from "next/link";
import { interviewOrder } from "../interviewOrder";

import { FaLinkedin } from "react-icons/fa";

import Heading from "../a-leading-voice-in-global-health-systems/components/Heading";

import BioOfSabinaFaizRashid from "./BioOfSabinaFaizRashid";

const SabinaInterview = () => {
  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <div className="relative w-full  border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] leading-10"
              style={{ wordSpacing: "0.4rem" }}
            >
              IN CONVERSATION WITH{' '}
              <a
                href="https://www.linkedin.com/in/sabina-faiz-rashid-5229671aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFCE00]/40 text-[#001844] underline px-1 rounded-sm"
              >
                DR. SABINA FAIZ RASHID
              </a>
              : INSIGHTS FROM A MEDICAL
              ANTHROPOLOGIST AND GLOBAL HEALTH RESEARCHER
            </h1>
          </div>
        </div>
      </div>

      <section className="relative w-full bg-white">
        <div className="bg-[#001844] py-10 px-12 sm:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
            <div className="w-52 h-52 shrink-0 rounded-full overflow-hidden ">
              <Image
                src="/images/blog-interview/interview/Sabina Faiz Rashid.jpg"
                alt="Dr. Sabina Faiz Rashid"
                width={500}
                height={500}
                className="object-cover object-top w-full h-full"
              />
            </div>

            <div className="bg-[#FFCE00] max-w-5xl text-black p-4 sm:p-6 rounded-md shadow-md">
              <p className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-4">
                — Dr. Sabina Faiz Rashid, Academic &amp; Researcher, BRAC University
                <a
                  href="https://www.linkedin.com/in/sabina-faiz-rashid-5229671aa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </p>

              <p className=" text-2xl md:text-[28px]  font-base leading-relaxed md:text-justify">
                “Communities are rarely prioritized or even engaged in planning and policy-making processes. I have
                employed community-based participatory research to build local capacities and support people in
                claiming their rights to health and wellbeing.”
              </p>
              <p className="mt-3 text-sm text-gray-800 font-medium">Published: 22 January, 2026</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-screen-md mx-auto px-12 py-8 bg-white ">
        <Heading>Global Health and Medical Anthropology</Heading>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What initially inspired your transition from anthropology to public health, and how have you integrated these two disciplines throughout your academic and professional journey over the past 25 years?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Sabina Rashid:</span> I see my life as a series of divinely guided steps, both planned and unplanned, that ultimately led me to the School of Public Health. My deep respect for the late Fazle Hasan Abed and his lifelong dedication to serving communities inspired me to join the James P Grant School of Public Health on October 1, 2004. Previously in the early nineties I had worked at BRAC for several years, and then at Grameen and at UNICEF for shorter periods. The Dean of the School in 2004 was Mushtaque Chowdhury, with whom I had worked earlier at BRAC’s Research and Evaluation Division. I was keen to pursue both teaching and research, and the School of Public Health at BRAC University felt like the ideal space to continue my interests and commitment to living and working in Bangladesh. I joined in 2004, where there were only 4 of us at the school – Demisse Habte (International director), Shahaduzzaman (MPH coordinator), Mushtaque Chowdhury (Dean) and myself.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. You founded the Centre for Gender and Sexual and Reproductive Health and Rights in 2008. What was the purpose, and what impact has it had so far on advancing gender equity and health rights?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Sabina Rashid:</span> My work focuses on structural factors impacting urban informal settlements, adolescents, and disadvantaged populations, emphasizing the intersections between gender, health, and poverty. In 2008, I founded the <a href="https://bracjpgsph.org/cgsrhr" target="_blank" rel="noopener noreferrer" className="underline">Centre of Excellence for Gender, Sexual and Reproductive Health and Rights</a> and co-established the Centre of Excellence for Urban Equity and Health in 2013 at BRAC School of Public Health. Both Centres prioritize evidence-based approaches to influence policies and programs, sharing evidence from the Global South on national, regional, and global platforms to ensure approaches remain contextually relevant and suitable for diverse settings.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">Q. Which global health areas are you currently focused on, and what’s your next big goal?</h2>
          <p className=" mt-2 leading-relaxed text-justify"><span className="font-bold">Sabina Rashid:</span> I want to keep writing, doing meaningful research, continue teaching structural determinants of health, critical medical anthropology and community centered approaches to research. I believe it is critical to share knowledge from the ‘Global South,’ if I can use that term. There are knowledge hierarchies in public health, not only in terms of who writes what on whose behalf, but certain methodologies dominate which leave out the more nuanced perspectives of lived experiences. This is critical to put our voices and writings out there – both nationally and internationally.</p>
        </div>

        <Heading>Academia and Career</Heading>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">Q. If you had unlimited funding for one global health project, what would you do and why?</h2>
          <p className=" mt-2 leading-relaxed text-justify"><span className="font-bold">Sabina Rashid:</span> A longitudinal ethnographic with a multidisciplinary team of researchers to understand diverse communities living in precarity in urban informal settlements to improve indicators that impact directly on gender, health, wellbeing and equity. This would be participatory and co-designed with communities, practitioners and policymakers to generate robust quality evidence that can meaningfully impact policy and practice.</p>
        </div>

        <Heading>Get to Know Sabina Faiz Rashid</Heading>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">Q. Who is your public health role model, and what about their work inspires you?</h2>
          <p className=" mt-2 leading-relaxed text-justify"><span className="font-bold">Sabina Rashid:</span> I chose to remain in Bangladesh to live and work because I was deeply inspired by the late Fazle Hasan Abed, the founder of BRAC, and by others such as Shireen Huq of Naripokkho. Above all, I am inspired by those who show integrity and humility, and who have the ability to treat everyone with respect.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">Q. What book are you currently reading? What is one key insight you have taken from it?</h2>
          <p className=" mt-2 leading-relaxed text-justify"><span className="font-bold">Sabina Rashid:</span> I recently purchased two books, Mother Mary Comes to Me by Arundhati Roy and Chimamanda Ngozi Adichie’s latest, Dream Counts. The books offer insights into human nature, behavior, and relationships — essential for people-centred public health.</p>
        </div>

        <p className="text-[#001844] text-2xl mt-4 leading-relaxed text-center font-semibold bg-yellow-200 p-2 rounded-md">Interview conducted by{' '}
          <Link href="/sizear" className="text-blue-700 font-bold hover:underline">Monaemul Islam Sizear</Link>
        </p>
      </div>



      <BioOfSabinaFaizRashid />

      <div className="flex justify-center my-8">
        {(() => {
          const currentSlug = "in-conversation-with-dr-sabina-faiz-rashid";
          const idx = interviewOrder.findIndex((b) => b.slug === currentSlug);
          const next = interviewOrder[(idx + 1) % interviewOrder.length];
          return (
            <Link href={`/interview/${next.slug}`} className="mt-4 font-bold text-xl bg-[#FFCE00] text-black px-4 py-2 hover:text-white hover:bg-[#2D8CBB]   transition ease-in-out duration-200">
              Next Interview
            </Link>
          );
        })()}
      </div>
    </div>
  );
};

export default SabinaInterview;
