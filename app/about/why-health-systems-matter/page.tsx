"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import WhyHsmImg from "@/public/images/about/why-hsm.jpg";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";

const WhyHealthSystemsMatterPage = () => {
  const [openItems, setOpenItems] = useState<string[]>([""]);

  const questions = [
    {
      id: "item-1",
      question:
        "What inspired the establishment of Health Systems Matter, and what is its foundational background?",
      answer: (
        <>
          <p className="mb-2">
            <span className="font-bold">HSM:</span> Two key factors inspired me
            to create the HSM knowledge platform.
          </p>
          <p className="mb-2 text-[17px]">
            <span className="">First,</span> early in my career in public
            health, I faced significant challenges in accessing relevant
            documents on the Bangladesh health system. Understanding its
            complexities and gaining a comprehensive overview was difficult due
            to the absence of a centralized resource. This experience
            underscored the need for a dedicated platform that systematically
            compiles both local and global health system insights. Recognizing
            this gap, I envisioned HSM as a continuously updated resource hub,
            ensuring professionals have easy access to the latest records in a
            well-documented manner.
          </p>
          <p className="mb-2 text-[17px]">
            <span className="">Second,</span> over time, I gained access to a
            wealth of resources, empirical experiences, expert interactions, and
            participation in conferences and seminars. This exposure enriched my
            understanding and made me resourceful. I realized that developing a
            knowledge platform could benefit both emerging and established
            professionals by addressing their information needs.
          </p>
          <p>
            This realization led to the creation of HSM, with the goal of making
            health system knowledge more accessible and actionable.
          </p>
        </>
      ),
      bgColor: "bg-blue-50",
    },
    {
      id: "item-2",
      question:
        "What is the primary mission and long-term vision of the platform?",
      answer: (
        <p className="mb-2 text-[17px]">
          <span className="font-bold">HSM:</span> My primary goal is to help
          public health and development professionals become more knowledgeable
          and confident. I want this platform to be a reliable source of
          information. In the long run, I aim to sustain HSM and make it a
          widely recognized knowledge hub. My vision is for HSM to be a trusted
          resource for evidence-based insights and expertise in public health
          and development.
        </p>
      ),
      bgColor: "bg-green-50",
    },
    {
      id: "item-3",
      question:
        "How is this initiative funded, and what are its key financial resources?",
      answer: (
        <>
          <p className="mb-2 text-[17px]">
            <span className="font-bold">HSM:</span> Funding is always a
            challenge. So far, we have not received external funding, nor have
            we actively pursued it. My priority has been to first assess the
            platform's impact and usability. For now, HSM operates entirely
            through volunteer support of mine.
          </p>
          <p>
            There is an opportunity for individuals or organizations to{" "}
            <a
              className="underline text-blue-500 font-semibold"
              href="/support-hsm"
            >
              support
            </a>{" "}
            if they find this initiative valuable. We have ambitious plans and
            will explore funding opportunities in the future. However, we remain
            committed to continuing this work, regardless of financial
            constraints. That said, securing funding would enable us to scale
            and enhance the platform's reach and impact.
          </p>
        </>
      ),
      bgColor: "bg-purple-50",
    },
    {
      id: "item-4",
      question:
        "What are the strategic goals and future development plans for Health Systems Matter?",
      answer: (
        <p className="mb-2 text-[17px]">
          <span className="font-bold">HSM:</span> I aim to make HSM a valuable
          and reliable platform for global health professionals. To achieve
          this, we continuously adapt to user needs by providing top public
          health resources, event updates, and career opportunities. Regular
          updates ensure HSM remains relevant and impactful. Additionally, we
          seek to build a network of advocates of HSM who can help expand its
          reach and influence.
        </p>
      ),
      bgColor: "bg-amber-50",
    },
    {
      id: "item-5",
      question:
        "What have been your most significant experiences and insights gained through this initiative so far?",
      answer: (
        <>
          <p className="mb-2 text-[17px]">
            <span className="font-bold">HSM:</span> This is a tricky and tough
            question to answer, as my experience has been mixed—mostly positive,
            with a few less encouraging moments. However, I see value in all
            responses, as they offer valuable insights and appreciation. When I
            reach out to experts for technical contributions to HSM, they are
            generally welcoming and supportive, not just of me but of the
            platform's purpose. Many, even those I have never met personally,
            have responded positively, offering their commitment and expertise.
          </p>
          <p>
            My key takeaway is that meaningful initiatives attract strong
            support, even if some remain skeptical. I believe that, over time,
            they too will recognize the value of this work. I still believe,
            knowledge remains a powerful tool, and the world needs informed
            professionals to tackle complex public health challenges.
          </p>
        </>
      ),
      bgColor: "bg-rose-50",
    },
  ];

  return (
    <div className="bg-white pb-16">
      <SectionTitleWithoutSub title="Why Health Systems Matter?" />

      <div className="mt-8 max-w-7xl flex flex-col-reverse md:flex-row items-start justify-between mx-auto px-12 pb-8 gap-y-5">
        <Accordion
          type="multiple"
          value={openItems}
          onValueChange={(value) => setOpenItems(value)}
          className="w-full md:w-[60%]"
        >
          {questions.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className={`mb-4 overflow-hidden shadow-none border-none ${item.bgColor} `}
            >
              <AccordionTrigger className="px-8 hover:no-underline hover:bg-opacity-80 text-left">
                <div className="flex items-start">
                  <span
                    className="text-xl font-semibold pr-8 text-[#001844] md:text-justify"
                    style={{ fontSize: "18px" }}
                  >
                    {item.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8  text-black text-lg text-justify">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="shrink-0 w-full md:w-1/3">
          <Image
            src={WhyHsmImg.src}
            alt="Activities and Approach"
            width={1000}
            height={300}
            className="w-full sm:w-[500px] md:w-[600px] h-auto object-cover mix-blend-darken mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyHealthSystemsMatterPage;
