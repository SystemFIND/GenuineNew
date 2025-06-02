import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";

export default function Navbar() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between px-2 sm:px-4 py-2 bg-[#E6E6E6]">
      <div className="flex items-center mb-2 sm:mb-0">
        <Link href="/">
          <img
            src="/images/Logo2.png"
            alt="GenuineNews Logo"
            className="h-7 sm:h-9 w-auto object-contain px-2 sm:px-7 m-2 cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">

        <Link href="/register">
          <Button variant="outline" className="w-full sm:w-auto bg-[#faf3ee] text-[#1a2233] font-serif text-sm sm:text-base md:text-lg px-6 sm:px-8">REGISTER</Button>
        </Link>

        <Link href="/login">
          <Button variant="outline" className="w-full sm:w-auto bg-[#faf3ee] text-[#1a2233] font-serif text-sm sm:text-base md:text-lg px-8 sm:px-10">LOGIN</Button>
        </Link>
      </div>
    </header>
  );
}