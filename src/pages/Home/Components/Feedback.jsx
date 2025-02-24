import React from "react";
import Marquee from "react-fast-marquee";
import daiki from '../../../assests/daiki.png';
import emma from '../../../assests/emma_wilason.png'
import katrina from '../../../assests/katrina.png'
import nomsa from '../../../assests/nomsa.png'
import cathy from '../../../assests/cathy.png'
import jamal from '../../../assests/jamal.png'
import themba from '../../../assests/themba.png'
import thabo from '../../../assests/thabo.png'
import gabrieal from '../../../assests/gabireal.png'
import lucas from '../../../assests/lucas.png'
import sipho from '../../../assests/sipho.png'
import zanele from '../../../assests/zanele.png'

const testimonials = [
    {
        id: 1,
        text: `"SmartCard AI has completely transformed my workflow.
It automates the creation of charts and dashboards,
saving me hours of manual effort. The AI driven insights
help me focus on analysis rather than formatting visuals. "`,
        name: "Cathy Kelle",
        role: "Data Analyst",
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
    },
    {
        id: 4,
        text: `"SmartCard AI has automated our dashboard building
process. It’s a powerful tool that helps us scale our BI
operations efficiently without increasing headcount."`,
        name: "Themba Zulu",
        role: "BI Developer",
        image: themba,
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
    },
    {
        id: 7,
        text: `"No more manual work! The AI powered visualization tool
eliminates repetitive tasks and allows me to deliver
professional looking dashboards in minutes."`,
        name: "Zanele Khumalo",
        role: "BI Developer",
        image: zanele,
    },
    {
        id: 8,
        text: `"SmartCard AI truly delivers. The way it arranges visuals
intelligently makes my dashboards look professional
without additional tweaking."`,
        name: "Thabo Masilela",
        role: "BI Developer",
        image: thabo,
    },
    {
        id: 9,
        text: `"Our BI team has seen a 40% reduction in time spent
creating reports. This tool is a must have for any business
dealing with large datasets."`,
        name: "Sipho Ndlovu",
        role: "BI Developer",
        image: sipho,
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
    },
    {
        id: 11,
        text: `"SmartCard AI allows my team to spend less time on
repetitive tasks and more time on high impact analysis.
Our productivity has increased significantly."`,
        name: "Lucas Oliveira",
        role: "Analytics Manager",
        image: lucas,
    },
];

const TestimonialCard = () => {
    return (
        <div className="p-6  max-w-7xl mx-auto">
            <Marquee speed={50} gradient={false}>
                {testimonials.map((data) => (
                    <div key={data.id} className="border rounded-lg p-6  bg-white w-[650px] mx-4">
                        {/* Testimonial Text */}
                        <p className="text-gray-600 italic">{data.text}</p>

                        {/* User Info */}
                        <div className="flex items-center mt-4">
                            <img src={data.image} alt={data.name} className="w-12 h-12 rounded-full object-cover" />
                            <div className="ml-3">
                                <h3 className="text-lg font-bold text-gray-900">{data.name}</h3>
                                <p className="text-gray-500">{data.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default TestimonialCard;
