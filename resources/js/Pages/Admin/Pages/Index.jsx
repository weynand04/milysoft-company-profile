import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Index({ pages }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this page?')) {
            destroy(route('admin.pages.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Manage Pages</h2>}
        >
            <Head title="Pages" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-end mb-6">
                        <Link href={route('admin.pages.create')} className="bg-sky-600 text-white px-4 py-2 rounded shadow hover:bg-sky-700">
                            + Add New Page
                        </Link>
                    </div>

                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                                    <th className="p-4 border-b dark:border-gray-600">Title</th>
                                    <th className="p-4 border-b dark:border-gray-600">Slug</th>
                                    <th className="p-4 border-b dark:border-gray-600">Status</th>
                                    <th className="p-4 border-b dark:border-gray-600 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pages.map((page) => (
                                    <tr key={page.id} className="hover:bg-gray-50 dark:hover:bg-gray-750 text-gray-800 dark:text-gray-300">
                                        <td className="p-4 border-b dark:border-gray-700 font-bold">{page.title}</td>
                                        <td className="p-4 border-b dark:border-gray-700 text-sm font-mono text-gray-500">/{page.slug}</td>
                                        <td className="p-4 border-b dark:border-gray-700">
                                            <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase
                                                ${page.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}
                                            `}>
                                                {page.status}
                                            </span>
                                        </td>
                                        <td className="p-4 border-b dark:border-gray-700 text-right space-x-2">
                                            <a href={route('pages.show', page.slug)} target="_blank" className="text-gray-600 hover:text-gray-900 font-bold mr-2">View</a>
                                            <Link href={route('admin.pages.edit', page.id)} className="text-blue-600 hover:text-blue-800 font-bold">Edit</Link>
                                            <button onClick={() => handleDelete(page.id)} className="text-red-600 hover:text-red-800 font-bold">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                                {pages.length === 0 && (
                                    <tr>
                                        <td colSpan="4" className="p-4 text-center text-gray-500">No pages found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
