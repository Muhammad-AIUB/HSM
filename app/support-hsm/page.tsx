"use client";

import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import { motion } from "framer-motion";
import { Gift, Globe } from "lucide-react";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function SupportHSM() {
  return (
    <>
      <SectionTitleWithoutSub title="Support and Collaborate" />

      <div className="bg-blue-100 overflow-hidden px-12">
        <div className="border-t-2 pt-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold  text-[#001844] bg-cyan-300 px-2 w-28">
            Support
          </h2>
          <h3 className="text-blue-950 mt-3 text-xl font-bold">
            Support Health Systems Matter
          </h3>
          <p className="mt-1">
            At <span className="italic">Health Systems Matter</span>, we are
            committed to advancing public health through an impact- driven,
            volunteer-led knowledge platform. Your support—whether through
            sharing our work or making a financial contribution—plays a vital
            role in sustaining and expanding our efforts.
          </p>

          <h3 className=" mt-4 text-xl font-semibold text-red-600">
            Share Our Platform
          </h3>
          <p className="">
            Help amplify our message by sharing Health Systems Matter with peers
            and professionals who are passionate about public health.
          </p>

          <ul className="pl-4 md:pl-10 mt-4 space-y-3">
            <li className="flex items-center gap-2">
              <Globe
                className="mt-1 text-blue-700 text-xl size-8 shrink-0"
                size={18}
              />
              <div>
                <span className="font-bold">Website:</span>{" "}
                <a
                  href="https://healthsystemsmatter.com"
                  className="underline break-all text-blue-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  healthsystemsmatter.com
                </a>
              </div>
            </li>

            <li className="flex items-center gap-2">
              <FaLinkedin
                className="mt-1 text-blue-700 text-xl size-8 shrink-0"
                size={18}
              />
              <div>
                <span className="font-bold">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/company/104141138/admin/dashboard/"
                  className="underline break-all text-blue-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com/company/104141138/admin/dashboard/
                </a>
              </div>
            </li>

            <li className="flex items-center gap-2">
              <FaFacebook
                className="mt-1 text-blue-700 text-xl size-8 shrink-0"
                size={18}
              />
              <div>
                <span className="font-bold">Facebook:</span>{" "}
                <a
                  href="https://www.facebook.com/profile.php?id=61564171250656"
                  className="underline break-all text-blue-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/profile.php?id=61564171250656
                </a>
              </div>
            </li>
          </ul>

          <h3 className=" mt-4 text-xl font-semibold text-red-600">
            Make a Gift
          </h3>
          <p className="">
            Your generous contribution directly fuels the growth of this
            initiative, enabling us to continue curating and sharing knowledge
            on the most pressing global health challenges. <br />
            <br /> We are deeply grateful for your support and belief in our
            mission.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className=" bg-pink-50 p-6 rounded-lg shadow-md w-full max-w-md mx-auto mt-6"
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center justify-center gap-2">
              <Gift size={24} className="text-blue-600 text-justify" /> Make a
              Gift
            </h2>
            <p className=" text-justify text-sm mb-4">
              Your generosity contributes directly to the growth of this
              platform, empowering us to continue promoting knowledge on
              critical global health issues.
            </p>
            <div className="flex justify-center">
              <DonateDialog />
            </div>
          </motion.div>
          <p className="mt-6">
            We sincerely appreciate your support in driving positive change!
          </p>
        </div>
      </div>

      <div className="bg-blue-100 px-12">
        {" "}
        <div className="border-t-2 pt-2 pb-24 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mt-12 text-[#001844] bg-cyan-300 px-2 w-40">
            Collaborate
          </h2>
          <p className="mt-4">
            We Value Collaboration! At Health Systems Matter, we welcome
            partnerships that align with our mission and vision. If you find
            this platform relevant and see potential for collaboration, please
            don&apos;t hesitate to reach out to us through the{" "}
            <Link
              href="/contact/stay-connected"
              className="underline font-medium text-blue-500"
            >
              Stay Connected
            </Link>{" "}
            section. <br /> <br /> We&apos;ll get back to you promptly to
            explore your ideas and discuss how we can work together.
          </p>
        </div>
      </div>
    </>
  );
}

import BkashQRCode from "@/public/images/contact/bkash_qr.jpeg";
import Image from "next/image";

function DonateDialog() {
  return (
    <Dialog>
      <DialogTrigger className="">
        <div className="w-40 block bg-pink-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-pink-600 transition-all duration-300 shadow-sm mx-auto">
          Donate via Bkash
        </div>
      </DialogTrigger>
      <DialogContent className="z-[50000] p-4 max-h-[800px] max-w-[400px]">
        <DialogTitle />
        <DialogDescription />
        <div className="bg-cyan-100 p-4 rounded-md font-roboto text-justify">
          Hi there, <br />
          Thank you for your interest in supporting the growth of our platform.
          When making a contribution, please mention{" "}
          <span className="font-semibold">
            "Gift for Health Systems Matter"
          </span>{" "}
          in the reference section. <br />{" "}
          <span className="inline-block mt-2">Thank you once again!</span>
        </div>
        <div className="h-[500px] rounded-2xl overflow-hidden">
          <Image src={BkashQRCode} className="h-full object-contain" alt="" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
