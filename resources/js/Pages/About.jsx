import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';

export default function About({ page }) {
    return (
        <PublicLayout>
            <Head title="Tentang Kami - Mily Soft" />

            <header className="relative bg-gray-900 font-ubuntu h-[40vh] flex items-center">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <img src="/images/mainphoto.jpg" alt="About Header" className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <h1 className="text-5xl font-bold text-white mb-4">Tentang Kami</h1>
                    <div className="h-1 w-20 bg-sky-500"></div>
                </div>
            </header>

            <section className="py-20 bg-white font-ubuntu">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <img src="/images/mainphoto.jpg" alt="About" className="rounded-2xl shadow-2xl" />
                    </div>
                    <div className="space-y-6">
                        {page && page.content ? (
                            <div
                                className="prose prose-lg max-w-none text-gray-600"
                                dangerouslySetInnerHTML={{ __html: page.content }}
                            />
                        ) : (
                            <>
                                <h2 className="text-3xl font-bold text-gray-900">Tentang "Mily Soft"</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Mily Soft adalah perusahaan pengembang perangkat lunak yang berfokus pada solusi digital inovatif.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Didirikan dengan visi untuk membantu bisnis bertransformasi digital, kami menawarkan layanan pembuatan dan pengembangan aplikasi web, mobile, dan sistem integrasi.
                                    Kami percaya bahwa teknologi harus memudahkan, bukan menyulitkan. Oleh karena itu, kami selalu berupaya menciptakan solusi yang user-friendly dan efisien.
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
