<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // About Page Content
        $aboutContent = '
            <p class="text-gray-600 text-lg leading-relaxed mb-4">
                Mily Soft adalah perusahaan pengembang perangkat lunak yang berfokus pada solusi digital inovatif.
            </p>
            <p class="text-gray-600 text-lg leading-relaxed">
                Didirikan dengan visi untuk membantu bisnis bertransformasi digital, kami menawarkan layanan pembuatan dan pengembangan aplikasi web, mobile, dan sistem integrasi.
                Kami percaya bahwa teknologi harus memudahkan, bukan menyulitkan. Oleh karena itu, kami selalu berupaya menciptakan solusi yang user-friendly dan efisien.
            </p>
            <h2 class="text-3xl font-bold text-center text-gray-900 mt-12 mb-8">Kenapa Memilih Kami?</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white p-8 rounded-lg shadow-sm text-center border border-gray-100">
                    <h3 class="font-bold text-xl mb-2 text-gray-900">Berpengalaman</h3>
                    <p class="text-gray-600">Tim kami terdiri dari developer senior dengan jam terbang tinggi.</p>
                </div>
                <div class="bg-white p-8 rounded-lg shadow-sm text-center border border-gray-100">
                    <h3 class="font-bold text-xl mb-2 text-gray-900">Terpercaya</h3>
                    <p class="text-gray-600">Kami telah menangani berbagai proyek dari klien pemerintah maupun swasta.</p>
                </div>
                <div class="bg-white p-8 rounded-lg shadow-sm text-center border border-gray-100">
                    <h3 class="font-bold text-xl mb-2 text-gray-900">Support Terbaik</h3>
                    <p class="text-gray-600">Layanan purna jual yang responsif dan siap membantu Anda.</p>
                </div>
            </div>
        ';

        Page::updateOrCreate(
            ['slug' => 'tentang-kami'],
            [
                'title' => 'Tentang Kami',
                'content' => $aboutContent,
                'status' => 'published',
                'in_navbar' => true,
            ]
        );

        // Services Page Content
        $servicesContent = '
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm">
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Web Development</h3>
                    <p class="text-gray-600">Membangun website perusahaan, e-commerce, dan aplikasi berbasis web yang responsif dan aman.</p>
                </div>
                <div class="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm">
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Mobile Apps</h3>
                    <p class="text-gray-600">Pengembangan aplikasi mobile (Android/iOS) untuk menjangkau pelanggan Anda di mana saja.</p>
                </div>
                <div class="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm">
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">System Integration</h3>
                    <p class="text-gray-600">Menghubungkan berbagai sistem yang terpisah agar bekerja secara sinergis dan efisien.</p>
                </div>
                <div class="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm">
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">UI/UX Design</h3>
                    <p class="text-gray-600">Merancang antarmuka pengguna yang intuitif dan menarik untuk pengalaman pengguna terbaik.</p>
                </div>
                <div class="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm">
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Cloud Solutions</h3>
                    <p class="text-gray-600">Implementasi dan manajemen infrastruktur cloud (AWS, Google Cloud) yang scalable.</p>
                </div>
                <div class="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm">
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">IT Consulting</h3>
                    <p class="text-gray-600">Konsultasi strategi IT untuk mendukung pertumbuhan bisnis Anda.</p>
                </div>
            </div>
        ';

        Page::updateOrCreate(
            ['slug' => 'layanan-kami'],
            [
                'title' => 'Layanan Kami',
                'content' => $servicesContent,
                'status' => 'published',
                'in_navbar' => true,
            ]
        );

        // Contact Page Content
        $contactContent = '
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div class="bg-gray-900 p-8 rounded-2xl text-white">
                    <h3 class="text-2xl font-bold mb-6">Informasi Kontak</h3>
                    <div class="space-y-6">
                        <div class="flex items-start space-x-4">
                            <div>
                                <h4 class="font-bold text-sky-400">Alamat</h4>
                                <p className="text-gray-300">Jl. Teknologi No. 123, Jakarta Selatan, Indonesia</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-4">
                            <div>
                                <h4 class="font-bold text-sky-400">Email</h4>
                                <p className="text-gray-300">hello@milysoft.com</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-4">
                            <div>
                                <h4 class="font-bold text-sky-400">Telepon</h4>
                                <p className="text-gray-300">+62 812 3456 7890</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-4">
                            <div>
                                <h4 class="font-bold text-sky-400">Jam Kerja</h4>
                                <p className="text-gray-300">Senin - Jumat: 09:00 - 17:00</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
                    <form>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Nama</label>
                            <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500" placeholder="Nama Anda" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500" placeholder="email@contoh.com" />
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Pesan</label>
                            <textarea class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500 h-32" placeholder="Tulis pesan Anda disini..."></textarea>
                        </div>
                        <button type="button" class="w-full bg-sky-600 text-white font-bold py-3 rounded-lg hover:bg-sky-700 transition duration-300">
                            Kirim Pesan
                        </button>
                    </form>
                </div>
            </div>
        ';

        Page::updateOrCreate(
            ['slug' => 'kontak'],
            [
                'title' => 'Hubungi Kami',
                'content' => $contactContent,
                'status' => 'published',
                'in_navbar' => true,
            ]
        );
    }
}
