import { useForm } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function Profile({ auth }) {
  const { data, setData, patch, processing, errors } = useForm({
    first_name: auth.user.first_name || '',
    last_name: auth.user.last_name || '',
    email: auth.user.email || '',
    password: '',
    bio: auth.user.bio || '',
    gender: auth.user.gender || '',
    birth_date: auth.user.birth_date || '',
    phone_number: auth.user.phone_number || '',
    city: auth.user.city || '',
    state: auth.user.state || '',
  });

  const [showPasswordForm, setShowPasswordForm] = useState(false);

  // Ambil settings dari user auth, khusus dark mode
  const { props } = usePage();
  const settings = props.auth?.user?.settings;

  // Set dark mode class ke document root sesuai user setting
  useEffect(() => {
    if (settings?.dark_mode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings]);

  const handleSubmit = (e) => {
    e.preventDefault();
    patch(route('profile.update'));
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row bg-[#f4f4f4] dark:bg-gray-900 transition-colors duration-300">
      {/* Sidebar */}
      <aside className="w-full sm:w-1/4 bg-white dark:bg-gray-800 p-4 border-r flex flex-col items-center transition-colors duration-300">
        <img
          src="/images/user.png"
          alt="Profile"
          className="w-28 h-28 rounded-full mb-2"
        />
        <span className="text-sm text-gray-600 dark:text-gray-300 mb-6">Change Photo</span>
        <nav className="space-y-2 w-full">
          <a
            href="/"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300"
          >
            🏠 Home
          </a>
          <a
            href="/profile"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold dark:text-white"
          >
            👤 Profile
          </a>
          <a
            href="/settings"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300"
          >
            ⚙️ Settings
          </a>
          <Link
            href="/logout"
            method="post"
            as="button"
            className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            🚪 Logout
          </Link>
        </nav>
      </aside>

      {/* Form */}
      <main className="flex-1 p-6 bg-white dark:bg-gray-800 transition-colors duration-300">
        <h2 className="text-3xl font-serif mb-6 text-gray-900 dark:text-gray-100">Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">First name</label>
              <input
                className="input dark:bg-gray-700 dark:text-white dark:border-gray-600"
                value={data.first_name}
                onChange={(e) => setData('first_name', e.target.value)}
              />
              {errors.first_name && (
                <p className="text-red-500 text-sm">{errors.first_name}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">Last name</label>
              <input
                className="input dark:bg-gray-700 dark:text-white dark:border-gray-600"
                value={data.last_name}
                onChange={(e) => setData('last_name', e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">Email address</label>
              <input
                className="input dark:bg-gray-700 dark:text-white dark:border-gray-600"
                type="email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
              />
              <div className="text-xs text-blue-600 hover:underline cursor-pointer mt-1">
                <a href="/email/verify">Verify Email</a>
              </div>
            </div>
            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">Phone Number</label>
              <input
                className="input dark:bg-gray-700 dark:text-white dark:border-gray-600"
                value={data.phone_number}
                onChange={(e) => setData('phone_number', e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">City</label>
              <input
                className="input dark:bg-gray-700 dark:text-white dark:border-gray-600"
                value={data.city}
                onChange={(e) => setData('city', e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">State</label>
              <input
                className="input dark:bg-gray-700 dark:text-white dark:border-gray-600"
                value={data.state}
                onChange={(e) => setData('state', e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">Gender</label>
              <select
                className="input dark:bg-gray-700 dark:text-white dark:border-gray-600"
                value={data.gender}
                onChange={(e) => setData('gender', e.target.value)}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">Birth Date</label>
              <input
                className="input dark:bg-gray-700 dark:text-white dark:border-gray-600"
                type="date"
                value={data.birth_date}
                onChange={(e) => setData('birth_date', e.target.value)}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-1 text-gray-700 dark:text-gray-300">Bio</label>
              <textarea
                className="input dark:bg-gray-700 dark:text-white dark:border-gray-600"
                value={data.bio}
                onChange={(e) => setData('bio', e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="button"
              className="text-sm text-blue-600 hover:underline"
              onClick={() => setShowPasswordForm(!showPasswordForm)}
            >
              Reset Password
            </button>
          </div>

          {showPasswordForm && (
            <div className="space-y-3 border-t pt-4 border-gray-300 dark:border-gray-700">
              <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">Current Password</label>
                <input
                  className="input dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  type="password"
                  onChange={(e) => setData('current_password', e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">New Password</label>
                <input
                  className="input dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  type="password"
                  onChange={(e) => setData('password', e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">Confirm New Password</label>
                <input
                  className="input dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  type="password"
                  onChange={(e) => setData('password_confirmation', e.target.value)}
                />
              </div>
            </div>
          )}

          <div className="flex gap-4 mt-6">
            <button
              type="reset"
              className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-6 py-2 rounded shadow"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#001F3F] text-white px-6 py-2 rounded shadow disabled:opacity-50"
              disabled={processing}
            >
              Save
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
