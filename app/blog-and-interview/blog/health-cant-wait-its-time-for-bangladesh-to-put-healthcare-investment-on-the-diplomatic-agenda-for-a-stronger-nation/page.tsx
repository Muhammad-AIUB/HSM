"use client";

import Zakaria from "@/public/images/blog-interview/Zakaria.jpeg";
import { ArrowRight, BookOpen, BookText } from "lucide-react";
import Image from "next/image";

import NextButton from "@/components/Shared/NextButton";
// import blog3 from "@/public/images/blog-interview/blog3.jpg";
import { FaLinkedin } from "react-icons/fa";
import BioOfZakaria from "./BioOfZakaria";

const HealthCantWait = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="">
        {/* Title */}
        <h1 className="max-w-4xl text-center mx-auto py-5 text-3xl font-semibold text-[#001844] leading-snug">
          Health Can’t Wait: It’s Time for Bangladesh to Put Healthcare
          Investment on the Diplomatic Agenda for a Stronger Nation
        </h1>

        <section className="relative w-full bg-white">
          <div className="bg-[#001844] py-10 px-4 sm:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
              {/* Circular Image */}
              <div className="w-52 h-52 shrink-0 rounded-full overflow-hidden">
                <Image
                  src={Zakaria}
                  alt="Zakaria"
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
                    Zakaria Bin Amjad
                  </p>
                  <p className="text-md text-gray-800 max-w-md">
                    Career Diplomat and Health Diplomacy Enthusiast
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <a
                      href="https://www.linkedin.com/in/zakaria-bin-amjad-ba7421108/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#001844] transition-colors"
                      aria-label="LinkedIn profile of Zakaria Bin Amjad"
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
              Positioning Health at the Heart of Bangladesh’s Diplomatic
              Strategy
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              As Bangladesh prepares to graduate from its Least Developed
              Country (LDC) status, the country faces a major reckoning: its
              health sector remains drastically underfunded, and traditional
              sources of development finance are drying up. Donor priorities
              have shifted, concessional funds are tapering off, and the
              domestic economy is under strain. Amid this uncertainty,
              Bangladesh must turn to a powerful but underused tool in health
              sector—its foreign policy.
            </p>
            <p className=" text-lg text-justify">
              So far, diplomatic efforts have focused primarily on trade, labor
              migration, and attracting investment into manufacturing and
              infrastructure. Health, despite being central to human capital
              formation and national resilience, has rarely been promoted as a
              strategic economic sector. This gap in our diplomacy is no longer
              sustainable.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm my-6 border-l-4 border-[#3B82F6]">
          <div className="flex items-center mb-4">
            <ArrowRight className="text-[#3B82F6] w-8 h-8 mr-2" />
            <h2 className="text-2xl font-bold text-[#001844]">
              Unlocking Global Health Investments: Bangladesh’s Path Forward
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              Around the world, health is emerging as a serious investment
              frontier. Global interest in health-tech startups, telemedicine,
              medical tourism, and tertiary care infrastructure is soaring.
              Countries like{" "}
              <a
                href="https://economictimes.indiatimes.com/industry/healthcare/biotech/healthcare/foreign-investors-in-love-with-indian-hospitals-write-1-5-billion-cheque/articleshow/116006968.cms?from=mdr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                India
              </a>{" "}
              and{" "}
              <a
                href="https://www.hospitalmanagementasia.com/hospital-management/vietnams-healthcare-boom-why-global-investors-are-eyeing-a-slice-of-the-pie/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                Vietnam
              </a>{" "}
              have already capitalized on this trend, attracting billions in
              foreign investment into hospital networks and digital health
              ventures. Bangladesh cannot afford to be left behind.
            </p>
            <p className="text-lg text-justify">
              The way forward lies in public-private partnerships (PPPs), which
              offer the most realistic path to mobilize new health sector
              resources. But PPPs don’t succeed in a vacuum. They need policy
              clarity, investment incentives, and—crucially—diplomatic support.
            </p>
            <p className="text-lg text-justify">
              Bangladesh Investment Development Authority{" "}
              <a
                href="https://bida.gov.bd/healthcare"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                (BIDA)
              </a>{" "}
              has made encouraging moves by offering incentives in tertiary
              care, diagnostics, and medical manufacturing. Yet uptake from
              foreign investors remains unclear, and health still appears as a
              side note, not a headline, in economic diplomacy.
            </p>

            {/* <Image
              src={blog3 || "/placeholder.svg"}
              alt="blog"
              width={800}
              height={400}
              quality={100}
              className="max-w-screen-lg mx-auto w-full object-cover "
            /> */}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-[#F59E0B]">
          <div className="flex items-center mb-4">
            <BookText className="text-[#F59E0B] w-8 h-8 mr-2" />
            <h2 className="text-2xl font-bold text-[#001844]">
              Integrating Health Investment into Diplomacy: A Vision for
              Innovation
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              We need to change that. Health sector proposals should become part
              of every bilateral investment dialogue, joint commission meeting,
              and high-level visit. Diplomats should be equipped with concrete
              investment cases—proposals for hospitals, training institutes,
              diagnostics networks, and health innovation hubs. Bangladesh
              already has a few examples to build from: the PPP renal dialysis
              unit at{" "}
              <a
                href="https://www.pppo.gov.bd/projects-hemodialysis-kidney.php"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                NIKDU
              </a>{" "}
              and{" "}
              <a
                href="https://www.tbsnews.net/bangladesh/china-build-3-hospitals-bangladesh-including-1000-bed-facility-gift-1115346"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                China’s
              </a>{" "}
              proposed tertiary hospital could both serve as flagship models of
              health diplomacy.
            </p>

            <p className=" text-lg text-justify">
              We must also innovate. Just as Bangladesh established special
              economic zones to boost industrial investment, it should explore
              the idea of “health parks”—dedicated zones offering streamlined
              regulations, shared infrastructure, and co-location opportunities
              for healthcare investors. Imagine a cluster housing a hospital,
              medical college, diagnostics hub, and digital health startups—all
              supported by foreign capital and local expertise.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-cyan-500">
          <div className="flex items-center mb-4">
            <BookText className="text-cyan-500 w-8 h-8 mr-2" />
            <h2 className="text-2xl font-bold text-[#001844]">
              Strategic Health Investment: A Diplomatic Imperative for
              Bangladesh
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              To unlock this potential, Bangladesh must adopt a sector-specific{" "}
              <a
                href="https://heu.portal.gov.bd/sites/default/files/files/heu.portal.gov.bd/page/9a062372_2414_4cb0_82cc_f26ef57754aa/2022-06-06-13-18-2d7b917b52f831622f1dae6e6a6acfd4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                PPP guideline
              </a>{" "}
              for health. A clear roadmap—outlining operational models,
              risk-sharing strategies, and accountability mechanisms—will help
              reduce uncertainty and attract serious investors.
            </p>

            <p className=" text-lg text-justify">
              This is not just about infrastructure—it’s about recognizing that
              while multilateral engagement on global health policy remains
              vital, the post-LDC era demands that we also elevate health
              investment as a priority in our bilateral diplomatic efforts.
            </p>
            <p className=" text-lg text-justify">
              It’s time to elevate health in Bangladesh’s diplomatic playbook.
              We have the institutions, the need, and now, the moment. What’s
              required is strategic intent—and the political will to act.
            </p>
          </div>
        </div>
      </div>

      <BioOfZakaria />

      <NextButton
        href="/blog-and-interview/blog/bridging-the-gaps-strengthening-mental-healthcare-to-build-a-resilient-health-system-in-bangladesh"
        text="Next Blog"
      />
    </div>
  );
};

export default HealthCantWait;
