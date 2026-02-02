"use client";

import Image from "next/image";
import { BookOpen, Heart, AlertTriangle, Shield, Users, Baby } from "lucide-react";
import { LinkedInLogo } from "@/components/Shared/LinkedInLogo";
import NextButton from "@/components/Shared/NextButton";
import { blogOrder } from "../blogOrder";
import BioOfArefinIslam from "./BioOfArefinIslam";

const EmpoweredFamiliesBlogPage = () => {
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
                Empowered Families, Healthier Babies
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

                {/* Author Info */}
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-3xl font-bold text-[#001844] mb-2">Dr. Arefin Islam</h2>
                  <p className="text-xl text-[#2D8CBB] mb-4">A Global Health Expert and Former Ex-Country Director, Noora Health Bangladesh</p>
                  
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

      {/* Content Section with High Contrast Cards */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        
        {/* Introduction Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-500 rounded-xl mr-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-blue-600">
                When Mothers Learn, Babies Thrive
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-blue-100 rounded-xl border-l-8 border-blue-500">
                <p className="text-lg text-justify">
                  When Amina (pseudonym), a first-time mother from a village near Dhaka, gave birth at the local Upazila Health Complex, she felt anxious about caring for her newborn. Everything changed when she attended a hospital-based health education session. There, she learned the basics of newborn care—how to breastfeed, prevent infections through handwashing, and recognize danger signs early. Armed with this knowledge, Amina gained confidence and was able to ensure her baby's healthy growth. Today, her baby is thriving, and Amina has become an advocate for maternal and newborn health in her village, sharing what she learned with other mothers. Her story shows how empowering families can lead to healthier babies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress and the Stubborn Challenge Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-500 rounded-xl mr-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-green-600">
                Progress and the Stubborn Challenge: Bangladesh's Neonatal Health
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-green-100 rounded-xl border-l-8 border-green-500">
                <p className="text-lg text-justify mb-4">
                  Bangladesh has made significant progress in reducing neonatal deaths—from 28 per 1,000 live births in 2011 to 18 in 2023. The Sustainable Development Goal (SDG) target is to bring this number down further, to at least 12 per 1,000 by 2030. Achieving this means reducing newborn deaths by another six percent in just five years. Clearly, "business as usual" will not be enough.
                </p>
                <p className="text-lg text-justify">
                  The risks are highest immediately after birth. Nearly half of all newborn deaths occur on the first day of life, with an additional 25 percent happening in the first week. This underscores the urgent need for safe delivery, essential newborn care, quality antenatal care (at least four visits before delivery), and family education on newborn health.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Alarming Gap Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-red-500 rounded-xl mr-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-red-600">
                The Alarming Gap in Essential Newborn Care Practices
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-red-100 rounded-xl border-l-8 border-red-500">
                <p className="text-lg text-justify mb-4">
                  According to the Bangladesh Demographic and Health Survey (BDHS) 2022, only 41 percent of pregnant women received at least four antenatal visits, and only 21 percent of those were considered quality care. Around 65 percent of mothers delivered at hospitals, and 70 percent of those deliveries were attended by skilled birth attendants. Yet, essential newborn practices remain worryingly low.
                </p>
                <p className="text-lg text-justify">
                  The BDHS 2022 assessed five key newborn care practices among 1,272 non-hospital births: clean cord cutting, proper cord care, early skin-to-skin contact, immediate breastfeeding, and delaying the baby's first bath for at least 72 hours. While the target was to raise coverage of these practices to 25 percent by 2023, the combined coverage stood at just 1.2 percent. Although clean cord cutting improved from 86 percent in 2017–18 to 97 percent in 2022, other indicators worsened: proper cord care dropped from 47 percent to 41 percent, delayed bathing from 46 percent to 27 percent, and immediate breastfeeding from 69 percent to 40 percent.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* From Policy to Practice Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-indigo-500 rounded-xl mr-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-indigo-700">
                From Policy to Practice: Bridging the Implementation Gap
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-indigo-100 rounded-xl border-l-8 border-indigo-500">
                <p className="text-lg text-justify">
                  The government of Bangladesh has long recognized these challenges. Through the 2013 A Promise Renewed (APR) declaration, it committed to scaling up four key interventions: Kangaroo Mother Care, application of 1% chlorhexidine on the umbilical cord, antenatal corticosteroids, and newborn sepsis management at rural health facilities. The Bangladesh Every Newborn Action Plan (BENAP), launched in 2015, further strengthened this commitment. Yet, adoption of essential practices by families remains far from satisfactory.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Empowerment as the Key Approach Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-teal-500 rounded-xl mr-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-teal-700">
                Empowerment as the Key Approach
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-teal-100 rounded-xl border-l-8 border-teal-500">
                <p className="text-lg text-justify mb-4">
                  Hospital-based health education programs—such as the Care Companion Program—along with community-based initiatives, can play a transformative role. By equipping families with knowledge and confidence, these programs can improve newborn survival, reduce neonatal mortality, and foster healthier generations.
                </p>
                <p className="text-lg text-justify">
                  Empowering families is not just about improving statistics—it means making parents informed and engaged participants in their babies' growth and development. This includes promoting antenatal care, nutrition, vaccination, and early interventions for both physical and mental development. Families who feel confident in their caregiving role are more likely to view health as a shared responsibility—one that extends beyond individuals to the community at large.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Way Forward Section */}
        <div className="group relative">
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-500 rounded-xl mr-4">
                <Baby className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-purple-700">
                The Way Forward: Survive and Thrive
              </h2>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed">
              <div className="p-6 bg-purple-100 rounded-xl border-l-8 border-purple-500">
                <p className="text-lg text-justify">
                  Bangladesh has made remarkable strides, but to reach the SDG targets, more must be done. Strengthening healthcare infrastructure, standardizing essential newborn care practices, enhancing maternal education, and raising community awareness will be vital.
                </p>
                <p className="text-lg text-justify mt-4 font-semibold">
                  By empowering families, Bangladesh can ensure that every newborn not only survives but thrives.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <BioOfArefinIslam />

      <div className="mt-16 mb-16">
        {/* Next Blog Navigation */}
        {(() => {
          const currentSlug = "empowered-families-healthier-babies";
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

export default EmpoweredFamiliesBlogPage;

