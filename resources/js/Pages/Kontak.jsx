import React from "react";
import Navbar from "@/Components/Homepage/Navbar";
import Footer from "@/Components/Homepage/Footer";
import { Head } from "@inertiajs/react";

export default function Kontak() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head title="Kontak" />
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-2xl font-bold mb-4">Kontak</h1>
        <p className="max-w-xl text-center text-gray-700">
          Hubungi kami melalui email: <a href="mailto:info@genuinenews.com" className="text-blue-600 underline">info@genuinenews.com</a>
        </p>
      </main>
      <Footer />
    </div>
  );
}