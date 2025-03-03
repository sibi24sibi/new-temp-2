import React from 'react';
import Input from '../../../components/Input';
import DashboardWithUser from '../../../components/DashboardWithUser';



const Eightth = () => {
    return (
        <div className="flex gap-8 p-6 flex-col md:flex-row font-sans h-max-content">
            {/* Left Section - Main Content */}
            <div className="w-full md:w-[50%] border-2 border-gray-300 rounded-lg h-max-content shadow-lg p-6 flex flex-col md:gap-6 md:pt-8">
                <h1 className="text-3xl font-bold mb-8">
                    AI Insight Generation from your data
                </h1>

                {/* Graphes Grid */}
                <div className="mb-8 flex flex-col gap-6">
                    <h2 className="text-lg font-bold mb-4">Insight Generation</h2>
                    <div className=" rounded-lg p-4 shadow-md bg-green-500 bg-opacity-70 w-[80%] mx-auto">

                        <div className='bg-gray-100 shadow-md rounded-lg p-8 flex flex-col items-center justify-center'>

                            <h2 className='font-sans font-medium'> Maximum sales of the quater is $ 200 k and</h2>
                            <h2 className='font-sans font-medium'> maximum sales of last quater was $ 300 k </h2>

                        </div>

                    </div>
                </div>


            </div>




            {/* Right Section - Graph Types */}
            <div className="w-full md:w-[50%] border-2 border-gray-300 rounded-lg h-max-content p-6 shadow-lg space-y-6">
                {/* User Input Bubble */}
                <DashboardWithUser data="What is maximum sales" />



                {/* Chart Container */}
                <div className='md:pl-20 mb-6'>
                    <div className="border-2 border-gray-200 rounded-lg p-4 shadow-md">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/images/logo.png" alt="Logo" className="w-8 h-8 rounded-lg" />
                            <span className="bg-green-500 shadow-md text-white px-3 py-1 rounded-full text-sm">+ Dashboard</span>
                        </div>

                        <div className=" rounded-lg p-4 shadow-md bg-green-500 bg-opacity-70 w-[80%] mx-auto">

                            <div className='bg-gray-100 shadow-md rounded-lg p-8 flex flex-col items-center justify-center'>

                                <h2 className='font-sans font-medium'> Maximum sales of the quater is $ 200 k and</h2>
                                <h2 className='font-sans font-medium'> maximum sales of last quater was $ 300 k </h2>

                            </div>

                        </div>
                    </div>
                </div>



                {/* Input Field */}
                {/* <Input placeholder="Hey can you help me write a SQL query that displays 'Name is max' when the name is either max or Jack, and 'You have selected other user' for any other name from my table" /> */}
                <Input placeholder="What is the maximum sales ?" />



            </div>
        </div >
    );
};

export default Eightth;