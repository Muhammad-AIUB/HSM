"use client";
import { Facebook, LinkIcon, Mails } from "lucide-react";
import Link from "next/link";

import { FaLinkedinIn } from "react-icons/fa";

const SocialShare = () => {
  return (
    <div className="fixed z-50 top-1/2 right-0 transform -translate-y-1/2 flex flex-col">
      {/* LinkedIn Share */}
      <Link
        href="https://www.linkedin.com/company/104141138/admin/dashboard/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-white border border-black hover:bg-[#FFCE00] transition"
      >
        <FaLinkedinIn size={16} />
      </Link>
      {/* Facebook Share */}
      <Link
        href="https://www.facebook.com/profile.php?id=61564171250656"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-white border-x border-b border-black  hover:bg-[#FFCE00] transition"
      >
        <Facebook size={16} />
      </Link>
      <Link
        href="mailto:healthsystemsmatter@gmail.com"
        className="p-2 bg-white border-x border-b border-black   hover:bg-[#FFCE00]  transition"
      >
        <Mails size={16} />
      </Link>
      {/* Copy URL */}
      <button
        onClick={() => navigator.clipboard.writeText("healthsystemsmatter.com")}
        className="p-2 bg-white border-x border-b border-black  hover:bg-[#FFCE00] transition"
      >
        <LinkIcon size={16} className="transform -rotate-45 " />
      </button>
    </div>
  );
};

export default SocialShare;
