import React, { useState, useEffect } from "react";
import Navbar from "@/Components/AdminDashboard/Navbar";
import Footer from "@/Components/AdminDashboard/Footer";
import UserTable from "@/Components/AdminDashboard/UserTable";
import ArticleTable from "@/Components/AdminDashboard/ArticleTable";
import CreateNewsForm from "@/Components/AdminDashboard/CreateNewsForm";
import { Head, usePage } from "@inertiajs/react";

export default function AdminDashboard({ users, articles }) {
  const { props } = usePage();
  const settings = props.auth?.user?.settings;

  const searchParams = new URLSearchParams(window.location.search);
  const initialTab = searchParams.get("tab") || "users";
  const [activeTab, setActiveTab] = useState(initialTab);

  // Atur dark mode berdasarkan localStorage atau settings dari props
  useEffect(() => {
    const localSettings = localStorage.getItem("user_settings");
    const parsedSettings = localSettings ? JSON.parse(localSettings) : null;

    const darkMode =
      parsedSettings?.darkMode !== undefined
        ? parsedSettings.darkMode
        : settings?.dark_mode;

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [settings]);

  // Simpan query param tab
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("tab", activeTab);
    window.history.replaceState({}, "", `${window.location.pathname}?${params}`);
  }, [activeTab]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Head title="Admin Dashboard" />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-4 sm:px-6 lg:px-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 min-h-[60vh] transition-colors duration-300">
          {activeTab === "users" && <UserTable users={users} />}
          {activeTab === "articles" && <ArticleTable articles={articles} />}
          
          {/* === TAMBAHKAN PROP DI BARIS INI === */}
          {activeTab === "create" && <CreateNewsForm submitRoute="admin.news.store" />}
          
        </div>
      </main>
      <Footer />
    </div>
  );
}