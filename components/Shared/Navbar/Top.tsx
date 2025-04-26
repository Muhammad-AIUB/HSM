import Image from "next/image";
import HSMLogo from "@/public/images/shared/hsm-logo.png";
import Link from "next/link";

const Top = () => {
  return (
    <div className="bg-[#001844] relative flex items-center p-4 pt-2 h-16 justify-center">
      <Link href="/" className="">
        <Image
          className="w-[300px] sm:w-[400px]"
          src={HSMLogo}
          width={400}
          height={200}
          alt="hsm logo"
        />

        <div className="text-[#FFCE00] text-xs tracking-wider text-center -mt-2 ml-16 md:ml-32">
          Becoming a better global health leader
        </div>
      </Link>
    </div>
  );
};

export default Top;
