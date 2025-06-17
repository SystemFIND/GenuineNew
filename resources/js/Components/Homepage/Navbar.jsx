import { Button } from "@/components/ui/button";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Navbar() {
  const { auth, csrf_token } = usePage().props;
  const [dropdown, setDropdown] = useState(false);

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
        {!auth?.user ? (
          <>
            <Link href="/register">
              <Button variant="outline" className="w-full sm:w-auto bg-[#faf3ee] text-[#1a2233] font-serif text-sm sm:text-base md:text-lg px-6 sm:px-8">REGISTER</Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" className="w-full sm:w-auto bg-[#faf3ee] text-[#1a2233] font-serif text-sm sm:text-base md:text-lg px-8 sm:px-10">LOGIN</Button>
            </Link>
          </>
        ) : (
          <div className="relative mr-14">
            <img
              src="/images/user.png"
              alt="User"
              className="w-10 h-10 rounded-full border cursor-pointer"
              onClick={() => setDropdown((v) => !v)}
            />
            {dropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow z-50 text-left">
              <div className="px-4 py-2 font-semibold text-[#1a2233]">
                {auth.user.first_name} {auth.user.last_name}
              </div>
              <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>

              {/* Tampilkan Dashboard hanya jika admin atau jurnalis */}
              {auth.user.role === 'admin' && (
                <Link href="/admin/dashboard" className="block px-4 py-2 hover:bg-gray-100">Admin Dashboard</Link>
              )}
              {auth.user.role === 'journalist' && (
                <Link href="/journalist/dashboard" className="block px-4 py-2 hover:bg-gray-100">Journalist Dashboard</Link>
              )}

              <Link href="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
              <form method="POST" action="/logout">
                <input type="hidden" name="_token" value={csrf_token} />
                <button
                  type="submit"
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                >
                  Logout
                </button>
              </form>
            </div>
          )}
          </div>
        )}
      </div>
    </header>
  );
}