import React from 'react';
import Input from '../../../components/Input';
import DashboardWithUser from '../../../components/DashboardWithUser';

const Fifth = () => {
    return (
        <div className="min-h-screen md:min-h-0 flex flex-col md:flex-row gap-8 p-6 font-sans">
            {/* Left Section - Main Content */}
            <div className="w-full md:w-[50%] md:flex md:flex-col md:min-h-0 border-2 border-gray-300 rounded-lg shadow-lg p-6 space-y-6">
                {/* User Input Bubble */}
                <h1 className="text-3xl font-bold mb-8">
                    100 + AI Generated Scorecard Templates
                </h1>

                {/* Graphs Grid */}
                <div className="py-auto">
                    <h2 className="text-lg font-bold mb-4">Scorecard Templates</h2>
                    <div className="bg-green-200 p-4 rounded-xl">
                        <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
                            <div className='bg-white rounded-lg h-max-content py-6 flex flex-col items-center justify-center gap-2'>
                                <h3 className='text-lg font-bold'>Max Sales</h3>
                                <h3 className='text-lg font-bold'>2025</h3>
                                <h3 className='text-lg'>$300,000</h3>
                            </div>
                            <div className='bg-blue-700 text-white rounded-lg px-2 h-max-content py-6 flex flex-col items-center justify-center gap-2'>
                                <h3 className='text-lg font-bold'>Max Sales</h3>
                                <h3 className='text-lg font-bold'>2025</h3>
                                <h3 className='text-lg'>$300,000</h3>
                            </div>
                            <div className='bg-green-500 text-white rounded-lg px-2 h-max-content py-6 flex flex-col items-center justify-center gap-2'>
                                <h3 className='text-lg font-bold'>Max Sales</h3>
                                <h3 className='text-lg font-bold'>2025</h3>
                                <h3 className='text-lg'>$300,000</h3>
                            </div>
                            <div className='bg-purple-700 text-white rounded-lg px-2 h-max-content py-6 flex flex-col items-center justify-center gap-2'>
                                <h3 className='text-lg font-bold'>Max Sales Jan,2025</h3>
                                <h3 className='text-lg'>$300,000</h3>
                                <h3 className='text-lg font-bold'>Max Sales Feb,2025</h3>
                                <h3 className='text-lg'>$300,000</h3>
                            </div>
                            <div className='bg-yellow-500 text-black rounded-lg px-2 h-max-content py-6 flex flex-col items-center justify-center gap-2'>
                                <div className='flex gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-combined"><path d="M12 16v5" /><path d="M16 14v7" /><path d="M20 10v11" /><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" /><path d="M4 18v3" /><path d="M8 14v7" /></svg>
                                    <h3 className='text-lg font-bold'>Max Sales</h3>
                                </div>
                                <h3 className='text-lg font-bold'>2025</h3>
                                <h3 className='text-lg'>$300,000</h3>
                            </div>
                            <div className='bg-orange-500 text-white rounded-lg px-2 h-max-content py-6 flex flex-col items-center justify-center gap-2'>
                                <div className='flex gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" class="fill-green-500 lucide lucide-triangle"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /></svg>
                                    <h3 className='text-lg font-bold'>Max Sales</h3>
                                </div>
                                <h3 className='text-lg font-bold'>2025</h3>
                                <h3 className='text-lg'>$300,000</h3>
                            </div>
                            <div className='bg-gradient-to-r from-yellow-200 to-pink-300 rounded-lg px-2 h-max-content py-6 flex flex-col items-center justify-center gap-2'>
                                <h3 className='text-lg'>$300,000</h3>
                                <h3 className='text-lg font-bold'>Max Sales </h3>

                            </div>
                            <div className='bg-gradient-to-r from-purple-700 to-cyan-500 text-white rounded-lg px-2 h-max-content py-6 flex flex-col items-center justify-center gap-2'>
                                <h3 className='text-lg font-bold'>Max Sales</h3>
                                <h3 className='text-lg font-bold'>2025</h3>
                                <h3 className='text-lg'>$300,000</h3>

                            </div>
                            <div className='bg-white rounded-lg h-max-content py-6 flex flex-col items-center justify-center gap-2'>
                                <h3 className='text-lg font-bold'>More</h3>

                            </div>
                        </div>
                    </div>
                </div>



            </div>

            {/* Right Section - Graph Types */}
            <div className="w-full md:w-[50%] md:flex md:flex-col md:justify-between md:min-h-0 border-2 border-gray-300 rounded-lg shadow-lg p-6 space-y-6">
                <DashboardWithUser data="Generate me a scorecard of maximum sales in January 2025" />

                {/* Chart Container */}
                <div className='md:pl-20 mb-6'>
                <div className="border-2 border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                        <img src="/images/logo.png" alt="Logo" className="w-8 h-8 rounded-lg" />
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">+ Dashboard</span>
                    </div>

                    <div className='border-2 border-gray-200 bg-white rounded-lg h-max-content py-6 flex flex-col items-center justify-center gap-2 md:w-[60%] mx-auto'>
                        <h3 className='text-lg font-bold'>Max Sales</h3>
                        <h3 className='text-lg font-bold'>2025</h3>
                        <h3 className='text-lg'>$300,000</h3>
                    </div>
                </div>
                </div>
                <DashboardWithUser data="I want a scorecard to be blue" />
                <div className='md:pl-20 mb-6'>
                    <div className="border-2 border-gray-200 rounded-lg p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/images/logo.png" alt="Logo" className="w-8 h-8 rounded-lg" />
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">+ Dashboard</span>
                        </div>

                        <div className='border-2 border-blue-700 bg-blue-700 text-white rounded-lg px-2 h-max-content py-6 flex flex-col items-center justify-center gap-2 md:w-[60%] mx-auto'>
                            <h3 className='text-lg font-bold'>Max Sales</h3>
                            <h3 className='text-lg font-bold'>2025</h3>
                            <h3 className='text-lg'>$300,000</h3>
                        </div>
                    </div>
                </div>

                {/* Input Field */}
                <Input placeholder="Generate me a scorecard of maximum sales in January 2025" />

            </div>
        </div>
    );
};

export default Fifth;