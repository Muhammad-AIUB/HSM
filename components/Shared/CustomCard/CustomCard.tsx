import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CardProps {
  title: string;
  description: string;
  image: StaticImageData | string;
  link: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <Link href={link}>
      <motion.div
        className="relative w-full h-96 overflow-hidden cursor-pointer group"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 transition-opacity duration-300" />
        <div className="absolute bottom-0 p-6 bg-[#001844]/90 text-white transition-all duration-500 h-36 group-hover:h-full w-full">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p
            className={`text-base mt-4 text-gray-300 transition-opacity duration-300 text-justify opacity-0 group-hover:opacity-100`}
          >
            {description}
          </p>
          <div className="absolute bottom-4 right-4 flex items-center text-blue-400 hover:text-blue-300">
            <Button className="mt-auto text-base flex bg-[#FFCE00] text-black hover:text-white hover:bg-[#001844] hover:border hover:border-[#FEC53F]">
              Explore
              <ArrowRight className="size-4 hover:text-white" />
            </Button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
