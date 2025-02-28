import Eightth from "./../../pages/Home/Components/Eightth";
import Fifth from "./../../pages/Home/Components/Fifth";
import Fourth from "./../../pages/Home/Components/Fourth";
import LandingPage from "./../../pages/Home/Components/LandingPage";
import Nine from "./../../pages/Home/Components/Nine";
import Second from "./../../pages/Home/Components/Second";
import Sixth from "./../../pages/Home/Components/Sixth";
import Third from "../../../pages/Home/Third";
import React, { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import Fifth2 from "./Fifth2";

const PromptGuidelines = () => {
  const { guidelineType } = useParams(); // Get the guideline type from the URL
  const [activeGuideline, setActiveGuideline] = useState("Insight Generation");
  const { isMenuVisible } = useOutletContext(); // Access isMenuVisible from the context
  const isPromptingGuidelinesRoute = location.pathname.startsWith("/prompting-guidelines");
  const isFeaturesRoute = location.pathname.startsWith("/features");
  const guidelines = {
    "insight-generation": [
      "I want insight of sales. Use table 1 and table 2",
      "I want insight of total revenue made in first quarter from this pdf",
    ],
    "graph-generation": [
      "Generate me a graph of sales vs year. Sales should be on Y axis and Year Should be on X axis",
      "Generate me a gauge graph of total sales made",
      "Generate me a sales graph. Sales on Y axis and Year on X axis. Add a filter for Sales and Filter for Year",
    ],
    "table-generation": [
      "Generate me a table of sales and year. Use table 1 and table 2 data",
      "Generate me a table of sales and year. Add two filters, one for sales and another for year.",
    ],
    "stylizing-prompt": [
      "Change the color of the graph to black",
      "Change the color of the font to black",
      "Change the color of Scorecard to black",
    ],
    "heatmap-generation": [
      "I want heatmap of sales. Use table 1 and table 2",
      "I want heatmap of total revenue made in first quarter from this pdf",
    ],
    "sql-query-generation": [
      "Generate me SQL query for sales in 2024.",
      "Generate me SQL query for total revenue",
    ],
    "scorecard-generation": [
      "Generate me a Scorecard of total sales made in 2024. Use table 1 and table 2 data",
      "Generate me a Scorecard of total visitors. Add two filters, one for organic visitors and another for paid marketing.",
    ],
    "filter-generation": [
      "Generate me a graph of sales. Add year as a filter as well as add location as a filter.",
      "Generate me a table of sales. Add year as a filter as well as add location as a filter.",
    ],
    "responsive-visuals": [
      "I want generated heatmap widget to be responsive. When I reduce the screen width or height it should reduce the width and height of the widget accordingly.",
    ],
    "pagination-generation": [
      "I want to implement pagination for the generated table widget. Only 5 rows per page.",
      "I want to change color of pagination to blue.",
    ],
  };

  // Update the active guideline when the URL parameter changes
  useEffect(() => {
    if (guidelineType && guidelines[guidelineType]) {
      setActiveGuideline(guidelineType);
    } else {
      setActiveGuideline("insight-generation"); // Default to "Insight Generation" if the guidelineType is invalid
    }
  }, [guidelineType, guidelines]);

  return (
    <div className={`docscontent transition-all duration-500 ml-20 ${isMenuVisible ? "md:ml-[250px]" : ""} h-[calc(100vh-64px)] overflow-y-auto overflow-x-hidden`}>
      {/* <div className="docscontent ml-20 md:ml-[250px] h-[calc(100vh-64px)] overflow-y-auto overflow-x-hidden"> */}
      <div className="flex flex-col w-full justify-start p-6 md:w-[100%] md:mx-auto lg:items-start">
        {isPromptingGuidelinesRoute && (
          <h2 className="text-3xl font-bold text-[#4cba8b] mb-6 text-center">
            Prompting Guidelines
          </h2>
        )}
        {isFeaturesRoute && (
          <h2 className="text-3xl font-bold text-[#4cba8b] mb-6 text-center">
            Features
          </h2>
        )}

        <div className="flex flex-col md:flex-row w-full">
          {/* Guidelines Menu */}
          <div className="hidden w-full md:w-1/4 mb-6 md:mb-0">
            <ul className="space-y-2">
              {Object.keys(guidelines).map((guideline) => (
                <li
                  key={guideline}
                  className={`p-2 cursor-pointer rounded-lg ${activeGuideline === guideline
                    ? "bg-[#4cba8b] text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  onClick={() => setActiveGuideline(guideline)}
                >
                  <span className="font-semibold">
                    {guideline
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Guidelines Content */}
          <div className="w-full md:w-3/4 md:pl-6">
            <h3 className="text-2xl font-semibold text-[#4cba8b] mb-4">
              {activeGuideline
                .replace(/-/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())}
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              {guidelines[activeGuideline]?.map((prompt, index) => (
                <li key={index} className="text-gray-700">
                  {prompt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        {activeGuideline === "graph-generation" ? (
          <Second />
        ) : activeGuideline === "table-generation" ? (
          <Nine />
        ) : activeGuideline === "table-generation" ? (
          <Nine />
        ) : activeGuideline === "filter-generation" ? (
          <Nine />
        ) : activeGuideline === "insight-generation" ? (
          <Eightth />
        ) : activeGuideline === "sql-query-generation" ? (
          <Sixth />
        ) : activeGuideline === "stylizing-prompt" ? (
          <Fifth2 />
        ) : activeGuideline === "scorecard-generation" ? (
          <Fifth />
        ) : activeGuideline === "heatmap-generation" ? (
          <Fourth />
        ) : activeGuideline === "responsive-visuals" ? (
          <Fourth />
        ) : activeGuideline === "pagination-generation" ? (
          <Nine />
        ) : (
          <LandingPage />
        )}
      </div>
    </div>
  );
};

export default PromptGuidelines;
