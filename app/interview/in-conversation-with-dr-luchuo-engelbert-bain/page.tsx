import Image from "next/image";
import { LinkedInLogo } from "@/components/Shared/LinkedInLogo";
import { interviewOrder } from "../interviewOrder";

const DrLuchuoBainInterview = () => {
  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <div className="relative w-full  border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex justify-center items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] leading-10"
              style={{ wordSpacing: "0.4rem" }}
            >
              In Conversation with Dr. Luchuo Engelbert Bain: <br />
              <a
                href="https://www.linkedin.com/in/luchuo-bain-a0a17161/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001844] underline font-extrabold bg-[#FFCE00] px-2 rounded-md"
              >
                Insights from A Global Health Leader
              </a>
            </h1>
          </div>
        </div>
      </div>

      <section className="relative w-full bg-white">
        <div className="bg-[#001844] py-10 px-6 sm:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto flex flex-col items-stretch gap-6">
            <div className="bg-[#FFCE00] w-full text-black p-6 md:p-8 rounded-md shadow-md relative">
              {/* Title and LinkedIn */}
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-lg md:text-xl font-extrabold text-gray-900">
                  — Dr. Luchuo Engelbert Bain, Global Health Activist &
                  Researcher
                </h2>
                <a
                  href="https://www.linkedin.com/in/luchuo-bain-a0a17161/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 p-2 rounded-md bg-black text-white inline-flex items-center justify-center shadow-sm"
                  aria-label="Dr. Luchuo Bain on LinkedIn"
                >
                  <LinkedInLogo size={20} variant="white" />
                </a>
              </div>

              {/* Centered quote with constrained width for better line breaks */}
              <blockquote className="max-w-3xl mx-auto text-center text-lg md:text-[20px] leading-relaxed">
                “The next generation of global health leaders must develop three
                non-negotiable skills: first, transdisciplinary systems
                thinking; second, political literacy paired with ethical
                courage; and third, transformative science communication.
                Together, these skills enable leaders to shift power, deliver
                impact, and truly transform global health.”
              </blockquote>

              {/* Published date aligned to the right */}
              <p className="text-sm text-right text-gray-800 mt-6">
                Published: 04 February 2026
              </p>
            </div>

            {/* Optional circular image (kept below on larger screens) */}
            <div className="hidden md:flex md:justify-center md:items-center">
              <a
                href="/images/blog-interview/interview/dr_luchuo.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-48 h-48 rounded-full overflow-hidden block focus:outline-none focus:ring-4 focus:ring-[#FFCE00]"
                tabIndex={0}
              >
                <Image
                  src="/images/blog-interview/interview/dr_luchuo.jpg"
                  alt="Dr. Luchuo Engelbert Bain"
                  width={480}
                  height={480}
                  className="object-cover w-full h-full"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category */}
      <div className="max-w-screen-md mx-auto px-12 py-8 bg-white ">
        <h2 className="text-2xl font-bold text-[#C2185B] mb-6">
          <span className="border-b-4 border-red-600 pb-1 inline-block w-fit">
            Global Health and Research
          </span>
        </h2>

        {/* Q1 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Can you share a brief introduction about yourself to our readers?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Luchuo Bain:</span> I am Dr. Luchuo
            Engelbert Bain, a Cameroonian physician, empirical bioethicist, and
            global health strategist dedicated to reimagining how knowledge,
            power, and partnerships shape health outcomes in Africa and beyond.
            With close to two decades of experience spanning research, policy,
            ethics, and program leadership, my work sits at the critical
            intersection of equity, innovation, meaningful community engagement,
            sexual reproductive health and rights and decolonization of global
            health. Currently, I serve as Head of International Programs at the
            African Population and Health Research Center (APHRC) in Nairobi,
            Kenya, where I lead partnerships across more than 35 African
            countries on initiatives addressing sexual and reproductive health,
            antimicrobial resistance, AI ethics, climate-health nexus, and
            health systems strengthening. I am also the Convener of{" "}
            <a
              href="https://globalhealthotherwise.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#2D8CBB]"
            >
              Global Health Otherwise
            </a>
            , a thought-leadership platform challenging
            conventional wisdom and amplifying African voices in global health
            discourse. My academic credentials include an MD from the University
            of Yaoundé I, Cameroon; MPH from Hebrew University of Jerusalem; MSc
            in Bioethics from KU Leuven; MBA in Strategic Human Resources
            Management from UNIR in Spain; and a dual PhD in Transdisciplinary
            Global Health Solutions from Vrije Universiteit Amsterdam and
            University of Bordeaux. I have authored over 100 peer-reviewed
            publications, and serve on multiple global advisory bodies including
            the WHO-TDR Scientific and Technical Advisory Committee, UNFPA
            Technical Advisory Group on Sexual and Reproductive Agency, the
            International Medical Advisory Panel (IMAP) of the International
            Planned Parenthood Federation (IPPF) and as Co-Chair of the Society
            for African Genomic Surveillance of Antimicrobial Resistance.
          </p>
        </div>

        {/* Q2 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What key areas are you currently focusing on to advance global
            health?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Luchuo Bain:</span> My work currently
            advances global health through three interconnected strategic areas
            that challenge conventional approaches while building practical,
            African-led solutions. I'm leading the knowledge democratization and
            decolonization of global health movement through{" "}
            <a
              href="https://globalhealthotherwise.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#2D8CBB]"
            >
              Global Health Otherwise
            </a>
            , which goes far beyond rhetoric to address what I call the
            "five pillars" that must be continuously questioned: knowledge,
            expertise, methods, power, and agenda. As I often emphasize, we must
            ask "For whom, by whom, with whom?" I am also working on
            antimicrobial resistance (AMR) surveillance and response across
            Africa. As Co-Chair of the Society for African Genomic Surveillance
            of Antimicrobial Resistance (SAGeSA), I've developed case-based
            educational curricula examining AMR at the intersection of clinical
            practice and community behavior, emphasizing One Health approaches
            that integrate human, animal, and environmental health perspectives.
            Sexual and reproductive health and rights (SRHR) remains central to
            my work, working on adolescent pregnancy decision-making,
            contraceptive access barriers, HIV self-testing implementation, and
            sexual and reproductive agency.
          </p>
        </div>

        {/* Q3 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Based on your research and publications, what is one
            evidence-based intervention you believe could be most effectively
            adopted to address a key health challenge in LMICs?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Luchuo Bain:</span> One highly
            effective, evidence-based intervention for LMICs is task shifting
            and task sharing anchored in community health worker (CHW)
            programmes within primary healthcare systems. Evidence shows that
            well-trained, integrated CHWs can safely deliver contraception, HIV
            testing, maternal and child health, infectious disease care, and
            vaccination—rapidly expanding coverage to marginalized populations.
            When supported by policy integration, fair remuneration, robust
            training, supplies, and community trust, task shifting strengthens
            health systems, addresses workforce shortages, and advances equity
            with sustainable impact.
          </p>
        </div>

        {/* Q4 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. If you had unlimited funding for one global health research, what
            would it be and why?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Luchuo Bain:</span> I will go in for an
            operationalization of equity and impact global health agenda. How is
            equity integrated into research questions, monitored and measured? I
            am particularly interested in developing an impact in global health
            scale for use by funders and researchers for more impactful
            research.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-[#C2185B] mb-6">
          <span className="border-b-4 border-red-600 pb-1 inline-block w-fit">
            Academic Journey and Career Insights
          </span>
        </h2>

        {/* Q5 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. You’ve studied at prestigious institutions worldwide. Which
            teachers or mentors had the greatest impact on your personal and
            professional growth?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Luchuo Bain:</span> My journey in global
            health has been profoundly shaped by the mentorship of Venkatraman
            Chandra-Mouli and Eugene Kongnyuy. From Chandra, I learned the
            discipline of translating rigorous evidence into policy while
            centering marginalized voices with humility and integrity. From
            Eugene, I learned the power of contextually grounded research,
            intellectual courage, and staying rooted in African realities while
            engaging globally.
          </p>
        </div>

        {/* Q6 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. With over two decades of experience across global platforms—as an
            employee and founder—what opportunities and challenges have you
            faced in driving real impact in global health?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Luchuo Bain:</span> Across two decades,
            my work across clinical practice, multilateral agencies, research
            funding bodies, and African-led institutions has revealed both
            possibility and constraint in global health. I have seen how
            African-led research can thrive when resourced and trusted. Yet
            persistent challenges—epistemic injustice, inequitable funding,
            extractive partnerships, biased publishing systems, and performative
            decolonization—continue to limit impact. Driving change has required
            technical excellence, political courage, and building alternatives
            alongside reforming existing systems.
          </p>
        </div>

        {/* Q7 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. You founded{" "}
            <a
              href="https://globalhealthotherwise.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#2D8CBB]"
            >
              Global Health Otherwise
            </a>{" "}
            and The Career Café. What is their mission, and what future do you envision for these platforms?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Luchuo Bain:</span> I founded{" "}
            <a
              href="https://globalhealthotherwise.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#2D8CBB]"
            >
              Global Health Otherwise
            </a>{" "}
            to challenge inequities in how global health
            knowledge is produced, valued, and governed—centering African
            leadership, Indigenous knowledge, and genuine power redistribution
            through critical scholarship and action. The Career Café complements
            this by supporting African professionals to build purposeful,
            resilient careers through mentorship, skills development, and
            networks.
          </p>
        </div>

        {/* Q8 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What three essential skills should the next generation of global
            health leaders develop?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Luchuo Bain:</span> The next generation
            of global health leaders must develop three non-negotiable skills.
            First, transdisciplinary systems thinking—the ability to integrate
            biomedical, social, political, economic, and Indigenous knowledge to
            navigate complex realities beyond silos. Second, political literacy
            paired with ethical courage—understanding power, institutions, and
            incentives, and having the integrity to challenge extractive
            practices and inequitable norms. Third, transformative science
            communication—moving beyond information transfer to dialogue that
            centers marginalized voices, builds trust, counters misinformation,
            and translates evidence into action. Together, these skills enable
            leaders to shift power, deliver impact, and truly transform global
            health.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-[#C2185B] mb-6">
          <span className="border-b-4 border-red-600 pb-1 inline-block w-fit">
            Get to Know Dr. Luchuo
          </span>
        </h2>

        {/* Q9 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Who is your public health role model, and what about their work
            inspires you?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Luchuo Bain:</span> My public health
            role model is Paul Farmer. His unwavering belief that health is a
            human right, his accompaniment model of care, and his refusal to
            accept second-rate treatment for poor communities inspire me deeply.
            He combined rigorous scholarship, political courage, and radical
            compassion to show that equity, dignity, and excellence in care are
            possible everywhere.
          </p>
        </div>

        {/* Q10 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What book are you currently reading? What is one key insight you
            have taken from it?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Luchuo Bain:</span> The Holy Bible: As I
            read the Bible, I am reminded that everything is grace. Life is not
            sustained by merit alone, but by mercy. Humility and thankfulness
            are not afterthoughts or virtues to be practiced when
            convenient—they are meant to be the true compasses of life. When
            gratitude leads and humility grounds us, perspective is restored,
            pride is softened, and purpose becomes clearer. In remembering this,
            one learns to walk lightly, serve sincerely, and live fully aware
            that all we have and all we become is, ultimately, grace.
          </p>
        </div>

        {/* Q11 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Do you have a personal motto or mantra you live by?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Luchuo Bain:</span> My mission is to
            positively impact the lives of others—anywhere, anytime—no matter
            the size of the gesture, one day and one life at a time.
          </p>
        </div>
      </div>

      <div className="max-w-screen-md mx-auto px-12 py-2 bg-[#E3F6FC] rounded-lg mt-8 ">
        <h2
          className="text-2xl md:text-3xl font-extrabold text-[#1976A5] text-center mb-2"
          style={{ fontFamily: "inherit" }}
        >
          About Dr. Luchuo Engelbert Bain
        </h2>
        <div className="flex justify-center mb-4">
          <span className="block w-20 h-1 bg-yellow-400 rounded-full"></span>
        </div>
        <div>
          <p className="mt-2 leading-relaxed text-[17px] text-[#222] text-justify">
            Luchuo Engelbert Bain is a physician–public health scholar, global
            health strategist, and thought leader working at the intersection of
            health politics, diplomacy, equity, and systems reform. He holds two
            associate professorship appointments and has contributed extensively
            to global health scholarship, with over 100 peer-reviewed
            publications spanning SRHR, health systems, climate–health, and
            implementation science. In recognition of his scientific leadership,
            he was elected a Fellow of the African Academy of Sciences (FAAS).
            Dr Bain is widely known for advancing politically informed global
            health practice, arguing that health is fundamentally shaped by
            power, institutions, and diplomacy—not technical solutions alone. As
            convener of{" "}
            <a
              href="https://globalhealthotherwise.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#2D8CBB]"
            >
              Global Health Otherwise
            </a>
            , he is actively rethinking global public health curricula,
            emphasizing how to think, how to read, entrepreneurship, and equity
            operationalization. Central to his work is a deep commitment to
            mentorship and intentional menteeship, preparing a fit-for-purpose
            generation of global health leaders for a rapidly changing world.
          </p>
        </div>
      </div>

      <div className="flex justify-center my-8">
        {(() => {
          const currentSlug = "in-conversation-with-dr-luchuo-engelbert-bain";
          const idx = interviewOrder.findIndex((b) => b.slug === currentSlug);
          const next = interviewOrder[(idx + 1) % interviewOrder.length];
          return (
            <a href={`/interview/${next.slug}`}>
              <button className="bg-[#FFCE00] text-black font-bold px-8 py-3 rounded hover:bg-yellow-400 transition text-lg shadow-md">
                Next Interview
              </button>
            </a>
          );
        })()}
      </div>
    </div>
  );
};

export default DrLuchuoBainInterview;
