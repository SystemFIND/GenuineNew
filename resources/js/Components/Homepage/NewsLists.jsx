import { Link } from '@inertiajs/react';

// Terima prop 'articles'
export default function NewsLists({ articles }) {
  // Tampilkan pesan jika tidak ada berita
  if (!articles || articles.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl text-gray-500">Belum ada berita yang dipublikasikan.</h2>
      </div>
    );
  }

  // Pisahkan artikel utama dengan artikel lainnya
  const mainArticle = articles[0];
  const sideArticles = articles.slice(1, 5);
  const remainingArticles = articles.slice(5);

  return (
    <div className="w-full">
      {/* Bagian Berita Utama */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-1 px-4">
        {mainArticle && (
          <Link href={`/news/${mainArticle.slug}`} className="lg:col-span-2 block group">
            <div className="relative w-full h-96 rounded-lg overflow-hidden bg-gray-300 dark:bg-gray-700 shadow-lg">
              <img 
                src={`/storage/${mainArticle.thumbnail}`} 
                alt={mainArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-xs font-semibold uppercase px-2 py-1 bg-red-600 text-white rounded">{mainArticle.category}</span>
                <h2 className="text-white text-3xl font-bold mt-2 group-hover:underline leading-tight">{mainArticle.title}</h2>
              </div>
            </div>
          </Link>
        )}
        
        {/* Berita Sampingan */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {sideArticles.map((article) => (
            <Link key={article.id} href={`/news/${article.slug}`} className="block group">
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-300 dark:bg-gray-700 shadow-md">
                <img src={`/storage/${article.thumbnail}`} alt={article.title} className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-black/50 flex items-end p-3">
                   <h3 className="text-white text-base font-semibold group-hover:underline leading-tight">{article.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Daftar Berita Lainnya */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8 px-4">
        {remainingArticles.map((article) => (
          <Link key={article.id} href={`/news/${article.slug}`} className="block group">
             <div className="w-full h-40 rounded-lg overflow-hidden bg-gray-300 dark:bg-gray-700 mb-3 shadow">
                <img src={`/storage/${article.thumbnail}`} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
             </div>
             <p className="text-sm font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 leading-tight">{article.title}</p>
             <span className="text-xs text-gray-500 dark:text-gray-400">{new Date(article.published_at).toLocaleDateString()}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}