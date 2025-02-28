import React from "react";
import Input from "../../../components/Input";
import DashboardWithUser from "../../../components/DashboardWithUser";

const Fifth2 = () => {
  return (
    <div className="p-6 font-sans">
      {/* Right Section - Graph Types */}
      <div className="flex flex-col gap-6 border-2 border-gray-300 rounded-lg shadow-lg p-6">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-start ">
        <div className=" flex flex-col gap-8">
          <DashboardWithUser data="Generate me a scorecard of maximum sales in January 2025" />

          {/* Chart Container */}
          <div className="md:pl-20 mb-6">
            <div className="border-2 border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="w-8 h-8 rounded-lg"
                />
                <span className="bg-[#4cba8b] text-white px-3 py-1 rounded-full text-sm">
                  + Dashboard
                </span>
              </div>

              <div className="border-2 border-gray-200 bg-white rounded-lg h-max-content py-6 flex flex-col items-center justify-center gap-2 md:w-[60%] mx-auto">
                <h3 className="text-lg font-bold">Max Sales</h3>
                <h3 className="text-lg font-bold">2025</h3>
                <h3 className="text-lg">$300,000</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <DashboardWithUser data="Generate me a scorecard of maximum sales in Jan 2025 to be blue" />
          <div className="md:pl-20 mb-6">
            <div className="border-2 border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="w-8 h-8 rounded-lg"
                />
                <span className="bg-[#4cba8b] text-white px-3 py-1 rounded-full text-sm">
                  + Dashboard
                </span>
              </div>

              <div className="border-2 border-blue-700 bg-blue-700 text-white rounded-lg px-2 h-max-content py-6 flex flex-col items-center justify-center gap-2 md:w-[60%] mx-auto">
                <h3 className="text-lg font-bold">Max Sales</h3>
                <h3 className="text-lg font-bold">2025</h3>
                <h3 className="text-lg">$300,000</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Input Field */}
      </div>

      <Input placeholder="Generate me a scorecard of maximum sales in January 2025" />


      </div>
    </div>
  );
};

export default Fifth2;
