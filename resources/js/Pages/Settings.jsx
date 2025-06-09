import { useState } from 'react';
import { Link } from '@inertiajs/react';

export default function Settings({ auth }) {
  const [settings, setSettings] = useState({
    pushNotifications: true,
    darkMode: false,
    timezone: 'Asia/Jakarta',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: '24',
    language: 'en',
  });

  const handleChange = (field, value) => {
    setSettings({ ...settings, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim ke backend jika sudah siap
    console.log('Settings submitted:', settings);
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] flex flex-col sm:flex-row">
      {/* Sidebar */}
      <aside className="w-full sm:w-1/4 bg-white p-4 border-r flex flex-col items-center">
        <img src="/images/user.png" alt="Profile" className="w-28 h-28 rounded-full mb-2" />
        <span className="text-sm text-gray-600 mb-6">Change Photo</span>
        <nav className="space-y-2 w-full">
          <a href="/" className="block px-4 py-2 hover:bg-gray-100">🏠 Home</a>
          <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">👤 Profile</a>
          <a href="/settings" className="block px-4 py-2 hover:bg-gray-100 font-semibold">⚙️ Settings</a>
          <Link
            href="/logout"
            method="post"
            as="button"
            className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
          >
            Logout
          </Link>
        </nav>
      </aside>

      {/* Main Settings Content */}
      <main className="flex-1 p-6 bg-white">
        <h2 className="text-3xl font-serif mb-6">Settings</h2>
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Push Notification */}
          <div className="flex items-center justify-between">
            <label className="text-gray-700 font-medium">Push Notifications</label>
            <input
              type="checkbox"
              checked={settings.pushNotifications}
              onChange={(e) => handleChange('pushNotifications', e.target.checked)}
              className="toggle-checkbox"
            />
          </div>

          {/* Dark Mode */}
          <div className="flex items-center justify-between">
            <label className="text-gray-700 font-medium">Dark Mode</label>
            <input
              type="checkbox"
              checked={settings.darkMode}
              onChange={(e) => handleChange('darkMode', e.target.checked)}
              className="toggle-checkbox"
            />
          </div>

          {/* Timezone */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Timezone</label>
            <select
              value={settings.timezone}
              onChange={(e) => handleChange('timezone', e.target.value)}
              className="input w-full"
            >
              <option value="Asia/Jakarta">Asia/Jakarta (WIB)</option>
              <option value="Asia/Makassar">Asia/Makassar (WITA)</option>
              <option value="Asia/Jayapura">Asia/Jayapura (WIT)</option>
              <option value="UTC">UTC</option>
            </select>
          </div>

          {/* Date Format */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Date Format</label>
            <select
              value={settings.dateFormat}
              onChange={(e) => handleChange('dateFormat', e.target.value)}
              className="input w-full"
            >
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            </select>
          </div>

          {/* Time Format */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Time Format</label>
            <select
              value={settings.timeFormat}
              onChange={(e) => handleChange('timeFormat', e.target.value)}
              className="input w-full"
            >
              <option value="12">12-hour</option>
              <option value="24">24-hour</option>
            </select>
          </div>

          {/* Language (Optional creative) */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Language</label>
            <select
              value={settings.language}
              onChange={(e) => handleChange('language', e.target.value)}
              className="input w-full"
            >
              <option value="en">English</option>
              <option value="id">Bahasa Indonesia</option>
              <option value="es">Español</option>
            </select>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button type="reset" className="bg-gray-200 text-black px-6 py-2 rounded shadow">Cancel</button>
            <button type="submit" className="bg-[#001F3F] text-white px-6 py-2 rounded shadow">
              Save Settings
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
