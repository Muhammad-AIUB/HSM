import Image from "next/image";
import Link from "next/link";
import { interviewOrder } from "../interviewOrder";

import { LinkedInLogo } from "@/components/Shared/LinkedInLogo";

import Heading from "../a-leading-voice-in-global-health-systems/components/Heading";

const MalabikaSarkerInterview = () => {
  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <div className="relative w-full  border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] leading-10"
              style={{ wordSpacing: "0.4rem" }}
            >
              Exploring Impact in Global Health: Conversation with{" "}
              <a
                href="https://www.linkedin.com/in/malabika-sarker-8a83b514/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001844] underline font-extrabold bg-[#FFCE00] px-2 rounded-md"
              >
                Dr. Malabika Sarker
              </a>{" "}
              on Implementation Research and Career
            </h1>
          </div>
        </div>
      </div>

      <section className="relative w-full bg-white">
        <div className="bg-[#001844] py-10 px-12 sm:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
            <div className="w-56 h-56 sm:w-60 sm:h-60 shrink-0 rounded-full overflow-hidden">
              <Image
                src="/images/blog-interview/interview/IMG_0823.jpeg"
                alt="Dr. Malabika Sarker"
                width={500}
                height={500}
                className="object-cover object-center w-full h-full"
              />
            </div>

            <div className="bg-[#FFCE00] max-w-5xl text-black p-4 sm:p-6 rounded-md shadow-md">
              <p className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-4">
                — Dr. Malabika Sarker, Academician, Researcher and Mentor
                <a
                  href="https://www.linkedin.com/in/malabika-sarker-8a83b514/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <LinkedInLogo size={24} />
                </a>
              </p>

              <p className=" text-2xl md:text-[28px]  font-base leading-relaxed md:text-justify">
                &quot;I enjoy mentoring for several reasons. I believe I can make
                a meaningful contribution to public health by supporting young
                public health professionals. It brings hope, joy, and purpose,
                and preserves my optimism in today&apos;s world. I see no
                opportunity cost, only gain.&quot;
              </p>
              <p className="mt-3 text-sm text-gray-800 font-medium">
                Published: 06 March, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-screen-md mx-auto px-12 py-8 bg-white ">
        <Heading>Global Health and Implementation Research</Heading>

        {/* Question 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Your journey from a clinical degree in Bangladesh to a global
            health academic is truly inspiring. Could you share the key momentum
            and inspirations that guided this path?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Malabika Sarker:</span> There have been
            several pivotal moments in my life, and I have been deeply inspired
            by colleagues, friends, and mentors. At every stage of my
            professional journey, I have been fortunate to be supported and
            guided by remarkable public health leaders. I would not be where I am
            today without their presence in my life.
          </p>
          <ol className="mt-3 leading-relaxed text-justify list-decimal list-inside space-y-2">
            <li>
              Joined WHDP (Women Health &amp; Development Program) at{' '}
              <a href="https://www.brac.net/" target="_blank" rel="noopener noreferrer" className="underline text-[#2D8CBB]">
                BRAC
              </a>{' '}in
              Dinajpur in 1991 because of my longtime friend,{' '}
              <a href="https://www.bsms.ac.uk/about/contact-us/staff/professor-shahaduz-zaman.aspx" target="_blank" rel="noopener noreferrer" className="underline text-[#2D8CBB]">
                Dr. Shahaduzzaman
              </a>, who was working as a community-based physician
              there, which led me to abandon my plan to pursue a clinical career
              in obstetrics and gynecology.
            </li>
            <li>
              Meeting the late{' '}
              <a href="https://hsph.harvard.edu/news/richard-cash-remembered-as-public-health-pioneer-inspirational-educator/" target="_blank" rel="noopener noreferrer" className="underline text-[#2D8CBB]">
                Professor Richard Cash
              </a>, pioneer of oral
              rehydration therapy in 1993 was another defining moment; he became
              my lifelong mentor.
            </li>
            <li>
              My decision to leave Heidelberg University to join the{' '}
              <a href="https://www.bracu.ac.bd/academics/schools-and-departments/james-p-grant-school-public-health" target="_blank" rel="noopener noreferrer" className="underline text-[#2D8CBB]">
                BRAC James P. Grant School of Public Health
              </a>{' '}in 2011 was facilitated by{' '}
              <a href="https://www.bracu.ac.bd/news/farewell-sph-dean-timothy-g-evans" target="_blank" rel="noopener noreferrer" className="underline text-[#2D8CBB]">
                Dr. Tim Evans
              </a> (then Dean of BRAC JPGSPH) and was also motivated by the
              need to look after my parents.
            </li>
            <li>
              Transitioned to implementation research in 2015 as a result of a
              discussion with{' '}
              <a href="https://www.linkedin.com/in/carlosacostaber/" target="_blank" rel="noopener noreferrer" className="underline text-[#2D8CBB]">
                Carlos Acosta Bermudez
              </a>, then Chief of Social
              Policy, Evaluation, Analytics, and Research at UNICEF Bangladesh.
              With generous support from UNICEF, I established the Center of
              Excellence for Implementation Research at BRAC JPGSPH.
            </li>
            <li>
              Received an email from{' '}
              <a href="https://vivo.brown.edu/display/afoster" target="_blank" rel="noopener noreferrer" className="underline text-[#2D8CBB]">
                Prof. Andrew Foster
              </a>, Economics Department,
              Brown University, USA, who was the chair of the search committee
              for Brown SPH, requesting that I share my CV.
            </li>
          </ol>
        </div>

        {/* Question 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. For our audience, how would you define implementation research in
            practical terms? What specifically drew you to this field and why do
            you think it is such a powerful tool for improving health outcomes?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Malabika Sarker:</span> Implementation
            research examines how preventive, promotive, and curative health
            services are delivered in real-world settings, with a focus on
            context and implementation strategies. I spent many years as a
            community-based implementer at BRAC. Although I later became an
            academic, I felt I was missing my activist side and the chance to
            create direct impact. Too often, research-generated knowledge is not
            translated into action. Implementation research bridges my activist
            passion and academic rigor.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Poor implementation leads to intervention failure and wastes
            resources. Implementation strategies must be tailored to the
            population&apos;s characteristics, geographic setting, health system
            capacity, and resource availability. Applying a uniform delivery
            strategy without contextual adaptation often results in ineffective
            interventions and limited health improvements.
          </p>
        </div>

        {/* Centered secondary photo */}
        <div className="w-full flex flex-col items-center my-8">
          <Image
            src="/images/blog-interview/interview/1741960412448.jpg"
            alt="Dr. Malabika Sarker"
            width={480}
            height={320}
            className="object-cover rounded-md shadow-md"
          />
          <p className="mt-2 text-sm text-gray-600">Dr. Malabika Sarker</p>
        </div>

        {/* Question 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Could you tell us about the focus of your current implementation
            research at Brown University?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Malabika Sarker:</span> I am currently
            engaged in a five-year implementation research project in Kenya that
            delivers pre-exposure prophylaxis (PrEP) through emergency
            departments to reduce the risk of HIV-1 infection. I also submitted
            an NIH grant proposal on non-communicable disease comorbidity, in
            partnership with Augusta University (Georgia, USA), which is under
            review. Additionally, I am preparing a multi-country NIH
            implementation research proposal on hypertension in collaboration
            with Yale University for submission in May 2026. In both proposals,
            Bangladesh is a partner.
          </p>
        </div>

        {/* Question 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. If you had unlimited funding for one global health project, what
            would you pursue and why?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Malabika Sarker:</span> I would invest
            in strengthening primary health care and developing multi-skilled
            community health workers, with structured implementation support
            systems and functional feedback loops. Primary health care is the
            backbone of health systems. Strong linkages between community health
            workers and primary care can enhance preventive and promotive
            services, improve population health, and reduce the global
            health-system burden, especially amid rising non-communicable
            diseases, mental health challenges, and emerging infectious diseases.
          </p>
        </div>

        <Heading>Academic Insights and Mentoring</Heading>

        {/* Question 5 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Having earned your MPH from Harvard and your PhD from Heidelberg
            University, two world-renowned institutions, what is one key
            philosophical insight that has shaped your approach to global health
            most?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Malabika Sarker:</span> For me, it was
            intellectual exposure to diverse public health scholars and the
            opportunity to attend different courses. I learned that multiple
            perspectives are essential because reality is complex and that what
            counts as knowledge always depends on method, context, and
            perspective. This understanding has fundamentally shaped how I
            approach global health and implementation research.
          </p>
        </div>

        {/* Question 6 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Looking back at your career across program implementation and
            academia, what has been the most fulfilling aspect of your journey?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Malabika Sarker:</span> I feel deeply
            grateful for the privilege of working with outstanding public health
            professionals, from grassroots practitioners to global leaders, and
            for exposure to diverse cultures, contexts, beliefs, and practices
            through personal/professional interaction and working in different
            countries. These experiences enriched me by fostering tolerance,
            compassion, empathy, and humility. The world is profoundly diverse,
            yet we often fail to recognize and value it, which is crucial for
            effective policy formulation and better health care delivery.
          </p>
        </div>

        {/* Question 7 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. You are widely recognized for mentoring emerging public health
            professionals. What motivates you to invest so much effort to guiding
            the next generation of leaders? Is there any opportunity cost of this
            spare effort?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Malabika Sarker:</span> Yes, I enjoy
            mentoring for several reasons. I believe I can make a meaningful
            contribution to public health by supporting young public health
            professionals. Mentoring also allows me to continue learning through
            ongoing interactions that expose me to intellectual, socio-cultural,
            and political perspectives, keeping my multi-perspectival mindset
            alive. It brings hope, joy, and purpose, and preserves my optimism in
            today&apos;s world. I see no opportunity cost, only gain. I want
            mentoring to be my legacy.
          </p>
        </div>

        {/* Question 8 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. In your view, what three essential skills should future global
            health leaders focus on developing?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Malabika Sarker:</span> Emotional
            agility, strong analytical ability grounded in data, and an
            understanding of diversity, interdependence, and global complexity.
          </p>
        </div>

        <Heading>Get to Know Malabika Sarker</Heading>

        {/* Question 9 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Who is your public health role model, and what about their work
            inspires you?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Malabika Sarker:</span> Late Professor
            Richard Cash for his unconventional thinking, impactful work,
            excellent teaching, humility, and kindness. I am also continuously
            inspired by my students, mentees, colleagues, and peers.
          </p>
        </div>

        {/* Question 10 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What book are you currently reading and is there a particular
            insight from it that has stayed with you?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Malabika Sarker:</span> I am reading
            Steve Jobs&apos;s autobiography by Walter Isaacson. Actually,
            it&apos;s from Apple&apos;s &quot;Think Different&quot; commercial
            (1997), which is quoted at the beginning of the book, &quot;the
            people who are crazy enough to think they can change the world are
            the ones who do.&quot; Jobs&apos;s complex character and the way he
            created &quot;Apple&quot; reflect the quote, and it&apos;s true for
            all game changers in this world. His ability to translate vision into
            reality resonates with implementation science because the challenge
            is not only to invent ideas but to make them work in practice.
          </p>
        </div>

        {/* Question 11 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Do you have a personal motto or mantra you live by?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Malabika Sarker:</span> My mantra is
            continuous growth, both personally and professionally. I am ever
            grateful for what I have and believe that &quot;No act of kindness,
            no matter how small, is ever wasted.&quot; The world would be a
            better place if we all practiced kindness.
          </p>
        </div>

        {/* Question 12 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Given your rewarding career and cozy life in the United States, do
            you see yourself returning to Bangladesh at some point?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Malabika Sarker:</span> Yes. I am
            actively contributing to my country through teaching, research, and
            advisory roles at BRAC JPGSPH and <a href="https://www.sajida.org/" target="_blank" rel="noopener noreferrer" className="underline text-[#2D8CBB]">Sajida Foundation</a>, and I am always
            available to mentor and support anyone interested in Public Health in
            any way I can.
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

      {/* Bio Section */}
      <div className="max-w-screen-lg mx-auto pt-16 py-12 relative bg-[#6BCBD5]/50 px-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center">
          About Dr. Malabika Sarker
          <span className="block w-24 h-1 bg-[#FFCE00] mx-auto mt-2 rounded-full"></span>
        </h2>

        <div className="overflow-hidden relative max-w-screen-md mx-auto">
          <div className="py-6 font-medium">
            <p className="text-gray-700 mt-2 leading-relaxed text-justify">
              Dr. Malabika Sarker, an implementation scientist, is the Ashwin
              Pannalal Kothari Professor of the Practice in the Behavioral &amp;
              Social Science Department and Associate Dean for Global Engagement
              at Brown School of Public Health, Brown University, USA. Professor
              Sarker is a mixed-methods expert with 158+ peer-reviewed articles
              and 7 book chapters. She has mentored 100+ young public health
              professionals. Prof. Sarker was awarded the &quot;Heroines of
              Health&quot; global award in 2018. She has served on many global
              committees. Currently, she is a director on the board of the
              Consortium of Universities in Global Health, an international
              advisory board member of The Lancet Global Health, a member of the
              Evaluation Advisory Committee of Gavi, and an editorial board
              member of the Implementation Science Communications Journal.
              Before joining Brown, she served as Associate Dean, founding
              director of the Center of Excellence in Science of Implementation
              &amp; Scale-Up (SISU), director of Research, and founding chair of
              the Institutional Review Board at the BRAC JPG School of Public
              Health in Bangladesh.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-8">
        {(() => {
          const currentSlug =
            "exploring-impact-in-global-health-conversation-with-dr-malabika-sarker";
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

export default MalabikaSarkerInterview;
