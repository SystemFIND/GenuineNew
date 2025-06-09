import React from "react";
import Navbar from "@/Components/Homepage/Navbar";
import Footer from "@/Components/Homepage/Footer";
import FeedbackForm from "@/Components/Feedback/FeedbackForm";
import { Head, usePage } from "@inertiajs/react";

export default function Feedback() {
  const { flash } = usePage().props;

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head title="Feedback" />
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Flash Message */}
        {flash?.success && (
          <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded mb-6 max-w-md w-full text-center">
            {flash.success}
          </div>
        )}
        {flash?.error && (
          <div className="bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded mb-6 max-w-md w-full text-center">
            {flash.error}
          </div>
        )}

        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}
