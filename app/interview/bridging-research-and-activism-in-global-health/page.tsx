import Image from "next/image";
import Link from "next/link";

import { FaLinkedin } from "react-icons/fa";

import Heading from "../a-leading-voice-in-global-health-systems/components/Heading";

// You'll need to add the actual image import here
// import PrimaAlamImage from "@/public/images/blog-interview/interview/prima-alam.jpg";

import BioOfPrimaAlam from "./BioOfPrimaAlam";

const BridgingResearchAndActivism = () => {
  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <div className="relative w-full  border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] leading-10"
              style={{ wordSpacing: "0.4rem" }}
            >
              Bridging Research and Activism in Global Health: A Dialogue with{" "}
              <a
                href="https://www.linkedin.com/in/pmalam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001844] underline font-extrabold bg-[#FFCE00] px-2 rounded-md"
              >
                Dr. Prima Alam
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
                src="/images/blog-interview/interview/Prima.jpg"
                alt="Dr. Prima Alam"
                width={500}
                height={500}
                className="object-cover object-top w-full h-full"
              />
            </div>

            <div className="bg-[#FFCE00] max-w-5xl text-black p-4 sm:p-6 rounded-md shadow-md">
              <p className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-4">
                — Dr. Prima Alam, Co-Founder and Director, RDA Labs
                <a
                  href="https://www.linkedin.com/in/pmalam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </p>

              <p className=" text-2xl md:text-[28px]  font-base leading-relaxed md:text-justify">
                "Leadership isn't about having all the answers; it's about creating spaces to pursue collective curiosity and embrace the messiness."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Content */}
      <div className="max-w-screen-md mx-auto px-12 py-8 bg-white ">
        {/* Career and Current Focus start */}

        <Heading>Career and Current Focus</Heading>

        {/* Question 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q: Could you share a brief overview of your current professional role and responsibilities? Your LinkedIn title "Chief Troublemaker" is intriguing—what does it mean to you?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Prima Alam:</span> I am currently 'troublemaking' at RDA Labs – a purpose-driven research collective co-creating accessible research that informs action. I have a bit of an allergy to conformity and taking titles too seriously. Creating some 'good' trouble feels like a way to shake things up – it's more authentic to my role professionally as well as IRL (in real life)!
          </p>
        </div>

        {/* Question 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q: What do you see as the most pressing global health challenges today, and how can low- and middle-income countries effectively address them?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Prima Alam:</span> Health inequity in all its forms. There's no one-size-fits-all model for addressing this. Strengthening South–South partnerships and investing in community-led movements can create context-specific change. These efforts must be multisectoral and grounded in approaches that centre agency, dignity and local ownership rather than external prescriptions.
          </p>
        </div>

        {/* Question 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q: If you had unlimited funding for one global health project, what would you pursue and why?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Prima Alam:</span> Is it too much like 'wishing for infinite wishes' to say I'd use the unlimited funding to support unlimited community-led health initiatives everywhere?! The project would focus on redistributing power and resources, since top-down approaches rarely lead to structural change.
          </p>
        </div>

        {/* Question 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Based on your experience in Bangladesh and beyond, what skills and focus areas can help Bangladeshi professionals thrive globally?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Prima Alam:</span> I've had the privilege of collaborating with so many exceptional researchers in Bangladesh. The traits I admire most are curiosity and conscientiousness. Alongside tangible skills such as methodological and analytical training, it's just as important to stay open and keep engaging with diverse perspectives.
          </p>
        </div>

        {/* Question 5 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q: What's the most powerful leadership lesson you've learned throughout your career?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Prima Alam:</span> Leadership isn't about having all the answers; it's about creating spaces to pursue collective curiosity and embrace the messiness.
          </p>
        </div>

        {/* Academic Journey and Suggestions start */}

        <Heading>Academic Journey and Insights</Heading>

        {/* Question 6 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q: Pursuing a PhD takes deep commitment. In your view, when is it most valuable, and how has it shaped your career path?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Prima Alam:</span> A colleague once told me I should start a PhD as soon as possible or it would be 'too late'. While I appreciated the advice, I don't think there's ever a 'right' time – and it's certainly not a prerequisite for a fulfilling career in global health! It's a huge investment that may not be feasible for everyone. I was driven by my research interests and fortunate to secure funding, which made it all possible.
          </p>
        </div>

        {/* Question 7 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q: What was the key insight you gained during your PhD at the London School of Hygiene and Tropical Medicine?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Prima Alam:</span> There's so much opportunity for camaraderie – even in what can feel like a solitary journey.
          </p>
        </div>

        {/* Question 8 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q: What core skills are essential for successfully managing and completing a PhD at a leading institution?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Prima Alam:</span> There's a lot to consider beyond the obvious skills of time management and analytical rigour. It's about knowing when to ask for help, when to give yourself a break, and building a support system you can draw energy from. Most of all, it's about remembering that your worth isn't tied to productivity. It's surprising how much you can accomplish once you let go of the constant pressure to accomplish.
          </p>
        </div>

        {/* Get to Know Prima Alam start */}

        <Heading>Get to Know Prima Alam</Heading>

        {/* Question 9 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q: Who is your public health role model, and what about their work inspires you?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Prima Alam:</span> My introduction to health research began close to home as my maternal uncle is a health economist. As an inquisitive teenager, I was drawn to the community health projects he worked on and fascinated by how many people had to come together to make things happen. That sense of collaboration and shared purpose has stayed with me ever since.
          </p>
        </div>

        {/* Question 10 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q: What book are you currently reading, and is there a particular idea or message that has stayed with you?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Prima Alam:</span> I've been getting into some non-fiction this year and have just started reading The Foreign Gaze: Essays on Global Health by Ṣẹ̀yẹ Abímbọ́lá. It's very compelling so far – will report back once I've finished the book!
          </p>
        </div>

        {/* Question 11 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q: Do you have a personal motto or guiding principle that you live by?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Prima Alam:</span> Be unapologetically yourself while leading with compassion.
          </p>
        </div>

        {/* Question 12 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q: With your thriving global career and secure life in the UK, do you envision returning to Bangladesh in the future?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Prima Alam:</span> I would certainly be open to the possibility! Wherever I am, I'd like to continue supporting meaningful work in the region.
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

      <BioOfPrimaAlam />
      <div className="flex justify-center my-8">
        <a href="/interview/deep-conversation-with-dr-tasdik-hasan">
          <button className="bg-[#FFCE00] text-black font-bold px-8 py-3 rounded hover:bg-yellow-400 transition text-lg shadow-md">
            Next Interview
          </button>
        </a>
      </div>
    </div>
  );
};

export default BridgingResearchAndActivism;
