"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import SizearImage from "@/public/images/sizear/contact-section.jpg";
import Image from "next/image";
import Link from "next/link";

export default function ContactSection() {
  return (
    <div className="py-24 pt-0 bg-gradient-to-r bg-[#CDEDEC] px-16 rounded-md shadow-sm">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-3/4">
          <h3 className="text-2xl md:text-2xl font-bold  pt-16 underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#001844]">
            Connect and Contact
          </h3>

          <p className="text-black text-[18px] max-w-6xl mx-auto mb-8 mt-4">
            You can connect with me on LinkedIn or Facebook.
          </p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex gap-4 items-center justify-center"
          >
            <a
              href="https://www.linkedin.com/in/monaemulsizear/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg font-medium text-blue-700 hover:text-blue-900 transition-all duration-300"
            >
              <FaLinkedinIn size={24} className="text-blue-600" /> LinkedIn
            </a>
            <a
              href="https://www.facebook.com/monaemul.sizear"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg font-medium text-blue-700 hover:text-blue-900 transition-all duration-300"
            >
              <FaFacebook size={24} className="text-blue-600" /> Facebook
            </a>
          </motion.div>

          <p className="text-black text-[18px] max-w-6xl mx-auto mb-8 mt-4">
            Feel free to reach out via email.
          </p>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 flex flex-col gap-4 items-center"
          >
            <Link href="mailto:sizear.monaemul@gmail.com">
              <p className="flex items-center gap-3 text-lg text-blue-700 text-medium underline">
                <Mail size={24} className="text-blue-500" />{" "}
                sizear.monaemul@gmail.com
              </p>
            </Link>
          </motion.div>
        </div>

        <div>
          <Image
            src={SizearImage}
            alt="Sizear"
            width={200}
            height={200}
            className="rounded-full mt-4 md:mt-20 md:mr-24 size-48 object-cover border-4 border-blue-700"
          />
        </div>
      </div>
    </div>
  );
}
