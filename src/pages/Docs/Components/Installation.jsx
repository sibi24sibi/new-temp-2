import React from "react";

const Installation = () => {
  return (
    <div className="docs-content-scrollbar ml-[80px] w-[calc(100vw-80px)] md:w-full md:mx-auto h-[calc(100vh-68px)] overflow-y-auto">
      <div className="md:w-[60%] flex flex-col md:mx-auto items-start p-6 pb-12">
        <h2 className="text-3xl font-bold text-[#4cba8b] mb-6 text-center">
          Installation
        </h2>

        {/* Step 1 */}
        <div className="flex items-start mb-3">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#4cba8b] text-white rounded-full font-bold mr-4">
            1
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900">Step 1</p>
            <p className="text-gray-700">
              Click on Download Button in Home Page
            </p>
          </div>
        </div>

        {/* Download Button */}
        <button
          className="px-6 w-max py-2 bg-[#4cba8b] hover:bg-green-700 text-white font-bold rounded-lg mb-6 ml-12"
          onClick={() => alert("Downloading...")}
        >
          Download
        </button>

        {/* Step 2 */}
        <div className="flex items-start mb-6">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#4cba8b] text-white rounded-full font-bold mr-4">
            2
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900">Step 2</p>
            <p className="text-gray-700">
              Double click on exe file to install Desktop Application. Make sure
              you have Internet Connectivity.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start mb-6">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#4cba8b] text-white rounded-full font-bold mr-4">
            3
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900">Step 3</p>
            <p className="text-gray-700">Signup</p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex items-start mb-6">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#4cba8b] text-white rounded-full font-bold mr-4">
            4
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900">Step 4</p>
            <p className="text-gray-700">Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
