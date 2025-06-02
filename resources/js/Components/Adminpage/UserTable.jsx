import { Link, router } from "@inertiajs/react";

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
          {users.map(user => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.first_name}</td>
              <td className="border px-4 py-2">{user.last_name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2">
                <Link href={route('admin.users.edit', user.id)} className="text-blue-600 hover:underline">Edit</Link>
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
    </div>
  );
}