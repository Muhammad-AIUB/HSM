import Image from "next/image";

import { FaDownload, FaBookOpen } from "react-icons/fa";
import FallbackPdfImage from "@/public/fallback-pdf.jpg";

export const PdfCard = function ({
    pdf,
  }: {
    pdf: { title: string; filePath: string };
  }) {
    return (
      <div className=" rounded-lg shadow-md overflow-hidden border border-gray-200">
        <div className="w-[80px] h-[80px] mx-auto">
          <Image
            src={FallbackPdfImage.src}
            alt={pdf.title}
            width={80}
            height={80}
            className="object-contain w-full h-full"
          />
        </div>
  
        <div className="p-4 flex flex-col justify-between">
          <h3 className="font-semibold text-md text-gray-800 mb-4 h-9">
            {pdf.title}
          </h3>
          <div className="flex gap-2 mt-auto bg-white py-2">
            <a
              href={pdf.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-green-700 hover:bg-green-900 text-white text-sm px-4 py-2 rounded-md font-bold"
            >
              <FaBookOpen /> Read
            </a>
            <a
              href={pdf.filePath}
              download
              className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-4 py-2 rounded-md"
            >
              <FaDownload /> Download
            </a>
          </div>
        </div>
      </div>
    );
  };