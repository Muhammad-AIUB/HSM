import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import YouTubeImage from "@/public/images/youtube/youtube.webp";

const Youtube = () => {
  return (
    <section
      className="bg-[#beceeb] flex items-center justify-center"
      id="youtube"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-16 py-16">
        <div className="flex flex-col md:flex-row gap-5 items-center w-full px-4 md:px-12">
          <div className="flex gap-4 items-center">
            <Link
              href="/youtube"
              className="text-[30px] font-[1000] text-[#001844] whitespace-nowrap"
            >
              <h2 className="text-center sm:text-left font-[700]">YOUTUBE</h2>
            </Link>
            <Separator
              orientation="vertical"
              className="h-24 w-1 bg-[#FFCE00] hidden md:block"
            />
          </div>

          <p className="text-lg sm:text-[20px] text-[#001844] text-justify px-4">
            Health Systems Matter plans to launch a YouTube channel dedicated to
            exploring global health system issues and documenting expert
            knowledge through interviews. This initiative is currently in the
            planning phase and is scheduled for last quarter of this year. To
            stay informed about the channel&apos;s launch, please remain engaged
            with the site. Subscribe to our newsletter and follow our social
            media pages to receive updates.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex justify-center items-center max-w-2xl mx-auto mt-4 px-8">
          <Image
            src={YouTubeImage}
            alt="YouTube Channel"
            className="w-full h-96 rounded-sm shadow-lg border bg-[#48AFDF] p-2"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Youtube;
