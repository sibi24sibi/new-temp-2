import React from 'react';

const TermsOfService = () => {
    return (
        <div className="max-w-6xl md:mx-16 p-6 mt-5 absolute top-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms of Service for SmartCard AI</h1>
            <p className="text-gray-700">
                Welcome to SmartCard AI ("Service"), developed and provided by Fastighets Cybr Systems Pvt
                Ltd ("we", "us", or "our"). By using the Service, you agree to comply with these Terms of Service
                ("Terms") and any other relevant policies we may publish.
            </p>

            {/* Section: Service Description */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Service Description</h2>
                <p className="text-gray-700">
                    SmartCard AI allows users to query complex data using artificial intelligence. The
                    Service retrieves information through an API designed according to our protocol. With
                    SmartCard AI, you can connect to various data sources and ask questions to analyze
                    and interpret the data.
                </p>
            </div>

            {/* Section: License */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">2. License</h2>
                <p className="text-gray-700">
                    Provided you comply with these Terms, we grant you a limited, non-exclusive,
                    non-transferable, and revocable license to use the Service for personal, non-commercial
                    purposes. You may not modify, distribute, sell, or create derivative works of the Service
                    without our explicit written permission.
                </p>
            </div>

            {/* Section: User Responsibilities and Restrictions */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">3. User Responsibilities and Restrictions</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2">
                    <li>You must be at least 13 years old to use this Service.</li>
                    <li>You agree not to use this Service for any illegal or unauthorized activities.</li>
                    <li>
                        You are prohibited from scraping, copying, or indexing the Service's content in any way
                        without our written permission.
                    </li>
                    <li>
                        You must not use unstructured data sources that contain sensitive information
                        (e.g., patient records, recovery footage, etc.), such as images, PDFs, or MP4s.
                    </li>
                    <li>
                        You are not allowed to use structured files that have restrictions on storage in certain
                        geographic locations. In such cases, you must use your own database or a Google
                        spreadsheet hosted in a permitted location as per your organization's guidelines.
                    </li>
                    <li>
                        You may not use this Service for commercial purposes unless explicitly authorized by us
                        in writing.
                    </li>
                    <li>You agree not to engage in any activities that could disrupt or interfere with the Service.</li>
                    <li>
                        We reserve the right to limit or terminate access for users involved in abusive behavior,
                        including but not limited to: automated botting, excessive usage affecting service
                        performance, or attempts to bypass the intended use of our system.
                    </li>
                </ul>
            </div>
            {/* Section: Data and Privacy */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">4. Data and Privacy</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                        The Service may access and utilize data from third-party sources. However, we are not
                        responsible for the accuracy, completeness, or timeliness of the information provided.
                    </li>
                    <li>
                        By using this Service, you consent to the collection and use of information as outlined in
                        our <span className="text-blue-600 hover:underline cursor-pointer">Privacy Policy</span>.
                    </li>
                    <li>
                        This information may be used to improve and deliver the Service and related offerings.
                    </li>
                    <li>
                        We do not store any data on our servers for more than <strong>30 days</strong> after it has been deleted
                        from the web portal.
                    </li>
                    <li>
                        You are responsible for all inputs you submit to our Service. By submitting inputs, you
                        confirm that you have all necessary rights, licenses, and permissions to allow us to
                        process them.
                    </li>
                    <li>
                        Except as otherwise permitted by applicable law, you retain all rights, title, and interest in
                        the inputs you provide to the Service.
                    </li>
                    <li>
                        Fastighets Cybr Systems Pvt Ltd grants you all rights, titles, and interest (if any) in the
                        outputs generated by our Service.
                    </li>
                </ul>
            </div>

            {/* Section: Intellectual Property */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">5. Intellectual Property</h2>
                <p className="text-gray-700">
                    All content and software related to the Service are owned by Fastighets Cybr Systems Pvt Ltd
                    or its licensors and are safeguarded by international copyright, trademark, patent, trade secret,
                    and other intellectual property laws.
                </p>
            </div>

            {/* Section: Limitation of Liability */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-700">
                    To the maximum extent permitted by applicable law, in no event shall Fastighets Cybr Systems
                    Pvt Ltd, its affiliates, agents, directors, employees, suppliers, or licensors be liable for any
                    indirect, punitive, incidental, special, consequential, or exemplary damages, including without
                    limitation damages for loss of profits, goodwill, data or other intangible losses, that result from
                    the use of, or inability to use, this Service.
                </p>
                <p className="text-gray-700 mt-4">
                    You acknowledge and agree that artificial intelligence and language models can produce
                    unpredictable results and may generate inaccurate, harmful, offensive, or otherwise undesirable
                    content. We make no guarantees and accept no responsibility for any outputs,
                    recommendations, analysis, or decisions generated by the AI components of our Service.
                </p>
                <p className="text-gray-700 mt-4">
                    The Service may automatically make API calls or use third-party services that may incur costs
                    or charges. You acknowledge and agree that we are not liable for any fees, charges, or costsarising from these automated actions or API usage, including situations where the AI model
                    initiates API calls or performs actions that result in charges to your account or connected
                    services. You are solely responsible for monitoring and managing any costs related to your use
                    of the Service and any integrated third-party services or APIs.

                </p>
            </div>
            {/* Section: Termination */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">7. Termination</h2>
                <p className="text-gray-700">
                    We may suspend or terminate your access to the Service immediately, without prior notice or
                    liability, for any reason, including but not limited to a breach of these Terms.
                </p>
            </div>

            {/* Section: Changes to Terms */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">8. Changes to Terms</h2>
                <p className="text-gray-700">
                    We reserve the right to update these Terms at any time. If changes are made, we will notify you
                    through methods such as sending an email, displaying a notice within the Service, or updating
                    the "Last Updated" date at the top of these Terms.
                </p>
            </div>

            {/* Section: Contact Information */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">9. Contact Information</h2>
                <p className="text-gray-700">
                    If you have any questions about these Terms, please contact us at
                    <a href="mailto:sales@smartcardai.com" className="text-blue-600 hover:underline"> sales@smartcardai.com</a>.
                </p>
            </div>

            {/* Section: Acceptance of Terms */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">10. Acceptance of Terms</h2>
                <p className="text-gray-700">
                    By using SmartCard AI, you acknowledge that you have read, understood, and agree to be
                    bound by these Terms of Service.
                </p>
                <p className="text-gray-700 mt-4">
                    If you have any questions about these Terms, please contact us at
                    <a href="mailto:sales@smartcardai.com" className="text-blue-600 hover:underline"> sales@smartcardai.com</a>.
                </p>
            </div>



        </div>
    );
};

export default TermsOfService;
