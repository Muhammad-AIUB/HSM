import Image from "next/image";
import ApproachImage from "@/public/images/about/activities-approach.png";
import NextButton from "@/components/Shared/NextButton";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";

const ActivitiesAndApproachPage = () => {
  return (
    <div>
      <SectionTitleWithoutSub title="Activities and Approach" />

      <div className="bg-[#DCF0F9] py-8 pb-12 md:py-16">
        <div className="max-w-screen-lg mx-auto px-12 md:px-16">
          <div className="flex flex-col-reverse md:flex-row-reverse items-start gap-4">
            {/* Content Section (Left) */}
            <div className="w-full md:w-1/2 space-y-6 text-gray-700 text-justify">
              {/* Activities & Approach Section */}
              <div className="space-y-4 text-justify">
                <h2 className=" font-semibold text-gray-800">
                  Aligned with Health Systems Matter's vision, we focus on the following activities:
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Showcase key health-systems and global-health documents daily.
                  </li>
                  <li>
                    Stimulate demand for high-impact evidence and reports.
                  </li>
                  <li>
                    Disseminate major public health events and milestones.
                  </li>
                  <li>
                    Highlight resources, pages and events related to health systems and global health.
                  </li>
                  <li>
                    Feature short profiles of professionals strengthening health systems.
                  </li>
                  <li>
                    Spotlight organizations working on public health agendas.
                  </li>
                </ul>
              </div>
            </div>

            {/* Image Section (Right) */}
            <div className="w-full md:w-1/2 self-start">
              <Image
                src={ApproachImage.src}
                alt="Activities and Approach"
                width={1000}
                height={300}
                className="w-96 h-auto object-cover mix-blend-darken"
              />
            </div>
          </div>
          <div className="max-w-screen-lg mx-auto pt-16 space-y-4">
            <h3 className="text-gray-800 font-semibold text-lg">How we work</h3>
            <p className="text-gray-800 text-justify">
              We curate and document high-quality resources and use creative social media to extend reach. We always credit original sources and partner organizations. Our editorial approach prioritizes topics and evidence over organizational promotion. We follow clear editorial standards: verification, attribution and balanced presentation — and avoid political bias.
            </p>
          </div>
        </div>

        <NextButton
          href="/about/why-health-systems-matter"
          text="Next"
          className="bg-[#00DFC0] text-black mt-8"
        />
      </div>
    </div>
  );
};

export default ActivitiesAndApproachPage;
