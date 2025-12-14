import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function AdminDashboard({ auth, stats }) {
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Admin Dashboard</h2>}
        >
            <Head title="Admin Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border-l-4 border-indigo-500">
                            <div className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase">Total Projects</div>
                            <div className="text-3xl font-bold text-gray-800 dark:text-gray-100">{stats.projects}</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border-l-4 border-sky-500">
                            <div className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase">Total Pages</div>
                            <div className="text-3xl font-bold text-gray-800 dark:text-gray-100">{stats.pages}</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
                            <div className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase">Open Tickets</div>
                            <div className="text-3xl font-bold text-gray-800 dark:text-gray-100">{stats.tickets_open}</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                            <div className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase">Total Tickets</div>
                            <div className="text-3xl font-bold text-gray-800 dark:text-gray-100">{stats.tickets_total}</div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
                            <div className="flex flex-wrap gap-4">
                                <Link href={route('admin.projects.create')} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-bold transition">
                                    + Add New Project
                                </Link>
                                <Link href={route('admin.pages.create')} className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg font-bold transition">
                                    + Add New Page
                                </Link>
                                <Link href={route('admin.tickets.index')} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-bold transition">
                                    View Support Tickets
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
