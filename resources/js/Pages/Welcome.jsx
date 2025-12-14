import PublicLayout from '@/Layouts/PublicLayout';
import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <PublicLayout>
            <Head title="Mily Soft - Solusi Digital Masa Depan" />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center bg-gray-900 overflow-hidden font-ubuntu">
                <div className="absolute inset-0 z-0">
                    <img src="/images/mainphoto.jpg" alt="Background" className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl text-slate-100 space-y-6">
                        <h2 className="text-xl font-semibold uppercase tracking-wider text-sky-400">Selamat datang di Mily Soft</h2>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                            Solusi Software & <br /> <span className="text-sky-500">Aplikasi Cerdas</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 max-w-lg">
                            Kami membantu bisnis Anda bertransformasi digital dengan pengembangan website, aplikasi mobile, dan sistem integrasi yang handal.
                        </p>
                        <div className="pt-4">
                            <Link href="/layanan" className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full font-bold text-lg transition duration-300 inline-flex items-center gap-2">
                                Mulai Sekarang
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Preview */}
            <section className="py-20 bg-white font-ubuntu">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold text-gray-900">We Are Mily Soft</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Mily Soft adalah perusahaan pengembang perangkat lunak yang berfokus pada kualitas dan inovasi.
                                Kami memahami bahwa setiap bisnis memiliki kebutuhan unik, oleh karena itu kami menghadirkan solusi
                                teknologi yang dipersonalisasi untuk mencapai tujuan bisnis Anda.
                            </p>
                            <div className="grid grid-cols-2 gap-6 pt-4">
                                <div className="border-l-4 border-sky-600 pl-4">
                                    <h3 className="font-bold text-xl text-gray-900">Inovatif</h3>
                                    <p className="text-sm text-gray-500">Teknologi terbaru</p>
                                </div>
                                <div className="border-l-4 border-sky-600 pl-4">
                                    <h3 className="font-bold text-xl text-gray-900">Profesional</h3>
                                    <p className="text-sm text-gray-500">Tim berpengalaman</p>
                                </div>
                            </div>
                            <Link href="/tentang" className="inline-block mt-4 text-sky-700 font-bold hover:underline">Pelajari Lebih Lanjut &rarr;</Link>
                        </div>
                        <div className="relative">
                            <img src="/images/about-img.jpg" alt="About Us" className="rounded-lg shadow-xl w-full" />
                            <div className="absolute -bottom-6 -left-6 bg-sky-600 text-white p-6 rounded-lg hidden md:block">
                                <p className="text-4xl font-bold">10+</p>
                                <p className="text-sm">Tahun Melayani</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-20 bg-slate-50 font-ubuntu">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Unggulan</h2>
                        <p className="text-gray-600">Kami menawarkan berbagai layanan pengembangan perangkat lunak untuk memenuhi kebutuhan digitalisasi Anda.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Web Development', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', desc: 'Website responsif dan modern.' },
                            { title: 'Mobile Apps', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z', desc: 'Aplikasi Android & iOS native/hybrid.' },
                            { title: 'System Integration', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', desc: 'Integrasi sistem yang kompleks.' },
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-slate-100 group hover:border-sky-500">
                                <div className="w-14 h-14 bg-sky-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sky-600 transition duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-sky-600 group-hover:text-white transition duration-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 mb-4">{item.desc}</p>
                                <Link href="/layanan" className="text-sky-600 font-semibold text-sm hover:text-sky-800">Lihat Detail</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
