import React, { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";


const AdvancedAnalytics = () => {
  const { promptPath } = useParams(); // Get the prompt type from the URL
  const [activePrompt, setActivePrompt] = useState("Data Cleaning");
  const { isMenuVisible } = useOutletContext(); // Access isMenuVisible from the context

  const advancedAnalyticsPrompts = {
    "data-cleaning": [
      "Remove **Name?? from Names column and Remove ???? from Sales column. Generate a new table",
      "Generate bar chart with blue color based on above data",
    ],
    "data-slicing-&-filtering": [
      "I want to add few filters to table. Add these filters: Date, Time, and Product. Generate me a table with these filters.",
      "Based on above table, I need an area graph with the same filters (Date, Time, and Product).",
      "Change color of the graph to green.",
    ],
    "data-normalization-&-scaling": [
      "After transformation, data should have a mean of 0 and a standard deviation of 1.",
      "Generate a line graph based on the above transformed data.",
    ],
    "encoding-&-transformation": [
      "Convert Colors to binary columns.",
      "Generate a scorecard of the total sum of binary columns for respective colors.",
    ],
    "aggregation-&-summarization": [
      "Group sales per month and average ratings and generate a table.",
      "Generate an Area graph between sales per month on the Y-axis and average ratings on the X-axis.",
    ],
    "feature-engineering": [
      "Create a total price feature from quantity and unit price. Multiply quantity and unit to generate total price. Generate a table of total price, quantity, and unit price.",
      "Based on the above table, generate me a scorecard of the maximum price.",
    ],
    "data-integration-&-merging": [
      "Combine product sales table and product review table and generate a new table.",
      "Based on the above table, generate a heatmap of sales and reviews in each region.",
    ],
    "text-processing": [
      "I want to remove stop words like 'a', 'an', and 'the' from the column 'product information' and generate a revised table.",
      "I want to split sentences in the 'product information' column and generate it as a table.",
      "Based on the above table, generate a filter (sliced) table.",
    ],
    "data-type-conversion": [
      "Convert date string in the date column to a datetime object and generate a table of year, month, and day.",
      "Add the above datetime object as a slicer (filter) for the sales table.",
    ],
  };

  // Update the active prompt when the URL parameter changes
  useEffect(() => {
    if (promptPath && advancedAnalyticsPrompts[promptPath]) {
      setActivePrompt(promptPath);
    } else {
      setActivePrompt("data-cleaning"); // Default to "Data Cleaning" if the promptPath is invalid
    }
  }, [promptPath, advancedAnalyticsPrompts]);

  return (
    <div className={`docscontent transition-all duration-500 ml-20 ${isMenuVisible ? "md:ml-[250px]" : ""} h-[calc(100vh-64px)] overflow-y-auto overflow-x-hidden`}>
      <div className="flex flex-col w-full justify-start p-6 md:w-[100%] md:mx-auto lg:items-start">
          <h2 className="text-3xl font-bold text-[#4cba8b] mb-6 text-center">
            Advanced Analytics Prompts
          </h2>
        

        <div className="flex flex-col md:flex-row w-full">
          {/* Prompts Menu */}
          <div className="hidden w-full md:w-1/4 mb-6 md:mb-0">
            <ul className="space-y-2">
              {Object.keys(advancedAnalyticsPrompts).map((prompt) => (
                <li
                  key={prompt}
                  className={`p-2 cursor-pointer rounded-lg ${
                    activePrompt === prompt
                      ? "bg-[#4cba8b] text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => setActivePrompt(prompt)}
                >
                  <span className="font-semibold">
                    {prompt
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prompts Content */}
          <div className="w-full md:w-3/4 md:pl-6">
            <h3 className="text-2xl font-semibold text-[#4cba8b] mb-4">
              {activePrompt
                .replace(/-/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())}
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              {advancedAnalyticsPrompts[activePrompt]?.map((prompt, index) => (
                <li key={index} className="text-gray-700">
                  {prompt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="hidden md:block">
        {activePrompt === "data-cleaning" ? (
          <Second />
        ) : activePrompt === "data-slicing-filtering" ? (
          <Nine />
        ) : activePrompt === "data-normalization-scaling" ? (
          <Fourth />
        ) : activePrompt === "encoding-transformation" ? (
          <Sixth />
        ) : activePrompt === "aggregation-summarization" ? (
          <Fifth />
        ) : activePrompt === "feature-engineering" ? (
          <Fifth2 />
        ) : activePrompt === "data-integration-merging" ? (
          <Eightth />
        ) : activePrompt === "text-processing" ? (
          <Third />
        ) : activePrompt === "data-type-conversion" ? (
          <Nine />
        ) : (
          <LandingPage />
        )}
      </div> */}
    </div>
  );
};

export default AdvancedAnalytics;