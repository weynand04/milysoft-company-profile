import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, router } from '@inertiajs/react'; // Ensure router is imported for delete if needed, though useForm helper is sufficient
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Edit({ project }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'PUT',
        title: project.title,
        category: project.category,
        description: project.description,
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.projects.update', project.id));
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Edit Project</h2>}
        >
            <Head title="Edit Project" />

            <div className="py-12">
                <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 p-6 shadow-sm sm:rounded-lg">
                        <form onSubmit={submit} encType="multipart/form-data">
                            <div>
                                <InputLabel htmlFor="title" value="Project Title" />
                                <TextInput
                                    id="title"
                                    type="text"
                                    className="mt-1 block w-full"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    required
                                    isFocused
                                />
                                <InputError message={errors.title} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="category" value="Category" />
                                <select
                                    id="category"
                                    className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                    value={data.category}
                                    onChange={(e) => setData('category', e.target.value)}
                                >
                                    <option value="web">Web Development</option>
                                    <option value="mobile">Mobile App</option>
                                    <option value="system">System Information</option>
                                </select>
                                <InputError message={errors.category} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="image" value="Project Image (Leave empty to keep current)" />
                                {project.image && (
                                    <div className="mb-2">
                                        <img src={`/storage/${project.image}`} alt="Current" className="h-20 rounded" />
                                    </div>
                                )}
                                <input
                                    id="image"
                                    type="file"
                                    className="mt-1 block w-full text-gray-700 dark:text-gray-300"
                                    onChange={(e) => setData('image', e.target.files[0])}
                                />
                                <InputError message={errors.image} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="description" value="Description" />
                                <textarea
                                    id="description"
                                    className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm h-32"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    required
                                ></textarea>
                                <InputError message={errors.description} className="mt-2" />
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <PrimaryButton className="ml-4" disabled={processing}>
                                    Update Project
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
