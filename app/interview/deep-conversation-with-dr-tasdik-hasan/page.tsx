import Image from "next/image";
import Link from "next/link";
import { interviewOrder } from "../interviewOrder";

import { FaLinkedin } from "react-icons/fa";

import Heading from "../a-leading-voice-in-global-health-systems/components/Heading";

import BioOfTasdikHasan from "./BioOfTasdikHasan";

const DeepConversationWithTasdikHasan = () => {
  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <div className="relative w-full  border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] leading-10"
              style={{ wordSpacing: "0.4rem" }}
            >
              Deep Conversation with{" "}
              <a
                href="https://www.linkedin.com/in/dr-m-tasdik-hasan-aa696a40/?originalSubdomain=au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001844] underline font-extrabold bg-[#FFCE00] px-2 rounded-md"
              >
                Dr. Tasdik Hasan
              </a>
              : Emerging Voice in Global Mental Health
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
                src="/images/blog-interview/interview/tasdik.jpg"
                alt="Dr. Tasdik Hasan"
                width={500}
                height={500}
                className="object-cover object-top w-full h-full"
              />
            </div>

            <div className="bg-[#FFCE00] max-w-5xl text-black p-4 sm:p-6 rounded-md shadow-md">
              <p className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-4">
                — Dr. Tasdik Hasan, PhD Teaching Fellow, Monash University, Australia
                <a
                  href="https://www.linkedin.com/in/dr-m-tasdik-hasan-aa696a40/?originalSubdomain=au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </p>

              <p className=" text-2xl md:text-[28px]  font-base leading-relaxed md:text-justify">
                "During my PhD, I've learned that academic integrity and compassion are not opposites—they are companions. When we hold space for both rigor and humanity, we create research that is authentic, ethical, and transformative."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Content */}
      <div className="max-w-screen-md mx-auto px-12 py-8 bg-white ">
        {/* Global Mental Health Insights start */}

        <Heading>Global Mental Health Insights</Heading>

        {/* Question 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB]">
            Q. What areas of global health are you currently focusing on, and what drives your interest in them?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Tasdik Hasan:</span> I identify myself as a global mental health researcher, with a particular focus on vulnerable communities and the use of digital technologies to bridge mental health inequities. As a PhD candidate at Monash University, I have led one of South Asia's first <a href="https://www.monash.edu/news/articles/signs-of-emotion-empowering-deaf-people-in-bangladesh-with-mental-wellbeing-sign-language" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">co-designed digital mental health resources</a> for Deaf communities, novel efforts to close longstanding gaps in mental health communication, digital inclusion, and culturally responsive care in low-resource settings.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            In 2023, during a participatory design workshop in Dhaka, I asked a 26-year-old Deaf participant, Abdullah, "Do you know the signs of depression?" He responded, "Words like that don't exist in our language." That moment was transformative—it revealed a deep systemic barrier: without language for emotional distress, access to care becomes impossible. This exchange inspired <a href="https://www.youtube.com/@MindSignsBD" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">MindSigns</a>, a digital mental health initiative empowering Deaf individuals in Bangladesh to recognise, express, and seek support for emotional challenges. Through this project, I brought together Deaf community members, caregivers, sign language interpreters, and mental health professionals to co-create culturally and linguistically tailored resources—including the first <a href="https://www.youtube.com/watch?v=5-2YqANZAGk" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Bangla Mental Health Sign Language Bank</a>, digital videos, and educational flyers aimed at enhancing emotional literacy and reducing stigma. Beyond <a href="https://www.youtube.com/@MindSignsBD" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">MindSigns</a>, I recently led a project developing a digital distress protocol for community health workers in low-resource settings, and another focusing on health promotion across the WHO SEARO region, where I served as the country lead for Bangladesh.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            At the heart of my work is a simple belief: mental health solutions must be inclusive, co-created, and rooted in cultural and linguistic understanding—only then can they truly reach those most often left behind.
          </p>
        </div>

        {/* Question 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB]">
            Q. What do you see as the biggest challenges in making advanced mental health services more accessible in Bangladesh?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Tasdik Hasan:</span> <a href="https://www.cambridge.org/core/journals/bjpsych-international/article/current-state-of-mental-healthcare-in-bangladesh-part-1-an-updated-country-profile/19B7DE453E1ED7B460CC25F29A4897A7" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Mental health in Bangladesh</a> remains a pressing public health concern, with the prevalence of disorders steadily rising—particularly among adults. Recent estimates suggest that 18.7% of adults experience some form of mental illness, while around 12.6% of children live with at least one mental health condition. Despite this growing burden, access to care remains severely limited.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            The challenges are multifaceted. There is a large treatment gap, with the vast majority of people living with mental illness unable to access appropriate care. Bangladesh faces an acute shortage of mental health professionals—only 1.17 per 100,000 people, with psychiatrists numbering just 0.49 per 100,000, most of whom are based in urban tertiary centers. This concentration of services leaves rural and marginalised populations with virtually no access to mental health support. Additionally, mental health receives less than 0.5% of the national health budget, which significantly constrains the development and sustainability of services.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            While the <a href="https://www.refworld.org/legal/legislation/natlegbod/2018/en/148276" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Mental Health Act of 2018</a> and the <a href="https://dghs.portal.gov.bd/sites/default/files/files/dghs.portal.gov.bd/notices/e27171cb_a80b_42d4_99ad_40095adef31b/2022-08-16-08-42-af8622e2c4936593dd45601b84f4920f.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">National Mental Health Strategic Plan (2020–2030)</a> have laid important legal and policy foundations, implementation remains limited. In my view, the absence of strong, community-based mental health initiatives is one of the biggest barriers to accessibility. Such initiatives can play a transformative role in reducing stigma, improving help-seeking behaviour, and creating local demand for mental health services, which in turn can strengthen the workforce and attract new professionals to the field.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            A powerful example is the <a href="https://www.friendshipbench.org/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Friendship Bench</a> project in Zimbabwe, where trained community grandmothers provided basic psychological support to younger women. This grassroots model not only improved mental health outcomes but also became a global south innovation that travelled worldwide. I had the privilege of learning directly from <a href="https://www.friendshipbench.org/the-founder" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Professor Dixon Chibanda</a>, the visionary behind this initiative. Bangladesh needs similarly locally grounded but globally inspired innovations—models that honour cultural realities while expanding access, dignity, and hope for all.
          </p>
        </div>

        {/* Question 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB]">
            Q. Based on your research and publications, which evidence-based intervention do you believe could make the most impact on mental health in Bangladesh?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Tasdik Hasan:</span> Based on my research and publications, I believe that a locally adapted version of the <a href="https://www.friendshipbench.org/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Friendship Bench</a> initiative could have a transformative impact on mental health in Bangladesh. Originating in Zimbabwe, the Friendship Bench is a globally acclaimed, evidence-based model that brings mental health care to the community—literally to a park bench. It trains lay community members, often elderly women affectionately called "grandmothers," to deliver structured problem-solving therapy (PST). Sitting on a simple wooden bench, they offer a safe, stigma-free space for people to share their struggles, guiding them through practical solutions and emotional support.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            This model has been rigorously evaluated through randomized controlled trials and shown to significantly reduce symptoms of depression and anxiety, improve social functioning, and strengthen community trust in mental health care. Its success has inspired global adaptations across more than a dozen countries, proving that effective mental health care doesn't always require clinics or psychiatrists—it begins with a compassionate conversation.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            In Bangladesh, where mental health stigma persists and professional resources remain scarce, this approach could empower communities to take ownership of mental well-being through empathy, inclusion, and accessibility. By embedding a localized Friendship Bench model within the existing community health infrastructure—leveraging community health workers, volunteers, and peer supporters—we could bridge the treatment gap, encourage early help-seeking, and normalize conversations around mental health. Such an innovation would not only honour the spirit of the original Friendship Bench but also make it uniquely relevant to Bangladesh's cultural and digital landscape—creating a scalable, inclusive, and community-driven framework for mental health care.
          </p>
        </div>

        {/* Question 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB]">
            Q. If you had unlimited funding for one global health project, what would you choose to do and why?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Tasdik Hasan:</span> My experience working with Deaf communities during my PhD has been life-changing. It opened my eyes to the <a href="https://pubmed.ncbi.nlm.nih.gov/22423884/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">profound struggles, neglect, and discrimination faced by millions of Deaf individuals</a>—challenges that I had never been exposed to, even after years of medical and public health work across Bangladesh, the UK, Rwanda, Uganda, Zambia, and Australia. Until this project, I had never been formally trained to understand or support the unique needs of Deaf people. This realization transformed me both personally and professionally.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            In Bangladesh, an estimated <a href="https://pubmed.ncbi.nlm.nih.gov/25627937/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">10% of the population lives with hearing loss</a>, yet mental health support for Deaf individuals is virtually non-existent. Their experiences, emotions, and distress often go undocumented—absent from both research and policy agendas. Through my <a href="https://bridges.monash.edu/articles/presentation/Signs_of_Change_-_Designing_Hope_for_Deaf_Mental_Health/29363234/1" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">PhD</a>, I began addressing this gap by documenting their mental health challenges and co-designing digital tools that enable Deaf individuals to express emotions and communicate psychological distress. But this is just the beginning.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            If I had unlimited funding for one global health project, I would dedicate it to transforming Deaf mental health globally. My vision would be to develop standardised and culturally grounded tools to assess mental health conditions, evaluating the unique needs among Deaf populations; to design and test community-based interventions that are accessible, inclusive, and evidence-driven; and to launch national and international advocacy campaigns to raise awareness, reduce stigma, and promote dignity and respect for Deaf individuals.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            Ultimately, I would aim to build a world where no one is left unheard—literally or metaphorically—because of their hearing status.
          </p>
        </div>

        {/* PhD and Career Journey start */}

        <Heading>PhD and Career Journey</Heading>

        {/* Question 5 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB]">
            Q. What inspired you to pursue a PhD?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Tasdik Hasan:</span> Pursuing a PhD felt like a natural progression for me. I had been drawn to public health since my second year of medical school, but I deliberately postponed doctoral study for nearly five years after my Masters at the UK because I was deeply engaged in my global health roles with the University of Liverpool and Johns Hopkins Bloomberg School of Public Health. Working across the UK, Rwanda, Uganda, and Zambia was incredibly fulfilling, and I wanted to immerse myself fully in those experiences before returning to academia.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            The idea of a PhD resurfaced during the COVID-19 pandemic, when I found myself confined to my room in Bangladesh in 2020. That quiet, reflective period reignited my desire to pursue rigorous, independent research that could create real-world impact. When I received an offer and full scholarship from Monash University, I knew it was the right step forward—even though border closures and travel restrictions meant waiting two years before I could begin.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            Choosing the right supervisors was central to my decision. After engaging with my primary supervisor Associate Professor Róisín McNaney, I felt confident that our interests aligned and that I could truly be myself throughout the journey. She proved me right—bringing together an exceptional supervisory panel of four inspiring researchers from Monash University, the University of Melbourne, and Deakin University. Under their mentorship and friendship, I've been able to complete a challenging yet deeply meaningful PhD in an under-researched and socially important area.
          </p>
        </div>

        {/* Question 6 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB]">
            Q. What's the most valuable lesson you learned during your PhD at Monash University?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Tasdik Hasan:</span> During my PhD at Monash University, I learned the true meaning of support, flexibility, and empathy in academia. My supervisors and the Faculty of Information Technology played an extraordinary role in shaping not only my research but also my personal growth.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            Over these 3.5 years, I faced several personal challenges—including health issues and the loss of my grandmother—while simultaneously navigating a completely new discipline. Coming from a background in medicine and public health, stepping into the world of information technology was both intimidating and transformative. Yet, my faculty's encouragement and adaptability made this transition possible.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            Through this journey, I developed key skills in co-design, user-centred design, and human–computer interaction—methods that have profoundly influenced how I approach digital mental health research. The iterative learning process of my PhD taught me that research is not just about generating results, but about listening deeply, adapting continuously, and keeping lived experience at the centre of every design decision.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            Above all, I've learned that academic integrity and compassion are not opposites—they are companions. When we hold space for both rigour and humanity, we create research that is authentic, ethical, and transformative—not just for communities, but for ourselves as researchers.
          </p>
        </div>

        {/* Question 7 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB]">
            Q. Congrats on the 'Emerging Leader of the Year Award'! What led to this recognition, and how has it shaped your leadership and career journey?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Tasdik Hasan:</span> Thank you so much. It was truly humbling to receive the Emerging Leader of the Year Award from the Public Health Association of Australia (PHAA)—the nation's peak non-governmental body for public health and the leading voice advocating for prevention, equity, and social determinants of health.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            This recognition stands out as one of the most meaningful milestones of my year. I first joined PHAA as a general member in late 2022, and I now serve my second consecutive term as Co-Convenor of the Mental Health Special Interest Group (MH SIG). Alongside this, I've been actively involved in several strategic initiatives, including the International Health SIG, the PHAA Membership Strategy Committee, and the Advisory and Scientific Sub-Committees of the Australian Public Health Conference 2025. Balancing these voluntary leadership roles with my PhD research has been both challenging and rewarding. Through this work, I've tried to champion mental health equity, inclusive digital innovation, and the empowerment of young public health leaders. The award, therefore, felt like a recognition not just of my efforts, but of the collective vision we share within PHAA—to make public health more inclusive and globally connected.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            Receiving this honour as an international PhD student was profoundly affirming. It reminded me that dedication and purpose transcend geography—that even thousands of miles from home, meaningful contributions in global health can be recognised and valued. This recognition has strengthened my confidence to take the next steps in my academic and leadership journey here in Australia and beyond.
          </p>
        </div>

        {/* Question 8 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB]">
            Q. What are your future career plans, and what's guiding your direction?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Tasdik Hasan:</span> I've never followed a traditional career path; instead, I've always been guided by a broader vision—to promote global mental health by amplifying the voices of underserved communities. This guiding purpose has shaped every step of my journey.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            Right after completing my clinical internship, I joined icddr,b as a Research Fellow, where I learned the fundamentals of research in low-resource settings. From there, I moved to the UK as a Commonwealth Scholar to pursue advanced training and later completed a Master's in Global Mental Health. Eager to apply theory to practice, I spent several years working across the UK, Rwanda, Uganda, and Zambia, where my early experiences from Bangladesh proved invaluable in implementing global mental health initiatives in diverse contexts.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            Returning to Bangladesh just before the COVID-19 pandemic marked a turning point. During that time, I contributed to the country's National Mental Health Strategic Plan 2020–2030, led authoring the mental health country profile- a two-part paper series, co-developed a national community engagement toolkit, and mentored young researchers passionate about mental health equity.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            In 2022, I moved to Australia to pursue a PhD in digital mental health at Monash University, focusing on co-designing inclusive interventions for Deaf communities. Alongside my research, I've been actively involved in teaching and global mental health advocacy.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            I'm now transitioning into a policy-focused role in Tasmania, where I plan to contribute to mental health policy development —particularly for vulnerable and marginalized populations.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            Looking ahead, I don't see my career confined to academia or industry. My goal is to continue bridging research, policy, and advocacy on a global scale—guided by three principles that have always anchored my work: evidence, passion, and purpose. These values will continue to shape every decision I make and every community I serve.
          </p>
        </div>

        {/* Question 9 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB]">
            Q. What three key skills would you recommend to young researchers aspiring to work in global health?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Tasdik Hasan:</span> I still consider myself early in this journey, so rather than offering advice, I'll share a few reflections that have guided me—more practice than skills, but ones I believe matter deeply.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            First, be authentic. Bring your full self into your work—your values, your story, even your imperfections. Global health thrives on diversity of thought and lived experience. Let your research be rooted in integrity, curiosity, and creativity, not just convention.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            Second, never be afraid to ask for help. Whether you're navigating a personal challenge or a complex research question, reaching out doesn't show weakness—it builds connection. Many of the best opportunities and insights come from the simple act of asking.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            Third, make peace with failure. Every setback holds a lesson, and often, what feels like a detour is just a redirection toward something better. Learn from your mistakes, keep your sense of humour, and move forward with grace.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            And if I may add a final note—remember to live fully outside your research. Enjoy nature, nurture relationships, and practice self-compassion. In the long run, success in global health is not only about publications or positions, but about staying grounded, hopeful, and kind—to others and to yourself.
          </p>
        </div>

        {/* Getting to Know Dr. Tasdik start */}

        <Heading>Getting to Know Dr. Tasdik</Heading>

        {/* Question 10 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB]">
            Q. Who is your role model in global health, and what about their work inspires you?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Tasdik Hasan:</span> I don't have a single role model in global health; rather, I draw inspiration from many remarkable individuals whose journeys and approaches have profoundly shaped me.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            From my early medical days, Professor Fatema Ashraf (ShSMC) taught me the power of humility and empathy—qualities I now strive to embody with my own students. Professor Dr. Sharmeen Yasmeen (PHF,BD), showed me the meaning of true mentorship when she welcomed me into PHF,BD at the very start of my public health career. Alongside them, my MPH supervisor, Professor Ahmed Neaz (AIUB), believed in my potential long before I did, inspiring me to do the same for the next generation of scholars.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            Associate Professor Taufique Joarder (NUS) taught me the courage to speak boldly for what matters; Dr. Saif U. Rahman (icddr,b) inspired me with his unwavering focus and consistency; and Professor Dr. Shahaduzzaman (University of Sussex) deepened my understanding of qualitative research as a powerful tool for change. My PhD supervisors, Associate Professor Róisín McNaney (University of Melbourne) and Dr. Khalid Hossain (Monash University), continues to influence me profoundly—Dr. Róisín through her extraordinary academic support and Dr. Hossain through his lessons in patience, flexibility, and compassion in research.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            In global mental health, I'm greatly inspired by Professors Vikram Patel (Harvard University) and Professor Dixon Chibanda (LSHTM), whose pioneering work has opened pathways for researchers from low- and middle-income countries to lead change in this field. I am also deeply proud of my alma mater, the London School of Hygiene & Tropical Medicine (LSHTM), for its collective contribution to global health and its enduring culture of mentoring and inspiring generations of practitioners and researchers around the world.
          </p>
        </div>

        {/* Question 11 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB]">
            Q. What book are you currently reading, and what's one insight that stood out to you?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Tasdik Hasan:</span> I'm currently reading The Secret of the Secrets by Dan Brown. It's taking me a little longer than usual to finish, as I've been balancing quite a bit of travel and academic work lately. Still, I always enjoy immersing myself in thrillers like this—they allow me to pause from academic reading and reconnect with my imagination. For me, books like these are a form of "me time."
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            Dan Brown's writing has always fascinated me because of how seamlessly he blends art, architecture, science, technology, and spirituality. Each of his novels feels like an invitation to explore cities and histories I thought I knew, only to discover layers of mystery and meaning hidden beneath the surface.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            One key insight I take from his books is the power of curiosity and perspective—the idea that there's always more to the world than what we see at first glance. His stories remind me that mystery isn't something to fear but to explore, and that wonder can coexist beautifully with logic and knowledge. Reading his work not only transports me to fascinating worlds but also helps me reflect on my own thoughts, dreams, and creative instincts.
          </p>
        </div>

        {/* Question 12 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB]">
            Q. Do you have a personal motto or mantra that guides your life or work?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Tasdik Hasan:</span> 'Live in small moments.' - I try to embrace the beauty of life's simplest things—a tiny flower by the roadside, a gentle sea breeze, a quiet walk along a mountain path, or a warm cup of tea in the morning. These small moments keep me grounded and remind me of the calm within movement.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            At the same time, I stay anchored in a broader vision: to contribute meaningfully to making the world a better, kinder, and more equitable place. I believe every moment—no matter how ordinary—holds potential. When we live with awareness, gratitude, and purpose, even the smallest acts become part of something larger.
          </p>
        </div>

        {/* Question 13 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB]">
            Q. In just five words, how would you describe yourself—as a development professional and as a person?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Tasdik Hasan:</span> Lets say - Strategic, compassionate, focused, empathetic, impact-driven!
          </p>
        </div>

        {/* Question 14 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Given your secure career and comfortable life in Australia, do you see yourself returning to Bangladesh in the near future?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Tasdik Hasan:</span> The idea of a "secure career" is quite abstract to me. I've always believed that the most comfortable and fulfilling part of my life has been in Bangladesh—surrounded by family, friends, and a strong support system. I also had, and still have, a stable and respected professional career there. So I don't see "security" or "comfort" as exclusive to Australia or any other country outside Bangladesh.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            That said, I do acknowledge that Australia offers a higher level of social protection, academic flexibility, and recognition—things I've experienced deeply over the past 3.5 years as both a <a href="https://bridges.monash.edu/articles/presentation/Signs_of_Change_-_Designing_Hope_for_Deaf_Mental_Health/29363234/1" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">PhD</a> student and an academic staff member. I remain genuinely grateful to Monash University for that.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            If you look closely at my research, mentoring, and advocacy, Bangladesh has always been at the heart of my work. Over 90% of my research focuses on Bangladeshi contexts, and much of it I've led or coordinated from abroad. My physical location has never limited my contribution. Instead, I see myself as part of a global ecosystem that keeps Bangladesh at the centre of conversations on innovation, equity, and inclusion.
          </p>
          <p className=" mt-4 leading-relaxed text-justify">
            If at any point I am invited by national authorities to contribute directly to policy reform or program implementation in Bangladesh—and if my in-person presence would add value—I would not hesitate to return. However, at this stage of my career, as I continue to build a global profile in digital and global mental health, I prefer not to confine myself within geographical boundaries. My goal is to work globally, while ensuring that Bangladesh remains the core and inspiration of my mission.
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

      <BioOfTasdikHasan />
      <div className="flex justify-center my-8">
        {(() => {
          const currentSlug = "deep-conversation-with-dr-tasdik-hasan";
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

export default DeepConversationWithTasdikHasan;

