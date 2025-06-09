import React, { useState, useEffect } from "react";
import Navbar from "@/Components/AdminDashboard/Navbar";
import Footer from "@/Components/AdminDashboard/Footer";
import UserTable from "@/Components/AdminDashboard/UserTable";
import ArticleTable from "@/Components/AdminDashboard/ArticleTable";
import CreateNewsForm from "@/Components/AdminDashboard/CreateNewsForm";
import { Head } from "@inertiajs/react";

export default function AdminDashboard({ users, articles }) {
  const searchParams = new URLSearchParams(window.location.search);
  const initialTab = searchParams.get("tab") || "users";
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("tab", activeTab);
    window.history.replaceState({}, "", `${window.location.pathname}?${params}`);
  }, [activeTab]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head title="Admin Dashboard" />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-4 sm:px-6 lg:px-16">
        <div className="bg-white rounded-lg shadow p-4 min-h-[60vh]">
          {activeTab === "users" && <UserTable users={users} />}
          {activeTab === "articles" && <ArticleTable articles={articles} />}
          {activeTab === "create" && <CreateNewsForm />}
        </div>
      </main>
      <Footer />
    </div>
  );
}
