import { Button } from "@/components/ui/button";
import Link from "next/link";

const Right = () => {
  return (
    <div className="z-[1000]  flex-col items-center justify-center gap-2  absolute right-4 top-4 hidden lg:flex">
      <Link href="/support-hsm" className="flex gap-2 w-[100px]">
        <Button
          size="sm"
          variant="secondary"
          className="bg-[#FFCE00] w-[100px] font-bold hover:bg-[#e6b00e]"
        >
          Support HSM
        </Button>
      </Link>
      <div className="mt-2">
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
  );
};

export default Right;
