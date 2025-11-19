"use client";

import Image from "next/image";
import { BookOpen, Users, TrendingUp, Heart, AlertTriangle, Shield, GraduationCap } from "lucide-react";
import { FaGlobe } from "react-icons/fa";
import NextButton from "@/components/Shared/NextButton";
import BioOfSharmilaHuda from "./BioOfSharmilaHuda";

const AntimicrobialResistanceBlogPage = () => {
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
                Antimicrobial Resistance in Bangladesh:
              </span>
              <br />
              <span className="text-white">A Public Health Reckoning</span>
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
                      src="/images/blog-interview/sharmin-huda.jpg"
                      alt="Dr. Sharmila Huda"
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
                  <h2 className="text-3xl font-bold text-[#001844] mb-2">Dr. Sharmila Huda</h2>
                  <p className="text-xl text-[#2D8CBB] mb-4">Pharmacologist and Academician</p>
                  
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <a
                      href="https://publichealthfoundation.org.bd/dr-sharmila-huda/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#2D8CBB] hover:bg-[#001844] rounded-full p-3 transition-all duration-300 hover:scale-110"
                      aria-label="Portfolio of Dr. Sharmila Huda"
                      title="Portfolio"
                    >
                      <FaGlobe className="w-6 h-6 text-white" />
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
        
        {/* Introduction Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-red-500 rounded-xl mr-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-red-600">
                The Threat of Antimicrobial Resistance
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-red-100 rounded-xl border-l-8 border-red-500">
                <p className="text-lg text-justify">
                  Antimicrobial resistance (AMR) has emerged as one of the most pressing public health threats of our time. In Bangladesh, where infectious diseases remain a leading cause of morbidity and mortality, the rise of resistant pathogens poses a grave challenge to the health system. Without urgent action, the effectiveness of life-saving antibiotics—the cornerstone of modern medicine—will continue to erode, leaving communities vulnerable to infections that were once easily treatable.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Roots of Resistance Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-orange-500 rounded-xl mr-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-orange-600">
                The Roots of Resistance
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-orange-100 rounded-xl border-l-8 border-orange-500">
                <p className="text-lg text-justify">
                  The drivers of AMR in Bangladesh are multifaceted, but three stand out as direct causes:
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-blue-100 rounded-xl border-l-8 border-blue-500">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Lack of Awareness</h3>
                  <p className="text-justify">Many patients and even healthcare providers remain unaware of the dangers of inappropriate antibiotic use. Self-medication, incomplete treatment courses, and the misconception that antibiotics cure viral illnesses are widespread.</p>
                </div>
                
                <div className="p-6 bg-green-100 rounded-xl border-l-8 border-green-500">
                  <h3 className="text-xl font-bold text-green-700 mb-3">Pharmaceutical Industry</h3>
                  <p className="text-justify">Aggressive marketing practices and the easy availability of antibiotics without prescription have normalized overuse. Pharmacies often dispense antibiotics without proper guidance, prioritizing sales over stewardship.</p>
                </div>
                
                <div className="p-6 bg-purple-100 rounded-xl border-l-8 border-purple-500">
                  <h3 className="text-xl font-bold text-purple-700 mb-3">Policy Gaps</h3>
                  <p className="text-justify">While national action plans on AMR exist, weak regulatory enforcement and limited surveillance capacity undermine their impact. Policies often fail to translate into practice, leaving the health system vulnerable to unchecked misuse.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Antibiotic Prescribing Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-indigo-500 rounded-xl mr-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-indigo-700">
                Antibiotic Prescribing with Misconceptions
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-indigo-100 rounded-xl border-l-8 border-indigo-500">
                <p className="text-lg text-justify">
                  Even within clinical practice, antibiotic prescribing is often shaped by persistent misconceptions. Some prescribers assume that expensive antibiotics are better than cheaper ones. Similarly, the notion that fixed-dose drug combinations are always better has led to widespread use of broad-spectrum combinations that promote resistance. These misconceptions highlight the urgent need for evidence-based prescribing guidelines, and prescriber audits to reinforce rational practices in both hospital and community settings.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Antibiotic Image Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="relative group/image">
                <Image
                  src="/images/blog-interview/bigstock-top-view-of-colorful-antibioti-299162842-1562874632229.jpg"
                  alt="Colorful Antibiotic Capsules"
                  width={600}
                  height={400}
                  quality={100}
                  className="relative rounded-xl shadow-2xl max-w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Antibiotic De-escalation Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-teal-500 rounded-xl mr-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-teal-700">
                Antibiotic De-escalation: A Key Stewardship Strategy
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-teal-100 rounded-xl border-l-8 border-teal-500">
                <p className="text-lg text-justify">
                  A crucial component of rational antibiotic use is antibiotic de-escalation—the process of stepping down from broad-spectrum to narrow-spectrum antibiotics when culture results or clinical response indicate that a less potent agent will suffice. This approach minimizes unnecessary exposure to high-end antibiotics, thereby reducing selective pressure on pathogens and preserving antibiotic effectiveness. Integrating de-escalation into hospital antibiotic policies and stewardship programs can substantially improve treatment outcomes while curbing resistance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-amber-500 rounded-xl mr-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-amber-700">
                A Call to Action: Targeting the Next Generation
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-amber-100 rounded-xl border-l-8 border-amber-500">
                <p className="text-lg text-justify">
                  At a recent dissemination seminar on WASH and AMR, the Chairperson of PHFBD, Professor Sharmeen Yasmeen emphasized a critical strategy: targeting school children to make a lasting impact. By embedding AMR education into school curricula, children can become powerful agents of change—both in their own behavior and within their families.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Building a Culture of Stewardship Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-emerald-500 rounded-xl mr-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-emerald-700">
                Building a Culture of Stewardship
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-emerald-100 rounded-xl border-l-8 border-emerald-500">
                <p className="text-lg text-justify mb-4">
                  To break the cycle of resistance, Bangladesh must adopt a holistic approach:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Education and awareness campaigns tailored to diverse populations.</li>
                  <li>Stronger regulation of antibiotic sales, ensuring mandatory prescription compliance.</li>
                  <li>Integration of AMR education into schools to build lifelong awareness.</li>
                  <li>Promotion of rational prescribing through continued medical education and stewardship programs.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* The Way Forward Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-rose-500 rounded-xl mr-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-rose-700">
                The Way Forward
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-rose-100 rounded-xl border-l-8 border-rose-500">
                <p className="text-lg text-justify">
                  The time to act is now. Without decisive steps, the unseen enemy of resistance will continue to grow stronger, threatening our health systems and also the very foundation of modern medicine.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* References Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-slate-500 rounded-xl mr-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-700">
                References
              </h2>
            </div>

            <div className="space-y-4 text-gray-800">
              <div className="p-4 bg-slate-100 rounded-lg">
                <p className="text-sm">1. World Health Organization. Empowering Bangladesh's next generation: confronting antimicrobial resistance through education and awareness. Geneva: WHO; 2023.</p>
              </div>
              <div className="p-4 bg-slate-100 rounded-lg">
                <p className="text-sm">2. Institute for Health Metrics and Evaluation. The burden of antimicrobial resistance (AMR) in Bangladesh. Seattle: IHME; 2023.</p>
              </div>
              <div className="p-4 bg-slate-100 rounded-lg">
                <p className="text-sm">3. Directorate General of Drug Administration. Steps to integrate the AMR issue into secondary educational curriculum. Dhaka: DGDA; 2023.</p>
              </div>
              <div className="p-4 bg-slate-100 rounded-lg">
                <p className="text-sm">4. Directorate General of Health Services. National strategy and action plan for antimicrobial resistance containment in Bangladesh 2023–2028. Dhaka: DGHS; 2023.</p>
              </div>
              <div className="p-4 bg-slate-100 rounded-lg">
                <p className="text-sm">5. Zujbe Z, et al. The burden of hospital-acquired infections and antibiotic resistance in Bangladesh: current trends and policy implications. Discover Public Health. 2025;5:665.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <BioOfSharmilaHuda />

      <div className="mt-16 mb-16">
        <NextButton
          href="/blog-and-interview/blog/from-river-to-table-microplastics-as-an-emerging-public-health-concern-in-bangladesh"
          text="Next Blog"
        />
      </div>
    </div>
  );
};

export default AntimicrobialResistanceBlogPage;
