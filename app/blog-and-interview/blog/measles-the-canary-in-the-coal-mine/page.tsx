"use client";

import Image from "next/image";
import {
  AlertTriangle,
  BookOpen,
  Globe,
  Shield,
  Syringe,
  Users,
} from "lucide-react";
import { LinkedInLogo } from "@/components/Shared/LinkedInLogo";
import NextButton from "@/components/Shared/NextButton";
import { blogOrder } from "../blogOrder";
import BioOfArefinIslam from "./BioOfArefinIslam";

const MeaslesCanaryBlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="relative overflow-hidden bg-[#001844]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#001844] via-[#2D8CBB] to-[#001844]"></div>

        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-6 pt-16 pb-8 text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
              <span className="text-[#FFCE00]">
                Measles — the Canary in the Coal Mine
              </span>
            </h1>
          </div>

          <div className="max-w-4xl mx-auto px-6 pb-16">
            <div className="bg-white border-4 border-[#FFCE00] rounded-3xl p-8 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="relative group">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#FFCE00]">
                    <Image
                      src="/images/blog-interview/islam.jpg"
                      alt="Dr. Arefin Islam"
                      width={400}
                      height={400}
                      quality={100}
                      priority
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-3xl font-bold text-[#001844] mb-2">
                    Dr. Arefin Islam
                  </h2>
                  <p className="text-xl text-[#2D8CBB] mb-2">
                    A Global Health Expert and Former Ex-Country Director, Noora
                    Health Bangladesh
                  </p>
                  <p className="text-base text-gray-600 mb-4">Bangladesh</p>

                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <a
                      href="https://www.linkedin.com/in/nh2468/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0A66C2] hover:bg-[#004182] rounded-full p-3 transition-all duration-300 hover:scale-110"
                      aria-label="LinkedIn Profile of Dr. Arefin Islam"
                      title="LinkedIn"
                    >
                      <LinkedInLogo size={24} variant="white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-blue-500 rounded-xl mr-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-blue-700">
              Context and Scale of the Outbreak
            </h2>
          </div>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-lg text-justify">
              Since January 2026 Bangladesh has experienced a sharp rise in
              measles cases. On 4 April 2026 the National IHR Focal Point
              notified WHO of a nationwide increase affecting 58 of 64
              districts, indicating widespread transmission. As of 1 May 2026,
              reported measles cases exceeded 38,000 and deaths with
              measles-like symptoms totaled 231.
            </p>

            <p className="text-lg text-justify">
              Most cases are among children under five years, including some
              infants younger than six months. Because of ongoing transmission
              across multiple divisions, large numbers of susceptible children,
              documented immunity gaps, and suspected measles-related deaths,
              WHO assessed the national risk as Grade 2, requiring immediate
              and substantial intervention with regional and global support.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-green-500 rounded-xl mr-4">
              <Syringe className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-green-600">
              Response and Vaccination Activities
            </h2>
          </div>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-lg text-justify">
              On 30 March 2026 the National Immunization Technical Advisory
              Group approved an emergency measles-rubella vaccination response.
              Emergency MR campaigns for children aged 6 to 59 months began on
              5 April, initially targeting about 1.2 million children in 30
              upazilas across 18 priority districts.
            </p>

            <p className="text-lg text-justify">
              A nationwide MR campaign expanded from 20 April, accompanied by
              intensified surveillance, district rapid response teams, case
              isolation, strengthened hospital preparedness, and mass
              public-awareness activities. According to national and UNICEF
              reporting, more than 11.35 million children had already been
              reached under the emergency campaign by the end of April 2026.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-red-500 rounded-xl mr-4">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-red-600">
              What Is Driving the Outbreak
            </h2>
          </div>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-lg text-justify">
              The outbreak reflects multiple causes but is driven predominantly
              by suboptimal population immunity. Many cases occurred among
              children who were unvaccinated or had received only one dose of a
              measles-containing vaccine. Some infants were infected before the
              routine eligibility age of nine months.
            </p>

            <p className="text-lg text-justify">
              Ninety-one percent of cases have been reported among children aged
              1 to 14 years, indicating major immunity gaps in that cohort, and
              34 percent of cases were in children below the routine MR
              eligibility age. That pattern has already triggered early
              vaccination in emergency settings and prompted discussion about an
              earlier measles dose in the routine program.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-indigo-500 rounded-xl mr-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-indigo-700">
              Programmatic Setbacks and Service Disruptions
            </h2>
          </div>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-lg text-justify">
              Bangladesh had made strong progress toward measles elimination in
              line with the WHO South-East Asia regional goal, with improving
              two-dose coverage and falling incidence. Several setbacks,
              however, reversed that progress. Routine EPI sessions were
              disrupted during the COVID-19 pandemic, and the EPI Coverage
              Evaluation Survey 2023 showed MR1 coverage at 92.9 percent and
              MR2 at 80.7 percent, both below the at least 95 percent threshold
              required for herd immunity.
            </p>

            <p className="text-lg text-justify">
              Repeated health-worker strikes, chronic staff shortages,
              procurement and operational delays, the absence of nationwide
              supplementary campaigns since 2021, and fewer vitamin A rounds
              increased the pool of susceptible children. Declines in
              breastfeeding and broader social determinants also contributed to
              the widening immunity gaps.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-yellow-500 rounded-xl mr-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-yellow-700">
              Clinical Impact and Community Perceptions
            </h2>
          </div>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-lg text-justify">
              Measles is highly contagious and remains a leading cause of
              childhood death worldwide. A single measles case can produce 15
              to 18 secondary infections. Complications are more frequent and
              severe in malnourished children and those with vitamin A
              deficiency or weakened immunity. These complications include
              diarrhea, pneumonia, hearing loss, blindness, encephalitis, and
              death.
            </p>

            <p className="text-lg text-justify">
              Measles also causes immune amnesia, increasing long-term
              susceptibility to other infections. The most severe long-term
              complication is subacute sclerosing panencephalitis, a rare,
              progressive, and usually fatal neurodegenerative disease that
              typically appears years after acute infection.
            </p>

            <div className="p-6 bg-yellow-100 rounded-xl border-l-8 border-yellow-500">
              <p className="text-lg text-justify font-medium">
                As noted by national expert Dr Tajul Islam A. Bari, &quot;Measles is
                a very serious disease - it literally hijacks the immunity of
                the infected person, known as immune amnesia, and increases
                long-term susceptibility to other infections.&quot;
              </p>
            </div>

            <p className="text-lg text-justify">
              In some communities, caregivers still do not perceive measles as
              serious. They may withhold protein foods from sick children or
              delay seeking care until complications develop, which worsens
              outcomes.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-cyan-500 rounded-xl mr-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-cyan-700">
              Regional Risks and Why Measles Is a Sentinel Event
            </h2>
          </div>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-lg text-justify">
              Because measles remains endemic in the WHO South-East Asia Region,
              cross-border spread is a real risk. Bangladesh&apos;s borders with
              India and Myanmar and ongoing population mobility may facilitate
              continued transmission. Myanmar is particularly vulnerable because
              of large numbers of unvaccinated children and limited surveillance
              and response capacity amid humanitarian crises, while India and
              Nepal have also reported rising case counts in recent months.
            </p>

            <p className="text-lg text-justify">
              Measles is therefore a sentinel - a canary in the coal mine - for
              deeper system weaknesses. Just as miners once used canaries to
              detect toxic gases before people were harmed, rising measles cases
              expose hidden weaknesses in immunization, supply chains, routine
              services, and the broader health system. When measles resurges, it
              often signals that other vaccine-preventable diseases may follow.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-teal-500 rounded-xl mr-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-teal-700">
              Priority Actions and Outlook
            </h2>
          </div>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-lg text-justify">
              WHO warns that continued spread is likely unless urgent measures
              are taken to strengthen surveillance, rapidly detect and respond
              to cases, and close immunity gaps through high-quality
              vaccination. Priority actions include:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-lg text-gray-800">
              <li>
                Achieve and sustain at least 95 percent two-dose MR coverage
                through routine EPI in every district each year.
              </li>
              <li>
                Conduct targeted supplementary immunization activities where
                immunity gaps are identified.
              </li>
              <li>
                Maintain strong surveillance, timely case detection and
                reporting, and rapid response capacity.
              </li>
              <li>
                Ensure vaccine availability and robust supply-chain management.
              </li>
              <li>
                Continue vitamin A supplementation and deworming as scheduled.
              </li>
              <li>
                Promote exclusive breastfeeding and address social determinants
                that increase vulnerability.
              </li>
              <li>
                Educate and engage communities to improve risk perception and
                care-seeking.
              </li>
            </ul>

            <p className="text-lg text-justify">
              With coordinated action by the Ministry of Health, development
              partners, and communities, and with restored high-quality
              vaccination coverage, Bangladesh can expect the outbreak to
              decline and resume progress toward measles elimination. Continued
              vigilance is essential to ensure no child is left unvaccinated
              against measles or any other vaccine-preventable disease.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-slate-600 rounded-xl mr-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-700">
              Sources of Information
            </h2>
          </div>

          <ol className="list-decimal pl-6 space-y-4 text-lg text-gray-800">
            <li>
              WHO - Disease Outbreak News: Measles - Bangladesh (23 April
              2026).{" "}
              <a
                href="https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON598"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2D8CBB] underline font-medium"
              >
                who.int
              </a>
            </li>
            <li>
              WHO - Bangladesh emergency MR campaign announcement (5 April
              2026).{" "}
              <a
                href="https://www.who.int/bangladesh/news/detail/05-04-2026-bangladesh-launches-emergency-measles-rubella-campaign-with-unicef--who-and-gavi-to-protect-over-1.2-million-children"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2D8CBB] underline font-medium"
              >
                who.int
              </a>
            </li>
            <li>
              WHO SEARO - Regional reporting and situation coverage.{" "}
              <a
                href="https://www.who.int/southeastasia/news/detail/15-04-2026-response-measlesBN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2D8CBB] underline font-medium"
              >
                who.int
              </a>
            </li>
            <li>
              DGHS (Bangladesh) - DGHS control room dashboard and notices.{" "}
              <a
                href="https://old.dghs.gov.bd/index.php/en/data"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2D8CBB] underline font-medium"
              >
                old.dghs.gov.bd
              </a>
            </li>
            <li>
              EPI Coverage Evaluation Survey (CES 2023) presentation and
              report.{" "}
              <a
                href="https://clh-immunisation-bd.org/wp-content/uploads/2025/09/EPI-CES-2023-Presentation.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2D8CBB] underline font-medium"
              >
                Presentation PDF
              </a>
              {" and "}
              <a
                href="https://sdg.gov.bd/uploads/indicator-data/EPI%20CES%202023%20-%20First%2028%20pages.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2D8CBB] underline font-medium"
              >
                CES extract
              </a>
            </li>
            <li>
              UNICEF - Bangladesh measles outbreak situation report, Situation
              Report No. 1 (8 April 2026).{" "}
              <a
                href="https://www.unicef.org/media/179846/file/Bangladesh-Humanitarian-Situation-Report-No.1%28Measles-Outbreak%29-8-April-2026.pdf.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2D8CBB] underline font-medium"
              >
                unicef.org
              </a>
            </li>
            <li>
              CDC - Measles signs, complications, and SSPE overview.{" "}
              <a
                href="https://www.cdc.gov/measles/signs-symptoms/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2D8CBB] underline font-medium"
              >
                Signs and symptoms
              </a>
              {" and "}
              <a
                href="https://www.cdc.gov/measles/hcp/clinical-overview/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2D8CBB] underline font-medium"
              >
                Clinical overview
              </a>
            </li>
            <li>
              WHO SEARO, Tenth meeting (SEA-Immun-174).{" "}
              <a
                href="https://www.who.int/publications/i/item/sea-immun-174"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2D8CBB] underline font-medium"
              >
                who.int
              </a>
            </li>
          </ol>
        </div>
      </div>

      <BioOfArefinIslam />

      <div className="mt-16 mb-16">
        {(() => {
          const currentSlug = "measles-the-canary-in-the-coal-mine";
          const idx = blogOrder.findIndex((b) => b.slug === currentSlug);
          const next = blogOrder[(idx + 1) % blogOrder.length];
          return (
            <NextButton
              href={`/blog-and-interview/blog/${next.slug}`}
              text="Next Blog"
            />
          );
        })()}
      </div>
    </div>
  );
};

export default MeaslesCanaryBlogPage;
