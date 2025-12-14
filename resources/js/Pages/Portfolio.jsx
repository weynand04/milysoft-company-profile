import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Portfolio({ projects }) {
    const [filter, setFilter] = useState('all');

    const filteredProjects = projects.filter(project =>
        filter === 'all' ? true : project.category === filter
    );

    return (
        <PublicLayout>
            <Head title="Portfolio - Mily Soft" />

            <header className="relative bg-gray-900 font-ubuntu h-[40vh] flex items-center">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <img src="/images/mainphoto.jpg" alt="Portfolio Header" className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <h1 className="text-5xl font-bold text-white mb-4">Portfolio Kami</h1>
                    <div className="h-1 w-20 bg-sky-500"></div>
                    <p className="mt-4 text-slate-300 text-lg max-w-2xl">
                        Lihat hasil karya terbaik kami dalam membantu klien mencapai tujuan digital mereka.
                    </p>
                </div>
            </header>

            <section className="py-16 bg-white font-ubuntu">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {['all', 'web', 'mobile', 'system'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full font-bold transition duration-300 ${filter === cat
                                        ? 'bg-sky-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-slate-100">
                                <div className="relative h-64 overflow-hidden">
                                    {project.image ? (
                                        <img
                                            src={`/storage/${project.image}`}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                                            No Image
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                                        <span className="text-sky-400 font-bold uppercase text-sm">{project.category}</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition">{project.title}</h3>
                                    <p className="text-gray-600 line-clamp-3 mb-4 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                    <span className="inline-block px-3 py-1 bg-sky-50 text-sky-700 text-xs font-bold rounded-full uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20 text-gray-500">
                            <p className="text-xl">Belum ada project di kategori ini.</p>
                        </div>
                    )}
                </div>
            </section>
        </PublicLayout>
    );
}
