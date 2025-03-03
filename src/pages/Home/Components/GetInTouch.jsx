import React from 'react';

export const GetInTouch = () => {
    return (
        <div className='flex items-center justify-center px-6 py-12'>
            <div className="py-16 px-10 rounded-3xl bg-gradient-to-r from-[#0098b1] to-[#7BD75A] text-white  ">

                <p className="text-3xl font-bold mb-4">Want a use-case demo for your team?</p>
                <p className="text-base mb-6 py-4 md:w-1/2  ">
                    Reach out to us! We're always eager to bring new data use cases to life, unlocking fresh analysis and AI-driven
                    visual generation on dashboards that empower business teams with instant, insightful visualizations. We also
                    deliver AI-driven insights that enhance data team efficiency with every question they ask.
                </p>
                <a
                    href="mailto:sales@smartcardai.com "
                    className="bg-white text-gray-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition-all"
                >
                    Get in touch
                </a>
            </div>
        </div>
    );
};

export default GetInTouch;
