import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { ChartArea, Icon } from "lucide-react";
import { BiMoney } from "react-icons/bi";
import { Si365Datascience, SiGrapheneos, SiMarketo } from "react-icons/si";
import { FaChartBar } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";

const sections = [
    {
        id: 1,
        title: "Finance",
        path: "/finance",

        icon: <FaChartBar />
    },
    {
        id: 2,
        title: "Market",
        path: "/market",
        icon: <AiOutlineStock />
    },
    {
        id: 3,
        title: "Data science",
        path: "/datascience",
        // icon: <GiMaterialsScience />

    },
    {
        id: 4,
        title: "Scientific Research",
        path: "/scientificresearch",
        // icon: <MdOutlineScience />
    },
];

const UseCases = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(true); // Move hook inside component
    const location = useLocation(); // Add useLocation hook to track current path

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <div className={`h-[calc(100vh-64px)] duration-500 shadow-lg relative bottom-0 flex flex-col lg:flex-row mt-[64px] z-[150]`}>
            {/* Sidebar */}
            <div
                className={`bg-gradient-to-r from-[#29AE93] to-[#4EC07A] text-white transition-all duration-300 ease-in-out ${isMenuVisible ? "w-64 p-4" : "w-20 p-4"
                    } fixed h-[calc(100vh-64px)] z-20 overflow-y-auto`}
                style={{ overflow: "visible" }}
            >
                <h2 className={`font-bold text-2xl mt-4 ml-8 ${!isMenuVisible ? "hidden" : "block"}`}> Use Cases</h2>
                <div className={`absolute -right-3 top-8`}>
                    <button
                        onClick={toggleMenu}
                        className={`transition-transform transform hover:scale-110 bggrad text-white rounded-full shadow hover:bggrad2 focus:outline-none duration-300 ${isMenuVisible ? 'rotate-180' : ''}`}
                    >
                        <IoIosArrowDroprightCircle size={24} className="fill-white" />
                    </button>
                </div>

                {/* Sidebar Links */}
                <ul className="docsidebar space-y-4 mt-6 overflow-y-auto max-h-[calc(100vh-150px)] transform transition-all duration-300 ease-in-out">
                    {sections.map((section) => (
                        <li key={section.id}>
                            <Link
                                to={section.path}
                                className={`flex ${isMenuVisible ? "justify-start p-2" : "justify-center py-2"
                                    } items-center rounded-lg transition-all duration-300 ${location.pathname === section.path ? "bg-[#4cba8b]" : "hover:bg-[#4cba8b]"}`
                                }
                            >
                                <span className={`${isMenuVisible ? "mr-3" : "mr-0"}`}>{section.icon}</span>
                                <span className={`font-semibold ${isMenuVisible ? "inline" : "hidden"}`}>
                                    {section.title}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UseCases;
