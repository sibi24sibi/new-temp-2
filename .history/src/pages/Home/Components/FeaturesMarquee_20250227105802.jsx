




import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
///////////////////////////////////////////////////////////////

import challageIcon from "../../../assets/challenge.png";
import infoIcon from "../../../assets/info.png";
import needIcon from "../../../assets/need.png";
import opportunityIcon from "../../../assets/opportunities.png";
import issueIcon from "../../../assets/problem-solving.png";
import rfpIcon from "../../../assets/request-for-proposal.png";
import rfiIcon from "../../../assets/search.png";
import rfqIcon from "../../../assets/rfq.png";
import "../../../App.css";
/////////////////////////////////////////////////////////////
import QAIcon from "../../../assets/help (1).png"
import FAQIcon from "../../../assets/help.png"
import chartIcon from "../../../assets/bar-chart.png"
import pieChartIcon from "../../../assets/pie-chart.png"
import emoji from "../../../assets/happy.png"
import survey from "../../../assets/list.png"
import compare from "../../../assets/compare.png"
import DataAnalysisIcon from "../../../assets/data_analyst.png"
import selectionIcon from '../../../assets/selection_analysis.png'
import feedbackIcon from "../../../assets/feedback_analysis.png"
import productIcon from "../../../assets/product.png"
import contentIcon from "../../../assets/2503667.png"
import marketingIcon from "../../../assets/Marketing_analysis.png"
import salesIcon from "../../../assets/Sales.png"


/////////////////////////////////////////////////////////////




import { FaFilePdf, FaFileAlt, FaFileCsv, FaFileImage, FaFileVideo, FaFileInvoice, FaFileExcel } from "react-icons/fa";
import { BiAnalyse } from "react-icons/bi";
import { AiOutlineFileText } from 'react-icons/ai';
import { SiJson, SiXml } from 'react-icons/si';
import { List } from "lucide-react";


const statsData = [
    {
        id: "Document Vision Model Analysis",
        title: "450+",
        subtitle: "Document Vision Model Analysis",
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
            { id: 11, name: "PDF Analysis", icon: FaFilePdf },
            { id: 12, name: "TXT Analysis", icon: AiOutlineFileText },
            { id: 13, name: "XML Analysis", icon: SiXml },

        ],
    },
    {
        id: "Need Analysis",
        title: "450+",
        subtitle: "Need Analysis",
        highlight: "+5 apps/week",
        icons: [
            { id: 1, name: "Need Analysis", icon: needIcon },
            { id: 2, name: "Challenge Analysis", icon: challageIcon },
            { id: 3, name: "Issue Analysis", icon: issueIcon },
            { id: 4, name: "Oppertunities Analysis", icon: opportunityIcon },
            { id: 5, name: "RFQ Analysis", icon: rfqIcon },
            { id: 6, name: "RFP Analysis", icon: rfpIcon },
            { id: 7, name: "RFI Analysis", icon: rfiIcon },
            { id: 8, name: "Information Analysis", icon: infoIcon },
            { id: 9, name: "Need Analysis", icon: needIcon },
            { id: 10, name: "Challenge Analysis", icon: challageIcon },
            { id: 11, name: "Issue Analysis", icon: issueIcon },
            { id: 12, name: "Oppertunities Analysis", icon: opportunityIcon },
            { id: 13, name: "RFQ Analysis", icon: rfqIcon },
            { id: 14, name: "RFP Analysis", icon: rfpIcon },
            { id: 15, name: "RFI Analysis", icon: rfiIcon },
            { id: 16, name: "Information Analysis", icon: infoIcon },
        ]
    },
    {
        id: "Marketing & Sales Analysis",
        title: "450+",
        subtitle: "Marketing & Sales Analysis",
        highlight: "+5 apps/week",
        icons: [
            {
                id: 1, name: "Q&A Analysis", icon: QAIcon
            },
            { id: 2, name: "FAQ Analaysis", icon: FAQIcon },
            { id: 3, name: "Churn Analaysis", icon: chartIcon },
            { id: 4, name: "Customer Analaysis", icon: pieChartIcon },
            { id: 5, name: "Sentiment Analaysis", icon: emoji },
            { id: 6, name: "Survey Analaysis", icon: survey },
            { id: 7, name: "Form Analaysis", icon: List },
            { id: 8, name: "Compare Analaysis", icon: compare },
            { id: 9, name: "Data Analysis Analaysis", icon: DataAnalysisIcon },
            { id: 10, name: "Selection Analysis", icon: selectionIcon },
            { id: 11, name: "Feedback Analysis", icon: feedbackIcon },
            { id: 12, name: "Product Analysis", icon: productIcon },
            { id: 13, name: "Content Analysis", icon: contentIcon },
            { id: 14, name: "Marketing Strategy Analysis", icon: marketingIcon },
            { id: 15, name: "Sales performance Analysis", icon: salesIcon },
        ]
    },
    {
        id: "Financial Analysis",
        title: "450+",
        subtitle: "Financial Analysis",
        highlight: "+5 apps/week",
        icons: [
            {
                id: 1, name: "Financial Analysis", icon: QAIcon
            },
            {
                id: 2, name: "Budget Analysis", icon: FAQIcon
            },
            {
                id: 3, name: "Cost Benefit Analysis", icon: chartIcon
            },
            {
                id: 4, name: "Cash Flow Analysis ", icon: pieChartIcon
            },
            {
                id: 5, name: "Profitability Analysis", icon: emoji
            },
            {
                id: 6, name: "Scope Analysis", icon: survey
            },
            {
                id: 7, name: "Pricing Analysis", icon: List
            },
            {
                id: 8, name: "Invoice Analysis", icon: compare
            },
            {
                id: 9, name: "Expense Analysis", icon: DataAnalysisIcon
            },
            {
                id: 10, name: "Financial Statement Analysis", icon: selectionIcon
            },
            {
                id: 11, name: "ROI Analysis", icon: feedbackIcon
            },
            {
                id: 12, name: "Data Analysis", icon: productIcon
            },
            {
                id: 13, name: "Current Ratio Analysis", icon: contentIcon
            },
            {
                id: 14, name: "Quick Ratio Analysis", icon: marketingIcon
            },
            {
                id: 15, name: "Gross Profit Margin Analysis", icon: salesIcon
            },
            {
                id: 16, name: "Operating Profit Margin Analysis", icon: compare
            }
        ]
    }
]




const StatsSection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const autoScroll = setInterval(() => emblaApi.scrollNext(), 5000);
        return () => clearInterval(autoScroll);
    }, [emblaApi]);

    return (
        <div className="max-w-7xl mx-auto p-8 overflow-hidden relative">
            <button onClick={scrollPrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md">❮</button>
            <button onClick={scrollNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md">❯</button>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex space-x-6">
                    {statsData.map((stat) => {
                        const totalIcons = stat.icons.length;
                        const chunkSize = Math.ceil(totalIcons / 3);

                        const firstSlice = stat.icons.slice(0, chunkSize);
                        const secondSlice = stat.icons.slice(chunkSize, chunkSize * 2);
                        const thirdSlice = stat.icons.slice(chunkSize * 2);

                        return (
                            <div key={stat.id} className="bg-white rounded-xl p-6 shadow-lg flex flex-col gap-4">
                                {/* Marquee Effect with Slices */}
                                <div className="relative flex justify-center overflow-hidden h-48 bg-gray-100 rounded-md p-4">
                                    {/* First slice */}
                                    <div className="flex flex-col w-full space-y-3 animate-marquee">
                                        {firstSlice.map((item) => (
                                            <div key={item.id} className="flex flex-col items-center gap-2 text-gray-700 text-lg">
                                                {typeof item.icon === "string" ? (
                                                    <img src={item.icon} alt={item.name} className="w-10 h-10" />
                                                ) : (
                                                    <item.icon className="w-10 h-10" />
                                                )}
                                                <p className="text-xs">{item.name}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Second slice */}
                                    <div className="flex flex-col w-full space-y-3 animate-marquee-reverse">
                                        {secondSlice.map((item) => (
                                            <div key={item.id} className="flex flex-col items-center gap-2 text-gray-700 text-lg">
                                                {typeof item.icon === "string" ? (
                                                    <img src={item.icon} alt={item.name} className="w-10 h-10" />
                                                ) : (
                                                    <item.icon className="w-10 h-10" />
                                                )}
                                                <p className="text-xs">{item.name}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Third slice */}
                                    <div className="flex flex-col w-full space-y-3 animate-marquee">
                                        {thirdSlice.map((item) => (
                                            <div key={item.id} className="flex flex-col items-center gap-2 text-gray-700 text-lg">
                                                {typeof item.icon === "string" ? (
                                                    <img src={item.icon} alt={item.name} className="w-10 h-10" />
                                                ) : (
                                                    <item.icon className="w-10 h-10" />
                                                )}
                                                <p className="text-xs">{item.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Stats Info */}
                                <div className="text-left">
                                    <p className="text-lg text-[#4a4a4a]">{stat.subtitle}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default StatsSection;


