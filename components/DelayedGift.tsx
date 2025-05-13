"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const DelayedGiftModal = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 3000); // 30 seconds

        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="relative bg-white rounded-lg p-6 max-w-sm w-full shadow-lg animate-fade-in">
                {/* Close Button */}
                <button
                    onClick={() => setShow(false)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
                >
                    &times;
                </button>

                {/* Modal Content */}
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-[#001844] mb-4">
                        🎁 You've got a gift!
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Click below to claim your special surprise.
                    </p>
                    <Link
                        href="/gift-for-u"
                        className="inline-block bg-[#FFCE00] text-[#001844] px-4 py-2 rounded font-semibold hover:scale-105 transition-transform"
                    >
                        Claim Gift
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DelayedGiftModal;
