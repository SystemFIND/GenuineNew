import React from "react";
import { router } from "@inertiajs/react";

export default function ArticleTable({ articles }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Articles</h2>
      <table className="min-w-full border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            <th className="border px-4 py-2 border-gray-300 dark:border-gray-600">ID</th>
            <th className="border px-4 py-2 border-gray-300 dark:border-gray-600">Title</th>
            <th className="border px-4 py-2 border-gray-300 dark:border-gray-600">Category</th>
            <th className="border px-4 py-2 border-gray-300 dark:border-gray-600">Author</th>
            <th className="border px-4 py-2 border-gray-300 dark:border-gray-600">Date</th>
            <th className="border px-4 py-2 border-gray-300 dark:border-gray-600">Status</th>
            <th className="border px-4 py-2 border-gray-300 dark:border-gray-600">Edit</th>
            <th className="border px-4 py-2 border-gray-300 dark:border-gray-600">Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* UBAH BAGIAN INI: Tambahkan pengecekan */}
          {articles && articles.data && articles.data.length > 0 ? (
            articles.data.map((article) => (
              <tr key={article.id} className="bg-white dark:bg-gray-800">
                <td className="border px-4 py-2 border-gray-300 dark:border-gray-600">{article.id}</td>
                <td className="border px-4 py-2 border-gray-300 dark:border-gray-600">{article.title}</td>
                <td className="border px-4 py-2 border-gray-300 dark:border-gray-600">{article.category}</td>
                <td className="border px-4 py-2 border-gray-300 dark:border-gray-600">{article.author}</td>
                <td className="border px-4 py-2 border-gray-300 dark:border-gray-600">{article.date}</td>
                <td className="border px-4 py-2 border-gray-300 dark:border-gray-600">{article.status}</td>
                <td className="border px-4 py-2 border-gray-300 dark:border-gray-600">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded transition">
                    Edit
                  </button>
                </td>
                <td className="border px-4 py-2 border-gray-300 dark:border-gray-600">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center py-4 border px-4 border-gray-300 dark:border-gray-600">
                No articles found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-4">
        {articles && articles.links && // Tambahkan pengecekan di sini juga
          articles.links.map((link, idx) => (
            <button
              key={idx}
              disabled={!link.url}
              className={`px-3 py-1 rounded transition ${
                link.active
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 dark:text-white"
              }`}
              onClick={() => {
                if (link.url) {
                  const url = new URL(window.location.href);
                  const pageNumber = link.label.match(/\d+/)?.[0];

                  url.searchParams.set("tab", "articles");

                  if (pageNumber) {
                    url.searchParams.set("page_articles", pageNumber);
                  } else if (link.label.includes("Next")) {
                    const nextPage = new URL(link.url).searchParams.get("page_articles");
                    if (nextPage) url.searchParams.set("page_articles", nextPage);
                  } else if (link.label.includes("Previous")) {
                    const prevPage = new URL(link.url).searchParams.get("page_articles");
                    if (prevPage) url.searchParams.set("page_articles", prevPage);
                  }

                  url.searchParams.delete("page_users");

                  router.visit(url.pathname + url.search);
                }
              }}
              dangerouslySetInnerHTML={{ __html: link.label }}
            />
          ))}
      </div>
    </div>
  );
}