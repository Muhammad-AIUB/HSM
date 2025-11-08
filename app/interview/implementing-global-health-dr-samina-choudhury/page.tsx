import Image from "next/image";
import Link from "next/link";

import { FaLinkedin } from "react-icons/fa";

import Heading from "../a-leading-voice-in-global-health-systems/components/Heading";

import SaminaChoudhury from "@/public/images/blog-interview/interview/samina.jpg";

import BioOfSaminaChoudhury from "./BioOfSaminaChoudhury";

const ImplementingGlobalHealth = () => {
  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <div className="relative w-full  border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] leading-10"
              style={{ wordSpacing: "0.4rem" }}
            >
              Implementing Global Health: A Conversation with{" "}
              <a
                href="https://www.linkedin.com/in/samina-choudhury-41396b37/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001844] underline font-extrabold bg-[#FFCE00] px-2 rounded-md"
              >
                Dr. Samina Choudhury
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
                src={SaminaChoudhury}
                alt="Dr. Samina Choudhury"
                width={500}
                height={500}
                className="object-cover object-top w-full h-full"
              />
            </div>

            <div className="bg-[#FFCE00] max-w-5xl text-black p-4 sm:p-6 rounded-md shadow-md">
              <p className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-4">
                — Dr. Samina Choudhury, A Global Health Manager
                <a
                  href="https://www.linkedin.com/in/samina-choudhury-41396b37/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </p>

              <p className=" text-2xl md:text-[28px]  font-base leading-relaxed md:text-justify">
                "Health is one of the sectors most affected by the global and national economic situation. Thirty years ago, private sector was not a major driver in health sector but now it is."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Content */}
      <div className="max-w-screen-md mx-auto px-12 py-8 bg-white ">
        {/* Global Health and Program Implementation start */}

        <Heading>Global Health and Program Implementation </Heading>

        {/* Question 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Could you briefly share your journey from holding a clinical degree in Bangladesh to becoming a global health professional? What inspired you to take this path?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Samina Choudhury:</span> From the day I entered the premises of the medical college, it was taken for granted that I would become a clinician. This is not only the common pathway, but also the most desired outcome for the family and friends of a medical student. I was no exception. However, my path took a different turn. After my internship, I was looking for a job. A close acquaintance referred me to a training opportunity designed to develop Master Trainers for Family Planning services. I applied, was selected and soon found myself enrolled in the course. This course changed my life. The process contributed in shaping my attitude towards public health. During the training, I met some of the leading figures in the field—public health gurus- whose work inspired me deeply. The course also covered management aspects of public health programs, an area that captured my interest immediately. And so, my journey in public health began.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            It may sound like quite an accidental step into this arena. However, that is not the case. I would rather say that the zeal to be a public health worker was innate in me. From my childhood, I was very much community-centric. Always believed that diseases can not be treated only in the hospitals rather the process should start from the community. My interest in sociology drove me to the fact that diseases are not only confined to the patient's body. Also, during my internship at my medical college, I observed the ward in-charges struggling with supplies and rosters. I realized clinicians need management support to deliver effective care. My sense of community-connectedness and my analytical observation skills inspired me to pursue a career in public health.
          </p>
        </div>

        {/* Question 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Looking back on your global health journey, how do you see the impact of your work?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Samina Choudhury:</span> The journey follows a concerted pathway. No one can individually claim any impact of his or her work. The nature of the public health approach is based on team work and goes beyond specific time frame. However, if I were to mention a key impact of over three decades of the global health journey – it would be the development of the concepts of self-reliance and sustainability through health systems strengthening. Though there is still a long way to go but the approach now focuses on developing systems rather than relying on sporadic solution.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Personally, I feel satisfied when I find that I could contribute in the career pathways of the new generation public health workers.
          </p>
        </div>

        {/* Question 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. How would you describe your experience working with the Ministry of Health and Family Welfare in Bangladesh:
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Samina Choudhury:</span> Overall, I am very comfortable working with the Ministry of Health and Family Welfare. I worked with the GoB counterparts at different layers from union to the highest position of the Ministry. I found that our GoB counterparts are flexible and willing to work for the people.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            In terms of areas to improve- there is a huge scope to work for Human Resources for Health. This has never been addressed through a proper strategy- covering every aspect from medical education to service management. effective management of human resources can address 90% of the problems of health service delivery. Procurement and supply chain management is another vital issue that need to be streamlined.
          </p>
        </div>

        {/* Question 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. If you had unlimited funding for one global health project, what would you do and why?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Samina Choudhury:</span> I would work in a way so that no external funding is required for ensuring access to health for all. I would do policy advocacy for increasing health budget and equitable distribution of the budget. I would advocate for resource optimization for proper utilization of resources available for health. Resources are not available only with the public systems, there are growing resources in the private sector- optimization of those resources are crucial in ensuring health for all.
          </p>
        </div>

        {/* Global Health and Program Implementation end */}

        {/* Career Questions start */}

        <Heading>Career Questions</Heading>

        {/* Question 5 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What are you currently focused on, and what are your future plans—and why?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Samina Choudhury:</span> I am developing myself to work in a boarder role within health sector development. I want to use my experience in strategy and human resource development to contribute to the health sector. To this end, I am preparing and positioning myself for such opportunities.
          </p>
        </div>

        {/* Question 6 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Based on your experience in Bangladesh and beyond, what three essential skills would you recommend for the next generation of global health leaders?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Samina Choudhury:</span> First and foremost are communication skills. Here, communication refers to all forms of interaction—communicating proposed strategies, one's own credentials, and the project's achievements. Communication is essential in every aspect of public health practices.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            The next important skill is to understand the global and country context- in terms of economic, social and disease trends. Health is one of the sectors most affected by the global and national economic situation. Thirty years ago, private sector was not a major driver in health sector but now it is. Further with changes in the economic condition of the people, access to and demand for health services varies. Before the COVID pandemic we could not realize the importance of Global Health security. Therefore, keeping an eye on the disease trends is essential for developing health strategies and for mobilizing resources. At a personal level, these kinds of analytic skills, help a public health professional in planning his own career pathway.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Lastly, keeping oneself updated with newer technologies is crucial. As technologies evolve each day, we must strive to keep pace with them.
          </p>
        </div>

        {/* Question 7 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What's the most powerful leadership lesson you've learned throughout your career?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Samina Choudhury:</span> I try to practice situational leadership model.  Situational Leadership means adapting your leadership style to each unique situation or task to meet the needs of the team or team members. Ken Blanchard and Paul Hersey developed the Situational Leadership Theory in 1969. They believe that there is no "one size fits all" leadership style.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            I keep on assessing the team's as well as individual's levels of competence, motivation and nature of the task and decide which leadership style to use – supporting, coaching delegating or directing. This is challenging and a continuous process but I enjoy practicing this.
          </p>
        </div>

        {/* Career Questions end */}

        {/* Get to Know Samina Choudhury start */}

        <Heading>Get to Know Samina Choudhury </Heading>

        {/* Question 8 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Who is your public health role model, and what about their work inspires you?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Samina Choudhury:</span> One of my public health role models is Yeasmin H Ahmed. She developed a national NGO. She is a great manager and a great leader. She has a great analytic skill and applies this skill in making decisions.
          </p>
        </div>

        {/* Question 9 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What book are you currently reading, and is there a particular idea or message that has stayed with you?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Samina Choudhury:</span> John Green's "Everything is Tuberculosis." I recommend every public health professional to read this book. This book is not only about Tuberculosis, it tells us how inequitable distribution of resources contributes to the persistence of a deadly infection. It tells us how a disease can shape the world and motivates us to take part in shaping the disease. From time immortal, disease has shaped human history. For example, pandemics create economic crises and have significant impacts on population dynamics by influencing mortality rates and human migration. Further, political influences of the rich restrict fund flow to the poor and limit their access to treatment. Very few literatures have captured these dynamics, John Green could bring these dimensions in his book. The important message that has stayed with me is "We cannot address TB only with vaccines and medication. We have to find the root cause. In a world where everyone can eat, access health care and treated humanely tuberculosis has no chance".
          </p>
        </div>

        {/* Question 10 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Do you have a personal motto or guiding principle that you live by?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Samina Choudhury:</span> I want to do something for the people and the earth.
          </p>
        </div>

        {/* Get to Know Samina Choudhury end */}

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

      <BioOfSaminaChoudhury />
      <div className="flex justify-center my-8">
        <Link
          href="/interview/public-health-insights-1"
          className="mt-4 font-bold text-xl bg-[#FFCE00] text-black px-4 py-2 hover:text-white hover:bg-[#2D8CBB]   transition ease-in-out duration-200"
        >
          Next Interview
        </Link>
      </div>
    </div>
  );
};

export default ImplementingGlobalHealth;

