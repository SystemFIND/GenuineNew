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
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Edit User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>First Name</label>
          <input className="border px-2 py-1 w-full" value={data.first_name} onChange={e => setData('first_name', e.target.value)} />
          {errors.first_name && <div className="text-red-600">{errors.first_name}</div>}
        </div>
        <div>
          <label>Last Name</label>
          <input className="border px-2 py-1 w-full" value={data.last_name} onChange={e => setData('last_name', e.target.value)} />
          {errors.last_name && <div className="text-red-600">{errors.last_name}</div>}
        </div>
        <div>
          <label>Email</label>
          <input className="border px-2 py-1 w-full" value={data.email} onChange={e => setData('email', e.target.value)} />
          {errors.email && <div className="text-red-600">{errors.email}</div>}
        </div>
        <div>
          <label>Role</label>
          <select className="border px-2 py-1 w-full" value={data.role} onChange={e => setData('role', e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="journalist">Journalist</option>
          </select>
          {errors.role && <div className="text-red-600">{errors.role}</div>}
        </div>
        <button type="submit" disabled={processing} className="bg-blue-600 text-white px-4 py-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
}