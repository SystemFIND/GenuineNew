import React from "react";

const dummyArticles = [
  { id: 1, title: "Berita Pertama", category: "Politik", author: "Stiven", date: "2024-05-30", status: "Published" },
  { id: 2, title: "Berita Kedua", category: "Teknologi", author: "Admin", date: "2024-05-29", status: "Draft" },
];

export default function ArticleTable() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Articles</h3>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-semibold transition">
          + Create Article
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded">
          <thead className="bg-[#E6E6E6]">
            <tr>
              <th className="px-3 py-2 border">ID</th>
              <th className="px-3 py-2 border">Title</th>
              <th className="px-3 py-2 border">Category</th>
              <th className="px-3 py-2 border">Author</th>
              <th className="px-3 py-2 border">Date</th>
              <th className="px-3 py-2 border">Status</th>
              <th className="px-3 py-2 border">Edit</th>
              <th className="px-3 py-2 border">Delete</th>
            </tr>
          </thead>
          <tbody>
            {dummyArticles.map((a) => (
              <tr key={a.id} className="hover:bg-gray-100">
                <td className="px-3 py-2 border">{a.id}</td>
                <td className="px-3 py-2 border">{a.title}</td>
                <td className="px-3 py-2 border">{a.category}</td>
                <td className="px-3 py-2 border">{a.author}</td>
                <td className="px-3 py-2 border">{a.date}</td>
                <td className="px-3 py-2 border">{a.status}</td>
                <td className="px-3 py-2 border">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs">Edit</button>
                </td>
                <td className="px-3 py-2 border">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}