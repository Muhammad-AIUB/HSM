import Image from "next/image";
import Link from "next/link";

import { interviewOrder } from "../interviewOrder";
import { LinkedInLogo } from "@/components/Shared/LinkedInLogo";

const InConversationWithDrShashikaBandara = () => {
  const currentSlug = "in-conversation-with-dr-shashika-bandara";

  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <div className="relative w-full border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] leading-10"
              style={{ wordSpacing: "0.4rem" }}
            >
              In Conversation with Dr.{" "}
              <a
                href="https://www.linkedin.com/in/shashika-bandara/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFCE00] px-2 rounded-md underline font-extrabold"
              >
                Shashika Bandara
              </a>
              : Advancing Research for Global Health Impact
            </h1>
          </div>
        </div>
      </div>

      <section className="relative w-full bg-white">
        <div className="bg-[#001844] py-10 px-12 sm:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
            <div className="w-52 h-52 shrink-0 rounded-full overflow-hidden">
              <Image
                src="/images/blog-interview/interview/Shashika_Profile.jpg"
                alt="Dr. Shashika Bandara"
                width={500}
                height={500}
                className="object-cover object-top w-full h-full"
              />
            </div>

            <div className="bg-[#FFCE00] max-w-5xl text-black p-4 sm:p-6 rounded-md shadow-md">
              <p className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span>
                  - Dr. Shashika Bandara, Academician, Researcher and Global
                  Health Policy Expert
                </span>
                <a
                  href="https://www.linkedin.com/in/shashika-bandara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  <LinkedInLogo size={20} />
                </a>
              </p>

              <p className="text-2xl md:text-[28px] font-base leading-relaxed md:text-justify">
                &ldquo;In all of my research and advocacy, I center equity and
                learnings from the evolving field of decolonizing global health.
                Rather than equity being a separate subject or an afterthought, I
                think we should center it across all our work.&rdquo;
              </p>

              <p className="mt-4 text-xs text-gray-900">Published: 24 July 2026</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-screen-md mx-auto px-12 py-8 bg-white">
        <h2 className="text-2xl md:text-[24px] font-bold text-[#C2185B] mb-6">
          <span className="border-b-4 border-red-600 pb-1 inline-block w-fit">
            Global Health and Research
          </span>
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Can you share a brief introduction about yourself to our readers?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Shashika Bandara:</span> I am a Senior
            Lecturer focusing on global health governance, policy and equity. I
            am passionate about equity, human rights and solution building in
            global health. I am currently at Monash University Malaysia. My
            global health training includes a master&rsquo;s of global health
            Duke University, USA and doctoral studies focused on global health
            policy McGill University in Canada. I also have worked on human
            rights in South Asia with Law and Society Trust in partnership with
            Forum Asia and in humanitarian settings with CARE International. My
            work examines governance, policy, human rights and equity in global
            health looking at policy efforts at global and national levels. I
            also explore ways to strengthen global health education and future
            leaderships of global health. I grew up in Kandy, Sri Lanka and I
            enjoy the sea.
          </p>
          <p className="mt-4 leading-relaxed text-justify">
            These articles and podcast shed light on my positionality and the
            way I view global health:
          </p>
          <ul className="mt-4 space-y-3 list-disc list-outside pl-8 text-justify">
            <li>
              <a
                href="https://speakingofmedicine.plos.org/2023/05/18/the-weight-of-my-passport-and-my-place-in-global-health/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2D8CBB] font-medium underline hover:text-[#1B6E99]"
              >
                The weight of my passport and my place in global health
              </a>
            </li>
            <li>
              <a
                href="https://mjgh.library.mcgill.ca/article/view/1679/1977"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2D8CBB] font-medium underline hover:text-[#1B6E99]"
              >
                As Fractures in Global Health Deepen, Combating &lsquo;Othering&rsquo;
                Is a Must
              </a>
            </li>
            <li>
              <a
                href="https://liverpool-school-of-tropical-medicine.captivate.fm/episode/77"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2D8CBB] font-medium underline hover:text-[#1B6E99]"
              >
                Shifting Power in Global Health: Equity, Leadership and Change
                (podcast)
              </a>{" "}
              &mdash;{" "}
              <a
                href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(24)02323-7/abstract"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2D8CBB] font-medium underline hover:text-[#1B6E99]"
              >
                Connected article
              </a>
            </li>
            <li>
              <a
                href="https://journals.plos.org/globalpublichealth/article?id=10.1371/journal.pgph.0001656"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2D8CBB] font-medium underline hover:text-[#1B6E99]"
              >
                How to prevent equity efforts from losing steam in global health
                academia
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What key areas are you currently focusing on to advance global
            health research and policy?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Shashika Bandara:</span> Currently, one
            of my research projects explore consensus building in global health
            and how we can build solutions collectively to address the
            polycrisis. I am also examining implementation of global health
            treaties and what factors impact them. I am also keen to understand
            how we can strengthen teaching and learning in global health
            education. I write and advocate for visa and passport equity, as it
            is interconnected to all the fields above. In all of my research and
            advocacy, I center equity and learnings from the evolving field of
            decolonizing global health. Rather than equity being a separate
            subject or an afterthought, I think we should center it across all
            our work. Same applies to learnings we have gained from decolonizing
            global health.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. If you had unlimited funding, what one global health advocacy
            initiative would you pursue, and why?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Shashika Bandara:</span> I think I would
            pursue strengthening solution building in global health policy
            arenas. By understanding what factors matter to solution building
            currently, lessons from the past, and learning how to best build
            bridges among stakeholders to design best possible pathways for
            solutions based on context. Interconnected to this I also want to
            find avenues to platform and have representation of experts from
            high, middle and low income countries by minimizing structural
            access barriers including visa and passport inequities.
          </p>
        </div>

        <h2 className="text-2xl md:text-[24px] font-bold text-[#C2185B] mb-6">
          <span className="border-b-4 border-red-600 pb-1 inline-block w-fit">
            Academic Journey and Career Insights
          </span>
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. You&rsquo;ve studied at prestigious institutions like Duke
            University and McGill University. Which experience stands out as your
            most memorable and still, you cherish it?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Shashika Bandara:</span> Both those
            experiences matter to me deeply not because they are recognizable
            institutions but because of the mentors I was fortunate to learn
            from, work with, and collaborate. At Duke, I got a comprehensive
            exposure to the policy world and at McGill I learnt more about
            equity, decolonizing and the importance of power and also the
            importance of making space for others.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Given my love for Montreal as a city and the community, I would say
            McGill stands out slightly ahead of Duke.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Can you share your experience and impact as a Co-Director and
            Faculty member at the McGill Summer Institutes in Global Health?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Shashika Bandara:</span> The reimagining
            global health course which I co-direct with Prof. Madhu Pai has been
            a transformative space both for us as faculty and for participants
            (based on their feedback). This year (2026) especially, we received
            an overwhelming number of notes of appreciation, heartfelt accounts
            of transformation experienced and thanks &ndash; both publicly and
            personally. It is always rewarding to receive good feedback from
            students, but I think this course stands out to me as a genuine safe
            (or brave) space and a space where we have minimized the distance
            between teacher-student. So, everyone is a co-learner, engaging with
            each other. It matters deeply to me that we minimize these
            hierarchies, in healthy ways, especially in learning environments and
            I am glad to be making this effort with Madhu.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What are the three most essential skills the next generation of
            global health researchers should develop?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Shashika Bandara:</span> Strategic
            communication is essential which will help you navigate both public
            and interpersonal communication. This skill needs to evolve with
            time, setting, and platforms.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Critical thinking is another skill that we need. You can be
            technically sound in epidemiology, clinical practice, policy analysis
            or any other sector &ndash; without critical thinking to assess
            things based on context, impact, positionality, I think we do a
            disservice to ourselves and others.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Emotional intelligence which allows you to read the room and adapt is
            the third skill I would highlight. Lots of us in academia or practice
            are often trained to look at details and to center ourselves. My hope
            is that with emotional intelligence we can be better colleagues to
            our co-workers, partners to our collaborators, mentors to our
            trainees, and professors/teachers to our students. This also requires
            working on ourselves via introspection, and recognizing our own
            privileges, understanding mental health, seeking support when needed
            and minimizing ego.
          </p>
        </div>

        <h2 className="text-2xl md:text-[24px] font-bold text-[#C2185B] mb-6">
          <span className="border-b-4 border-red-600 pb-1 inline-block w-fit">
            Get to Know Dr. Shashika Bandara
          </span>
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Who is your global health role model, and what about their work
            inspires you?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Shashika Bandara:</span> I try not to
            have one role model in any area of life &ndash; because people are
            complex; I usually take the good lessons from all &ndash; and leave
            the rest. However, I do have a lot of respect for Prof. Madhu Pai not
            just because we have collaborated on equity related advocacy and
            taught together; but because he genuinely makes an effort to center
            equity in his work, and gives up power to platform others, and center
            kindness in his approach to life in general. These are values I
            strongly align with and it is always good to learn from those who
            came before you, how they navigate an inherently inequitable (at
            times oppressive) world without losing the values you hold.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What book are you currently reading? What is one key insight you
            have taken from it?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Shashika Bandara:</span> I am currently
            reading &ldquo;The fire next time&rdquo; by James Baldwin &ndash; a
            key insight or rather an inspiration is to be uncompromising and
            unapologetic in my efforts to uphold equity, human rights and dignity
            of all.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Do you have a personal motto or mantra you live by?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Shashika Bandara:</span> Impermanence
            (also known as Anicca in Pali language or Anitya in Sanskrit &ndash;
            because it is difficult to capture these concepts in English
            sometimes) is the only permanent thing.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            I think once we see the world in this lens it helps (at least to an
            extent), to minimize shock, despair, anger, arrogance and other
            emotions that we feel in response to a changing world around you.
            Might be especially relevant to navigating the world we are living in
            today.
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
            About Dr. Shashika Bandara
          </h2>
          <div className="mt-2 mb-6 h-1 w-20 bg-[#FFCE00] mx-auto rounded-full" />
          <p className="mt-2 leading-relaxed text-justify">
            Shashika Bandara is a Senior Lecturer at the Department of Global
            Population Health focused on social and structural determinants of
            health. His research and advocacy focus largely on global health
            policy and governance.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Shashika completed his post-doctoral fellowship at the Department of
            Global Public Health in the School of Population and Global Health at
            McGill University where he conducted research and was a lead
            instructor in global health courses. Shashika received his Ph.D. from
            McGill University and holds a masters in global health from Duke
            University. Shashika is formerly a policy associate at the Center for
            Policy Impact in Global Health at the Duke Global Health Institute.
            Shashika has worked in human rights policy advocacy in Sri Lanka and
            South Asia, with Law and Society Trust and in collaboration with
            Forum Asia. He also has experience working in humanitarian settings
            with CARE International. His previous training includes molecular
            biology and has conducted cancer immunology research at Johns Hopkins
            University.
          </p>
          <p className="mt-4 leading-relaxed text-justify">
            <a
              href="https://research.monash.edu/en/persons/shashika-lakmal-bandara/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2D8CBB] font-semibold underline hover:text-[#1B6E99]"
            >
              Monash Profile
            </a>
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

export default InConversationWithDrShashikaBandara;
