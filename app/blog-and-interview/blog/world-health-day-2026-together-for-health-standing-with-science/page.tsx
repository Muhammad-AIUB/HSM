"use client";

import Image from "next/image";
import { BookOpen, Heart, Shield, Users, AlertTriangle } from "lucide-react";
import { LinkedInLogo } from "@/components/Shared/LinkedInLogo";
import NextButton from "@/components/Shared/NextButton";
import { blogOrder } from "../blogOrder";
import BioOfSumitBanik from "./BioOfSumitBanik";

const WorldHealthDay2026BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#001844]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#001844] via-[#2D8CBB] to-[#001844]"></div>
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-6 pt-16 pb-8 text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
              <span className="text-[#FFCE00]">World Health Day 2026: Together for Health, Standing with Science</span>
            </h1>
          </div>

          <div className="max-w-4xl mx-auto px-6 pb-16">
            <div className="bg-white border-4 border-[#FFCE00] rounded-3xl p-8 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="relative group">
                  <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#FFCE00]">
                    <Image
                      src="/images/blog-interview/Sumit Landscape.png"
                      alt="Sumit Banik"
                      width={400}
                      height={400}
                      quality={100}
                      priority
                      className="object-cover object-[62%_center] w-full h-full"
                    />
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-3xl font-bold text-[#001844] mb-2">Sumit Banik</h2>
                  <p className="text-xl text-[#2D8CBB] mb-4">Writer | Development Journalist | Public Health Activist</p>

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
            <h2 className="text-3xl font-bold text-indigo-700">Context and Overview</h2>
          </div>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-lg text-justify">
              An analysis of Bangladesh&apos;s health sector from January to March 2026 highlights a strategic government focus on infectious disease control and large-scale immunization. Following a localized surge in Measles and Rubella early in the year, a targeted vaccination campaign was launched in early April across 30 high-risk upazilas in 18 districts, specifically aiming to protect children aged six months to five years. Media reports across the country indicate that at least 20 children have died from measles throughout the month of March.
            </p>

            <p className="text-lg text-justify">
              While the dengue situation showed a relative decline compared to the previous year, the country still recorded 1,910 confirmed cases and four deaths between January 1 and April 4. Furthermore, a confirmed Nipah virus case in Rajshahi this February prompted public health authorities to issue urgent warnings against the consumption of raw date palm juice.
            </p>

            <p className="text-lg text-justify">
              Beyond infectious threats, recent research underscores a worrying rise in non-communicable diseases, particularly diabetes, with significantly higher prevalence rates observed in urban areas. Overall, the first quarter was dominated by seasonal illnesses, with respiratory distress accounting for 23.7% of cases and diarrhea for 2.9%. However, despite these public health efforts, widespread media reports have voiced concerns over a persistent crisis—a shortage of essential medical supplies and vaccines in hospitals, which continues to challenge the effective delivery of healthcare services.
            </p>

            <p className="text-lg text-justify">
              On April 7, 2026, Bangladesh marks World Health Day alongside the rest of the world, using the occasion to reflect on its ongoing efforts to strengthen the health system and ensure equitable access to care across the country. This year&apos;s theme— &quot;Together for Health: Stand with Science&quot;—is more than a slogan. It is a timely call to action in an age where misinformation can spread faster than disease itself.
            </p>

            <p className="text-lg text-justify">
              For Bangladesh, this message carries particular weight. Over the past few decades, the country has earned global recognition for its remarkable public health achievements—from drastically reducing under-five mortality to scaling up life-saving interventions at the grassroots level. Central to this success is the International Centre for Diarrhoeal Disease Research, Bangladesh (icddr,b), which played a pivotal role in the scientific development and promotion of Oral Rehydration Salts (ORS). This simple yet transformative solution has prevented millions of deaths from diarrhoeal diseases worldwide.
            </p>

            <p className="text-lg text-justify">
              As originally noted in a landmark 1978 editorial in The Lancet—and reaffirmed in its 2018 retrospective on the 50th anniversary of the therapy—the global adoption of ORS stands as one of the most significant public health advances of the 20th century. With Bangladesh at the forefront of its community-level implementation, this legacy proves that when we stand with science, we save lives on a global scale. Yet, as the country moves forward, the challenge is no longer just access—but trust, adaptation, and the consistent application of science in both policy and daily life.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-green-500 rounded-xl mr-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-green-600">The Power of One Health</h2>
          </div>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-lg text-justify">
              At the heart of this year&apos;s campaign lies the &quot;One Health&quot; approach, which recognises the deep connection between human, animal, and environmental health. According to the World Health Organization, nearly 75% of emerging infectious diseases are zoonotic—transmitted between animals and humans. In Bangladesh, where dense populations live in close proximity to livestock and natural ecosystems, this connection is not theoretical—it is lived reality. Research such as &quot;Impact of Climate Variability on Infectious Diseases in Bangladesh&quot; (Environmental Health Perspectives, 2013) highlights how environmental monitoring can help anticipate disease outbreaks. More recent work by icddr,b continues to demonstrate how community-based surveillance systems can strengthen early warning capacities, shifting the focus from reactive treatment to proactive prevention.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-red-500 rounded-xl mr-4">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-red-600">Navigating the Silent Epidemic</h2>
          </div>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-lg text-justify">
              While infectious diseases once dominated the public health agenda, Bangladesh now faces a quieter but more persistent threat: non-communicable diseases (NCDs). According to the World Health Organization&apos;s &quot;Noncommunicable Diseases Country Profiles: Bangladesh (2022)&quot;, NCDs account for approximately 71% of all deaths in the country. Hypertension, in particular, has emerged as a major concern. The study &quot;Prevalence, Treatment Patterns and Risk Factors of Hypertension in Bangladesh&quot; (WHO Bulletin, 2013) estimated that nearly one in five adults live with high blood pressure—many without knowing it. This underscores a critical gap between disease burden and diagnosis.
            </p>

            <p className="text-lg text-justify">
              Addressing this requires innovation beyond hospital walls. Evidence from community-based interventions—such as WHO-supported primary healthcare models—shows that door-to-door screening and digital tracking can significantly improve early detection and management. Science, in this sense, must travel to people, not wait for people to reach it.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-yellow-500 rounded-xl mr-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-yellow-700">Bridging the Trust Gap</h2>
          </div>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-lg text-justify">
              Standing with science also means confronting a growing challenge: the erosion of public trust. The WHO has described this as an &quot;infodemic&quot;—an overabundance of information, including misinformation, that makes it harder for people to find reliable guidance.
            </p>

            <p className="text-lg text-justify">
              In Bangladesh, this is visible in two critical areas: vaccine hesitancy and the misuse of antibiotics. The study &quot;Antimicrobial Resistance in Bangladesh: A Systematic Review&quot; (BMC Infectious Diseases, 2020) warns that easy access to antibiotics without prescription is accelerating resistance, leading to infections that are increasingly difficult—and sometimes impossible—to treat. Science is not simply a body of knowledge; it is a process grounded in evidence. To stand with science is to choose verified facts over rumours, and long-term safety over short-term convenience.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-indigo-500 rounded-xl mr-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-indigo-700">Technology, Equity, and the Future of Care</h2>
          </div>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-lg text-justify">
              Bangladesh&apos;s pharmaceutical sector offers a compelling example of what sustained investment in science can achieve. According to the Bangladesh Association of Pharmaceutical Industries, the country now meets around 98% of its domestic demand for medicines and exports to over 160 countries. At the same time, the government&apos;s commitment to Universal Health Coverage (UHC), aligned with the Sustainable Development Goals, reflects a broader vision of equity. Initiatives under the national Digital Health Strategy aim to expand electronic health records and improve data-driven decision-making across the health system.
            </p>

            <p className="text-lg text-justify">
              But technology alone is not enough. The promise of digital health must reach beyond cities—ensuring that a patient in Kurigram or Bandarban receives the same standard of evidence-based care as someone in Dhaka. Equity remains the true test of progress.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-purple-500 rounded-xl mr-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-purple-700">A Collective Call to Action</h2>
          </div>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-lg text-justify">
              World Health Day 2026 serves as a profound moment for both collective reflection and individual responsibility, urging us to bridge the gap between scientific advancement and daily practice. For individuals, this journey begins with a commitment to health literacy—actively seeking out information from credible, evidence-based institutions and maintaining a healthy skepticism toward the &quot;miracle cures&quot; and quick-fix medical myths that often saturate social media. It is about becoming an empowered advocate for one&apos;s own well-being by asking the right questions and prioritizing verified facts over viral rumors.
            </p>

            <p className="text-lg text-justify">
              At the systemic level, the responsibility shifts to policymakers, whose role is to ensure that health security remains a top national priority. This requires more than just reactive measures; it demands a sustained, long-term investment in cutting-edge research, modernized laboratories, and the nurturing of scientific talent. By recognizing that a nation&apos;s resilience is built on the foundation of shared knowledge and robust infrastructure, leaders can create a system that is prepared for the next pandemic before it even arrives.
            </p>

            <p className="text-lg text-justify">
              Ultimately, health is not an isolated human concern but one deeply intertwined with the world around us. For communities, this means embracing &quot;environmental stewardship&quot; as a core health strategy. We must acknowledge the undeniable links between a warming climate, deteriorating air quality, and the rising burden of respiratory and zoonotic diseases. By protecting our natural ecosystems and advocating for cleaner, greener living spaces, we are not just saving the planet—we are directly safeguarding the physical and mental health of future generations. Taking a stand with science today ensures a more resilient, informed, and healthier tomorrow for everyone.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-teal-500 rounded-xl mr-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-teal-700">Looking Ahead</h2>
          </div>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-lg text-justify">
              The vision of a &quot;Smart Bangladesh&quot; cannot be separated from the goal of a &quot;Healthy Bangladesh.&quot; Science must guide not only our hospitals and laboratories, but also our everyday decisions. World Health Day 2026 reminds us that when we stand together with science, we do more than fight disease—we build a society that is informed, resilient, and prepared for the future. From the busy streets of Chattogram to the quiet tea gardens of Sylhet, the path forward is clear: trust the evidence, support innovation, and move forward—together.
            </p>
          </div>
        </div>
      </div>

      <BioOfSumitBanik />

      <div className="mt-16 mb-16">
        {(() => {
          const currentSlug = "world-health-day-2026-together-for-health-standing-with-science";
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

export default WorldHealthDay2026BlogPage;
