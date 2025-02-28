import React from "react";

const FirstDashboard = () => {
  return (
    <div className="docs-content-scrollbar ml-[80px] w-[calc(100vw-80px)] md:w-full md:mx-auto h-[calc(100vh-68px)] overflow-y-auto">
      <div className="md:w-[60%] flex flex-col md:mx-auto items-start p-6 pb-12">
        <h2 className="text-3xl font-bold text-[#4cba8b] mb-6 text-center">First Dashboard</h2>

        {/* Step 1 */}
        <div className="flex items-start mb-3">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#4cba8b] text-white rounded-full font-bold mr-4">
            1
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900">Step 1</p>
            <p className="text-gray-700">Follow installation guidelines</p>
            <a
              href="/docs/installation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4cba8b] underline mt-2 block"
            >
              Installation Link
            </a>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start mb-6">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#4cba8b] text-white rounded-full font-bold mr-4">
            2
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900">Step 2</p>
            <p className="text-gray-700">Follow LLM Model Selection</p>
            <a
              href="/docs/llm-model"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4cba8b] underline mt-2 block"
            >
              LLM Model Selection Link
            </a>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start mb-6">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#4cba8b] text-white rounded-full font-bold mr-4">
            3
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900">Step 3</p>
            <p className="text-gray-700">Follow Data Source Selection</p>
            <a
              href="/docs/data-sources"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4cba8b] underline mt-2 block"
            >
              Data Source Selection Link
            </a>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex items-start mb-6">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#4cba8b] text-white rounded-full font-bold mr-4">
            4
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900">Step 4</p>
            <p className="text-gray-700">Follow Prompting Guidelines</p>
            <a
              href="/docs/prompting-guidelines"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4cba8b] underline mt-2 block"
            >
              Prompting Guidelines Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstDashboard;