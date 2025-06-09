import React from "react";

export default function AdminSidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="w-60 min-w-[180px] bg-[#222] text-white rounded-lg shadow flex flex-col p-6 mr-2">
      <h2 className="text-2xl font-bold mb-6 border-b border-gray-400 pb-2">Admin Dashboard</h2>
      <nav className="flex flex-col gap-4 flex-1">
        <button
          className={`text-lg font-semibold text-left transition ${activeTab === "users" ? "text-blue-400" : "hover:text-blue-300"}`}
          onClick={() => setActiveTab("users")}
        >
          Users
        </button>
        <button
          className={`text-lg font-semibold text-left transition ${activeTab === "articles" ? "text-blue-400" : "hover:text-blue-300"}`}
          onClick={() => setActiveTab("articles")}
        >
          Articles
        </button>
      </nav>
      <button
        className="mt-8 bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded transition"
        onClick={() => alert("Logout! (implementasi logout di sini)")}
      >
        Logout
      </button>
    </aside>
  );
}