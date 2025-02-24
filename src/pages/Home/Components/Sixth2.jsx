import React from 'react';
import DashboardWithUser from '../../../components/DashboardWithUser';
import { SendHorizontal, Mic, Paperclip } from 'lucide-react'



const Sixth2 = () => {
    return (
        <div className="min-h-screen md:min-h-0 flex flex-col md:flex-row gap-8 p-6 font-sans">
            {/* Left Section - Main Content */}
            <div className="w-full md:w-[50%] md:flex md:flex-col  md:min-h-0 border-2 border-gray-300 rounded-lg shadow-lg p-6 space-y-6">
                {/* <div className="w-full md:w-[50%] border-2 border-gray-200 rounded-lg h-max-content shadow-lg p-6 flex flex-col md:gap-6 md:pt-8"> */}
                <h1 className="text-3xl font-bold mb-8">
                    AI Powered Code Generation
                </h1>

                {/* Graphes Grid */}
                <div className="my-auto">
                    <h2 className="text-lg font-bold mb-4"> Connect APIs, DBs & Files to Generate Code for Various
                        Visuals and Query. Supports 21 Data Analytics Programing
                        Languages</h2>
                    <div className="border-2 border-gray-200 rounded-lg p-4 shadow-sm">
                        <img className="w-full h-auto object-contain" src="https://i.postimg.cc/dtvXyHX2/d25580e6-e85f-11ef-8e1d-0242ac110002.jpg" alt="proglang" />
                    </div>
                </div>


            </div>




            {/* Right Section - Graph Types */}
            <div className="w-full md:w-[50%] md:flex md:flex-col md:justify-between md:min-h-0 border-2 border-gray-300 rounded-lg shadow-lg p-6 space-y-6">
                {/* User Input Bubble */}
                <DashboardWithUser data="Hey can you help me write a SQL query that displays 'Name is max' when the name is either max or Jack, and 'You have selected other user' for any other name from my table" />

                <div className='md:pl-20 mb-6'>
                    <div className="border-2 border-gray-200 rounded-lg p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/images/logo.png" alt="Logo" className="w-8 h-8 rounded-lg" />
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">+ Dashboard</span>

                        </div>
                        <div className=" rounded-lg p-4 mb-6 shadow-sm bg-gray-900">
                            <pre className="text-sm font-mono text-gray-100 h-[150px] overflow-auto">
                                <code className="language-sql">
                                    <span className="text-blue-400">SELECT</span> CASE Name
                                    {'\n'}    <span className="text-blue-400">WHEN</span> <span className="text-green-400">'max'</span> <span className="text-blue-400">THEN</span> <span className="text-green-400">'Name is max'</span>
                                    {'\n'}    <span className="text-blue-400">WHEN</span> <span className="text-green-400">'jack'</span> <span className="text-blue-400">THEN</span> <span className="text-green-400">'Name is max'</span>
                                    {'\n'}    <span className="text-blue-400">ELSE</span> <span className="text-green-400">'You have selected other user'</span>
                                    {'\n'}<span className="text-blue-400">END</span> <span className="text-blue-400">AS</span> Result
                                    {'\n'}<span className="text-blue-400">FROM</span> TableName;
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
                {/* Chart Container */}




                {/* Input Field */}
                {/* <Input placeholder="Hey can you help me write a SQL query that displays 'Name is max' when the name is either max or Jack, and 'You have selected other user' for any other name from my table" /> */}
                <div className="bg-white rounded-lg border-2 border-gray-200 p-3 shadow-sm flex items-start gap-3">
                    <Paperclip className="w-5 h-5 mt-2 text-gray-700" />
                    <div className="relative w-full">
                        <textarea
                            placeholder="Hey can you help me write a SQL query that displays 'Name is max' when the name is either max or Jack, and 'You have selected other user' for any other name from my table"
                            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500 resize-none"
                            rows={3}
                        />

                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <button className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                            <Mic className="w-4 h-4 text-white" />
                        </button>
                        <button className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                            <SendHorizontal className="w-4 h-4 text-white" />
                        </button>
                    </div>
                </div>



            </div>
        </div >
    );
};

export default Sixth2;