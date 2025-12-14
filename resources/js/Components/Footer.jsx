export default function Footer() {
    return (
        <footer className="bg-zinc-900 font-ubuntu text-slate-100">
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 pt-16 pb-7 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    <div>
                        <div className="text-sky-800 font-poppins flex items-center gap-x-4">
                            <img src="/images/logons.png" alt="Mily Soft" className="h-16 rounded-full" />
                            <h1 className="font-semibold text-3xl text-slate-100">Mily Soft</h1>
                        </div>
                        <p className="mt-4 max-w-xs text-slate-100 opacity-80">
                            Mitra teknologi terpercaya untuk solusi perangkat lunak dan transformasi digital bisnis Anda.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-4">
                        <div>
                            <p className="font-medium text-slate-100 text-2xl font-playfair">Halaman</p>
                            <ul className="mt-4 space-y-2 text-sm text-slate-300">
                                <li><a href="/" className="hover:text-white">Beranda</a></li>
                                <li><a href="/tentang" className="hover:text-white">Tentang</a></li>
                                <li><a href="/layanan" className="hover:text-white">Layanan</a></li>
                                <li><a href="/kontak" className="hover:text-white">Kontak</a></li>
                            </ul>
                        </div>

                        <div className="col-span-2">
                            <p className="font-medium text-slate-100 text-2xl font-playfair mb-4">Newsletter</p>
                            <p className="text-sm text-slate-300 mb-4">Dapatkan informasi terbaru seputar teknologi dan promo menarik.</p>
                            <div className="flex gap-2">
                                <input type="email" placeholder="Email Anda" className="bg-zinc-800 border-none rounded px-4 py-2 w-full text-white" />
                                <button className="bg-sky-800 hover:bg-sky-700 px-4 py-2 rounded text-white font-bold">Kirim</button>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-sm text-center text-slate-400 border-t border-zinc-800 pt-8">
                    &copy; 2024 Mily Soft. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
