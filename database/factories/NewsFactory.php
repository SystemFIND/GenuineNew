<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Carbon\Carbon;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = ['politik', 'ekonomi', 'teknologi', 'olahraga', 'hiburan'];
        $title = $this->faker->sentence(6);

        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'author' => $this->faker->name,
            'category' => $this->faker->randomElement($categories),
            'description' => $this->faker->sentence(10),
            'thumbnail' => 'thumbnails/' . $this->faker->word . '.jpg',
            'content' => $this->faker->paragraph(5),
            'status' => $this->faker->randomElement(['draft', 'published']),
            'published_at' => $this->faker->dateTimeBetween('-1 month', 'now'),
            'views' => $this->faker->numberBetween(0, 1000),
            'comments' => $this->faker->numberBetween(0, 100),
            'created_at' => now(),
            'updated_at' => now(),    
        ];
    }
}
