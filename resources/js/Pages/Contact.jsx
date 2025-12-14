import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';

export default function Contact({ page }) {
    return (
        <PublicLayout>
            <Head title={`${page.title} - Mily Soft`} />

            <header className="bg-gray-900 font-ubuntu py-20 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{page.title}</h1>
                    <div className="h-1 w-20 bg-sky-500"></div>
                </div>
            </header>

            <section className="py-16 bg-white font-ubuntu">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Render DB Content (Address, Info, etc) */}
                    <div
                        className="prose prose-lg max-w-none text-gray-700 mb-12"
                        dangerouslySetInnerHTML={{ __html: page.content }}
                    />
                </div>
            </section>
        </PublicLayout>
    );
}
