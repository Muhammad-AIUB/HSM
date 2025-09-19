import Image from "next/image";
import Link from "next/link";

import Heading from "../a-leading-voice-in-global-health-systems/components/Heading";

import AlexBerland from "@/public/images/blog-interview/interview/Alex_2400px.jpg";

import BioOfAlexBerland from "./BioOfAlexBerland";

const AlexBerlandOnElevatingNursingEducation = () => {
  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <div className="relative w-full  border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] leading-10"
              style={{ wordSpacing: "0.4rem" }}
            >
              <a
                href="https://www.linkedin.com/in/alex-berland-b7618221/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001844] underline font-extrabold bg-[#FFCE00] px-2 rounded-md"
              >
                Alex Berland
              </a>{" "}on Elevating Nursing Education
              <br />
              and Building a Global Health Career
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
                src={AlexBerland}
                alt="Alex Berland"
                width={500}
                height={500}
                className="object-cover object-top w-full h-full"
              />
            </div>

            <div className="bg-[#FFCE00] max-w-5xl text-black p-4 sm:p-6 rounded-md shadow-md">
              <p className="text-xl font-semibold text-gray-800 mb-3">
                — Alex Berland, Global Health and Nursing Education Specialist
              </p>

              <p className=" text-2xl md:text-[28px]  font-base leading-relaxed md:text-justify">
                "Nursing education in Bangladesh is very inconsistent in quality, with a few islands of merit but mostly poor results. Because professional practice in hospitals is weak, nursing students cannot learn from competent role models."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Content */}
      <div className="max-w-screen-md mx-auto px-12 py-8 bg-white ">
        {/* Global Health and Career Questions  start */}

        <Heading>Global Health and Career Questions </Heading>

        {/* Question 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. With your strong clinical academic background, what inspired your work in teaching hospitals in Canada and the UK?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Alex Berland:</span> The "power of practice" has always been very important to me. As an executive, I always knew that the people doing the front-line work, providing direct care to patients, knew more about that work than I knew. My responsibility was to support those workers to deliver the best possible patient care. I followed the ideal of "servant leadership" in my management role of setting priorities and keeping the organizational focus on care quality, mutual respect and ethical practice.
          </p>
        </div>

        {/* Question 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Having long-standing experience in Bangladesh's academic and private sectors, how do you assess the quality of nursing education?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Alex Berland:</span> Nursing education in Bangladesh is very inconsistent in quality, with a few islands of merit but mostly poor results. Because professional practice in hospitals is weak, nursing students cannot learn from competent role models. Even if they do have a reasonably good education, graduate nurses may not be able to practice modern skills due to prevailing standards of their workplace. Additional internal factors contribute to low competence: skill level of nurse educators; few opportunities for professional development of nurses or educators; weak regulatory standards and controls; lack of leadership to uplift the nurse training system.
          </p>
        </div>

        {/* Question 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What advice would you give to someone who wants to build a global career in nursing?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Alex Berland:</span> Immerse yourself in the possibilities. International work begins at home: I was engaged in projects in Bangladesh by a friend who was volunteering with me on a community health project in Canada. Read about the work of international NGOs to learn about areas of need, program activities and job qualifications. You can also explore opportunities through <a href="https://bmjopen.bmj.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">open</a> access <a href="https://www.thelancet.com/journals/langlo/home" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">journals</a>, conferences, web forums like <a href="https://ganm.nursing.jhu.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Global Alliance for Nurses and Midwives</a>, or academic programs such as the low-cost online courses at <a href="https://nextgenu.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Next GenU</a>.
          </p>
        </div>

        {/* Question 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What is the most important lesson you have gained over the course of your four-decade enriched career?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Alex Berland:</span> Margaret Mead summarized this so well: "Never doubt that a small group of thoughtful, committed citizens can change the world. Indeed, it is the only thing that ever has." I am unsure about the second sentence, but I have seen the effect of the first: energetic pioneers, leaders, and collectives do change the world - for better or for worse!
          </p>
        </div>

        {/* Question 5 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. When you reflect on your global health career, how do you perceive the impact of your work?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Alex Berland:</span> Much of my global health work focuses on human resource development, so I am very much "upstream" or distant from the impact. Therefore, my perceptions must be philosophical. Gandhi said, "Whatever you do will be insignificant; nonetheless it is extremely important that you do it." In the early days of the <a href="https://www.bangladeshhealthproject.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Bangladesh Health Project</a>, a Bangladeshi told me, "These are our problems. We need your help so that we can solve them in our own way." I will let others assess the impact of my work.
          </p>
        </div>

        {/* Question 6 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Do you still enjoy what you're doing, and what are your future plans?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Alex Berland:</span> I feel very fortunate to have intellectual work that I enjoy so much: this is its own reward. Future plans are more of the same: continue building public health capacity in Bangladesh through education and professional development; contribute to advancement of health care policy in Canada; write scholarly and popular papers about what I am learning; mentor juniors and pass the torch. I would like to be more involved in the policy process to shape the professional determinants of health in Bangladesh, but I cannot create this opportunity myself.
          </p>
        </div>

        {/* Global Health and Career Questions end */}

        {/* Get to know Alex Berland  start  */}

        <Heading>Get to know Alex Berland </Heading>

        {/* Question 7 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Do you have any professional role models, and what about their work inspires you?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Alex Berland:</span> My professional role models have been people who demonstrate ethical behaviour, strong interpersonal skills and high levels of competence. These include people at all levels of organizations, not only leaders. I often tell Canadians about the positive attitude I encounter in Bangladesh. There are so many challenges, yet these colleagues remain optimistic, try their best to do a good job and behave nicely to others. That is inspiring – their commitment keeps me returning to this country to work alongside them.
          </p>
        </div>

        {/* Question 8 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What book are you currently reading? What is one key insight you have taken from it?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Alex Berland:</span> I recommend "Factfulness" by global health scholar Hans Rosling. The key insight is that we do not know what we do not know, and even our guesses are informed by our unconscious biases. Rosling explains these biases, shows where global health professionals are making progress, and provides hopeful advice about where we should focus future efforts.
          </p>
        </div>

        {/* Question 9 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Any special memories from your several visits in Bangladesh that still make you smile?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Alex Berland:</span> I have visited Bangladesh about twenty times since 2004, so there are many special memories. There are different kinds of smiles, too. There is the teacher's smile of pride seeing my students surpass me with their insights and capabilities. There is the wry smile of a cynic seeing miscreants and incompetent but few consequences. And of course, there is my smile of appreciation for the warm welcome of so many hospitable Bangladeshis, reminding me that our world is mostly filled with ordinary people who care about one another.
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

      <BioOfAlexBerland />
      <div className="flex justify-center my-8">
        <a href="/interview/chris-welch-global-health-operations-expert">
          <button className="bg-[#FFCE00] text-black font-bold px-8 py-3 rounded hover:bg-yellow-400 transition text-lg shadow-md">
            Next Interview
          </button>
        </a>
      </div>
    </div>
  );
};

export default AlexBerlandOnElevatingNursingEducation; 