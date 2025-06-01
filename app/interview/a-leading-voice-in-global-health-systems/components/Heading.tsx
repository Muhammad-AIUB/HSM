export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-[24px] font-semibold text-[#BE123C] underline underline-offset-4 decoration-[#FCA5A5] decoration-4 mb-4 flex items-center gap-3 transition-all duration-300 hover:text-[#9F1239]">
      <span>{children}</span>
    </h2>
  );
}
