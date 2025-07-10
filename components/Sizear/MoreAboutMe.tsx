const MoreAboutMe = () => {
  return (
    <div className=" bg-[#E1F0DB]">
      <div className="max-w-screen-xl mx-auto px-16 py-12">
        <h2 className="text-3xl font-[700] w-72 mx-auto py-3  text-center text-white bg-[#001844] ">
          More About Me
        </h2>

        {/* Career Profile/Professional Endeavors  */}
        <div className="">
          <h3 className="text-2xl md:text-2xl font-bold  pt-12 underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#FFCE00]">
            Career Profile
          </h3>

          <p className=" leading-relaxed text-justify pt-4 text-[17px]">
            I am a public health professional and development practitioner with over 12 years of progressive experience in program design, management, and implementation research across both national and international platforms. Currently, I serve as Program Manager at VisionSpring, a global entity, where I lead a global initiative in Bangladesh that focuses on improving eye health and supporting livelihoods.
          </p>
          <p className=" leading-relaxed text-justify pt-4 text-[17px]">
            My professional interests lie at the intersection of health systems strengthening, public financial management, policy analysis, entrepreneurship, public-private partnerships, health-seeking behavior, systems thinking, and human-centered design. I am particularly focused on leveraging these disciplines to inform and shape effective health policies that address the needs of populations in complex and rapidly urbanizing settings.
          </p>
          <p className=" leading-relaxed text-justify pt-4 text-[17px]">
            I firmly believe that health interventions, in isolation, are insufficient to achieve lasting transformation. As an advocate for holistic, system-based approaches, I actively engage in public health activism. My initiative, Health Systems Matter, reflects my commitment to contributing as a confident global health system professional while also supporting and complementing the growth of emerging professionals in the field. In parallel, I serve as the Executive Director of the Public Health Foundation of Bangladesh (PHFBD), a leading institution dedicated to advancing evidence-informed public health practices and fostering national dialogue on emerging health issues.
          </p>
          <p className=" leading-relaxed text-justify pt-4 text-[17px]">
            Through my multi-faceted roles, I strive to leverage evidence, systems thinking, and cross-sectoral collaboration to address pressing health challenges and co-create sustainable, people-centered solutions that improve lives and leave a lasting societal impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreAboutMe;
