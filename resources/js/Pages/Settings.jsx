import { useForm } from '@inertiajs/react';
import { useEffect } from 'react';
import { Link } from '@inertiajs/react';

export default function Settings({ auth, settings: initialSettings }) {
  const { data, setData, post, processing } = useForm({
    pushNotifications: initialSettings.push_notifications ?? true,
    darkMode: initialSettings.dark_mode ?? false,
    timezone: initialSettings.timezone ?? 'Asia/Jakarta',
    dateFormat: initialSettings.date_format ?? 'DD/MM/YYYY',
    timeFormat: initialSettings.time_format ?? '24',
    language: initialSettings.language ?? 'en',
  });

  // Set dark mode class on <html> when data.darkMode changes
  useEffect(() => {
    if (data.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [data.darkMode]);

  const handleChange = (field, value) => {
    setData(field, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('settings.update'));
  };

  return (
    <div className="min-h-screen flex bg-[#f4f4f4] dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <aside className="w-full sm:w-1/4 bg-white dark:bg-gray-800 p-4 border-r border-gray-200 dark:border-gray-700 flex flex-col items-center">
        <img src="/images/user.png" alt="Profile" className="w-28 h-28 rounded-full mb-2" />
        <span className="text-sm text-gray-600 dark:text-gray-300 mb-6">Change Photo</span>
        <nav className="space-y-2 w-full">
          <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">🏠 Home</a>
          <a href="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">👤 Profile</a>
          <a href="/settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold rounded">⚙️ Settings</a>
          <Link
            href="/logout"
            method="post"
            as="button"
            className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          >
            🚪 Logout
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-white dark:bg-gray-800">
        <h2 className="text-3xl font-serif mb-6">Settings</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center justify-between">
            <label className="font-medium">Push Notifications</label>
            <input
              type="checkbox"
              checked={data.pushNotifications}
              onChange={(e) => handleChange('pushNotifications', e.target.checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="font-medium">Dark Mode</label>
            <input
              type="checkbox"
              checked={data.darkMode}
              onChange={(e) => handleChange('darkMode', e.target.checked)}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Timezone</label>
            <select
              value={data.timezone}
              onChange={(e) => handleChange('timezone', e.target.value)}
              className="input w-full bg-white dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 rounded px-3 py-2"
            >
              <option value="Asia/Jakarta">Asia/Jakarta (WIB)</option>
              <option value="Asia/Makassar">Asia/Makassar (WITA)</option>
              <option value="Asia/Jayapura">Asia/Jayapura (WIT)</option>
              <option value="UTC">UTC</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Date Format</label>
            <select
              value={data.dateFormat}
              onChange={(e) => handleChange('dateFormat', e.target.value)}
              className="input w-full bg-white dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 rounded px-3 py-2"
            >
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Time Format</label>
            <select
              value={data.timeFormat}
              onChange={(e) => handleChange('timeFormat', e.target.value)}
              className="input w-full bg-white dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 rounded px-3 py-2"
            >
              <option value="12">12-hour</option>
              <option value="24">24-hour</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Language</label>
            <select
              value={data.language}
              onChange={(e) => handleChange('language', e.target.value)}
              className="input w-full bg-white dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 rounded px-3 py-2"
            >
              <option value="en">English</option>
              <option value="id">Bahasa Indonesia</option>
              <option value="fr">Français</option>
            </select>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="submit"
              disabled={processing}
              className="bg-[#001F3F] hover:bg-[#003366] text-white px-6 py-2 rounded shadow transition-colors"
            >
              Save Settings
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
