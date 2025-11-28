import Image from "next/image";
import Link from "next/link";

import { FaLinkedin } from "react-icons/fa";

import Heading from "../a-leading-voice-in-global-health-systems/components/Heading";

import BioOfJavedIqbal from "./BioOfJavedIqbal";

const ExploringGlobalHealthAndCancerResearch = () => {
  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10 pb-16">
      <div className="relative w-full  border-t-2 border-[#FFCE00]">
        <div className="bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 text-center md:px-16 flex-wrap gap-6 py-4">
            <h1
              className="text-2xl md:text-[30px] uppercase font-extrabold text-[#001844] leading-10"
              style={{ wordSpacing: "0.4rem" }}
            >
              Exploring Global Health and Cancer Research with{" "}
              <a
                href="https://www.linkedin.com/in/jabed-iqbal-45501919/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001844] underline font-extrabold bg-[#FFCE00] px-2 rounded-md"
              >
                Dr. Javed Iqbal
              </a>
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
                src="/images/blog-interview/interview/javed.jpeg"
                alt="Dr. Javed Iqbal"
                width={500}
                height={500}
                className="object-cover object-top w-full h-full"
              />
            </div>

            <div className="bg-[#FFCE00] max-w-5xl text-black p-4 sm:p-6 rounded-md shadow-md">
              <p className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-4">
                — Dr. Javed Iqbal – Global Health Academic and Cancer Researcher
                <a
                  href="https://www.linkedin.com/in/jabed-iqbal-45501919/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </p>

              <p className=" text-2xl md:text-[28px]  font-base leading-relaxed md:text-justify">
                "Working across three continents taught me that solutions must be contextually appropriate. This has shaped my approach to global health—it's not about transferring solutions but about understanding local challenges and creating sustainable and culturally appropriate interventions."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Content */}
      <div className="max-w-screen-md mx-auto px-12 py-8 bg-white ">
        {/* Global Health and Cancer Research start */}

        <Heading>Global Health and Cancer Research</Heading>

        {/* Question 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Could you briefly introduce yourself to our readers and share what drives your work in global health and medical research?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Javed Iqbal:</span> I am a Senior Consultant Pathologist at Singapore General Hospital and Associate Professor at Duke-NUS Medical School. My journey from Dhaka Medical College in Bangladesh to a practising pathologist in Singapore has given me a unique perspective on global health disparities. What drives my work is witnessing firsthand how access to advanced diagnostics can dramatically alter patient outcomes. Having worked across Bangladesh, the United States, and Singapore, I've seen the stark differences in healthcare systems. This motivates my current efforts through the SingHealth Duke-NUS Global Health Institute, particularly Project ABCD (Advancement of Bangladesh Cancer Diagnostics), where we aim to establish good clinical practices for molecular testing in Bangladesh's healthcare system.
          </p>
        </div>

        {/* Question 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What is your current role and area of focus within the health and research landscapes?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Javed Iqbal:</span> I serve as Senior Consultant Pathologist at Singapore General Hospital, where I've been since 2008, and as Associate Professor at Duke-NUS Medical School. I'm also the Vice Chair for Research in the Pathology Academic Clinical Programme and a faculty member of the SingHealth Duke-NUS Global Health Institute. My research focuses primarily on breast cancer biomarkers, particularly in triple-negative breast cancer (TNBC), and hematological malignancies. This involves studying immune response markers and hypoxia-related proteins that influence tumor progression and treatment response.
          </p>
        </div>

        {/* Question 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Your contributions to cancer research have been published in leading journals. What are the biggest challenges to making advanced cancer treatment more accessible in Bangladesh?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Javed Iqbal:</span> The primary challenges are infrastructure, expertise, and standardization. While Bangladesh has talented clinicians, there's a critical gap in molecular diagnostics and companion testing capabilities that are essential for personalized cancer treatment. Many patients who could benefit from targeted therapies lack access to the biomarker testing needed to guide treatment decisions. This is why I've initiated Project ABCD—to establish standardized molecular testing protocols and build local capacity. Additionally, the cost of advanced diagnostics remains prohibitive for many patients, and there is very limited integration between pathology services and clinical oncology. We need systematic approaches to training, quality assurance, and creating sustainable diagnostic networks.
          </p>
        </div>

        {/* Question 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. If you had unlimited funding for one global health project, what would you do and why?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Javed Iqbal:</span> I would establish a comprehensive South Asian Cancer Diagnostics and Research Network. This would create centers of excellence across the region with state-of-the-art molecular pathology capabilities, standardized testing protocols, and robust training programs. Critically, it would include a telemedicine platform connecting pathologists across institutions for consultation and quality assurance, and a biobank for research into cancers prevalent in South Asian populations. The network could enable precision medicine, generate region-specific research data, train the next generation of pathologists, and improve access to advanced cancer diagnostics across economic boundaries.
          </p>
        </div>

        {/* Global Health and Cancer Research end */}

        {/* Career And Academic Journey start */}

        <Heading>Career And Academic Journey</Heading>

        {/* Question 5 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Can you walk us through your journey—from studying medicine at Dhaka University to becoming a global health consultant and academic based in Singapore?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Javed Iqbal:</span> My journey has been unconventional and circuitous but purposeful. After earning my MBBS from Dhaka Medical College in 1986, I worked as a Medical Officer at the Institute of Nuclear Medicine in Dhaka. However, my curiosity about disease mechanisms led me to pursue a PhD in molecular biology at Allegheny University in Philadelphia, where I studied mitochondrial gene transcription regulation. Following my doctorate, I completed postdoctoral fellowships in immunology and biochemistry, which gave me strong research foundations. The transition to pathology felt natural—it combined my molecular biology expertise with direct patient impact. I completed my residency at North Shore University Hospital in New York, followed by fellowships in oncologic pathology at Roswell Park Cancer Institute and hematopathology at Drexel University. In 2008, I joined Singapore General Hospital, attracted by its commitment to both clinical excellence and research. Singapore's multicultural environment and strong research infrastructure have allowed me to bridge clinical practice, academic teaching, and global health initiatives.
          </p>
        </div>

        {/* Question 6 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Across your PhD and various professional degrees earned around the world, what has been the most valuable lesson you've learned?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Javed Iqbal:</span> The most valuable lesson has been that expertise without context is incomplete. My molecular biology training taught me rigorous scientific methodology, but my clinical training showed me that diseases don't present in textbook fashion—they're influenced by genetics, environment, socioeconomics, and healthcare access. Working across three continents taught me that solutions must be contextually appropriate. A diagnostic approach that works in Singapore may not work in Bangladesh and may need substantial modification. This has shaped my approach to global health—it's not about transplanting or transferring solutions, but about understanding local challenges and at the same time creating sustainable and culturally appropriate interventions. Additionally, I've learned that mentorship and knowledge transfer are as important as personal achievement-or maybe more. The impact we have through training the next generation of physician scientists often exceeds our individual contributions.
          </p>
        </div>

        {/* Question 7 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. In your experience, what three core skills are essential for emerging researchers in global health?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Javed Iqbal:</span> First, interdisciplinary thinking—global health problems are rarely solved by a single discipline. You need to understand how basic science, clinical medicine, public health, economics, and policy intersect. Second, cultural humility and adaptability—the ability to listen, learn from local communities, and adapt your approach based on ground realities is crucial. What works in one setting may fail in another, and the best solutions often come from those closest to the problem. Third, rigorous methodology combined with practical problem-solving—you need strong research skills and the ability to generate high-quality evidence, but also the creativity or innovation to work within resource constraints and implement solutions that are sustainable. I will also add that perseverance is essential—meaningful change in global health requires long-term commitment, not just short-term projects.
          </p>
        </div>

        {/* Career And Academic Journey end */}

        {/* Get to Know Dr. Jabed Iqbal start */}

        <Heading>Get to Know Dr. Jabed Iqbal</Heading>

        {/* Question 8 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Who would you consider your global health hero, and how has their work influenced your own?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Javed Iqbal:</span> I don't follow a single global health hero. My motivation is more direct—it comes from patients I encountered early in my career in Bangladesh who lacked access to diagnostics that were routine elsewhere. Those disparities weren't abstract statistics; they were individual people whose outcomes could have been different.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            I've learned from many colleagues along the way—particularly pathologists working in resource-limited settings who've shown that sophisticated diagnostics are possible with appropriate training and systems. But my approach has been shaped more by ground realities than by any particular leader's model. Working across Bangladesh, the United States, and Singapore taught me that each context requires different solutions, and the best insights often come from local healthcare workers who understand their communities intimately.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            My work with Project ABCD reflects this philosophy: sustainable capacity-building that empowers local experts rather than creating dependency on external intervention. The goal isn't to be anyone's hero—it's to ensure that patients in Bangladesh have access to the same diagnostic capabilities available anywhere else in the world.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            Having said all of this, I have admired President Jimmy Carter for his post-presidency lifetime humanitarian efforts, his decency and commitment to human rights.
          </p>
        </div>

        {/* Question 9 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Could you tell us about a book you're currently reading and one key insight you've taken from it?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Javed Iqbal:</span> I am currently reading "An Uncertain Glory: India and Its Contradictions" by Amartya Sen and Jean Drèze. One insight that struck me is their argument that economic growth or prosperity does not automatically translate into health equity—it requires focused investment in equitable public services.
          </p>
          <p className=" mt-2 leading-relaxed text-justify">
            This mirrors exactly what I see with cancer diagnostics in Bangladesh. Economic progress, albeit fragmented, has not automatically created access to cancer testing. Sen and Drèze's concept of "capability expansion"—ensuring people have actual ability to access services, not just theoretical availability—has reinforced my approach with Project ABCD. It's not enough to introduce technology; we must ensure affordability, build local capacity, and integrate services into existing systems. Health equity requires systematic intervention, not just economic development.
          </p>
        </div>

        {/* Question 10 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Do you have plans to return to Bangladesh to contribute your expertise?
          </h2>
          <p className=" mt-2 leading-relaxed text-justify">
            <span className="font-bold">Javed Iqbal:</span> While Singapore remains my base, I'm actively contributing to Bangladesh through Project ABCD and other collaborations. My goal isn't necessarily permanent relocation but rather building sustainable capacity that doesn't depend on any single individual. I'm working to establish standardized molecular testing protocols, train local pathologists and laboratory personnel, and create quality assurance systems that will persist beyond my direct involvement. I regularly return to Bangladesh for workshops, consultations, and to strengthen institutional partnerships. I believe the most impactful contribution isn't transplanting expertise temporarily, but rather creating systems and training local experts who can drive continued improvement. That said, I remain open to opportunities where I can make the greatest impact—whether that's in Bangladesh, Singapore, or through regional collaborations.
          </p>
        </div>

        {/* Get to Know Dr. Jabed Iqbal end */}

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

      <BioOfJavedIqbal />
      <div className="flex justify-center my-8">
        <Link
          href="/interview/public-health-insights-1"
          className="mt-4 font-bold text-xl bg-[#FFCE00] text-black px-4 py-2 hover:text-white hover:bg-[#2D8CBB]   transition ease-in-out duration-200"
        >
          Next Interview
        </Link>
      </div>
    </div>
  );
};

export default ExploringGlobalHealthAndCancerResearch;

