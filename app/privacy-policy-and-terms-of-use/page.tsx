import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white">
      <SectionTitleWithoutSub title="Privacy Policy" />
      <div className="max-w-5xl mx-auto px-12 py-12 text-gray-800">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2 text-[#001844]">
              Owner and Data Controller
            </h2>
            <p>
              <strong>Name:</strong> Monaemul Islam Sizear <br />
              <strong>Location:</strong> Pallabi, Dhaka, Bangladesh <br />
              <strong>Contact Email:</strong>{" "}
              <a
                href="mailto:sizear.monaemul@gmail.com"
                className="text-blue-600 underline"
              >
                sizear.monaemul@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-[#001844]">
              Privacy Statement
            </h2>
            <p className="text-black">
              This website represents the views of{" "}
              <strong>Health Systems Matter</strong>, its founder, and guest
              contributors. It does not reflect the official opinions of any
              organizations affiliated with the owner or contributors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-[#001844]">
              Changes to this Privacy Policy
            </h2>
            <p className="text-black">
              The Owner reserves the right to make changes to this privacy
              policy at any time by notifying its users on this page and
              possibly within this website, social media, or via email.
            </p>
          </section>

          <section className="pb-10">
            <h2 className="text-xl font-semibold mb-2 text-[#001844]">
              Contact Us
            </h2>
            <p className="text-black">
              If you have any questions or comments regarding our privacy policy
              and practices, you may contact us at: <br />
              <strong>Health Systems Matter</strong> <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:healthsystemsmatter@gmail.com"
                className="text-blue-600 underline"
              >
                healthsystemsmatter@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
