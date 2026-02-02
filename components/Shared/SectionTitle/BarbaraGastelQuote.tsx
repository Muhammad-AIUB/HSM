import Image from "next/image";
import { LinkedInLogo } from "@/components/Shared/LinkedInLogo";
// import BarbaraGastelImg from "@/public/images/blog-interview/interview/barbara-gastel-clean.jpg";

export default function BarbaraGastelQuote() {
  return (
    <section className="relative w-full bg-white">
      <div className="bg-[#001844] py-10 px-12 sm:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
          {/* Circular Image */}
          <div className="w-56 h-56 shrink-0 rounded-full overflow-hidden ">
            <Image
              src="/images/blog-interview/interview/Headshot_Barbara Gastel_June 2022.jpg"
              alt="Prof. Barbara Gastel"
              width={500}
              height={500}
              className="object-cover w-full h-full object-left"
            />
          </div>

          <div className="bg-[#FFCE00] text-black p-4 sm:p-6 rounded-md shadow-md max-w-3xl">
            <p className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-4">
              — Prof. Barbara Gastel, Texas A&M University{" "}
              <a
                href="https://www.linkedin.com/in/barbaragastel/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <LinkedInLogo size={24} />
              </a>
            </p>

            <p className="text-[30px] font-base leading-10 md:text-justify">
              "Health writing remains a viable career. Artificial intelligence, as a tool, may help health writers work more efficiently and may relieve health writers of some routine tasks. However, good health writing requires considerable creativity, judgment, and fact-checking."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
