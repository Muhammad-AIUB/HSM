"use client";

import Image from "next/image";
import {
  Globe,
  AlertTriangle,
  MapPin,
  Target,
  Sparkles,
} from "lucide-react";
import { LinkedInLogo } from "@/components/Shared/LinkedInLogo";
import NextButton from "@/components/Shared/NextButton";
import { blogOrder } from "../blogOrder";
import BioOfDrKhurshidAlamHyder from "./BioOfDrKhurshidAlamHyder";

const priorities = [
  {
    label: "Strengthen Diagnostics",
    text: "Scale up rapid molecular tests to improve early detection.",
  },
  {
    label: "Expand Access to Treatment",
    text: "Ensure availability of shorter, more effective regimens for drug-resistant TB.",
  },
  {
    label: "Integrate Care",
    text: "Link TB programs with broader health initiatives, including HIV and diabetes services.",
  },
  {
    label: "Community Engagement",
    text: "Empower local communities to reduce stigma and support adherence.",
  },
  {
    label: "Global Solidarity",
    text: "Sustain international funding and collaboration to meet the End TB Strategy targets by 2030.",
  },
];

const TuberculosisTodayBlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Hero Section with Navbar Matching Colors */}
      <div className="relative overflow-hidden bg-[#001844]">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001844] via-[#2D8CBB] to-[#001844]"></div>
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 30px 30px, rgba(255,206,0,0.3) 2px, transparent 2px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="relative z-10">
          {/* Floating Title */}
          <div className="max-w-6xl mx-auto px-6 pt-16 pb-8 text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
              <span className="text-[#FFCE00]">
                Tuberculosis Today: A Global and Regional Perspective
              </span>
            </h1>
          </div>

          {/* Author Card with Navbar Matching Colors */}
          <div className="max-w-4xl mx-auto px-6 pb-16">
            <div className="bg-white border-4 border-[#FFCE00] rounded-3xl p-8 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Author Image with Navbar Matching Border */}
                <div className="relative group">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#FFCE00]">
                    <Image
                      src="/images/blog-interview/DrHyder3.jpg"
                      alt="Dr Md Khurshid Alam Hyder"
                      width={400}
                      height={400}
                      quality={100}
                      priority
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-3xl font-bold text-[#001844] mb-2">
                    Dr Md Khurshid Alam Hyder
                  </h2>
                  <p className="text-xl text-[#2D8CBB] mb-4">
                    Global Health Expert and Former Regional Advisor
                    Tuberculosis, WHO South-East Asia Regional Office
                  </p>

                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <a
                      href="https://www.linkedin.com/in/dr-md-khurshid-alam-hyder-7978082bb/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0A66C2] hover:bg-[#004182] rounded-full p-3 transition-all duration-300 hover:scale-110"
                      aria-label="LinkedIn Profile of Dr Md Khurshid Alam Hyder"
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

      {/* Content Section with High Contrast Cards */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Global Landscape Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-500 rounded-xl mr-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-blue-600">
                Global Landscape
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-blue-100 rounded-xl border-l-8 border-blue-500">
                <p className="text-lg text-justify">
                  Tuberculosis (TB) remains one of the world&rsquo;s deadliest
                  infectious diseases, but recent data bring cautious optimism.
                  The WHO Global Tuberculosis Report 2025 confirms that global TB
                  incidence has declined again for the first time since the
                  COVID-19 pandemic disrupted health services. Africa and Europe
                  have recorded the largest net decline since 2015, reflecting
                  stronger health systems and improved detection. Yet Asia,
                  particularly South-East Asia, continues to be a hot spot for
                  transmission. TB still affects millions worldwide, with 184
                  countries reporting data that cover 99% of the global
                  population and TB cases.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Drug-Resistant Tuberculosis Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-red-500 rounded-xl mr-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-red-600">
                Drug-Resistant Tuberculosis
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-red-100 rounded-xl border-l-8 border-red-500">
                <p className="text-lg text-justify">
                  Despite progress, drug-resistant TB (DR-TB) poses a growing
                  threat. Multidrug-resistant (MDR-TB) and extensive
                  drug-resistant (XDR-TB) strains complicate treatment, increase
                  mortality, and strain health systems. Forecasts suggest that
                  without stronger interventions, DR-TB cases could rise
                  significantly in high-burden regions, undermining global
                  progress. Treatment gaps remain stark: while newer drugs and
                  shorter regimens offer hope, access is uneven, particularly in
                  low- and middle-income countries, where scaling up effective
                  treatment is a challenge.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Focus Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-500 rounded-xl mr-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-green-600">
                Regional Focus: South-East Asia and Bangladesh
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-green-100 rounded-xl border-l-8 border-green-500">
                <p className="text-lg text-justify">
                  South-East Asia carries one of the highest TB burdens globally,
                  and Bangladesh is among the 30 high-burden countries. TB
                  remains a leading cause of death from infectious disease here,
                  driven by detection gaps, drug resistance, and socioeconomic
                  vulnerabilities. Many cases remain undiagnosed due to limited
                  access to diagnostic tools, while MDR-TB requires advanced
                  laboratory capacity and specialized treatment centers. Poverty,
                  malnutrition, and crowded living conditions further fuel
                  transmission. National TB programs have expanded community-based
                  screening and treatment, but coverage and adherence remain
                  critical hurdles.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Priorities Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-indigo-500 rounded-xl mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-indigo-700">
                Key Priorities Moving Forward
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-indigo-100 rounded-xl border-l-8 border-indigo-500">
                <ul className="text-lg text-justify space-y-3">
                  {priorities.map((item) => (
                    <li key={item.label} className="flex items-start">
                      <span className="text-indigo-600 font-bold mr-2">•</span>
                      <span>
                        <strong>{item.label}:</strong> {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Final Thoughts Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-500 rounded-xl mr-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-purple-700">
                Final Thoughts
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-purple-100 rounded-xl border-l-8 border-purple-500">
                <p className="text-lg text-justify">
                  Tuberculosis is both a global and regional challenge.
                  Encouraging declines in Africa and Europe show that progress is
                  possible, but countries like Bangladesh remain at the front-line
                  of the epidemic. Addressing TB requires innovation, equity, and
                  resilience; from scaling up diagnostics to tackling drug
                  resistance and engaging communities. The fight against TB is not
                  just medical but social, demanding collective action to ensure
                  that no one is left behind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BioOfDrKhurshidAlamHyder />

      <div className="mt-16 mb-16">
        {/* Next Blog Navigation */}
        {(() => {
          const currentSlug =
            "tuberculosis-today-a-global-and-regional-perspective";
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

export default TuberculosisTodayBlogPage;
