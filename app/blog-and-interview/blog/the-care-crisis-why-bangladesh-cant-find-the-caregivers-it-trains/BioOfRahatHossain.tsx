"use client";

const BioOfRahatHossain = () => {
  return (
    <div className="max-w-screen-lg mx-auto pt-16 py-12 relative bg-[#6BCBD5]/50 px-8 md:px-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center">
        About Rahat Hossain
        <span className="block w-24 h-1 bg-[#FFCE00] mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="overflow-hidden relative max-w-screen-md mx-auto">
        <div className="py-6 font-medium">
          <p className="text-gray-700 mt-2 leading-relaxed text-justify">
            Rahat Hossain is a healthcare entrepreneur and ecosystem builder
            shaping the future of the care economy in Bangladesh. He has built
            and scaled ventures across home healthcare, emergency response, and
            workforce development, including co-founding AYAT Care and
            CriticaLink.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed text-center">
            Connect:{" "}
            <a
              href="mailto:rahathossain.ime@gmail.com"
              className="text-[#01748D] underline underline-offset-4"
            >
              rahathossain.ime@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioOfRahatHossain;
