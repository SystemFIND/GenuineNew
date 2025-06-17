<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Carbon\Carbon;
use App\Models\User; // <-- Pastikan ini ditambahkan

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{
    /**
     * Mendefinisikan status default dari model.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // 1. Menyiapkan data awal
        $categories = ['politik', 'ekonomi', 'teknologi', 'olahraga', 'hiburan'];
        $title = $this->faker->sentence(6); // Membuat judul palsu (6 kata)

        // Mengambil satu user acak untuk dijadikan penulis
        $author = User::inRandomOrder()->first(); 
        
        // Menangani jika tidak ada user di database
        if (!$author) {
            $author = User::factory()->create();
        }

        // 2. Mengembalikan array berisi data berita palsu
        return [
            // Kolom di database => Nilai yang di-generate
            
            'title'       => $title, // Judul yang sudah dibuat di atas
            'slug'        => Str::slug($title), // Membuat URL-friendly dari judul (misal: "ini-judul-berita")
            
            // Mengambil nama depan dan belakang dari user yang dipilih secara acak
            'author'      => $author->first_name . ' ' . $author->last_name, 
            
            // Mengambil ID dari user yang sama
            'author_id'   => $author->id, 
            
            // Memilih satu kategori secara acak dari array $categories
            'category'    => $this->faker->randomElement($categories),
            
            // Membuat deskripsi singkat (10 kata)
            'description' => $this->faker->sentence(10), 
            
            // Membuat path gambar thumbnail palsu
            'thumbnail'   => 'thumbnails/' . $this->faker->word . '.jpg',
            
            // Membuat konten utama berita (5 paragraf)
            'content'     => $this->faker->paragraph(5),
            
            // Memilih status secara acak antara 'draft' atau 'published'
            'status'      => $this->faker->randomElement(['draft', 'published']),
            
            // Membuat tanggal publikasi acak dalam rentang 1 bulan terakhir
            'published_at'=> $this->faker->dateTimeBetween('-1 month', 'now'),
            
            // Angka acak antara 0 - 1000 untuk jumlah views
            'views'       => $this->faker->numberBetween(0, 1000),
            
            // Angka acak antara 0 - 100 untuk jumlah komentar
            'comments'    => $this->faker->numberBetween(0, 100),
            
            // Mengisi waktu pembuatan dan update dengan waktu sekarang
            'created_at'  => now(),
            'updated_at'  => now(),    
        ];
    }
}