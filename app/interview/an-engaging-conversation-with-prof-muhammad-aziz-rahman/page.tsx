import Image from "next/image";
import Link from "next/link";

import { interviewOrder } from "../interviewOrder";
import { LinkedInLogo } from "@/components/Shared/LinkedInLogo";

const AnEngagingConversationWithProfMuhammadAzizRahman = () => {
  const currentSlug = "an-engaging-conversation-with-prof-muhammad-aziz-rahman";

  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <div className="relative w-full border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] leading-10"
              style={{ wordSpacing: "0.4rem" }}
            >
              An Engaging Conversation with Professor Dr{" "}
              <a
                href="https://www.linkedin.com/in/drazizrahman/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFCE00] px-2 rounded-md underline font-extrabold"
              >
                Muhammad Aziz Rahman
              </a>{" "}
              on Public Health Careers and Contributions
            </h1>
          </div>
        </div>
      </div>

      <section className="relative w-full bg-white">
        <div className="bg-[#001844] py-10 px-12 sm:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
            <div className="w-52 h-52 shrink-0 rounded-full overflow-hidden">
              <Image
                src="/images/blog-interview/interview/D78_1853 (2).JPG"
                alt="Dr Muhammad Aziz Rahman"
                width={500}
                height={500}
                className="object-cover object-top w-full h-full"
              />
            </div>

            <div className="bg-[#FFCE00] max-w-5xl text-black p-4 sm:p-6 rounded-md shadow-md">
              <p className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span>
                  - Dr Muhammad Aziz Rahman, Academic and Public Health Researcher
                </span>
                <a
                  href="https://www.linkedin.com/in/drazizrahman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  <LinkedInLogo size={20} />
                </a>
              </p>

              <p className="text-2xl md:text-[28px] font-base leading-relaxed md:text-justify">
                &ldquo;The most enduring lesson has been the importance of thinking globally
                while acting locally. Effective solutions must be grounded in local realities
                while informed by the best available global evidence.&rdquo;
              </p>

              <p className="mt-4 text-xs text-gray-900">Published: 26 June 2026</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-screen-md mx-auto px-12 py-8 bg-white">
        <h2 className="text-2xl md:text-[24px] font-bold text-[#C2185B] mb-6">
          <span className="border-b-4 border-red-600 pb-1 inline-block w-fit">
            Global Health Contribution
          </span>
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What drew you to public health?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Muhammad Aziz:</span> My journey into public health was
            shaped by a strong commitment to creating meaningful impact at the population level,
            rather than focusing only on individual-level change. Growing up in Bangladesh, I was
            exposed to the realities faced by communities affected by preventable diseases, health
            inequities, environmental risks, and limited access to essential health services. These
            experiences helped me understand that health is influenced not only by clinical care,
            but also by broader social, economic, environmental, and policy determinants. This
            perspective inspired me to pursue a career in public health, not to continue as a
            medical doctor. Public health provides a powerful platform to generate evidence,
            influence systems, shape policy decisions, and contribute to sustainable improvements
            in health and wellbeing for large populations. For me, it has always been a field where
            research and action come together to improve lives and advance health equity.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What key areas are you currently focusing on to advance global health?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Muhammad Aziz:</span> My current work is focused on
            advancing evidence that can inform policy, strengthen health systems, and improve
            population health outcomes. A major focus of my research is on non-communicable diseases
            (NCDs), tobacco control policy, migrant health and wellbeing in Australia, and the
            broader determinants of health, including discrimination and social inequities at the
            global level. I am also actively engaged in global burden of disease research, which
            provides critical insights into changing patterns of morbidity, mortality, and risk
            factors across countries and populations. In addition, I continue to contribute to
            policy translation and health systems capacity building, particularly in low- and
            middle-income countries where the need for sustainable, context-specific public health
            solutions is especially important. Across these areas, my priority is to ensure that
            high-quality research does not remain confined to academic publications but is
            translated into practical policy action, stronger public health practice, and
            measurable improvements in the lives of communities.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What has been your greatest professional achievement so far, and what is the most
            significant challenge you have encountered in your career?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Muhammad Aziz:</span> One of my most meaningful
            professional achievements has been the opportunity to establish and sustain global
            research collaborations that bring together academics, practitioners, policymakers, and
            institutions across different countries. These partnerships have enabled me to share
            knowledge and expertise, contribute to evidence generation, and support research that is
            relevant to diverse population health contexts. Equally rewarding has been my role in
            mentoring early-career researchers, supervising PhD students through to completion, and
            contributing to academic capacity building at both national and international levels.
            For me, these achievements are significant not only because of the outputs they have
            produced, but also because of the long-term impact they create through people,
            partnerships, and strengthened public health systems.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            One of the most significant challenges in my career has been bridging the persistent
            gap between evidence generation and policy implementation. Public health research can
            produce strong and compelling data, but translating that evidence into timely,
            practical, and sustainable policy action often requires navigating complex political
            priorities, resource constraints, institutional processes, and competing stakeholder
            interests. This experience has reinforced my understanding that meaningful impact
            depends not only on scientific rigor, but also on effective communication, strategic
            relationship-building, policy advocacy, and sustained engagement with decision-makers.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What is your role within the Public Health Association of Australia (PHAA) and how
            would you describe its impact on the public health community?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Muhammad Aziz:</span> I have been a longstanding and active
            member of the Public Health Association of Australia (PHAA), contributing through
            several leadership roles over many years. These include serving as a Vice President for
            the past two years, a Board Member for the past five years, and Convenor of the Health
            Promotion Special Interest Group for the past seven years. In recognition of my
            sustained contribution to the Association and the broader public health community, I was
            honored last year as a Fellow of the Public Health Association of Australia (FPHAA).
            Through PHAA, I contribute to national public health advocacy, research translation,
            policy dialogue, and professional capacity building. The Association plays a vital role
            in shaping public health priorities in Australia by bringing together researchers,
            practitioners, policymakers, and advocates to promote evidence-informed action. Its
            influence is particularly important in areas such as prevention, tobacco control, health
            equity, and health promotion, ensuring that these issues remain visible, evidence-based,
            and central to national policy discussions.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What is next for you?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Muhammad Aziz:</span> Looking ahead, my priority is to
            further strengthen global research partnerships that generate high-quality evidence and
            translate that evidence into meaningful improvements in population health and wellbeing.
            I am particularly interested in advancing work that connects rigorous research with
            policy, practice, and community impact, especially in areas such as non-communicable
            disease prevention, tobacco control, health equity, migrant health, and global burden of
            disease research. Equally important to me is building the capability of the next
            generation of public health researchers, practitioners, and leaders through mentoring,
            supervision, and international collaboration. Ultimately, I see the next phase of my
            career as an opportunity to expand the reach and relevance of public health research,
            support evidence-informed decision-making, and contribute to sustainable improvements in
            health outcomes locally, nationally, and globally.
          </p>
        </div>

        <h2 className="text-2xl md:text-[24px] font-bold text-[#C2185B] mb-6">
          <span className="border-b-4 border-red-600 pb-1 inline-block w-fit">
            Academic Journey &amp; Career Insights
          </span>
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. You&rsquo;ve studied at renowned institutions across the world like Johns Hopkins
            University. What is the single biggest lesson that has stayed with you?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Muhammad Aziz:</span> The most enduring lesson has been the
            importance of thinking globally while acting locally. Studying and engaging with
            renowned institutions exposed me to diverse intellectual traditions, policy
            environments, and public health systems, which reinforced that effective solutions must
            be grounded in local realities while informed by the best available global evidence. It
            also deepened my understanding that complex public health challenges cannot be addressed
            through a single discipline or perspective. They require collaboration across
            epidemiology, health policy, behavioral science, environmental health, economics, and
            community engagement. This experience has shaped the way I approach my work: with a
            commitment to evidence-informed decision-making, contextual sensitivity,
            interdisciplinary collaboration, and practical impact for the communities we serve.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Having significant working experiences in both Bangladesh and Australia, how do you
            compare the professional experiences and career opportunities in these two countries?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Muhammad Aziz:</span> Both Bangladesh and Australia have
            offered me valuable but distinct professional experiences. Bangladesh provided
            high-impact, community-oriented exposure, where resource constraints often required
            innovation, resilience, and adaptability. Australia, by contrast, has provided a more
            structured research environment, supported by strong funding mechanisms, robust
            governance systems, and clearer pathways for policy engagement. Together, these
            experiences have strengthened my appreciation of contextual intelligence&mdash;the
            ability to translate global evidence into locally relevant solutions. From a career
            development perspective, I have also observed that many early-career professionals in
            Bangladesh are not always fully aware of the breadth of academic and public health
            opportunities available in Australia. This makes appropriate guidance, mentoring, and
            professional networking particularly important in helping them navigate global career
            pathways.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What advice would you give to someone in Bangladesh who aspires to work in global
            health and academia at the global level?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Muhammad Aziz:</span> My advice would be to focus first on
            developing strong foundational capabilities in research, critical thinking,
            communication, and ethical practice. Formal qualifications are important, but they
            should not be viewed simply as certificates or titles; their real value lies in how
            effectively they strengthen one&rsquo;s ability to ask meaningful questions, generate
            evidence, and contribute to better health outcomes. For those aspiring to work in
            global health and academia, it is essential to remain open to interdisciplinary
            learning, actively seek international collaboration, and build professional networks
            beyond one&rsquo;s immediate environment. Mentorship is also critical&mdash;both in
            receiving guidance from experienced colleagues and, over time, in supporting others.
            Most importantly, I would encourage young professionals to stay connected to real-world
            public health challenges. Global health is not defined only by working abroad; it is
            defined by the ability to make a meaningful and sustainable impact, whether at the
            local, national, or international level.
          </p>
        </div>

        <h2 className="text-2xl md:text-[24px] font-bold text-[#C2185B] mb-6">
          <span className="border-b-4 border-red-600 pb-1 inline-block w-fit">
            Get to Know Muhammad Aziz
          </span>
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Whom do you most admire in professional life, and why?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Muhammad Aziz:</span> I deeply admire public health leaders,
            whether an early-career or a senior professional, who combine scientific excellence with
            a genuine commitment to improving the health and wellbeing of communities. I am
            particularly inspired by individuals whose work creates meaningful impact beyond
            academia, whether through research translation, community engagement, policy advocacy, or
            health systems strengthening. I also value leaders who use evidence to influence relevant
            policy change, mentor and support the next generation of professionals, and remain
            grounded in ethical principles, integrity, and service to the public good. For me, the
            most admirable professionals are those who not only achieve personal success but also
            create opportunities for others and contribute to lasting improvements in population
            health at local, national, and global levels.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What are you currently writing?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Muhammad Aziz:</span> At this stage, my writing is primarily
            focused on developing scholarly publications from the research projects I am involved in,
            rather than writing a single book. I strongly believe that every well-designed research
            project should lead to high-quality publications, as this is how we document evidence,
            share knowledge with the wider academic and professional community, and contribute to
            policy and practice. This includes manuscripts arising from my own research,
            collaborative projects, and the work of my PhD students and mentees. Supporting them
            through the publication process is an important part of my academic role, as it helps
            strengthen their research capacity, build their professional profiles, and ensure that
            valuable findings are disseminated effectively. In that sense, my current
            &ldquo;writing&rdquo; is centred on transforming research evidence into publications that
            can inform public health knowledge, policy, and practice.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Do you have a personal motto or mantra you live by?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Muhammad Aziz:</span> My personal motto is, &ldquo;Be honest
            with yourself.&rdquo; I believe self-honesty is essential for making meaningful
            decisions, remaining grounded in one&rsquo;s values, and pursuing work with purpose and
            integrity. My advice to the next generation is that life is too short for regret, so it
            is important to choose a profession that brings both personal fulfilment and a genuine
            sense of contribution.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Do you see yourself returning to Bangladesh in the coming years, considering your
            current career abroad (Australia)?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Muhammad Aziz:</span> Bangladesh remains deeply important to
            me, both professionally and personally. The foundation of who I am today was shaped by
            the education, opportunities, and values I received there. I remain profoundly grateful
            for the scholarships and support that enabled my education through government school,
            college, and medical school. That support was made possible, directly or indirectly,
            through the contribution of the people of Bangladesh, and I feel a lasting sense of
            responsibility and indebtedness to give back. For this reason, Bangladesh will always
            remain central to my professional service, collaboration, and capacity-building efforts.
            While I am currently based in Australia, I see my role as a global contributor who can
            support health systems, strengthen research capacity, and contribute to policy
            development across countries, including Bangladesh. Returning in some capacity, whether
            through advisory roles, institutional partnerships, mentoring, or collaborative public
            health initiatives, is certainly part of my long-term vision.
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
            About Prof. Dr. Muhammad Aziz Rahman
          </h2>
          <div className="mt-2 mb-6 h-1 w-20 bg-[#FFCE00] mx-auto rounded-full" />
          <p className="mt-2 leading-relaxed text-justify">
            Professor Dr Muhammad Aziz Rahman is a leading global public health scholar and
            Associate Dean (Research) at Federation University Australia. Recognised among the
            world&rsquo;s top 2% scientists for six consecutive years, he has authored more than 225
            publications and received over 173,000 citations. His research focuses on tobacco
            control, non-communicable diseases, mental health, migrant health, and health equity,
            with significant policy and practice impact internationally.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            He has secured more than $14 million in research funding, leads collaborations across
            25+ countries, and contributes to the Global Burden of Disease Study. A Fellow of the
            Public Health Association of Australia, he is widely recognised for research leadership,
            mentoring, and capacity building. Through multidisciplinary partnerships, supervision,
            and policy engagement, he advances evidence-informed public health action and
            strengthens health systems to address complex global health challenges.
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

export default AnEngagingConversationWithProfMuhammadAzizRahman;
