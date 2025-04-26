import Image from "next/image";
import SizearImage from "@/public/images/shared/sizearImage.webp";
import Link from "next/link";

const Left = () => {
  return (
    <div className="flex items-center h-30 ps-1 sm:ps-4 absolute z-[1000] top-10 sm:top-5">
      <Link href="/sizear">
        <Image
          src={SizearImage}
          alt="sizear"
          className="relative z-10 rounded-full size-14 sm:size-20 h-auto border-2 border-[#FFCE00]"
          priority
          width={SizearImage.width}
          height={SizearImage.height}
        />
      </Link>
      <Link
        href="/sizear"
        className="text-[#FFCE00] font-bold text-sm sm:text-base -mt-8 ml-1 sm:ml-2 hidden sm:block"
      >
        SIZEAR
      </Link>
    </div>
  );
};

export default Left;
