import React from "react";
import Marquee from "react-fast-marquee";
import img25 from "../../../assests/25.png";
import img26 from "../../../assests/26.png";
import img27 from "../../../assests/27.png";
import img28 from "../../../assests/28.png";
import img29 from "../../../assests/29.png";
import img30 from "../../../assests/30.png";
import img31 from "../../../assests/31.png";
import img32 from "../../../assests/32.png";

export const CompanyMarquee = () => {
    const companyImages = [img25, img26, img27, img28, img29, img30, img31, img32];

    return (
        <div className="bg-gray-50 py-4 rounded-lg shadow-md ">
            <h2 className=" text-5xl font-bold text-center text-gray-800 my-10 ">
                Trusted by
            </h2>
            <Marquee speed={50} gradient={false}>
                <div className="flex items-center gap-28 h-20">
                    {[...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages, ...companyImages].map((logo, index) => (
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
    );
};
