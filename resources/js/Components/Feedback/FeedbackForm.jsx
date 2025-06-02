import React, { useState } from "react";

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim feedback ke backend di sini (AJAX/axios/fetch)
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
      <h1 className="text-xl font-bold mb-4 text-center">Kritik & Saran</h1>
      <p className="text-gray-600 text-center mb-6">
        Kami sangat menghargai masukan dan kritik Anda untuk GenuineNews.
      </p>
      {submitted ? (
        <div className="text-green-600 text-center font-semibold py-4">
          Terima kasih atas masukan Anda!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Nama
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full border rounded px-3 py-2 text-sm"
              value={form.name}
              onChange={handleChange}
              placeholder="Nama Anda"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full border rounded px-3 py-2 text-sm"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Anda"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Pesan / Kritik / Saran
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border rounded px-3 py-2 text-sm"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Tulis pesan Anda di sini..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1a2233] text-white py-2 rounded font-semibold hover:bg-[#2d3a5a] transition"
          >
            Kirim
          </button>
        </form>
      )}
    </div>
  );
}