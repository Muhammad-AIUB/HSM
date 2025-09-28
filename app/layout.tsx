import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import SocialShare from "@/components/Shared/Social/SocialShare";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer/Footer";
import GiftButton from "@/components/Shared/Social/GiftButton";
import { Toaster } from "@/components/ui/sonner";
// import DelayedGift from "@/components/DelayedGift";

export const metadata: Metadata = {
    title: "HSM - Health Systems Matter",
    description:
        "Health Systems Matter (HSM) is a knowledge platform dedicated to global health. We empower professionals with resources, insights, career opportunities, and news. Our platform helps you stay informed and confident in the ever-evolving global health landscape.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className="scroll-smooth" lang="en">
            <body className={`antialiased`}>
                <SocialShare />
                <GiftButton />
                <Navbar />
                {/* <DelayedGift /> */}
                {children}
                <Toaster position="top-center" />
                <Footer />
            </body>
            <GoogleAnalytics gaId="G-KM73X9BBKR" />
        </html>
    );
}
