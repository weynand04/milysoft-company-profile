import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';

export default function Services({ page }) {
    return (
        <PublicLayout>
            <Head title="Layanan - Mily Soft" />

            <header className="relative bg-gray-900 font-ubuntu h-[40vh] flex items-center">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <img src="/images/mainphoto.jpg" alt="Services Header" className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <h1 className="text-5xl font-bold text-white mb-4">Layanan Kami</h1>
                    <div className="h-1 w-20 bg-sky-500"></div>
                </div>
            </header>

            <section className="py-20 bg-white font-ubuntu">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {page && page.content ? (
                        <div
                            className="prose prose-lg max-w-none text-gray-600"
                            dangerouslySetInnerHTML={{ __html: page.content }}
                        />
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Web Development',
                                    desc: 'Membangun website perusahaan, e-commerce, dan aplikasi berbasis web yang responsif dan aman.',
                                    icon: 'code'
                                },
                                {
                                    title: 'Mobile Apps',
                                    desc: 'Pengembangan aplikasi mobile (Android/iOS) untuk menjangkau pelanggan Anda di mana saja.',
                                    icon: 'device-mobile'
                                },
                                {
                                    title: 'System Integration',
                                    desc: 'Menghubungkan berbagai sistem yang terpisah agar bekerja secara sinergis dan efisien.',
                                    icon: 'server'
                                },
                                {
                                    title: 'UI/UX Design',
                                    desc: 'Merancang antarmuka pengguna yang intuitif dan menarik untuk pengalaman pengguna terbaik.',
                                    icon: 'pencil'
                                },
                                {
                                    title: 'Cloud Solutions',
                                    desc: 'Implementasi dan manajemen infrastruktur cloud (AWS, Google Cloud) yang scalable.',
                                    icon: 'cloud'
                                },
                                {
                                    title: 'IT Consulting',
                                    desc: 'Konsultasi strategi IT untuk mendukung pertumbuhan bisnis Anda.',
                                    icon: 'chat'
                                }
                            ].map((service, idx) => (
                                <div key={idx} className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg transition duration-300">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 mb-6">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </PublicLayout>
    );
}
