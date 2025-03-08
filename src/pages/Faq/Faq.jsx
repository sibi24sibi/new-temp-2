import React, { useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { faqData, sections } from "../../Datas/faqData";

const Faq = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const location = useLocation();
    const { id } = useParams(); // Get the question ID from the URL

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    // Ensure selectedFaq defaults to faqData[0] if id is missing or invalid
    const selectedFaq = id ? faqData.find((faq) => faq.id === id) : faqData[0];
    const selectedQuestion = id ? sections.find((faq) => faq.id === id) : sections[0];

    return (
        <div className="flex flex-col lg:flex-row relative">
            {/* Sidebar */}
            <div
                className={`bg-gradient-to-r from-[#29AE93] to-[#4EC07A] text-white transition-all duration-300 ease-in-out ${isMenuVisible ? "w-64 p-4" : "w-20 p-4"
                    } fixed top-[64px] left-0 h-[calc(100vh-64px)] z-10 overflow-y-auto`}
                style={{ overflow: "visible" }}
            >
                <h2 className={`font-bold text-2xl mt-4 ml-8 ${!isMenuVisible ? "hidden" : "block"}`}>FAQ</h2>
                <div className="absolute right-[-12px] top-8">
                    <button
                        onClick={toggleMenu}
                        className={`transition-transform transform hover:scale-110 bggrad text-white rounded-full shadow hover:bggrad2 focus:outline-none duration-300 ${isMenuVisible ? 'rotate-180' : ''}`}
                    >
                        <IoIosArrowDroprightCircle size={24} className="fill-white " />
                    </button>
                </div>

                {/* Sidebar Links */}
                <ul className="space-y-4 mt-6 max-h-[calc(100vh-150px)] overflow-y-auto custom-scrollbar">
                    {sections.map((section) => (
                        <li key={section.id}>
                            <Link
                                to={section.path}
                                className={`flex ${isMenuVisible ? "justify-start p-2" : "justify-center py-2"
                                    } items-center rounded-lg transition-all duration-300 ${location.pathname === section.path ? "bg-[#4cba8b]" : "hover:bg-[#4cba8b]"
                                    }`}
                            >
                                <span className={`${isMenuVisible ? "mr-3" : "mr-0"}`}>{section.icon}</span>
                                <span className={`font-semibold ${isMenuVisible ? "inline" : "hidden"}`}>
                                    {section.label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Content */}
            <div className={`transition-all duration-500 w-full p-6 ${isMenuVisible ? "ml-64" : "ml-20"} mt-[64px]`}>
                {selectedQuestion && <h2 className="font-bold text-2xl mb-4">{selectedQuestion.label}</h2>}
                <div className="space-y-4">
                    {selectedFaq && (
                        <div className="p-4 border rounded-lg shadow-md bg-white">
                            <p className="text-gray-700 mt-2" dangerouslySetInnerHTML={{ __html: selectedFaq.answer }} />
                        </div>
                    )}
                </div>
                <Outlet context={{ isMenuVisible }} />
            </div>
        </div>
    );
};

export default Faq;
