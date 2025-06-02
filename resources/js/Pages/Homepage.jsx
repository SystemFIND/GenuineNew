import React, { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import NewsLists from "@/Components/Homepage/NewsLists";
import Navbar from "@/Components/Homepage/Navbar";
import FeedbackButton from "@/Components/Homepage/FeedbackButton";
import SearchBar from "@/Components/Homepage/SearchBar";
import CategoryTabs from "@/Components/Homepage/CategoryTabs";
import Footer from "@/Components/Homepage/Footer";
import Pagination from "@/Components/Homepage/Pagination";

export default function Homepage(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head title="Homepage" />

      <Navbar />

      {/* Category Tabs & Search Bar */}
      <div className="sticky top-0 z-30 bg-white shadow">
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-10 py-3 overflow-x-auto">
          <CategoryTabs />
          <SearchBar />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:flex-row gap-8 p-2 sm:p-4 md:px-8 lg:px-24">
        {/* Konten utama */}
        <div className="flex-1 w-full">
          <NewsLists currentPage={currentPage} />
          <div className="flex justify-center mt-6 w-full">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </main>

      <FeedbackButton />
      <Footer />
    </div>
  );
}