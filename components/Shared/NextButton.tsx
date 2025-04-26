import Link from "next/link";
import { cn } from "@/lib/utils"; // Adjust the import path based on your project structure

export default function NextButton({
  href,
  text,
  className,
}: {
  href: string;
  text: string;
  className?: string;
}) {
  return (
    <div className="flex justify-center">
      <Link href={href}>
        <div
          className={cn(
            "my-8 font-bold text-xl bg-[#FFCE00] text-[#001844] px-4 py-2 hover:text-white hover:bg-[#2D8CBB]   transition ease-in-out duration-200",
            className && ""
          )}
        >
          {text}
        </div>
      </Link>
    </div>
  );
}
