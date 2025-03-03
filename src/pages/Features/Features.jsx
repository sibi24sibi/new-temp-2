import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import {
  FileText,
  Filter,
  BarChart2,
  Table,
  LayoutDashboard,
  PieChart,
  Sliders,
  Database,
  Gauge,
  List,
  Smartphone,
  Scissors,
  ChartColumnBig,
} from "lucide-react";
import { IoAnalytics } from "react-icons/io5";

const Features = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [isAdvancedAnalyticsOpen, setIsAdvancedAnalyticsOpen] = useState(true);
  const location = useLocation();

  const toggleMenu = () => {
    if(isMenuVisible && isAdvancedAnalyticsActive) setIsAdvancedAnalyticsOpen(false)
    setIsMenuVisible(!isMenuVisible);
  };

  const toggleAdvancedAnalytics = () => {
    if(!isAdvancedAnalyticsActive && !isMenuVisible) setIsMenuVisible(true)
    if(!isMenuVisible) setIsMenuVisible(true)
    setIsAdvancedAnalyticsOpen(!isAdvancedAnalyticsOpen);
  };

  const guidelines = {
    "Insight Generation": {
      icon: <LayoutDashboard />,
      prompts: [
        "I want insight of sales. Use table 1 and table 2",
        "I want insight of total revenue made in first quarter from this pdf",
      ],
    },
    "Graph Generation": {
      icon: <BarChart2 />,
      prompts: [
        "Generate me a graph of sales vs year. Sales should be on Y axis and Year Should be on X axis",
        "Generate me a gauge graph of total sales made",
        "Generate me a sales graph. Sales on Y axis and Year on X axis. Add a filter for Sales and Filter for Year",
      ],
    },
    "Table Generation": {
      icon: <Table />,
      prompts: [
        "Generate me a table of sales and year. Use table 1 and table 2 data",
        "Generate me a table of sales and year. Add two filters, one for sales and another for year.",
      ],
    },
    "Stylizing Prompt": {
      icon: <Sliders />,
      prompts: [
        "Change the color of the graph to black",
        "Change the color of the font to black",
        "Change the color of Scorecard to black",
      ],
    },
    "Heatmap Generation": {
      icon: <PieChart />,
      prompts: [
        "I want heatmap of sales. Use table 1 and table 2",
        "I want heatmap of total revenue made in first quarter from this pdf",
      ],
    },
    "SQL Query Generation": {
      icon: <Database />,
      prompts: [
        "Generate me SQL query for sales in 2024.",
        "Generate me SQL query for total revenue",
      ],
    },
    "Scorecard Generation": {
      icon: <Gauge />,
      prompts: [
        "Generate me a Scorecard of total sales made in 2024. Use table 1 and table 2 data",
        "Generate me a Scorecard of total visitors. Add two filters, one for organic visitors and another for paid marketing.",
      ],
    },
    "Filter Generation": {
      icon: <Filter />,
      prompts: [
        "Generate me a graph of sales. Add year as a filter as well as add location as a filter.",
        "Generate me a table of sales. Add year as a filter as well as add location as a filter.",
      ],
    },
    "Responsive Visuals": {
      icon: <Smartphone />,
      prompts: [
        "I want generated heatmap widget to be responsive. When I reduce the screen width or height it should reduce the width and height of the widget accordingly.",
      ],
    },
    "Pagination Generation": {
      icon: <List />,
      prompts: [
        "I want to implement pagination for the generated table widget. Only 5 rows per page.",
        "I want to change color of pagination to blue.",
      ],
    },
    "Advanced Analytics": {
      icon: <ChartColumnBig />,
      prompts: {
        "Data Cleaning": [
          "Remove **Name?? from Names column and Remove ???? from Sales column. Generate a new table",
          "Generate bar chart with blue color based on above data",
        ],
        "Data Slicing & Filtering": [
          "I want to add few filters to table. Add these filters: Date, Time, and Product. Generate me a table with these filters.",
          "Based on above table, I need an area graph with the same filters (Date, Time, and Product).",
          "Change color of the graph to green.",
        ],
        "Data Normalization & Scaling": [
          "After transformation, data should have a mean of 0 and a standard deviation of 1.",
          "Generate a line graph based on the above transformed data.",
        ],
        "Encoding & Transformation": [
          "Convert Colors to binary columns.",
          "Generate a scorecard of the total sum of binary columns for respective colors.",
        ],
        "Aggregation & Summarization": [
          "Group sales per month and average ratings and generate a table.",
          "Generate an Area graph between sales per month on the Y-axis and average ratings on the X-axis.",
        ],
        "Feature Engineering": [
          "Create a total price feature from quantity and unit price. Multiply quantity and unit to generate total price. Generate a table of total price, quantity, and unit price.",
          "Based on the above table, generate me a scorecard of the maximum price.",
        ],
        "Data Integration & Merging": [
          "Combine product sales table and product review table and generate a new table.",
          "Based on the above table, generate a heatmap of sales and reviews in each region.",
        ],
        "Text Processing": [
          "I want to remove stop words like 'a', 'an', and 'the' from the column 'product information' and generate a revised table.",
          "I want to split sentences in the 'product information' column and generate it as a table.",
          "Based on the above table, generate a filter (sliced) table.",
        ],
        "Data Type Conversion": [
          "Convert date string in the date column to a datetime object and generate a table of year, month, and day.",
          "Add the above datetime object as a slicer (filter) for the sales table.",
        ],
      },
    },
  };

  const isAdvancedAnalyticsActive = location.pathname.startsWith("/features/advanced-analytics");

  return (
    <div className={`h-[calc(100vh-64px)] duration-500 shadow-lg relative bottom-0 flex flex-col lg:flex-row mt-[64px] z-[150]`}>
      {/* Sidebar */}
      <div
        className={`bg-gradient-to-r from-[#29AE93] to-[#4EC07A] text-white transition-all duration-300 ease-in-out ${
          isMenuVisible ? "w-64 p-4" : "w-20 p-4"
        } fixed h-[calc(100vh-64px)] z-20 overflow-y-auto`}
        style={{ overflow: "visible" }}
      >
        <h2 className={`text-2xl font-bold mb-6 ${isMenuVisible ? "block" : "hidden"}`}>
          Features
        </h2>
        <div className={`absolute -right-3 top-8`}>
          <button
            onClick={toggleMenu}
            className={`transition-transform transform hover:scale-110 bggrad text-white rounded-full shadow hover:bggrad2 focus:outline-none duration-300 ${isMenuVisible ? 'rotate-180' : ''}`}
          >
            <IoIosArrowDroprightCircle size={24} className="fill-white" />
          </button>
        </div>
        <ul className="docsidebar space-y-4 mt-6 overflow-y-auto max-h-[calc(100vh-150px)] transform transition-all duration-300 ease-in-out">
          {/* Render Guidelines Directly in the Main Menu */}
          {Object.entries(guidelines).map(([guideline, { icon, prompts }]) => {
            const guidelinePath = guideline.toLowerCase().replace(/\s+/g, "-");
            const isGuidelineActive = location.pathname === `/features/${guidelinePath}`;

            return (
              <li key={guideline}>
                {guideline === "Advanced Analytics" ? (
                  <div>
                    <div
                      className={`flex ${
                        isMenuVisible ? "justify-start p-2" : "justify-center py-2"
                      } items-center rounded-lg transition-all duration-300 ${
                        isAdvancedAnalyticsActive
                          ? "bg-[#4cba8b]"
                          : "hover:bg-[#4cba8b]"
                      }`}
                      onClick={toggleAdvancedAnalytics}
                    >
                      <span className={`${isMenuVisible ? "mr-3" : "mr-0"}`}>
                        {icon}
                      </span>
                      <span
                        className={`font-semibold ${
                          isMenuVisible ? "inline" : "hidden"
                        }`}
                      >
                        {guideline}
                      </span>
                    </div>
                    {isAdvancedAnalyticsOpen && (
                      <ul className="pl-6 mt-2 space-y-2 transform transition-all duration-300 ease-in-out">
                        {Object.keys(prompts).map((subItem) => {
                          const subItemPath = subItem.toLowerCase().replace(/\s+/g, "-");
                          const isSubItemActive = location.pathname === `/features/advanced-analytics/${subItemPath}`;

                          return (
                            <li
                              key={subItem}
                              className={`cursor-pointer transform transition-all duration-300 ease-in-out ${
                                isSubItemActive ? "bg-[#4cba8b]" : "hover:bg-[#4cba8b]"
                              }`}
                            >
                              <Link
                                to={`/features/advanced-analytics/${subItemPath}`}
                                className="flex items-center"
                              >
                                <span className={`font-semibold p-2 rounded-lg ${
                                  isSubItemActive ? "bg-[#4cba8b]" : "hover:bg-[#4cba8b]"
                                }`}>{subItem}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={`/features/${guidelinePath}`}
                    className={`flex ${
                      isMenuVisible ? "justify-start p-2" : "justify-center py-2"
                    } items-center rounded-lg transition-all duration-300 ${
                      isGuidelineActive
                        ? "bg-[#4cba8b]"
                        : "hover:bg-[#4cba8b]"
                    }`}
                  >
                    <span className={`${isMenuVisible ? "mr-3" : "mr-0"}`}>
                      {icon}
                    </span>
                    <span
                      className={`font-semibold ${
                        isMenuVisible ? "inline" : "hidden"
                      }`}
                    >
                      {guideline}
                    </span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Main Content */}
      <div className="transition-all duration-500 w-full">
        <Outlet context={{ isMenuVisible }} />
      </div>
    </div>
  );
};

export default Features;