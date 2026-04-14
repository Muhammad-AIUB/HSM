import Image from "next/image";
import Link from "next/link";

import { interviewOrder } from "../interviewOrder";
import { LinkedInLogo } from "@/components/Shared/LinkedInLogo";

const FromMbaToPublicHealthATrusharParmarConversation = () => {
  const currentSlug = "from-mba-to-public-health-a-conversation-with-trushar-parmar";

  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <div className="relative w-full border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] leading-10"
              style={{ wordSpacing: "0.4rem" }}
            >
              From MBA to Public Health: A Conversation with{" "}
              <a
                href="https://www.linkedin.com/in/drtrusharparmar/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFCE00] px-2 rounded-md underline font-extrabold"
              >
                Trushar Parmar
              </a>
            </h1>
          </div>
        </div>
      </div>

      <section className="relative w-full bg-white">
        <div className="bg-[#001844] py-10 px-12 sm:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
            <div className="w-52 h-52 shrink-0 rounded-full overflow-hidden">
              <Image
                src="/images/blog-interview/interview/Trushar.png"
                alt="Trushar Parmar"
                width={500}
                height={500}
                className="object-cover object-top w-full h-full"
              />
            </div>

            <div className="bg-[#FFCE00] max-w-5xl text-black p-4 sm:p-6 rounded-md shadow-md">
              <p className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span>
                  - Trushar Parmar, Health Policy and Financing &amp; Implementation Expert
                </span>
                <a
                  href="https://www.linkedin.com/in/drtrusharparmar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  <LinkedInLogo size={20} />
                </a>
              </p>

              <p className="text-2xl md:text-[28px] font-base leading-relaxed md:text-justify">
                "Funding constraints, although they are really challenging, don't eliminate
                opportunity. Generalist space is shrinking. What remains is demand for people who
                can do specific things well in specific contexts."
              </p>

              <p className="mt-4 text-xs text-gray-900">Published: 16 April 2026</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-screen-md mx-auto px-12 py-8 bg-white">
        <h2 className="text-2xl md:text-[24px] font-bold text-[#C2185B] mb-6">
          <span className="border-b-4 border-red-600 pb-1 inline-block w-fit">
            Career Transitions in Public Health
          </span>
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What drew you to public health?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Trushar Parmar:</span> I didn't plan this trajectory. The
            BHMS was clinical training, and for a while that felt sufficient as you see a patient,
            you treat, you document. But community medicine was part of the curriculum, and
            something about it stuck. It asks a different question from clinical medicine: not what
            is wrong with this person, but why this condition keeps recurring in this population, in
            this district, year after year. That shift in unit of analysis, from individual to
            group, changed how I thought about health altogether.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            The MBA followed, partly out of curiosity about the system side: how facilities
            function, how care gets financed, where access breaks down. Working across
            Reproductive and Child Health, TB, and immunization programs after that made the
            abstraction concrete. In the field, the gap between what a policy prescribes and what
            actually reaches a beneficiary is stark, and that gap is where most of the real work
            sits. As I mentioned above, the pull toward public health started earlier, in a
            community medicine lecture, in a question that no individual consultation could answer.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What key areas are you currently focusing on to advance global health financing?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Trushar Parmar:</span> My current focus sits at designing
            of Health Benefit Packages (case-based payment system) under Ayushman Bharat Pradhan
            Mantri Jan Arogya Yojana, which is world's largest health insurance/assurance scheme.
            The role's emphasis is on key questions such as what's in the benefit package, how
            providers are paid, and what data gets collected.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            This reform, I believe, is realistic and incremental: tightening benefit package
            design, improving claims classification using ICD-11 and ICHI to understand what's being
            treated, and using that evidence to refine payment logic over time. India's provider
            base is heterogeneous, information systems are still maturing, and rate revision carries
            real political weight.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            So, the work that matters right now is the groundwork: what morbidities are to be
            prioritized and covered, getting classification right, identifying where the current
            package has gaps or perverse incentives, and building in structured patient feedback
            that feeds into quality assessments rather than sitting as standalone satisfaction data.
            The longer objective is UHC. But the lever is in the design details.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Having worked both inside government and with development organizations, what
            overarching insights have shaped your perspective on these two systems?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Trushar Parmar:</span> Government work taught me that
            legitimacy and governance matter more. A well-designed reform with no internal
            ownership goes nowhere and I've seen that firsthand. Development organizations have the
            opposite perspective: strong execution, but on timelines that don't always survive the
            next funding cycle.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Inside National Health Authority, what strikes me is that neither system is
            self-sufficient. Government provides policy anchor and governance oversight. Partners
            bring capacity and technical depth. The gap between them is at design level and bridged
            by coordination.
          </p>
        </div>

        <h2 className="text-2xl md:text-[24px] font-bold text-[#C2185B] mb-6">
          <span className="border-b-4 border-red-600 pb-1 inline-block w-fit">
            Academic Insights
          </span>
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. You've studied at renowned institution like London School of Hygiene and Tropical
            Medicine. What is the single biggest lesson that has stayed with you?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Trushar Parmar:</span> I arrived at LSHTM with more than a
            decade's experience, so the technical content wasn't entirely new. What shifted was how
            I thought about evidence. The one hard thing to ignore was rigorous analysis and
            political feasibility are different problems, and conflating them is where most reforms
            quietly fail.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Good evidence that can't survive the institutional environment it lands in doesn't
            change much. That's the lesson I carried back, and it shows up constantly in the PM-JAY
            work.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. How can aspire public health professionals from LMICs navigate and succeed at the
            international level amid the current global funding constraints?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Trushar Parmar:</span> Funding constraints, although they
            are really challenging, don't eliminate opportunity. Rather, they concentrate on it.
            Generalist space is shrinking. What remains is demand for people who can do specific
            things well in specific contexts.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            For experienced professionals, the starting point isn't reinvention but translation.
            Technical depth built inside a national program travels. How policy moves through a
            system, how providers respond to payment incentives, where implementation breaks down;
            these patterns repeat across LMICs. That experience is transferable if you can
            articulate it clearly. Specialize, document your work, make it visible. That's the
            durable path.
          </p>
        </div>

        <h2 className="text-2xl md:text-[24px] font-bold text-[#C2185B] mb-6">
          <span className="border-b-4 border-red-600 pb-1 inline-block w-fit">
            Get to Know Trushar Parmar
          </span>
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Whom do you most admire in professional life, and why?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Trushar Parmar:</span> Honestly, it's hard to pin one name.
            Across TB programs, health financing work, and field postings I've been opportune to
            observe and learn on what works and what does not. Learning in public health is oddly
            distributed that way.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            But Paul Farmer stays with me. He refused a premise most institutions quietly accept
            that where you're born determines the care you deserve. He put it simply: "The idea
            that some lives matter less is the root of all that is wrong with the world." Hard to
            argue with that. Harder still to actually build your work around it.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What book(s) are you currently writing?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Trushar Parmar:</span> Not a book yet honestly, that
            ambition is parked for now. What's actually taking up my thinking is a piece on
            financing for surgical care in LMICs, which remains oddly underexplored given how much
            of the disease burden it touches. And a deeper dive into PM-JAY, not another programme
            review, but something that sits with the data long enough to ask uncomfortable questions
            about who the scheme is really reaching and what it's actually paying for, for example
            cancer care.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Do you have a personal motto or mantra you live by?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Trushar Parmar:</span> Not a formal motto, but two voices I
            keep returning to. Paul Farmer's insistence that the suffering of the poor is never
            inevitable - that it has causes, and causes can be changed. And Margaret Mead's
            reminder that small groups of committed people are behind every meaningful change the
            world has seen.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Between the two, something like a working principle: care enough to understand the
            root, then act like it's possible to shift it. That's the standard I try to hold myself
            to, imperfectly.
          </p>
        </div>

        <div className="mt-4 mb-6">
          <p className="text-[#001844] text-2xl mt-4 leading-relaxed text-center font-semibold bg-yellow-200 p-2 rounded-md">
            Interview conducted by{" "}
            <Link href="/sizear" className="text-blue-700 font-bold hover:underline">
              Monaemul Islam Sizear
            </Link>
          </p>
        </div>

        <div className="mb-10 rounded-md bg-[#BFEFF3] px-6 md:px-10 py-8 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#001844] text-center">
            About Trushar Parmar
          </h2>
          <div className="mt-2 mb-6 h-1 w-20 bg-[#FFCE00] mx-auto rounded-full" />
          <p className="mt-2 leading-relaxed text-justify">
            I've spent close to 13 years working across India's public health programs:
            reproductive and child health, immunization, and NCD care, before moving into TB,
            where my focus sharpened around private sector engagement, care access, and quality.
            That work, supported by the World Bank and USAID, pushed me toward a harder question:
            how health systems actually finance and purchase care, not just deliver it.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            That question brought me to the National Health Authority, where I now work on PM-JAY's
            Health Benefit Packages (a case based payment system): designing what the scheme covers,
            how providers are paid, and how claims data can inform smarter purchasing decisions. The
            MSc in Health Policy, Planning and Financing from LSE and LSHTM gave analytical rigor to
            instincts built over years of field practice.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            My interest now sits at the intersection of strategic purchasing, provider payment
            reform, and UHC with an eye toward how these lessons travel across LMICs.
          </p>
        </div>
      </div>

      <div className="flex justify-center my-8">
        {(() => {
          const idx = interviewOrder.findIndex((item) => item.slug === currentSlug);
          const next = interviewOrder[(idx + 1) % interviewOrder.length];
          return (
            <Link
              href={`/interview/${next.slug}`}
              className="mt-4 font-bold text-xl bg-[#FFCE00] text-black px-4 py-2 hover:text-white hover:bg-[#2D8CBB] transition ease-in-out duration-200"
            >
              Next Interview
            </Link>
          );
        })()}
      </div>
    </div>
  );
};

export default FromMbaToPublicHealthATrusharParmarConversation;
