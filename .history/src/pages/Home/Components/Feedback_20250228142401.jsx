import React from "react";
import Marquee from "react-fast-marquee";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import daiki from '../../../assets/daiki.png';
import emma from '../../../assets/emma_wilason.png';
import katrina from '../../../assets/katrina.png';
import nomsa from '../../../assets/nomsa.png';
import cathy from '../../../assets/cathy.png';
import jamal from '../../../assets/jamal.png';
import themba from '../../../assets/themba.png';
import thabo from '../../../assets/thabo.png';
import gabrieal from '../../../assets/gabireal.png';
import lucas from '../../../assets/lucas.png';
import sipho from '../../../assets/sipho.png';
import zanele from '../../../assets/zanele.png';
import carla from '../../../assets/carla.png';
import druv from '../../../assets/druv.png';
import gita from '../../../assets/gita.png';
import monisha from '../../../assets/monish.png'
import nikhil from '../../../assets/nikhil.png';
import rishi from '../../../assets/rishi.png';

const testimonials = [
    {
        id: 1,
        text: `"SmartCard AI has completely transformed my workflow.
It automates the creation of charts and dashboards,
saving me hours of manual effort. The AI driven insights
help me focus on analysis rather than formatting visuals. "`,
        name: "Cathy Kelle",
        role: "Data Analyst",
        social: "twitter",
        image: cathy, // Replace with real image URL
    },
    {
        id: 2,
        text: `"As a data analyst, my biggest challenge was spending too
much time creating reports. SmartCard AI does it instantly,
allowing me to dive deeper into insights and make more
impactful recommendations."`,
        name: "Katrina Johansson",
        role: "Data Analyst",
        image: katrina,
        socail: "twitter",
    },
    {
        id: 3,
        text: `"The automation is impressive! I no longer have to
manually arrange charts or format data. SmartCard AI
understands my datasets and generates meaningful
visuals without extra effort."`,
        name: "Jamal Rahman",
        role: "Data Analyst",
        image: jamal,
        social: "twitter",
    },
    {
        id: 4,
        text: `"SmartCard AI has automated our dashboard building
process. It’s a powerful tool that helps us scale our BI
operations efficiently without increasing headcount."`,
        name: "Themba Zulu",
        role: "BI Developer",
        image: themba,
        social: "twitter",
    },

    {
        id: 5,
        text: `"I use SmartCard AI daily for internal reporting. The speed
at which it generates dashboards helps my team make
quicker, data backed decisions without waiting for manual
reports."`,
        name: "Nomsa Mthembu",
        role: "Data Analyst",
        image: nomsa,
        social: "linkedin",
    },

    {
        id: 6,
        text: `"Before using SmartCard AI, we had delays in reporting
due to manual data processing. Now, reports are
generated instantly, allowing our decision makers to act
fast."`,
        name: "Emma Williams",
        role: "Data Analyst",
        image: emma,
        social: "linkedin",
    },
    {
        id: 6,
        text: `"SmartCard AI simplifies BI development by automating
the most time consuming parts of dashboard creation. I
can now focus on building data strategies rather than
formatting charts."`,
        name: "Daiki Kobayashi",
        role: "BI Developer",
        image: daiki,
        social: "linkedin",
    },
    {
        id: 7,
        text: `"No more manual work! The AI powered visualization tool
eliminates repetitive tasks and allows me to deliver
professional looking dashboards in minutes."`,
        name: "Zanele Khumalo",
        role: "BI Developer",
        image: zanele,
        social: "linkedin",
    },
    {
        id: 8,
        text: `"SmartCard AI truly delivers. The way it arranges visuals
intelligently makes my dashboards look professional
without additional tweaking."`,
        name: "Thabo Masilela",
        role: "BI Developer",
        image: thabo,
        social: "twitter",
    },
    {
        id: 9,
        text: `"Our BI team has seen a 40% reduction in time spent
creating reports. This tool is a must have for any business
dealing with large datasets."`,
        name: "Sipho Ndlovu",
        role: "BI Developer",
        image: sipho,
        social: "twitter",
    },
    {
        id: 10,
        text: `"One of the best things about SmartCard AI is its ability to
maintain consistency in reporting. The AI generated
dashboards eliminate human errors and ensure
standardization"`,
        name: "Gabriel Santos",
        role: "Analytics Manager",
        image: gabrieal,
        social: "linkedin",
    },
    {
        id: 11,
        text: `"SmartCard AI allows my team to spend less time on
repetitive tasks and more time on high impact analysis.
Our productivity has increased significantly."`,
        name: "Lucas Oliveira",
        role: "Analytics Manager",
        image: lucas,
        social: "linkedin",
    },
    {
        id: 12,
        text: `"We struggled with delays in report generation due to the
complexity of our data. SmartCard AI has solved this by
automating the entire process, making our insights
available instantly."`,
        name: "Nikhil Malhotra",
        role: "Analytics Manager",
        image: nikhil,
        social: "linkedin",
    },
    {
        id: 13,
        text: `"This tool feels like having an extra BI analyst in the team.
It’s fast, accurate, and smart enough to generate
meaningful dashboards without constant supervision."`,


        name: "Gita Raman",
        role: "Analytics Manager",
        image: gita,
        social: "linkedin",
    },
    {
        id: 14,
        text: `"I don’t have to wait for my BI team to generate reports
anymore. SmartCard AI provides real time insights that
help me make informed business decisions on the spot."`,
        name: "Monish Agarwal",
        role: "CEO",
        image: monisha,
        social: "twitter",
    },
    {
        id: 15,
        text: `"As our data volume increased, our manual reporting
process became unsustainable. SmartCard AI scaled with
our needs, handling complex data effortlessly."`,
        name: "Rishi Patel",
        role: "Analytics Manager",
        image: rishi,
        social: "linkedin",
    },
    {
        id: 16,
        text: `"I’m not a data expert, but SmartCard AI makes analytics
easy. The dashboards are clear, insightful, and require no
technical expertise to understand."`,
        name: "Druv Acharya",
        role: "CEO",
        image: druv,
        social: "twitter",
    },
    {
        id: 17,
        text: `"Hiring more BI developers was costly, but with SmartCard
AI, we’ve reduced BI expenses while increasing efficiency.
It’s an investment that pays off."`,
        name: "Clara Oliviaris",
        role: "CEO",
        image: carla,
        social: "twitter",
    }
];

const getSocialIcon = (social) => {
    if (social === "linkedin") {
        return <FaLinkedin size={20} className="text-gray-400" />;
    } else if (social === "twitter") {
        return <FaXTwitter size={20} className="text-gray-400" />;
    }
    return null; // No icon if social media is missing
};

const TestimonialCard = () => {
    import React, { useRef, useState } from "react";
    import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
    import cathy from "../../../assets/cathy.png";
    import katrina from "../../../assets/katrina.png";
    import jamal from "../../../assets/jamal.png";
    import themba from "../../../assets/themba.png";
    import nomsa from "../../../assets/nomsa.png";
    import emma from "../../../assets/emma_wilason.png";

    const testimonials = [
        { id: 1, text: "SmartCard AI transformed my workflow.", name: "Cathy Kelle", role: "Data Analyst", image: cathy, social: "twitter" },
        { id: 2, text: "Reports are now instant!", name: "Katrina Johansson", role: "Data Analyst", image: katrina, social: "twitter" },
        { id: 3, text: "AI-driven insights are a game changer.", name: "Jamal Rahman", role: "Data Analyst", image: jamal, social: "twitter" },
        { id: 4, text: "SmartCard AI automates BI tasks.", name: "Themba Zulu", role: "BI Developer", image: themba, social: "twitter" },
        { id: 5, text: "I use SmartCard AI daily!", name: "Nomsa Mthembu", role: "Data Analyst", image: nomsa, social: "linkedin" },
        { id: 6, text: "No more manual reports!", name: "Emma Williams", role: "Data Analyst", image: emma, social: "linkedin" }
    ];

    const getSocialIcon = (social) => {
        return social === "linkedin" ? <FaLinkedin size={20} className="text-gray-400" /> : <FaXTwitter size={20} className="text-gray-400" />;
    };

    const CustomMarquee = () => {
        const marqueeRef = useRef(null);
        const [isPaused, setIsPaused] = useState(false);
        const [isDragging, setIsDragging] = useState(false);
        const [startX, setStartX] = useState(0);
        const [scrollLeft, setScrollLeft] = useState(0);

        const handleMouseDown = (e) => {
            setIsDragging(true);
            setStartX(e.pageX - marqueeRef.current.offsetLeft);
            setScrollLeft(marqueeRef.current.scrollLeft);
        };

        const handleMouseMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - marqueeRef.current.offsetLeft;
            const walk = (x - startX) * 2; // Adjust speed here
            marqueeRef.current.scrollLeft = scrollLeft - walk;
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        return (
            <div className="p-6 max-w-7xl mx-auto space-y-12 relative">
                <h3 className="text-3xl font-bold text-center text-gray-800 my-10 uppercase">Our Patreons</h3>
                <div
                    ref={marqueeRef}
                    className="overflow-hidden whitespace-nowrap cursor-grab border rounded-lg p-6 bg-white shadow-md flex gap-4"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onClick={() => setIsPaused(!isPaused)}
                    style={{ display: "flex", overflowX: "auto", scrollbarWidth: "none" }}
                >
                    {testimonials.map((data) => (
                        <div key={data.id} className="min-w-[300px] p-4 border rounded-lg shadow-md flex flex-col items-center">
                            <p className="text-gray-600 italic">{data.text}</p>
                            <div className="flex items-center mt-4">
                                <img src={data.image} alt={data.name} className="w-12 h-12 rounded-full object-cover" />
                                <div className="ml-3">
                                    <h3 className="text-lg font-bold text-gray-900">{data.name}</h3>
                                    <p className="text-gray-500">{data.role}</p>
                                </div>
                            </div>
                            <div className="mt-2">{getSocialIcon(data.social)}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };


    export default TestimonialCard;
