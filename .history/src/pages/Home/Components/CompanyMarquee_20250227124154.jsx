import React from "react";
import Marquee from "react-fast-marquee";
import img25 from "../../../assets/25.png";
import img26 from "../../../assets/26.png";
import img27 from "../../../assets/27.png";
import img28 from "../../../assets/28.png";
import img29 from "../../../assets/29.png";
import img30 from "../../../assets/30.png";
import img31 from "../../../assets/31.png";
import img32 from "../../../assets/32.png";

export const CompanyMarquee = () => {
    const companyImages = [img25, img26, img27, img28, img29, img30, img31, img32];

    return (
        <div className="relative bg-gray-50 py-4 rounded-lg shadow-md overflow-hidden">
            <h2 className="text-5xl font-bold text-center text-gray-800 my-10">
                Trusted by
            </h2>

            {/* Wrapper for fading effect */}
            <div className="relative">
                {/* Left fade effect */}
                <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 via-gray-50 to-transparent z-10"></div>

                {/* Right fade effect */}
                <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 via-gray-50 to-transparent z-10"></div>

                <Marquee speed={50} gradient={false}>
                    <div className="flex items-center gap-16 h-20 w-2/3">
                        {[...companyImages, ...companyImages].map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt={`company logo ${index}`}
                                className="h-16 w-auto opacity-90 hover:opacity-100 transition-transform transform hover:scale-110 duration-300 ease-in-out"
                            />
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    );
};
