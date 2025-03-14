import React, { useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import useCasesData from "../../Datas/usecases";

const UseCases = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const location = useLocation();
    const { id } = useParams();

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    // Ensure selectedUseCase defaults to the first item if id is missing or invalid
    const selectedUseCase = id ? useCasesData.find((useCase) => useCase.id === id) : useCasesData[0];
    console.log(selectedUseCase); // Debugging log to check selected use case

    return (
        <div className={` duration-500 shadow-lg relative bottom-0 flex flex-col lg:flex-row mt-[64px] z-[150]`}>
            {/* Sidebar */}

            <div
                className={`bg-gradient-to-r from-[#29AE93] to-[#4EC07A] text-white transition-all duration-300 ease-in-out ${isMenuVisible ? "w-64 p-4" : "w-20 p-4"
                    } fixed h-[calc(100vh-64px)] z-20 overflow-y-auto`}
                style={{ overflow: "visible" }}
            >
                <h2 className={`font-bold text-2xl mt-4 ml-8 ${!isMenuVisible ? "hidden" : "block"}`}>Use Cases</h2>
                <div className={`absolute -right-3 top-8`}>
                    <button
                        onClick={toggleMenu}
                        className={`transition-transform transform hover:scale-110 bggrad text-white rounded-full shadow hover:bggrad2 focus:outline-none duration-300 ${isMenuVisible ? 'rotate-180' : ''}`}
                    >
                        <IoIosArrowDroprightCircle size={24} className="fill-white" />
                    </button>
                </div>

                {/* Sidebar Links */}
                <ul className=" docsidebar space-y-4 mt-6 overflow-y-auto max-h-[calc(100vh-150px)] transition-all duration-300 ease-in-out">
                    {useCasesData.map((section) => (
                        <li key={section.id}>
                            <Link
                                to={`/usecase/${section.id}`}
                                className={`flex ${isMenuVisible ? "justify-start p-2" : "justify-center py-2"}
                                    items-center rounded-lg transition-all duration-300 ${id === section.id ? "bg-[#4cba8b]" : "hover:bg-[#4cba8b]"}`}
                            >
                                <span className={`${isMenuVisible ? "mr-3" : "mr-0"}`}>{section.icon}</span>
                                <span className={`font-semibold ${isMenuVisible ? "inline" : "hidden"}`}>{section.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>




            {/* Main Content */}
            <div className={`transition-all duration-500 w-full p-6 ${isMenuVisible ? "md:pl-72 pl-24" : "pl-24"} pt-[64px]`}>
                {selectedUseCase ? (
                    <div className="">
                        <h2 className="text-2xl font-semibold text-gray-800">{selectedUseCase.title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: selectedUseCase.description }} />
                        <h2 className="text-l font-bold text-gray-800 mt-6 md:mx-8 mb-6 "> {selectedUseCase.heading} </h2>
                        {selectedUseCase.image && <img src={selectedUseCase.image} alt="Use Case" className="mt-2 md:w-4/6 w-full h-auto " />}
                        <div className="mb-5" dangerouslySetInnerHTML={{ __html: selectedUseCase.details }} />
                    </div>
                ) : (
                    <p className="text-red-500">Use case not found.</p>
                )}

                <Outlet context={{ isMenuVisible }} />
            </div>
        </div>
    );
};

export default UseCases;
