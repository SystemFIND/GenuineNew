import { Link, usePage, router } from "@inertiajs/react";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar({ activeTab, setActiveTab }) {
  const { auth, csrf_token } = usePage().props;
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-900 shadow-md relative text-black dark:text-white border-b border-gray-300 dark:border-gray-700">
      {/* Kiri - Hamburger + Judul */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none text-gray-800 dark:text-gray-200"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Admin Dashboard
        </h1>
      </div>

      {/* Kanan - Foto User */}
      <div className="relative">
        <div
          onClick={() => setDropdown((v) => !v)}
          className="relative w-10 h-10 mr-14 cursor-pointer"
        >
          {/* Logo untuk light mode */}
          <img
            src="/images/user.png"
            alt="User"
            className="block dark:hidden w-10 h-10 rounded-full border border-white shadow"
          />
          {/* Logo untuk dark mode */}
          <img
            src="/images/user-dark.png"
            alt="User Dark"
            className="hidden dark:block w-10 h-10 rounded-full border border-gray-700 shadow"
          />
        </div>
        {dropdown && (
          <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow z-50 text-left">
            <div className="px-4 py-2 font-semibold text-[#1a2233] dark:text-white">
              {auth.user.first_name} {auth.user.last_name}
            </div>
            <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              Profile
            </Link>
            {auth.user.role === "admin" && (
              <Link href="/admin/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                Admin Dashboard
              </Link>
            )}
            <Link href="/settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              Settings
            </Link>
            <form method="POST" action="/logout">
              <input type="hidden" name="_token" value={csrf_token} />
              <button
                type="submit"
                className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-red-600"
              >
                Logout
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Dropdown menu navigasi dari hamburger */}
      {menuOpen && (
        <div className="absolute top-full left-4 mt-2 w-52 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow z-40 flex flex-col">
          <button
            className="px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => router.visit("/")}
          >
            Home
          </button>
          <button
            className={`px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
              activeTab === "users" ? "font-bold text-blue-600 dark:text-blue-400" : ""
            }`}
            onClick={() => setActiveTab("users")}
          >
            Users
          </button>
          <button
            className={`px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
              activeTab === "create" ? "font-bold text-blue-600 dark:text-blue-400" : ""
            }`}
            onClick={() => setActiveTab("create")}
          >
            Create News
          </button>
          <button
            className={`px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
              activeTab === "articles" ? "font-bold text-blue-600 dark:text-blue-400" : ""
            }`}
            onClick={() => setActiveTab("articles")}
          >
            Articles
          </button>
        </div>
      )}
    </header>
  );
}
