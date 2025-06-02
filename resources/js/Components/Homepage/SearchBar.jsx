import { Input } from "@/components/ui/input";

export default function SearchBar() {
  return (
    <div className="relative ml-auto w-28 sm:w-40 md:w-48">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="11" cy="11" r="7" strokeWidth="2" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
        </svg>
      </span>
      <Input
        type="text"
        placeholder="Search"
        className="pl-10 pr-4 py-2 rounded-full bg-[#f7f7f7] w-full focus:outline-none"
      />
    </div>
  );
}