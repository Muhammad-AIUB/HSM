import HSMLogo from "@/public/images/shared/hsm-logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DeveloperLogo from "@/public/images/shared/at-taqwa-logo.jpeg";
import NewsletterForm from "@/components/NewsLetterSignup/NewsLetterSignup";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Footer = () => {
  return (
    <footer className="py-10 pb-4 pt-16 bg-[#001844] text-white px-10">
      <NewsletterForm />
      <div className="max-w-[1200px] mx-auto mt-8">
        {/* Horizontal line with Back to Top button aligned right */}
        <ScrollToTop />

        <div className="grid grid-cols-1 gap-8 px-4 mx-auto max-w-7xl md:grid-cols-3 ">
          {/* First Grid */}
          <div className="flex flex-col items-center justify-center">
            <Image src={HSMLogo} alt="Logo" className="mb-6 w-80" />
            <p className="pb-4 md:pb-10  text-[15px] text-center">
              Founded in 2024, HSM is a career development platform for public
              health professionals around the world.
            </p>
            <p className="font-bold text-[15px] text-center">
              Health Systems Matter
            </p>
            <p className="text-center  text-[15px]">Bangladesh</p>
          </div>

          {/* Second Grid */}
          <div className="flex flex-col text-sm md:text-xs">
            <ul className="space-y-2 md:ps-28 text-center md:text-left">
              <li>
                <Link href="/about" className="hover:underline">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:underline">
                  RESOURCES
                </Link>
              </li>
              <li>
                <Link href="/bookmarks" className="hover:underline">
                  BOOKMARKS
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:underline">
                  NEWS
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="hover:underline">
                  NEWSLETTER
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  BLOG
                </Link>
              </li>
              <li>
                <Link href="/interview" className="hover:underline">
                  INTERVIEW
                </Link>
              </li>
              <li>
                <Link href="/youtube" className="hover:underline">
                  YOUTUBE
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:underline">
                  TESTIMONIAL
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Last Grid */}
          <div className="flex flex-col items-center justify-center -mt-4">
            <blockquote className="mb-6 italic text-[#FFCE00] text-center text-lg">
              “Believe work can be better. <br /> Know deeper. Do Better.”
            </blockquote>
            <p className="font-semibold text-center mt-4">
              Scope of Collaboration and Support
            </p>

            <div className="flex space-x-2 scale-125">
              <div className="flex gap-2 mt-3 w-[100px]">
                <Link href="/support-hsm">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-[#FFCE00] w-[100px] font-bold hover:bg-[#e6b00e]"
                  >
                    Support HSM
                  </Button>
                </Link>
              </div>
              <div>
                <Link href="/subscribe">
                  <Button
                    className="mt-3 px-4 font-bold w-[100px]"
                    variant="destructive"
                    size="sm"
                  >
                    Subscribe
                  </Button>
                </Link>
              </div>
            </div>

            <a
              href="mailto:healthsystemsmatter@gmail.com"
              className="p-2 mt-2 transition underline"
            >
              healthsystemsmatter@gmail.com
            </a>
          </div>
        </div>

        {/* Improved Copyright Section */}
        <div className="pt-4 mt-6 text- border-t border-gray-400"></div>

        <div className="flex flex-col md:flex-row justify-between font-roboto px-2">
          <div className="hidden md:block">
            <p className="text-left mb-1 text-sm">Developed By</p>
            <div className="flex justify-end gap-4">
              <Link href="https://muhammad-potfolio-51k5.vercel.app/">
                <Image
                  src={DeveloperLogo}
                  alt="Exhort Logo"
                  width={90}
                  height={60}
                  className=""
                />
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm text-center">
              &copy; {new Date().getFullYear()} Monaemul Islam Sizear. All
              rights reserved. <br />
              <Link
                href="/privacy-policy-and-terms-of-use"
                className="font-bold underline text-blue-500"
              >
                Privacy Policy and Terms of use.
              </Link>
            </p>
          </div>

          <div className="md:hidden">
            <p className="text-center  mt-6 mb-1 text-sm">Developed By</p>
            <div className="flex justify-center gap-4">
              <Link href="https://muhammad-potfolio-51k5.vercel.app/">
                <Image
                  src={DeveloperLogo}
                  alt="Exhort Logo"
                  width={120}
                  height={60}
                  className=""
                />
              </Link>
            </div>
          </div>

          <div>
            <p className="mb-1 text-sm text-center md:text-left mt-4 md:mt-0">
              Let&apos;s Connect with Developer{" "}
            </p>
            <div className="bg-gradient-to-r from-[#000040] to-[#000014] p-3 py-2 flex gap-2 items-center w-60 mx-auto">
              <div className="">
                <a href="mailto:" className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="30"
                    height="30"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <g>
                      <g data-name="Layer 2">
                        <g data-name="01.mail">
                          <circle
                            cx="256"
                            cy="256"
                            r="256"
                            fill="#2196f3"
                            opacity="1"
                            data-original="#2196f3"
                          />
                          <g fill="#fff">
                            <path
                              d="M255.94 268.64 121 201.32v133.76a25.66 25.66 0 0 0 25.59 25.59h218.82A25.66 25.66 0 0 0 391 335.08V202.73z"
                              fill="#ffffff"
                              opacity="1"
                              data-original="#ffffff"
                            />
                            <path
                              d="M256.06 243.36 391 177.5v-.58a25.66 25.66 0 0 0-25.59-25.59H146.59A25.66 25.66 0 0 0 121 176z"
                              fill="#ffffff"
                              opacity="1"
                              data-original="#ffffff"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
              <div className="w-[1px] bg-white h-[30px]"></div>
              <div className="text-sm">
                <a href="mailto:mjubayer.aiub@gmail.com">
                  mjubayer.aiub@gmail.com
                </a>
              </div>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
