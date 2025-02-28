import React from "react";
import Marquee from "react-fast-marquee";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { testimonials } from "@/Datas/feedbacks";



const getSocialIcon = (social) => {
    if (social === "linkedin") {
        return <FaLinkedin size={20} className="text-gray-400" />;
    } else if (social === "twitter") {
        return <FaXTwitter size={20} className="text-gray-400" />;
    }
    return null; // No icon if social media is missing
};

const TestimonialCard = () => {
    const firstHalf = testimonials.slice(0, Math.ceil(testimonials.length / 2));
    const secondHalf = testimonials.slice(Math.ceil(testimonials.length / 2));

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-12 relative">
            <h3 className="text-3xl font-bold text-center text-gray-800 my-10 uppercase">Our Patreons</h3>

            {/* Left to Right Marquee with Fade */}
            <div className="relative">
                {/* Left Fade */}
                <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
                {/* Right Fade */}
                <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

                <Marquee speed={50} gradient={false} pauseOnClick={true} direction="left">
                    {firstHalf.map((data) => (
                        <div key={data.id} className="relative border rounded-lg p-6 bg-white w-[400px] mx-4 shadow-md">
                            <p className="text-gray-600 italic">{data.text}</p>
                            <div className="flex items-center mt-4">
                                <img src={data.image} alt={data.name} className="w-12 h-12 rounded-full object-cover" />
                                <div className="ml-3">
                                    <h3 className="text-lg font-bold text-gray-900">{data.name}</h3>
                                    <p className="text-gray-500">{data.role}</p>
                                </div>
                            </div>
                            {/* Social Media Icon */}
                            <div className="absolute bottom-4 right-4">
                                {getSocialIcon(data.social)}
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>

            {/* Right to Left Marquee with Fade */}
            <div className="relative">
                {/* Left Fade */}
                <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
                {/* Right Fade */}
                <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

                <Marquee speed={50} gradient={false} pauseOnClick={true} direction="right">
                    {secondHalf.map((data) => (
                        <div key={data.id} className="relative border rounded-lg p-6 bg-white w-[400px] mx-4 shadow-md">
                            <p className="text-gray-600 italic">{data.text}</p>
                            <div className="flex items-center mt-4">
                                <img src={data.image} alt={data.name} className="w-12 h-12 rounded-full object-cover" />
                                <div className="ml-3">
                                    <h3 className="text-lg font-bold text-gray-900">{data.name}</h3>
                                    <p className="text-gray-500">{data.role}</p>
                                </div>
                            </div>
                            {/* Social Media Icon */}
                            <div className="absolute bottom-4 right-4">
                                {getSocialIcon(data.social)}
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>

    );
};

export default TestimonialCard;
