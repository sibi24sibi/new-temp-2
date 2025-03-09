import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="md:h-[700px] flex justify-start bg-gradient-to-r from-[#0098b1] to-[#7BD75A] text-white font-bold py-24">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 justify-start">
                {/* Copyright and Social Section */}
                <div className="flex flex-col md:flex-row items-start md:items-center  justify-between mb-8 px-12 md:px-12">

                    {/* Copyright Section */}
                    <h2 className="text-center text-lg mb-4 md:mb-0">CopyRight @SmartCard Ai</h2>

                    {/* Social Section */}
                    <div className="flex flex-col items-start md:items-end gap-2">
                        <h3 className="text-lg">Social</h3>
                        <div className="flex items-center gap-2">
                            <a href="https://in.linkedin.com/company/smartcard-ai" className='p-0 m-0' rel="noreferrer" target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide text-white lucide-linkedin border-2 p-[2px] rounded-lg h-8 w-8 white bg-blue-600 border-blue-600">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <h4 className='text-md'>Linkedin</h4>
                        </div>
                    </div>
                </div>

                {/* Footer Columns */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-12">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-2 ">
                        <Link to="/contact" className="hover:text-gray-300 transition-colors">
                            Contact
                        </Link>
                        <Link to="/features" className="hover:text-gray-300 transition-colors">
                            Features
                        </Link>
                        <Link to="/pricing" className="hover:text-gray-300 transition-colors">
                            Pricing
                        </Link>
                        <Link to="/docs" className="hover:text-gray-300 transition-colors">
                            Docs
                        </Link>
                        <Link to="/faq" className="hover:text-gray-300 transition-colors">
                            FAQ
                        </Link>
                        <Link to="/careers" className="hover:text-gray-300 transition-colors">
                            careers
                        </Link>
                        <Link to="/smartcard-ai" className="hover:text-gray-300 transition-colors">
                            products
                        </Link>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-2 ">
                        {/* <Link to="/" className="hover:text-gray-300 transition-colors">
                            Courses
                        </Link> */}
                        {/* <Link to="/" className="hover:text-gray-300 transition-colors">
                            Tutorials
                        </Link> */}
                        <Link to="/" className="hover:text-gray-300 transition-colors">
                            Partnerships
                        </Link>
                        {/* <Link to="/" className="hover:text-gray-300 transition-colors">
                            Data Analyst Support
                        </Link> */}
                        <Link to="/" className="hover:text-gray-300 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to="/" className="hover:text-gray-300 transition-colors">
                            Terms & Conditions
                        </Link>
                        <Link to="/faq/9" className="hover:text-gray-300 transition-colors">
                            ROI Calculator
                        </Link>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-2 ">
                        <Link to="/login" className="hover:text-gray-300 transition-colors">
                            Login
                        </Link>
                        <Link to="/signup" className="hover:text-gray-300 transition-colors">
                            Signup
                        </Link>
                        <Link to="/" className="hover:text-gray-300 transition-colors">
                            Download
                        </Link>
                        <Link to="/" className="hover:text-gray-300 transition-colors">
                            Update
                        </Link>
                        <Link to="/" className="hover:text-gray-300 transition-colors">
                            Develop BI Using AI
                        </Link>
                    </div>

                    {/* Column 4 - Address */}
                    <div className="flex flex-col gap-4 ">
                        <h3 className="text-lg">Address</h3>
                        <p className="text-md font-normal leading-relaxed">
                            SmartCard AI, Fastighets Cybr Systems Pvt Ltd,
                            Poickattussery, Kapella Jn, Chengamand P.O,
                            Kerala, India Pin : 683578
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;