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
        <div className="py-4 rounded-lg shadow-md">
            <h2 className="text-5xl font-bold text-center text-gray-800 my-10">
                Trusted by
            </h2>
            <Marquee speed={50} gradient={false} className="overflow-hidden">
                <div className="flex items-center justify-center h-20">
                    {companyImages.map((logo, index) => (
                        <div key={index} className="px-12">
                            <img
                                src={logo}
                                alt={`company logo ${index}`}
                                className="h-16 w-auto opacity-90 hover:opacity-100 transition-transform transform hover:scale-110 duration-300 ease-in-out"
                            />
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};
