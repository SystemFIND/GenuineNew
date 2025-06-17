import React from "react";
import { Link } from "@inertiajs/react";

// Terima prop 'links' dari paginator Laravel
export default function Pagination({ links }) {
  if (!links || links.length <= 3) {
    return null; // Jangan tampilkan paginasi jika hanya ada 1 halaman
  }

  return (
    <nav className="flex justify-center items-center gap-2 mt-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.url || '#'}
          as={link.url ? 'a' : 'span'}
          className={`
            px-4 py-2 text-sm font-medium rounded-md transition
            ${!link.url ? 'text-gray-400 bg-gray-200 dark:bg-gray-800 cursor-not-allowed' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}
            ${link.active ? 'bg-blue-600 text-white font-bold shadow-md' : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'}
          `}
          dangerouslySetInnerHTML={{ __html: link.label }}
        />
      ))}
    </nav>
  );
}