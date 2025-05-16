"use client";

import Image from "next/image";
import { DollarSign, BarChart3, LightbulbIcon } from "lucide-react";
import ShahPoran from "@/public/images/blog-interview/ShahParan.jpg";
import blog2 from "@/public/images/blog-interview/blog2.jpg";
import { FaLinkedin } from "react-icons/fa";
import NextButton from "@/components/Shared/NextButton";

const OvercomingBudgetBottleNeckPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="">
        {/* Title */}
        <h1 className="max-w-4xl text-center mx-auto py-4 text-3xl font-semibold text-[#001844] leading-snug">
          Overcoming Budget Bottlenecks: Ensuring Effective Health Financing for
          Universal Health Coverage in Bangladesh
        </h1>

        <section className="relative w-full bg-white">
          <div className="bg-[#001844] py-10 px-4 sm:px-8 lg:px-16">
            <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
              {/* Circular Image */}
              <div className="w-44 h-44 shrink-0 rounded-full overflow-hidden ">
                <Image
                  src={ShahPoran}
                  alt="Md. Shah Paran"
                  width={500}
                  height={500}
                  quality={100}
                  priority
                  className="object-cover"
                />
              </div>

              <div className="bg-[#FFCE00] text-black p-4 sm:p-6 rounded-md shadow-md max-w-3xl">
                <div className="text-center sm:text-left">
                  <p className="text-lg text-gray-800 font-semibold">
                    Md. Shah Paran
                  </p>
                  <p className="text-md text-gray-800 max-w-md">
                    Health Policy and Development Specialist
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <a
                      href="https://www.linkedin.com/in/shah-paran/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#001844] transition-colors"
                      aria-label="LinkedIn profile of Md. Shah Paran"
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

      {/* Content Section */}
      <div className="max-w-4xl mx-auto p-4 md:p-6 bg-gray-50 rounded-lg shadow-sm my-8">
        {/* Key Issue Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-[#001844]">
          <div className="flex items-center mb-4">
            <DollarSign className="text-[#001844] w-8 h-8 mr-2" />
            <h2 className="text-2xl font-semibold text-[#001844]">
              The Double-Edged Challenge: Low Health Budget Allocation and
              Underutilization
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              To achieve Universal Health Coverage and the Sustainable
              Development Goals, at least 15% of total budget and 4-5% of gross
              domestic product (GDP) should be invested in healthcare in
              Bangladesh. However, the allocation for health sector has remained
              less than 1% of GDP for last couple of years. A significant amount
              of allocated budget remains unspent each year and returns to the
              Ministry of Finance (MOF). The health budget in Bangladesh has
              been riddled with the double-edged challenge of lower allocation
              and underutilization of the allocated budget over the years. This
              trend is heightening the precarity of people inducing higher
              out-of-pocket expenditure (OOP). According to the sixth Bangladesh
              National Health Accounts, people are paying over twothirds of
              their treatment costs from their pocket. The share of OOP in the
              country stands above 68%, which is higher than neighboring
              countries. Higher OOP on health is exacerbating the greater risk
              of incurring catastrophic health expenditure (CHE) and plunging
              people into poverty. This write-up briefly explores the key
              challenges of health budget in Bangladesh and proposes few ways
              out.
            </p>
          </div>
        </div>
        <Image
          src={blog2}
          alt="Health budget and financing"
          width={800}
          height={400}
          quality={100}
          className="max-w-screen-lg mx-auto w-full"
        />
        {/* Barriers Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm my-6 border-l-4 border-[#3B82F6]">
          <div className="flex items-center mb-4">
            <BarChart3 className="text-[#3B82F6] w-8 h-8 mr-2" />
            <h2 className="text-2xl font-semibold text-[#001844]">
              Barriers to Effective Health Budget Utilization
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              One of the main reasons of low health budget utilization rate is
              related to procurement related complications in health sector,
              which involves number of processes including timely preparation of
              annual work plan and annual procurement plan, as well as fast
              approval of the plans from higher authority. Health managers at
              different layers of the health sector lack adequate skills on
              procurement, audit, and public financial management since they are
              not primarily trained on these technical issues, which make them
              comparatively less efficient for proper planning and utilization
              of health budget. Besides, health managers often fear to spend the
              maximum budget due to procurement related complexities, and
              absence of risk protection system from the audit. The planning and
              budget from health facilities is an incremental one, where they
              increase 5-10% in all line items from their previous years’
              budget. The centralized health financing system allows limited
              scope to local level health managers to adjust the budget if
              required.
            </p>

            <p className=" text-lg text-justify">
              The failure of prompt disbursement of allocated money from the MOF
              exacerbates the problem. Additionally, high health budget
              utilization rate does not necessarily indicate better access to
              and provision of high-quality health services. A reasonable and
              pragmatic approach on health budget does not merely focuses on
              optimum execution, but on areas of priorities, timely
              disbursement, and flexible financial management maintaining public
              procurement and finance rules.
            </p>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-[#F59E0B]">
          <div className="flex items-center mb-4">
            <LightbulbIcon className="text-[#F59E0B] w-8 h-8 mr-2" />
            <h2 className="text-2xl font-semibold text-[#001844]">
              Potential Solutions for Better Health Financing
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-lg text-justify">
              To overcome the above challenges, first, adequate training of
              health managers on public procurement system, public financial
              management, audit, planning and budgeting is a must. Keeping
              record of trained health managers and ensuring their placement in
              befitting places is also required. Second, the issue of timely
              disbursement of allocated money should be addressed by moving away
              from the centralized system and giving sufficient flexibility to
              the MOHFW and local level health managers in the Delegation of
              Financial Power so that they can adjust budgets as needed.
              However, such flexibility requires a comprehensive mechanism that
              ensures accountability as well as provides risk protection
              provision in procurement. Third, strengthening governance to
              address political interference and irregularities in procurement
              should be prioritized.
            </p>
          </div>
        </div>
      </div>
      <NextButton
        href="/blog-and-interview/blog/beyond-the-silence-why-bangladesh-needs-comprehensive-sexuality-education-now"
        text="Next Blog"
      />
    </div>
  );
};

export default OvercomingBudgetBottleNeckPage;
