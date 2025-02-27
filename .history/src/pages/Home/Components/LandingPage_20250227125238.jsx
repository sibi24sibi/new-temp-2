import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar, ChevronDown, MoveLeft, MoveRight } from 'lucide-react';
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
        <div className="max-w-[1200px] md:min-w-[60%] mx-auto p-6 relative">
            {/* Header */}
            {/* Pointer Images with Boxed Labels */}
            <div className="absolute top-36 right-60 md:block hidden text-center">
                <img src={pointer1} alt="pointer1" className="w-10 mx-auto" />
                <div className="bg-gray-800 text-white translate-x-8 text-xs px-2 py-1 mt-1 rounded-md shadow-md inline-block">
                    Pointer 1
                </div>
            </div>

            <div className="absolute top-36 left-64 transform scale-x-[-1] md:block hidden text-center">
                <img src={pointer1} alt="pointer1" className="w-10 mx-auto" />
                <div className="bg-teal-400 text-white  translate-x-12 text-xs px-2 py-1 mt-1 rounded-md shadow-md inline-block transform scale-x-[-1]">
                    Pointer 2
                </div>
            </div>

            <div className="absolute top-72 left-60 transform scale-x-[-1] md:block hidden text-center">
                <img src={pointer2} alt="pointer2" className="w-10 mx-auto" />
                <div className="bg-green-800 text-white translate-x-8 translate-y-3 text-xs px-2 py-1 mt-1 rounded-md shadow-md inline-block transform scale-x-[-1]">
                    Pointer 3
                </div>
            </div>

            <div className="absolute top-72 right-72 md:block hidden text-center">
                <img src={pointer3} alt="pointer3" className="w-10 mx-auto" />
                <div className="bg-yellow-800 text-white text-xs translate-x-10 px-2 py-1 mt-1 rounded-md shadow-md inline-block">
                    Pointer 4
                </div>
            </div>

            {/* Header Text */}
            <div className="md:text-center mb-8 my-10">
                <h1 className="md:text-6xl text-3xl font-bold mb-4 md:mx-36">
                    Generative BI Dashboard Development Tool
                </h1>
                <h2 className="md:text-2xl text-xl mb-4">With Modern BI Architecture</h2>
                <p className="text-gray-600">Leverage Generative AI to Develop Business Intelligence Dashboards</p>
            </div>
        </div>

    );
};

export default LandingPage;