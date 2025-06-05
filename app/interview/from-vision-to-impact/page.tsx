import Image from "next/image";
import Link from "next/link";

import { FaGlobe, FaLinkedin } from "react-icons/fa";

import Heading from "../a-leading-voice-in-global-health-systems/components/Heading";

import IstiakMannan from "@/public/images/blog-interview/interview/istiak-mannan-clear.jpeg";

import BioOfIshtiaqMannan from "./BioOfIshtiaqMannan";

const FromVisionToImpact = () => {
  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <div className="relative w-full  border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] leading-10"
              style={{ wordSpacing: "0.4rem" }}
            >
              From Vision to Impact:{" "}
              <a
                href="https://www.linkedin.com/in/ishtiaq-mannan-427a0874/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001844] underline font-extrabold bg-[#FFCE00] px-2 rounded-md"
              >
                Dr. Ishtiaq Mannan
              </a>{" "}
              <br />
              on Advancing Global health
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
                src={IstiakMannan}
                alt="Istiak Mannan"
                width={500}
                height={500}
                className="object-cover object-top w-full h-full"
              />
            </div>

            <div className="bg-[#FFCE00] max-w-5xl text-black p-4 sm:p-6 rounded-md shadow-md">
              <p className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-4">
                — Ishtiaq Mannan, MBBS, MSc, John Snow Research and Training
                Institute Inc., Arlington, VA.
                <a
                  href="https://www.linkedin.com/in/ishtiaq-mannan-427a0874/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="https://ishtiaqmannan.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <FaGlobe className="text-2xl" />
                </a>
              </p>

              <p className=" text-2xl md:text-[28px]  font-base leading-relaxed md:text-justify">
                “The health sector is full of opportunities for innovation.
                Design thinking and market-oriented approaches can help develop
                locally appropriate solutions—even within the development
                space.”
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
            Q. With nearly three decades in global health, do you still love
            what you do?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Ishtiaq Mannan:</span> As a student,
            I was deeply engaged in left-leaning politics, driven by a vision of
            a just and equitable world. When I began my career in public health,
            I realized it offered a powerful way to contribute toward that
            vision.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Over the last three decades, I’ve remained passionately focused on
            research, program management, and advocacy in public health. My work
            has never been just a job—it has been my purpose, my motivation, and
            my tool for driving social change. I don’t distinguish between
            personal time and professional time; I live and operate on a 24/7
            basis. For me, work-life balance means harmony and
            interconnectedness, not separation.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            I’ve enjoyed every moment of this journey—from being a research
            officer to managing global programs. If given the chance, I’d walk
            the same path again. I’ve had the privilege of working with
            incredible colleagues, mentors, and stakeholders, but it’s the
            connection with people—the ultimate beneficiaries—that has been most
            rewarding. Few things are more fulfilling than seeing systems
            strengthen, lives improve, and peers inspired, all resulting from
            our collective work.
          </p>
        </div>

        {/* Question 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. When you reflect on your global health career, how do you
            perceive the impact of your work?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Ishtiaq Mannan:</span> My work has
            always been part of collaborative teams, each member and stakeholder
            playing a unique role. The impacts we’ve made are multifaceted—some
            immediate, others with ripple effects across time and geography.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            One example I’m proud of is our work in newborn survival. The
            combined efforts in research, large-scale program implementation,
            and sustained advocacy in Bangladesh—and parallel work in countries
            like Nepal, India, Pakistan, and Ethiopia—have been transformative.
            Randomized controlled trials in Sylhet and Mirzapur produced
            game-changing evidence that helped shape national and global
            policies. These low-cost, scalable approaches to newborn care have
            saved millions of lives.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            This body of work helped shift the narrative from expensive clinical
            models to affordable, effective care in resource-limited settings.
            At the turn of the millennium, newborn mortality solutions were
            elusive—today, we know what works.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Later, I shifted focus to maternal health advocacy. We worked
            strategically to update national policies, standard operating
            procedures, and initiate dialogues through the{" "}
            <a
              href="https://dhsprogram.com/Countries/Country-Main.cfm?ctry_id=1&c=Bangladesh&Country=Bangladesh&cn=&r=4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              BDHS
            </a>{" "}
            Policy Group. This also led to a national campaign against{" "}
            <a
              href="https://www.facebook.com/stopuncs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              unnecessary cesarean sections.
            </a>{" "}
            What began as a voluntary initiative grew into a strong, collective
            movement involving journalists, legal experts, policy makers, and
            clinicians. It eventually triggered High Court intervention. While
            challenges remain, unnecessary cesarean prevention is now high on
            the health sector’s agenda.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            One of the most enduring impacts, though, has been the development
            of a broad, dedicated network of professionals committed to change.
            Though dispersed across organizations and geographies, we are united
            by our shared purpose. This camaraderie is invaluable and continues
            to fuel meaningful work.
          </p>
        </div>

        {/* Question 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What are you currently focused on, and what are your future
            plans—and why?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Ishtiaq Mannan:</span> Currently,
            I’m working full-time on a USAID-funded global project to strengthen
            health system resilience in fragile states across Africa, the Middle
            East, and Latin America. Despite recent policy shifts in U.S.
            foreign assistance, our project has remained active, focusing on
            lifesaving interventions in complex settings. In parallel, I stay
            engaged in health advocacy in Bangladesh. Right now, I’m
            contributing a chapter to the{" "}
            <a
              href="https://bangladeshhealthwatch.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Bangladesh Health Watch
            </a>{" "}
            report on corruption in the health sector.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Looking ahead, my goal is to help catalyze long-overdue reforms in
            Bangladesh’s health system. Despite progress, two questions continue
            to trouble me: First, how much of our so-called “achievements” are
            results of planned efforts? Second, how far are we from realizing
            true, holistic health for all?
          </p>

          <p className=" mt-2 mb-2 leading-relaxed text-justify">
            The system remains largely unregulated and functions like a
            laissez-faire market. The people of Bangladesh deserve better. We
            already know what needs to be done—what’s missing is the resolve to
            do it. I plan to focus on turning ideas into action, through
            targeted advocacy and campaigns that push for specific legal,
            structural, and resource-based reforms. We’ve analyzed and
            documented enough. Now it’s time to walk the talk—one change at a
            time.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What long-term impacts might recent U.S. funding cuts have on
            global health, and how can low-income countries navigate this
            crisis?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Ishtiaq Mannan:</span> The
            international development ecosystem, especially pre-January (2025)
            changes, was built over decades—deeply interwoven and mutually
            dependent. While geopolitical interests played a role, the system
            also met the real needs of vulnerable communities. I’ve witnessed
            those needs firsthand.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            The U.S. Government wasn’t just a player—it was a major artery in
            this system. Cutting off that artery disrupted the entire network.
            We’re seeing the immediate effects now, but the full impact will
            unfold over time.
          </p>

          <p className=" mt-2 mb-2 leading-relaxed text-justify">
            What’s most troubling is the abrupt and poorly managed nature of the
            cuts. Regardless of the motives, the process lacked thoughtfulness
            and humanity. When you build responsibility, withdrawing it must
            also be done responsibly.
          </p>
          <p className=" mt-2 mb-2 leading-relaxed text-justify">
            Going forward, multilateral actors will need to step up. Low-income
            countries must invest more in their health systems and explore
            regional collaboration. This crisis could also be a wake-up call—an
            opportunity to re-evaluate priorities, improve efficiency, and
            reallocate resources strategically.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Given current funding challenges, what three essential skills
            should the next generation of global health leaders develop to
            thrive?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Ishtiaq Mannan:</span> While funding
            challenges are real, my recommendations stem from broader, long-term
            trends rather than just recent events.
          </p>

          <p className="text-xl font-bold italic text-[#892dbb] mt-6 mb-2">
            Analytical and Critical Thinking:
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Our education systems often discourage questioning. But innovation
            starts with asking “why?” Without curiosity and the courage to
            challenge assumptions, knowledge becomes stagnant. Potential global
            health leaders must develop the habit of digging deeper and seeing
            beyond the obvious.
          </p>

          <p className="text-xl font-bold italic text-[#892dbb] mt-6 mb-2">
            Fluency in Technology:
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            This isn’t about inventing the next big tech—it’s about embracing
            technology as an extension of ourselves. As AI, data tools, and
            platforms evolve, leaders must treat them like everyday essentials.
            Just as we choose clothes, we must seamlessly choose and use the
            right digital tools.
          </p>

          <p className="text-xl font-bold italic text-[#892dbb] mt-6 mb-2">
            Entrepreneurial Mindset:
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            We need leaders who take initiative—not because of a funding call or
            job description, but because they see a need. The health sector is
            full of opportunities for innovation. Design thinking and
            market-oriented approaches can help develop locally appropriate
            solutions—even within the development space.
          </p>
        </div>

        {/* Public Health Journey Questions end */}

        {/* Get to know Ishtiaq Mannan  start  */}

        <Heading>Get to know Ishtiaq Mannan </Heading>

        {/* Question 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What book are you currently reading? What is one key insight you
            have taken from it?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Ishtiaq Mannan:</span> I just
            finished <i>Sapiens</i> by Yuval Noah Harari. It’s a sweeping
            narrative of the last 70,000 years, tracing human evolution through
            cognitive, agricultural, and scientific revolutions.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            What struck me most is how our ability to destroy ourselves sets us
            apart as a species. Nuclear weapons and AI have given us the power
            to self-extinct—something unique in the history of life. Yet this
            realization may also be prompting us to build stronger institutions
            and guardrails.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Another fascinating insight is our proximity to a fundamental
            transformation. With rapid progress in AI, genetics, and quantum
            science, Homo sapiens might soon evolve—not through natural
            selection but through human design—into a biologically and
            functionally different race.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Lastly, Harari’s take on happiness resonated with me. He suggests
            it’s more biological than circumstantial, and that chasing happiness
            in specific ways can often be counterproductive. There’s no
            universal scale to measure it, and the pursuit itself can sometimes
            lead us astray.
          </p>
        </div>

        {/* Question 5 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Who is your public health role model, and what about their work
            inspires you?
          </h2>

          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Ishtiaq Mannan:</span> I don’t have
            a single role model—I have many. I’ve learned from colleagues, team
            members, and mentors alike. Each has inspired me in different ways.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            One colleague, while wheeling her critically ill mother into the
            ICU, still managed to send a document I had requested. She didn’t
            have to—but she did. That level of dedication inspired me.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            A mentor built a world-class research team in rural Bangladesh,
            brick by brick over decades. His perseverance moved me.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Another colleague, after losing his job, immediately began driving
            his car as a car rental business. His resilience was remarkable.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Even your well-crafted interview questions impressed me—I found
            myself aspiring to your level of articulation. I could go on. These
            moments and people have shaped me, and continue to do so.
          </p>
        </div>

        {/* Question 6 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Do you see yourself returning to Bangladesh in the coming years,
            considering your current career abroad (USA)?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Ishtiaq Mannan:</span> Absolutely.
            Even if I feel like a global citizen, Bangladesh is where I belong.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            As soon as my current assignment ends and I fulfill a few personal
            commitments, I intend to return to Bangladesh. I’m actively
            exploring opportunities. My focus will be on health advocacy,
            universal health care, and leveraging technology to improve quality
            and access. I’m eager to contribute to systemic change on the
            ground—where it matters most.
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

      <BioOfIshtiaqMannan />
    </div>
  );
};

export default FromVisionToImpact;
