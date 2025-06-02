import React, { useState } from "react";
import Navbar from "@/Components/Adminpage/Navbar";
import Footer from "@/Components/Adminpage/Footer";
import AdminSidebar from "@/Components/Adminpage/AdminSidebar";
import UserTable from "@/Components/Adminpage/UserTable";
import ArticleTable from "@/Components/Adminpage/ArticleTable";
import { Head } from "@inertiajs/react";

export default function AdminDashboard({ users }) {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head title="Admin Dashboard" />
      <Navbar />
      <main className="flex-1 flex flex-row gap-6 p-2 sm:p-4 md:px-8 lg:px-24">
        {/* Sidebar */}
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* Main Content */}
        <div className="flex-1 bg-white rounded-lg shadow p-4 min-h-[60vh]">
          {activeTab === "users" && <UserTable users={users} />}
          {activeTab === "articles" && <ArticleTable />}
          {/* Tambahkan komponen Orders jika perlu */}
        </div>
      </main>
      <Footer />
    </div>
  );
}