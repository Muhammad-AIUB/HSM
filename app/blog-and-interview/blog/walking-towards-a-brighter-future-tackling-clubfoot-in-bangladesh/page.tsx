"use client";

import Image from "next/image";
import { BookOpen, Heart, Shield, Users, AlertTriangle } from "lucide-react";
import { LinkedInLogo } from "@/components/Shared/LinkedInLogo";
import NextButton from "@/components/Shared/NextButton";
import { blogOrder } from "../blogOrder";
import BioOfSumitBanik from "./BioOfSumitBanik";

const ClubfootBlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#001844]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#001844] via-[#2D8CBB] to-[#001844]"></div>
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-6 pt-16 pb-8 text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
              <span className="text-[#FFCE00]">Walking Towards a Brighter Future: Tackling Clubfoot in Bangladesh</span>
            </h1>
          </div>

          <div className="max-w-4xl mx-auto px-6 pb-16">
            <div className="bg-white border-4 border-[#FFCE00] rounded-3xl p-8 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="relative group">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-[#FFCE00]">
                    <Image
                      src="/images/blog-interview/Sumit Banik.JPG"
                      alt="Sumit Banik"
                      width={400}
                      height={400}
                      quality={100}
                      priority
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-3xl font-bold text-[#001844] mb-2">Sumit Banik</h2>
                  <p className="text-xl text-[#2D8CBB] mb-4">Writer, Development Journalist &amp; Public Health Activist</p>

                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <a
                      href="https://www.linkedin.com/in/sumit-banik-bd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0A66C2] hover:bg-[#004182] rounded-full p-3 transition-all duration-300 hover:scale-110"
                      aria-label="LinkedIn Profile of Sumit Banik"
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

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-indigo-500 rounded-xl mr-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-indigo-700">Overview</h2>
          </div>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-lg text-justify">
              Every year, nearly 4,000 children in Bangladesh are born with <a href="https://my.clevelandclinic.org/health/diseases/16889-clubfoot" target="_blank" rel="noopener noreferrer" className="text-[#2D8CBB] bg-yellow-100 underline decoration-2 underline-offset-2 px-1 rounded-sm">clubfoot</a>, a congenital deformity that causes one or both feet to turn inward. For many families, this condition is not just a medical concern—it carries a heavy social stigma, misconceptions, and fear. Untreated, clubfoot can limit mobility, hinder education, and reduce opportunities for social inclusion, effectively shaping a lifetime of physical and social disadvantage. Yet, with timely intervention and proper care, children born with clubfoot can walk, play, and thrive like their peers.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-red-500 rounded-xl mr-4">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-red-600">The Burden of a Misunderstood Condition</h2>
          </div>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-lg text-justify">
              Clubfoot is a condition present at birth, where the foot is twisted out of its normal position. While some families may associate it with supernatural causes or divine punishment, medical evidence tells a different story: it is largely a congenital and highly treatable condition, often linked to genetic factors. In Bangladesh, where awareness remains limited, this gap between myth and medicine has historically delayed care. Children may go years without treatment, leading to lifelong physical limitations and social marginalization.
            </p>

            <p className="text-lg text-justify">
              Studies show that untreated clubfoot severely impacts mobility, making basic activities such as walking, running, or attending school difficult. Socially, children with untreated clubfoot often face stigma. In rural communities, misconceptions about the condition may discourage families from seeking help, while the costs of care or distance from clinics can also pose barriers. The result is a cycle of physical disability and social exclusion, affecting the child, their family, and the wider community.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-green-500 rounded-xl mr-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-green-600">National Response: Walk for Life and Beyond</h2>
          </div>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-lg text-justify">
              Bangladesh has responded decisively to this challenge through <a href="https://walkforlife.org.bd/en/" target="_blank" rel="noopener noreferrer" className="text-[#2D8CBB] bg-yellow-100 underline decoration-2 underline-offset-2 px-1 rounded-sm">Walk for Life</a>, the national clubfoot program established in 2009. Initially supported by The Glencoe Foundation and later partnering with <a href="https://www.miraclefeet.org/countries/bangladesh" target="_blank" rel="noopener noreferrer" className="text-[#2D8CBB] bg-yellow-100 underline decoration-2 underline-offset-2 px-1 rounded-sm">MiracleFeet</a>, <a href="https://walkforlife.org.bd/en/" target="_blank" rel="noopener noreferrer" className="text-[#2D8CBB] bg-yellow-100 underline decoration-2 underline-offset-2 px-1 rounded-sm">Walk for Life</a> has evolved into a comprehensive, nationwide initiative dedicated to providing effective, low-cost, and sustainable treatment for children across the country. The program utilizes the globally recognized Ponseti Method, a non-surgical technique that involves gentle serial casting, limited tendon release, and long-term bracing.
            </p>

            <div className="rounded-lg overflow-hidden border mt-4 w-56 md:w-72 mx-auto">
              <Image
                src="/images/blog-interview/Clubfoot_Photo Credit-Sumit.png"
                alt="Children receiving clubfoot care"
                width={200}
                height={200}
                className="w-full h-auto object-cover"
              />
              <div className="p-3 text-sm text-gray-500">Photo credit: Sumit Banik</div>
            </div>

            <p className="text-lg text-justify mt-4">
              Peer-reviewed research confirms the effectiveness of this approach: over 99% of children treated with the Ponseti Method in Bangladesh achieve normal walking ability, transforming lives both physically and socially. Clinical audits in multiple districts, including rural and urban centers, have demonstrated not only high success rates but also improvements in adherence when families receive consistent guidance and community support.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-indigo-500 rounded-xl mr-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-indigo-700">Current Initiatives: United Purpose Bangladesh and MiracleFeet</h2>
          </div>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-lg text-justify">
              The management of Walk for Life has evolved, with United Purpose Bangladesh now playing a leading role in implementation in close collaboration with MiracleFeet, which provides both technical guidance and financial support. This partnership has strengthened the program’s ability to reach children in urban centers as well as remote and underserved areas, ensuring that treatment remains affordable, timely, and effective.
            </p>

            <p className="text-lg text-justify">
              The initiative places strong emphasis on early detection and referral, with community health workers, local clinics, and hospitals working together to identify newborns with clubfoot and connect them quickly to appropriate treatment centers. Care is delivered through rigorously followed Ponseti Method protocols, implemented by trained clinicians who manage serial casting, perform tendon release when necessary, and closely supervise long-term brace use.
            </p>

            <p className="text-lg text-justify">
              Equally important is family engagement: parents are guided on proper brace use and follow-up schedules to prevent relapse and ensure sustained outcomes. Alongside clinical care, community awareness campaigns play a critical role by challenging myths, reducing stigma, and encouraging families to seek early intervention. Since its inception, Walk for Life has treated more than 38,000 children across Bangladesh—a number that continues to rise as the program expands its coverage and strengthens referral pathways nationwide.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-yellow-500 rounded-xl mr-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-yellow-700">The Importance of Early Detection and Referral</h2>
          </div>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-lg text-justify">
              Early diagnosis is critical. The Ponseti Method is most effective when started soon after birth, ideally within the first few weeks. Delays can complicate treatment, extend recovery, and increase the likelihood of residual deformity. Timely referral ensures that children receive the necessary interventions and support without interruption.
            </p>

            <p className="text-lg text-justify">
              Unfortunately, delays are common due to a lack of awareness, misconceptions, or logistical challenges. Families may consult traditional healers or believe the deformity is a curse, prolonging the time before medical attention. Addressing these barriers requires persistent community engagement, targeted awareness campaigns, and the integration of clubfoot detection into routine maternal and child health services.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-purple-500 rounded-xl mr-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-purple-700">Breaking the Stigma: Changing Mindsets</h2>
          </div>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-lg text-justify">
              In Bangladesh, cultural beliefs and superstitions often shape responses to congenital conditions like clubfoot. Myths associating the deformity with divine punishment or family shame can prevent children from accessing care. Programs like Walk for Life and initiatives by United Purpose Bangladesh actively counter these misconceptions by combining medical care with education and storytelling.
            </p>

            <p className="text-lg text-justify">
              Success stories of children walking independently after treatment serve as powerful tools to change public perception. Media campaigns, local advocacy, and community workshops help families understand that clubfoot is treatable, enabling them to seek care without fear of social judgment.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-green-600 rounded-xl mr-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-green-700">Countrywide Perspective and Public Health Impact</h2>
          </div>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-lg text-justify">
              Bangladesh’s approach to clubfoot treatment stands as a strong example of how early detection, standardized medical care, and sustained community engagement can come together to address a significant public health challenge. By integrating effective clinical interventions with continuous awareness and education initiatives, the program responds not only to the physical correction of the deformity but also to the broader social consequences faced by affected children and their families.
            </p>

            <p className="text-lg text-justify">
              This comprehensive approach has led to a marked reduction in long-term physical disability, improved school attendance, and greater participation of children in everyday community life. Families are increasingly empowered through access to accurate information, counselling, and support networks, enabling them to actively participate in their child’s treatment and recovery.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-teal-500 rounded-xl mr-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-teal-700">Moving Forward: Sustaining Momentum</h2>
          </div>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-lg text-justify">
              Despite progress, challenges remain. Rural outreach, adherence to bracing protocols, and continued myth-busting require sustained effort. Expansion of training for healthcare workers and integration of clubfoot screening into routine neonatal care are essential for further impact.
            </p>

            <p className="text-lg text-justify">
              With continued support from <a href="https://www.miraclefeet.org/countries/bangladesh" target="_blank" rel="noopener noreferrer" className="text-[#2D8CBB] bg-yellow-100 underline decoration-2 underline-offset-2 px-1 rounded-sm">MiracleFeet</a> and local implementation by <a href="https://united-purpose.org/bangladesh" target="_blank" rel="noopener noreferrer" className="text-[#2D8CBB] bg-yellow-100 underline decoration-2 underline-offset-2 px-1 rounded-sm">United Purpose Bangladesh</a>, Bangladesh is on track to eliminate untreated clubfoot as a major public health concern, giving thousands of children the chance to grow up walking freely, socially included, and empowered.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-indigo-600 rounded-xl mr-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-indigo-800">Conclusion</h2>
          </div>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-lg text-justify">
              Clubfoot is more than a medical condition—it is a social and developmental challenge. The story of Bangladesh’s response, from Walk for Life to the current initiatives led by United Purpose Bangladesh and MiracleFeet, demonstrates that early detection, proper referral, and evidence-based treatment can transform lives. Breaking the cycle of superstition, stigma, and delayed care is just as important as correcting the deformity itself.
            </p>

            <p className="text-lg text-justify">
              For every child born with clubfoot in Bangladesh, the path forward is now clearer. With timely intervention, medical guidance, and societal support, children can walk toward a future free from physical limitations and social barriers. This is not just treatment—it is a step toward dignity, inclusion, and hope.
            </p>
          </div>
        </div>

      </div>

      <BioOfSumitBanik />

      <div className="mt-16 mb-16">
        {(() => {
          const currentSlug = "walking-towards-a-brighter-future-tackling-clubfoot-in-bangladesh";
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

export default ClubfootBlogPage;
