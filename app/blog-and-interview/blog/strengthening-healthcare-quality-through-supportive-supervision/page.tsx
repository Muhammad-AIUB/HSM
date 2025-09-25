"use client";

import Image from "next/image";
import { ArrowRight, BookText, BookOpen, Users, Target, CheckCircle } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import NextButton from "@/components/Shared/NextButton";
import BioOfRezaulKarim from "./BioOfRezaulKarim";

const StrengtheningHealthcareQualityBlogPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="">
        {/* Title */}
        <h1 className="max-w-4xl text-center mx-auto py-5 text-3xl font-semibold text-[#001844] leading-snug">
          Strengthening Healthcare Quality through Supportive Supervision
        </h1>

        <section className="relative w-full bg-white">
          <div className="bg-[#001844] py-10 px-4 sm:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
              {/* Circular Image */}
              <div className="w-52 h-52 shrink-0 rounded-full overflow-hidden ">
                <Image
                  src="/images/blog-interview/Rezaul Karim.jpg"
                  alt="Rezaul Karim"
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
                    Rezaul Karim
                  </p>
                  <p className="text-md text-gray-800 max-w-md">
                    Public Health Professional
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <a
                      href="https://www.linkedin.com/in/rezaul-karim/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#001844] transition-colors"
                      aria-label="LinkedIn profile of Rezaul Karim"
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
      <div className="max-w-4xl mx-auto p-4 md:p-6 bg-gray-50 rounded-lg shadow-sm text-justify">
        
        {/* Supporting Supervisions Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-[#FF6B35]">
          <div className="flex items-center mb-4">
            <BookOpen className="text-[#FF6B35] w-8 h-8 mr-2" />
            <h2 className="text-2xl font-semibold text-[#FF6B35]">
              Supporting Supervisions
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg text-justify">
              One of the main priorities for any healthcare facility is to ensure quality to access universal health coverage that is responsive to the needs of its users. To achieve this, the healthcare system must be <strong>safe, effective, timely, efficient, equitable, and people-centered</strong>. Supportive Supervision (SS) done in-person can improve relationship between provider and supervisor and form the foundation to improve quality. Supportive Supervision makes the healthcare facility immune to avoid adverse event.
            </p>
            <p className="text-lg text-justify">
              QUALITY recognizes six elements (see diagram) at the healthcare facility level. Through these six-dimensions, facilities demonstrate a strong customer orientation where services consider the preferences of people they serve. Health facility services need to be accessible, available, confidential, equitable, and safe. Safety is ensured by strict adherence to upon standards of care that agreeing are-implemented by an adequately trained workforce.
            </p>
          </div>
        </div>

        {/* Six Elements of SS Diagram */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="flex justify-center">
            <Image
              src="/images/blog-interview/1.jpg"
              alt="Six Elements of Supportive Supervision"
              width={800}
              height={600}
              quality={100}
              className="max-w-full h-auto object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-[#10B981] mt-4 text-center">Figure 1: Six Elements of SS</h3>
        </div>

        {/* Quality Standards Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-[#3B82F6]">

          <div className="mb-4">
            <p className="text-lg font-semibold text-gray-800 mb-4">
              For Continuous Quality Improvement (CQI) health facility will introduce <strong>quality standards</strong> to meet patient's expectations.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#001844]">QUALITY DIMENSIONS</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#001844]">EXPLANATION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Technical Competence</td>
                  <td className="border border-gray-300 p-3">Providers are technically competent to perform the tasks required of them (as described in the service delivery protocols).</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">Safety & Security</td>
                  <td className="border border-gray-300 p-3">Appropriately screening potential clients, practicing proper infection prevention procedures, maintaining the premises and equipment; making sure that first and foremost, no harm is done in the delivery of services.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Privacy & Confidentiality</td>
                  <td className="border border-gray-300 p-3">Clients' rights to privacy and confidentiality are protected.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">Informed Choice</td>
                  <td className="border border-gray-300 p-3">Measures are taken to ensure that clients have all the information they need to make an informed choice and that clients are never coerced into accepting the service.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Continuity of Care</td>
                  <td className="border border-gray-300 p-3">Clients receiving services from healthcare facility have access to follow-up care.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Supportive Supervision Strengthens Quality Improvement */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-[#10B981]">
          <div className="flex items-center mb-4">
            <Users className="text-[#10B981] w-8 h-8 mr-2" />
            <h2 className="text-2xl font-bold text-[#001844]">
              Supportive Supervision Strengthens Quality Improvement in Healthcare Facilities
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg text-justify">
              In-person supportive supervision fosters a stronger, more effective relationship between the provider and supervisor, which is essential for enhancing and sustaining service quality.
            </p>
          </div>

          <div className="mt-6">
            <div className="flex justify-center">
              <Image
                src="/images/blog-interview/2.jpg"
                alt="Steps of Supportive Supervision in Health Facility"
                width={800}
                height={600}
                quality={100}
                className="max-w-full h-auto object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-[#10B981] mt-4 text-center">Steps of Supportive Supervision in Health Facility</h3>
          </div>
        </div>

        {/* Process of SS Circular Diagram */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="flex justify-center">
            <Image
              src="/images/blog-interview/3.jpg"
              alt="Process of Supportive Supervision"
              width={800}
              height={600}
              quality={100}
              className="max-w-full h-auto object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-[#10B981] mt-4 text-center">Figure 3: Process of SS</h3>
        </div>

        {/* Key Takeaways Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-[#FF6B35]">
          <div className="flex items-center mb-4">
            <CheckCircle className="text-[#FF6B35] w-8 h-8 mr-2" />
            <h2 className="text-2xl font-bold text-[#FF6B35]">
              Key Takeaways
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg text-justify">
              In person Supportive Supervision (SSV) can ensure high-quality work and services, detect and solve problems, prevent future problems, train staff to improve their capacity to perform, monitor implementation of activities. It also can provide constructive feedback, join problem-solving and can maintain two-way communication between supervisor and supervisees. That's why staff members will motivate to do good job. In person SSV can carry greatly influence staff. It's involves processes and skills. In-person SSV is linked to staff motivation, quality, successful implementation of activities and projects, problem-solving, and quality improvement. Supervisors can serve as role models, teachers, motivators, and mentors to their staff. SSV opens up the opportunity to minimize errors that may cause harm to the patient; the supervisor can make an immediate correction of the execution of the procedure or suspend it if necessary.
            </p>
          </div>
        </div>

      </div>

      <BioOfRezaulKarim />

      <NextButton
        href="/blog-and-interview/blog/breaking-the-aid-dependency-cycle-strategies-for-building-self-sustaining-organizations"
        text="Next Blog"
      />
    </div>
  );
};

export default StrengtheningHealthcareQualityBlogPage;
