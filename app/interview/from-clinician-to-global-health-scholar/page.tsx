import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import BioOfMohitChowdhury from "./BioOfMohitChowdhury";

const FromClinicianToGlobalHealthScholar = () => {
  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <div className="relative w-full  border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] leading-10"
              style={{ wordSpacing: "0.4rem" }}
            >
              From Clinician to Global Health Scholar: <br /> An Interview with {" "}
              <a
                href="https://www.linkedin.com/in/mohiuddin-ahsanul-kabir-chowdhury-b08b7a56/?originalSubdomain=bd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001844] underline font-extrabold bg-[#FFCE00] px-2 rounded-md"
              >
                Dr. Mohit Chowdhury
              </a>
            </h1>
          </div>
        </div>
      </div>

      <section className="relative w-full bg-white">
        <div className="bg-[#001844] py-10 px-12 sm:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
            {/* Circular Image */}
            <div className="w-52 h-52 shrink-0 rounded-full overflow-hidden ">
              <Image
                src="/images/blog-interview/interview/392b80ff-42c9-4833-92e0-19db46e0f028.jpeg"
                alt="Dr. Mohit Chowdhury"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="bg-[#FFCE00] max-w-5xl text-black p-4 sm:p-6 rounded-md shadow-md">
              <p className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-4">
                — Dr. Mohit Chowdhury, Associate Professor, Asian University for Women
                <a
                  href="https://www.linkedin.com/in/mohiuddin-ahsanul-kabir-chowdhury-b08b7a56/?originalSubdomain=bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </p>
              <p className=" text-2xl md:text-[28px]  font-base leading-relaxed md:text-justify">
                "The most valuable lesson I learned from my PhD was how to critically evaluate evidence while staying open to new perspectives. The balance between rigour and humility is crucial in epidemiology, where context matters as much as data."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Content */}
      <div className="max-w-screen-md mx-auto px-12 py-8 bg-white ">
        <h2 className="text-2xl font-bold text-[#C2185B] mb-6">
          <span className="border-b-4 border-red-600 pb-1 inline-block w-fit">Global Health Questions</span>
        </h2>
        {/* Q1 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What motivated you to move from clinical practice to public health research, and how do you feel about that decision after one decade?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Mohit Chowdhury:</span> After becoming a physician, my initial plan was to have a career in Internal Medicine, and I proceeded accordingly. I completed the 1st part of the fellowship examination of the Bangladesh College of Physicians and Surgeons in my desired subject within one year of my internship and started training for the final part. Meanwhile, I passed the Bangladesh Civil Service examination and joined as a medical officer in a rural area of the country. During my government service, I witnessed firsthand how social determinants, systemic inequities, and preventable conditions were driving poor health outcomes, particularly in underserved populations. I realized that treating individuals alone wasn't enough. Rather, public health can offer a way to impact health at the population level, addressing root causes. Hence, I chose to switch my career from a clinician to a public health professional.\n\nNow, after more than a decade in this sector, I feel satisfied with that decision. It has allowed me to contribute to building the next generation of public health professionals, both in Bangladesh and globally.
          </p>
        </div>
        {/* Q2 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. You hold academic degrees from prestigious institutions across Bangladesh and the USA. Could you name one or two teachers who truly inspired you to grow both professionally and personally?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Mohit Chowdhury:</span> There have been several professors who have inspired me to grow both professionally and personally. It would be hard to name only two of them. However, two mentors who had a profound impact on my academic and personal development are <a href="https://vivo.brown.edu/display/msarker1" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Professor Malabika Sarker</a> and <a href="https://sc.edu/study/colleges_schools/public_health/faculty-staff/mcdermott_suzanne.php" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Professor Suzanne McDermott</a>.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Professor Malabika Sarker, Professor of Practice of Behavioral and Social Science at Brown University, USA, played a foundational role in shaping my understanding of public health from a social and systems-oriented perspective. Her leadership, clarity of thought, and unwavering commitment to equity in health deeply inspired me. She not only taught me the principles of rigorous research but also modelled how to navigate the complexities of public health with compassion and integrity. She has been a mentor for my public health career, and I have been able to become more human under her guidance.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            On the other hand, Professor Suzanne McDermott, under whom I studied during my doctoral training in the USA, is currently serving the City University of New York as a Professor in the Department of Environmental, Occupational, and Geospatial Health Sciences. She was instrumental in refining my research skills and shaping my career in epidemiology. Her mentorship went far beyond the classroom; she nurtured my critical thinking, encouraged my independence, and supported me through complex research endeavours. Her guidance helped me understand how to translate scientific evidence into actionable public health policy.
          </p>
        </div>
        {/* Q3 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What is the most important lesson you took from your PhD in Epidemiology at the University of South Carolina, and why?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Mohit Chowdhury:</span> The most valuable lesson was learning how to critically evaluate evidence while staying open to new perspectives. The balance between rigour and humility is crucial in epidemiology, where context matters as much as data. It taught me to question assumptions, design better studies, and communicate findings with clarity and integrity.
          </p>
        </div>
        {/* Q4 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What would you consider your most significant contribution as a faculty member at a reputed international institution?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Mohit Chowdhury:</span> Beyond publications and grants, my most significant contribution has been mentoring young women from diverse backgrounds to become confident, ethical, and globally minded public health professionals. At the <a href="https://asian-university.org/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Asian University for Women</a>, I've helped build programs and research opportunities that empower future leaders, particularly from marginalized communities.
          </p>
        </div>
        {/* Q5 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What are you currently focused on, and what are your future plans – and why?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Mohit Chowdhury:</span> Currently, I'm leading research projects on reproductive care access, cancer care, and drug-resistant tuberculosis in South Asia. I'm also involved in strengthening public health curricula and faculty capacity. Looking ahead, I aim to expand implementation science and health systems research across South and Southeast Asia to influence policy and practice sustainably.
          </p>
        </div>
        {/* Q6 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What three essential skills would you recommend for the next generation of global health leaders?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Mohit Chowdhury:</span> The world is becoming more competitive every day. Hence, the next generation of global health leaders needs to prioritize training to adapt to evolving health challenges, collaborate effectively with diverse stakeholders, and leverage technology responsibly while addressing associated risks.
          </p>
          <ol className="ml-6 mt-2 space-y-3">
            <li>
              <b>1. Systems thinking:</b> An approach to problem-solving that views problems as part of a wider, interconnected system. It will help them to understand and navigate the complexity of global health challenges.
            </li>
            <li>
              <b>2. Cross-cultural communication:</b> The process of recognising both differences and similarities among cultural groups to effectively engage within a given context. This skill is essential for building trust and partnerships across disciplines and geographies.
            </li>
            <li>
              <b>3. Data Literacy:</b> In this data-driven world, data literacy would be another must-have skill. This will make them efficient in interpreting evidence and making informed, equity-centred decisions.
            </li>
          </ol>
        </div>
        <h3 className="text-xl font-bold text-[#C2185B] mb-6">
          <span className="border-b-4 border-red-600 pb-1 inline-block w-fit">Get to know Mohit Chowdhury</span>
        </h3>
        {/* Q7 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What book are you currently reading? What is one key insight you have taken from it?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Mohit Chowdhury:</span> I'm reading "The Spirit Catches You and You Fall Down" by Anne Fadiman. This provides a crucial narrative of navigating cultural differences in medicine and life, and how communication can drastically impact a patient's care. Fadiman illustrates the intricate challenges that exists in providing medical treatment to Lia including language and cultural barriers. It's a powerful reminder that health interventions fail when we ignore cultural context. Respecting patients' beliefs and lived experiences is not just ethical, it's essential to effective public health.
          </p>
        </div>
        {/* Q8 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Are there any fond memories from your PhD experience in the U.S. that you'd like to share?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Mohit Chowdhury:</span> Absolutely, my PhD journey in the U.S. was not only academically enriching but also personally memorable. One of the fondest memories I carry with me is organizing and participating in BanglaFest, a cultural celebration we initiated with fellow Bangladeshi students to showcase the richness of Bengali heritage on campus. BanglaFest became more than just a cultural event—it was a vibrant expression of identity, community, and belonging. We featured traditional music, dance, food, and poetry, and invited students and faculty from all countries to join in. It was heartwarming to see such enthusiasm and appreciation for our culture from the broader international community. The experience of bringing people together through shared celebration and cultural exchange was deeply fulfilling. Moments like these provided a perfect balance to the difficulties of academic life. They reminded me of the importance of community, cultural pride, and human connection—values that continue to influence both my professional and personal life.
          </p>
        </div>
        {/* Q9 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What is your favorite place to go for a walk in Chittagong (hometown), Bangladesh?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Mohit Chowdhury:</span> Chittagong is blessed with natural beauty, and I've always cherished spending time outdoors there. Among my favorite places to go for a walk, CRB Hills holds a special place in my heart. The lush greenery, winding trails, and peaceful atmosphere offer a perfect escape from the bustle of the city. It's a place where I can reflect, recharge, and reconnect with nature. That said, I also have fond memories of visiting the Chittagong War Cemetery, which is not only serene but also a powerful reminder of history. And on days when I feel like being near water, a walk along Foy's Lake or watching the sunset at Patenga Beach offers its own kind of tranquility. Each of these places speaks to different moods and moments, but CRB Hills remains my go-to for peaceful walks and quiet contemplation.
          </p>
        </div>
      </div>
      <BioOfMohitChowdhury />
    </div>
  );
};

export default FromClinicianToGlobalHealthScholar; 