import React from "react";
import Navbar from "@/Components/Homepage/Navbar";
import Footer from "@/Components/Homepage/Footer";
import { Head } from "@inertiajs/react";

export default function Privasi() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head title="Privasi" />
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-2xl font-bold mb-4">Kebijakan Privasi</h1>
        <p className="max-w-xl text-center text-gray-700">
          Privasi Anda penting bagi kami. Silakan baca kebijakan privasi kami untuk mengetahui bagaimana kami mengelola data Anda.
        </p>
      </main>
      <Footer />
    </div>
  );
}