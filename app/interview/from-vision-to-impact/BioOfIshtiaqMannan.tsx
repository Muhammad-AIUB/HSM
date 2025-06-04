"use client";

import { useState } from "react";

const BioOfIshtiaqMannan = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-screen-lg mx-auto pt-16 py-12 relative bg-[#6BCBD5]/50 px-12">
      {/* Title */}
      <h2
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer text-3xl md:text-4xl font-extrabold text-gray-800 text-center "
      >
        Bio of Ishtiaq Mannan, MBBS, MSc
        <span className="block w-24 h-1 bg-[#FFCE00] mx-auto mt-2 rounded-full"></span>
      </h2>

      <a
        href="https://www.jsi.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline font-bold flex justify-center mt-3 text-lg"
      >
        John Snow Research and Training Institute Inc., Arlington, VA.
      </a>

      <div className="overflow-hidden relative max-w-screen-md mx-auto">
        <div className="py-6 font-medium">
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            Dr. Ishtiaq Mannan is a distinguished public health leader with deep
            expertise in advancing sustainable health policies and systems in
            low-resource and fragile settings. He has been at the forefront of
            developing and implementing maternal and neonatal service models
            that have made significant impacts both globally and nationally. A
            passionate advocate for multi-sectoral systemic reforms at the
            primary care level, Dr. Mannan is committed to ending preventable
            maternal and child deaths by driving adaptive solutions that fortify
            health systems' resilience.
          </p>
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            Dr. Mannan's profound influence in shaping health policies is
            demonstrated through his pivotal role in the policy analysis groups
            for the Bangladesh Demographic and Health Survey (BDHS) and Maternal
            Mortality Surveys (BMMS). His contributions as a core member of this
            think tank have spurred effective policy dialogues and provided
            thought leadership in strengthening health systems. His strategic
            leadership in developing newborn and maternal health strategies for
            Bangladesh further underscores his dedication to improving health
            outcomes.
          </p>
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            Dr. Mannan is widely recognized for spearheading a national campaign
            aimed at curbing the alarming rise in unnecessary cesarean sections
            in Bangladesh. His efforts successfully garnered the attention of
            the judiciary and policymakers, prompting decisive action on this
            critical issue.
          </p>
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            An active voice in the public discourse, Dr. Mannan regularly
            contributes to national dailies on health system and policy matters.
            He has co-authored over{" "}
            <a
              href="https://scholar.google.com/citations?user=atrNDKgAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              40 peer-reviewed scientific articles
            </a>{" "}
            and numerous technical pieces and book chapters focused on newborn
            and maternal survival and health system challenges. As an adjunct
            research faculty member at Uppsala University’s Global Health
            Department in Sweden, he imparts his knowledge on health system
            challenges in fragile settings.
          </p>
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            Currently, Dr. Mannan leads a USAID-funded global initiative
            supporting health resilience across fragile states in Africa, the
            Middle East, and Latin America. Previously, he led a complex
            humanitarian operation in Iraq, providing critical support to Syrian
            refugees, internally displaced persons, and host communities. His
            extensive experience also includes senior roles at Save the
            Children, where he served as Chief of Party for large USAID grants
            (MCHIP/MCSP), Director of Health, Nutrition, and HIV/AIDS, Deputy
            Country Director of Program Operations, and Country Director in both
            Thailand and Iraq. He has also held key positions at Johns Hopkins
            University, the International Center for Diarrheal Disease Research,
            Bangladesh (icddr,b), Partners in Population and Development (PPD),
            and the United Nations Population Fund (UNFPA).
          </p>
          <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
            Dr. Mannan’s academic credentials are equally impressive, with
            studies in Medicine, Health Economics, and Health Systems Management
            from the University of Dhaka, the London School of Hygiene and
            Tropical Medicine, and Johns Hopkins University. His outstanding
            contributions to public health have been recognized with the
            prestigious NIH Fogarty Postdoctoral Fellowship, awarded for his
            engagement in groundbreaking research on newborn health in
            Bangladesh.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioOfIshtiaqMannan;
