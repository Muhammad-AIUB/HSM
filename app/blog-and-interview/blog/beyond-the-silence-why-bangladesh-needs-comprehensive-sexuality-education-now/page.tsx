"use client";

import Himika from "@/public/images/blog-interview/Himika.jpg";
import { ArrowRight, BookOpen, BookText } from "lucide-react";
import Image from "next/image";

import NextButton from "@/components/Shared/NextButton";
import blog3 from "@/public/images/blog-interview/blog3.jpg";
import { FaLinkedin } from "react-icons/fa";

const BeyondTheSilencePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="">
        {/* Title */}
        <h1 className="max-w-4xl text-center mx-auto py-5 text-3xl font-semibold text-[#001844] leading-snug">
          Beyond the Silence: Why Bangladesh Needs Comprehensive Sexuality
          Education Now
        </h1>

        <section className="relative w-full bg-white">
          <div className="bg-[#001844] py-10 px-4 sm:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
              {/* Circular Image */}
              <div className="w-52 h-52 shrink-0 rounded-full overflow-hidden">
                <Image
                  src={Himika}
                  alt="Dr. Himika"
                  width={500}
                  height={500}
                  quality={100}
                  priority
                  className="object-cover object-left w-full h-full"
                />
              </div>

              <div className="bg-[#FFCE00] text-black p-4 sm:p-6 rounded-md shadow-md max-w-4xl">
                <div className="text-center sm:text-left">
                  <p className="text-xl text-gray-800 font-semibold">
                    Dr. Tasnuva Nawrin Himika
                  </p>
                  <p className="text-md text-gray-800 max-w-md">
                    Physician, Academic and Public Health Researcher, Lund
                    University, Sweden
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <a
                      href="https://www.linkedin.com/in/tasnuva-nawrin-himika-651796218/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#001844] transition-colors"
                      aria-label="LinkedIn profile of Dr. Tasnuva Nawrin Himika
"
                    >
                      <FaLinkedin className="w-8 h-8" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Content Section - Reduced paragraph spacing */}
      <div className="max-w-4xl mx-auto p-4 md:p-6 bg-gray-50 rounded-lg shadow-sm text-justify">
        {/* Key Issue Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-[#001844]">
          <div className="flex items-center mb-4">
            <BookOpen className="text-[#001844] w-8 h-8 mr-2" />
            <h2 className="text-2xl font-semibold text-[#001844]">
              Confronting Cultural Taboos to Protect Adolescents in Bangladesh
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              In a bustling classroom in rural Bangladesh, Rina, a young girl
              full of questions and courage, nervously raises her hand. Her
              trembling voice dares to ask about the changes in her body—a
              moment of bravery met with an uneasy, deafening silence. The
              teacher falters, trapped by cultural taboos surrounding sexual and
              reproductive health.
            </p>
            <p className=" text-lg text-justify">
              For millions of adolescents like Rina, this silence is more than a
              moment—it is a barrier, leaving them vulnerable to misinformation,
              unintended pregnancies, sexually transmitted infections (STIs),
              and gender-based violence. The cost of these unanswered questions
              is immeasurable.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm my-6 border-l-4 border-[#3B82F6]">
          <div className="flex items-center mb-4">
            <ArrowRight className="text-[#3B82F6] w-8 h-8 mr-2" />
            <h2 className="text-2xl font-bold text-[#001844]">
              The Case for Comprehensive Sexuality Education
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              Comprehensive Sexuality Education (CSE) equips young people with
              the knowledge, skills, and confidence to navigate their lives
              responsibly while respecting cultural and moral values.
            </p>
            <p className="text-lg text-justify">
              In Bangladesh, where over{" "}
              <a
                href="https://serac-bd.org/policy-brief-on-strengthening-delivery-of-comprehensive-sexuality-education/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                32 million adolescents
              </a>{" "}
              face issues like early marriage and teenage pregnancies, CSE is
              vital for improving adolescent health. Despite the{" "}
              <a
                href="https://www.unicef.org/bangladesh/sites/unicef.org.bangladesh/files/2018-10/National-Strategy-for-Adolescent-Health-2017-2030.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                National Strategy for Adolescent Health 2017–2030,
              </a>{" "}
              implementation remains limited,{" "}
              <a
                href="https://education-profiles.org/central-and-southern-asia/bangladesh/~comprehensive-sexuality-education"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                particularly in education.
              </a>{" "}
            </p>

            <Image
              src={blog3 || "/placeholder.svg"}
              alt="blog"
              width={800}
              height={400}
              quality={100}
              className="max-w-screen-lg mx-auto w-full object-cover "
            />

            <p className=" text-lg text-justify">
              Bangladesh must culturally adapt CSE curricula, invest in teacher
              training, and extend programs beyond schools. Success stories—such
              as{" "}
              <a
                href="https://healtheducationresources.unesco.org/library/documents/adolescent-sexual-and-reproductive-health-programme-address-equity-social"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                UNESCO’s
              </a>{" "}
              initiative in Nepal that enhanced sexual health knowledge and
              reduced STI stigma—demonstrate the potential for change. Reforming
              CSE implementation can safeguard adolescents' sexual and
              reproductive health (SRH) rights and build a healthier, empowered
              future.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-[#F59E0B]">
          <div className="flex items-center mb-4">
            <BookText className="text-[#F59E0B] w-8 h-8 mr-2" />
            <h2 className="text-2xl font-bold text-[#001844]">
              Addressing Gender Inequality and Violence
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              CSE goes beyond health, it challenges gender inequality and
              gender-based violence by emphasizing consent, healthy
              relationships, and recognition of harmful behaviors.
            </p>

            <p className=" text-lg text-justify">
              <a
                href="https://www.icrw.org/icrw-releases-new-findings-around-gender-equity-movement-schools-gems/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                The Gender Equity Movement in Schools (GEMS)
              </a>{" "}
              curriculum illustrates CSE’s impact. After two intervention
              rounds, participants were four times more likely to hold
              gender-equitable attitudes, showing increased support for girls'
              education and opposition to gender-based violence.
            </p>

            <p className=" text-lg text-justify">
              Similarly, the{" "}
              <a
                href="https://plan-international.org/asia-pacific/case-studies/the-messenger-matters/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                Yes I Do project in Indonesia
              </a>{" "}
              empowered youth to combat child marriage and gender-based
              violence.{" "}
              <a
                href="https://www.unesco.org/en/health-education/cse"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                UNESCO
              </a>{" "}
              reports that culturally sensitive CSE programs effectively reduce
              gender-based violence and sexual exploitation. Implementing
              similar approaches in Bangladesh could encourage young advocates
              for gender equality.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-cyan-500">
          <div className="flex items-center mb-4">
            <BookText className="text-cyan-500 w-8 h-8 mr-2" />
            <h2 className="text-2xl font-bold text-[#001844]">
              Overcoming Cultural and Religious Resistance
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              Resistance to CSE in Bangladesh often stems from cultural and
              religious sensitivities. However, engaging parents, teachers, and
              community leaders has proven effective in shifting skepticism into
              acceptance.
            </p>

            <p className=" text-lg text-justify">
              The{" "}
              <a
                href="https://www.unicef.org/bangladesh/sites/unicef.org.bangladesh/files/2018-10/National-Strategy-for-Adolescent-Health-2017-2030.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                National Adolescent Strategy
              </a>{" "}
              highlights how traditional methods expose adolescents to health
              risks and social stigma, underscoring the need for comprehensive
              approaches. Programs like{" "}
              <a
                href="https://journals.plos.org/globalpublichealth/article?id=10.1371/journal.pgph.0003930"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                Adolescent-Friendly Health Services (AFHS)
              </a>{" "}
              improve health service utilization by engaging schools and
              communities.
            </p>

            <p className=" text-lg text-justify">
              <a
                href="https://www.unicef.org/bangladesh/en/topics/menstrual-hygiene"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                UNICEF’s
              </a>{" "}
              menstrual hygiene management initiative in schools has boosted
              girls’ confidence, illustrating how culturally adapted programs
              foster acceptance and create lasting impact.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-fuchsia-500">
          <div className="flex items-center mb-4">
            <BookText className="text-fuchsia-500 w-8 h-8 mr-2" />
            <h2 className="text-2xl font-bold text-[#001844]">
              Debunking Misconceptions
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              Critics claim that discussing sexuality openly might encourage
              promiscuity or undermine traditional values. However, research
              consistently shows that{" "}
              <a
                href="https://eeca.unfpa.org/sites/default/files/pub-pdf/unfpa_turkey_factsheet_all_-_who_web_r4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                CSE delays sexual initiation
              </a>{" "}
              and promotes safer behaviors.
            </p>

            <p className=" text-lg text-justify">
              <a
                href="https://csakenya.org/wp-content/uploads/CSE-IMPLEMLEMENTATION-IN-KENYA-FINAL.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                Kenya’s The Right Here Right Now (RHRN)
              </a>{" "}
              program successfully demonstrated the importance of cultural
              sensitivity. By involving parents and teachers, the program
              respected traditions while equipping adolescents with essential
              knowledge. This reinforces that CSE can coexist with tradition,
              fostering healthier communities without compromising values.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-emerald-500">
          <div className="flex items-center mb-4">
            <BookText className="text-emerald-500 w-8 h-8 mr-2" />
            <h2 className="text-2xl font-bold text-[#001844]">
              Acting Now to Protect Our Future
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              CSE is not just an educational initiative—it is a lifeline for
              millions of adolescents in Bangladesh. By improving health
              outcomes, challenging harmful norms, and involving communities,
              CSE can create lasting change.
            </p>

            <p className=" text-lg text-justify">
              Bangladesh stands at a crossroads. Will we allow taboos to dictate
              the futures of our children, or will we embrace education as a
              tool for empowerment and equality?
            </p>
            <p className=" text-lg text-justify">
              The choice is ours—and the time to act is now.
            </p>
          </div>
        </div>
      </div>

      <NextButton
        href="/blog-and-interview/blog/overcoming-budget-bottlenecks-ensuring-effective-health-financing-for-universal-health-coverage-in-bangladesh"
        text="Next Blog"
      />
    </div>
  );
};

export default BeyondTheSilencePage;
