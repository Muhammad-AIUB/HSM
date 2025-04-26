import Link from "next/link";
import YouTubePageImage from "@/public/images/youtube/Youtube-page-image.jpg";
import Image from "next/image";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
const YoutubePage = () => {
  return (
    <div className="pb-24 bg-blue-100">
      {/* Page Title Section */}
      <SectionTitleWithoutSub title="YouTube" />

      <div className="max-w-screen-xl mx-auto py-8 px-16">
        <p className="text-lg text-[#001844] text-justify">
          Health Systems Matter is set to launch a YouTube channel dedicated to
          exploring global health system challenges and capturing expert
          insights through in-depth interviews. Currently in the planning phase,
          the initiative is scheduled to go live in the last quarter of this
          year.
        </p>
        <p className="text-lg text-[#001844] text-justify mt-4">
          Stay connected for updates on the official launch. Subscribe to our{" "}
          <Link href="/subscribe" className="underline text-blue-500">
            newsletter
          </Link>{" "}
          and follow us on social media to be the first to know when the channel
          goes live!
        </p>
      </div>

      <div className="mx-auto max-w-2xl px-12">
        <Image
          src={YouTubePageImage.src}
          alt="a microphone"
          width={YouTubePageImage.width}
          height={YouTubePageImage.height}
          className="border shadow-md bg-yellow-100 p-2"
        />
      </div>
    </div>
  );
};

export default YoutubePage;
