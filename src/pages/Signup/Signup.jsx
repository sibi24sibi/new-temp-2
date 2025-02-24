import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    tnc_accepted: false,
    privacy_accepted: false,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1/register', {
        username: formData.username,
        password: formData.password,
        email: formData.email,
        name: formData.name,
        tnc_accepted: formData.tnc_accepted,
        privacy_accepted: formData.privacy_accepted,
      });

      if (response.status === 200) {
        setMessage('Sign-up successful!');
        // Optional: Navigate to login page after successful signup
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setMessage(`Error: ${response.data.message || 'Failed to sign up'}`);
      }
    } catch (error) {
      if (error.response) {
        setMessage(`Error: ${error.response.data.message || 'Server error'}`);
      } else {
        setMessage('Network error. Please try again later.');
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const response = await fetch('/login/google');
      const data = await response.json();
      const accessToken = data.access_token;

      // Save the token
      localStorage.setItem('access_token', accessToken);

      window.location.href = 'http://127.0.0.1/login/oauth';
    } catch (error) {
      console.error('Google login redirect failed:', error.message);
      setMessage('Google login failed.');
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center bg-gray-100 py-8'>
      <div className='bg-white flex flex-col items-center p-6 shadow-lg rounded-lg w-96'>
        <div className='flex flex-row items-center justify-center mb-6'>
          <img className='h-16 w-16' src="/images/logo-without-bg.png" alt="Logo" />
          <h2 className='text-lg font-bold text-gray-700'>SmartCard AI</h2>
        </div>

        <h2 className='text-2xl font-bold text-emerald-400 mb-6'>Sign Up</h2>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full'>
          <input
            name='username'
            className='w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 p-3 border border-gray-300 text-md'
            type="text"
            placeholder='Username'
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            name='name'
            className='w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 p-3 border border-gray-300 text-md'
            type="text"
            placeholder='Full Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            name='email'
            className='w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 p-3 border border-gray-300 text-md'
            type="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name='password'
            className='w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 p-3 border border-gray-300 text-md'
            type="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className='flex flex-col gap-3 my-4'>
            <label className='flex items-center gap-2 text-sm'>
              <input
                type="checkbox"
                name="tnc_accepted"
                checked={formData.tnc_accepted}
                onChange={handleChange}
                className='h-4 w-4 rounded border-gray-300 text-emerald-400 focus:ring-emerald-400'
              />
              I accept the terms and conditions
            </label>
            <label className='flex items-center gap-2 text-sm'>
              <input
                type="checkbox"
                name="privacy_accepted"
                checked={formData.privacy_accepted}
                onChange={handleChange}
                className='h-4 w-4 rounded border-gray-300 text-emerald-400 focus:ring-emerald-400'
              />
              I accept the privacy policy
            </label>
          </div>

          <button
            type="submit"
            className='w-full rounded-lg p-3 text-white font-bold bg-emerald-400 hover:bg-emerald-500 transition-colors'
          >
            Sign Up
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className='w-full rounded-lg p-3 text-white font-bold bg-blue-500 hover:bg-blue-600 transition-colors flex items-center justify-center gap-2'
          >
            <FaGoogle />
            Sign in with Google
          </button>

          {message && (
            <p className={`text-center ${message.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
              {message}
            </p>
          )}

          <div className='text-center mt-2'>
            <Link to="/login" className='text-emerald-400 text-sm hover:underline'>
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;