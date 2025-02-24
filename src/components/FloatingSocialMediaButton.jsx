import React, { useState } from "react";
import {  FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import { IoEllipsisVerticalSharp,IoEllipsisHorizontalSharp } from "react-icons/io5";

const FloatingSocialMediaButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleMenu}
                ></div>
            )}

            {/* Floating Button and Icons */}
            <div className="fixed bottom-10 right-10 flex flex-col items-end space-y-4 z-50">
                {isOpen && (
                    <div className="flex flex-col items-center space-y-4">
                        <a
                            href="https://wa.me/+918714756263"
                            className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow transform transition-transform duration-300 hover:scale-110"
                        >
                            <FaWhatsapp  color="white" size="24" />
                        </a>

                        <a
                            href="mailto:sales@smartcardai.com"
                            className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center shadow transform transition-transform duration-300 hover:scale-110"
                        >
                            <FaEnvelope color="white" size="24" />
                        </a>

                        <a
                            href="https://www.linkedin.com/company/smartcard-ai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow transform transition-transform duration-300 hover:scale-110"
                        >
                            <FaLinkedin color="white" size="24" />
                        </a>
                    </div>
                )}

                {/* Toggle Button */}
                <button
                    className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow transform transition-transform duration-300 hover:scale-110"
                    onClick={toggleMenu}
                >
                    {isOpen ? (
                        <IoEllipsisVerticalSharp color="white" size="24" className="transition-all duration-300" />
                    ) : (
                        <IoEllipsisHorizontalSharp  color="white" size="24" className="transition-all duration-300" />
                    )}
                </button>
            </div>
        </>
    );
};

export default FloatingSocialMediaButton;