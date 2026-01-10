"use client";

import Image from "next/image";
import { BookOpen, Heart, AlertTriangle, Shield, Users, Baby } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import NextButton from "@/components/Shared/NextButton";
import { blogOrder } from "../blogOrder";
import BioOfDrKhurshidAlamHyder from "./BioOfDrKhurshidAlamHyder";

const StrengtheningPostnatalCareBlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Hero Section with Navbar Matching Colors */}
      <div className="relative overflow-hidden bg-[#001844]">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001844] via-[#2D8CBB] to-[#001844]"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30px 30px, rgba(255,206,0,0.3) 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative z-10">
          {/* Floating Title */}
          <div className="max-w-6xl mx-auto px-6 pt-16 pb-8 text-center">
            
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
              <span className="text-[#FFCE00]">
                Strengthening Postnatal Care and Tuberculosis Management in South-East Asia
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
                  <h2 className="text-3xl font-bold text-[#001844] mb-2">Dr Md Khurshid Alam Hyder</h2>
                  <p className="text-xl text-[#2D8CBB] mb-4">Global Health Expert and Former Regional Advisor Tuberculosis, WHO South-East Asia Regional Office</p>
                  
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <a
                      href="https://www.linkedin.com/in/dr-md-khurshid-alam-hyder-7978082bb/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0A66C2] hover:bg-[#004182] rounded-full p-3 transition-all duration-300 hover:scale-110"
                      aria-label="LinkedIn Profile of Dr Md Khurshid Alam Hyder"
                      title="LinkedIn"
                    >
                      <FaLinkedin className="w-6 h-6 text-white" />
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
        
        {/* Executive Summary Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-500 rounded-xl mr-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-blue-600">
                Executive Summary
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-blue-100 rounded-xl border-l-8 border-blue-500">
                <p className="text-lg text-justify">
                  Postnatal care (PNC) is vital for maternal and newborn survival, yet coverage in South-East Asia remains uneven. Nearly half of women (46%) receive comprehensive services, while 8% receive none. Rural, low-income, and less-educated families are disproportionately excluded. At the same time, the region carries 44% of the global tuberculosis (TB) burden, with TB contributing to 6–15% of maternal mortality. Around 200,000 pregnant or postpartum women develop TB annually, most in South-East Asia and Africa. Integrating TB screening into maternal health programs and expanding PNC access are urgent priorities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Challenges Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-red-500 rounded-xl mr-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-red-600">
                Key Challenges
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-red-100 rounded-xl border-l-8 border-red-500">
                <ul className="text-lg text-justify space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">•</span>
                    <span><strong>Limited PNC Access:</strong> Rural and low-income women face lower coverage; follow-ups often missed.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">•</span>
                    <span><strong>High TB Burden:</strong> South-East Asia accounts for nearly half of global TB cases; maternal TB screening is rare.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">•</span>
                    <span><strong>Health System Gaps:</strong> TB services poorly integrated into maternal health programs; weak data collection limits policy action.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Country Highlights Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-500 rounded-xl mr-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-green-600">
                Country Highlights
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-green-100 rounded-xl border-l-8 border-green-500">
                <ul className="text-lg text-justify space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span><strong>Bangladesh:</strong> Expanded community-based postnatal visits; trained midwives for maternal TB management.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span><strong>India:</strong> Mandatory TB screening during antenatal/postnatal visits; TB treatment integrated under Ayushman Bharat.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span><strong>Nepal:</strong> Telemedicine-based PNC and TB consultations; improved maternal TB data reporting.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Recommendations Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-indigo-500 rounded-xl mr-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-indigo-700">
                Regional Recommendations
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-indigo-100 rounded-xl border-l-8 border-indigo-500">
                <ul className="text-lg text-justify space-y-3">
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-2">•</span>
                    <span>Integrate TB screening into routine PNC for early detection.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-2">•</span>
                    <span>Expand mobile health clinics to reach remote communities.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-2">•</span>
                    <span>Increase funding for maternal health services, prioritizing PNC accessibility.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-2">•</span>
                    <span>Enhance data collection systems to track maternal TB cases.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-2">•</span>
                    <span>Launch awareness campaigns linking PNC to TB prevention.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Policy Implementation Strategies Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-teal-500 rounded-xl mr-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-teal-700">
                Policy Implementation Strategies
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-teal-100 rounded-xl border-l-8 border-teal-500">
                <ul className="text-lg text-justify space-y-3">
                  <li className="flex items-start">
                    <span className="text-teal-600 font-bold mr-2">•</span>
                    <span>Strengthen collaboration among health ministries, TB programs, and maternal health services.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 font-bold mr-2">•</span>
                    <span>Leverage digital health solutions such as telemedicine and mobile apps for follow-ups.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 font-bold mr-2">•</span>
                    <span>Promote research and pilot interventions to test maternal TB treatment effectiveness.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-500 rounded-xl mr-4">
                <Baby className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-purple-700">
                Conclusion
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-purple-100 rounded-xl border-l-8 border-purple-500">
                <p className="text-lg text-justify">
                  Postnatal care and tuberculosis management are intertwined public health challenges in South-East Asia. Addressing gaps in PNC coverage and integrating TB screening into maternal health programs can significantly reduce maternal and neonatal mortality. With stronger systems, digital innovations, and targeted investments, the region can ensure healthier futures for women and children.
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
          const currentSlug = "strengthening-postnatal-care-and-tuberculosis-management";
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

export default StrengtheningPostnatalCareBlogPage;
