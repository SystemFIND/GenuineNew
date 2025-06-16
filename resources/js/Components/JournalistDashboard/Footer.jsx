import { Link } from "@inertiajs/react";

export default function Footer() {
  return (
    <footer className="bg-[#E6E6E6] dark:bg-gray-900 text-black dark:text-gray-200 mt-10 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-6 flex flex-col gap-4">
        {/* Logo GenuineNews */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <img
              src="/images/logo2.png"
              alt="GenuineNews Logo"
              className="h-8 sm:h-10 w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Menu Kategori GenuineNews */}
        <nav className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
          <a href="#" className="hover:underline">Politik</a>
          <a href="#" className="hover:underline">Ekonomi</a>
          <a href="#" className="hover:underline">Teknologi</a>
          <a href="#" className="hover:underline">Olahraga</a>
          <a href="#" className="hover:underline">Hiburan</a>
        </nav>

        {/* Tentang Kami, Kontak, dll */}
        <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm mt-2">
          <Link href="/tentang-kami" className="hover:underline">Tentang Kami</Link>
          <Link href="/kontak" className="hover:underline">Kontak</Link>
          <Link href="/privasi" className="hover:underline">Privasi</Link>
          <Link href="/ketentuan" className="hover:underline">Ketentuan</Link>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-700 dark:text-gray-400">
          <p>© {new Date().getFullYear()} GenuineNews. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
