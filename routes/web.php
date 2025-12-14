<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('index');

Route::get('/tentang', function () {
    $page = App\Models\Page::where('slug', 'tentang-kami')->first();
    return Inertia::render('About', ['page' => $page]);
})->name('tentang');

Route::get('/layanan', function () {
    $page = App\Models\Page::where('slug', 'layanan-kami')->first();
    return Inertia::render('Services', ['page' => $page]);
})->name('layanan');

Route::get('/kontak', function () {
    return Inertia::render('Contact');
})->name('kontak');

Route::get('/portfolio', [App\Http\Controllers\ProjectController::class, 'index'])->name('portfolio');

Route::get('/dashboard', [App\Http\Controllers\TicketController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::middleware(['auth', 'verified', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'projects' => App\Models\Project::count(),
                'pages' => App\Models\Page::count(),
                'tickets_open' => App\Models\Ticket::where('status', 'open')->count(),
                'tickets_total' => App\Models\Ticket::count(),
            ]
        ]);
    })->name('dashboard');

    Route::resource('projects', App\Http\Controllers\Admin\ProjectController::class);
    Route::resource('pages', App\Http\Controllers\Admin\PageController::class);
    Route::get('/tickets', [App\Http\Controllers\Admin\TicketController::class, 'index'])->name('tickets.index');
    Route::patch('/tickets/{ticket}', [App\Http\Controllers\Admin\TicketController::class, 'update'])->name('tickets.update');
});

Route::get('/p/{slug}', [App\Http\Controllers\PageController::class, 'show'])->name('pages.show');

Route::middleware('auth')->group(function () {
    Route::post('/tickets', [App\Http\Controllers\TicketController::class, 'store'])->name('tickets.store');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
