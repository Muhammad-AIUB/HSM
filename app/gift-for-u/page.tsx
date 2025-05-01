/* eslint-disable react/no-unescaped-entities */
import knowledgeImage from "@/public/images/knowledge-gift/knowledgegift.webp";
import GiftForm from "@/components/gift-form";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import { Suspense } from "react";

export const metadata = {
  title: "Gift For U | Health Systems Matter",
  description: "Request your Knowledge Gift Box from Health Systems Matter",
};

export default function GiftForU() {
  return (
    <div>
      <SectionTitleWithoutSub title="Knowledge Gift" />

      <div className="max-w-screen-lg py-8 mx-auto text-justify px-12 text-lg">
        Health Systems Matter (HSM) is a knowledge platform driven by the
        principle — "Know Deeper, Do Better." In this spirit, we&apos;ve created
        a Knowledge Gift for our followers — a resource to support your public
        health and development journey. <br />
        <br /> Simply enter the information below and subscribe to HSM
        Newsletter to receive the Knowledge Gift in your email. <br />
        <br /> Don&apos;t worry, HSM won&apos;t clog your inbox. HSM sends a
        newsletter once a quarter.
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <section className="max-w-screen-lg mx-auto w-full px-4">
          <GiftForm image={knowledgeImage} />
        </section>
      </Suspense>

      <div className="max-w-screen-lg pb-16 text-center mx-auto py-8 px-4">
        <h3 className="text-xl mt-4">
          Follow <strong>Health Systems Matter</strong> on{" "}
          <a
            href="https://www.linkedin.com/company/104141138/admin/dashboard/" // Replace with actual LinkedIn URL
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          and{" "}
          <a
            href="https://www.facebook.com/profile.php?id=61564171250656" // Replace with actual Facebook URL
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>{" "}
          for the latest resources and updates.
        </h3>
      </div>
    </div>
  );
}
