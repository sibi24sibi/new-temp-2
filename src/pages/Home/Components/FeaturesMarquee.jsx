import React from "react";
import { FaFilePdf, FaFileAlt, FaFileCsv, FaFileImage, FaFileVideo, FaFileInvoice, FaFileExcel } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";
import { SiJson, SiXml, SiPng } from "react-icons/si";
import { BiAnalyse } from "react-icons/bi";
import "../../../App.css";

const statsData = [
    {
        id: "Marketing and Sales Analysis",
        title: "450+",
        subtitle: "Marketing and Sales Analysis",
        highlight: "+5 apps/week",
        icons: [
            { id: 1, name: "PDF Analysis", icon: FaFilePdf },
            { id: 2, name: "TXT Analysis", icon: AiOutlineFileText },
            { id: 3, name: "XML Analysis", icon: SiXml },
            { id: 4, name: "JSON Analysis", icon: SiJson },
            { id: 5, name: "CSV Analysis", icon: FaFileCsv },
            { id: 6, name: "JPEG Analysis", icon: FaFileImage },
            { id: 7, name: "OCR Analysis", icon: FaFileInvoice },
            { id: 8, name: "MP4 Analysis", icon: FaFileVideo },
            { id: 9, name: "XLS Analysis", icon: FaFileExcel },
            { id: 10, name: "XLSX Analysis", icon: FaFileExcel },
            // { id: 11, name: "PNG Analysis", icon: SiPng },
            { id: 12, name: "Need Analysis", icon: BiAnalyse },
            { id: 13, name: "Challenge Analysis", icon: BiAnalyse },
            { id: 14, name: "Issue Analysis", icon: BiAnalyse },
            { id: 15, name: "Opportunity Analysis", icon: BiAnalyse },
            { id: 16, name: "RFP Analysis", icon: BiAnalyse },
            { id: 17, name: "RFI Analysis", icon: BiAnalyse },
        ],
    },
    {
        id: "Strategic Analysis",
        title: "450+",
        subtitle: "Strategic Analysis",
        highlight: "+5 apps/week",
        icons: [
            { id: 1, name: "Q&A Analysis", icon: FaFilePdf },
            { id: 2, name: "FAQ Analysis", icon: AiOutlineFileText },
            { id: 3, name: "Churn Analysis", icon: SiXml },
            { id: 4, name: "Survey Analysis", icon: SiJson },
            { id: 5, name: "Form Analysis", icon: FaFileCsv },
            { id: 6, name: "Compare Analysis", icon: FaFileImage },
            { id: 7, name: "Feedback Analysis", icon: FaFileInvoice },
            { id: 8, name: "Product Analysis", icon: FaFileVideo },
            { id: 9, name: "Content Analysis", icon: FaFileExcel },
            { id: 10, name: "XLSX Analysis", icon: FaFileExcel },
            // { id: 11, name: "PNG Analysis", icon: SiPng },
            { id: 12, name: "Need Analysis", icon: BiAnalyse },
            { id: 13, name: "Challenge Analysis", icon: BiAnalyse },
            { id: 14, name: "Issue Analysis", icon: BiAnalyse },
            { id: 15, name: "Opportunity Analysis", icon: BiAnalyse },
            { id: 16, name: "RFP Analysis", icon: BiAnalyse },
            { id: 17, name: "RFI Analysis", icon: BiAnalyse },
        ],
    },
    {
        id: "Finacial Analysis",
        title: "450+",
        subtitle: "Financial Analysis",
        highlight: "+5 apps/week",
        icons: [
            { id: 1, name: "Q&A Analysis", icon: FaFilePdf },
            { id: 2, name: "FAQ Analysis", icon: AiOutlineFileText },
            { id: 3, name: "Churn Analysis", icon: SiXml },
            { id: 4, name: "Survey Analysis", icon: SiJson },
            { id: 5, name: "Form Analysis", icon: FaFileCsv },
            { id: 6, name: "Compare Analysis", icon: FaFileImage },
            { id: 7, name: "Feedback Analysis", icon: FaFileInvoice },
            { id: 8, name: "Product Analysis", icon: FaFileVideo },
            { id: 9, name: "Content Analysis", icon: FaFileExcel },
            { id: 10, name: "XLSX Analysis", icon: FaFileExcel },
            // { id: 11, name: "PNG Analysis", icon: SiPng },
            { id: 12, name: "Need Analysis", icon: BiAnalyse },
            { id: 13, name: "Challenge Analysis", icon: BiAnalyse },
            { id: 14, name: "Issue Analysis", icon: BiAnalyse },
            { id: 15, name: "Opportunity Analysis", icon: BiAnalyse },
            { id: 16, name: "RFP Analysis", icon: BiAnalyse },
            { id: 17, name: "RFI Analysis", icon: BiAnalyse },
        ],
    },
];

const StatsSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 max-w-7xl mx-auto bg-[#f5f5f4] rounded-lg shadow-md">
            {statsData.map((stat) => (
                <div key={stat.id} className="bg-white rounded-xl p-6 shadow-lg flex flex-col gap-4">
                    {/* Marquee Effect with Slices */}
                    <div className="relative flex justify-center overflow-hidden h-48 bg-gray-100 rounded-md p-4">
                        {/* First slice: 0-4 -> animate-marquee */}
                        <div className="flex flex-col w-full space-y-3 animate-marquee">
                            {stat.icons.slice(0, 5).map((item) => (
                                <div key={item.id} className="flex flex-col items-center gap-2 text-gray-700 text-lg">
                                    <item.icon className="text-3xl text-blue-500" />
                                    <p className="text-xs">{item.name}</p>
                                </div>
                            ))}
                        </div>

                        {/* Second slice: 5-9 -> animate-marquee-reverse */}
                        <div className="flex flex-col w-full space-y-3 animate-marquee-reverse">
                            {stat.icons.slice(5, 10).map((item) => (
                                <div key={item.id} className="flex flex-col  items-center gap-2 text-gray-700 text-lg">
                                    <item.icon className="text-3xl text-blue-500" />
                                    <p className="text-xs">{item.name}</p>
                                </div>
                            ))}
                        </div>

                        {/* Third slice: 10-15 -> animate-marquee */}
                        <div className="flex flex-col w-full space-y-3 animate-marquee">
                            {stat.icons.slice(10, 16).map((item) => (
                                <div key={item.id} className="flex flex-col  items-center gap-2 text-gray-700 text-lg">
                                    <item.icon className="text-3xl text-blue-500" />
                                    <p className="text-xs">{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats Info */}
                    <div className="text-left">
                        {/* <h2 className="text-4xl font-bold text-[#1a1a1a]">{stat.title}</h2> */}
                        <p className="text-lg text-[#4a4a4a]">
                            {stat.subtitle}{" "}
                            {/* <span className="bg-[#f0f0f0] px-2 py-1 rounded-full text-sm">{stat.highlight}</span> */}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsSection;
