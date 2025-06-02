import React from "react";
import Navbar from "@/Components/Homepage/Navbar";
import Footer from "@/Components/Homepage/Footer";
import { Head } from "@inertiajs/react";

export default function Ketentuan() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head title="Ketentuan" />
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-2xl font-bold mb-4">Syarat & Ketentuan</h1>
        <p className="max-w-xl text-center text-gray-700">
          Dengan menggunakan GenuineNews, Anda setuju dengan syarat dan ketentuan yang berlaku di platform kami.
        </p>
      </main>
      <Footer />
    </div>
  );
}