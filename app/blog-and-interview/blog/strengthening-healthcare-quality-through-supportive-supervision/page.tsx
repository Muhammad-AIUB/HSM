"use client";

import Image from "next/image";
import { BookOpen, Users, TrendingUp, Heart } from "lucide-react";
import { LinkedInLogo } from "@/components/Shared/LinkedInLogo";
import NextButton from "@/components/Shared/NextButton";
import { blogOrder } from "../blogOrder";
import BioOfRezaulKarim from "./BioOfRezaulKarim";

const StrengtheningHealthcareQualityBlogPage = () => {
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
                Strengthening Healthcare Quality through
              </span>
              <br />
              <span className="text-white">Supportive Supervision</span>
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
                      src="/images/blog-interview/Rezaul Karim.jpg"
                      alt="Rezaul Karim"
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
                  <h2 className="text-3xl font-bold text-[#001844] mb-2">Rezaul Karim</h2>
                  <p className="text-xl text-[#2D8CBB] mb-4">Public Health Professional</p>
                  
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <a
                      href="https://www.linkedin.com/in/rezaul-karim/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#2D8CBB] hover:bg-[#001844] rounded-full p-3 transition-all duration-300 hover:scale-110"
                      aria-label="LinkedIn profile of Rezaul Karim"
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
        
        {/* Supporting Supervisions Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-orange-500 rounded-xl mr-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-orange-600">
                Supporting Supervisions
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-orange-100 rounded-xl border-l-8 border-orange-500">
                <p className="text-lg text-justify">
                  One of the main priorities for any healthcare facility is to ensure quality to access universal health coverage that is responsive to the needs of its users. To achieve this, the healthcare system must be <span className="font-bold text-orange-700">safe, effective, timely, efficient, equitable, and people-centered</span>. Supportive Supervision (SS) done in-person can improve relationship between provider and supervisor and form the foundation to improve quality. Supportive Supervision makes the healthcare facility immune to avoid adverse event.
                </p>
              </div>
              <div className="p-6 bg-blue-100 rounded-xl border-l-8 border-blue-500">
                <p className="text-lg text-justify">
                  QUALITY recognizes six elements (see diagram) at the healthcare facility level. Through these six-dimensions, facilities demonstrate a strong customer orientation where services consider the preferences of people they serve. Health facility services need to be accessible, available, confidential, equitable, and safe. Safety is ensured by strict adherence to upon standards of care that agreeing are-implemented by an adequately trained workforce.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Six Elements of SS Diagram */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="relative group/image">
                <Image
                  src="/images/blog-interview/1.jpg"
                  alt="Six Elements of Supportive Supervision"
                  width={800}
                  height={600}
                  quality={100}
                  className="relative rounded-xl shadow-2xl max-w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-700">
                Figure 1: Six Elements of SS
              </h3>
            </div>
          </div>
        </div>

        {/* Quality Standards Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-500 rounded-xl mr-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-blue-700">
                  Quality Standards for CQI
                </h2>
              </div>
              <p className="text-xl font-semibold text-gray-800 bg-blue-100 p-6 rounded-xl border-l-8 border-blue-500">
                For Continuous Quality Improvement (CQI) health facility will introduce <span className="font-bold text-blue-700">quality standards</span> to meet patient's expectations.
              </p>
            </div>

            <div className="overflow-hidden rounded-xl shadow-lg">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-6 text-left font-bold text-lg">QUALITY DIMENSIONS</th>
                    <th className="p-6 text-left font-bold text-lg">EXPLANATION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2 border-gray-300 hover:bg-blue-100 transition-colors">
                    <td className="p-6 font-semibold text-gray-900">Technical Competence</td>
                    <td className="p-6 text-gray-800">Providers are technically competent to perform the tasks required of them (as described in the service delivery protocols).</td>
                  </tr>
                  <tr className="border-b-2 border-gray-300 hover:bg-blue-100 transition-colors bg-gray-100">
                    <td className="p-6 font-semibold text-gray-900">Safety & Security</td>
                    <td className="p-6 text-gray-800">Appropriately screening potential clients, practicing proper infection prevention procedures, maintaining the premises and equipment; making sure that first and foremost, no harm is done in the delivery of services.</td>
                  </tr>
                  <tr className="border-b-2 border-gray-300 hover:bg-blue-100 transition-colors">
                    <td className="p-6 font-semibold text-gray-900">Privacy & Confidentiality</td>
                    <td className="p-6 text-gray-800">Clients' rights to privacy and confidentiality are protected.</td>
                  </tr>
                  <tr className="border-b-2 border-gray-300 hover:bg-blue-100 transition-colors bg-gray-100">
                    <td className="p-6 font-semibold text-gray-900">Informed Choice</td>
                    <td className="p-6 text-gray-800">Measures are taken to ensure that clients have all the information they need to make an informed choice and that clients are never coerced into accepting the service.</td>
                  </tr>
                  <tr className="hover:bg-blue-100 transition-colors">
                    <td className="p-6 font-semibold text-gray-900">Continuity of Care</td>
                    <td className="p-6 text-gray-800">Clients receiving services from healthcare facility have access to follow-up care.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Supportive Supervision Strengthens Quality Improvement */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-500 rounded-xl mr-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-purple-700">
                Supportive Supervision Strengthens Quality Improvement
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-purple-100 rounded-xl border-l-8 border-purple-500">
                <p className="text-lg text-justify">
                  In-person supportive supervision fosters a stronger, more effective relationship between the provider and supervisor, which is essential for enhancing and sustaining service quality.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex justify-center mb-6">
                <div className="relative group/image">
                  <Image
                    src="/images/blog-interview/2.jpg"
                    alt="Steps of Supportive Supervision in Health Facility"
                    width={800}
                    height={600}
                    quality={100}
                    className="relative rounded-xl shadow-2xl max-w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-purple-700">
                  Figure 2: Steps of Supportive Supervision in Health Facility
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Process of SS Circular Diagram */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="relative group/image">
                <Image
                  src="/images/blog-interview/3.jpg"
                  alt="Process of Supportive Supervision"
                  width={800}
                  height={600}
                  quality={100}
                  className="relative rounded-xl shadow-2xl max-w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-teal-700">
                Figure 3: Process of SS
              </h3>
            </div>
          </div>
        </div>

        {/* Key Takeaways Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-amber-500 rounded-xl mr-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-amber-700">
                Key Takeaways
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-8 bg-amber-100 rounded-xl border-l-8 border-amber-500 shadow-lg">
                <p className="text-lg text-justify leading-relaxed">
                  In person Supportive Supervision (SSV) can ensure high-quality work and services, detect and solve problems, prevent future problems, train staff to improve their capacity to perform, monitor implementation of activities. It also can provide constructive feedback, join problem-solving and can maintain two-way communication between supervisor and supervisees. That's why staff members will motivate to do good job. In person SSV can carry greatly influence staff. It's involves processes and skills. In-person SSV is linked to staff motivation, quality, successful implementation of activities and projects, problem-solving, and quality improvement. Supervisors can serve as role models, teachers, motivators, and mentors to their staff. SSV opens up the opportunity to minimize errors that may cause harm to the patient; the supervisor can make an immediate correction of the execution of the procedure or suspend it if necessary.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <BioOfRezaulKarim />

      <div className="mt-16 mb-16">
        {/* Next Blog Navigation */}
        {(() => {
          const currentSlug = "strengthening-healthcare-quality-through-supportive-supervision";
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

export default StrengtheningHealthcareQualityBlogPage;
