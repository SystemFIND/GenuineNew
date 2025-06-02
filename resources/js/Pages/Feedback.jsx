import React from "react";
import Navbar from "@/Components/Homepage/Navbar";
import Footer from "@/Components/Homepage/Footer";
import FeedbackForm from "@/Components/Feedback/FeedbackForm";
import { Head } from "@inertiajs/react";

export default function Feedback() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head title="Feedback" />
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}