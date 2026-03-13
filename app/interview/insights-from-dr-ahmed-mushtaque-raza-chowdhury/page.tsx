import Image from "next/image";
import Link from "next/link";

import { interviewOrder } from "../interviewOrder";
import Heading from "../a-leading-voice-in-global-health-systems/components/Heading";
import { LinkedInLogo } from "@/components/Shared/LinkedInLogo";
import MushtaqueImage from "@/public/images/blog-interview/interview/mushtaque-raza-chowdhury.webp";
import AcademicCareerImage from "@/public/images/blog-interview/interview/WhatsApp Image 2026-03-13 at 1.54.50 PM.jpeg";

const InsightsFromDrAhmedMushtaqueRazaChowdhury = () => {
  const currentSlug = "insights-from-dr-ahmed-mushtaque-raza-chowdhury";

  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      {/* Top heading strip */}
      <div className="relative w-full border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] leading-10"
              style={{ wordSpacing: "0.4rem" }}
            >
              INSIGHTS FROM{" "}
              <a
                href="https://www.linkedin.com/in/mushtaque-chowdhury-71583364/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFCE00] px-2 rounded-md underline"
              >
                DR. AHMED MUSHTAQUE RAZA CHOWDHURY
              </a>
              : ACADEMIC VISIONARY AND DEVELOPMENT PRACTITIONER
            </h1>
          </div>
        </div>
      </div>

      {/* Hero section with image and quote – mirrored from Jahangir layout */}
      <section className="relative w-full bg-white">
        <div className="bg-[#001844] py-10 px-12 sm:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
            {/* Circular Image */}
            <div className="w-52 h-52 shrink-0 rounded-full overflow-hidden">
              <Image
                src={MushtaqueImage}
                alt="Dr. Ahmed Mushtaque Raza Chowdhury"
                width={500}
                height={500}
                className="object-cover object-top w-full h-full"
              />
            </div>

            {/* Highlighted quote and meta */}
            <div className="bg-[#FFCE00] max-w-5xl text-black p-4 sm:p-6 rounded-md shadow-md">
              <p className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span>
                  — Dr. Ahmed Mushtaque Raza Chowdhury – Academician, Institution Builder and
                  Implementation Expert
                </span>
                <a
                  href="https://www.linkedin.com/in/mushtaque-chowdhury-71583364/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  <LinkedInLogo size={20} />
                </a>
              </p>

              <p className="text-2xl md:text-[28px] font-base leading-relaxed md:text-justify">
                “I repeatedly asked myself a simple question: Where would my work matter most? Each
                time, the answer was Bangladesh. This country was not a constraint; it was my
                intellectual laboratory, my responsibility, and my source of credibility.”
              </p>

              <p className="mt-4 text-xs text-gray-900">
                Published: 18 March, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Content – follows Jahangir Khan layout */}
      <div className="max-w-screen-md mx-auto px-12 py-8 bg-white">
        {/* Contribution to Development Sector and Global Health */}
        <Heading>Contribution to Development Sector and Global Health</Heading>

        {/* Question 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. How do you describe your five decades of experience and contributions to the
            development sector and global health?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Mushtaque Chowdhury:</span> Looking back across five decades,
            I see my journey as an attempt to institutionalize compassion through evidence. If I close
            my eyes and travel back, I do not first see conferences or publications. I see a riverbank
            in rural Bangladesh. I see bamboo being unloaded to rebuild homes burned during the
            Liberation War. I see young field workers arguing passionately about how to improve a
            program with almost no resources. I see mothers desperately looking for opportunities to
            send their kids to school. That is where my journey truly began.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            I began my professional life in post-1971 Bangladesh, where development was not
            theoretical. Villages had been burned. Infrastructure was shattered. Women lacked rights.
            Poverty was structural and visible. In those early years, development was not a career
            choice but, to me, a moral necessity.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Over time, I received opportunities to spend extended periods abroad. Some were
            professionally attractive and materially comfortable. Yet I repeatedly asked myself a
            simple question: Where would my work matter most? Each time, the answer was Bangladesh.
            This country was not a constraint; it was my intellectual laboratory, my responsibility,
            and my source of credibility. Remaining rooted here allowed me to engage globally with
            authenticity rather than abstraction.
          </p>
          {/* Poem block */}
          <div className="mt-4 mb-4 bg-[#FFFDF5] border-l-4 border-[#FFCE00] px-6 py-4 rounded-md shadow-sm">
            <p className="leading-relaxed text-center italic text-[#001844]">
              “যে তোমায় ছাড়ে ছাড়ুক, আমি তোমায় ছাড়ব না মা!
              <br />
              আমি তোমার চরণ--
              <br />
              মা গো, আমি তোমার চরণ করব শরণ, আর কারো ধার ধারব না মা॥“
            </p>
            <p className="mt-3 leading-relaxed text-center text-sm text-gray-700">
              (To relinquish you isn’t my choice ever, whosoever may do, O’ mother, your feet are my
              only recourse, O’ what else for should I bother). – Rabindranath Tagore; translator
              anonymous.
            </p>
          </div>
          <p className="mt-2 leading-relaxed text-justify">
            When I joined{" "}
            <a
              href="https://www.brac.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[#ef4444] font-semibold text-[#0b2545]"
            >
              BRAC
            </a>{" "}
            in 1977, I was a young statistician with more confidence in regression
            models than in rural conversations. My first assignment was to assess a vegetable
            cultivation program. Sitting on mud floors, listening to farmers describe crop failures and
            credit burdens, I quickly realized that survey tools alone could not capture lived
            realities. Numbers needed narrative.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            One of my earliest and most formative engagements was the{" "}
            <a
              href="https://prezi.com/p/vovtnevx9grc/development-communication-in-action-lessons-from-bracs-oral-therapy-extension-programme-otep/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[#ef4444] font-semibold text-[#0b2545]"
            >
              Oral Therapy Extension Program (OTEP)
            </a>
            , through which{" "}
            <a
              href="https://www.brac.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[#ef4444] font-semibold text-[#0b2545]"
            >
              BRAC
            </a>{" "}
            trained over 12 million mothers across rural Bangladesh in the preparation and use of{" "}
            <a
              href="https://www.sciencedirect.com/topics/medicine-and-dentistry/oral-rehydration-therapy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[#ef4444] font-semibold text-[#0b2545]"
            >
              oral rehydration therapy (ORT)
            </a>
            . I visited villages where mothers
            demonstrated, with confidence, how to mix salt, sugar, and water correctly. It was
            profoundly moving to see scientific knowledge become household practice. Scores of studies
            were conducted to refine delivery and safety. That experience reinforced a lifelong lesson:
            simple solutions, when scaled systematically, can transform a nation’s health trajectory.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            As Founding Director of{" "}
            <a
              href="https://bigd.bracu.ac.bd/publications/brac-research-and-evaluation-division-red-research-reports-social-studies-1995-2005/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[#ef4444] font-semibold text-[#0b2545]"
            >
              BRAC’s Research and Evaluation Division (RED)
            </a>
            , I worked to
            institutionalize rigorous monitoring and mixed-methods research across programs including
            health, education, microfinance, extreme/ultra poverty, gender, and environment. We
            conducted baseline surveys in places like Manikganj, introduced competency assessments in
            education, and built an internal culture where programs were continuously refined based on
            evidence rather than assumption or whims.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            I have always been deeply committed to publishing. Research that remains unpublished rarely
            influences policy. Whether through peer-reviewed journals, books, monographs, or national
            reports, I have believed that evidence must enter public discourse. In 2013, I co-led a
            landmark{" "}
            <a
              href="https://www.thelancet.com/series-do/bangladesh"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[#ef4444] font-semibold text-[#0b2545]"
            >
              series in <span className="italic">The Lancet</span>
            </a>{" "}
            on what came to be known as the “Bangladesh Paradox.” The series demonstrated how Bangladesh achieved remarkable gains
            in child survival, immunization, fertility reduction, and life expectancy despite modest
            income levels and persistent inequalities. It was deeply gratifying to see Bangladesh
            discussed not as a symbol of deprivation, but as a case of resilience and innovation. That
            moment was not about personal recognition; it was about restoring dignity to a nation often
            misrepresented internationally.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Beyond Bangladesh, my work has engaged global debates on universal health coverage (UHC),
            health systems strengthening, and implementation science. As Senior Adviser at the
            Rockefeller Foundation (2009–2012), I worked across South and Southeast Asia, including
            Bangladesh, Thailand and Vietnam, on health reform and financing strategies. Thailand’s
            progress toward UHC demonstrated that middle-income countries can make bold equity
            commitments when political will and technical rigor converge. Yet even during those
            international engagements, Bangladesh remained my anchor. The lessons I carried to global
            platforms were grounded in lived experience at home.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            If I were to summarize these decades, I would say they have been about building
            institutions that endure, promoting accountability through data, and ensuring that
            development enhances dignity rather than dependency.
          </p>
        </div>

        {/* Question 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What does BRAC mean to you after spending four decades with the organization?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Mushtaque Chowdhury:</span>{" "}
            <a
              href="https://www.brac.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[#ef4444] font-semibold text-[#0b2545]"
            >
              BRAC
            </a>{" "}
            shaped my professional
            identity and my ethical compass. I remember monthly meetings in modest bamboo-walled halls
            in Sulla, where field workers debated program challenges late into the evening. There was no
            hierarchy in those discussions, only a shared commitment to solving problems.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Under the leadership of{" "}
            <a
              href="https://www.brac.net/about-us/a-visionary-pragmatist-our-founder/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[#ef4444] font-semibold text-[#0b2545]"
            >
              Sir Fazle Hasan Abed
            </a>
            ,{" "}
            <a
              href="https://www.brac.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[#ef4444] font-semibold text-[#0b2545]"
            >
              BRAC
            </a>{" "}
            combined compassion with discipline and
            ambition with humility. He trusted young professionals with responsibility. That trust
            shaped my confidence and my sense of obligation.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Over four decades, I witnessed{" "}
            <a
              href="https://www.brac.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[#ef4444] font-semibold text-[#0b2545]"
            >
              BRAC
            </a>{" "}
            evolve from a post-war rehabilitation initiative into a
            global organization operating across Asia and Africa. Along the way, BRAC pioneered
            microfinance at scale, community health worker networks, non-formal education, the
            graduation approach for ultra-poor families, and social enterprises such as BRAC Bank and
            bKash, which today serve tens of millions.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            For me, BRAC represents three enduring principles:
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            1) <span className="font-bold">Scale with rigor:</span> “Small is beautiful, but large is
            necessary.”
            <br />
            2) <span className="font-bold">Integrity over expediency:</span> choosing principle over
            convenience.
            <br />
            3) <span className="font-bold">Learning organization ethos:</span> field → evidence →
            correction → scale.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            <a
              href="https://www.brac.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[#ef4444] font-semibold text-[#0b2545]"
            >
              BRAC
            </a>{" "}
            demonstrated that institutions from Bangladesh and other resource-poor countries can
            influence global conversations without abandoning their roots.
          </p>
        </div>

        {/* Question 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. How was your experience establishing the James P. Grant School of Public Health and
            Bangladesh Health Watch?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Mushtaque Chowdhury:</span> Founding{" "}
            <a
              href="https://bracjpgsph.org/mph"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[#ef4444] font-semibold text-[#0b2545]"
            >
              the James P. Grant School of Public Health
            </a>{" "}
            in 2004 was exhilarating and deeply personal. We wanted to create a
            school that would produce reflective practitioners, not detached technocrats. I personally
            accompanied students to rural placements in Savar and urban settlements such as Korail.
            Watching them confront sanitation gaps, maternal health challenges, and urban vulnerabilities
            reaffirmed my belief that public health must be experienced before it is theorized.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            <a
              href="https://bangladeshhealthwatch.org/events/bhw-releases-9th-report-on-public-health-education-in-bangladesh-2023-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[#ef4444] font-semibold text-[#0b2545]"
            >
              Bangladesh Health Watch
            </a>
            , launched in 2006, emerged from a similar conviction: progress must
            be independently monitored. Inspired by Education Watch (which we began in 1998), we
            produced annual evidence-based reports examining equity, governance, human resources for
            health, and UHC. I recall the first public launch, where policymakers, civil society
            leaders, and researchers sat together debating findings. Evidence became a shared language
            rather than a contested weapon.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            These initiatives were never about personal ownership. They were about creating platforms
            where ideas could outlast individuals.
          </p>
        </div>

        {/* Academic and Career */}
        <Heading>Academic and Career</Heading>
        <div className="mt-6 mb-6 flex justify-center">
          <div className="w-full max-w-xl rounded-xl overflow-hidden shadow-md border border-[#2D8CBB]/40 bg-white">
            <Image
              src={AcademicCareerImage}
              alt="Academic and professional journey"
              className="w-full h-80 object-cover object-top"
            />
          </div>
        </div>

        {/* Question 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. How did your PhD experience shape your approach?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Mushtaque Chowdhury:</span> At the London School of Hygiene
            and Tropical Medicine, following earlier studies at the London School of Economics and
            Dhaka University, I learned intellectual discipline. My supervisor{" "}
            <a
              href="https://www.theguardian.com/science/2025/sep/29/patrick-vaughan-obituary"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[#ef4444] font-semibold text-[#0b2545]"
            >
              Professor Patrick Vaughan
            </a>{" "}
            made immense impact on my career and its progression.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            My doctoral research revealed that communities interpret illness categories differently from
            biomedical textbooks. That discovery humbled me. It taught me that cultural understanding
            must accompany statistical precision.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Later, as a MacArthur Fellow at Harvard’s Center for Population and Development Studies, I
            experienced the value of interdisciplinary thinking and reflective solitude. At{" "}
            <a
              href="https://www.publichealth.columbia.edu/profile/mushtaque-chowdhury-phd"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[#ef4444] font-semibold text-[#0b2545]"
            >
              Columbia University
            </a>
            , mentoring students from across continents continues to nourish me. When a
            student from Africa or Latin America draws parallels with Bangladesh’s experience, I am
            reminded that ideas travel when rooted in authenticity.
          </p>
        </div>

        {/* Question 5 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. How do you balance academia, research, and institution building?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Mushtaque Chowdhury:</span> I see them as a continuum. My
            affiliation with{" "}
            <a
              href="https://www.publichealth.columbia.edu/profile/mushtaque-chowdhury-phd"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[#ef4444] font-semibold text-[#0b2545]"
            >
              Columbia University
            </a>{" "}
            allows me to translate field experiences into
            scholarship. My time at the Rockefeller Foundation taught me how global policy change
            requires strategic convening.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Yet throughout, I chose to remain based in Bangladesh. That decision ensured that my global
            engagements were informed by current realities rather than distant memory.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Field lessons informed policy advocacy. Academic debates sharpened program design.
            Institution building created platforms for future leaders.
          </p>
        </div>

        {/* Question 6 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What advice would you give young professionals?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Mushtaque Chowdhury:</span> The development sector today faces
            volatility, geopolitical tension, climate change, and pandemics. Yet opportunities for
            global collaboration have never been greater.
          </p>
          <p className="mt-2 leading-relaxed text-justify">For young Bangladeshis:</p>
          <p className="mt-2 leading-relaxed text-justify">
            • Develop strong analytical skills.
            <br />
            • Remain grounded in community realities.
            <br />
            • Publish rigorously.
            <br />
            • Protect your integrity.
            <br />
            • Cultivate patience.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            You do not need to permanently relocate to make a global contribution. Depth at home often
            creates credibility abroad. Global influence increasingly grows from authentic local
            engagement.
          </p>
        </div>

        {/* Get to Know Mushtaque Chowdhury */}
        <Heading>Get to Know Mushtaque Chowdhury</Heading>

        {/* Question 7 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Who are you beyond development?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Mushtaque Chowdhury:</span> I am a reader and writer at heart.
            I value quiet reflection, conversations with family and friends, and mentoring discussions
            with younger colleagues. Seeing former students grow into leaders gives me immense
            satisfaction.
          </p>
        </div>

        {/* Question 8 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Whom do you admire?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Mushtaque Chowdhury:</span> Sir Fazle Hasan Abed remains a
            towering influence. His moral clarity and trust in people shaped not only institutions but
            individuals like me.
          </p>
        </div>

        {/* Question 9 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What book are you currently writing?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Mushtaque Chowdhury:</span> I am completing a memoir
            reflecting on optimism—how ideas emerging from a small, resource-constrained country can
            influence global development thinking.
          </p>
        </div>

        {/* Question 10 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Do you have a personal motto or mantra you live by?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Mushtaque Chowdhury:</span> Build what will outlast you.
            Remain curious. Remain humble. And stay anchored where your work has meaning.
          </p>
        </div>

        {/* Question 11 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Is there any final thought or message you’d like to leave with our audience?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Mushtaque Chowdhury:</span> I began my career in a fragile,
            newly independent Bangladesh. I have worked in villages and in global forums, in bamboo
            halls and international foundations. The geography changed; the purpose did not.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Remaining in Bangladesh was not an act of restraint. It was a conscious choice. It allowed
            me to speak globally with lived experience and credibility. It kept my work grounded in
            reality.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Optimism, I have learned, is not naive. It is disciplined. It requires evidence, integrity,
            and perseverance. If the institutions I helped build continue to nurture inquiry, strengthen
            accountability, and expand human dignity, then the journey has been worthwhile.
          </p>
        </div>

        {/* Interview conducted by – placed before About section like reference layout */}
        <div className="mt-6 mb-8 flex justify-center">
          <p className="text-[#001844] text-lg md:text-xl leading-relaxed text-center font-semibold bg-[#FFF3A3] px-6 py-2 rounded-md shadow-sm">
            Interview conducted by{" "}
            <Link href="/sizear" className="text-blue-700 font-bold hover:underline">
              Monaemul Islam Sizear
            </Link>
          </p>
        </div>

        {/* About section – redesigned panel */}
        <div className="mb-10 rounded-md bg-[#BFEFF3] px-6 md:px-10 py-8 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#001844] text-center">
            About Dr. Mushtaque Chowdhury
          </h2>
          <div className="mt-2 mb-6 h-1 w-20 bg-[#FFCE00] mx-auto rounded-full" />

          <p className="mt-2 leading-relaxed text-justify">
            Dr. Mushtaque Raza Chowdhury is a Bangladeshi researcher, academician, and institution
            builder with over five decades of experience in development and global health. He served as
            Founding Director of{" "}
            <a
              href="https://bigd.bracu.ac.bd/publications/brac-research-and-evaluation-division-red-research-reports-social-studies-1995-2005/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[#ef4444] font-semibold text-[#0b2545]"
            >
              BRAC’s Research and Evaluation Division (RED)
            </a>
            , later as Executive Director and Vice Chair of{" "}
            <a
              href="https://www.brac.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[#ef4444] font-semibold text-[#0b2545]"
            >
              BRAC
            </a>
            . He founded{" "}
            <a
              href="https://bracjpgsph.org/mph"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[#ef4444] font-semibold text-[#0b2545]"
            >
              the James P. Grant School of Public Health
            </a>{" "}
            and helped establish Education Watch and{" "}
            <a
              href="https://bangladeshhealthwatch.org/events/bhw-releases-9th-report-on-public-health-education-in-bangladesh-2023-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[#ef4444] font-semibold text-[#0b2545]"
            >
              Bangladesh Health Watch
            </a>
            .
          </p>
          <p className="mt-4 leading-relaxed text-justify">
            A Professor of Clinical Population and Family Health at Columbia University and former
            Senior Adviser at the Rockefeller Foundation, he has contributed to global debates on
            universal health coverage, health systems strengthening, and educational assessments. He was
            honored by <span className="italic">The Lancet</span> for his contributions to global health
            and has received numerous awards including the “Medical Excellence” award from the Ronald
            McDonald House Charities and “Innovator of the Year” award from Brigham Young University.
          </p>
          <p className="mt-4 leading-relaxed text-justify">
            His work integrates rigorous evidence, institutional integrity, and deep rootedness in
            Bangladesh, demonstrating how locally grounded leadership can shape global development
            discourse.
          </p>
        </div>
      </div>

      {/* Next interview button – same pattern as Jahangir page */}
      <div className="flex justify-center my-8">
        {(() => {
          const idx = interviewOrder.findIndex((b) => b.slug === currentSlug);
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

export default InsightsFromDrAhmedMushtaqueRazaChowdhury;


