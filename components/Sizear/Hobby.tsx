import SizearImg3 from "@/public/images/sizear/sizear3.jpg";
import SizearImg4 from "@/public/images/sizear/sizear4.jpg";
import Image from "next/image";

const Hobby = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-yellow-50 via-white to-yellow-50 rounded-md shadow-sm">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16">
        <h3 className="text-2xl md:text-2xl font-bold pt-4 underline underline-offset-[6px] font-roboto text-[#0070c0] decoration-[#FFCE00]">
          Leisure Time Activities:
        </h3>

        <div className="flex flex-col md:flex-row gap-6 items-center mt-4">
          <div className="w-full md:w-[300px] overflow-hidden flex-shrink-0">
            <Image
              src={SizearImg3}
              alt="Leisure Image 1"
              className="rounded-md object-cover"
              width={300}
              height={300}
            />
          </div>
          <p className="text-black text-[17px] leading-relaxed text-justify pt-4">
            I prioritize spending quality time with my family to create
            meaningful moments. Outside of these moments, I enjoy{" "}
            <strong>reading</strong> a wide range of books, including
            autobiographies, travel literature, columns, and novels.
            Additionally, my profession allows me to <strong>travel</strong>{" "}
            both nationally and internationally, often with my family. As an
            Anthropology student, I am naturally inclined to{" "}
            <strong> observe people and their behaviors</strong> to gain a
            deeper understanding of life. <strong>Writing non-fiction</strong>{" "}
            is both my passion and a cherished hobby.
          </p>
          <div className="w-full md:w-[300px] flex-shrink-0">
            <Image
              src={SizearImg4}
              alt="Leisure Image 2"
              className="rounded-md object-cover"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobby;
