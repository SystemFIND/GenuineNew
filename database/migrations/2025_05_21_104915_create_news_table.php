<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('news', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();            
            $table->string('author');
            $table->foreignId('author_id')->constrained('users')->onDelete('cascade');
            $table->enum('category', ['politik', 'ekonomi', 'teknologi', 'olahraga', 'hiburan']);
            $table->string('description');
            $table->string('thumbnail');
            $table->text('content');
            $table->enum('status', ['draft', 'published'])->default('draft');
            $table->timestamp('published_at')->nullable();
            $table->unsignedBigInteger('views')->default(0);
            $table->unsignedInteger('comments')->default(0);
            $table->timestamps();

            // === PENAMBAHAN UNTUK OPTIMASI PERFORMA ===
            // Membuat 'index' pada kolom author_id agar pencarian artikel
            // berdasarkan penulis menjadi sangat cepat.
            $table->index('author_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('news');
    }
};