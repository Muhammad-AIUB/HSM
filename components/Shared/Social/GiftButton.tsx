import { Gift } from "lucide-react";
import Link from "next/link";

const GiftButton = () => {
    return (
        <Link
            href="/gift-for-u"
            className="fixed z-50 top-1/2 -left-0.5 transform -translate-y-1/2 flex flex-col items-center cursor-pointer scale-90 group"
        >
            <span className="mb-0.5 text-xs text-white font-extrabold bg-destructive px-2 py-1 rounded-t">
                GIFT
            </span>
            <div className="relative py-2 px-0 border w-full border-[#001844] bg-[#FFCE00] hover:scale-105 transition-transform duration-200">
                {/* Tooltip */}
                <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#001844] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 shadow-lg">
                    🎁 Click to claim your gift!
                </div>

                {/* Animated Icon */}
                <div className="w-full flex justify-center items-center">
                    <Gift size={22} className="animate-blink-scale-color" />
                </div>
            </div>
        </Link>
    );
};

export default GiftButton;
