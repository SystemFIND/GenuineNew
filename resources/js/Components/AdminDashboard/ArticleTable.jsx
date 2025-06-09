import React from "react";
import { router } from "@inertiajs/react";

export default function ArticleTable({ articles }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Articles</h2>
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Author</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Edit</th>
            <th className="border px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {articles.data.map(article => (
            <tr key={article.id}>
              <td className="border px-4 py-2">{article.id}</td>
              <td className="border px-4 py-2">{article.title}</td>
              <td className="border px-4 py-2">{article.category}</td>
              <td className="border px-4 py-2">{article.author}</td>
              <td className="border px-4 py-2">{article.date}</td>
              <td className="border px-4 py-2">{article.status}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
              </td>
              <td className="border px-4 py-2">
                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-4">
        {articles.links && articles.links.map((link, idx) => {
          return (
            <button
              key={idx}
              disabled={!link.url}
              className={`px-3 py-1 rounded ${link.active ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              onClick={() => {
                if (link.url) {
                  const url = new URL(window.location.href);

                  // Ambil nomor halaman dari label
                  const pageNumber = link.label.match(/\d+/)?.[0];

                  // Tetap di tab articles
                  url.searchParams.set("tab", "articles");

                  // Atur page_articles
                  if (pageNumber) {
                    url.searchParams.set("page_articles", pageNumber);
                  } else if (link.label.includes("Next")) {
                    const nextPage = new URL(link.url).searchParams.get("page_articles");
                    if (nextPage) url.searchParams.set("page_articles", nextPage);
                  } else if (link.label.includes("Previous")) {
                    const prevPage = new URL(link.url).searchParams.get("page_articles");
                    if (prevPage) url.searchParams.set("page_articles", prevPage);
                  }

                  // Reset halaman users
                  url.searchParams.delete("page_users");

                  router.visit(url.pathname + url.search);
                }
              }}
              dangerouslySetInnerHTML={{ __html: link.label }}
            />
          );
        })}
      </div>
    </div>
  );
}
