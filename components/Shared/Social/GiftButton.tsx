import { Gift } from "lucide-react";
import Link from "next/link";

const GiftButton = () => {
  return (
    <Link
      href="/gift-for-u"
      className="fixed z-50 top-1/2 -left-0.5 transform -translate-y-1/2 flex flex-col items-center cursor-pointer scale-90"
    >
      <span className="mb-0.5 text-xs text-white font-extrabold  bg-destructive px-2 py-1 rounded-t ">
        GIFT
      </span>
      <button className="py-2 px-0 border w-full border-[#001844] hover:bg-[#FFCE00] transition bg-white">
        <Gift size={22} className="text-[#001844] w-full" />
      </button>
    </Link>
  );
};

export default GiftButton;
