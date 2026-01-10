import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import BioOfArefinIslam from "./BioOfArefinIslam";
import NextButton from "@/components/Shared/NextButton";
import { interviewOrder } from "../interviewOrder";

const GlobalHealthExpertAndCoCountryDirector = () => {
  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <div className="relative w-full  border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] leading-10"
              style={{ wordSpacing: "0.4rem" }}
            >
              From Services to Systems: <br /> Dr. Arefin Islam’s Insights for Public Health Solutions
            </h1>
          </div>
        </div>
      </div>

      <section className="relative w-full bg-white">
  <div className="bg-[#001844] py-10 px-12 sm:px-8 lg:px-16">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
      {/* Circular Image with focusable link */}
      <a
        href="/images/blog-interview/interview/arefin-islam.jpg"
        target="_blank"
        rel="noopener noreferrer"
        className="w-52 h-52 shrink-0 rounded-full overflow-hidden block focus:outline-none focus:ring-4 focus:ring-[#FFCE00]"
        tabIndex={0}
      >
        <Image
          src="/images/blog-interview/interview/arefin-islam.jpg"
          alt="Dr. Arefin Islam"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </a>

      <div className="bg-[#FFCE00] flex-1 w-full text-black p-4 sm:p-6 rounded-md shadow-md">
        {/* Name and Noora Health (left), LinkedIn (right) */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <p className="text-xl font-semibold text-gray-800 flex flex-wrap gap-2">
            — Dr. Arefin Islam, A Global Health Expert and Co-Country Director,
            <a
              href="https://noorahealth.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline"
            >
              Noora Health
            </a>
          </p>
          <a
            href="https://www.linkedin.com/in/nh2468/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>

        {/* Justified quote */}
        <p className="text-2xl md:text-[28px] font-base leading-relaxed text-center">
          “We need unwavering political commitment and robust partnerships among
          governments, non-governmental organizations, and communities to ensure
          the sustainability of health services.”
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Interview Content */}
      <div className="max-w-screen-md mx-auto px-12 py-8 bg-white ">
        <h2 className="text-2xl font-bold text-[#C2185B] mb-6">
          <span className="border-b-4 border-red-600 pb-1 inline-block w-fit">Public Health and Career Questions</span>
        </h2>
        {/* Q1 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. How did you transition from a clinical background to non-government public health program? What inspired you this shift, and how has the journey been?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Arefin Islam:</span> While working at a rural tertiary hospital outside Dhaka shortly after completing my internship at a medical college hospital in Bangladesh, I was actively involved in community outreach programs. Being a part of the field team—including a nurse and a health educator—we conducted village health sessions in the surrounding areas of the hospital. The goals were to educate mothers and caregivers on healthy behaviors, monitor blood pressure and anemia in pregnant women, assess child nutrition, and guide families in seeking appropriate clinical services when needed.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            That experience deeply shaped my perspective and I realized that promoting healthy behaviors and encouraging communities to adopt them could have a profound impact on the nation's overall health status. Motivated by this, I chose to pursue a career in public health within the non-governmental sector—even though I had passed the Bangladesh Civil Service (BCS) exam and was eligible for a clinical position in hospitals.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            When I look back, I feel proud of how enriching and rewarding the experience has been! I have had the opportunity to contribute meaningfully to programs aimed at improving the health and well-being of the people of Bangladesh and I feel proud of doing so.
          </p>
        </div>
        {/* Q2 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. With your more than 3-decade extensive experience in maternal and child health, why do you think progress in this area has stuck in recent years in Bangladesh?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Arefin Islam:</span> That's a great question. Bangladesh is often seen as a country of development paradoxes. While it has made commendable strides in maternal and child health over the decades, many public health experts believe that progress has slowed in recent years. One of the key reasons is persistent inequality. While certain population groups continue to benefit from improvements, others—especially those in rural, remote, or hard-to-reach areas—are still being left behind. We also face significant challenges around the quality of care. It's not just about increasing coverage or numbers; behind every statistic is a human face, and the care they receive must be respectful, timely, and effective.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Another critical factor is the health workforce. There are gaps in the availability of skilled providers, a disproportionate ratio of doctors, nurses, and paramedics relative to the population's needs, and frontline workers often face excessive workloads. Other contributing challenges include high rates of adolescent pregnancy, malnutrition, and weak systems for follow-up, monitoring, and referral—all of which hamper sustained progress.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Additionally, external disruptions like the COVID-19 pandemic and shifting patterns in donor funding have further complicated the landscape.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Looking ahead, we must prioritize strengthening primary healthcare, investing in community health workers, improving both quality and equity of services, and tailoring strategies to the unique needs at different levels of the health system. Strong leadership, improved governance, and sustained financial and policy support will also be essential to restore momentum and ensure no one is left behind.
          </p>
        </div>
        {/* Q3 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. In the last five years, what has Noora Health done to help improve health care and health systems in Bangladesh under your leadership?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Arefin Islam:</span> Noora Health is committed to empowering family caregivers by equipping them with essential health knowledge and skills. In Bangladesh, nurses, midwives, and paramedics deliver this education within hospitals. While traditional healthcare delivery focuses on patients, doctors, and nurses, Noora Health envisions a more inclusive approach—placing family members at the center of the care model.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            In countries like Bangladesh, hospitals are often overwhelmed, and patients' caregivers—typically family attendants—are anxious, uninformed, and unsure about how to support their loved ones. Many patients are discharged without their caregivers receiving adequate instructions on home care. Noora Health's flagship initiative, the Care Companion Program (CCP), addresses this critical gap by educating patients and their family members on essential health practices and promoting simple, lifesaving behaviors. This in-hospital training is further supported by a phone-based follow-up program that reinforces these behaviors long after discharge.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Noora Health began its journey in Bangladesh during the COVID-19 pandemic, initially supporting the Directorate General of Health Services (DGHS) in flattening the curve. This was done through a WhatsApp-based health information bot and a tele-health education program that educated home-isolated COVID-positive patients via trained telephone counselors and helped them remain safe and avoid hospital admission.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            The Care Companion Program officially launched in mid-2022, initially focusing on newborn health in two hospitals. Today, the CCP is being implemented by nearly 3,000 trained staff nurses, midwives, and Family Welfare Visitors (FWVs) across more than 560 healthcare facilities—including Bangladesh Medical University, tertiary medical colleges, district hospitals, Upazila Health Complexes, Maternal and Child Health Training Institutes, and Mother and Child Welfare Centers—covering multiple content areas such as SCANU, ANC/PNC, general medicine, general surgery, and non-communicable diseases.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            To date, these trained health service providers have educated over one million patients and caregivers. The CCP has not only benefited patients but also significantly enhanced the skills of service providers—improving their public speaking, empathy, communication, compassionate behavior, and personal motivation to serve their communities better.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Several studies have been conducted to assess the program's impact in Bangladesh. Statistically significant improvements have been observed in areas such as: awareness and practice of exclusive breastfeeding, adoption of skin-to-skin care (Kangaroo Mother Care), Burping practices, Cord care and reduction in newborn readmissions.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            I would like to extend my heartfelt gratitude to our incredible team and leadership whose dedication has made these achievements possible. I feel honored and fulfilled to have contributed to the team's growth—from its early beginnings to a well-established and thriving unit. Together, we continue to work toward a future where every caregiver is equipped to support better health outcomes for their loved ones.
          </p>
        </div>
        {/* Q4 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What do you see as the most urgent global public health challenge, and how can we address it with limited resources?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Arefin Islam:</span> There are several pressing global health challenges today, but in my view, the most urgent is achieving health equity—ensuring that everyone, regardless of where they live or their income level, has access to essential health services.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Other major challenges include the health impacts of climate change, antimicrobial resistance, the double burden of communicable and non-communicable diseases, limited access to adequate nutrition, food insecurity, mental health, air pollution, and epidemic preparedness. Furthermore, inadequate health financing and inefficient resource management pose significant risks to public health, particularly in countries like ours. The COVID-19 pandemic starkly exposed the fragility and inequality of our health systems.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            To tackle these challenges with limited resources, we must invest more strategically—by strengthening primary healthcare, empowering community health workers, ensuring task-shifting, and leveraging technology through telemedicine and digital health education. Greater investment in preventive healthcare and a stronger allocation of resources to the health sector are critical.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Above all, we need unwavering political commitment and robust partnerships between governments, non-governmental organizations, and communities to ensure long-term sustainability. Even with constrained resources, targeted, inclusive, and community-based interventions can drive meaningful and lasting impact.
          </p>
        </div>
        {/* Q5 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Amidst the ongoing donor transition in Bangladesh's health sector, what practical guidance would you offer to aspiring public health professional?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Arefin Islam:</span> Amidst the ongoing donor transition in Bangladesh's health sector, aspiring public health professionals should focus on innovative and underutilized solutions to ensure sustainability. Key strategies include strengthening domestic resource mobilization through philanthropic initiatives and crowdfunding, promoting digital health innovations, and fostering collaboration among public, private, non-governmental, and civil society organizations.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Additionally, the Bangladeshi diaspora can be a valuable source of funding and technical support. Rather than viewing the current funding challenge as a crisis, it should be seen as an opportunity to broaden the horizon of possibilities and build a more self-reliant system.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            National-level planning will be critical, and the government must take the lead—engaging stakeholders from across sectors, including private enterprises, development partners, and philanthropic actors.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            By championing these approaches, aspiring public health professionals can play a crucial role in shaping a more resilient, equitable, and sustainable health system for Bangladesh in this new era of transition.
          </p>
        </div>
        {/* Q6 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. If you had unlimited funding for one global health project, what would you do and why?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Arefin Islam:</span> That's an interesting question. Honestly, I hadn't thought about it before—but if given unlimited funding, I would design a need-based, holistic global health strategy focused on both prevention and equity. My priority would be to strengthen primary healthcare systems and invest in community-based solutions that are adaptable to local contexts.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            A significant portion of the funds would go toward building global consensus—motivating and negotiating with developed countries to take meaningful, coordinated action on climate change, which is one of the greatest long-term threats to global health.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Moreover, I would launch a global awareness campaign focused on peace and the prevention of major communicable and non-communicable diseases, using influential public figures and celebrities to mobilize behavior change and political will. Public voices have a powerful and lasting impact, and their support could unite people across borders for a common cause.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Finally, my aim would be to foster a healthier, more equitable, and more resilient world—where no one is left behind due to where they are born or the resources they lack.
          </p>
        </div>
        {/* Q7 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Reflecting on your career, what has been most fulfilling, and what is your next major goal to accomplish?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Arefin Islam:</span> There have been many meaningful achievements throughout my career that fill me with pride. Among the most significant was playing an active leadership role in the polio eradication efforts in Bangladesh. I had the opportunity to guide and support a dedicated team of health professionals under the capable supervision of the WHO country, regional, and global teams.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Another milestone was my contribution to the advocacy for and development of national guidelines for innovative newborn health interventions, in collaboration with the globally recognized Saving Newborn Lives program.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            I also had the privilege of leading the technical team of the Smiling Sun Health Network—the largest non-governmental health service delivery platform in the country. In addition, one of my personal highlights has been working as a high-performance management trainer, helping nurture the next generation of public health leaders.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Looking ahead, my aspiration is to institutionalize telehealth education across Bangladesh, secure recognition and adoption of the Care Companion Program by the Ministry of Health and Family Welfare, and continue advancing in leadership roles that empower and nurture emerging leaders in the health sector.
          </p>
        </div>
        <h2 className="text-2xl font-bold text-[#C2185B] mb-6">
          <span className="border-b-4 border-red-600 pb-1 inline-block w-fit">Get to know Arefin Islam</span>
        </h2>
        {/* Q8 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Who is your public health role model, and what about their work inspires you?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Arefin Islam:</span> I consider myself privileged to have worked alongside some exceptional public health experts, both nationally and internationally. Each of them has played a vital role in shaping my growth, and I continue to learn from their insights and leadership as I strive to develop further.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            One of the most significant influences in my journey has been a public health doctorate who initially worked as my colleague and later became my supervisor. From him, I learned how to structure thoughts using a logical framework—a skill that continues to guide my communication today. His clarity of expression left such an impression on me that I even adopted his handwriting style.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            I have also drawn inspiration from one of the most renowned public health experts in Bangladesh, who taught me the power of brevity—how being concise can strengthen the message.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Throughout my career, I've remained deeply influenced by the great leaders in Bangladesh's public health sector, including my esteemed teachers from the public health institute, whose wisdom and dedication continue to inspire me.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Equally, I find constant learning in my daily interactions with colleagues. I observe and adopt the behaviors that make them outstanding, knowing that leadership is not just about position—it's about continuous growth, humility, and the ability to learn from those around you.
          </p>
        </div>
        {/* Q9 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What book are you currently reading? What is one key insight you have taken from it?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Arefin Islam:</span> I am currently reading two books concurrently; one is The Power of Habit, the other is Nudge. In the Power of Habit, the author narrates the surprising and thrilling scientific inventions of habits and examines why some people struggle to change while others seem to remake themselves shortly. The key insight from this book is that by understanding how habit works, we can transform our lives.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            In Nudge, the writers deep dive into a wide range of topics through the lens of behavioral economics to show how small changes in the decision-making environment can lead to better outcomes. The key insight from this book is that nudging respects freedom of choice while steering people toward better decisions.
          </p>
        </div>
        {/* Q10 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Which country/district had the most memorable food during your fieldwork—and what was it?
          </h3>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Arefin Islam:</span> The most memorable food experience during my fieldwork was in Khulna, where I worked for over two years. The city is renowned for its fresh fish, vibrant vegetables, and delicious mangoes—all of which happen to be my favorites.
          </p>
        </div>
      </div>
      <BioOfArefinIslam />
      {(() => {
        const currentSlug = "global-health-expert-and-co-country-director";
        const idx = interviewOrder.findIndex((b) => b.slug === currentSlug);
        const next = interviewOrder[(idx + 1) % interviewOrder.length];
        return (
          <div className="mt-4">
            <NextButton
              href={`/interview/${next.slug}`}
              text="Next Interview"
              className="bg-[#FFCE00] text-[#001844]"
            />
          </div>
        );
      })()}
    </div>
  );
};

export default GlobalHealthExpertAndCoCountryDirector; 