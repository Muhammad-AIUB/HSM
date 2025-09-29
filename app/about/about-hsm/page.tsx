import Image from "next/image";

import AboutHSMImage from "@/public/images/about/about-hsm.jpg";

import NextButton from "@/components/Shared/NextButton";
import Link from "next/link";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";

const AboutHSM = () => {
  return (
    <div>
      {/* Page Title Section */}
      <SectionTitleWithoutSub title="About HSM" />

      <div className="bg-gradient-to-r from-[#00DFC0]/10 via-white to-[#00DFC0]/10 pb-16">
        <div className="max-w-screen-xl mx-auto px-12 md:px-16">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row-reverse items-start gap-8 ">
            {/* Image Section */}
            <div className="w-full md:w-1/2 self-start pt-5 md:pt-16 md:pl-16">
              <Image
                src={AboutHSMImage.src}
                alt="About HSM"
                width={1000}
                height={300}
                className="w-full h-auto object-cover mix-blend-darken"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-6 text-gray-700 md:py-16 text-justify">
              <p>
                <strong>"Information is power."</strong>
              </p>
              <p>
                <strong>"Evidence lies at the heart of public health policy."</strong>
              </p>
              <p>
                Health Systems Matter (HSM) is a knowledge platform dedicated to global health. We provide professionals with resources on health systems, public health events, and career opportunities. HSM offers independent, evidence-based updates on key global health issues and professional development.
              </p>

              <div className="space-y-4">
                <p>
                  <strong>
                    The HSM site is useful for two primary reasons:
                  </strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Comprehensive content:</strong> Covers key global health issues and professional opportunities.
                  </li>
                  <li>
                    <strong>Consistent updates:</strong> Delivers daily updates on global health through social media, ensuring timely information
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <p className="">
              Health Systems Matter launched on social media (
              <a
                href="https://www.linkedin.com/company/104141138/admin/dashboard/"
                className="text-blue-600 underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              ,{" "}
              <a
                href="https://www.facebook.com/profile.php?id=61564171250656"
                className="text-blue-600 underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              ) on August 9, 2024. The website went live on May 1, 2025, to systematically preserve and organize all resources.
            </p>

            <p className=" mt-4">
              The site is maintained by{" "}
              <Link
                href="/sizear"
                className="text-blue-600 underline hover:text-blue-800"
                rel="noopener noreferrer"
              >
                Monaemul Islam Sizear
              </Link>
              , aiming to support knowledge sharing and career growth in global health.
            </p>
          </div>

          <div className="mt-14">
            <NextButton
              href="/about/vision-and-mission"
              text="Next"
              className="bg-[#00DFC0] text-[#001844]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHSM;
