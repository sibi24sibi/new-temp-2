import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar, ChevronDown, MoveLeft, MoveRight } from 'lucide-react';
import Lottie from "lottie-react";
import pointerSvgImage from '../../../assets/sPNEAzSgPk.json'
import pointer1 from '../../../assets/Animation - 1740401846216.gif'
import pointer2 from '../../../assets/Animation - 1740401846216 (1).gif'
import pointer3 from '../../../assets/Animation - 1740401846216 (2).gif'

const salesData = [
    { Year: '2018', current: 35, previous: 45 },
    { Year: '2019', current: 25, previous: 38 },
    { Year: '2020', current: 30, previous: 42 },
    { Year: '2021', current: 40, previous: 48 },
    { Year: '2022', current: 35, previous: 40 },
    { Year: '2023', current: 38, previous: 35 },
    { Year: '2024', current: 42, previous: 45 },
    { Year: '2025', current: 40, previous: 48 }
];
const salesData2 = [
    { Year: '2023', current: 35, previous: 45 },
    { Year: '2024', current: 25, previous: 38 },
    { Year: '2025', current: 30, previous: 42 }
];

const rightTableData = [
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

const MetricCard = ({ title, value, change, prefix = '' }) => (
    <div className=" bg-white rounded-lg p-2 pl-4 border-2 border-gray-200 aspect-square">
        <div className="text-sm text-gray-600">{title}</div>
        <div className="text-md md:text-xl font-bold mt-2">
            {prefix && <span className="text-md">{prefix}</span>}
            {value}
        </div>
        {change && (
            <div className={`text-sm mt-1 ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {change}
            </div>
        )}
    </div>



);
const MetricCard2 = ({ title, value, change, prefix = '' }) => (

    <div className=" bg-white rounded-lg p-4 border-2 border-gray-200">
        <div className="text-sm text-gray-600">{title}</div>
        <div className="text-lg md:text-xl font-bold mt-2">
            {prefix && <span className="text-md">{prefix}</span>}
            {value}
        </div>
        {change && (
            <div className={`text-sm mt-1 ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {change}
            </div>
        )}
    </div>


);

const LandingPage = () => {
    // State for right-side table pagination
    const [currentPageRight, setCurrentPageRight] = useState(1);
    const [rowsPerPageRight, setRowsPerPageRight] = useState(10);

    // Adjust rows per page based on device size for both tables
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setRowsPerPageRight(5); // Mobile devices
            } else {
                setRowsPerPageRight(7); // Laptop or larger
            }
        };
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
        <div className="max-w-[1200px] md:min-w-[60%] mx-auto p-6 ">
            {/* Header */}

            {/* <Lottie animationData={pointerSvgImage} loop={true}/> */}
            <img src={pointer1} alt="pointer1" className="w-10 mx-auto absolute top-36 right-60" />
            <img src={pointer1} alt="pointer1" className="w-10 mx-auto absolute top-36 left-64 transform scale-x-[-1]" />
            <img src={pointer2} alt="pointer1" className="w-10 mx-auto absolute top-72 left-60  transform scale-x-[-1]" />
            <img src={pointer3} alt="pointer1" className="w-10 mx-auto absolute top-72 right-72  " />
            <div className="text-center mb-8 my-10">
                <h1 className="text-6xl font-bold mb-4 mx-36">Generative BI Dashboard Development Tool</h1>
                <h2 className="text-2xl mb-4">With Modern BI Architecture</h2>
                <p className="text-gray-600">Leverage Generative AI to Develop Business Intelligence Dashboards</p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-lg shadow-lg border-2 border-gray-300 p-6">
                {/* Left Column - Metrics and Chart */}
                <div className="space-y-6">
                    {/* Metrics Row */}
                    <div className="hidden md:grid grid-cols-3 gap-4">
                        <MetricCard2
                            title="Avg Lifetime Value"
                            value="2,692"
                            change="+$12"
                            prefix="$"
                        />
                        <MetricCard2
                            title="Win Rate"
                            value="10.2%"
                            change="+0.8%"
                        />
                        <MetricCard2
                            title="Lead to Win Ratio"
                            value="5:1"
                            change="+7%"
                        />
                    </div>
                    <div className="md:hidden grid grid-cols-3 gap-4">
                        <MetricCard
                            title="Avg"
                            value="2,692"
                            change="+$12"
                            prefix="$"
                        />
                        <MetricCard
                            title="Rate"
                            value="10.2%"
                            change="+0.8%"
                        />
                        <MetricCard
                            title="Ratio"
                            value="5:1"
                            change="+7%"
                        />
                    </div>


                    {/* Chart Section */}
                    <div className="hidden sm:flex flex-col bg-white p-4 rounded-lg border-2 border-gray-200">
                        <h3 className="text-lg font-semibold mb-4 text-center">Stores Sales Trend</h3>
                        <ResponsiveContainer height={300} className='overflow-x-auto'>
                            <BarChart data={salesData} >
                                <CartesianGrid strokeDasharray="2 2" />
                                <XAxis dataKey="Year" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="previous" className="fill-gray-400" />
                                {/* <Bar dataKey="previous" fill="#e5e7eb" /> */}
                                <Bar dataKey="current" className="fill-green-400" />
                                {/* <Bar dataKey="current" fill="#3b82f6" /> */}
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="sm:hidden flex flex-col bg-white p-4 rounded-lg border-2 border-gray-200">
                        <h3 className="text-lg font-semibold mb-4 text-center">Stores Sales Trend</h3>
                        <ResponsiveContainer height={250}>
                            <BarChart data={salesData2} >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="Year" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="previous" className="fill-gray-400" />
                                {/* <Bar dataKey="previous" fill="#e5e7eb" /> */}
                                <Bar dataKey="current" className="fill-green-400" />
                                {/* <Bar dataKey="current" fill="#3b82f6" /> */}
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Right Column - Sales Ranking */}
                <div className="bg-white p-4 rounded-lg  h-full border-2 border-gray-200">
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
                    <div className="border-2 border-gray-200 rounded-lg p-4 shadow-sm">

                        <h3 className="text-lg font-semibold mb-4">Item Pricing</h3>
                        <div className="space-y-4 h-[185px] md:h-[250px]">
                            {currentRowsRight.map((item) => (
                                <div key={item.id} className="flex justify-between items-center">
                                    <div className="flex items-center space-x-4">
                                        <span className="text-blue-500 w-6">{item.id}</span>
                                        <span>{item.product}</span> {/* Use `product` instead of `item` */}
                                    </div>
                                    <span className="font-semibold">
                                        ${item.amount.toLocaleString()} {/* Use `amount` instead of `price` */}
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
    );
};

export default LandingPage;