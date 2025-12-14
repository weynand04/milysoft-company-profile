# Mily Soft (Web Profile & Client Portal)

**Mily Soft** adalah platform profil perusahaan modern yang terintegrasi dengan sistem manajemen konten (CMS) dan portal klien. Aplikasi ini dirancang untuk menampilkan layanan, portofolio, dan memberikan dukungan pelanggan melalui sistem tiket.

![Mily Soft Banner](/images/banner.png) > *Note: Ganti dengan screenshot aplikasi jika ada.*

## 🛠 Teknologi Utama

Aplikasi ini dibangun menggunakan *Modern Monolith Architecture*:

-   **Backend**: [Laravel 11](https://laravel.com)
-   **Frontend**: [React.js](https://reactjs.org) (via [Inertia.js](https://inertiajs.com))
-   **Styling**: [Tailwind CSS](https://tailwindcss.com) & [Flowbite](https://flowbite.com)
-   **Database**: MySQL
-   **Authentication**: Laravel Breeze
-   **Bundler**: Vite

## 🚀 Fitur Utama

### 1. Halaman Publik (Landing Page)
-   **Desain Modern**: Menggunakan font Ubuntu & Inter dengan gaya *Glassmorphism* dan *Dark Mode ready*.
-   **Halaman Dinamis**: Halaman seperti *Tentang Kami*, *Layanan*, dan halaman kustom lainnya dapat dikelola sepenuhnya via Admin.
-   **Portfolio Showcase**: Menampilkan proyek-proyek terbaru dengan filter kategori.

### 2. CMS (Content Management System)
-   **Manajemen Halaman**: Admin dapat membuat, mengedit, dan menghapus halaman.
-   **Navbar Dinamis**: Admin dapat memilih halaman mana yang ditampilkan di menu navigasi utama.
-   **CRUD Portfolio**: Manajemen proyek portofolio (Judul, Deskripsi, Gambar, Kategori).

### 3. Client Portal
-   **Dashboard Klien**: Area khusus untuk klien terdaftar.
-   **Sistem Tiket Support**: Klien dapat membuka tiket bantuan dan memantau statusnya (Open/In Progress/Closed).
-   **Admin Ticketing**: Admin dapat melihat semua tiket masuk dan memperbarui statusnya.

### 4. Admin Dashboard
-   **Ringkasan Statistik**: Melihat total project, halaman, dan tiket aktif secara *real-time*.
-   **Akses Cepat**: Shortcut untuk menambah konten dengan cepat.

---

## 💻 Cara Instalasi (Local Development)

Ikuti langkah-langkah berikut untuk menjalankan project di komputer lokal:

### Prasyarat
-   PHP >= 8.2
-   Composer
-   Node.js & NPM
-   MySQL

### Langkah Instalasi

1.  **Clone Repository**
    ```bash
    git clone https://github.com/username/mily-soft.git
    cd mily-soft
    ```

2.  **Install Dependencies**
    ```bash
    composer install
    npm install
    ```

3.  **Konfigurasi Environment**
    Salin file `.env.example` menjadi `.env` dan atur database:
    ```bash
    cp .env.example .env
    # Buka file .env dan sesuaikan DB_DATABASE, DB_USERNAME, DB_PASSWORD
    ```

4.  **Generate Key & Migrate**
    ```bash
    php artisan key:generate
    php artisan migrate --seed
    ```
    *> **Note**: Perintah `--seed` akan mengisi database dengan User Admin default dan Halaman contoh.*

5.  **Jalankan Aplikasi**
    Buka dua terminal terpisah:
    ```bash
    # Terminal 1 (Backend)
    php artisan serve
    
    # Terminal 2 (Frontend)
    npm run dev
    ```

6.  **Akses Aplikasi**
    Buka browser di `http://127.0.0.1:8000`.

---

## 🔑 Akun Default (Seeder)

Jika Anda menjalankan `php artisan migrate --seed`, akun berikut tersedia:

-   **Admin**:
    -   Email: `admin@nokensoft.com`
    -   Password: `password`
-   **User (Klien)**:
    -   Email: `client@example.com`
    -   Password: `password`

---

## 📂 Struktur Folder Penting

-   `resources/js/Pages`: Halaman-halaman React (Inertia).
    -   `Admin/`: Halaman khusus Admin (Dashboard, CRUD).
    -   `Landing/` atau Root: Halaman publik (Home, About).
-   `resources/js/Components`: Komponen UI yang dapat digunakan kembali (Navbar, Footer, Input).
-   `app/Http/Controllers`: Logika backend.
-   `routes/web.php`: Definisi rute aplikasi.

---

## 💡 Rekomendasi Pengembangan (Future Roadmap)

Berikut adalah beberapa fitur yang dapat ditambahkan untuk meningkatkan kualitas aplikasi:

1.  **SEO Optimization**: Menambahkan meta tags dinamis (Title, Description, OpenGraph) untuk setiap halaman via Admin.
2.  **Notifikasi Email**: Kirim email otomatis ke Admin saat ada tiket baru, dan ke Klien saat status tiket berubah.
3.  **Media Manager**: Fitur galeri terpusat untuk mengelola gambar agar bisa digunakan kembali di berbagai halaman.
4.  **Toggle Dark Mode**: Tombol di frontend agar pengunjung bisa memilih mode gelap/terang secara manual.
5.  **Google Analytics**: Integrasi tracking untuk memantau pengunjung website.
6.  **Multi-bahasa**: Dukungan Bahasa Indonesia & Inggris untuk konten.
7.  **Social Login (OAuth)**: Integrasi login menggunakan akun Google atau Facebook untuk memudahkan pengguna.
8.  **Newsletter**: Fitur berlangganan email untuk pengunjung agar mendapatkan update berita/promo terbaru.

---

**Refactory Xoni Agency** - Company Profile website made using Laravel v11, TailwindCSS v3.4.13, and Flowbite v2.5.2
