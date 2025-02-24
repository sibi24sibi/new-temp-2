import React from 'react';
import Input from '../../../components/Input';
import DashboardWithUser from '../../../components/DashboardWithUser';



const Seventh = () => {
    return (
        <div className="flex gap-8 p-6 flex-col md:flex-row font-sans h-max-content">
            {/* Left Section - Main Content */}
            {/* Left Section - Main Content */}
            <div className="w-full md:w-[50%] border-2 border-gray-300 rounded-lg h-max-content p-6 shadow-lg space-y-6">
                {/* User Input Bubble */}
                <DashboardWithUser data=" Generate me DAX formula for regions with least sales" />

                {/* Chart Container */}
                <div className='md:pl-20 mb-6'>
                    <div className="border-2 border-gray-200 rounded-lg p-4 shadow-md">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/images/logo.png" alt="Logo" className="w-8 h-8 rounded-lg" />
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">+ Dashboard</span>

                        </div>
                        <div className="border-2 border-gray-200 rounded-lg p-4 mb-6 shadow-sm bg-gray-900">
                            <pre className="text-sm font-mono text-gray-100 h-[155px] overflow-auto">
                                <code className="language-dax">
                                    <span className="text-blue-400">DEFINE</span>
                                    {'\n'}    <span className="text-blue-400">MEASURE</span> 'Demo2table'[TotalSales] = <span className="text-green-400">SUM</span>('Demo2table'[sales_amount])
                                    {'\n'}
                                    {'\n'}    <span className="text-blue-400">MEASURE</span> 'Demo2table'[LeastSales] =
                                    {'\n'}        <span className="text-green-400">CALCULATE</span>(
                                    {'\n'}            <span className="text-green-400">MINX</span>(
                                    {'\n'}                <span className="text-blue-400">ALL</span>('Demo2table'[region]),
                                    {'\n'}                [TotalSales]
                                    {'\n'}            ),
                                    {'\n'}            <span className="text-blue-400">ALL</span>('Demo2table'[region])
                                    {'\n'}        )
                                    {'\n'}
                                    {'\n'}    <span className="text-blue-400">MEASURE</span> 'Demo2table'[RegionsWithLeastSales] =
                                    {'\n'}        <span className="text-green-400">CONCATENATEX</span>(
                                    {'\n'}            <span className="text-green-400">FILTER</span>(
                                    {'\n'}                <span className="text-blue-400">VALUES</span>('Demo2table'[region]),
                                    {'\n'}                [TotalSales] = [LeastSales]
                                    {'\n'}            ),
                                    {'\n'}            'Demo2table'[region],
                                    {'\n'}            <span className="text-green-400">","</span>,
                                    {'\n'}            'Demo2table'[region]
                                    {'\n'}        )
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Input Field */}
                <Input placeholder="Generate me DAX formula for regions" />
            </div>




            {/* Right Section - Graph Types */}
            <div className="w-full md:w-[50%] border-2 border-gray-300 rounded-lg h-max-content shadow-lg p-6 flex flex-col md:gap-6 md:pt-8">
                <h1 className="text-3xl font-bold mb-8">
                    DAX Formula Generation Based on Your
                    Data Sources
                </h1>


                {/* Graphs Grid */}
                <div className="mb-8">

                    <div className="border-2 border-gray-200 rounded-lg p-4 mb-6 shadow-sm bg-gray-900">
                        <pre className="text-sm font-mono text-gray-100 h-[150px] overflow-auto">
                            <code className="language-dax">
                                <span className="text-blue-400">DEFINE</span>
                                {'\n'}    <span className="text-blue-400">MEASURE</span> 'Demo2table'[TotalSales] = <span className="text-green-400">SUM</span>('Demo2table'[sales_amount])
                                {'\n'}
                                {'\n'}    <span className="text-blue-400">MEASURE</span> 'Demo2table'[LeastSales] =
                                {'\n'}        <span className="text-green-400">CALCULATE</span>(
                                {'\n'}            <span className="text-green-400">MINX</span>(
                                {'\n'}                <span className="text-blue-400">ALL</span>('Demo2table'[region]),
                                {'\n'}                [TotalSales]
                                {'\n'}            ),
                                {'\n'}            <span className="text-blue-400">ALL</span>('Demo2table'[region])
                                {'\n'}        )
                                {'\n'}
                                {'\n'}    <span className="text-blue-400">MEASURE</span> 'Demo2table'[RegionsWithLeastSales] =
                                {'\n'}        <span className="text-green-400">CONCATENATEX</span>(
                                {'\n'}            <span className="text-green-400">FILTER</span>(
                                {'\n'}                <span className="text-blue-400">VALUES</span>('Demo2table'[region]),
                                {'\n'}                [TotalSales] = [LeastSales]
                                {'\n'}            ),
                                {'\n'}            'Demo2table'[region],
                                {'\n'}            <span className="text-green-400">","</span>,
                                {'\n'}            'Demo2table'[region]
                                {'\n'}        )
                            </code>
                        </pre>
                    </div>
                </div>


            </div>
        </div >
    );
};

export default Seventh;