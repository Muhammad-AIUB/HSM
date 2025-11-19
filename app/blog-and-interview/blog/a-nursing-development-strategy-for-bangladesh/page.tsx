"use client";

import Image from "next/image";
import { ArrowRight, BookText, BookOpen } from "lucide-react";
import AlexBerland from "@/public/images/blog-interview/alex-blog.jpg";
import NursePhoto from "@/public/images/blog-interview/nurse-photo.jpeg";
import { FaLinkedin } from "react-icons/fa";
import NextButton from "@/components/Shared/NextButton";
import BioOfAlex from "./BioOfAlex";

const NursingDevelopmentStrategyBlogPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="">
        {/* Title */}
        <h1 className="max-w-4xl text-center mx-auto py-5 text-3xl font-semibold text-[#001844] leading-snug">
          A Nursing Development Strategy for Bangladesh
        </h1>

        <section className="relative w-full bg-white">
          <div className="bg-[#001844] py-10 px-4 sm:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
              {/* Circular Image */}
              <div className="w-52 h-52 shrink-0 rounded-full overflow-hidden ">
                <Image
                  src={AlexBerland}
                  alt="Alex Berland"
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
                    Alex Berland
                  </p>
                  <p className="text-md text-gray-800 max-w-md">
                    Global Health and Nursing Education Specialist
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <a
                      href="https://www.linkedin.com/in/alex-berland-b7618221/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#001844] transition-colors"
                      aria-label="LinkedIn profile of Alex Berland"
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
              Purpose – achieving benefits, minimizing risks
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              <strong>1.</strong> Increasing and improving production of nurses is widely discussed in Bangladesh. There are obvious benefits from meeting national health care needs as well as remittances by nurses who emigrate. There are also risks and hazards for funders, for population health and for nurses themselves. The purpose of this paper is to suggest a way forward that may mitigate the risks and also achieve the benefits of strengthening the nursing profession in Bangladesh.
            </p>
          </div>
        </div>

        <Image
          src={NursePhoto || "/placeholder.svg"}
          alt="Nursing in Bangladesh"
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
              Background – the case for action
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              <strong>2.</strong> Compared even to other Lower Middle-Income Countries [LMIC], Bangladesh has fewer health care workers of all kinds. For nursing, this shortage is made worse by the low level of skills among registered nurses. Many factors cause this competency problem: low skill level of nurse educators with few opportunities for professional development; lack of practicum sites where student nurses observe good practice; weak approval processes for nursing colleges. Other context problems include weak professional regulation; physician resistance to advancement of nurses; and unlicensed and untrained workers calling themselves nurses.
            </p>

            <p className=" text-lg text-justify">
              <strong>3.</strong> Improving the nurse situation in Bangladesh is not a new idea. During the past 25 years, international donors have invested substantially in programs to "strengthen nursing in Bangladesh". (Our conservative estimate is over $50 million USD. The results have been disappointing, partly due to implementation challenges, such as the clinical practice environment, internal resistance and malfeasance. There have also been donor mis-steps due to importation of "Western" approaches: BSN entry-to-practice is expensive; assumptions about governance have been unrealistic; the focus on hospital care neglects primary or universal health care which could benefit more Bangladeshis.
            </p>

            <p className=" text-lg text-justify">
              <strong>4.</strong> Despite nearly three decades of external support, nurse-to-population ratios are not much improved. The incessant effect of brain drain is like pouring water into a bath-tub with no stopper plug. It seems unlikely that donors will again commit this level of external support to help Bangladesh fix its health care system, particularly if the internal problems persist.
            </p>

            <p className=" text-lg text-justify">
              <strong>5.</strong> On a positive note, there exists today a better understanding of both the potential contribution of nurses and the opportunities for good jobs here and abroad. For several years government policy has promoted nurse emigration. This has resulted in strong demand for nurse education, despite its generally poor quality. The downside is that we can expect thousands of unemployable nursing graduates in the next few years: unable to pass qualifying exams overseas, yet lacking primary health care skills to serve the national population.
            </p>

            <p className=" text-lg text-justify">
              <strong>6.</strong> From a population health perspective, the last two decades have been a missed opportunity. Bangladesh has been identified as an LMIC with above-average burden of non-communicable diseases, pandemic risks and antimicrobial resistance. These national problems will be intensified by global impacts such as climate change and economic shocks. The situation requires urgent and focused strategy to reduce the impact.
            </p>
          </div>
        </div>

        {/* Recommended systems-level approach */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-[#F59E0B]">
          <div className="flex items-center mb-4">
            <BookText className="text-[#F59E0B] w-8 h-8 mr-2" />
            <h2 className="text-2xl font-bold text-[#001844]">
              Recommended systems-level approach
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              <strong>7.</strong> Position the professional development strategy for nursing in a broader context of integrated people-centred change. Use a health labour market framework for a systems-thinking approach.
            </p>

            <p className=" text-lg text-justify">
              <strong>8.</strong> Minimize costs by improving performance of existing structures, adding only targeted resources. (This will require strong leadership from government-side.)
            </p>

            <p className=" text-lg text-justify">
              <strong>9.</strong> Strengthen governance capacity for reforms, especially related to accreditation of educators, scope of practice, new cadres, initial licensing requirements and human resource planning.
            </p>

            <p className=" text-lg text-justify">
              <strong>10.</strong> Recognize the impact of the political economy in reforming the nursing profession, such as, lack of coordination among donors, internal conflict among nurses' associations and professional groups, resistance from organized medicine, absence of other stakeholders.
            </p>

            <p className=" text-lg text-justify">
              <strong>11.</strong> Tackling these impacts might mean: working with select owners of private nursing colleges; appointing change agents to DGNM and BNMC; engaging stakeholders from journalism, human rights and grass-roots NGOs to advocate around the nursing strategy.
            </p>
          </div>
        </div>

        {/* Recommendations for immediate action */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-[#10B981]">
          <div className="flex items-center mb-4">
            <ArrowRight className="text-[#10B981] w-8 h-8 mr-2" />
            <h2 className="text-2xl font-bold text-[#001844]">
              Recommendations for immediate action
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              <strong>12.</strong> Appoint and resource a National Nursing Task Group headed by a senior policy analyst to create the nursing development strategy. Instruct them to complete within 30 days a road-map for developing a new nursing strategy within 120 days, including:
            </p>

            <div className="ml-6 space-y-3">
              <p className=" text-lg text-justify">
                <strong>a.</strong> Plans for an update to 2021 - Health Labour Market Analysis and 2018 - Mapping of Health Education Institutions in Bangladesh to inform and advance the nursing strategy.
              </p>

              <p className=" text-lg text-justify">
                <strong>b.</strong> A process to engage with development partners concerning their input and support for a new nursing strategy.
              </p>

              <p className=" text-lg text-justify">
                <strong>c.</strong> A process to engage nursing stakeholders and other civil society organizations to determine their capacity to support and aid implementation of the nursing strategy.
              </p>
            </div>
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
                World Health Organization. (2020). State of the world's nursing – Bangladesh 2020. Geneva: WHO.
              </p>
            </div>

            <div className="p-3 bg-white rounded border-l-2 border-gray-300 hover:border-[#001844] transition-colors">
              <p>
                Lund, K. D., Huda, S. N., & Berland, A. (Eds.). (2013). Proceedings: Cooperative Dialogue on Advanced Nursing in Bangladesh. Dhaka: Partners in Population and Development. Retrieved from{" "}
                <a
                  href="https://www.partners-popdev.org/docs/Proceedings-Cooperative%20Dialogue%202013%20ANDA.pdf"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-center"
                  rel="noreferrer"
                >
                  Proceedings – Cooperative Dialogue 2013
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
                Berland, A. (2025). Milestones for education of nurses in Bangladesh. Nelson, BC, Canada: Unpublished manuscript.
              </p>
            </div>

            <div className="p-3 bg-white rounded border-l-2 border-gray-300 hover:border-[#001844] transition-colors">
              <p>
                World Health Organization. (n.d.). Integrated people-centred care. Retrieved September 12, 2025, from{" "}
                <a
                  href="https://www.who.int/health-topics/integrated-people-centered-care#tab=tab_1"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-center"
                  rel="noreferrer"
                >
                  WHO Health Topics
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
                World Health Organization. (2021). Global strategic directions for nursing and midwifery 2021–2025. Geneva: WHO.
              </p>
            </div>

            <div className="p-3 bg-white rounded border-l-2 border-gray-300 hover:border-[#001844] transition-colors">
              <p>
                Ministry of Health and Family Welfare & World Health Organization Bangladesh. (2021). Health labour market analysis in Bangladesh 2021. Dhaka: Health Services Division. Retrieved from{" "}
                <a
                  href="https://hsd.portal.gov.bd/sites/default/files/files/hsd.portal.gov.bd/page/e620d076_40f0_4f38_a87a_7897e006a91d/Health%20Labour%20Market%20Analysis%20in%20Bangladesh_2021.pdf"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-center"
                  rel="noreferrer"
                >
                  Health Labour Market Analysis Report
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
                Directorate General of Health Services, Medical Education and Health Manpower Development & World Health Organization Bangladesh. (2018). Mapping of health professional education institutions in Bangladesh. Dhaka: DGHS & WHO Bangladesh.
              </p>
            </div>

            <div className="p-3 bg-white rounded border-l-2 border-gray-300 hover:border-[#001844] transition-colors">
              <p>
                ResearchGate. (2021). Informing investment in health workforce in Bangladesh: A health labour market analysis. Retrieved from{" "}
                <a
                  href="https://www.researchgate.net/publication/364319475_Informing_investment_in_health_workforce_in_Bangladesh_a_health_labour_market_analysis"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-center"
                  rel="noreferrer"
                >
                  ResearchGate Publication
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

      <BioOfAlex />

      <NextButton
        href="/blog-and-interview/blog/strengthening-healthcare-quality-through-supportive-supervision"
        text="Next Blog"
      />
    </div>
  );
};

export default NursingDevelopmentStrategyBlogPage;
