import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import SocialShare from "@/components/Shared/Social/SocialShare";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer/Footer";
import GiftButton from "@/components/Shared/Social/GiftButton";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "HSM - Health Systems Matter",
  description:
    "Health Systems Matter (HSM) is a knowledge platform that covers global health issues. HSM empowers professionals by providing resources, insights, career opportunities, and news. It serves as a hub for staying informed and confident in the ever eveloving global health industry, where knowledge matters.",
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

        {children}
        <Toaster position="top-center" />
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-KM73X9BBKR" />
    </html>
  );
}
