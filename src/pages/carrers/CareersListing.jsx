import React from 'react';
import { useParams } from 'react-router-dom';
import { jobData } from "../../Datas/CareersData";  // Make sure jobData contains an array with the job details

const JobListing = () => {
    const { jobId } = useParams();  // Get job ID from URL
    const job = jobData.find(job => job.id === parseInt(jobId));  // Find the job by ID

    if (!job) {
        return <p>Job not found.</p>;
    }

    return (
        <div className="container mx-auto px-4 py-8 pt-24">

            <div className="space-y-6">
                <div className="bg-white p-6 ">
                    <h2 className="text-2xl font-bold text-green-600">{job.jobTitle}</h2>
                    <p className="text-gray-700"><strong>Location:</strong> {job.location}</p>
                    <p className="text-gray-700"><strong>Job Type:</strong> {job.jobType}</p>
                    <p className="text-gray-700"><strong>Duration:</strong> {job.duration}</p>

                    <h3 className="mt-4 text-xl font-semibold">Company Overview:</h3>
                    <p className="text-gray-700">{job.companyOverview}</p>

                    <h3 className="mt-4 text-xl font-semibold">Job Overview:</h3>
                    <p className="text-gray-700">{job.jobOverview}</p>

                    <h3 className="mt-4 text-xl font-semibold">Key Responsibilities:</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                        {job.keyResponsibilities.map((responsibility, idx) => (
                            <li key={idx} className="text-lg">{responsibility}</li>
                        ))}
                    </ol>

                    <h3 className="mt-4 text-xl font-semibold">Requirements:</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                        {job.requirements.map((requirement, idx) => (
                            <li key={idx} className="text-lg">{requirement}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default JobListing;
