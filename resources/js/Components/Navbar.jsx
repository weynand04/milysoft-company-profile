import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Navbar() {
    const { auth } = usePage().props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-900 border-b border-gray-800 font-ubuntu sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="shrink-0 flex items-center gap-x-3 text-slate-100">
                            <Link href="/">
                                <img src="/images/logons.png" alt="Mily Soft Logo" className="h-10 rounded-full bg-white/10" />
                            </Link>
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-slate-100">Mily Soft</span>
                        </div>
                    </div>

                    <div className="hidden sm:flex items-center space-x-8">
                        <Link href="/" className="text-slate-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Beranda</Link>

                        {/* Dynamic Pages */}
                        {usePage().props.navbar_menu.map((item) => (
                            <Link key={item.slug} href={route('pages.show', item.slug)} className="text-slate-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                {item.title}
                            </Link>
                        ))}

                        <Link href={route('portfolio')} className="text-slate-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Portfolio</Link>

                        {auth.user ? (
                            <Link href={route('dashboard')} className="bg-slate-100 text-sky-800 px-4 py-2 rounded-lg font-bold hover:bg-white transition">
                                Dashboard
                            </Link>
                        ) : (
                            <Link href={route('login')} className="bg-slate-100 text-sky-800 px-4 py-2 rounded-lg font-bold hover:bg-white transition">
                                Login
                            </Link>
                        )}
                    </div>

                    <div className="-me-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path
                                    className={!isMenuOpen ? 'inline-flex' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={isMenuOpen ? 'inline-flex' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={(isMenuOpen ? 'block' : 'hidden') + ' sm:hidden bg-gray-900 border-t border-gray-800'}>
                <div className="pt-2 pb-3 space-y-1">
                    <Link href="/" className="block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 hover:border-gray-50 bg-gray-900 focus:outline-none transition duration-150 ease-in-out">
                        Beranda
                    </Link>

                    {usePage().props.navbar_menu.map((item) => (
                        <Link key={item.slug} href={route('pages.show', item.slug)} className="block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 hover:border-gray-50 bg-gray-900 focus:outline-none transition duration-150 ease-in-out">
                            {item.title}
                        </Link>
                    ))}

                    <Link href={route('portfolio')} className="block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 hover:border-gray-50 bg-gray-900 focus:outline-none transition duration-150 ease-in-out">
                        Portfolio
                    </Link>
                </div>

                <div className="pt-4 pb-4 border-t border-gray-800">
                    <div className="px-4">
                        {auth.user ? (
                            <Link href={route('dashboard')} className="block w-full text-center bg-slate-100 text-sky-800 px-4 py-2 rounded-lg font-bold hover:bg-white transition">
                                Dashboard
                            </Link>
                        ) : (
                            <Link href={route('login')} className="block w-full text-center bg-slate-100 text-sky-800 px-4 py-2 rounded-lg font-bold hover:bg-white transition">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
