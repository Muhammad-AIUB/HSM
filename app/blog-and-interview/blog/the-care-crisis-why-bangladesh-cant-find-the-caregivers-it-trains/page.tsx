"use client";

import {
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Users,
} from "lucide-react";
import Image from "next/image";
import { LinkedInLogo } from "@/components/Shared/LinkedInLogo";
import NextButton from "@/components/Shared/NextButton";
import { blogOrder } from "../blogOrder";
import BioOfRahatHossain from "./BioOfRahatHossain";

const sections = [
  {
    icon: BookOpen,
    iconClass: "bg-indigo-500",
    titleClass: "text-indigo-700",
    title: "Context",
    paragraphs: [
      "Bangladesh is standing at a demographic crossroads. We have long prided ourselves on being a young nation, but the mirrors of our society are beginning to reflect a different reality. By 2030, our elderly population is projected to reach nearly 18 million. By 2050, one in every five Bangladeshis will be aged 60 or older. This shift from a youthful society to an aging one is happening at an unprecedented speed, yet as a nation, we are largely unprepared for the care crisis already knocking at our doors.",
      "Today, when families across Dhaka and beyond face the challenge of an aging parent needing assistance, a singular, frustrated question echoes: Where are the trained caregivers? Despite government initiatives and a surge in certifications, the gap between qualified individuals and available professionals has never been wider.",
    ],
  },
  {
    icon: ShieldCheck,
    iconClass: "bg-teal-500",
    titleClass: "text-teal-700",
    title: "The Illusion of Availability",
    paragraphs: [
      "Before the pandemic, caregiving in Bangladesh was almost entirely informal. It was a world of domestic help: untrained individuals hired to look after parents with little regard for medical skill or professional dignity. COVID-19 changed the stakes. Suddenly, care was no longer just about presence; it was about safety, hygiene, and specialized skills.",
      "In response, the government moved swiftly. Caregiving courses were introduced under the Bangladesh Technical Education Board (BTEB), and certifications began through the National Skills Development Authority (NSDA). On paper, it looked like a success story in the making. However, my journey as a care entrepreneur revealed a starkly different reality. When I launched AYAT Care in 2021, I reached out to nearly 300 certified caregivers. The result was a wake-up call: almost none of them wanted to provide care. They wanted to be trainers. But how does one train a caregiver without ever having been one? This was my first realization: in Bangladesh, certification does not equal workforce participation.",
    ],
  },
  {
    icon: BriefcaseBusiness,
    iconClass: "bg-orange-500",
    titleClass: "text-orange-700",
    title: "The Final Boss of the Care Economy",
    paragraphs: [
      "After five years on the ground, I have realized that the primary hurdle in the care economy is not finding clients; it is the human talent supply chain. Families are increasingly willing to pay for quality care, but the system cannot consistently provide committed professionals. This is not just a recruitment problem; it is a systemic failure rooted in how we perceive and treat the profession.",
      "To build a sustainable future, we must address the Dignity Deficit. In our culture, caregivers are often relegated to the status of domestic workers rather than healthcare professionals. Many of today's certified caregivers are HSC graduates or college students. When they enter a home and are treated with disrespect or made to feel unwelcome, they do not just quit the job; they exit the profession entirely.",
      "Furthermore, we lack a Career Ceiling. In developed nations, a caregiver can rise to become a service coordinator or a manager. In Bangladesh, that path is invisible. Without a structure that rewards experience with better pay and status, our youth see caregiving as a temporary stopgap rather than a lifelong career.",
    ],
  },
  {
    icon: Users,
    iconClass: "bg-rose-500",
    titleClass: "text-rose-700",
    title: "Cultural Barriers and the Gender Gap",
    paragraphs: [
      "Perhaps the most heartbreaking challenge is the intense family pressure placed on female caregivers. It is a common tragedy to see a skilled, trained woman forced to abandon her career immediately after marriage because her in-laws or husband refuse to let her work in home healthcare. This cultural restriction even extends to nurses and doctors, who are often forced into day-only roles or complete retirement, weakening the entire healthcare infrastructure.",
      "Moreover, the sector has long been built on underpaid labor. Historically, male caregivers were paid more than females for the exact same demanding tasks. At AYAT Care, one of our hardest-won battles was setting a standard for fair, gender-neutral salaries. We had to advocate for the idea that caregiving is a high-value service of the heart. If we do not value the person providing the care, we can never expect them to provide quality care to our parents.",
    ],
  },
  {
    icon: GraduationCap,
    iconClass: "bg-blue-500",
    titleClass: "text-blue-700",
    title: "Training vs. Reality",
    paragraphs: [
      "There is also a significant gap between the classroom and the bedside. Many caregivers enter the field without sufficient hands-on experience. When they face a 12-hour shift involving the physical and emotional demands of an elderly patient, they hit a wall of burnout.",
      "This is compounded by the Migration-Only mindset. A vast number of trainees enroll in government-funded programs simply to get a certificate for overseas employment. While seeking a better life abroad is understandable, using taxpayer-funded free training without ever serving the local market leaves the domestic industry starved of talent.",
      "Lastly, we must contend with the Seasonal Workforce. Many caregivers from rural areas join the sector only to fill specific financial gaps, such as before Eid or during the agricultural off-season. This quick cash approach leads to high turnover, disrupting the continuity of care that elderly patients desperately need for their mental and physical well-being.",
    ],
  },
  {
    icon: HeartHandshake,
    iconClass: "bg-emerald-500",
    titleClass: "text-emerald-700",
    title: "The Path Forward",
    paragraphs: [
      "Running a care business in Bangladesh requires patience; it is not a sector for quick 10x returns. We are currently in an introductory phase of a massive behavioral shift. Within the next four to six years, I believe this sector will bloom.",
      "However, for that to happen, the responsibility lies in professionalizing the workforce. Training is only the starting line. The real work involves motivating and retaining these professionals by offering them dignity, a clear career path, and fair wages. We are not just building a business; we are building a safety net for our own future. If we want our parents, and eventually ourselves, to be cared for with dignity, we must start by giving that same dignity to those who provide the care.",
    ],
  },
];

const CareCrisisBlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="relative overflow-hidden bg-[#001844]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#001844] via-[#2D8CBB] to-[#001844]"></div>
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-6 pt-16 pb-8 text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
              <span className="text-[#FFCE00]">The Care Crisis:</span>
              <br />
              <span className="text-white">
                Why Bangladesh Can&apos;t Find the Caregivers It Trains
              </span>
            </h1>
          </div>

          <div className="max-w-4xl mx-auto px-6 pb-16">
            <div className="bg-white border-4 border-[#FFCE00] rounded-3xl p-8 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#FFCE00]">
                  <Image
                    src="/images/blog-interview/Rahat Hossain.png"
                    alt="Rahat Hossain"
                    width={400}
                    height={400}
                    quality={100}
                    priority
                    className="object-cover object-top w-full h-full"
                  />
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-3xl font-bold text-[#001844] mb-2">
                    Rahat Hossain
                  </h2>
                  <p className="text-xl text-[#2D8CBB] mb-4">
                    Healthcare Entrepreneur | Ecosystem Builder
                  </p>

                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <a
                      href="https://www.linkedin.com/in/rahathossain/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0A66C2] hover:bg-[#004182] rounded-full p-3 transition-all duration-300 hover:scale-110"
                      aria-label="LinkedIn profile of Rahat Hossain"
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

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <div key={section.title} className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className={`p-3 ${section.iconClass} rounded-xl w-fit`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h2 className={`text-3xl font-bold ${section.titleClass}`}>
                  {section.title}
                </h2>
              </div>

              <div className="space-y-4 text-gray-800 leading-relaxed">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-lg text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <BioOfRahatHossain />

      <div className="mt-16 mb-16">
        {(() => {
          const currentSlug =
            "the-care-crisis-why-bangladesh-cant-find-the-caregivers-it-trains";
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

export default CareCrisisBlogPage;
