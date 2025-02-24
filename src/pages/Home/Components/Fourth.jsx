import React from 'react';
import Input from '../../../components/Input';
import DashboardWithUser from '../../../components/DashboardWithUser';
import Heatmap from '../../../components/Heatmap';



const Fourth = () => {
    return (
        <div className="min-h-screen md:min-h-0 flex flex-col md:flex-row gap-8 p-6">
            {/* Left Section - Main Content */}
            <div className="w-full md:w-[50%] md:flex md:flex-col md:justify-between md:min-h-0 border-2 border-gray-300 rounded-lg shadow-lg p-6 space-y-6">
                {/* User Input Bubble */}
                <DashboardWithUser data="Generate me a heatmap of sales" />

                {/* Chart Container */}
                <div className='md:pl-20 mb-6'>
                <div className="border-2 border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-4">
                        <img src="/images/logo.png" alt="Logo" className="w-8 h-8 rounded-lg" />
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">+ Dashboard</span>
                    </div>

                    
                        <div className='w-full h-[350px] md:h-[450px] rounded-lg'>
                            <Heatmap />
                        </div>
                    </div>
                </div>

                {/* Input Field */}
                <Input placeholder="Generate me a heatmap of sale" />
            </div>

            {/* Right Section - Graph Types */}
            <div className="w-full md:w-[50%] md:flex md:flex-col md:justify-between md:min-h-0 border-2 border-gray-300 rounded-lg shadow-lg p-6 space-y-6">
                <h1 className="text-3xl font-bold mb-8">
                    AI Heatmap Generation and Heatmap Libraries of Your Choice
                </h1>

                {/* Graphs Grid */}
                <div className="mb-8">
                    <h2 className="text-lg font-bold mb-4">Heatmap</h2>
                    <div className="bg-green-200 p-4 rounded-lg h-[350px]">
                        <Heatmap />
                    </div>
                </div>


                {/* Libraries Grid */}
                <div>
                    <h2 className="text-lg font-bold mb-4">Map Libraries</h2>
                    <div className="bg-green-200 p-4 rounded-xl">
                        <div className="grid grid-cols-3 gap-2 md:gap-4">
                            <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center aspect-square md:aspect-auto">
                                <img src="https://i.postimg.cc/QCMCmrn1/pie1-4.png" className="w-8 h-8 md:{h-20 w-20}" alt="" />
                                <span className="text-sm md:text-lg">Leaflet</span>
                            </div>
                            <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center aspect-square md:aspect-auto">
                                <img src="https://i.postimg.cc/s2FBrqvC/pie1-3.png" className="w-8 h-8 md:{h-20 w-20}" alt="" />
                                <span className="text-sm md:text-lg">Maplibregl</span>
                            </div>
                            <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center aspect-square md:aspect-auto h-auto">
                                <span className="text-sm md:text-lg font-medium">More</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fourth;