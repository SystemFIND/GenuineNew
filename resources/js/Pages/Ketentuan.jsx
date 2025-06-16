import React, { useEffect } from "react";
import Navbar from "@/Components/Homepage/Navbar";
import Footer from "@/Components/Homepage/Footer";
import { Head, usePage } from "@inertiajs/react";

export default function Ketentuan() {
  const { props } = usePage();
  const settings = props.auth?.user?.settings;

  useEffect(() => {
    if (settings?.dark_mode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [settings]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <Head title="Ketentuan" />
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-2xl font-bold mb-4">Syarat & Ketentuan</h1>
        <p className="max-w-xl text-center text-gray-700 dark:text-gray-300">
          Dengan menggunakan GenuineNews, Anda setuju dengan syarat dan ketentuan yang berlaku di platform kami.
        </p>
      </main>
      <Footer />
    </div>
  );
}