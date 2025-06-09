import { router } from "@inertiajs/react";

export default function UserTable({ users }) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Daftar Semua User</h2>
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">First Name</th>
            <th className="border px-4 py-2">Last Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Edit</th>
            <th className="border px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.data.map(user => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.first_name}</td>
              <td className="border px-4 py-2">{user.last_name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2">
                <a href={route('admin.users.edit', user.id)} className="text-blue-600 hover:underline">Edit</a>
              </td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => {
                    if (confirm("Yakin hapus user ini?")) {
                      router.delete(route('admin.users.destroy', user.id));
                    }
                  }}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-4">
        {users.links.map((link, idx) => (
          <button
            key={idx}
            disabled={!link.url}
            className={`px-3 py-1 rounded ${link.active ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => {
              if (link.url) {
                const url = new URL(window.location.href);

                // Ambil nomor halaman dari label biasa (angka)
                const pageNumber = link.label.match(/\d+/)?.[0];

                // Tetap di tab users
                url.searchParams.set("tab", "users");

                // Atur page_users
                if (pageNumber) {
                  url.searchParams.set("page_users", pageNumber);
                } else if (link.label.includes("Next")) {
                  const nextPage = new URL(link.url).searchParams.get("page_users");
                  if (nextPage) url.searchParams.set("page_users", nextPage);
                } else if (link.label.includes("Previous")) {
                  const prevPage = new URL(link.url).searchParams.get("page_users");
                  if (prevPage) url.searchParams.set("page_users", prevPage);
                }

                // Reset halaman articles
                url.searchParams.delete("page_articles");

                // Navigasi
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
