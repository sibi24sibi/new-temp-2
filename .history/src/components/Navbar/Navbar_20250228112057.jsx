import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu
    const navigate = useNavigate();
    const location = useLocation(); // Get the current route

    const handleLogOut = () => {
        localStorage.setItem('user', '');
        toast.success('User logged out successfully');
        navigate('/login');
    };

    return (
        <nav className="bg-white shadow-md">
            {/* Desktop View */}
            <div className="container mx-auto p-[12px] md:py-4 md:px-[24px] flex justify-between items-center">
                {/* Left Side - Logo and Navigation */}
                <div className="flex items-center gap-4">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/images/logo.png" alt="Logo" className="h-10 w-10" />
                        <h2 className="text-xl font-bold text-gray-800">SmartCard Ai</h2>
                    </Link>
                    <div className="hidden md:flex gap-6 text-gray-700 font-medium">
                        <Link to="/docs">Docs</Link>
                        <Link to="/consulting">Consulting</Link>
                        <Link to="/pricing">Pricing</Link>
                        <Link to="/">Contact</Link>
                    </div>
                </div>

                {/* Right Side - Conditional Buttons */}
                <div className="hidden md:flex gap-4">
                    {location.pathname === '/pricing' ? (
                        <>
                            <Link
                                to="/signup"
                                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors"
                            >
                                Signup
                            </Link>
                            <Link
                                to="/login"
                                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors"
                            >
                                Login
                            </Link>

                        </>
                    ) : (
                        <button
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors"
                        >
                            Download
                        </button>
                    )}
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-700 focus:outline-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu">
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
                <div className="px-4 py-6 flex flex-col gap-4">
                    <Link to="/docs" className="text-gray-700 hover:text-gray-900 font-medium text-lg">
                        Docs
                    </Link>
                    <Link to="/consulting" className="text-gray-700 hover:text-gray-900 font-medium text-lg">
                        Consulting
                    </Link>
                    <Link to="/pricing" className="text-gray-700 hover:text-gray-900 font-medium text-lg">
                        Pricing
                    </Link>
                    <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium text-lg">
                        Contact
                    </Link>

                    {/* Conditional Mobile Buttons */}
                    {location.pathname === '/pricing' ? (
                        <div className="grid grid-cols-2 gap-4">
                            <Link
                                to="/signup"
                                className="text-center bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-md text-lg font-semibold transition-colors"
                            >
                                Signup
                            </Link>
                            <Link
                                to="/login"
                                className="text-center bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-md text-lg font-semibold transition-colors"
                            >
                                Login
                            </Link>
                        </div>
                    ) : (
                        <button
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-md text-lg font-semibold transition-colors"
                        >
                            Download
                        </button>
                    )}
                </div>
            </div>

            {/* Toast Container */}
            <ToastContainer />
        </nav>
    );
};

export default Navbar;
