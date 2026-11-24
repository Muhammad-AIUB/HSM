import Image from "next/image";

const BookChapterContributions = () => {
  return (
    <div>
      <h3 className="text-2xl md:text-2xl font-bold  pt-8 underline underline-offset-[6px] font-roboto text-[#113855] decoration-[#FFCE00]">
        Book Chapter Contributions
      </h3>

      <div className="pt-6 max-w-3xl mx-auto">
        <div className="bg-[#001844] text-white shadow-md rounded-md p-6 border-l-4 border-[#FFCE00] flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/3 h-72 overflow-hidden rounded-md">
            <Image
              src="/images/sizear/book-chapter/biennial-report-launch.webp"
              alt="Biennial Report 2025–2026 launch: Challenging Corruption: Strengthening Governance in Bangladesh’s Health Sector"
              width={900}
              height={1200}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="w-full md:w-2/3">
            <p className="text-white text-lg md:text-xl">
              <span className="font-semibold text-[#FFCE00]">Book: </span>
              Challenging Corruption: Strengthening Governance in
              Bangladesh&rsquo;s Health Sector
            </p>
            <p className="text-white text-lg md:text-xl pt-3">
              <span className="font-semibold text-[#FFCE00]">Chapter: </span>
              <a
                href="https://app.bangladeshhealthwatch.org/docs/reports_pdf/bhw-reports/challenging-corruption-strengthening-governance-in-bangladeshs-health-sector-1794736106.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-4 hover:text-[#FFCE00] transition duration-200"
              >
                Corruption in Health Procurement and Supply Chains
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookChapterContributions;
