import React from 'react';
import { FaUser } from "react-icons/fa";

function DashboardWithUser(props) {
    return (
        <div className='md:mr-20'>
        
        <div className="bg-gradient-to-r from-[#29AE93] to-[#4EC07A] p-3 rounded-lg flex items-start gap-3 w-full">
            {/* Icon size is explicitly set */}
            <FaUser size={24} className="text-white hflex-shrink-0" />
            {/* Text is wrapped to prevent layout issues */}
            <span className="text-white text-lg flex-1 m-0 p-0">
                {props.data}
            </span>
        </div>
        </div>
    );
}

export default DashboardWithUser;
