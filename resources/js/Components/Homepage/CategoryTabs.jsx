const categories = [
  "Politik",
  "Ekonomi",
  "Teknologi",
  "Olahraga",
  "Hiburan",
];

export default function CategoryTabs() {
  return (
    <nav className="flex flex-wrap gap-2 md:gap-10 lg:gap-20 px-2 md:px-10 lg:px-20 py-1">
      {categories.map((cat) => (
        <button
          key={cat}
          className="text-[#1a5ca8] font-serif text-sm md:text-xl lg:text-2xl transition hover:no-underline focus:no-underline"
        >
          {cat}
        </button>
      ))}
    </nav>
  );
}