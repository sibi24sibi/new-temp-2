import React from "react";

const jobs = [
    { title: "Business Development Executive" },
    { title: "HealthCare Data Analyst" },
    { title: "Financial Data Analyst" },
    { title: "Python Backend Developer" },
    { title: "Project Delivery Management Trainee" },
];

const Careers = () => {
    return (
        <div className="mt-24 flex flex-col items-center">
            <h2 className="text-2xl  font-bold text-gray-900 mb-6">Careers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-5xl w-full">
                {jobs.map((job, index) => (
                    <div
                        key={index}
                        className="border rounded-xl shadow-md p-6 w-full max-w-xs bg-white text-gray-900 flex flex-col justify-between h-32"
                    >
                        <h3 className="font-bold text-lg mb-auto">{job.title}</h3>
                        <div className="flex justify-between text-gray-600 text-sm mt-4">
                            <span>3 months</span>
                            <span>Internship</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Careers;
