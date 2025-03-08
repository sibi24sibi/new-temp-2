import { Mail, Phone } from 'lucide-react';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export const Contact = () => {
    return (
        <div className='flex flex-col items-center justify-center p-6 my-28 w-full max-w-lg mx-auto'>
            <h2 className='uppercase font-bold text-4xl text-green-700 mb-6'>Contact</h2>

            <div className='flex flex-col gap-6 w-full'>
                <span className='flex items-center gap-4 p-4  text-green-800   transition'>
                    <Mail className='text-green-600' size={24} />
                    <h3 className='text-lg font-medium  text-slate-900'>info@gmail.com</h3>
                </span>

                <a
                    href='https://www.linkedin.com/in/your-linkedin-profile-url/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-4 p-4  text-green-800  transition'
                >
                    <FaLinkedin className='text-green-600' size={24} />
                    <h3 className='text-lg font-medium  text-slate-900'>
                        https://www.linkedin.com/company/smartcard-ai</h3>
                </a>
                <span className='flex items-center gap-4 p-4  text-green-800  transition'>
                    <FaWhatsapp className='text-green-600' size={24} />
                    <h3 className='text-lg font-medium  text-slate-900'>whatsapp@gmail.com</h3>
                </span>
                <span className='flex items-center gap-4 p-4  text-green-800  transition'>
                    <Phone className='text-green-600' size={24} />
                    <h3 className='text-lg font-medium  text-slate-900'>+ 91 87147 56263</h3>
                </span>
            </div>
        </div>
    );
};

export default Contact;