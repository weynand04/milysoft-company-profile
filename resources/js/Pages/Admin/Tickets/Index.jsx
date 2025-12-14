import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Index({ tickets }) {
    const { patch, processing } = useForm();

    const handleStatusUpdate = (ticketId, newStatus) => {
        if (confirm(`Change status to ${newStatus}?`)) {
            patch(route('admin.tickets.update', ticketId), {
                data: { status: newStatus },
                preserveScroll: true,
            });
        }
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Manage Support Tickets</h2>}
        >
            <Head title="Support Tickets" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                                    <th className="p-4 border-b dark:border-gray-600">ID</th>
                                    <th className="p-4 border-b dark:border-gray-600">User</th>
                                    <th className="p-4 border-b dark:border-gray-600">Subject</th>
                                    <th className="p-4 border-b dark:border-gray-600">Message</th>
                                    <th className="p-4 border-b dark:border-gray-600">Status</th>
                                    <th className="p-4 border-b dark:border-gray-600 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tickets.map((ticket) => (
                                    <tr key={ticket.id} className="hover:bg-gray-50 dark:hover:bg-gray-750 text-gray-800 dark:text-gray-300 text-sm">
                                        <td className="p-4 border-b dark:border-gray-700">#{ticket.id}</td>
                                        <td className="p-4 border-b dark:border-gray-700 font-bold">{ticket.user?.name}</td>
                                        <td className="p-4 border-b dark:border-gray-700">{ticket.subject}</td>
                                        <td className="p-4 border-b dark:border-gray-700 truncate max-w-xs">{ticket.message}</td>
                                        <td className="p-4 border-b dark:border-gray-700">
                                            <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase
                                                ${ticket.status === 'open' ? 'bg-green-100 text-green-800' : ''}
                                                ${ticket.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' : ''}
                                                ${ticket.status === 'closed' ? 'bg-gray-100 text-gray-800' : ''}
                                            `}>
                                                {ticket.status.replace('_', ' ')}
                                            </span>
                                        </td>
                                        <td className="p-4 border-b dark:border-gray-700 text-right space-x-2">
                                            {ticket.status !== 'closed' && (
                                                <button
                                                    onClick={() => handleStatusUpdate(ticket.id, 'closed')}
                                                    className="text-red-600 hover:text-red-800 font-bold text-xs border border-red-600 px-2 py-1 rounded"
                                                    disabled={processing}
                                                >
                                                    Close
                                                </button>
                                            )}
                                            {ticket.status === 'open' && (
                                                <button
                                                    onClick={() => handleStatusUpdate(ticket.id, 'in_progress')}
                                                    className="text-blue-600 hover:text-blue-800 font-bold text-xs border border-blue-600 px-2 py-1 rounded"
                                                    disabled={processing}
                                                >
                                                    Mark In Progress
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                {tickets.length === 0 && (
                                    <tr>
                                        <td colSpan="6" className="p-4 text-center text-gray-500">No tickets found.</td>
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
