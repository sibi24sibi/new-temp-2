import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import axios from 'axios';
import { useUser } from '../../../src/context/UserContext';
import { ToastContainer, toast } from 'react-toastify';

const backendUrl = 'http://127.0.0.1';

const Login = () => {
    const { login, user } = useUser();
    const navigate = useNavigate();

    const [input, setInput] = useState({
        username: '',
        password: '',
    });

    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (user === null) {
            const query = new URLSearchParams(window.location.search);
            const access_token = query.get('access_token');
            const token_type = query.get('token_type');
            if (access_token && token_type) {
                login({ access_token, token_type });
                return navigate('/orders');
            }
        }
    }, [user, login, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${backendUrl}/login`, input);
            const userData = response.data;
            toast.success("User logged in successfully");
            login(userData);
            localStorage.setItem('user', JSON.stringify(userData));

            setMessage('Login successful!');
            navigate('/pricing');
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message || 'Login failed.');
            } else {
                setMessage('An error occurred. Please try again.');
            }
            setTimeout(() => setMessage(null), 5000);
        }
    };

    const handleGoogleLogin = () => {
        const redirectUrl = `http://127.0.0.1/login/oauth`;
        window.location.href = redirectUrl;
    };

    return (
        <div className='flex flex-col items-center justify-center bg-gray-100 min-h-screen py-8'>
            <div className='bg-white flex flex-col items-center p-6 shadow-lg rounded-lg w-96'>
                <div className='flex flex-row items-center justify-center mb-6'>
                    <img className='h-16 w-16' src="/images/logo-without-bg.png" alt="Logo" />
                    <h2 className='text-lg font-bold text-gray-700'>SmartCard AI</h2>
                </div>

                <h2 className='text-2xl font-bold text-emerald-400 mb-6'>Login</h2>

                <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full'>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={input.username}
                        onChange={(e) => setInput({ ...input, username: e.target.value })}
                        className='w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 p-3 border border-gray-300 text-md'
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={input.password}
                        onChange={(e) => setInput({ ...input, password: e.target.value })}
                        className='w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 p-3 border border-gray-300 text-md'
                        required
                    />

                    <button
                        type="submit"
                        className='w-full rounded-lg p-3 text-white font-bold bg-emerald-400 hover:bg-emerald-500 transition-colors'
                    >
                        Login
                    </button>

                    <div className='relative flex items-center justify-center my-4'>
                        <div className='border-t border-gray-300 w-full'></div>
                        <span className='bg-white px-4 text-sm text-gray-500'>OR</span>
                        <div className='border-t border-gray-300 w-full'></div>
                    </div>

                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className='w-full rounded-lg p-3 text-white font-bold bg-blue-500 hover:bg-blue-600 transition-colors flex items-center justify-center gap-2'
                    >
                        <FaGoogle className="text-xl" />
                        Sign in with Google
                    </button>

                    {message && (
                        <p className={`text-center ${message.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>
                            {message}
                        </p>
                    )}

                    <div className='text-center mt-2'>
                        <Link to="/signup" className='text-emerald-400 text-sm hover:underline'>
                            Don't have an account? Sign Up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;