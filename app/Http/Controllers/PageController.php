<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function show($slug)
    {
        $page = Page::where('slug', $slug)->where('status', 'published')->firstOrFail();

        if ($slug === 'tentang-kami')
            return Inertia::render('About', ['page' => $page]);
        if ($slug === 'layanan-kami')
            return Inertia::render('Services', ['page' => $page]);
        if ($slug === 'kontak')
            return Inertia::render('Contact', ['page' => $page]);

        return Inertia::render('DynamicPage', [
            'page' => $page
        ]);
    }
}
