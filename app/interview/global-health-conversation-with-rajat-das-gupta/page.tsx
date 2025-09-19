"use client";

import Link from "next/link";
import BioOfRajatDasGupta from "./BioOfRajatDasGupta";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import RajatDasGuptaImg from "@/public/images/blog-interview/interview/Rajat Das Gupta (1).jpg";

const GlobalHealthConversationWithRajatDasGupta = () => {
  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <div className="max-w-screen-xl mx-auto px-12 md:px-16 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-[#2D8CBB]/15 to-[#FFCE00]/15 p-8 rounded-lg border-l-4 border-[#2D8CBB] mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#2D8CBB] mb-4">
              Global Health Conversation with Dr. Rajat Das Gupta: A Clinical Research Epidemiologist
            </h1>
          </div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Image
              src={RajatDasGuptaImg}
              alt="Dr. Rajat Das Gupta"
              width={80}
              height={80}
              className="rounded-full"
            />
            <div className="text-left">
              <p className="text-2xl font-bold text-[#001844]">
                Dr. Rajat Das Gupta
              </p>
              <p className="text-lg text-gray-600 font-medium">
                Postdoctoral Research Fellow at{" "}
                <a
                  href="https://news.vumc.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2D8CBB] hover:text-[#1B6E99] underline transition-colors"
                >
                  Vanderbilt University Medical Center
                </a>
              </p>
            </div>
          </div>
          <blockquote className="text-xl italic text-[#2D8CBB] font-medium bg-yellow-100 p-4 rounded-lg border-l-4 border-[#FFCE00]">
            "For those just starting, I would say to keep your mind open, respect diverse viewpoints, and always strive for excellence. There are no shortcuts in public health. You must carry its philosophy with you in order to make a meaningful contribution."
          </blockquote>
          <div className="flex justify-center mt-4">
            <a
              href="https://www.linkedin.com/in/rajat-das-gupta-mbbs-mph-phd-831b6b72/"
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
          <div className="bg-gradient-to-r from-[#2D8CBB]/10 to-[#FFCE00]/10 p-6 rounded-lg border-l-4 border-[#2D8CBB] mb-8">
            <h2 className="text-2xl font-bold text-[#2D8CBB] text-center">
              Global Health Questions
            </h2>
          </div>

          {/* Question 1 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
              Q. What areas are you currently focusing on to advance global health?
            </h3>
            <p className="mt-2 leading-relaxed text-justify">
              <span className="font-bold">Dr. Rajat:</span> I currently work in cancer epidemiology, with my postdoctoral fellowship focusing on the molecular and genetic epidemiology of cancer. This is a new field for me, and I am actively learning so that I can apply these approaches effectively. Alongside this, I continue to work in traditional epidemiology, particularly in cancer, cardiovascular disease, nutritional, and social epidemiology. My research spans both high-income countries such as the United States and low- and middle-income countries including Bangladesh, India, Nepal, and several nations in Sub-Saharan Africa. Across these projects, I apply advanced epidemiological methods, including causal inference, to generate evidence that can inform prevention, control, and policy strategies in diverse global settings.
            </p>
          </div>

          {/* Question 2 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
              Q. What are the key challenges in making advanced cancer treatment more accessible in Bangladesh?
            </h3>
            <p className="mt-2 leading-relaxed text-justify">
              <span className="font-bold">Dr. Rajat:</span> The biggest challenges are threefold: infrastructure, affordability, and human resources. Advanced cancer care requires specialized facilities such as radiotherapy units and oncology centers, which are limited and concentrated in urban hubs like Dhaka. Affordability is another barrier, as most patients pay out of pocket and cancer treatment is among the costliest forms of care. Finally, Bangladesh faces a shortage of trained oncologists, oncology nurses, and palliative care specialists, which constrains service delivery. Without parallel investments in prevention and early detection, advanced treatment alone will struggle to meet the growing cancer burden.
            </p>
          </div>

          {/* Question 3 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
              Q. Based on your research and publications, what is one evidence-based intervention you believe could be most effectively adopted to address a key health challenge in Bangladesh?
            </h3>
            <p className="mt-2 leading-relaxed text-justify">
              <span className="font-bold">Dr. Rajat:</span> Expanding population-based cancer screening programs, particularly for cervical and breast cancer, would be one of the most impactful interventions. My work with DHS datasets across South Asia consistently shows low screening coverage and significant socioeconomic inequality. Evidence indicates that even low-cost methods such as visual inspection with acetic acid (VIA) for cervical cancer can reduce mortality if delivered at scale. Building sustainable screening programs, integrated into primary care and supported by community health workers, could greatly improve early detection and reduce late-stage cancer presentation in Bangladesh.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#FFCE00]/10 to-[#2D8CBB]/10 p-6 rounded-lg border-l-4 border-[#FFCE00] mb-8 mt-12">
            <h2 className="text-2xl font-bold text-[#2D8CBB] text-center">
              Career Questions
            </h2>
          </div>

          {/* Question 4 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
              Q. Who has inspired your career in public health?
            </h3>
            <p className="mt-2 leading-relaxed text-justify">
              <span className="font-bold">Dr. Rajat:</span> My inspiration for public health goes back to October 2010, when I was in the third year of my MBBS program at Dhaka Medical College. At that time, Bangladesh received several prestigious awards for its remarkable progress towards the United Nations' Millennium Development Goals, including the UN MDG Award in 2010 for reducing child mortality. I realized then that evidence-based public health interventions were driving this achievement, and I began to learn about legendary figures such as Dr. Abdullah Baqui and Dr. Shams El Arifeen, both DMCan alumni, whose pioneering work in maternal, newborn, and child health research deeply influenced me. Later, I had the privilege to work under Dr. Malabika Sarker in Bangladesh, my teacher and mentor at the BRAC James P Grant School of Public Health, BRAC University, who always inspired me to pursue an academic career. She strongly encouraged me to embark on my PhD journey as soon as possible, and her guidance continues to inspire me to this day. At different stages of my journey, I have also been fortunate to be mentored by outstanding epidemiologists such as Dr. Anthony Alberg and Dr. Wei Zheng, whose dedication to cancer prevention research continues to shape my academic path.
            </p>
          </div>

          {/* Question 5 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
              Q. What are the key factors behind your consistent academic excellence in both Bangladesh and the United States?
            </h3>
            <p className="mt-2 leading-relaxed text-justify">
              <span className="font-bold">Dr. Rajat:</span> Being raised in a middle-class family in Dhaka, the value of education was instilled in me from an early age. My parents taught me the importance of learning and academic excellence, and their encouragement has been a constant source of strength. During my high school years at Dhaka Residential Model College, I received strong motivation and support, which helped me succeed in the highly competitive national medical admission test, where I ranked 92nd and secured a place at Dhaka Medical College. Later, at BRAC James P. Grant School of Public Health, I was honored to receive the WHO–TDR scholarship, which further reinforced my commitment to academic excellence. I believe that alongside my parents' encouragement and my institutional training, dedication, perseverance, and a strategic approach to learning have been central to my achievements. Staying updated, thinking beyond conventional boundaries, and striving for continuous improvement have guided me throughout my academic journey in both Bangladesh and the United States.
            </p>
          </div>

          {/* Question 6 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
              Q. How has your perspective on public health evolved, and what advice would you give to those just starting in the field?
            </h3>
            <p className="mt-2 leading-relaxed text-justify">
              <span className="font-bold">Dr. Rajat:</span> Over time I have come to appreciate the truly multidisciplinary nature of public health. I have learned not only the methods and technical aspects but also the philosophy of the field, its breadth, its subdivisions, and the extent of work it encompasses. My perspective has evolved from seeing it as a set of interventions to recognizing it as a way of thinking about populations, equity, and systems. For those just starting, I would say to keep your mind open, respect diverse viewpoints, and always strive for excellence. There are no shortcuts in public health. You must carry its philosophy with you in order to make a meaningful contribution.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#2D8CBB]/10 to-[#FFCE00]/10 p-6 rounded-lg border-l-4 border-[#2D8CBB] mb-8 mt-12">
            <h2 className="text-2xl font-bold text-[#2D8CBB] text-center">
              Get to know Rajat Das Gupta
            </h2>
          </div>

          {/* Question 7 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
              Q. What book are you currently reading, and what key insights would you share?
            </h3>
            <p className="mt-2 leading-relaxed text-justify">
              <span className="font-bold">Dr. Rajat:</span> I am currently reading The Contagion Next Time by Dr. Sandro Galea. He is the inaugural Margaret C. Ryan Dean at the School of Public Health at Washington University in St. Louis. The book powerfully reflects on how the COVID-19 pandemic exposed the vulnerabilities of the United States, not only in terms of the virus itself but also the deep-rooted social determinants of health such as racism, marginalization, and socioeconomic inequality. Galea argues that our failure to address these structural challenges left us far more vulnerable than we should have been. His central insight is that health is not merely a matter of hospitals and medicines but a public good shaped by equity, justice, and social policy. For me, the key takeaway is that preventing the next pandemic requires us to strengthen these foundational systems now rather than waiting for another crisis. It is a timely reminder that building a healthier world is as much about addressing inequality as it is about biomedical innovation.
            </p>
          </div>

          {/* Question 8 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
              Q. Are there any fond memories from your PhD experience in the U.S. that you'd like to share?
            </h3>
            <p className="mt-2 leading-relaxed text-justify">
              <span className="font-bold">Dr. Rajat:</span> One of my fondest memories is sharing my PhD journey with my roommate of five and a half years, Maxwell Akonde from Ghana, who is now a postdoctoral fellow at the National Cancer Institute. Living together was truly a cultural and personal learning experience, I picked up cooking, driving, and household management from him. We worked under the same supervisor and collaborated closely, publishing more than ten manuscripts together. During the last year of my PhD, when his wife and daughter Anna joined him in the U.S., I became "Uncle Raj" or "Uncle Rejoice" to Anna, which was a very special experience for me. Beyond research, we also served as elected executives in the Graduate Student Association, where we used our data science skills to advocate successfully for a minimum stipend that met living standards for PhD students. This mix of friendship, scholarship, and advocacy remains one of the most rewarding aspects of my time in the U.S.
            </p>
          </div>

          {/* Question 9 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
              Q. Do you have plans to return to Bangladesh to contribute your expertise?
            </h3>
            <p className="mt-2 leading-relaxed text-justify">
              <span className="font-bold">Dr. Rajat:</span> At this stage my plan is to permanently settle in the United States or another Western country due to personal and family reasons. That said, I am continuously contributing to Bangladesh within a feasible range. I actively work with Bangladeshi datasets to generate evidence and knowledge, and I voluntarily mentor young Bangladeshi researchers by guiding them in higher studies, career planning, and research skill development. These efforts involve a real opportunity cost, but I view them as part of my responsibility to the next generation. If institutions in Bangladesh are interested in collaboration, I am always open to discussion. In today's era of global connection, one does not need to be physically present in Bangladesh to make meaningful contributions.
            </p>
          </div>

          <p className="text-[#001844] text-2xl mt-4 leading-relaxed text-center font-semibold bg-yellow-200 p-2 rounded-md">
            Interview conducted by{" "}
            <Link
              href="/sizear"
              className="text-blue-700 font-bold hover:underline"
            >
              Monaemul Islam Sizear
            </Link>
          </p>
        </div>

        <BioOfRajatDasGupta />
        <div className="flex justify-center my-8">
          <a href="/interview/public-health-insights-1">
            <button className="bg-[#FFCE00] text-black font-bold px-8 py-3 rounded hover:bg-yellow-400 transition text-lg shadow-md">
              Next Interview
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GlobalHealthConversationWithRajatDasGupta;
