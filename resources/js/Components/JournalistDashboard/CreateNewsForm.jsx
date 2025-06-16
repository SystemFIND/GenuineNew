import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

export default function CreateNewsForm() {
  const { data, setData, post, processing, errors, reset } = useForm({
    title: "",
    category: "",
    description: "",
    thumbnail: null,
    content: "",
    status: "draft",
  });

  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setData("thumbnail", file);
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    } else {
      setPreviewImage(null);
    }
  };

  const handleSubmit = (status) => (e) => {
    e.preventDefault();
    setData("status", status);
    post(route("admin.news.store"), {
      onSuccess: () => reset(),
    });
  };

  return (
    <form onSubmit={handleSubmit("draft")} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Judul
        </label>
        <input
          type="text"
          value={data.title}
          onChange={(e) => setData("title", e.target.value)}
          className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md shadow-sm"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Kategori
        </label>
        <select
          value={data.category}
          onChange={(e) => setData("category", e.target.value)}
          className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md shadow-sm"
        >
          <option value="">Pilih kategori</option>
          <option value="politik">Politik</option>
          <option value="ekonomi">Ekonomi</option>
          <option value="teknologi">Teknologi</option>
          <option value="olahraga">Olahraga</option>
          <option value="hiburan">Hiburan</option>
        </select>
        {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Deskripsi
        </label>
        <input
          type="text"
          value={data.description}
          onChange={(e) => setData("description", e.target.value)}
          className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md shadow-sm"
        />
        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Thumbnail
        </label>
        <input
          type="file"
          onChange={handleFileChange}
          className="mt-1 block w-full text-sm text-gray-500 dark:text-gray-300 dark:bg-gray-800"
        />
        {previewImage && (
          <img src={previewImage} alt="Preview" className="mt-2 h-32 object-cover rounded-md" />
        )}
        {errors.thumbnail && <p className="text-red-500 text-sm">{errors.thumbnail}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Konten
        </label>
        <textarea
          value={data.content}
          onChange={(e) => setData("content", e.target.value)}
          className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md shadow-sm"
          rows={6}
        />
        {errors.content && <p className="text-red-500 text-sm">{errors.content}</p>}
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          onClick={handleSubmit("draft")}
          disabled={processing}
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md transition"
        >
          Simpan sebagai Draft
        </button>
        <button
          type="button"
          onClick={handleSubmit("published")}
          disabled={processing}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition"
        >
          Publikasikan
        </button>
      </div>
    </form>
  );
}
