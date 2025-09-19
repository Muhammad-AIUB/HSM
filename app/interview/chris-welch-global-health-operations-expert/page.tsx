import Image from "next/image";
import Link from "next/link";

import { FaLinkedin } from "react-icons/fa";

import Heading from "../a-leading-voice-in-global-health-systems/components/Heading";

import ChrisWelch from "@/public/images/blog-interview/chris.jpg";

import BioOfChrisWelch from "./BioOfChrisWelch";

const ChrisWelchInterview = () => {
  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <div className="relative w-full  border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] leading-10"
              style={{ wordSpacing: "0.4rem" }}
            >
              In Conversation with{" "}
              <a
                href="https://www.linkedin.com/in/chris-c-welch/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFCE00] text-[#001844] px-2 py-1 rounded-md hover:bg-yellow-300 underline"
              >
                Chris Welch
              </a>
              : Grounded Insights from a Global Health Manager
            </h1>
          </div>
        </div>
      </div>

      <section className="relative w-full bg-white">
        <div className="bg-[#001844] py-10 px-12 sm:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
            {/* Circular Image */}
            <div className="w-52 h-52 shrink-0 rounded-full overflow-hidden border-2 border-gray-200">
              <Image
                src={ChrisWelch}
                alt="Chris Welch"
                width={500}
                height={500}
                className="object-cover w-full h-full"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>

            <div className="bg-[#FFCE00] max-w-5xl text-black p-4 sm:p-6 rounded-md shadow-md">
              <p className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-4">
                Chris Welch, A Global Health Operations Expert & Project Management Specialist
                <a
                  href="https://www.linkedin.com/in/chris-c-welch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </p>

              <p className=" text-2xl md:text-[28px]  font-base leading-relaxed md:text-justify">
                "A good plan must be developed with local ownership, not just local input."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Content */}
      <div className="max-w-screen-md mx-auto px-12 py-8 bg-white ">
        {/* Global Health and Leadership Questions start */}

        <Heading>Global Health and Leadership Questions</Heading>

        {/* Question 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. You've been working with an international organization for nearly 30 years — what has motivated you to stay, and what experiences have shaped your journey?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Chris Welch:</span> I joined Management Sciences for Health as a temporary employee shortly after graduating from college. I very quickly realized that this was a group of people that I wanted to work with for as long as possible – they were focused on the mission (strengthening systems to improve peoples' health) without losing sight of the people they worked with – in both the US and in the countries we supported. I had a few opportunities to leave MSH over the years, but each time I chose to remain with the people and mission that I had come to love. I have been fortunate enough to go out and work with teams in about 15 countries, which has been amazing. I have learned about so many different cultures and seen how much we all share while also grappling with a never-ending array of challenges.
          </p>
        </div>

        {/* Question 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What's the most valuable leadership lesson you've learned in your career?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Chris Welch:</span> I always go back to the Tao of Leadership: "Go to the People. Love them. Learn from them. Start with what they have. Build on what they know. But of the best leaders, when their task is accomplished, the work is done, the people will all say: WE HAVE DONE IT OURSELVES." Practically speaking, I think that this means that we should always try to combine the best local practices and knowledge with international standards, building the plan together, and absolutely not imposing things from outside. A good plan must be developed with local ownership, not just local input.
          </p>
        </div>

        {/* Question 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q: How did you overcome challenges in global health projects where country's strong local leadership was lacking, especially in Asia and Africa?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Chris Welch:</span> I have worked in many countries from Afghanistan to Uganda and never found one without strong local leaders. That is not to say that there was always a local person who met the donor's requirements for the role, or that the strong local leaders were willing to accept a role within our NGO. In those cases we would bring in international staff, but we could almost always find local leaders to coach or mentor, as we fostered leadership at all levels. Each person that I worked with had strengths and weaknesses; my job was to ensure that the full project team had the complementary skills to achieve our stated goals.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            My role for the last decade was to ensure that each team I oversaw could achieve their goals – and do so without always relying on staff from outside. I worked with each project's leadership so that I could provide that team with what they needed.
          </p>
        </div>

        {/* Question 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Given current funding challenges, what three essential skills should the next generation of global health managers develop to thrive?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Chris Welch:</span> I think that the most essential skills are: Adaptability, Emotional Intelligence, and Grit. This world is changing more rapidly than ever before, so we each need ADAPTABILITY to be ready to pivot to new opportunities, new funding, and new technologies that will disrupt the way we have "always" done things. As the world continues to change, we will have to work with different partners, new staff, etc., and high EMOTIONAL INTELLIGENCE enables us to work effectively with people from different backgrounds. Finally, we need to have GRIT to remain focused on the important goals – saving lives, treating people with respect, and being a good steward of funds – while everything changes around us. This is not remaining fixed on a certain way of doing things, but instead being ready to pick ourselves up again and again when new challenges knock us down.
          </p>
        </div>

        {/* Global Health and Leadership Questions end */}

        {/* Get to know Chris Welch start */}

        <Heading>Get to know Chris Welch</Heading>

        {/* Question 5 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Do you have a personal motto or mantra you live by?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Chris Welch:</span> I have several core beliefs, but the heart is the golden rule: Do unto others as you would have them do unto you.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Treat everyone with respect. Know that each person brings their own experience, knowledge, and skills to the discussion. Always try to understand what matters to them so that you can have a win-win solution.
          </p>
        </div>

        {/* Question 6 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What book are you currently reading, and what key insights would you share?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Chris Welch:</span> I just finished <u>The Wager: A Tale of Shipwreck, Mutiny, and Murder</u> by David Grann. <u>The Wager</u> recounts real-life events during the British imperial period – and it reminds us of many important things: what we can survive; the importance of continuing to do our best, no matter how difficult the situation may be; and the necessity of listening to all sides in a dispute. (The survivors of the shipwreck return to civilization in several groups months apart, telling VERY different stories of the events that transpired.) There are a few important leadership lessons that I took away:
          </p>
          <ul className="mt-2 leading-relaxed text-justify list-disc list-inside ml-4">
            <li>Work with a broad group of constituents, not just the top tier</li>
            <li>Document why you made the most important and controversial decisions as you did</li>
            <li>Every member of a team is important</li>
            <li>Pay attention to leaders rising within the ranks and foster them</li>
          </ul>
        </div>

        {/* Question 7 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. If you could travel anywhere for inspiration, where would you go and why?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Chris Welch:</span> There are two main ways that I get inspiration: the beauty of nature and watching teams of people working together to achieve something important. I have been to many inspiring locations, from Niagara Falls and Bryce Canyon in the US to forests full of lemurs in Madagascar, so my ideal would be to see them all at once from the International Space Station. Failing that, I am happy to just go to my neighborhood park and get absorbed in the simpler beauty of my local flora and fauna. There are many places to see extremely high functioning teams – from the pit crews at a Formula 1 race to any professional sports team – but I get really inspired watching a team provide quality health services in an overcrowded, underfunded health facility. That's a time when we can see people doing great work together for an incredibly important purpose.
          </p>
        </div>

        {/* Question 8 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Having visited Bangladesh over 20 times, how would you summarize your experiences? Any memorable moments?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Chris Welch:</span> How could I possibly summarize over a year in Bangladesh in a short paragraph? If I were writing this after my first time, I would say that it was overwhelming to the senses – so many people, such a riot of color every time you open your eyes, the smells of the food, the constant car horns, etc. After 5 visits, I would probably talk about the dichotomy between technical knowledge and practical management approaches (I didn't understand the implications of working in an environment where it's most important to work closely with the individuals in power, making rigid plans unworkable). After 22 visits, I have so much appreciation for the wisdom of the people I've worked with, their resilience through all kinds of challenges, and love for the challenges that arise every time. For any newcomer, I would remind them that you are almost never alone in Bangladesh, given that you have approximately half of the population of the USA, but all in an area smaller than Iowa, a mid-sized state. Prepare to be overwhelmed, and then to start the life-long process of learning.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            I remember good discussions with each of the 12 Line Directors for the National TB and Leprosy Program that I worked with, with the Honorable Minister as we discussed how to make South Dhaka a Zero TB City (work that, unfortunately, still has a long way to go), and with our Health Systems 4 TB (HS4TB) team as we strategized how to help the MOHFW procure TB services themselves, rather than rely on funding from development agencies. A more challenging memory was trying to keep my team together after the attack on the Holy Artisan Bakery – I was recovering from emergency surgery in Thailand and the international project leader decamped to his home in the middle of work planning (it was pure luck that he wasn't at the Bakery when it was attacked, so his fear was understandable!). We were able to come back together, but at the cost of our international partner and that project director.
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

      <BioOfChrisWelch />
      <div className="flex justify-center my-8">
        <a href="/interview/global-health-conversation-with-rajat-das-gupta">
          <button className="bg-[#FFCE00] text-black font-bold px-8 py-3 rounded hover:bg-yellow-400 transition text-lg shadow-md">
            Next Interview
          </button>
        </a>
      </div>
    </div>
  );
};

export default ChrisWelchInterview;
