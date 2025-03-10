import React from 'react';

const DataPrivacy = () => {
    return (
        <div className="max-w-6xl md:mx-16 p-6 absolute top-20 text-gray-800">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Data Privacy and Security</h1>

            {/* Section 1: Personal Information You Share */}
            <h2 className="text-xl font-semibold mb-4">1. Personal Information You Share</h2>
            <p className="text-gray-700">
                We gather personal information that you willingly provide when using our services or engaging with us.
            </p>
            <ul className="list-disc list-inside space-y-4 mt-4 text-gray-700">
                <li>
                    <strong className="font-semibold">Account Information:</strong>
                    <p className="mt-1">
                        When you create an account, we collect details such as your name, contact information,
                        login credentials, and transaction history. This helps us efficiently manage your account
                        and deliver our services.
                    </p>
                </li>
                <li>
                    <strong className="font-semibold">User Content:</strong>
                    <p className="mt-1">
                        When using our services, particularly with structured files as data sources, we collect personal
                        information contained in the inputs, file uploads, or feedback you provide. This feature is for
                        test and prototype dashboards. However, for production dashboards, we recommend using other
                        data sources like unstructured files, Google spreadsheet connectors, and DB connectors. We do
                        not collect personal information from your inputs, files, or feedback. This data remains stored
                        in your local desktop application while using this feature.
                    </p>
                </li>
                <li>
                    <strong className="font-semibold">Communication Information:</strong>
                    <p className="mt-1">
                        When you reach out to us through email, chat, or other communication channels, we collect your
                        name, contact information, and the content of your messages to better assist you.
                    </p>
                </li>
            </ul>

            {/* Section 2: Automatically Collected Personal Information */}
            <h2 className="text-xl font-semibold mt-8 mb-4">2. Automatically Collected Personal Information</h2>
            <p className="text-gray-700">
                When you visit or use our services, we automatically gather certain details about your usage.
            </p>
            <ul className="list-disc list-inside space-y-4 mt-4 text-gray-700">
                <li>
                    <strong className="font-semibold">Log Data:</strong>
                    <p className="mt-1">
                        We collect your location to offer pricing in your local currency. You can choose to opt out of
                        location tracking when using the pricing page on the website.
                    </p>
                </li>
                <li>
                    <strong className="font-semibold">Usage Data:</strong>
                    <p className="mt-1">
                        We gather information on how you interact with our services, including the content you view,
                        features you use, actions you take, and your time zone and country. This helps us understand
                        your preferences and improve your experience.
                    </p>
                </li>
                <li>
                    <strong className="font-semibold">Device Information:</strong>
                    <p className="mt-1">
                        We do not collect any device-specific information when you use our desktop application.
                    </p>
                </li>
                <li>
                    <strong className="font-semibold">Cookies:</strong>
                    <p className="mt-1">
                        Our third-party vendors use cookies to store information and enhance your experience.
                        Cookies are small data files placed on your device, and you can manage them through
                        your browser settings.
                    </p>
                </li>
                <li>
                    <strong className="font-semibold">Analytics:</strong>
                    <p className="mt-1">
                        We use our own analytics tool, SmartCard AI, to analyze how users interact with our services.
                        This helps us assess the effectiveness of our ads and make data-driven improvements to our offerings.
                    </p>
                </li>
            </ul>
            {/* Section 3: How We Use Your Information */}
            <div className="text-gray-800">
                <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700">
                    We collect and use your personal information for several purposes, including:
                </p>
                <ul className="list-disc list-inside space-y-4 mt-4 text-gray-700">
                    <li>
                        <strong className="font-semibold">Providing Services:</strong>
                        <p className="mt-1">
                            To operate, maintain, and deliver our services, such as the AI dashboard features
                            and the structured file as a data source.
                        </p>
                    </li>
                    <li>
                        <strong className="font-semibold">Improving Services:</strong>
                        <p className="mt-1">
                            To understand user interactions with our services and make necessary enhancements.
                        </p>
                    </li>
                    <li>
                        <strong className="font-semibold">Communication:</strong>
                        <p className="mt-1">
                            To address your inquiries, offer support, and send updates.
                        </p>
                    </li>
                    <li>
                        <strong className="font-semibold">Security:</strong>
                        <p className="mt-1">
                            To monitor and safeguard the security of our services.
                        </p>
                    </li>
                    <li>
                        <strong className="font-semibold">Compliance:</strong>
                        <p className="mt-1">
                            To meet legal obligations and uphold our agreements.
                        </p>
                    </li>
                </ul>
            </div>

            {/* Section 4: Data Storage and Retention */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">4. Data Storage and Retention</h2>
                <p className="text-gray-700">
                    We keep your personal information only for as long as needed to fulfill the purposes described
                    in this policy, unless a longer retention period is required or allowed by law.
                </p>
                <ul className="list-disc list-inside space-y-4 mt-4 text-gray-700">
                    <li>
                        <strong className="font-semibold">Conversations and Prompts:</strong>
                        <p className="mt-1">
                            These are stored as long as the conversation exists and hasn’t been deleted by you.
                            Conversations are stored locally in your Desktop Application, and you have full control
                            over deleting them.
                        </p>
                    </li>
                    <li>
                        <strong className="font-semibold">Temporary File Storage:</strong>
                        <p className="mt-1">
                            Files used for testing and development, including structured files, are stored locally
                            in your Desktop Application. You can delete them as needed. Unstructured files used
                            for testing, development, or production of your generative BI dashboards are also stored locally.
                            For the Google Spreadsheet and DB connectors, you can choose where to host your database
                            and connect it to SmartCard AI. You have complete control over the connectors, including
                            connecting, disconnecting, and deleting them as you wish.
                        </p>
                    </li>
                    <li>
                        <strong className="font-semibold">Payment Information:</strong>
                        <p className="mt-1">
                            We do not store sensitive payment details; HDFC Bank, our payment provider, securely manages this information.
                        </p>
                    </li>
                </ul>
            </div>
            {/* Section 5: Sharing Your Information */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">5. Sharing Your Information</h2>
                <p className="text-gray-700">
                    We do not sell your personal information. However, we may share it with:
                </p>
                <ul className="list-disc list-inside space-y-4 mt-4 text-gray-700">
                    <li>
                        <strong className="font-semibold">Service Providers:</strong>
                        <p className="mt-1">
                            Reliable third-party vendors who help us operate our services, like HDFC Bank
                            for payment processing.
                        </p>
                    </li>
                    <li>
                        <strong className="font-semibold">Legal Requirements:</strong>
                        <p className="mt-1">
                            When necessary to comply with the law or safeguard our rights and safety.
                        </p>
                    </li>
                </ul>
            </div>

            {/* Section 6: Your Choices and Rights */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">6. Your Choices and Rights</h2>
                <p className="text-gray-700">
                    You have control over your personal information and can:
                </p>
                <ul className="list-disc list-inside space-y-4 mt-4 text-gray-700">
                    <li>
                        <strong className="font-semibold">Access and Update:</strong>
                        <p className="mt-1">
                            View and modify your account details whenever you like.
                        </p>
                    </li>
                    <li>
                        <strong className="font-semibold">Delete Conversations:</strong>
                        <p className="mt-1">
                            Remove your conversations and prompts at your discretion.
                        </p>
                    </li>
                    <li>
                        <strong className="font-semibold">Manage Cookies:</strong>
                        <p className="mt-1">
                            Change your browser settings to control cookie usage.
                        </p>
                    </li>
                    <li>
                        <strong className="font-semibold">Opt-Out:</strong>
                        <p className="mt-1">
                            Choose to opt out of specific data collection and usage, like analytics tracking.
                        </p>
                    </li>
                </ul>
            </div>

            {/* Section 7: Security Measures */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">7. Security Measures</h2>
                <p className="text-gray-700">
                    We implement various security measures to protect your personal information, including:
                </p>
                <ul className="list-disc list-inside space-y-4 mt-4 text-gray-700">
                    <li>
                        <strong className="font-semibold">Access Control:</strong>
                        <p className="mt-1">
                            Strictly controlling and monitoring employee access to user data.
                        </p>
                    </li>
                    <li>
                        <strong className="font-semibold">Audit Logging:</strong>
                        <p className="mt-1">
                            Implementing automated audit logs to track data queries.
                        </p>
                    </li>
                    <li>
                        <strong className="font-semibold">Employee Training:</strong>
                        <p className="mt-1">
                            Requiring annual privacy training for all employees.
                        </p>
                    </li>
                </ul>
            </div>
            {/* Section 8: Privacy Officer Oversight */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">8. Privacy Officer Oversight</h2>
                <p className="text-gray-700">
                    Our appointed Privacy Officer is responsible for ensuring privacy compliance. They manage our
                    policies and procedures, as well as conduct yearly privacy assessments with our engineering
                    team to identify and address potential security risks.
                </p>
            </div>

            {/* Section 9: Access Control and Monitoring */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">9. Access Control and Monitoring</h2>
                <p className="text-gray-700">
                    We value your privacy and ensure you have control over your data:
                </p>
                <ul className="list-disc list-inside space-y-4 mt-4 text-gray-700">
                    <li>
                        <strong className="font-semibold">User Access:</strong>
                        <p className="mt-1">
                            You have the ability to view and manage your conversations within your account.
                        </p>
                    </li>
                    <li>
                        <strong className="font-semibold">Employee Access:</strong>
                        <p className="mt-1">
                            Employees do not have access to your conversations, as they are stored locally on your device.
                        </p>
                    </li>
                </ul>
            </div>

            {/* Section 10: Employee Training and Awareness */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">10. Employee Training and Awareness</h2>
                <p className="text-gray-700">
                    All employees must complete an annual privacy awareness training program. We monitor
                    completion rates as an important key performance indicator (KPI).
                </p>
            </div>

            {/* Section 11: Data Minimization and Retention */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">11. Data Minimization and Retention</h2>
                <ul className="list-disc list-inside space-y-4 mt-4 text-gray-700">
                    <li>We only store data necessary for delivering our services and maintaining security.</li>
                    <li>Data retention periods are clearly defined, and users have the ability to manage the deletion of their data.</li>
                    <li>Upon request, we carry out comprehensive data cleaning, including removal from external vendor storage.</li>
                </ul>
            </div>

            {/* Section 12: Vendor Management */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">12. Vendor Management</h2>
                <ul className="list-disc list-inside space-y-4 mt-4 text-gray-700">
                    <li>We only work with vendors who are certified for security and compliance.</li>
                    <li>Each vendor undergoes a thorough validation process before we engage with them.</li>
                    <li>We keep a detailed tracker of all vendors, outlining their purpose, data storage practices, and associated risk levels.</li>
                </ul>
            </div>

            {/* Section 13: Privacy by Design */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">13. Privacy by Design</h2>
                <p className="text-gray-700">
                    We incorporate privacy considerations into the design and development of all new business
                    processes, products, and services. Data Protection Impact Assessments are performed
                    regularly as part of our development lifecycle.
                </p>
            </div>

            {/* Section 14: Incident Response */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">14. Incident Response</h2>
                <p className="text-gray-700">
                    We have detailed policies for managing privacy incidents, which are documented in our security
                    and compliance management platform.
                </p>
            </div>

            {/* Section 15: Governance Reviews */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">15. Governance Reviews</h2>
                <p className="text-gray-700">
                    We review our privacy governance policies annually or whenever there are significant regulatory
                    changes to ensure ongoing compliance.
                </p>
            </div>
            {/* Section 16: Key Performance Indicators (KPIs) */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">16. Key Performance Indicators (KPIs)</h2>
                <p className="text-gray-700">
                    We assess the effectiveness of our data governance using KPIs such as:
                </p>
                <ul className="list-disc list-inside space-y-4 mt-4 text-gray-700">
                    <li>Number of data breaches</li>
                    <li>Employee training compliance rates</li>
                    <li>Outcomes of internal and external audits</li>
                    <li>Frequency and type of data subject requests</li>
                    <li>Vendor compliance rates</li>
                </ul>
            </div>

            {/* Section 17: Reporting */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">17. Reporting</h2>
                <p className="text-gray-700">
                    The Privacy Officer provides regular reports to senior management on data governance and
                    privacy compliance, focusing on risk areas, compliance gaps, and initiatives for improvement.
                </p>
            </div>

            {/* Section 18: Continuous Improvement */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">18. Continuous Improvement</h2>
                <p className="text-gray-700">
                    We perform regular reviews and use insights from audits and annual training to continuously
                    improve our privacy practices.
                </p>
            </div>

            {/* Section 19: Regulatory Compliance */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">19. Regulatory Compliance</h2>
                <p className="text-gray-700">
                    This privacy policy is regularly reviewed and updated to ensure ongoing compliance with
                    international, national, and industry-specific privacy regulations.
                </p>
                <p className="text-gray-700 mt-4">
                    Whenever you delete a data source, all traces of the data are completely erased from
                    both your local desktop application and our servers.
                </p>
            </div>
            {/* Section: Gemini's API Data Policy */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">Gemini's API Data Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                    By default, Google keeps Gemini Apps activity data for up to 18 months. Although Google uses
                    this data to enhance its services, they clarify that individual prompts are not directly used for
                    training. However, human reviewers might examine prompts and responses to improve quality.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                    For users of Google Cloud (like us), prompts and tuning data are not used to train or improve
                    foundational models. For further details, you can refer to:
                </p>
                <ul className="list-disc list-inside space-y-3 mt-4 text-gray-700">
                    <li>
                        <a href="https://support.google.com/gemini/answer/13594961" target="_blank"
                            rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Gemini Apps Privacy Hub
                        </a>
                    </li>
                    <li>
                        <a href="https://ai.google.dev/gemini-api/terms" target="_blank"
                            rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Gemini API Additional Terms
                        </a>
                    </li>
                    <li>
                        <a href="https://ai.google.dev/gemini-api/terms" target="_blank"
                            rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Generative AI and Data Governance
                        </a>
                    </li>
                </ul>
            </div>

            {/* Section: Our Terms of Service */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">Our Terms of Service</h2>
                <p className="text-gray-700 leading-relaxed">
                    At SmartCard AI, we prioritize your trust and recognize the importance of safeguarding your
                    data privacy and security. Our terms are crafted to provide clarity on our procedures, the
                    measures we take to protect your data, and how we ensure a secure and safe service.
                    You can review our TOS.<a href="/terms" className="text-blue-600 hover:underline">Here</a>
                </p>
            </div>

            {/* Section: Contact Us */}
            <div className="text-gray-800 mt-8">
                <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact our Privacy Department at
                    <a href="mailto:sales@smartcardai.com" className="text-blue-600 hover:underline"> sales@smartcardai.com</a>.
                </p>
            </div>

        </div>

    );
};

export default DataPrivacy;
