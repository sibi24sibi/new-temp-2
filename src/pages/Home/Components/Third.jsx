import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Input from '../../../components/Input';
import DashboardWithUser from '../../../components/DashboardWithUser';

const data = [
    { year: 1940, rate: 0, sales: 0 },
    { year: 1950, rate: 5000, sales: 3000 },
    { year: 1960, rate: 15000, sales: 12000 },
    { year: 1970, rate: 25000, sales: 20000 },
    { year: 1980, rate: 30000, sales: 25000 },
    { year: 1990, rate: 40000, sales: 35000 },
    { year: 2000, rate: 35000, sales: 30000 }
];
const data2 = [
    { year: 1940, rate: 0, sales: 0 },
    { year: 1950, rate: 5000, sales: 3000 },
    { year: 1960, rate: 25000, sales: 20000 },
    { year: 1970, rate: 35000, sales: 30000 },
    { year: 1980, rate: 25000, sales: 20000 },
    { year: 1990, rate: 20000, sales: 15000 },
];

function Third() {
    return (
        <div className="min-h-screen md:min-h-0 flex flex-col md:flex-row gap-8 p-6">
            {/* Left Panel */}
            <div className="w-full md:w-[50%] md:flex md:flex-col md:justify-between md:min-h-0 border-2 border-gray-300 rounded-lg shadow-lg p-6 space-y-6">
                <h2 className="text-2xl font-bold">Supported Datasources:</h2>

                {/* Structured Files */}
                <div className="flex flex-col items-start space-y-4">
                    <h3 className="text-lg font-medium">Structured Files:</h3>
                    <div className="bg-green-100 rounded-lg p-4 w-auto border-2 border-gray-200">
                        <div className="flex flex-wrap gap-6">
                            <img src="https://i.postimg.cc/dVNwRBJd/1.png" className='w-16 h-20' alt="" />
                            <img src="https://i.postimg.cc/mk4sZpSx/2.png" className='w-16 h-20' alt="" />
                            <img src="https://i.postimg.cc/HLfmRkck/3.png" className='w-16 h-20' alt="" />
                            <img src="https://i.postimg.cc/cHwWSGwM/4.png" className='w-16 h-20' alt="" />
                            <img src="https://i.postimg.cc/xdkY6zdZ/5.png" className='w-16 h-20' alt="" />
                        </div>
                    </div>
                </div>

                {/* Unstructured Files */}
                <div className="flex flex-col items-start space-y-4">
                    <h3 className="text-lg font-medium">Unstructured Files:</h3>
                    <div className="bg-green-100 rounded-lg p-4 w-auto border-2 border-gray-200">
                        <div className="flex flex-wrap gap-6">
                            <img src="https://i.postimg.cc/bNv50jrC/6.png" className='w-16 h-20' alt="" />
                            {/* <img src="https://i.postimg.cc/qvPZdhLS/7.png" className='w-16 h-20' alt="" /> */}
                            {/* <img src="https://i.postimg.cc/MpMr4by1/8.png" className='w-16 h-20' alt="" /> */}
                            <img src="https://i.postimg.cc/gJdSnC1K/9.png" className='w-16 h-20' alt="" />
                            <img src="https://i.postimg.cc/g03tcztJ/10.png" className='w-16 h-20' alt="" />
                            <img src="https://i.postimg.cc/90gJgr0x/13.png" className='w-16 h-20' alt="" />
                            {/* <img src="https://i.postimg.cc/c46DgMkP/14.png" className='w-16 h-20' alt="" /> */}
                        </div>
                    </div>
                </div>

                {/* API Connectors */}
                <div className="flex flex-col items-start space-y-4">
                    <h3 className="text-lg font-medium">API Connectors:</h3>
                    <div className="bg-green-100 rounded-lg p-4 px-6 w-auto border-2 border-gray-200">
                        <div className="grid grid-cols-1 justify-center items-center md:flex flex-wrap gap-8 md:gap-12">
                            <div className="flex items-center gap-4">
                                <img src="https://www.gstatic.com/images/branding/product/2x/sheets_2020q4_48dp.png" className="w-8 h-8 md:{h-20 w-20}" alt="Google Sheets" />
                                <span className="text-md md:text-lg">Google Spreadsheet</span>
                            </div>
                            {/* <div className="flex items-center gap-4">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" className="w-8 h-8 md:{h-20 w-20}" alt="Excel" />
                                <span className="text-md md:text-lg">Excel Spreadsheet</span>
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* DB Connectors */}
                <div className="flex flex-col items-start space-y-4">
                    <h3 className="text-lg font-medium">DB Connectors:</h3>
                    <div className="bg-green-100 rounded-lg p-4 px-6 w-auto border-2 border-gray-200">
                        <div className="grid grid-cols-1 items-center md:flex flex-wrap gap-8 md:gap-12">
                            <div className="flex items-center gap-4">
                                <img src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" className="w-8 h-8 md:{w-20 h-20}" alt="MySQL" />
                                <span className="text-md md:text-lg">MySQL</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src="https://www.mongodb.com/assets/images/global/favicon.ico" className="w-8 h-8 md:{w-20 h-20}" alt="MongoDB" />
                                <span className="text-md md:text-lg">MongoDB</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src="https://th.bing.com/th?id=OIP.2tzHyfOhRk0k8g9I6D86sgHaH_&w=240&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2" className="w-8 h-8 md:{w-20 h-20}" alt="Snowflakes" />
                                <span className="text-md md:text-lg">Snowflakes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel */}
            <div className="w-full md:w-[50%] md:flex md:flex-col md:justify-between md:min-h-0 border-2 border-gray-300 rounded-lg shadow-lg p-6 space-y-6">
                {/* Chat Message */}
                <DashboardWithUser data="Generate me an area graph of rate and total sales" />

                {/* Graph Card */}
                <div className='md:pl-20'>
                    <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-gray-200">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/images/logo.png" alt="Logo" className="w-8 h-8 rounded-lg" />
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">+ Dashboard</span>
                        </div>

                        <div className="hidden sm:flex flex-col w-full h-[300px] md:h-[410px]">
                            <ResponsiveContainer className={'areachart'} width="100%" height={"100%"}>
                                <AreaChart
                                    data={data}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 0,
                                        bottom: 0,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="year" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area
                                        type="monotone"
                                        dataKey="rate"
                                        stackId="1"
                                        stroke="#8884d8"
                                        fill="#22c55e"
                                        fillOpacity={0.6}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="sales"
                                        stackId="1"
                                        stroke="#82ca9d"
                                        fill="#82ca9d"
                                        fillOpacity={0.6}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="sm:hidden flex flex-col w-full h-[250px] md:h-[410px]">
                            <ResponsiveContainer className={'areachart'} width="100%" height={"100%"}>
                                <AreaChart
                                    data={data2}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 0,
                                        bottom: 0,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="year" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area
                                        type="monotone"
                                        dataKey="rate"
                                        stackId="1"
                                        stroke="#8884d8"
                                        fill="#8884d8"
                                        fillOpacity={0.6}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="sales"
                                        stackId="1"
                                        stroke="#82ca9d"
                                        fill="#82ca9d"
                                        fillOpacity={0.6}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Input Box */}
                <Input placeholder="Generate me a area graph of rate and total sales" />
            </div>
        </div>
    );
}

export default Third;