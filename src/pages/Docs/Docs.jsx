import React, { useState } from "react";
import { FileText, Download, Table, BarChart2, Filter } from "lucide-react";

const Docs = () => {
  const sections = [
    { id: "installation", icon: <Download />, label: "Installation", content: "Installation instructions go here." },
    { id: "widget-generation", icon: <FileText />, label: "Widget Generation", content: "Widget generation steps go here." },
    { id: "dashboards", icon: <BarChart2 />, label: "Dashboards", content: "Dashboard setup instructions go here." },
    { id: "preview-data", icon: <Table />, label: "Preview Data", content: "Steps for previewing data." },
    { id: "llm-model", icon: <FileText />, label: "LLM Model Selection", content: "LLM Model selection instructions." },
    { id: "prompting-guidelines", icon: <Filter />, label: "Prompting Guidelines", content: "Prompting guidelines details." },
    { id: "data-sources", icon: <Table />, label: "Data Sources", content: "Details about data sources." },
    { id: "real-time-dashboards", icon: <BarChart2 />, label: "Real-Time Dashboards", content: "Instructions for real-time dashboards." },
  ];

  const [selectedSection, setSelectedSection] = useState(sections[0]);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Left menu */}
      <div className="w-1/4 bg-white p-6 shadow-lg border-r border-gray-200">
        <h2 className="text-lg font-bold text-green-600 mb-4">Documentation</h2>
        <ul className="space-y-4">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-green-50 ${
                selectedSection.id === section.id
                  ? "bg-green-100 font-semibold text-green-600"
                  : "text-gray-800"
              }`}
              onClick={() => setSelectedSection(section)}
            >
              <div className={`text-green-600`}>{section.icon}</div>
              <span>{section.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right content display */}
      <div className="w-3/4 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-green-600 mb-4">{selectedSection.label}</h1>
        <p className="text-gray-700">{selectedSection.content}</p>
      </div>
    </div>
  );
};

export default Docs;
