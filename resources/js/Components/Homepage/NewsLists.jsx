export default function NewsLists() {
  return (
    <div className="w-full">
      {/* Bagian Atas */}
      <div className="grid grid-cols-1 md:grid-cols-[520px_2fr] gap-4 py-1 px-4">
        {/* Kotak kiri besar */}
        <div className="bg-gray-300 w-full md:w-[520px] h-[340px] rounded-md"></div>
        {/* Kotak kanan: grid 2x2 */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full">
          <div className="bg-gray-300 h-[161px] rounded-md"></div>
          <div className="bg-gray-300 h-[161px] rounded-md"></div>
          <div className="bg-gray-300 h-[161px] rounded-md"></div>
          <div className="bg-gray-300 h-[161px] rounded-md"></div>
        </div>
      </div>

      {/* Bagian Bawah - Grid Kotak Kecil */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-3 px-2 sm:px-4">
        {Array.from({ length: 25 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-300 w-full h-[80px] sm:h-[100px] md:h-[120px] rounded-md"
          />
        ))}
      </div>
    </div>
  );
}