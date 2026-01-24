"use client";

import Link from "next/link";
import { interviewOrder } from "../interviewOrder";
import BioOfNazmulHuda from "./BioOfNazmulHuda";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import NazmulHudaImg from "@/public/images/blog-interview/interview/nazmul.jpg";

const InConversationWithDrNazmulHuda = () => {
  return (
    <div className="bg-gradient-to-r from-[#0b2545]/10 via-white to-[#0b2545]/10 pb-16">
      <div className="max-w-screen-xl mx-auto px-12 md:px-16 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-[#0b2545] to-[#123a63] p-8 rounded-lg border-l-4 border-[#2D8CBB] mb-6 shadow-md">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              In Conversation with{" "}
              <a
                href="https://www.linkedin.com/in/nazmul-huda-6792248a/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline bg-[#1B6E99] px-3 py-1 rounded"
              >
                Dr. Nazmul Huda
              </a>
              : Insights from A Global Health Manager and Academic
            </h1>
          </div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Image
              src={NazmulHudaImg}
              alt="Dr. Nazmul Huda"
              width={120}
              height={150}
              className="rounded-[50%] object-cover"
            />
            <div className="text-left">
              <a
                href="https://www.linkedin.com/in/nazmul-huda-6792248a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-white hover:text-white bg-[#0b2545] hover:bg-[#0b2545] transition-all px-4 py-2 rounded inline-block"
              >
                Dr. Nazmul Huda
              </a>
              <p className="text-lg text-gray-600 font-medium mt-2">
                A Global Health Professional and Academician
              </p>
            </div>
          </div>
          <blockquote className="text-base md:text-lg italic text-cyan-100 font-semibold bg-[#123a63] p-5 rounded-lg border-l-4 border-[#2D8CBB] leading-relaxed">
            "The most significant limitations of the current government health initiatives are the lack of transparency, discipline, accountability and effective leadership. The current system is largely doctor-centered. The role of nurses, midwives, therapists, managers and researchers are largely ignored." 
          </blockquote>
          <div className="flex justify-center mt-4">
            <a
              href="https://www.linkedin.com/in/nazmul-huda-6792248a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#2D8CBB] hover:text-[#1B6E99] transition-colors"
            >
              <FaLinkedin className="text-xl" />
              <span className="text-sm font-medium">LinkedIn Profile</span>
            </a>
          </div>
        </div>

        {/* Interview Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#0b2545] to-[#123a63] p-6 rounded-lg border-l-4 border-[#2D8CBB] mb-8">
            <h2 className="text-2xl font-bold text-white text-center">
              Global Health Questions
            </h2>
          </div>

          {/* Question 1 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#0b2545] text-justify">
              Q. As the Global Manager of Fistula Care plus project, what were its key achievements, and what is the current state of obstetric fistula care in Bangladesh?
            </h3>
            <p className="mt-2 leading-relaxed text-justify">
              <span className="font-bold">Ans:</span> I joined Fistula Care Plus project in 2014. In addition to meeting all the official benchmarks, I also made the following key contributions and achievements.
            </p>
            <p className="mt-2 leading-relaxed text-justify">
              <span className="font-bold">a.</span> When we started the project, it was the understanding that obstetric fistula were only caused by obstructed labor. We generated evidence and established that in more than 80% cases, female genital fistulas are caused by the injuries during caesarean section and hysterectomy operations. This was the game changer of the global fistula program. These new insights paved the way for developing strategies for prevention and treatment of female genital fistula. We stopped using the term "obstetric fistula" and started using the term "female genital fistula".
            </p>
            <p className="mt-2 leading-relaxed text-justify">
              <span className="font-bold">b.</span> I was the first to raise the alarm about the epidemic of unnecessary caesarean section in Bangladesh. We engaged with the Obstetrical and Gynecological Society of Bangladesh (OGSB) and succeeded in having OGSB issue a position paper on caesarean sections. We presented visualized data showing that in private clinics of Bangladesh the caesarean section rate was more than 90%. Caesarean section increases the risk of hysterectomy (removal of uterus) operations and other surgical procedures and thereby increases the risk of iatrogenic (doctor-induced) genital fistula.
            </p>
            <p className="mt-2 leading-relaxed text-justify">
              <span className="font-bold">c.</span> I developed "community-based fistula diagnosis event"- a simple structured system for identifying fistula cases by the primary care workers. Thousands of female genital fistula cases were identified and brought under treatment through this system. This technique was later used in the national maternal morbidity verification survey led by icddr,b.
            </p>
            <p className="mt-2 leading-relaxed text-justify">
              <span className="font-bold">d.</span> I was the architect of the Banjul Call for Action for Prevention and Care of Fistula in West African Countries. Later, this call was endorsed by WAHO and inspired West African nations for investing more in fistula program.
            </p>
          </div>

          {/* Question 2 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#0b2545] text-justify">
              Q. You are a promoter of breastfeeding protection and advancement. What is your most important achievement in this field?
            </h3>
            <p className="mt-2 leading-relaxed text-justify">
              <span className="font-bold">Ans:</span> In 2006, with a small grant of BDT 100,000 from WABA, I organized an International Travelling Seminar on Breastfeeding Protection of Working women". We effectively mobilized the then deputy speaker of Bangladesh to introduce maternity allowance for poor working women in Bangladesh. Number of civil society organizations extended their support, and maternity allowance was introduced from the following year in Bangladesh. Today hundreds of thousands of women are getting the allowance for six months every year.
            </p>
          </div>

          {/* Question 3 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#0b2545] text-justify">
              Q. You were the architects of number of initiatives engaging adolescent girls. Would you please highlight some of the initiatives?
            </h3>
            <p className="mt-2 leading-relaxed text-justify">
              <span className="font-bold">Ans:</span> Thanks. I developed the concept of the "Golden Girls Project" in 2012. This initiative is based on the fact that, in Bangladesh roughly three million women give births annually, while at the same time, there are 1.5 million girls studying at grade 9 and 10. The idea was to link one girl student of class 9 with 10 with two pregnant women in their community. The girl student is provided with some orientation training on pregnancy care. They (students) are then educating and facilitate pregnancy care of the women they are responsible for. The purpose was to have better pregnancy outcome to educate the girl students about practical pregnancy to reflect in their own life.
            </p>
            <p className="mt-2 leading-relaxed text-justify">
              "Community based elderly care through adolescent girls" is another similar project- being implemented in Bangladesh. Through this project, school girls of class 9 and 10 take care of the senior women in their community in a structured way. I In return, their education expenses are covered.
            </p>
          </div>

          {/* Question 4 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#0b2545] text-justify">
              Q. From your global perspective, what do you see as the primary challenge to developing responsive and resilient public health systems in Bangladesh?
            </h3>
            <p className="mt-2 leading-relaxed text-justify">
              <span className="font-bold">Ans:</span> The achievements of Bangladesh in public health is laudable. No doubt – development partners have made tremendous contribution for these achievements. But over dependance on development partners for public health program, I think is a major challenge for the public health system of Bangladesh. Because of the economic graduation, Bangladesh is gradually taking more and more of the financial responsibility of its health programs- but the government capacity for technical management of public health programs is not advancing at the same pace.
            </p>
            <p className="mt-2 leading-relaxed text-justify">
              Development partners have introduced almost a parallel system for financial and administrative management of the public health programs. Government officials prefer DPs system over the regular system of the government. In future, government officials may be reluctant or demotivated to follow the regular system of the government. I will urge for immediate plan for system integration for a smooth transfer from a development partners induced system to the regular systems of the government for public health program management and implementation.
            </p>
          </div>

          {/* Question 5 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#0b2545] text-justify">
              Q. How effective are the current government's health initiatives, and what do you see as their most pressing limitations?
            </h3>
            <p className="mt-2 leading-relaxed text-justify">
              <span className="font-bold">Ans:</span> I think the most significant limitations of the current government health initiatives are the lack of transparency, discipline, accountability and effective leadership. The current system is largely doctor-centered. The role of nurses, midwives, therapists, managers and researchers are largely ignored.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#0b2545] to-[#123a63] p-6 rounded-lg border-l-4 border-[#2D8CBB] mb-8 mt-12">
            <h2 className="text-2xl font-bold text-white text-center">
              Career Questions
            </h2>
          </div>

          {/* Question 6 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#0b2545] text-justify">
              Q. Who has inspired your career in public health?
            </h3>
            <p className="mt-2 leading-relaxed text-justify">
              <span className="font-bold">Ans:</span> I am inspired by Dr. Zafar Ullah Chowdhury- the founder of Ganasasthya Kendra.
            </p>
          </div>

          {/* Question 7 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#0b2545] text-justify">
              Q. How did your PhD experience at the University of Alberta shape your approach to public health, and how does it compare to the education system in Bangladesh?
            </h3>
            <p className="mt-2 leading-relaxed text-justify">
              <span className="font-bold">Ans:</span> I was deeply influenced by Prof. Corbett McDonald, my mentor for PhD studies at the University of Alberta. During my research, I spent time in UK, lived with Prof. McDonald's family and even joined him in farming. It is an unforgettable experience that has significantly changed my life and shaped my views about teacher-student relationship.
            </p>
            <p className="mt-2 leading-relaxed text-justify">
              Equally inspiring was my PhD supervisor Prof. Nicola Cherry. Her simplicity, humbleness, wisdom, human qualities were tremendous and left a lasting impression on me.
            </p>
          </div>

          {/* Question 8 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#0b2545] text-justify">
              Q. What is your foremost piece of career advice for someone in Bangladesh aiming to build a career in the global health sector?
            </h3>
            <p className="mt-2 leading-relaxed text-justify">
              <span className="font-bold">Ans:</span> Discovering the beauty of global health is not easy. However, if you are truly passionate about improving the health of the underserved, you will find working on global health projects deeply rewarding.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#0b2545] to-[#123a63] p-6 rounded-lg border-l-4 border-[#2D8CBB] mb-8 mt-12">
            <h2 className="text-2xl font-bold text-white text-center">
              Get to know Nazmul Huda
            </h2>
          </div>

          {/* Question 9 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#0b2545] text-justify">
              Q. What book are you currently reading, and what key insights would you share?
            </h3>
            <p className="mt-2 leading-relaxed text-justify">
              <span className="font-bold">Ans:</span> Now, I am re reading the booklet - Research – a method for colonization" by Dr. Zafar Ullah Chowdhury.
            </p>
          </div>

          {/* Question 10 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#0b2545] text-justify">
              Q. What's your favorite food and is there a restaurant that feels most like you?
            </h3>
            <p className="mt-2 leading-relaxed text-justify">
              <span className="font-bold">Ans:</span> Halim – a snack made of lentil and meat is my favorite. "Enjoy" a modest restaurant at Shegun Bagicha is my favorite place for adda.
            </p>
          </div>

          {/* Question 11 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#0b2545] text-justify">
              Q. You have visited a lot of countries. Which one left the deepest impression on you, and why?
            </h3>
            <p className="mt-2 leading-relaxed text-justify">
              <span className="font-bold">Ans:</span> Mostly for official businesses I have visited more than sixty countries of all continents including USA, UK, Canada, Japan, Germany, Austria, Sweden, Switzerland, Spain, France, Italy, Australia, Singapore, Thailand, Malaysia, Philippines, Cambodia, Japan, Indonesia, India, Nepal, Bhutan, United Arab Emirates, Qatar, Oman, Saudi Arabia, Tanzania, Uganda, Nigeria, Niger, Gambia, Mozambique, Ghana, Senegal, Egypt, Kenya, Rwanda etc. Among all the countries I have visited, Bhutan was most impressive to me. They are smart, they are confident about what they are doing. They are honest, simple and humble. I worked with a forum of health ministers of many countries for three years. To me, the health minister of Bhutan was the smartest professionally.
            </p>
          </div>

          <p className="text-white text-2xl mt-4 leading-relaxed text-center font-semibold bg-gradient-to-r from-[#0b2545] to-[#123a63] p-4 rounded-lg border-l-4 border-[#2D8CBB]">
            Interview conducted by{" "}
            <Link
              href="/sizear"
              className="text-white font-bold hover:underline"
            >
              Monaemul Islam Sizear
            </Link>
          </p>
        </div>

        <BioOfNazmulHuda />
        <div className="flex justify-center my-8">
          {(() => {
            const currentSlug = "in-conversation-with-dr-nazmul-huda";
            const idx = interviewOrder.findIndex((b) => b.slug === currentSlug);
            const next = interviewOrder[(idx + 1) % interviewOrder.length];
            return (
              <Link href={`/interview/${next.slug}`}>
                <button className="bg-[#FFCE00] text-black font-bold px-8 py-3 rounded hover:bg-yellow-400 transition text-lg shadow-md">
                  Next Interview
                </button>
              </Link>
            );
          })()}
        </div>
      </div>
    </div>
  );
};

export default InConversationWithDrNazmulHuda;

