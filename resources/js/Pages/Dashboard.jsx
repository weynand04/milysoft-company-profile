import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, useForm } from '@inertiajs/react';
import { useState } from 'react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from '@/Components/InputError';

export default function Dashboard({ auth, tickets }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        subject: '',
        message: '',
    });

    const [showForm, setShowForm] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        post(route('tickets.store'), {
            onSuccess: () => {
                reset();
                setShowForm(false);
            },
        });
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Client Dashboard</h2>}
        >
            <Head title="Client Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    {/* Welcome Section */}
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-lg font-bold">Welcome back, {auth.user.name}!</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                This is your client portal. Here you can track your project progress and submit support tickets.
                            </p>
                        </div>
                    </div>

                    {/* Support Tickets Section */}
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Support Tickets</h3>
                            <button
                                onClick={() => setShowForm(!showForm)}
                                className="bg-sky-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-sky-700 transition"
                            >
                                {showForm ? 'Cancel' : '+ New Ticket'}
                            </button>
                        </div>

                        {showForm && (
                            <div className="mb-8 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                <form onSubmit={submit}>
                                    <div>
                                        <InputLabel htmlFor="subject" value="Subject" />
                                        <TextInput
                                            id="subject"
                                            className="mt-1 block w-full"
                                            value={data.subject}
                                            onChange={(e) => setData('subject', e.target.value)}
                                            required
                                            isFocused
                                        />
                                        <InputError message={errors.subject} className="mt-2" />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel htmlFor="message" value="Message" />
                                        <textarea
                                            id="message"
                                            className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm h-24"
                                            value={data.message}
                                            onChange={(e) => setData('message', e.target.value)}
                                            required
                                        ></textarea>
                                        <InputError message={errors.message} className="mt-2" />
                                    </div>

                                    <div className="flex justify-end mt-4">
                                        <PrimaryButton disabled={processing}>Submit Ticket</PrimaryButton>
                                    </div>
                                </form>
                            </div>
                        )}

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200">
                                    <tr>
                                        <th className="p-3">ID</th>
                                        <th className="p-3">Subject</th>
                                        <th className="p-3">Status</th>
                                        <th className="p-3">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700 dark:text-gray-300">
                                    {tickets.map((ticket) => (
                                        <tr key={ticket.id} className="border-b dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-750">
                                            <td className="p-3">#{ticket.id}</td>
                                            <td className="p-3 font-medium">{ticket.subject}</td>
                                            <td className="p-3">
                                                <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase
                                                    ${ticket.status === 'open' ? 'bg-green-100 text-green-800' : ''}
                                                    ${ticket.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' : ''}
                                                    ${ticket.status === 'closed' ? 'bg-gray-100 text-gray-800' : ''}
                                                `}>
                                                    {ticket.status.replace('_', ' ')}
                                                </span>
                                            </td>
                                            <td className="p-3">{new Date(ticket.created_at).toLocaleDateString()}</td>
                                        </tr>
                                    ))}
                                    {tickets.length === 0 && (
                                        <tr>
                                            <td colSpan="4" className="p-4 text-center text-gray-500">No tickets found.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
