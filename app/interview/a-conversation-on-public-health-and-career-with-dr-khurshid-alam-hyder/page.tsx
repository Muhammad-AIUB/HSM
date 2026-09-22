import Image from "next/image";
import Link from "next/link";

import { interviewOrder } from "../interviewOrder";
import { LinkedInLogo } from "@/components/Shared/LinkedInLogo";

const AConversationOnPublicHealthAndCareerWithDrKhurshidAlamHyder = () => {
  const currentSlug =
    "a-conversation-on-public-health-and-career-with-dr-khurshid-alam-hyder";

  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <div className="relative w-full border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] leading-10"
              style={{ wordSpacing: "0.4rem" }}
            >
              A Conversation on Public Health and Career with Dr{" "}
              <a
                href="https://www.linkedin.com/in/dr-md-khurshid-alam-hyder-7978082bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFCE00] px-2 rounded-md underline font-extrabold"
              >
                Md Khurshid Alam Hyder
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
                src="/images/blog-interview/DrHyder3.jpg"
                alt="Dr Md Khurshid Alam Hyder"
                width={400}
                height={400}
                quality={100}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="bg-[#FFCE00] max-w-5xl text-black p-4 sm:p-6 rounded-md shadow-md">
              <p className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span>
                  - Dr Md Khurshid Alam Hyder, Physician and Global Health Expert
                </span>
                <a
                  href="https://www.linkedin.com/in/dr-md-khurshid-alam-hyder-7978082bb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  <LinkedInLogo size={20} />
                </a>
              </p>

              <p className="text-2xl md:text-[28px] font-base leading-relaxed md:text-justify">
                &ldquo;Public health is ultimately about people, not systems alone.
                Policies and programs matter greatly, but they only have meaning when
                they translate into dignity, equity, and care for individuals and
                communities.&rdquo;
              </p>

              <p className="mt-4 text-xs text-gray-900">Published: 24 September 2026</p>
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
            Q. Your journey from a clinical degree to becoming a public health expert is
            inspiring. What were the key moments and influences that shaped this path?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Khurshid Hyder:</span> I began my career with a
            strong clinical foundation, earning an MBBS and a Diploma in TB and Chest
            Diseases from the University of Dhaka. My early medical training developed
            both my understanding of patient care and my empathy for people affected by
            illness.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            A major turning point came when I pursued a Diploma in TB Control and
            Epidemiology at the Research Institute of Tuberculosis in Kiyose, Japan, under
            the mentorship of Dr. Nobukatsu Ishikawa. That experience sparked my interest
            in public health and encouraged me to look beyond individual patient care
            towards population health.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            I later completed an MPH at the University of Alabama at Birmingham, USA,
            gaining expertise in epidemiology, biostatistics, international health, and
            health systems. A subsequent PhD in Medical Microbiology further strengthened
            my ability to connect scientific research with practical public health
            interventions.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Professionally, my responsibilities expanded from national to regional and
            global levels. I spent more than two decades working with Bangladesh&rsquo;s
            National Tuberculosis Control Programme before serving as Regional Advisor for
            Tuberculosis at the WHO South-East Asia Regional Office in New Delhi. Later,
            as Public Health Administrator and Team Lead for Health Systems Strengthening
            at WHO Nepal, I supported national health strategies, institutional
            capacity-building, and the country&rsquo;s transition to a federal health
            system. More recently, as a Technical Assistance Consultant, I have
            contributed to global advocacy, resource mobilization, and
            partnership-building.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Throughout this journey, mentorship, exposure to major public health
            challenges, and a commitment to vulnerable populations have shaped my path.
            Although my career has evolved from clinical practice to national, regional,
            and global public health roles, my motivation has remained consistent:
            translating knowledge and evidence into better health outcomes for
            communities.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What specifically drew you to work in tuberculosis control, both in
            Bangladesh and globally? In your view, what remains the top priority for
            eliminating TB in Bangladesh?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Khurshid Hyder:</span> My commitment to
            tuberculosis control began early in my career, as I saw firsthand how TB
            affects not only patients but also their families, livelihoods, and
            communities, particularly among vulnerable populations. These experiences
            motivated me to deepen my expertise in TB, epidemiology, microbiology, and
            disease control.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Through my work with WHO and the Global TB Programme, I came to understand
            that TB is not only a biomedical issue but is also closely linked to poverty,
            inequality, stigma, nutrition, access to care, and the strength of health
            systems. Working with governments, civil society, and international partners
            reinforced my belief that ending TB requires coordinated action, sustained
            investment, innovation, and strong political commitment.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            For Bangladesh, a key priority is closing the gap between people who develop
            TB and those who are diagnosed and successfully complete treatment. Early case
            detection should be strengthened through community-based approaches, improved
            diagnostics, active case finding, and integration with primary health care.
            Treatment completion is equally important, particularly for drug-resistant TB.
            Patient-centred care, counselling, social support, and effective follow-up can
            improve outcomes.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Bangladesh must also continue investing in its health workforce, laboratory
            capacity, surveillance, and sustainable financing, while strengthening
            collaboration with the private sector and civil society.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Ultimately, TB cannot be eliminated through medical treatment alone. Poverty,
            malnutrition, overcrowding, stigma, and other social determinants must also be
            addressed through a comprehensive, rights-based, and people-centred approach.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. If you had unlimited funding for one global health project, what would you
            pursue, and why?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Khurshid Hyder:</span> If I had unlimited funding,
            I would invest in building integrated and resilient primary health care
            systems that can prevent, detect, and manage infectious diseases such as TB,
            while also addressing non-communicable diseases and advancing universal health
            coverage.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            The reason is simple: disease-specific programmes have achieved important
            progress, but fragmented approaches are not enough. Strong primary health care
            provides the foundation for sustainable TB elimination, better pandemic
            preparedness, and more equitable access to essential services.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            The investment would focus on community-based service delivery for
            marginalized populations, digital health and data systems to strengthen
            surveillance and accountability, health workforce development to ensure
            skilled and motivated providers, and social protection and equity measures to
            address the underlying determinants of poor health.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            By embedding TB control within a stronger, integrated health system,
            Bangladesh and other countries could accelerate progress toward TB elimination
            while advancing broader health and development goals. With unlimited funding,
            the aim would be to move beyond short-term projects and build people-centred,
            equitable, and resilient health systems for the future.
          </p>
        </div>

        <h2 className="text-2xl md:text-[24px] font-bold text-[#C2185B] mb-6">
          <span className="border-b-4 border-red-600 pb-1 inline-block w-fit">
            Academic and Career
          </span>
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Could you walk us through your academic journey and how it built a strong
            public health foundation, both in Bangladesh and abroad?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Khurshid Hyder:</span> My academic journey began
            in Bangladesh, where I earned my MBBS from the University of Dhaka, building a
            strong foundation in clinical medicine, patient care, and empathy for
            individual health needs. I later pursued an MPH at the University of Alabama
            at Birmingham School of Public Health in the United States. This experience
            shifted my focus from individual patient care to population health and
            strengthened my skills in epidemiology, biostatistics, international health,
            and health systems management. I then completed a PhD in Medical Microbiology
            at the University of Dhaka, further strengthening my ability to connect
            scientific research with practical public health interventions.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Together, these experiences prepared me to move from clinical practice into
            public health leadership, contributing to evidence-based strategies, policy
            development, and stronger health systems at national, regional, and global
            levels.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. You earned a PhD in medical microbiology later in your career. What
            motivated you to pursue it at that stage, and how has it shaped your career
            and life?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Khurshid Hyder:</span> I chose to pursue my PhD in
            Medical Microbiology later in my career to deepen the scientific foundation of
            my public health practice. By then, I had gained significant experience in
            clinical medicine and public health, but I recognized that stronger research
            skills and expertise in microbiology would help me bridge laboratory science
            with population-level interventions. The PhD strengthened my ability to
            critically assess evidence, design rigorous research, and translate scientific
            findings into practical public health solutions. It also enhanced my capacity
            to contribute to policy dialogue and international collaboration.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            On a personal level, the experience reinforced my commitment to lifelong
            learning and showed me that investing in knowledge at any stage of life can
            create new opportunities. Ultimately, the PhD broadened my role beyond that of
            a practitioner and advisor, enabling me to contribute as a researcher and
            advocate for evidence-based public health.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. You continue to serve in leadership roles at several international civil
            society organizations. What motivates you to invest so much effort during your
            retirement?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Khurshid Hyder:</span> Retirement, for me, has
            never meant stepping away from purpose. After decades of working in government
            and international organizations, I felt a responsibility to continue
            contributing to global health through civil society platforms. These roles
            allow me to share my experience, mentor younger professionals, and contribute
            to policy discussions that strengthen health systems and promote equity.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            What motivates me most is the opportunity to remain engaged in addressing
            pressing public health challenges, whether in ageing, long-term care, or
            tuberculosis control. Serving in leadership roles keeps me connected with
            committed professionals and allows my knowledge and experience to continue
            making a meaningful contribution.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            On a personal level, it is deeply fulfilling to know that even in retirement,
            I can continue supporting causes that improve the health and well-being of
            communities.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. In your view, what three essential skills should future global health
            leaders focus on developing?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Khurshid Hyder:</span> In my view, three skills
            stand out as essential for the next generation of global health leaders.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            First, systems thinking&mdash;the ability to see connections across health,
            social, and economic sectors and to design integrated solutions rather than
            siloed interventions.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Second, evidence-to-policy translation&mdash;leaders must be able to interpret
            data, communicate findings clearly, and influence decision-makers so that
            science genuinely informs policy and practice.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Third, adaptive leadership and collaboration&mdash;the capacity to lead
            diverse teams, build trust across cultures, and respond flexibly to rapidly
            changing global health challenges, from pandemics to ageing populations.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Together, these skills ensure that leaders are not only technically competent
            but also capable of driving sustainable, equity-focused changes in complex
            environments.
          </p>
        </div>

        <h2 className="text-2xl md:text-[24px] font-bold text-[#C2185B] mb-6">
          <span className="border-b-4 border-red-600 pb-1 inline-block w-fit">
            Get to Know Khurshid Alam Hyder
          </span>
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Who is your public health role model, and what about their work inspires
            you?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Khurshid Hyder:</span> My public health role model
            is Dr. Nobukatsu Ishikawa. His lifelong commitment to health equity and his
            ability to combine rigorous science with compassion for marginalized
            communities have always inspired me. What I find most remarkable is how he
            demonstrated that high-quality care is not a privilege for the few but a right
            for all, regardless of geography or income. His work showed the power of
            integrating clinical excellence, research, and advocacy to transform health
            systems.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            In my own career, I have drawn inspiration from his example, striving to
            ensure that evidence-based interventions reach those who need them most and
            that public health remains rooted in both technical rigor and human dignity.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What book are you currently reading, and is there a particular insight from
            it that has stayed with you?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Khurshid Hyder:</span> I am currently reading{" "}
            <span className="italic">The Age of Dignity</span> by Ai-jen Poo, which
            explores the challenges and opportunities of caregiving in an ageing society.
            One insight that has stayed with me is her emphasis on recognizing caregiving
            not just as a private family responsibility but as essential social
            infrastructure.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            That perspective resonates deeply with my own work. It highlights how
            societies must value and invest in care just as they do in education or
            healthcare. It has reinforced my belief that building sustainable long-term
            care systems is not only about services but also about dignity, equity, and
            justice for both caregivers and those receiving care.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Do you have a personal motto or mantra you live by?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Khurshid Hyder:</span> My personal motto is
            &ldquo;Knowledge must serve humanity.&rdquo; Throughout my career, I have
            believed that expertise and evidence only have meaning when they are applied
            to improve lives, reduce inequities, and strengthen systems. This mantra has
            guided me in both science and policy, reminding me that the ultimate purpose
            of public health is not just discovery but impact. It keeps me grounded,
            focused on service, and committed to ensuring that every effort contributes to
            the dignity and well-being of people and communities.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Is there any final thought or message you&rsquo;d like to leave with our
            audience?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Khurshid Hyder:</span> If I could leave one
            message with you, it would be this: public health is ultimately about people,
            not systems alone. Laws, policies, and programs matter greatly, but they only
            have meaning when they translate into dignity, equity, and care for individuals
            and communities.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            As we look ahead, I encourage all of us to commit to evidence-based action,
            collaborate across disciplines and borders, and never lose sight of the human
            face behind the statistics. If we keep that perspective, our collective efforts
            will not only strengthen health systems but also help build a more just and
            compassionate society.
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
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            <div className="relative w-40 h-40 md:w-48 md:h-48 shrink-0 rounded-2xl overflow-hidden border-4 border-[#FFCE00]">
              <Image
                src="/images/blog-interview/Hyder Office.jpg"
                alt="Dr Md Khurshid Alam Hyder"
                width={400}
                height={400}
                quality={100}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#001844] text-center md:text-left">
                About Dr Md Khurshid Alam Hyder
              </h2>
              <div className="mt-2 mb-6 h-1 w-20 bg-[#FFCE00] mx-auto md:mx-0 rounded-full" />
              <p className="mt-2 leading-relaxed text-justify">
                Dr. Hyder is a physician, researcher, and global health leader with over
                three decades of experience in public health policy and health systems
                strengthening. He earned his MBBS and PhD in Medical Microbiology from the
                University of Dhaka and an MPH from the University of Alabama at
                Birmingham. His career spans national, regional, and global roles with the
                National Tuberculosis Control Programme, WHO South-East Asia Regional
                Office, and WHO Nepal. His work has focused on tuberculosis control, health
                systems, NCDs, RMNCAH, climate change, healthy ageing, and long-term care.
                Currently, he continues to contribute through international civil society
                leadership, mentoring, and evidence-informed advocacy, guided by a lifelong
                commitment to equity, dignity, and meaningful public health impact.
              </p>
            </div>
          </div>
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

export default AConversationOnPublicHealthAndCareerWithDrKhurshidAlamHyder;
