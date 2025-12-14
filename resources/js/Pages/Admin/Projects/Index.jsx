import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Index({ projects }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this project?')) {
            destroy(route('admin.projects.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Manage Projects</h2>}
        >
            <Head title="Projects" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-end mb-6">
                        <Link href={route('admin.projects.create')} className="bg-sky-600 text-white px-4 py-2 rounded shadow hover:bg-sky-700">
                            + Add New Project
                        </Link>
                    </div>

                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                                    <th className="p-4 border-b dark:border-gray-600">Title</th>
                                    <th className="p-4 border-b dark:border-gray-600">Category</th>
                                    <th className="p-4 border-b dark:border-gray-600">Image</th>
                                    <th className="p-4 border-b dark:border-gray-600 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map((project) => (
                                    <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-gray-750 text-gray-800 dark:text-gray-300">
                                        <td className="p-4 border-b dark:border-gray-700">{project.title}</td>
                                        <td className="p-4 border-b dark:border-gray-700 uppercase">{project.category}</td>
                                        <td className="p-4 border-b dark:border-gray-700">
                                            {project.image && (
                                                <img src={`/storage/${project.image}`} alt={project.title} className="w-16 h-10 object-cover rounded" />
                                            )}
                                        </td>
                                        <td className="p-4 border-b dark:border-gray-700 text-right space-x-2">
                                            <Link href={route('admin.projects.edit', project.id)} className="text-blue-600 hover:text-blue-800 font-bold">Edit</Link>
                                            <button onClick={() => handleDelete(project.id)} className="text-red-600 hover:text-red-800 font-bold">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                                {projects.length === 0 && (
                                    <tr>
                                        <td colSpan="4" className="p-4 text-center text-gray-500">No projects found.</td>
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
