import { useForm } from "@inertiajs/react";

export default function EditUser({ user }) {
  const { data, setData, put, processing, errors } = useForm({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    role: user.role,
  });

  function handleSubmit(e) {
    e.preventDefault();
    put(route('admin.users.update', user.id));
  }

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Edit User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 dark:text-gray-300">First Name</label>
          <input
            className="border px-2 py-1 w-full rounded-md text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
            value={data.first_name}
            onChange={e => setData('first_name', e.target.value)}
          />
          {errors.first_name && <div className="text-red-600 text-sm">{errors.first_name}</div>}
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Last Name</label>
          <input
            className="border px-2 py-1 w-full rounded-md text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
            value={data.last_name}
            onChange={e => setData('last_name', e.target.value)}
          />
          {errors.last_name && <div className="text-red-600 text-sm">{errors.last_name}</div>}
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Email</label>
          <input
            className="border px-2 py-1 w-full rounded-md text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
            value={data.email}
            onChange={e => setData('email', e.target.value)}
          />
          {errors.email && <div className="text-red-600 text-sm">{errors.email}</div>}
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Role</label>
          <select
            className="border px-2 py-1 w-full rounded-md text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
            value={data.role}
            onChange={e => setData('role', e.target.value)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="journalist">Journalist</option>
          </select>
          {errors.role && <div className="text-red-600 text-sm">{errors.role}</div>}
        </div>
        <button
          type="submit"
          disabled={processing}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          Update
        </button>
      </form>
    </div>
  );
}
