import React, { useEffect, useState } from 'react';
import { MoveLeft, MoveRight, Calendar, ChevronDown } from 'lucide-react';
import Input from '../../../components/Input';
import DashboardWithUser from '../../../components/DashboardWithUser';

// Dummy data for the left-side table
const salesRanking = [
    { id: 1, product: 'Product 01', amount: 5890900 },
    { id: 2, product: 'Product 02', amount: 4920778 },
    { id: 3, product: 'Product 03', amount: 5012336 },
    { id: 4, product: 'Product 04', amount: 2341097 },
    { id: 5, product: 'Product 05', amount: 6989256 },
    { id: 6, product: 'Product 06', amount: 8541232 },
    { id: 7, product: 'Product 07', amount: 8541232 },
    { id: 8, product: 'Product 08', amount: 8541232 },
    { id: 9, product: 'Product 09', amount: 8541232 }
];

// Dummy data for the right-side table
const rightTableData = [
    { id: 1, item: 'Item A', price: 1000 },
    { id: 2, item: 'Item B', price: 2000 },
    { id: 3, item: 'Item C', price: 3000 },
    { id: 4, item: 'Item D', price: 4000 },
    { id: 5, item: 'Item E', price: 5000 },
    { id: 6, item: 'Item F', price: 6000 },
    { id: 7, item: 'Item G', price: 7000 },
    { id: 8, item: 'Item H', price: 8000 },
    { id: 9, item: 'Item I', price: 9000 },
    { id: 10, item: 'Item J', price: 10000 },
    { id: 11, item: 'Item K', price: 11000 },
    { id: 12, item: 'Item L', price: 12000 }
];

const Nine = () => {
    // State for left-side table pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    // State for right-side table pagination
    const [currentPageRight, setCurrentPageRight] = useState(1);
    const [rowsPerPageRight, setRowsPerPageRight] = useState(10);

    // Adjust rows per page based on device size for both tables
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setRowsPerPage(5); // Mobile devices
                setRowsPerPageRight(5); // Mobile devices
            } else {
                setRowsPerPage(8); // Laptop or larger
                setRowsPerPageRight(8); // Laptop or larger
            }
        };
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Pagination logic for left-side table
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = salesRanking.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(salesRanking.length / rowsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    // Pagination logic for right-side table
    const indexOfLastRowRight = currentPageRight * rowsPerPageRight;
    const indexOfFirstRowRight = indexOfLastRowRight - rowsPerPageRight;
    const currentRowsRight = rightTableData.slice(indexOfFirstRowRight, indexOfLastRowRight);
    const totalPagesRight = Math.ceil(rightTableData.length / rowsPerPageRight);

    const handleNextPageRight = () => {
        if (currentPageRight < totalPagesRight) setCurrentPageRight(currentPageRight + 1);
    };

    const handlePreviousPageRight = () => {
        if (currentPageRight > 1) setCurrentPageRight(currentPageRight - 1);
    };

    return (
        <div className="flex gap-8 p-6 flex-col md:flex-row font-sans h-max-content">
            {/* Left Section - Main Content */}
            <div className="w-full md:w-[50%] border-2 border-gray-300 rounded-lg h-max-content p-6 shadow-lg space-y-6">
                {/* User Input Bubble */}
                <DashboardWithUser data="Generate me a table of sales ranking of all products. Also add filters" />

                {/* Chart Container */}
                <div className='md:pl-20 mb-6'>
                    <div className="border-2 border-gray-200 rounded-lg p-4 shadow-md">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/images/logo.png" alt="Logo" className="w-8 h-8 rounded-lg" />
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">+ Dashboard</span>
                        </div>

                        <div className="bg-white p-4 rounded-lg h-full border-2 border-gray-200">
                            <div className="flex flex-row items-center space-x-4 mb-6">
                                <button className="flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded">
                                    <span>All Year</span>
                                    <ChevronDown size={16} />
                                </button>
                                <div className="flex flex-row items-center space-x-2">
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            placeholder="Start Date"
                                            className="border p-2 rounded text-sm w-full md:w-auto"
                                        />
                                        <Calendar size={16} className="text-gray-400" />
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            placeholder="End Date"
                                            className="border p-2 rounded text-sm w-full md:w-auto"
                                        />
                                        <Calendar size={16} className="text-gray-400" />
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-4">Sales Ranking</h3>
                            <div className="space-y-4 h-[185px] md:h-[305px]">
                                {currentRows.map((item) => (
                                    <div key={item.id} className="flex justify-between items-center">
                                        <div className="flex items-center space-x-4">
                                            <span className="text-blue-500 w-6">{item.id}</span>
                                            <span>{item.product}</span>
                                        </div>
                                        <span className="font-semibold">
                                            ${item.amount.toLocaleString()}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination Controls */}
                            <div className="flex justify-between items-center mt-6">
                                <button
                                    className={`px-4 py-2 bg-gray-200 rounded ${currentPage === 1 && 'opacity-50'}`}
                                    onClick={handlePreviousPage}
                                    disabled={currentPage === 1}
                                >
                                    <MoveLeft />
                                </button>
                                <span>Page {currentPage} of {totalPages}</span>
                                <button
                                    className={`px-4 py-2 bg-gray-200 rounded ${currentPage === totalPages && 'opacity-50'}`}
                                    onClick={handleNextPage}
                                    disabled={currentPage === totalPages}
                                >
                                    <MoveRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Input Field */}
                <Input placeholder="Generate me a table of sales ranking of all products. Also add filters" />
            </div>

            {/* Right Section - Graph Types */}
            <div className="w-full md:w-[50%] border-2 border-gray-300 rounded-lg h-max-content shadow-lg p-6 flex flex-col md:gap-6 md:pt-8">
                <h1 className="text-3xl font-bold mb-8">
                    AI Generated Tables with filters
                </h1>

                {/* Graphes Grid */}
                <div className="mb-8 flex flex-col gap-6">
                    <h2 className="text-lg font-bold mb-4">Table Generation</h2>
                    <div className="border-2 border-green-300 rounded-lg p-4 shadow-md bg-green-300">
                        <div className="bg-white p-4 rounded-lg h-full border-2 border-green-300">
                            <div className="flex flex-row items-center space-x-4 mb-6">
                                <button className="flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded">
                                    <span>All Year</span>
                                    <ChevronDown size={16} />
                                </button>
                                <div className="flex flex-row items-center space-x-2">
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            placeholder="Start Date"
                                            className="border p-2 rounded text-sm w-full md:w-auto"
                                        />
                                        <Calendar size={16} className="text-gray-400" />
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            placeholder="End Date"
                                            className="border p-2 rounded text-sm w-full md:w-auto"
                                        />
                                        <Calendar size={16} className="text-gray-400" />
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-4">Item Pricing</h3>
                            <div className="space-y-4 h-[185px] md:h-[305px]">
                                {currentRowsRight.map((item) => (
                                    <div key={item.id} className="flex justify-between items-center">
                                        <div className="flex items-center space-x-4">
                                            <span className="text-blue-500 w-6">{item.id}</span>
                                            <span>{item.item}</span>
                                        </div>
                                        <span className="font-semibold">
                                            ${item.price.toLocaleString()}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination Controls for Right-side Table */}
                            <div className="flex justify-between items-center mt-6">
                                <button
                                    className={`px-4 py-2 bg-gray-200 rounded ${currentPageRight === 1 && 'opacity-50'}`}
                                    onClick={handlePreviousPageRight}
                                    disabled={currentPageRight === 1}
                                >
                                    <MoveLeft />
                                </button>
                                <span>Page {currentPageRight} of {totalPagesRight}</span>
                                <button
                                    className={`px-4 py-2 bg-gray-200 rounded ${currentPageRight === totalPagesRight && 'opacity-50'}`}
                                    onClick={handleNextPageRight}
                                    disabled={currentPageRight === totalPagesRight}
                                >
                                    <MoveRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nine;