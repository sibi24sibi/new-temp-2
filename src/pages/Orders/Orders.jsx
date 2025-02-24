import React from 'react';
import { ChevronDown, RefreshCw, SlidersHorizontal, ChevronRight } from 'lucide-react';

const Orders = () => {
    return (
        <div className="h-max-content bg-gray-200 pt-3">
            <div className=' flex gap-6 justify-end mx-[25px]  items-center'>
                <button className='p-2 px-4 bg-white rounded-md'>Billing</button>
                <button className='p-2 px-4 bg-white rounded-md'>My Account</button>
            </div>
            <div className="flex p-6 pt-3 gap-5 min-h-screen">
                {/* Sidebar */}
                <div className="w-64 bg-white p-6 rounded-md h-[auto] shadow-lg">
                    <h2 className="text-gray-700 font-medium mb-6">Menu</h2>
                    <nav className="space-y-2">
                        <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded">
                            My orders
                        </div>
                        <div className="px-4 py-2 text-gray-600 hover:bg-gray-50 cursor-pointer">
                            Place new order
                        </div>
                        <div className="px-4 py-2 text-gray-600 hover:bg-gray-50 cursor-pointer">
                            My invoices
                        </div>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-8 bg-white rounded-md shadow-lg">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-2xl text-gray-800">My orders</h1>
                        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">
                            Place new order
                        </button>
                    </div>

                    {/* Search and Filters */}
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Quick search by order number..."
                            className="w-full p-3 border border-gray-200 rounded mb-4"
                        />
                        <div className="flex justify-between items-center">
                            <button className="px-4 py-2 text-gray-600 border border-gray-200 rounded flex items-center gap-2">
                                Add filter
                            </button>
                            <div className="flex items-center gap-4">
                                <span className="text-gray-600">Sort by</span>
                                <button className="px-4 py-2 text-gray-600 border border-gray-200 rounded flex items-center gap-2">
                                    Date created <ChevronDown className="w-4 h-4" />
                                </button>
                                <button className="p-2 text-gray-600 border border-gray-200 rounded">
                                    <SlidersHorizontal className="w-4 h-4" />
                                </button>
                                <button className="p-2 text-gray-600 border border-gray-200 rounded">
                                    <RefreshCw className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Orders Table */}
                    <div className="bg-white rounded-lg shadow">
                        <div className="grid grid-cols-3 p-4 border-b border-gray-100 text-sm text-gray-500">
                            <div>STATUS</div>
                            <div>ORDER #</div>
                            <div className="text-right">TOTAL</div>
                        </div>

                        <div className="grid grid-cols-3 p-4 items-center hover:bg-gray-50 cursor-pointer">
                            <div>
                                <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">
                                    Paid
                                </span>
                            </div>
                            <div>
                                <div className="text-gray-800">Order #SH-24-25-08287</div>
                                <div className="text-sm text-gray-500">cPanel Younger Plan (www.smartcardai.com)</div>
                            </div>
                            <div className="flex items-center justify-end gap-4">
                                <div>
                                    <div className="text-gray-800 text-right">₹199.42</div>
                                    <div className="text-sm text-gray-500">2 months ago</div>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;