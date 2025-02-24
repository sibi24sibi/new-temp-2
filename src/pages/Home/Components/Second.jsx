import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Input from '../../../components/Input';
import DashboardWithUser from '../../../components/DashboardWithUser';

const salesData = [
    { Year: '2018', current: 35, previous: 45 },
    { Year: '2019', current: 25, previous: 38 },
    { Year: '2020', current: 30, previous: 42 },
    { Year: '2021', current: 40, previous: 48 },
    { Year: '2022', current: 35, previous: 40 },
    { Year: '2023', current: 38, previous: 35 }
];
const salesData2 = [
    { Year: '2023', current: 35, previous: 45 },
    { Year: '2024', current: 25, previous: 38 },
    { Year: '2025', current: 30, previous: 42 }
];
const Second = () => {
    return (
        <div className="min-h-screen md:min-h-0 flex flex-col md:flex-row gap-8 p-6">
            {/* Left Section - Main Content */}
            <div className="w-full md:w-[50%] md:flex md:flex-col md:justify-between md:min-h-0 border-2 border-gray-300 rounded-lg shadow-lg p-6 space-y-6">
                {/* User Input Bubble */}
                <DashboardWithUser data="Generate me a graph between Sales & Year" />

                {/* Chart Container */}
                <div className='md:pl-20 mb-6'>
                    <div className="border-2 border-gray-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/images/logo.png" alt="Logo" className="w-8 h-8 rounded-lg" />
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">+ Dashboard</span>
                        </div>
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
                            <ResponsiveContainer height={250} className='overflow-x-auto'>
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
                </div>

                {/* Input Field */}
                <Input placeholder="Generate me a graph between Sales & Year" />
            </div>

            {/* Right Section - Graph Types */}
            <div className="w-full md:w-[50%] md:flex md:flex-col md:min-h-0 border-2 border-gray-300 rounded-lg shadow-lg p-6 space-y-6">
                <h1 className="text-3xl font-bold mb-8">
                    100 + Types of Graph Generation and Graphing Libraries of Your Choice
                </h1>

                {/* Graphs Grid */}
                <div className="my-auto">
                    <h2 className="text-lg font-bold mb-4">Graphs</h2>
                    <div className="bg-green-200 p-4 rounded-xl">
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
                            {/* Graph Cards */}
                            {['Gauge', 'Line', 'Area', 'Bar', 'Pie', 'More'].map((type) => (
                                <div key={type} className="bg-white rounded-lg px-2 aspect-square flex items-center justify-center">
                                    {type === 'More' ? (
                                        <span className="text-sm md:text-lg font-medium">More</span>
                                    ) : (
                                        <img
                                            src={
                                                type === 'Gauge'
                                                    ? 'https://i.postimg.cc/ZR6dZrcN/gauge1.png'
                                                    : type === 'Line'
                                                        ? 'https://i.postimg.cc/yN46K2rf/Untitled-design.png'
                                                        : type === 'Area'
                                                            ? 'https://i.postimg.cc/ZqFpGGLm/area1.png'
                                                            : type === 'Bar'
                                                                ? 'https://i.postimg.cc/fRdr9bMv/bar1.png'
                                                                : type === 'Pie'
                                                                    ? 'https://i.postimg.cc/2jvGGKsz/pie1.png'
                                                                    : `/images/${type.toLowerCase()}.png`
                                            }
                                            alt={`${type} Chart`}
                                            className="w-full h-full object-contain"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Libraries Grid */}
                <div>
                    <h2 className="text-lg font-bold mb-4">Graphing Libraries</h2>
                    <div className="bg-green-200 p-4 rounded-xl">
                        <div className="grid grid-cols-3 gap-2 md:gap-4">
                            <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center aspect-square md:aspect-auto">
                                <img src="/images/D3.png" className='w-8 h-8 md:w-16 md:h-16' alt="" />
                                <span className="text-sm md:text-lg">D3.js</span>
                            </div>
                            <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center aspect-square md:aspect-auto">
                                <img src="/images/Chart.png" className='w-8 h-8 md:w-16 md:h-16' alt="" />
                                <span className="text-sm md:text-lg">Chart.js</span>
                            </div>
                            <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center aspect-square md:aspect-auto h-auto">
                                <span className="text-sm md:text-lg font-medium">More</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Second;