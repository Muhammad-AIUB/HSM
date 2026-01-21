import Image from "next/image";
import Link from "next/link";
import { interviewOrder } from "../interviewOrder";

import { FaLinkedin } from "react-icons/fa";

import Heading from "../a-leading-voice-in-global-health-systems/components/Heading";

import BioOfSabinaFaizRashid from "./BioOfSabinaFaizRashid";

const SabinaInterview = () => {
  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <div className="relative w-full  border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] leading-10"
              style={{ wordSpacing: "0.4rem" }}
            >
              IN CONVERSATION WITH{' '}
              <a
                href="https://www.linkedin.com/in/sabina-faiz-rashid-5229671aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001844] underline font-extrabold bg-[#FFCE00] px-2 rounded-md"
              >
                DR. SABINA FAIZ RASHID
              </a>
              : INSIGHTS FROM A MEDICAL
              ANTHROPOLOGIST AND GLOBAL HEALTH RESEARCHER
            </h1>
          </div>
        </div>
      </div>

      <section className="relative w-full bg-white">
        <div className="bg-[#001844] py-10 px-12 sm:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
            <div className="w-56 h-56 sm:w-60 sm:h-60 shrink-0 rounded-full overflow-hidden">
              <Image
                src="/images/blog-interview/interview/Sabina Faiz Rashid.jpg"
                alt="Dr. Sabina Faiz Rashid"
                width={500}
                height={500}
                className="object-cover object-center w-full h-full"
              />
            </div>

            <div className="bg-[#FFCE00] max-w-5xl text-black p-4 sm:p-6 rounded-md shadow-md">
              <p className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-4">
                — Dr. Sabina Faiz Rashid, Academic &amp; Researcher, BRAC University
                <a
                  href="https://www.linkedin.com/in/sabina-faiz-rashid-5229671aa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </p>

              <p className=" text-2xl md:text-[28px]  font-base leading-relaxed md:text-justify">
                “Communities are rarely prioritized or even engaged in planning and policy-making processes. I have
                employed community-based participatory research to build local capacities and support people in
                claiming their rights to health and wellbeing.”
              </p>
              <p className="mt-3 text-sm text-gray-800 font-medium">Published: 22 January, 2026</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-screen-md mx-auto px-12 py-8 bg-white ">
        <Heading>Global Health and Medical Anthropology</Heading>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What initially inspired your transition from anthropology to public health, and how have you integrated these two disciplines throughout your academic and professional journey over the past 25 years?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Sabina Rashid:</span> I see my life as a series of divinely guided steps, both planned and unplanned, that ultimately led me to the School of Public Health. My deep respect for the late Fazle Hasan Abed and his lifelong dedication to serving communities inspired me to join the{" "}
            <a
              href="https://bracjpgsph.org/cgsrhr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-700"
            >
              James P Grant School of Public Health
            </a>{" "}
            on October 1, 2004. Previously in the early nineties I had worked at BRAC for several years, and then at Grameen and at UNICEF for shorter periods. The Dean of the School in 2004 was Mushtaque Chowdhury, with whom I had worked earlier at BRAC&apos;s Research and Evaluation Division. I was keen to pursue both teaching and research, and the School of Public Health at BRAC University felt like the ideal space to continue my interests and commitment to living and working in Bangladesh. I joined in 2004, where there were only 4 of us at the school – Demisse Habte (International director), Shahaduzzaman (MPH coordinator), Mushtaque Chowdhury (Dean) and myself.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Over the years, I institutionalised a culture of critical, ethnographic, and participatory research within public health, with a particular focus on urban slums, adolescents, and marginalized populations. I have been able to develop a robust ethnographic and qualitative research portfolio that unpacks how gender, poverty, urban precarity, and social exclusion intersect to affect the health (including their sexual and reproductive health) and well-being of families, particularly those living in slum settlements, and among adolescent and marginalised populations in Bangladesh, which informs our policy impact work. I incorporate research evidence from my own work into my teaching across the three modules I coordinate in the MPH programme.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. You founded the Centre for Gender and Sexual and Reproductive Health and Rights in 2008. What was the purpose, and what impact has it had so far on advancing gender equity and health rights?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Sabina Rashid:</span> My work focuses on structural factors impacting urban informal settlements, adolescents, and disadvantaged populations, emphasizing the intersections between gender, health, and poverty. In 2008, I founded the{" "}
            <a
              href="https://bracjpgsph.org/cgsrhr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-700"
            >
              Centre of Excellence for Gender, Sexual and Reproductive Health and Rights
            </a>{" "}
            and co-established the Centre of Excellence for Urban Equity and Health in 2013 at BRAC School of Public Health. Both Centres prioritize evidence-based approaches to influence policies and programs, sharing evidence from the Global South on national, regional, and global platforms to ensure approaches remain contextually relevant and suitable for diverse settings.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            CGSRHR has championed gender and empowerment through projects addressing critical challenges such as early marriage, gender-based violence and the neglected SRHR conditions in rural and urban contexts. Notable initiatives include GAGE, which provided insights into adolescents&apos; lives across countries like Bangladesh and Ethiopia, and Count Me In, which tackled violence against women in South Asia. These efforts underline our commitment to creating inclusive, gender-sensitive solutions. Through initiatives like Right Here, Right Now, funded by Foreign Affairs Ministry Netherlands and The Adolescent Menstrual Experiences and Health Cohort (AMEHC) we have advanced SRHR and gender equity by engaging marginalized voices of the adolescent girls and the youth. CGSRHR has conducted pioneering research to challenge traditional norms and engage men in gender equality and SRHR.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Projects like Psychodrama explored innovative methods to address young men&apos;s sexual and reproductive health in urban slums and Countering Backlash, fostering critical reflections on masculinity. Other initiatives, such as the national level survey on Men&apos;s Sexual and Reproductive Health, provided valuable insights into male health needs and barriers. Efforts like these and many other transformative research have demonstrated how involving men can transform gender dynamics and promote equitable health practices, creating a more inclusive society. From exploring the SRHR of persons with disabilities to amplifying the voices of transgender individuals, our efforts ensure inclusion for structurally silenced groups. For example, our project Our Voices, Our Futures highlights the lived realities of Indigenous women and sex workers, fostering advocacy and understanding that drive meaningful societal change.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Since 2018, CGSRHR has been at the forefront of tackling the intersections of climate change, migration, and SRHR in humanitarian settings like refugee camps and urban slums. Projects such as ARISE focused on health systems responses to address health and wellbeing of vulnerable populations in urban slums. Our research with Rohingya refugee population contributed to developing a global guideline and core set of indications.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            By focusing on these emerging issues, CGSRHR underscores the critical need for inclusive, adaptive solutions to protect the health and rights of populations disproportionately affected by displacement, climate change, and crisis scenarios. CGSRHR has recognised the potential of digital technology to reform the delivery of SRHR information and services to diverse groups. Initiatives like the Digital Sister Project produced digital accessible, rights-based SRHR education tools to break the barriers in access to information. Projects such Covid-19 Learning, Evidence and Research Programme in Bangladesh (CLEAR) have demonstrated how digital solutions can bridge gaps in service delivery and enhance resilience during crises.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            At the time I founded the Centre, there were only two of us, but it has since expanded to include 30 full-time researchers focusing on the gender, SRH themes. Our publications, range from more than a hundred research reports, peer-reviewed journal articles, book chapters, policy briefs to creative outputs like infographics, amplify our research findings to engage broader audiences nationally, regionally and globally. These works have been pivotal in translating research into actionable knowledge, sparking dialogue, and inspiring positive changes in policy and practice.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Capacity strengthening on gender equity and health rights has been one of the major pillars of the Centre since 2013. The capacity strengthening takes place in 3-tiers: community level service providers and professionals; beyond health professionals- lawyers, reporters, photographers and development practitioners to help design interventions using gender lens and SRHR lenses; and the youth. By establishing a SRHR Cell and a SRHR focused curriculum for National Institute of Population Training and Research (NIPORT) in 2013-2018, 57,000 government health workers and more than 25 government officials were trained on gender equity and SRHR.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Four flagship courses for trained professionals on various issues of gender and health rights were developed, which will this date have trained more than 200 professionals. Through the Empowered Youth Labour Force Project (2023-2024), curriculum development and online courses on &quot;Breaking Taboos and Demystifying Myths on Gender and SRHR&quot; have developed 24 master trainers to train 1000+ youths using the Bangladesh Youth Leadership Centre&apos;s (BYLC) network. Edutainment tools bypassing gatekeepers, sustaining beyond project life with open access to anyone through animations, comic books, documentaries, e.g. on cyber harassment, men&apos;s health, to empower people through information are some major advocacy strategies undertaken.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            In addition, we are dedicated to fostering meaningful research and capacity sharing partnerships between the North and South for intellectual engagement, knowledge, and learning among academics, researchers, and practitioners nationally, regionally, and globally. I was invited to speak on gender equity at{" "}
            <a
              href="https://www.youtube.com/watch?v=nv540Z4Nm80"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-700"
            >
              DEVEX at UNGA78
            </a>
            , New York in September 2023. I was part of CUGH Executive Committee in 2022, and organised a plenary session on Decolonising Global Health, bringing together speakers from Canada, USA, India and Kenya, amongst other presentations. I was interviewed by the{" "}
            <a
              href="https://mittalsouthasiainstitute.harvard.edu/2024/02/medical-anthropologist-sabina-faiz-rashid-on-climate-and-health/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-700"
            >
              Mittal Institute about Climate Change and Health
            </a>
            , where I discussed the complex interactions between gender, and social, economic, political determinants that affect climate affected migrants lives and health. I have participated in podcasts discussing the intersections of poverty, gender dynamics, social transformations, and{" "}
            <a
              href="https://ariseconsortium.org/learn-more-archive/in-dialogue-professor-naila-kabir-and-professor-sabina-rashid-on-gender-equity-in-bangladesh/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-700"
            >
              global development
            </a>
            .
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Which global health areas are you currently focused on, and what’s your next big goal?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Sabina Rashid:</span> I want to keep writing, doing meaningful research, continue teaching structural determinants of health, critical medical anthropology and community centered approaches to research. I believe it is critical to share knowledge from the &apos;Global South,&apos; if I can use that term. There are knowledge hierarchies in public health, not only in terms of who writes what on whose behalf, but certain methodologies (i.e. quantitative/RCTs while important, dominate which leave out the more nuanced perspectives of lived experiences of those who live in precarity. This is critical to put our voices and writings out there – both nationally and internationally.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            I have approximately 120+ publications, including peer-reviewed articles, international book chapters, two books, and monographs (5640+ citations; h-index:35). My recent book{" "}
            <a
              href="https://newbooksnetwork.com/poverty-gender-and-health-in-the-slums-of-bangladesh"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-700"
            >
              Poverty, Gender and Health in the Slums of Bangladesh: Children of Crows
            </a>{" "}
            (2024), spans two distinct time periods, 2002-2003 and 2020-2022. The ethnographic study explores the lives and health journeys of young women and their families residing in the slums of Dhaka city. The book was featured in a list of public health books to read by Professor Madhukar Pai, McGill University, at{" "}
            <a
              href="https://communities.springernature.com/posts/if-you-had-to-read-one-book-on-global-health"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-700"
            >
              Springer Nature &amp; News and Opinion
            </a>
            .
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            I have edited with TKS Ravindran, M Sivakami, Anjana Bhushan and Kausar S. Khan a{" "}
            <a
              href="https://link.springer.com/referencework/10.1007/978-981-97-2098-9"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-700"
            >
              Handbook on Sex, Gender and Health: Perspectives from South Asia
            </a>
            , published by Springer in January 2025. This collection features original research from Bangladesh, India, Nepal, Pakistan, and Sri Lanka, with papers primarily authored by researchers and academics from the region. This is a handbook for students in the region and globally.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            My research and policy work challenges disease-centric views dominant in public health, advocating for broader perspectives on health risks in impoverished communities, community engagement and decolonising knowledge production. Examples include my recent contribution to{" "}
            <a
              href="https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(24)00500-X/fulltext"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-700"
            >
              Lancet Global Health&apos;s journal article
            </a>{" "}
            on regional cooperation in health emergencies, and a journal article on{" "}
            <a
              href="https://link.springer.com/article/10.1186/s41182-025-00704-w"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-700"
            >
              Tropical Health and Medicine
            </a>{" "}
            regarding the health of women with genital fistula. As a Commissioner for the{" "}
            <a
              href="https://healthconflictcommission.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-700"
            >
              CHH-Lancet Commission on Health, Conflict, and Forced Displacement
            </a>
            , I have been focusing on vulnerable communities and decolonizing knowledge production since 2023. For over two decades, my research and advocacy have centred on supporting vulnerable communities and challenging traditional knowledge structures and critiquing the narrow approach of public health. I questioned the reliance on individual expertise in global health, as explored in the Lancet Global Health journal in 2023 and advocated for incorporating indigenous perspectives on health, illness, and the body, as reflected in{" "}
            <a
              href="https://www.taylorfrancis.com/chapters/edit/10.4324/9781315297255-38/invisible-reality-chintar-rog-life-chronic-worry-sabina-faiz-rashid"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-700"
            >
              &quot;The Invisible Reality of &apos;Chinta Rog&apos; (a life of chronic worry): The Illness of Poverty in Dhaka&apos;s Urban Slum Settlements&quot;
            </a>
            , featured in the Handbook on the Politics of Global Health (Routledge, USA).
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            I serve on several global boards, contributing to shaping thought leadership, fostering strategic thinking, and providing critical insights into research and policy endeavours. I serve as an editorial board member of the peer-reviewed journal Sexual and Reproductive Health Matters (SRHM), where I bring in a gender and equity lens from the Global South. In early 2024, I was invited to be a Board Member of the International Scientific Advisory Board (ISAB) for Behavioural Research UK (BR-UK). In April 2024, I was selected in a competitive call to be a Research Advisory Group (RAG) Member of Foreign Commonwealth and Development Office (FCDO), UK, advising on women and girls research strategies and policies.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            While public health is largely grounded in biomedicine, it is also shaped by long histories of alternative healing systems and extensive informal health sectors. There is a need to better contextualise these realities and bridge what works within existing systems in different country settings. Communities are rarely prioritized or even engaged in planning and policy-making processes. I have employed community-based participatory research to build local capacities and support people in claiming their rights to health and wellbeing. This work advanced conceptual understandings of urban informality, accountability, methodology, and lived experiences in Dhaka&apos;s informal settlements. Currently, I am the Principal Investigator of GEAR UP, which seeks to catalyse action on gender and equity within antimicrobial resistance (AMR). The project supports Fleming Fund country grantees to mainstream gender and equity within routine AMR systems and structures, including National Action Plans, thereby contributing to knowledge and action on the structural inequities that shape AMR responses. In parallel, we are building a global community of practice to guide and inspire collective action and knowledge sharing, including through peer-reviewed publications—two of which have already been published in{" "}
            <a
              href="https://www.cabidigitallibrary.org/doi/10.1079/cabionehealth.2025.0026"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-700"
            >
              CABI One Health
            </a>{" "}
            and{" "}
            <a
              href="https://www.nature.com/articles/s41467-025-64137-z"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-700"
            >
              Nature
            </a>
            .
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. If you had unlimited funding for one global health project, what would you do and why?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Sabina Rashid:</span> A longitudinal ethnographic with a multidisciplinary team of researchers to understand diverse communities living in precarity in urban informal settlements to improve indicators that impact directly on gender, health, wellbeing and equity. This would allow us to spend time understanding in-depth the social and cultural, economic and political factors, bringing in diverse communities so they can prioritize, co-develop and co-design interventions and policies, over different time periods, with NGOs, government and other key stakeholders. It would be a participatory research project where we adequately recognize and value communities as our teachers, where we break down the idea of an individual research expert and co-develop and co-design a range of solutions that are co-led and prioritized by communities themselves. We need to work with practitioners and communities in order to generate robust quality evidence that can impact meaningfully on policy and practice. I have explored some of this in the paper co-authored with Dr Sapna Desai. (Sapna Desai, Sabina F Rashid, Group think? Questioning the individual global health expert, The Lancet Global Health, Volume 11, Issue 12, 2023, Pages e1853-e1854, ISSN 2214-109X, https://doi.org/10.1016/S2214-109X(23)00434-5.)
          </p>
        </div>

        <Heading>Academia and Career</Heading>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. You served a decade as Dean at the James P. Grant School of Public Health. How would you reflect on that experience, and what key milestones do you feel most proud of?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Sabina Rashid:</span> The School has achieved a lot and continues to do so both globally and nationally, with several wonderful Deans and colleagues. In my ten years (2013-2023), our graduate alumni was approximately 600+ graduates from all over the world d private sectors both in Bangladesh and around the world. It is always deeply rewarding to see our graduates thrive, as they are the future leaders of this country and their respective countries. Many continue to serve as ambassadors for the School and remain closely engaged, whether by leading training or teaching sessions in our short courses, contributing to the MPH programme, or joining us in research and impact dissemination events. Their continued support is invaluable.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            I am most proud that the school has grown from 66 staff to over 250 plus colleagues. We have 5 Centers and 2 Hubs of research excellence and policy impact. We have 480 peer reviewed international publications since 2017, and our School of Public Health was recently featured in{" "}
            <a
              href="https://www.shanghairanking.com/institution/brac-university"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-700"
            >
              Shanghai Index
            </a>{" "}
            in terms of our research and impact. We have had 465 advocacy to impact on policies and programs since inception in 2004. Our School has been featured by WHO in 2005 and by Johns Hopkins in 2019 as a leading school for grounded public health learning with students from over 35 countries.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            I have led efforts to build a social science stream at the School by organizing seminars, dialogues, training on anthropological methods, critical thinking, and the intersections of gender, health, and poverty. I teach and advocate for ethnographic and context-specific research to better understand community health challenges and their socio- economic, cultural and political determinants. My writings interrogate how public health as disease model decontextualizes the individual from context and makes invisible the structural drivers of bad health. As Director of the Center for Gender, Sexual and Reproductive Health and Rights, I continue to create space for diverse and participatory social science methods within the School and with partner institutions. In addition, I serve on several boards and committees, providing strategic and thought leadership to ensure the voices of the most marginalized are reflected in global policies and programmes. I am a long-standing member of Bangladesh Health Watch; advisory member with Aga Khan University and the SickKids Centre for Global Child Health, guiding research priorities. My current global roles include Editorial Board Member at JAMA Health Forum (2025–26), Steering Committee Member for SRH/HRP at WHO (since 2024), and Research Advisory Group Member for FCDO, UK (since 2024). I also serve as a Senior Fellow at BIDS (2025–28), supporting evidence-based policy and development research.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            I have been fortunate to have my leadership featured in{" "}
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7375211/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-700"
            >
              World Health Organisation Bulletin, Geneva
            </a>{" "}
            in 2019 and in (2022) in the edited collection,{" "}
            <a
              href="https://link.springer.com/chapter/10.1007/978-3-030-84498-1_11"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-700"
            >
              Women and Global Health Leadership
            </a>{" "}
            (Springer Nature, 2022). In 2018, I was awarded the Heroines of Health given by GE Healthcare and Women in Global Health at World Health Assembly, Geneva. In 2025,{" "}
            <a
              href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(24)02796-X/abstract"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-700"
            >
              The Lancet featured a profile on me
            </a>
            , and I appeared on the{" "}
            <a
              href="https://complicatingthenarrative.podbean.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-700"
            >
              Complicating the Narrative podcast
            </a>{" "}
            (to be released). As a former Dean of the BRAC School, I take pride in having influenced strategic thinking around research, teaching, and priorities grounded in a Global South perspective. It has been a tremendous opportunity that I continue to do so, representing our school in various global and regional boards and committees.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. As a seasoned academic, how do you see the current landscape for public health education in Bangladesh and what challenges do academicians face today?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Sabina Rashid:</span> Public health education must be grounded in current realities while addressing the persistent structural and systemic challenges facing public health and medical institutions. With few exceptions, institutions struggle with inadequate infrastructure, shortages of qualified faculty, weak quality assurance, outdated and theory-heavy curricula, reliance on didactic teaching, poor alignment with 21st-century competencies, and insufficient investment. These problems are further exacerbated by weak regulation and politicised processes. Medical education in particular prioritises clinical and curative care at the expense of health promotion and prevention. Much of the curriculum also relies on outdated Global North models, with limited adaptation to local contexts. Although some public health institutions in Bangladesh offer high-quality education, regular monitoring and accountability are essential to ensure consistent standards across the sector.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            These realities raise fundamental questions about the purpose and direction of public health education: what public health means in our context, whom it is meant to serve, what forms of knowledge and practice are appropriate, and what overarching vision should guide public health education in the country. Too often, training remains poorly aligned with the actual health conditions and lived realities of the population. Despite notable progress, Bangladesh is experiencing widening inequalities, with approximately 10.5% of the population living below the global poverty line, a figure reported to have increased by 14% due to the impacts of the pandemic, wars and conflicts, and climate crisis. Addressing these challenges requires greater emphasis on strengthening the health workforce, embedding equity and community justice, expanding practice-based teaching, and improving pedagogical approaches to teaching and learning which are practical and learning by doing, which BRAC school has been doing very well.
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Bangladesh&apos;s unique health challenges, population size, resource constraints, and social inequalities differ markedly from those of more affluent countries, and it crucial that public health education, training, and curricula remain contextually grounded, relevant, and practice-oriented to develop the skills and competencies that are in alignment with and can meet future health challenges. Mushtaque Chowdhury and I contributed a chapter on this in the latest{" "}
            <a
              href="https://bangladeshhealthwatch.org/events/bhw-releases-9th-report-on-public-health-education-in-bangladesh-2023-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-700"
            >
              BHW report
            </a>{" "}
            on the state of public health education in 2024, where we share several recommendations to improve the state of public health education, with a key message being that we need to continually innovate, create, adapt and refine our own teaching and curricula, rather than cut and paste from other countries.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What three essential skills would you recommend for the next generation of global health leaders?
          </h2>
          <div className="mt-2 leading-relaxed text-justify space-y-2">
            <p>
              <span className="font-bold">Sabina Rashid:</span>
            </p>
            <p>1. Respect and humility when interacting with peers and affected communities that we are learning from (be it as a student or as a researcher/practitioner) is critical.</p>
            <p>2. A willingness to be open and collaborative. Team work and efforts create brilliant results.</p>
            <p>3. Leadership is about mentoring and creating the next generation of dynamic individuals. It is about sustainability and it is not about simply promoting the individual self, and only then can institutions flourish.</p>
          </div>
        </div>

        <Heading>Get to Know Sabina Faiz Rashid</Heading>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Who is your public health role model, and what about their work inspires you?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Sabina Rashid:</span> I chose to remain in Bangladesh to live and work because I was deeply inspired by the late Fazle Hasan Abed, the founder of BRAC, and by others such as Shireen Huq of Naripokkho, who devoted her life to women&apos;s empowerment and the pursuit of gender justice. Over the years, through my work at the school and across Bangladesh, I have also drawn inspiration from many people, senior and junior colleagues, peers, students and graduates, and communities living in informal settlements. Above all, I am inspired by those who show integrity and humility, and who have the ability to treat everyone with respect, regardless of background, religion, age, gender, or nationality.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What book are you currently reading? What is one key insight you have taken from it?
          </h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Sabina Rashid:</span> I recently purchased two books, Mother Mary Comes to Me by Arundhati Roy and Chimamanda Ngozi Adichie&apos;s latest, Dream Counts. I also enjoy reading works by religious scholars. The books I like to read offer insights into human nature, behavior, and relationships, areas that continually spark my curiosity. In public health, our work is fundamentally people-centred, making an understanding of human interactions essential. Trust is central to this work, and genuinely understanding communities is critically important.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">Q. Do you have a personal motto or mantra you live by?</h2>
          <p className="mt-2 leading-relaxed text-justify">
            <span className="font-bold">Sabina Rashid:</span> Never stop learning!
          </p>
        </div>

        <p className="text-[#001844] text-2xl mt-4 leading-relaxed text-center font-semibold bg-yellow-200 p-2 rounded-md">
          Interview conducted by{" "}
          <Link href="/sizear" className="text-blue-700 font-bold hover:underline">
            Monaemul Islam Sizear
          </Link>
        </p>
      </div>



      <BioOfSabinaFaizRashid />

      <div className="flex justify-center my-8">
        {(() => {
          const currentSlug = "in-conversation-with-dr-sabina-faiz-rashid";
          const idx = interviewOrder.findIndex((b) => b.slug === currentSlug);
          const next = interviewOrder[(idx + 1) % interviewOrder.length];
          return (
            <Link href={`/interview/${next.slug}`} className="mt-4 font-bold text-xl bg-[#FFCE00] text-black px-4 py-2 hover:text-white hover:bg-[#2D8CBB]   transition ease-in-out duration-200">
              Next Interview
            </Link>
          );
        })()}
      </div>
    </div>
  );
};

export default SabinaInterview;
