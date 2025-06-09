<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Homepage');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
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

        News::create([
            'title' => $validated['title'],
            'slug' => Str::slug($validated['title']),
            'author' => auth()->user()->first_name . ' ' . auth()->user()->last_name,
            'category' => $validated['category'],
            'description' => $validated['description'],
            'thumbnail' => $thumbnailPath,
            'content' => $validated['content'],
            'status' => $validated['status'],
            'published_at' => $validated['status'] === 'published' ? now() : null,
        ]);

        return redirect()->route('admin.dashboard')->with('success', 'Berita berhasil disimpan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(news $news)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(news $news)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, news $news)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(news $news)
    {
        //
    }
}
