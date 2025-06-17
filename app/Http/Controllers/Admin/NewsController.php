<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Notifications\NewNewsNotification;
use App\Models\User;

class NewsController extends Controller
{
    public function index()
    {
        return Inertia::render('Homepage');
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|in:politik,ekonomi,teknologi,olahraga,hiburan',
            'description' => 'required|string|max:255',
            'thumbnail' => 'required|image|mimes:jpg,jpeg,png|max:2048',
            'content' => 'required|string',
            'status' => 'required|in:draft,published',
        ]);

        $thumbnailPath = $request->file('thumbnail')->store('thumbnails', 'public');

        $news = News::create([
            'title' => $validated['title'],
            'slug' => Str::slug($validated['title']),
            'author' => auth()->user()->first_name . ' ' . auth()->user()->last_name,
            'author_id' => auth()->id(),
            'category' => $validated['category'],
            'description' => $validated['description'],
            'thumbnail' => $thumbnailPath,
            'content' => $validated['content'],
            'status' => $validated['status'],
            'published_at' => $validated['status'] === 'published' ? now() : null,
        ]);

        // Kirim notifikasi hanya jika status published
        if ($validated['status'] === 'published') {
            // Cari user yang punya push_notifications = true
            $usersToNotify = User::whereHas('setting', function ($query) {
                $query->where('push_notifications', true);
            })->get();

            foreach ($usersToNotify as $user) {
                $user->notify(new NewNewsNotification($news));
            }
        }

        return redirect()->route('admin.dashboard')->with('success', 'Berita berhasil disimpan.');
    }

    public function show(news $news)
    {
        //
    }

    public function edit(news $news)
    {
        //
    }

    public function update(Request $request, news $news)
    {
        //
    }

    public function destroy(news $news)
    {
        //
    }
}
