"use client";

import Image from "next/image";
import { ArrowRight, BookText, BookOpen } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import NextButton from "@/components/Shared/NextButton";
import { blogOrder } from "../blogOrder";

const BreakingAidDependencyBlogPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="">
        {/* Title */}
        <h1 className="max-w-4xl text-center mx-auto py-5 text-3xl font-semibold text-[#001844] leading-snug">
          Breaking the Aid Dependency Cycle: Strategies for Building Self-Sustaining Organizations
        </h1>

        <section className="relative w-full bg-white">
          <div className="bg-[#001844] py-10 px-4 sm:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
              {/* Circular Image */}
              <div className="w-52 h-52 shrink-0 rounded-full overflow-hidden ">
                <Image
                  src="/images/blog-interview/afroja-yesmin.jpg.jpg"
                  alt="Afroja Yesmin"
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
                    Afroja Yesmin
                  </p>
                  <p className="text-md text-gray-800 max-w-md">
                    Public Health Professional
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <a
                      href="https://www.linkedin.com/in/afroja-yesmin/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#001844] transition-colors"
                      aria-label="LinkedIn profile of Afroja Yesmin"
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
              When the Funding Ends
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              When donor support ends, organizations are often seen adjusting programs, cutting staff, and hoping to survive the transition. That's what I witnessed firsthand when the USAID-funded project I worked on was cancelled. It was more than just an operational shift—it felt like an identity crisis. But it also sparked a question: What does it really take for organizations to stay resilient after a donor exists?
            </p>

            <p className=" text-lg text-justify">
              While the end of donor funding is undeniably disruptive, it does not have to be the end of impact. In this blog, I share some personal reflections and learnings from a strategic management course focused on helping organizations like mine rethink sustainability in a post-donor landscape.
            </p>
          </div>
        </div>

        <Image
          src="/images/blog-interview/usaid-protest.jpg.jpg"
          alt="USAID Protest - Breaking Aid Dependency"
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
              Shift from Surviving to Strategizing
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              When external funding dries up, the instinct is often to cut costs and wait for the next grant. But surviving isn't enough. Organizations need to strategically plan for long-term resilience—starting with understanding their internal strengths and external environment.
            </p>

            <p className=" text-lg text-justify">
              Using tools like SWOT and PESTLE analysis, critical gaps can be examined such as overdependence on one donor, limited revenue generations, and weak internal systems. This will also help to identify organizational strengths: a skilled workforce, trusted brand, and technical excellence that could be leveraged beyond traditional donors. Many development organizations have untapped expertise—research, training, data analytics—that can be translated into paid services. Developing a lean, mission-aligned consulting wing isn't just a funding tactic—it's a step toward independence.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-[#F59E0B]">
          <div className="flex items-center mb-4">
            <BookText className="text-[#F59E0B] w-8 h-8 mr-2" />
            <h2 className="text-2xl font-bold text-[#001844]">
              Putting People First
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              Staff are often the first to feel the shock of donor exits. Supporting their wellbeing, growth, and involvement in changing processes isn't optional, it's foundational. Resilient organizations recognize that people are their greatest asset. Investing in staff wellbeing—through flexible policies, mental health support, or leadership development—is not a luxury; it's a survival strategy. When staff feel valued, they stay engaged, innovate from within, and carry the organization forward, even during transitions.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-[#10B981]">
          <div className="flex items-center mb-4">
            <ArrowRight className="text-[#10B981] w-8 h-8 mr-2" />
            <h2 className="text-2xl font-bold text-[#001844]">
              Leading Change from Within
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              Change is hard. But using structured models like Kotter's 8-Step Change Model can make it manageable. Change cannot be imposed—it must be co-created <span className="text-[#001844] font-medium">(Kotter, 1996)</span>. Top-down mandates may lead to temporary compliance, but lasting transformation happens only when people feel ownership of the process. When staff across all levels are included in identifying challenges, brainstorming solutions, and shaping new practices, they are more likely to engage meaningfully and adapt with purpose. Co-creation fosters trust, reduces resistance, and surfaces practical insights that top leadership alone might miss. In uncertain times, listening becomes just as important as leading.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-[#8B5CF6]">
          <div className="flex items-center mb-4">
            <BookOpen className="text-[#8B5CF6] w-8 h-8 mr-2" />
            <h2 className="text-2xl font-bold text-[#001844]">
              The Bigger Picture
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              Bangladesh is entering a new phase—graduating from donor dependency and moving toward self-reliance. For NGOs, thinktanks, and research institutes, this moment is both a risk and an opportunity. Organization's leaders must embrace complexity, welcome collaboration locally, and take bold steps toward sustainability. That means moving away from donor-driven logic toward locally grounded innovation, strategic partnerships, and accountable systems.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-[#EF4444]">
          <div className="flex items-center mb-4">
            <BookText className="text-[#EF4444] w-8 h-8 mr-2" />
            <h2 className="text-2xl font-bold text-[#001844]">
              From Aid to Ownership
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              We can no longer rely solely on external funding. The departure of a major donor like USAID is not just a loss, it's a signal! A signal to adapt, innovate, and lead differently. It's time to build systems that are locally grounded, staff-powered, and financially diverse. Only then can we continue to make impacts regardless of who signs the checks.
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
                Kotter, J. P. (1996). Leading change. Harvard Business School Press.{" "}
                <a
                  href="https://www.kotterinc.com/methodology/8-steps/"
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
          </div>
        </div>

        {/* Bio Section */}
        <div className="bg-[#E3F6FC] p-6 rounded-lg shadow-sm mt-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1976A5] text-center mb-2" style={{fontFamily: 'inherit'}}>
            Bio of Afroja Yesmin
          </h2>
          <div className="flex justify-center mb-4">
            <span className="block w-20 h-1 bg-yellow-400 rounded-full"></span>
          </div>
          <div>
            <p className="mt-2 leading-relaxed text-center text-[17px] text-[#222] text-justify">
              Afroja Yesmin is a public health professional with over a decade of experience in health system strengthening and project implementation. She previously served as Senior Implementation Manager for the USAID Strengthening Local Level Health Systems (SLLHS) Activity in Bangladesh, which was cancelled following USAID's program closure in the country. She is a Public Health graduate and currently perusing her Master of Public Affairs in Governance and Public Policy at Bangladesh Institute of Governance and Management.
            </p>
          </div>
        </div>
      </div>

      {/* Next Blog Navigation */}
      {(() => {
        const currentSlug = "breaking-the-aid-dependency-cycle-strategies-for-building-self-sustaining-organizations";
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
  );
};

export default BreakingAidDependencyBlogPage; 