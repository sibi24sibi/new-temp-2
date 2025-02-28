import React, { useState } from "react";
import { FileText, Download, Table, BarChart2, Filter } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";

const Docs = () => {
  const sections = [
    {
      id: "installation",
      icon: <Download />,
      label: "Installation",
      path: "installation",
    },
    {
      id: "widget-generation",
      icon: <FileText />,
      label: "Widget Generation",
      path: "widget-generation",
    },
    {
      id: "dashboards",
      icon: <BarChart2 />,
      label: "Dashboards",
      path: "dashboards",
    },
    {
      id: "preview-data",
      icon: <Table />,
      label: "Preview Data",
      path: "preview-data",
    },
    {
      id: "llm-model",
      icon: <FileText />,
      label: "LLM Model Selection",
      path: "llm-model",
    },
    {
      id: "data-sources",
      icon: <Table />,
      label: "Data Sources",
      path: "data-sources",
    },
    {
      id: "real-time-dashboards",
      icon: <BarChart2 />,
      label: "Real-Time Dashboards",
      path: "real-time-dashboards",
    },
    {
      id: "prompting-guidelines",
      icon: <Filter />,
      label: "Prompting Guidelines",
      path: "prompting-guidelines",
    },
  ];

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isPromptingGuidelinesOpen, setIsPromptingGuidelinesOpen] =
    useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    if(isMenuVisible && isPromptingGuidelinesOpen) setIsPromptingGuidelinesOpen(false)
    setIsMenuVisible(!isMenuVisible);
  };
  const togglePromptingGuidelines = () => {
    setIsPromptingGuidelinesOpen(!isPromptingGuidelinesOpen);
    if(isMenuVisible && !isPromptingGuidelinesOpen){
      setIsPromptingGuidelinesOpen(true)
    }
    else setIsMenuVisible(!isMenuVisible);
  };

  const guidelines = {
    "Insight Generation": [
      "I want insight of sales. Use table 1 and table 2",
      "I want insight of total revenue made in first quarter from this pdf",
    ],
    "Graph Generation": [
      "Generate me a graph of sales vs year. Sales should be on Y axis and Year Should be on X axis",
      "Generate me a gauge graph of total sales made",
      "Generate me a sales graph. Sales on Y axis and Year on X axis. Add a filter for Sales and Filter for Year",
    ],
    "Table Generation": [
      "Generate me a table of sales and year. Use table 1 and table 2 data",
      "Generate me a table of sales and year. Add two filters, one for sales and another for year.",
    ],
    "Stylizing Prompt": [
      "Change the color of the graph to black",
      "Change the color of the font to black",
      "Change the color of Scorecard to black",
    ],
    "Heatmap Generation": [
      "I want heatmap of sales. Use table 1 and table 2",
      "I want heatmap of total revenue made in first quarter from this pdf",
    ],
    "SQL Query Generation": [
      "Generate me SQL query for sales in 2024.",
      "Generate me SQL query for total revenue",
    ],
    "Scorecard Generation": [
      "Generate me a Scorecard of total sales made in 2024. Use table 1 and table 2 data",
      "Generate me a Scorecard of total visitors. Add two filters, one for organic visitors and another for paid marketing.",
    ],
    "Filter Generation": [
      "Generate me a graph of sales. Add year as a filter as well as add location as a filter.",
      "Generate me a table of sales. Add year as a filter as well as add location as a filter.",
    ],
    "Responsive Visuals": [
      "I want generated heatmap widget to be responsive. When I reduce the screen width or height it should reduce the width and height of the widget accordingly.",
    ],
    "Pagination Generation": [
      "I want to implement pagination for the generated table widget. Only 5 rows per page.",
      "I want to change color of pagination to blue.",
    ],
  };

  return (
    <div className="h-[calc(100vh-72px)] relative bottom-0 flex flex-col lg:flex-row mt-16 overflow-y-auto z-[150]">
      {/* Sidebar */}
      <div
        className={` bg-green-600 text-white transition-all duration-300 ease-in-out ${
          isMenuVisible ? "p-4" : "p-4"
        } fixed h-[calc(100vh-72px)] transition-all z-20 overflow-y-auto`} style={{ overflow: "visible" }}
      >
        {/* <div
        className={` bg-green-600 text-white p-6 fixed h-screen transition-all z-20 overflow-y-auto ${
          isMenuVisible ? "w-3/4 lg:w-1/4" : "w-[80px] p-2"
        }`}
      > */}
    <h2 className={`text-2xl font-bold mb-6 transition-opacity duration-500 ${isMenuVisible ? "block" : "hidden"}`}>Menu</h2>
    <div className={`absolute -right-6 top-16`}>
      <button
        onClick={toggleMenu}
        className="transition-transform transform hover:scale-110 bg-green-500 text-white rounded-full shadow hover:bg-green-700 focus:outline-none"
      >
        {isMenuVisible ? <IoIosArrowDropleftCircle size={24} className="fill-white" /> : <IoIosArrowDroprightCircle size={24} className="fill-white" />}
      </button>
    </div>
        <ul className="space-y-4 mt-6">
          {sections.map((section) => (
            <li key={section.id}>
              {section.id === "prompting-guidelines" ? (
                <div>
                  <div
                    className={`flex p-2 items-center rounded-lg transition-all duration-500 ${
                      location.pathname === `/docs/${section.path}`
                        ? "bg-green-700"
                        : "hover:bg-green-800"
                    }`}
                    onClick={togglePromptingGuidelines}
                  >
                    <span className={`${isMenuVisible ? "mr-3" : "mr-0"}`}>
                      {section.icon}
                    </span>
                    <span
                      className={`font-semibold transition-opacity duration-500  ${
                        isMenuVisible ? "inline opacity-100" : "hidden opacity-0"
                      }`}
                    >
                      {section.label}
                    </span>
                  </div>
                  {isPromptingGuidelinesOpen && (
                    <ul className="pl-6 mt-2 space-y-2">
                      {Object.keys(guidelines).map((guideline) => (
                        <li
                          key={guideline}
                          className="cursor-pointer p-2 rounded-lg hover:bg-green-700"
                        >
                          <Link
                            to={`/docs/${section.path}/${guideline
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="flex items-center"
                            onClick={toggleMenu}
                          >
                            <span className="font-semibold">{guideline}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={`/docs/${section.path}`}
                  className={`flex ${
                    isMenuVisible ? "justify-start p-2" : "justify-center py-2"
                  } items-center rounded-lg transition-all duration-300 ${
                    location.pathname === `/docs/${section.path}`
                      ? "bg-green-700"
                      : "hover:bg-green-800"
                  }`}
                  onClick={toggleMenu}
                >
                  <span className={`${isMenuVisible ? "mr-3" : "mr-0"}`}>
                    {section.icon}
                  </span>
                  <span
                    className={`font-semibold  ${
                      isMenuVisible ? "inline" : "hidden"
                    }`}
                  >
                    {section.label}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Docs;
