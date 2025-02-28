import React from "react";

const Dashboards = () => {
  return (
    <div className="docs-content-scrollbar ml-[80px] w-[calc(100vw-80px)] md:w-full md:mx-auto h-[calc(100vh-68px)] overflow-y-auto">
      <div className="md:w-[60%] flex flex-col md:mx-auto items-start p-6 pb-12">
        <h2 className="text-3xl font-bold text-[#4cba8b] mb-6 text-center">Dashboards</h2>

        {/* Step 1 */}
        <div className="flex items-start mb-3">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#4cba8b] text-white rounded-full font-bold mr-4">
            1
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900">Step 1</p>
            <p className="text-gray-700">Click on Generate Widget</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start mb-6">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#4cba8b] text-white rounded-full font-bold mr-4">
            2
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900">Step 2</p>
            <p className="text-gray-700">Click on Paper Clip button</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start mb-6">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#4cba8b] text-white rounded-full font-bold mr-4">
            3
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900">Step 3</p>
            <p className="text-gray-700">Select type of Data source:</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Upload Files</li>
              <li>Connect APIs (Google Spreadsheet or Excel Spreadsheet)</li>
              <li>Connect DBs (MySQL, MongoDB, or Snowflakes)</li>
            </ul>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex items-start mb-6">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#4cba8b] text-white rounded-full font-bold mr-4">
            4
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900">Step 4</p>
            <p className="text-gray-700">Click on refresh button to see updates in popup</p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="flex items-start mb-6">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#4cba8b] text-white rounded-full font-bold mr-4">
            5
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900">Step 5</p>
            <p className="text-gray-700">Select Datasource (Files, API, or DB)</p>
          </div>
        </div>

        {/* Step 6 */}
        <div className="flex items-start mb-6">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#4cba8b] text-white rounded-full font-bold mr-4">
            6
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900">Step 6</p>
            <p className="text-gray-700">Close Popup</p>
          </div>
        </div>

        {/* Step 7 */}
        <div className="flex items-start mb-6">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#4cba8b] text-white rounded-full font-bold mr-4">
            7
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900">Step 7</p>
            <p className="text-gray-700">
              Generate widgets using Generate Widget button and Add those widgets to Dashboard using + Dashboard button
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboards;