import React, { useEffect } from "react";
import Navbar from "@/Components/Homepage/Navbar";
import Footer from "@/Components/Homepage/Footer";
import FeedbackForm from "@/Components/Feedback/FeedbackForm";
import { Head, usePage } from "@inertiajs/react";

export default function Feedback() {
  const { props } = usePage();
  const { flash } = props;
  const settings = props.auth?.user?.settings;

  // Atur dark mode
  useEffect(() => {
    if (settings?.dark_mode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [settings]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <Head title="Feedback" />
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Flash Message */}
        {flash?.success && (
          <div className="bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-600 text-green-800 dark:text-green-100 px-4 py-3 rounded mb-6 max-w-md w-full text-center">
            {flash.success}
          </div>
        )}
        {flash?.error && (
          <div className="bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-600 text-red-800 dark:text-red-100 px-4 py-3 rounded mb-6 max-w-md w-full text-center">
            {flash.error}
          </div>
        )}

        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}
