import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
// import DrZarifImg from "@/public/images/blog-interview/interview/Zarif-Rasul-2.jpg";
import DrTaufiqueImg from "@/public/images/blog-interview/interview/DrTaufique.jpg";
import BioOfTarique from "./BioOfTarique";

const LeadingVoice = () => {
  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <div className="relative w-full  border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] leading-10"
              style={{ wordSpacing: "0.4rem" }}
            >
              A Leading Voice in Global Health Systems: <br /> A Dialogue with{" "}
              <a
                href="https://www.linkedin.com/in/taufiquejoarder/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001844] underline font-extrabold bg-[#FFCE00] px-2 rounded-md"
              >
                Dr. Taufique Joarder
              </a>{" "}
              <br />
              {/* Insights from A Global Water Specialist */}
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
                src={DrTaufiqueImg}
                alt="Dr. Taufique Joarder"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="bg-[#FFCE00] max-w-5xl text-black p-4 sm:p-6 rounded-md shadow-md">
              <p className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-4">
                — Dr. Taufique Joarder, Health Policy and Systems Researcher ||
                University Faculty || Author
                <a
                  href="https://www.linkedin.com/in/taufiquejoarder/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </p>

              <p className=" text-2xl md:text-[28px]  font-base leading-relaxed md:text-justify">
                "I believe the next generation of global health leaders should
                cultivate four essential skills: inquisitiveness, humility, a
                commitment to lifelong learning, and critical thinking."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Content */}
      <div className="max-w-screen-md mx-auto px-12 py-8 bg-white ">
        {/* Public Health Journey Questions start */}

        <h2 className="text-2xl md:text-[24px] font-semibold text-[#BE123C] underline underline-offset-4 decoration-[#FCA5A5] decoration-4 mb-4 flex items-center gap-3 transition-all duration-300 hover:text-[#9F1239]">
          <span>Public Health Journey Questions</span>
        </h2>

        {/* Question 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Could you briefly share your journey from holding a clinical
            degree in Bangladesh to becoming a global health systems expert?
            What inspired you to take this path?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Taufique Joarder:</span> My journey
            into public health began during my third year of medical school in
            Bangladesh. Although I was training to become a clinician, I found
            myself more drawn to understanding people, communities, and the
            broader social forces that shape health.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            A turning point came during a residential field training in a rural
            area. I asked an elderly man whether he used a sanitary latrine. He
            quietly took my hand, led me to his tiny home, and said, “This is
            all I have—do I build a latrine or sleep here?” That moment deeply
            impacted me. It showed me that health behaviors can’t be separated
            from socioeconomic realities. Similarly, a woman told me she
            couldn’t afford iodized salt because feeding her children came
            first. These stories helped me see health beyond biology—it’s about
            social determinants.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            After finishing medical school, I decided not to pursue a
            traditional clinical path. Instead, I moved to Dhaka and pursued an
            MPH at{" "}
            <a
              href="https://bracjpgsph.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              BRAC James P. Grant School of Public Health.
            </a>{" "}
            The program was transformative. It introduced me to new ways of
            thinking—critical inquiry, evidence-based reasoning, and
            understanding health through anthropological and systems lenses.
            Influential mentors like Dr. Shahaduz Zaman and the late Dr. Richard
            Cash expanded my worldview.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Though initially unsure about working in research, I embraced it as
            a meaningful way to engage with communities and influence systems. I
            eventually transitioned into faculty and research roles, and over
            the years, worked across disciplines—from anthropology to health
            policy to systems thinking—both in Bangladesh and globally.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Today, I see myself as a bridge between the field and policy,
            committed to addressing the root causes of health inequities. It’s
            been a purposeful journey that began with real stories from real
            people—and they continue to guide my path.
          </p>
        </div>

        {/* Question 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. You completed your PhD at Johns Hopkins University, one of the
            world’s leading public health institutions. In your view, what
            distinguishes its educational approach from institutions in the
            Global South?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Taufique Joarder:</span> Johns
            Hopkins offered an incredibly rich learning environment—one that
            combined cutting-edge research, global faculty, and a diverse
            student body. What set it apart was the immediacy of knowledge:
            whatever was published in top journals last week often found its way
            into our classroom discussions the following week. Many of those
            innovations were led by Hopkins faculty themselves. That kind of
            proximity to the frontier of public health thinking was truly
            invaluable.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            At the same time, I deeply appreciate the grounding I received from
            my time at BRAC University in Bangladesh. What BRAC—and some other
            institutions in the Global South—do particularly well is expose
            students to real-life public health challenges in a way that
            institutions in the Global North often struggle to replicate. While
            some Northern universities have tried to offer field immersion—like
            the George Washington University students who spent a semester in
            Bangladesh—such efforts are logistically complex and expensive.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            At BRAC, we were embedded in communities. Our learning was not just
            theoretical; it was lived and observed. While BRAC has had to scale
            back some of its community-based programs due to funding
            constraints, its community orientation remains stronger than that of
            many institutions globally.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            What concerns me, though, is that many other institutions in
            Bangladesh haven't embraced this opportunity. They still rely
            heavily on classroom-based teaching, missing the transformative
            value of community-engaged, experiential learning in public health
            education.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            In short, I’ve been fortunate to benefit from both worlds. Johns
            Hopkins gave me global insight, technical rigor, appreciation of
            different cultures, and a vast network—many of my classmates now
            lead in WHO, World Bank, Harvard, Hopkins, and beyond. But the
            formative, close-to-community experiences from institutions like
            BRAC University shaped my public health instincts. I still cherish
            those the most.
          </p>
        </div>

        {/* Question 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. As a faculty member at a globally reputed public health
            institution, what would you consider your most significant
            professional achievement so far?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Taufique Joarder:</span> That’s a
            thoughtful question—and not easy to answer briefly. But let me share
            a story that captures what made my time at Johns Hopkins truly
            transformative.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            The Doctor of Public Health (DrPH) at Johns Hopkins is more than a
            traditional PhD. It combines rigorous research with practical
            experience through a communication and a practice
            portfolio—emphasizing the translation of evidence into real-world
            impact.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            In my second year, after completing a policy analysis course with
            Professor Sara Bennett, I was invited to lead a policy analysis
            project in Bangladesh on health workforce career pathways. At the
            time (circa 2012–2013), policy analysis was still a new concept in
            public health practice in Bangladesh, making this a perfect fit for
            my DrPH practice requirement.
          </p>
          <p className=" mt-2 mb-2 leading-relaxed text-justify">
            I took a semester off, returned to Bangladesh, and conducted
            extensive fieldwork. The key insight: medical professionals enter
            the system solely as clinicians, yet many eventually shift into
            roles in public health, management, or policy—with no formal
            preparation or pathways for these responsibilities.
          </p>
          {/* <p className=" mt-2 leading-relaxed text-justify"> */}I proposed a
          three-track career model:
          <ol className="mt-1 list-decimal ml-12 leading-relaxed text-justify">
            <li>Clinical Track for those in patient care </li>
            <li>
              Public Health & Administrative Track for leadership and system
              roles
            </li>
            <li>Medical Education & Research Track for academic careers </li>
          </ol>
          {/* </p> */}
          <p className=" mt-2 mb-2 leading-relaxed text-justify">
            Though initially met with resistance—even from journal reviewers—I
            advocated for publication based on methodological rigor, and the{" "}
            <a
              href="https://www.ijhpm.com/article_3495.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              paper
            </a>{" "}
            was eventually accepted in International Journal of Health Policy
            and Management and well cited.
          </p>
          <p className=" mt-2 mb-2 leading-relaxed text-justify">
            Years later, while serving on a national HRH committee, I was
            surprised to see my paper being circulated—unaware I was in the
            room. While the proposal wasn’t immediately adopted due to political
            and institutional barriers, the idea began shaping high-level
            discussions. Today, with the formation of a Health Systems Reform
            Commission and political shifts, its core principles are being
            reconsidered seriously.
          </p>
          <p className=" mt-2 mb-2 leading-relaxed text-justify">
            That’s why I often say—my most meaningful achievement is perhaps
            still ahead of me. If Bangladesh adopts a structured, multi-track
            health workforce model, I would consider that a true lifetime
            contribution.
          </p>
          <p className=" mt-2 mb-2 leading-relaxed text-justify">
            On a personal note, I also take deep pride in mentoring students.
            Their growth and achievements continually inspire me. That, too, is
            something I carry from my time at Hopkins—the importance of
            nurturing future public health leaders.
          </p>
        </div>

        {/* Public Health Journey Questions end */}

        {/* Global Health Systems Questions start  */}
        <h2 className="text-2xl md:text-[24px] font-semibold text-[#BE123C] underline underline-offset-4 decoration-[#99F6E4] decoration-4 mb-4 flex items-center gap-3 transition-all duration-300 hover:text-[#115E59]">
          <span>Global Health Systems Questions</span>
        </h2>

        {/* Question 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. From your experience in both academia and policy, what are the
            most common health system challenges worldwide?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Taufique Joarder:</span> In my
            experience across both academia and policy, two of the most common
            and interconnected health system challenges worldwide are
            insufficient funding and a narrow, vertical approach to health
            programming.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Funding remains a chronic issue, especially for comprehensive system
            strengthening. What’s equally concerning is a lack of long-term
            vision and systems thinking. Many global health efforts still
            operate within siloed, disease-specific frameworks—like focusing
            only on malaria or TB—rather than investing in the broader health
            system infrastructure needed to support all services sustainably.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            This vertical approach was common until the 1970s and 1980s, but
            since the 1990s, there has been growing recognition that without
            strong, integrated health systems, even the most well-funded disease
            programs won’t be sustainable. For instance, if a country builds HIV
            services but fails to strengthen its broader system, gains can be
            quickly reversed once donor funding ends or if another crisis hits.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Unfortunately, we’re now seeing a regression. Global funding
            priorities are shifting back toward narrowly defined programs, with
            less interest in system-wide investments. There's also a lack of
            appreciation for how interconnected our world is—health threats
            don’t respect borders, and determinants like climate, environment,
            and commerce affect all countries.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Ignoring system-wide investments and focusing too narrowly puts
            everyone at risk. A more holistic, systems-oriented mindset is
            urgently needed to ensure resilient, equitable, and sustainable
            health outcomes.
          </p>
        </div>

        {/* Question 5 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. You’ve specialized in human resources for health, a critical
            area. Why does Bangladesh continue to struggle with producing and
            retaining quality health professionals?
          </h2>

          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Taufique Joarder:</span> So, there
            are two issues: quality and retention. Both are critical, and both
            are areas I’ve worked on extensively.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            On the quality side, a major issue is the overemphasis on quantity.
            We've seen a rapid expansion of medical colleges—many of them in the
            private sector—without adequate oversight or a strong regulatory
            framework. This has inevitably compromised the quality of education.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Clinicians involved in teaching often prioritize their private
            practice over academic responsibilities. There's also a lack of
            research culture in medical schools. When I studied medicine in
            Bangladesh, we never engaged with journal articles or evidence-based
            practices. In contrast, medical students in Singapore regularly work
            with the latest published research, even at the undergraduate level.
            This kind of academic engagement is still missing in most
            Bangladeshi institutions.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Medical education in Bangladesh continues to rely heavily on rote
            memorization rather than critical thinking and evidence-based
            learning, and that has long-term implications for the competence of
            health professionals.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            As for retention, the problem is equally complex. Career pathways
            for doctors, especially those outside urban centers, are limited and
            poorly structured. Most medical schools are based in urban areas,
            and the curriculum is geared toward producing urban, specialist
            clinicians. It doesn't prepare or encourage students to work in
            rural or underserved regions.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            To truly retain talent in rural areas, we need structural changes.
            That includes establishing medical schools in rural settings,
            tailoring the curriculum to address rural health needs, and making
            it possible to pursue higher education without leaving rural
            practice entirely.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Right now, the system essentially forces doctors to relocate to
            cities for specialization or career progression—and many of them
            never return to rural service. Until we fix these foundational
            issues, both the quality of health professionals and their retention
            in key areas will remain a challenge.
          </p>
        </div>

        {/* Question 6 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What are your current priorities in health systems work, and what
            are your future plans—and what drives them?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Taufique Joarder:</span> Currently,
            my main focus is on{" "}
            <a
              href="https://www.duke-nus.edu.sg/sdghi/our-work/programme-evaluation-unit#:~:text=The%20Programme%20Evaluation%20Unit%20is%20a%20key%20platform,effectiveness%20and%20impact%20of%20health%20programmes%20and%20projects."
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              implementation research and evaluation
            </a>{" "}
            , particularly within Singapore’s health system. While I also work
            on{" "}
            <a
              href="https://healthsystemsglobal.org/about-us/governance/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              health policy and systems research
            </a>{" "}
            , I believe implementation research is especially valuable—it
            bridges the gap between evidence and real-world application. It's
            equally relevant for high-income countries like Singapore and low-
            and middle-income settings like Bangladesh.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            A key area I’ve consistently worked on is human resources for
            health. I’m currently leading a workforce planning study where we’re
            integrating WHO’s WISN tool into electronic health records, using AI
            to forecast staffing needs. This allows managers to make proactive
            decisions, and it's a scalable model that could work well in
            Bangladesh too.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Beyond this, I’m also interested in governance and health financing.
            I served on Bangladesh’s Health Financing Strategy Committee and
            contributed to{" "}
            <a
              href="https://onlinelibrary.wiley.com/doi/10.1155/2019/4954095"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              UHC discussions.
            </a>{" "}
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Looking ahead, I hope to continue bridging insights between contexts
            like Singapore and Bangladesh. What drives me is the desire to make
            health systems more equitable, efficient, and responsive—especially
            in settings where smart, locally adapted solutions can have the
            greatest impact.
          </p>
        </div>

        {/* 7 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What three essential skills would you recommend for the next
            generation of global health leaders?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Taufique Joarder:</span> I believe
            the next generation of global health leaders should cultivate four
            essential skills: inquisitiveness, humility, a commitment to
            lifelong learning, and critical thinking.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            First, inquisitiveness — a deep curiosity and a genuine desire to
            understand the world around you — is foundational. Global health
            challenges are complex, and without a research-oriented mindset,
            it’s difficult to navigate them effectively. Leaders need to keep
            asking questions, exploring new ideas, and engaging deeply with the
            communities and systems they serve.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Second, humility. This is something I’ve come to value deeply,
            especially after working in both Bangladesh and Singapore. In
            Bangladesh, I often encountered rigid professional hierarchies —
            where clinicians, for example, might dismiss insights from
            professionals with different backgrounds. But in Singapore,
            particularly at{" "}
            <a
              href="https://www.duke-nus.edu.sg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Duke-NUS Medical School,
            </a>{" "}
            I was pleasantly surprised by the openness of clinicians. Busy
            clinicians were eager to listen, learn, and collaborate on projects
            outside their core expertise — such as cancer and hypertension
            screening, which are typically led by public health professionals.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Third, openness to lifelong learning is critical. No one knows
            everything. True leadership means being willing to learn from anyone
            — regardless of their title, background, or degree. To stay relevant
            in today’s world, we must constantly evolve. I still revisit
            statistical methods I learned during my MPH, experiment with AI
            tools, and refresh my skills through different learning platforms.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Fourth, critical thinking. Global health professionals must not
            passively accept what they are told. They need to ask hard
            questions, challenge assumptions, and apply a critical lens to
            policies, data, and practices. This critical perspective helps
            leaders make better decisions, design more effective interventions,
            and remain adaptable in rapidly changing environments. That’s the
            mindset I believe we need — always curious, always learning, and
            always thinking critically.
          </p>
        </div>

        {/*  */}

        {/* Get to Know Taufique Joarder start */}
        <h2 className="text-2xl md:text-[24px] font-semibold text-[#BE123C] underline underline-offset-4 decoration-[#D8B4FE] decoration-4 mb-4 flex items-center gap-3 transition-all duration-300 hover:text-[#5B21B6]">
          <span>Get to Know Taufique Joarder</span>
        </h2>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Who is your public health role model, and why?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Taufique Joarder:</span> If I need
            to say one name, I would say{" "}
            <a
              href="https://www.bsms.ac.uk/about/contact-us/staff/professor-shahaduz-zaman.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Dr. Shahaduz Zaman
            </a>{" "}
            has been a pivotal figure in my journey. He is currently a Professor
            of Medical Anthropology and Global Health at the University of
            Sussex. With a background as a physician, anthropologist, global
            health expert and famous writer, he has brought a unique
            interdisciplinary perspective that has deeply influenced me. He was
            — and continues to be — my entry point into the broader world of
            global health. He opened doors to new opportunities and ways of
            thinking, which is why I admire him so much. Even now, I’m
            collaborating with him on a project focused on elderly care in
            Singapore. His mentorship and continued partnership have been truly
            invaluable for my career. But I will do injustice if I also do not
            mention Richard Cash, Tim Evans, David Peters, and Ron Labonte.
          </p>
        </div>

        {/* Q9 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What is your most cherished memory from your time at the James P.
            Grant School of Public Health—whether as a student or faculty
            member?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Taufique Joarder:</span> One of my
            most memorable and inspiring experiences was during our field visit
            to Kakabo village, Dhaka, Bangladesh as part of our MPH program.
            Each student was provided with a bicycle for the trip. While I
            already knew how to ride one, many of my classmates didn’t. But that
            didn’t stop them.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Dr. Shahaduz Zaman, who was the MPH coordinator at the time, told
            us, “If you want to be a public health professional, you must know
            how to manage and immerse yourself in the field.” That message
            really stayed with me.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            What inspired me the most was one of our senior peers — a mid-career
            professional who wore a hijab and traditional Islamic attire.
            Despite never having ridden a bicycle before, she learned and rode
            alongside us, navigating rural roads to complete our fieldwork.
            Watching her break through personal and cultural barriers so
            determinedly was incredibly moving.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            It was a powerful reminder that limitations can be overcome — with
            courage, support, and the right mindset. That experience shaped how
            I view resilience, adaptability, and leadership in public health.
          </p>
        </div>

        {/* Q10 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What is your favorite food and does Singapore offer you?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Taufique Joarder:</span> I
            absolutely love the biryani of Bangladesh, and I miss it dearly. The
            aroma, the perfectly spiced rice, the tender meat—it’s a symphony of
            flavors that’s hard to find elsewhere. In Singapore, there is
            biryani too, but it’s quite a different version. While it’s popular
            and well-liked here, I find it relatively bland compared to the
            rich, flavorful biryani of Dhaka.
          </p>

          <p className=" mt-2 leading-relaxed text-justify">
            Besides, I also miss the Tehari from Sobhanbag’s Tehari Ghar from
            Dhaka that I used to enjoy a few years ago.
          </p>
        </div>

        {/* Q11 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Do you see yourself returning to Bangladesh in the coming years,
            considering your current secure career and comfortable life abroad
            (Singapore)?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Dr. Taufique Joarder:</span> I
            definitely see myself returning to Bangladesh — that has always been
            my passion and my long-term aspiration. My initial decision to leave
            was primarily driven by the political volatility in the country,
            during which I didn’t feel entirely safe. My outspoken criticism of
            government policies and decisions during the COVID-19 pandemic put
            me on a collision course with the then undemocratic regime.
            Otherwise, I might not have left at all.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            At the moment, me and my family are based here in Singapore, and my
            son is pursuing his studies. But if a suitable opportunity arises —
            one that aligns with both my professional goals and the well-being
            of my family — I would absolutely welcome the chance to return and
            contribute to Bangladesh. The desire to give back to my country
            remains at the core of my work and values.
          </p>
        </div>
        {/* Get to Know Taufique Joarder end */}

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

      <BioOfTarique />
    </div>
  );
};

export default LeadingVoice;
