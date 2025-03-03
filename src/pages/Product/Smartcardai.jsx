import React from 'react';

const Smartcardai = () => {
  const handleDownload = () => {
    // Logic to handle the download
    alert('Downloading SmartCard AI...');
  };

  return (
    <div className="home fixed h-[calc(100vh-72px)] bottom-0 overflow-y-auto w-full bg-gray-50 px-4 sm:px-6 lg:px-8 py-12 md:py-0 md:flex items-center justify-center">
      <div className=" bg-white p-8 rounded-lg shadow-lg md:w-[75%] mx-auto ">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">SmartCard AI</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          SmartCard AI is a generative BI tool that harnesses the power of Generative AI to automatically create and organize visuals for dashboards. It streamlines data analysis by generating insightful visualizations that are intelligently arranged into shareable dashboards. Whether for internal reporting or client presentations, SmartCard AI ensures that key business insights are visually compelling and easily accessible. Users can effortlessly share dashboards with clients or team members, enabling seamless collaboration and data-driven decision-making. With its AI-driven automation, SmartCard AI transforms raw data into actionable intelligence, making business analytics more efficient and impactful.
        </p>
        <button
          onClick={handleDownload}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-lg font-semibold transition-colors"
        >
          Download SmartCard AI
        </button>
      </div>
    </div>
  );
};

export default Smartcardai;