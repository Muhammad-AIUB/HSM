"use client";

import Image from "next/image";
import { ArrowRight, BookText, BookOpen } from "lucide-react";
import TasdipDip from "@/public/images/blog-interview/TasdikDip.jpg";
import blog1 from "@/public/images/blog-interview/blog1.jpg";
import { FaLinkedin } from "react-icons/fa";
import NextButton from "@/components/Shared/NextButton";

const BridgingTheGapsBlogPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="">
        {/* Title */}
        <h1 className="max-w-4xl text-center mx-auto py-5 text-3xl font-semibold text-[#001844] leading-snug">
          Bridging the Gaps: Strengthening Mental Healthcare to Build a
          Resilient Health System in Bangladesh
        </h1>

        <section className="relative w-full bg-white">
          <div className="bg-[#001844] py-10 px-4 sm:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
              {/* Circular Image */}
              <div className="w-52 h-52 shrink-0 rounded-full overflow-hidden ">
                <Image
                  src={TasdipDip}
                  alt="Dr. M Tasdik Hasan"
                  width={500}
                  height={500}
                  quality={100}
                  priority
                  className="object-cover"
                />
              </div>

              <div className="bg-[#FFCE00] text-black p-4 sm:p-6 rounded-md shadow-md max-w-4xl">
                <div className="text-center sm:text-left">
                  <p className="text-xl text-gray-800 font-semibold">
                    Dr. M Tasdik Hasan
                  </p>
                  <p className="text-md text-gray-800 max-w-md">
                    Digital Mental Health Researcher, Action Lab, Faculty of
                    Information Technology, Monash University, Melbourne,
                    Australia
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <a
                      href="https://www.linkedin.com/in/dr-m-tasdik-hasan-aa696a40/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#001844] transition-colors"
                      aria-label="LinkedIn profile of Dr. M Tasdik Hasan"
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
              Unseen Wounds: The Mental Health Crisis Bangladesh
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              Mental health remains a critical yet often neglected aspect of
              Bangladesh’s healthcare system. The country faces significant
              challenges in addressing mental health issues, exacerbated by
              systemic gaps in healthcare delivery, societal stigma, and recent
              socio-political unrest. The tragic events of July 2024, during
              which numerous innocent lives were lost in a student-led protest,
              have underscored the urgent need for a robust mental health
              framework. The brutal crackdown by the former government, marked
              by systematic torture, arbitrary arrests, and excessive use of
              force, has left deep psychological scars on the youth, who are now
              more vulnerable than ever to mental health challenges.
            </p>

            <p className=" text-lg text-justify">
              The mental healthcare system in Bangladesh is characterized by a
              lack of integration within the broader health services, leading to
              fragmented care pathways. Current mental health services are not
              adequately incorporated into the universal health coverage
              framework, disproportionately affecting rural populations, who
              often face high out-of-pocket expenses for private care{" "}
              <span className="text-[#001844] font-medium">(Koly, 2024)</span>.
              This issue is further compounded by a shortage of qualified mental
              health professionals and an insufficient number of public mental
              health facilities. According to recent research, Bangladesh has
              only four hospital beds per 10,000 people available for mental
              health patients, highlighting a severe gap in service provision{" "}
              <span className="text-[#001844] font-medium">
                (Hasan et al., 2021)
              </span>
              .
            </p>

            <p className=" text-lg text-justify">
              Additionally, the absence of a structured referral system
              complicates access to care, as patients often seek services based
              on convenience rather than clinical need{" "}
              <span className="text-[#001844] font-medium">
                (Nuri et al., 2018)
              </span>
              . Societal stigma surrounding mental health remains a formidable
              barrier, preventing individuals from seeking help.
            </p>

            <p className=" text-lg text-justify">
              This stigma is deeply ingrained in cultural perceptions that frame
              mental illness as a personal failing rather than a medical
              condition. As a result, many individuals, particularly young
              people, suffer in silence, leading to the worsening of their
              mental health conditions. The psychological impact of these
              challenges is profound, often manifesting as heightened anxiety,
              depression, and post-traumatic stress disorder among affected
              individuals{" "}
              <span className="text-[#001844] font-medium">
                (Islam & Biswas, 2015)
              </span>
              .
            </p>
          </div>
        </div>

        <Image
          src={blog1 || "/placeholder.svg"}
          alt="blog"
          width={800}
          height={400}
          quality={100}
          className="max-w-screen-lg mx-auto w-full object-cover"
        />

        {/* Call to Action Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm my-6 border-l-4 border-[#3B82F6]">
          <div className="flex items-center mb-4">
            <ArrowRight className="text-[#3B82F6] w-8 h-8 mr-2" />
            <h2 className="text-2xl font-bold text-[#001844]">
              Addressing the Gaps: A Call for Systemic Change
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              A multifaceted approach is required to address these persistent
              challenges. Firstly, there is an urgent need for policy reforms
              that elevate mental health as a national priority. Integrating
              mental health services into primary healthcare settings can
              enhance accessibility and affordability, especially for rural
              populations{" "}
              <span className="text-[#001844] font-medium">(Koly, 2024)</span>.
              Additionally, investing in training programs for healthcare
              providers is crucial to equipping them with the skills necessary
              to recognize and effectively treat mental health conditions{" "}
              <span className="text-[#001844] font-medium">
                (Hasan et al., 2021)
              </span>
              .
            </p>

            <p className=" text-lg text-justify">
              Beyond clinical care, community-based mental health initiatives
              can play a pivotal role in reducing stigma and increasing
              awareness. Engaging local leaders, influencers, and educators in
              mental health advocacy can help shift public perceptions and
              encourage individuals to seek support without fear of
              discrimination{" "}
              <span className="text-[#001844] font-medium">
                (Islam & Biswas, 2015)
              </span>
              . Leveraging digital technologies, including telemedicine,
              innovative social media campaigns, and co-designed digital support
              tools, can also broaden mental health outreach and education.
            </p>

            <p className=" text-lg text-justify">
              Collaboration between the government, non-governmental
              organizations, and international partners is essential to creating
              supportive environments that foster mental well-being. This is
              particularly crucial in the aftermath of traumatic events, such as
              the July protests, where mental health support systems must be
              readily available for affected individuals.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-[#F59E0B]">
          <div className="flex items-center mb-4">
            <BookText className="text-[#F59E0B] w-8 h-8 mr-2" />
            <h2 className="text-2xl font-bold text-[#001844]">
              The Urgency of Reform
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              The mental health landscape in Bangladesh is fraught with
              challenges that demand immediate and systemic intervention. The
              tragic loss of young lives, unprecedented systemic violence, and
              the countless injuries sustained during the recent protests
              highlight the pressing need to strengthen mental health services.
              Policy reforms—such as amending the recent Mental Health Act and
              refining the National Mental Health Strategic Plan 2020–2030—are
              critical steps toward achieving a more inclusive and responsive
              mental healthcare system.
            </p>

            <p className=" text-lg text-justify">
              By strengthening professional training, expanding community-based
              mental health initiatives, integrating digital mental health
              solutions, and fostering cross-sector collaborations, Bangladesh
              can build a more inclusive and resilient mental healthcare system.
              Addressing these critical gaps will not only support the mental
              well-being of its youth but also contribute to a stronger, more
              equitable health system. The time for action is now.
            </p>
          </div>
        </div>

        {/* References Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-sm">
          <h2 className="text-xl font-bold text-[#001844] mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            References
          </h2>

          <div className="space-y-3 text-gray-700">
            <div className="p-3 bg-white rounded border-l-2 border-gray-300 hover:border-[#001844] transition-colors">
              <p>
                Hasan, M., Anwar, T., Christopher, E., Hossain, S., Hossain, M.,
                Koly, K., … & Hossain, S. (2021). The current state of mental
                healthcare in bangladesh: part 1 – an updated country profile.
                Bjpsych International, 18(4), 78-82.{" "}
                <a
                  href="https://doi.org/10.1192/bji.2021.41"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-center"
                  rel="noreferrer"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </p>
            </div>

            <div className="p-3 bg-white rounded border-l-2 border-gray-300 hover:border-[#001844] transition-colors">
              <p>
                Islam, A. and Biswas, T. (2015). Mental health and the health
                system in bangladesh: situation analysis of a neglected domain.
                American Journal of Psychiatry and Neuroscience, 3(4), 57.{" "}
                <a
                  href="https://doi.org/10.11648/j.ajpn.20150304.11"
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-center"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </p>
            </div>

            <div className="p-3 bg-white rounded border-l-2 border-gray-300 hover:border-[#001844] transition-colors">
              <p>
                Koly, K. (2024). Stakeholder perspectives of mental healthcare
                services in bangladesh, its challenges and opportunities: a
                qualitative study. Cambridge Prisms Global Mental Health, 11.{" "}
                <a
                  href="https://doi.org/10.1017/gmh.2024.30"
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-centers"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </p>
            </div>

            <div className="p-3 bg-white rounded border-l-2 border-gray-300 hover:border-[#001844] transition-colors">
              <p>
                Nuri, N., Sarker, M., Ahmed, H., Hossain, M., Beiersmann, C., &
                Jahn, A. (2018). Pathways to care of patients with mental health
                problems in bangladesh. International Journal of Mental Health
                Systems, 12(1).{" "}
                <a
                  href="https://doi.org/10.1186/s13033-018-0218-y"
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-center"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </p>
            </div>
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

export default BridgingTheGapsBlogPage;
