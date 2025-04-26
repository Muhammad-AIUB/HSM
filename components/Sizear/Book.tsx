"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaBook, FaLink, FaYoutube } from "react-icons/fa"; // Importing icons

import BookImg from "@/public/images/sizear/book/book.png";
import BookImg2 from "@/public/images/sizear/book/book-author.jpg";

const BookSection = () => {
  const bookDetails = {
    title: "অক্ষরবন্দি নেদারল্যান্ডস - নমাোয়েমুল্ ইসল্াম সসজার",
    author: "Monaemul Islam Sizear",
    bookLink: "https://www.rokomari.com/book/227395/akkhorbondi-netharlands",
    authorLink:
      "https://www.rokomari.com/book/author/85065/monaemul-islam-sizear",
    youtubeLink: "https://www.youtube.com/watch?v=lHh4jjgvW3M",
    imageUrl: BookImg,
  };

  return (
    <div className="bg-[#beceeb]">
      <div className="max-w-screen-xl mx-auto px-12 lg:px-16 py-12">
        <h3 className="text-2xl font-bold underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#ef4444] pb-6">
          Book
        </h3>

        <div className="pt-8">
          <h3 className="text-2xl md:text-2xl flex items-center font-bold text-gray-600 underline underline-offset-[6px] mb-8">
            <FaBook className="mr-2 text-xl" /> অক্ষরবন্দি নেদারল্যান্ডস -
            মোনায়েমুল ইসলাম সিজার
          </h3>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" max-w-4xl mx-auto flex md:gap-4 items-center justify-center flex-col md:flex-row"
          >
            {/* Book Image with link */}
            <div>
              <a
                href={bookDetails.bookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-all duration-300 "
              >
                <Image
                  src={bookDetails.imageUrl}
                  alt={bookDetails.title}
                  className="w-72 h-96 object-cover  mb-6 rounded-md shadow-sm  hover:border-r-4 hover:border-b-4 hover:border-blue-500  transition-all duration-100"
                  width={1000}
                  height={1000}
                />
              </a>
            </div>

            {/* Book and Author Links */}
            <div className="flex flex-col items-center space-y-6 bg-[#001844] p-6 rounded-md shadow-sm hover:border-r-4 hover:border-b-4 hover:border-blue-600 transition-all duration-100 mb-4">
              <div className="flex items-center space-x-4">
                <a
                  href={bookDetails.bookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-500 hover:text-blue-700 hover:underline text-lg font-semibold transition-all duration-300"
                >
                  <FaLink className="mr-2 text-xl" />
                  Buy the Book
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href={bookDetails.authorLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-500 hover:text-blue-700 hover:underline text-lg font-semibold transition-all duration-300"
                >
                  <FaBook className="mr-2 text-xl" />
                  Author Profile
                </a>
              </div>
              <div className="flex items-center space-x-4 ">
                <a
                  href={bookDetails.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-500 hover:text-blue-700 hover:underline text-lg font-semibold transition-all duration-300"
                >
                  <div className="flex items-center justify-center">
                    <FaYoutube className="mr-2 text-xl" />
                    Watch on YouTube
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg px-4 pt-4">
              {" "}
              <a
                href={bookDetails.bookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-all duration-300 "
              >
                <Image
                  src={BookImg2}
                  alt={bookDetails.title}
                  className="w-72 h-96 object-cover  mb-6 rounded-md shadow-sm  hover:border-r-4 hover:border-b-4 hover:border-blue-500  transition-all duration-100"
                  width={1000}
                  height={1000}
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookSection;
