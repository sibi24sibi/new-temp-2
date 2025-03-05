import { Filter } from "lucide-react";

export const faqData = [
  {
    id: "1",
    answer: `<p>For enterprise-scale SmartCard AI, selecting the right Gemini API model depends on performance, security, and compliance with data governance policies.</p>

            <h3>Recommended Gemini API Models:</h3>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li><strong>Gemini 1.5 Pro</strong> - Ideal for large-scale AI applications, balancing cost, accuracy, and efficiency.</li>
                <li><strong>Gemini 1.5 Ultra</strong> - Best for enterprises needing high-performance AI for real-time business intelligence, multilingual support, and complex data analytics.</li>
                <li><strong>Gemini 1.0 Pro</strong> - Suitable for structured data processing with moderate workloads.</li>
            </ul>

            <h3>Privacy, Security, and Data Governance:</h3>
            <ol style="list-style-type: decimal; padding-left: 20px;">
                <li><strong>Enterprise-Grade Security:</strong> Gemini models follow Google’s AI Principles and maintain robust security measures, including end-to-end encryption.</li>
                <li><strong>Data Governance:</strong> Supports compliance with GDPR, HIPAA, and SOC 2, ensuring sensitive business data is protected.</li>
                <li><strong>Custom AI Controls:</strong> Enterprises can set access restrictions, enforce data retention policies, and leverage AI model transparency for auditability.</li>
                <li><strong>Privacy-Centric AI:</strong> Google’s Gemini APIs do not retain or use enterprise data for training unless explicitly permitted.</li>
            </ol>

            <p>For enterprise use, <strong>Gemini 1.5 Ultra</strong> is best suited when security, compliance, and real-time business intelligence are priorities. However, <strong>Gemini 1.5 Pro</strong> offers a cost-effective alternative while maintaining high security and governance standards.</p>`,
  },
  {
    id: "2",
    answer: `<p>SmartCard AI ensures <strong>secure</strong> and <strong>privacy-focused</strong> chat history management in its local desktop application.</p>

            <h3><strong>Chat History Storage Mechanism</strong></h3>

            <h4><strong>1. Local Storage (On-Device Database)</strong></h4>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li><strong>Chat history is temporarily stored locally</strong> on your laptop.</li>
                <li>Ensures <strong>offline access</strong> during an active session without relying on cloud storage.</li>
            </ul>

            <h4><strong>2. Automatic Deletion</strong></h4>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li><strong>Chat history is deleted after every conversation</strong> to ensure privacy.</li>
                <li><strong>All stored chat data is erased upon user logout</strong>, preventing any residual data from being retained.</li>
            </ul>

            <p>This approach guarantees <strong>data confidentiality</strong>, ensuring that <strong>no chat records persist</strong> beyond an active session.</p>`,
  },
  {
    id: "3",
    answer: `<p>
            Yes, you can host your database (MySQL, MongoDB, or Snowflake) in the country of your
choice and seamlessly connect it to SmartCard AI. This ensures that your data remains within
your specified geographic location, helping you comply with data residency regulations such
as GDPR, HIPAA, or local government policies. SmartCard AI supports secure API
integrations, encrypted connections, and access controls, ensuring that your enterprise
data remains protected, private, and compliant with your organization's governance
standards.
            </p>`,
  },
  {
    id: "4",
    answer: `
        <h2 style="color: #333;">SmartCard AI Security & Privacy Measures</h2>
        <p>
            SmartCard AI is designed with enterprise-grade security and privacy measures to protect your data.
            Since it operates as a local desktop application, your data remains secure on your device, reducing exposure to external threats.
        </p>
        <p>To further enhance security, SmartCard AI provides:</p>
        <ol style="padding-left: 20px;">
            <li style="margin-bottom: 10px; line-height: 1.6;">
                <strong style="color: #007bff;">Secure Login & Authentication:</strong>
                Supports both Google Login and manual signup with authentication mechanisms to prevent unauthorized access.
            </li>
            <li style="margin-bottom: 10px; line-height: 1.6;">
                <strong style="color: #007bff;">Tokenization Strategies:</strong>
                Implements secure tokenization to protect sensitive data during transmission and storage.
            </li>
            <li style="margin-bottom: 10px; line-height: 1.6;">
                <strong style="color: #007bff;">Client-Controlled Database:</strong>
                Users can connect their own database (MySQL, MongoDB, Snowflake) with built-in security measures, ensuring complete data control.
            </li>
            <li style="margin-bottom: 10px; line-height: 1.6;">
                <strong style="color: #007bff;">Enterprise-Grade AI Governance:</strong>
                Clients can use Google Vertex AI to monitor, govern, and enhance data privacy while leveraging enterprise Gemini API models for secure AI processing.
            </li>
            <li style="margin-bottom: 10px; line-height: 1.6;">
                <strong style="color: #007bff;">Data Residency & Compliance:</strong>
                Ensures compliance with GDPR, HIPAA, and SOC 2 by allowing data to reside in user-specified locations.
            </li>
        </ol>
        <p>
            By combining local application security, advanced authentication, tokenization, and enterprise AI governance,
            SmartCard AI provides a highly secure and private AI-driven BI solution for businesses.
        </p>
   


    `,
  },
  {
    id: "5",
    answer: `
            <p>Yes, SmartCard AI is specifically designed for non-technical staff. It allows users to interact using natural language, eliminating the need for any coding or data science expertise.</p>
            <p>The tool automates data processing, insights generation, and analysis, making it an ideal solution for professionals who want to leverage AI-powered data analysis without technical barriers.</p>
            <p>Whether you're in business, marketing, HR, or any other non technical field, SmartCard AI
enables you to make data driven decisions effortlessly.</p>
            `,
  },
  {
    id: "6",
    answer: `
           <p>With SmartCard AI, creating a visual or widget is extremely fast. It takes only 5 seconds to
generate a visual or widget, making data visualization effortless and efficient.</p>
<p></p>Additionally, building a complete dashboard using SmartCard AI takes just 10 minutes. The
platform automates complex tasks, allowing users to focus on insights rather than manual
setup.</p>
<p>SmartCard AI ensures that even non-technical users can quickly create and customize data
driven visuals without any coding or data science expertise.</p>`,
  },
  {
    id: "7",
    answer: `
            <p>With SmartCard AI, building a dashboard is incredibly fast and efficient. It takes only <strong>10 minutes</strong> to create a fully functional dashboard. allowing users to visualize and analyze data
effortlessly.</p>
<p>The platform automates complex processes, eliminating the need for coding or data science
expertise. Whether you're a business user, analyst, or manager, you can quickly generate
insights and customize dashboards with minimal effort.</p>`,
  },
  {
    id: "8",
    answer: `
    <p> Migrating to SmartCard AI offers several key advantages for developers using traditional BI
tools like Power BI, Looker, Tableau, and Qlik Sense</p>
            <ul>
                <li><strong>Faster Dashboard & Widget Creation:</strong> Unlike traditional BI tools that require manual data modeling and configuration,
SmartCard AI generates visuals in just 5 seconds and dashboards in 10 minutes
using natural language.</li>
                <li><strong>No Need for Complex Queries or Scripting:</strong> Eliminates the need for DAX, LookML, Tableau Calculations, or SQL scripting.</li>
                <li><strong>Automated Data Processing & Insights:</strong> Reduces manual effort while providing AI-driven insights instantly.</li>
                <li><strong>AI-Powered Smart Visualizations:</strong> Automatically generates key business trends, KPIs, and recommendations.</li>
                <li><strong>Reduced Development Time:</strong> SmartCard AI does the heavy lifting, allowing teams to focus on decision-making.</li>
                <li><strong>Improved Collaboration & Accessibility:</strong> Non-technical users can create reports and dashboards independently.</li>
                <li><strong>Cost-Effective & Scalable:</strong> Eliminates licensing costs and overhead of maintaining multiple BI tools.</li>
            </ul>
          <p>  By migrating to SmartCard AI, Power BI, Looker, Tableau, and Qlik Sense developers can
accelerate workflow automation, reduce complexity, and focus on higher-value analytics
rather than manual BI configurations</p>
            `,
  },
  {
    id: "9",
    answer: `<p>
    Migrating from traditional BI tools like Power BI, Looker, Tableau, and Qlik Sense to
SmartCard AI delivers a high return on investment (ROI) by drastically reducing development
time, cutting costs, and increasing productivity.
    </p>
    <h2>📉 Cost Savings</h2>
      <ul style="margin-left: 20px;">
        <li>✅ <strong>Eliminate Expensive Licensing Fees :</strong> No more high cost subscriptions for legacy BI tools.</li>
      <li>
       ✅ <strong>
       Reduce Infrastructure Costs :
       </strong> No need for costly server maintenance
      </li>
      <li>
      ✅<strong> Shrink Data Team Size : </strong>Reduce a 6 member BI team to just 1-2 high capacity analysts,
cutting salary costs while increasing output.
      </li>
    </ul>



    <h2 style="color: #2c3e50;">
        <span style="color: #ff3366;">🚀</span> Faster Time to Insights
    </h2>

    <table style="width: 100%; border-collapse: collapse; text-align: left; border: 1px solid #ddd;">
        <tr style="background-color: #f2f2f2;">
            <th style="padding: 10px; border: 1px solid #ddd;">Task</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Legacy BI Tools (Power BI, Tableau, Looker, Qlik)</th>
            <th style="padding: 10px; border: 1px solid #ddd;">SmartCard AI</th>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Dashboard Ideation</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>1 week</strong> (Manual brainstorming & planning)</td>
            <td style="padding: 10px; border: 1px solid #ddd;">Live ideation using AI (Instant)</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Building a Visual/Widget</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>30 minutes to 2 hours</strong> (Manual setup)</td>
            <td style="padding: 10px; border: 1px solid #ddd;">5 seconds</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Building a Dashboard</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>1-2 weeks</strong> (Complex manual configurations)</td>
            <td style="padding: 10px; border: 1px solid #ddd;">10 minutes</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Dashboards Delivered Per Hour</td>
            <td style="padding: 10px; border: 1px solid #ddd;">0-1 dashboards</td>
            <td style="padding: 10px; border: 1px solid #ddd;">6+ dashboards</td>
        </tr>
    </table>

    <h2 style="color: #2c3e50;">💼 Increased Productivity</h2>
    <ul style="margin-left: 20px;">
        <li>✅ <strong>No SQL, DAX, or LookML Required:</strong> Saves time spent on complex queries.</li>
        <li>✅ <strong>Empowers Non-Technical Users:</strong> No dependency on IT or BI teams for dashboard creation.</li>
        <li>✅ <strong>Automated Data Processing:</strong> AI-driven automation reduces manual effort.</li>
    </ul>
    <p><strong>By replacing 6 BI developers with 1-2 SmartCard AI analysts</strong>, businesses can deliver more dashboards per hour, significantly increasing analytics output.</p>

    <h2 style="color: #2c3e50;">📊 Enhanced Business Insights</h2>
    <ul style="margin-left: 20px;">
        <li>✅ <strong>AI-Driven Trend Detection & Recommendations:</strong> No need for manual analysis.</li>
        <li>✅ <strong>Real-Time Insights & Collaboration:</strong> Faster data-driven decisions.</li>
        <li>✅ <strong>No Waiting for Development Cycles:</strong> Instant dashboard creation eliminates long iterations.</li>
    </ul>

    <h2 style="color: #2c3e50;">🔢 ROI Calculation Summary</h2>
    <p>By switching to SmartCard AI, businesses can expect:</p>
    <ul style="margin-left: 20px;">
        <li>✅ <strong>80-90% reduction</strong> in dashboard development time (from 2 weeks to 10 minutes).</li>
        <li>✅ <strong>5-10x more dashboards</strong> delivered per hour (scaling insights rapidly).</li>
        <li>✅ <strong>50-70% cost savings</strong> by reducing BI team size and eliminating legacy tool costs.</li>
    </ul>

    <h2 style="color: #2c3e50;">📈 SmartCard AI: Maximizing Efficiency</h2>
    <p>SmartCard AI enables businesses to scale analytics faster, cut costs, and maximize efficiency, delivering an industry-leading ROI. 🚀</p>


    `

  },
  {
    id: "10",
    answer: `

    <h2 style="color: #2c3e50;">󰞴 Business Leaders & Decision Makers</h2>
    <ul style="margin-left: 20px;">
        <li>✅ <strong>CEOs, Directors, and Managers:</strong> Access real-time insights without waiting for reports.</li>
        <li>✅ <strong>Head of Analytics & Directors of Analytics:</strong> Scale data-driven decision-making with AI-powered automation.</li>
        <li>✅ <strong>Analytics Managers:</strong> Reduce dependency on BI teams while delivering faster insights.</li>
    </ul>

    <h2 style="color: #2c3e50;">📊 Data & BI Teams</h2>
    <ul style="margin-left: 20px;">
        <li>✅ <strong>Data Analysts & Business Intelligence Professionals:</strong> Eliminate SQL, DAX, and LookML scripting with natural language queries.</li>
        <li>✅ <strong>Head of Analytics & Analytics Managers:</strong> Automate dashboards and free up resources for high-value strategic analysis.</li>
        <li>✅ <strong>BI Developers:</strong> Deliver insights 5-10x faster without manually configuring reports.</li>
    </ul>

    <h2 style="color: #2c3e50;">📈 Finance, Sales & Marketing Teams</h2>
    <ul style="margin-left: 20px;">
        <li>✅ <strong>Finance Managers & CFOs:</strong> Instantly analyze revenue, costs, and profitability metrics.</li>
        <li>✅ <strong>Sales & Marketing Leaders:</strong> Get AI-driven customer insights, sales trends, and campaign performance metrics in seconds.</li>
        <li>✅ <strong>Operations & Supply Chain Teams:</strong> Optimize logistics and resource allocation with real-time AI-powered insights.</li>
    </ul>

    <h2 style="color: #2c3e50;">🏢 Small & Mid-Sized Businesses (SMBs)</h2>
    <ul style="margin-left: 20px;">
        <li>✅ <strong>Eliminate the need for a dedicated BI team:</strong> SmartCard AI replaces costly legacy BI tools.</li>
        <li>✅ <strong>Save on Power BI, Tableau, and Looker licenses</strong> while scaling analytics.</li>
        <li>✅ <strong>Enable all teams to access data</strong> without requiring technical expertise.</li>
    </ul>

    <h2 style="color: #2c3e50;">🛠 IT & Operations Leaders</h2>
    <ul style="margin-left: 20px;">
        <li>✅ <strong>Directors & Heads of IT/Operations:</strong> Monitor system performance & key operational KPIs effortlessly.</li>
        <li>✅ <strong>IT Managers:</strong> Identify inefficiencies & automate data transformation with AI-driven dashboards.</li>
    </ul>

    <h2 style="color: #2c3e50;">🎯 Why SmartCard AI?</h2>
    <ul style="margin-left: 20px;">
        <li>✅ <strong>5 Second Visuals & 10 Minute Dashboards:</strong> No more waiting weeks for BI reports.</li>
        <li>✅ <strong>No Technical Skills Required:</strong> Empower non-technical users with natural language queries.</li>
        <li>✅ <strong>AI-Powered Automation:</strong> Scale data analytics while reducing costs and manual work.</li>
    </ul>

    <p style="font-size: 18px; font-weight: bold; color: #2980b9;">
        🔹 Ideal for enterprises, mid-sized businesses, and analytics leaders looking to replace traditional BI tools like Power BI, Looker, Tableau, and Qlik Sense with a faster, AI-driven alternative. 🚀
    </p>



    `
  },
  {
    id: "11",
    answer: `
          
    <p>Sharing dashboards in SmartCard AI is simple and quick. Follow these steps to share your
dashboards with your management team or external stakeholders</p>

          <section style="padding: 20px;">
            <h2 style="color: #007BFF;">📌 Steps to Share a Dashboard:</h2>
            <ul style="list-style: none; padding: 0;">
              <li style="margin-bottom: 10px;"><strong>✅ Login to SmartCard AI Cloud Console</strong>
                <ul style="padding-left: 20px;">
                  <li>Go to the SmartCard AI platform and sign in to your account.</li>
                </ul>
              </li>
              <li style="margin-bottom: 10px;"><strong>✅ Access Your Dashboards</strong>
                <ul style="padding-left: 20px;">
                  <li>Once logged in, you will see a list of dashboards you have created.</li>
                </ul>
              </li>
              <li style="margin-bottom: 10px;"><strong>✅ Select the Dashboard to Share</strong>
                <ul style="padding-left: 20px;">
                  <li>Click on the dashboard you want to share.</li>
                </ul>
              </li>
              <li style="margin-bottom: 10px;"><strong>✅ Click the Share Button</strong>
                <ul style="padding-left: 20px;">
                  <li>Inside the dashboard, locate the "Share" button.</li>
                </ul>
              </li>
              <li style="margin-bottom: 10px;"><strong>✅ Copy the Shareable Link</strong>
                <ul style="padding-left: 20px;">
                  <li>Click on the share button to generate a shareable link for your dashboard.</li>
                  <li>Copy the link.</li>
                </ul>
              </li>
              <li style="margin-bottom: 10px;"><strong>✅ Send the Link to Your Team</strong>
                <ul style="padding-left: 20px;">
                  <li>Share the link with your management team, executives, or external stakeholders via email, chat, or any collaboration tool.</li>
                  <li>Your team can view the dashboard instantly without requiring additional configurations.</li>
                </ul>
              </li>
            </ul>
          </section>

          <section style="padding: 20px;">
            <h2 style="color: #007BFF;">Why Share Dashboards in SmartCard AI?</h2>
            <ul style="list-style: none; padding: 0; margin-bottom: 20px;">
              <li><strong>✅ Instant Collaboration:</strong> No need to export reports; teams can access real-time dashboards.</li>
              <li><strong>✅ No Technical Setup Required:</strong> Anyone with the link can view the dashboard.</li>
              <li><strong>✅ Seamless Sharing:</strong> Easily distribute insights across your organization.</li>
            </ul>
            <p>This ensures that management teams can access up-to-date analytics anytime, anywhere, enabling faster decision making. 🚀</p>
          </section>

          <section style="padding: 20px;">
            <h2 style="color: #007BFF;">How Can Sharing Dashboards Save Time in Daily Scrum Meetings?</h2>
            <p>Sharing dashboards in SmartCard AI can significantly reduce the time spent in daily scrum meetings by providing real-time insights and eliminating the need for manual reporting. Here's how:</p>
            <ul style="list-style: none; padding: 0;">
              <li style="margin-bottom: 10px;"><strong>Instant Access to Real Time Metrics</strong>
                <ul style="padding-left: 20px;">
                  <li>Team members and managers no longer need to compile reports manually before meetings.</li>
                  <li>Everyone can access the latest KPIs, sprint progress, and blockers in a single shared dashboard.</li>
                </ul>
              </li>
              <li style="margin-bottom: 10px;"><strong>Eliminates Repetitive Status Updates</strong>
                <ul style="padding-left: 20px;">
                  <li>Instead of each team member explaining their progress verbally, the dashboard provides a visual summary.</li>
                  <li>Managers and stakeholders can quickly identify delays and issues without long discussions.</li>
                </ul>
              </li>
              <li style="margin-bottom: 10px;"><strong>Faster Decision Making</strong>
                <ul style="padding-left: 20px;">
                  <li>With live data available, teams can immediately address blockers and adjust priorities.</li>
                  <li>Reduces the time spent discussing outdated reports that might not reflect real-time progress.</li>
                </ul>
              </li>
              <li style="margin-bottom: 10px;"><strong>Enhances Transparency and Accountability</strong>
                <ul style="padding-left: 20px;">
                  <li>Dashboards provide a clear view of completed tasks, pending work, and velocity trends.</li>
                  <li>Team members can self-monitor progress without waiting for updates from others.</li>
                </ul>
              </li>
              <li style="margin-bottom: 10px;"><strong>Saves Time on Post-Meeting Documentation</strong>
                <ul style="padding-left: 20px;">
                  <li>Instead of writing long meeting summaries, the dashboard acts as a central source of truth.</li>
                  <li>Stakeholders can review progress at any time without requesting additional reports.</li>
                </ul>
              </li>
            </ul>
          </section>

          <section style="padding: 20px;">
            <h2 style="color: #007BFF;">⏳ Time Saved with SmartCard AI</h2>
            <p><strong>📌 Traditional Scrum Meetings:</strong></p>
            <ul style="list-style: none; padding-left: 20px;">
              <li>30–45 minutes spent discussing progress and roadblocks manually.</li>
              <li>Additional 15–30 minutes spent compiling reports before the meeting.</li>
            </ul>
            <p><strong>📌 With SmartCard AI Dashboards:</strong></p>
            <ul style="list-style: none; padding-left: 20px;">
              <li>Meetings can be reduced to 10–15 minutes with direct access to real-time data.</li>
              <li>No manual reporting required: dashboards update automatically.</li>
            </ul>
          </section>

          <section style="padding: 20px;">
            <p style="font-size: 18px; color: #2ecc71; font-weight: bold;">🎯 Conclusion: By sharing SmartCard AI dashboards, scrum meetings become shorter, more focused, and data-driven, helping teams spend less time talking about work and more time getting work done!</p>
          </section>
    `
  },
  {
    id: "12",
    answer: `
 

    <section style="padding: 20px;">
        <p>SmartCard AI leverages Vision-Language Models (VLMs) to extract insights from documents, images, and videos and automatically generate dashboards. Unlike traditional OCR (Optical Character Recognition), which only extracts text, SmartCard AI’s VLM understands context, relationships, and data structures, making it a powerful tool for business intelligence.</p>
    </section>

    <section style="padding: 20px;">
        <h2 style="color: #007BFF;">📌 Steps to Use Vision-Language Models in SmartCard AI</h2>
        <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 10px;"><strong>✅ Upload the Source (Documents, Images, or Videos)</strong>
                <ul style="padding-left: 20px;">
                    <li>Log in to SmartCard AI Cloud Console.</li>
                    <li>Choose the option to upload a document, image, or video.</li>
                    <li><strong>Supported sources:</strong>
                        <ul style="padding-left: 20px;">
                            <li>📄 Documents (PDF, Word, Excel, scanned reports, invoices)</li>
                            <li>🖼 Images (charts, graphs, infographics, handwritten notes)</li>
                            <li>🎥 Videos (conference meetings, security footage, training sessions)</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </section>

    <section style="padding: 20px;">
        <h2 style="color: #007BFF;">AI Powered Data Extraction (Beyond OCR)</h2>
        <p>Unlike traditional OCR, which only extracts raw text, SmartCard AI’s Vision Language Model (VLM) performs deeper analysis:</p>
        <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 10px;">✅ <strong>Understands tables, charts, and figures:</strong> It recognizes data relationships, not just text.</li>
            <li style="margin-bottom: 10px;">✅ <strong>Captures contextual meaning:</strong> Identifies trends, key insights, and business intelligence.</li>
            <li style="margin-bottom: 10px;">✅ <strong>Extracts and interprets handwritten notes, symbols, and scanned forms.</strong></li>
            <li style="margin-bottom: 10px;">✅ <strong>Speech-to-Text for Videos:</strong> Converts audio into structured data for dashboards.</li>
            <li style="margin-bottom: 10px;">✅ <strong>Entity Recognition:</strong> Identifies names, dates, metrics, and trends automatically.</li>
        </ul>
    </section>

    <section style="padding: 20px;">
        <h2 style="color: #007BFF;">AI Transforms Data into Dashboards</h2>
        <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 10px;">✅ The extracted data is automatically structured into tables, KPIs, and visual elements.</li>
            <li style="margin-bottom: 10px;">✅ SmartCard AI applies natural language processing (NLP) to understand key insights and trends.</li>
            <li style="margin-bottom: 10px;">✅ AI suggests visualizations
                <ul style="padding-left: 20px;">
                    <li>📊 Bar charts, line graphs, pie charts for numerical data.</li>
                    <li>📈 Trend analysis for forecasting.</li>
                    <li>🏆 KPI widgets to track performance metrics.</li>
                </ul>
            </li>
        </ul>
    </section>

    <section style="padding: 20px;">
        <h2 style="color: #007BFF;">Customize & Share the Dashboard</h2>
        <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 10px;">✅ Users can refine, filter, and edit the generated dashboard.</li>
            <li style="margin-bottom: 10px;">✅ Dashboards can be shared instantly with teams via a shareable link.</li>
            <li style="margin-bottom: 10px;">✅ Supports real-time updates when new data is uploaded.</li>
        </ul>
    </section>

    <section style="padding: 20px;">
        <h2 style="color: #007BFF;">What Makes SmartCard AI Different from Traditional OCR?</h2>


<table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;">
    <tr style="background-color: #f2f2f2;">
        <th style="border: 1px solid #ddd; padding: 10px; text-align: left;">Feature</th>
        <th style="border: 1px solid #ddd; padding: 10px; text-align: left;">SmartCard AI (VLM)</th>
        <th style="border: 1px solid #ddd; padding: 10px; text-align: left;">Traditional OCR</th>
    </tr>
    <tr>
        <td style="border: 1px solid #ddd; padding: 10px;">Extracts only text</td>
        <td style="border: 1px solid #ddd; padding: 10px;">✅ Yes, but also understands structure & context</td>
        <td style="border: 1px solid #ddd; padding: 10px;">✅ Yes, but only extracts raw text</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 10px;">Understands charts & tables</td>
        <td style="border: 1px solid #ddd; padding: 10px;">✅ Automatically detects, extracts, and structures them into dashboards</td>
        <td style="border: 1px solid #ddd; padding: 10px; color: red;">❌ Requires manual intervention</td>
    </tr>
    <tr>
        <td style="border: 1px solid #ddd; padding: 10px;">Captures contextual meaning</td>
        <td style="border: 1px solid #ddd; padding: 10px;">✅ Yes, it understands relationships between data points</td>
        <td style="border: 1px solid #ddd; padding: 10px; color: red;">❌ No, extracts text without meaning</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 10px;">Works with videos & speech</td>
        <td style="border: 1px solid #ddd; padding: 10px;">✅ Converts spoken words into dashboards</td>
        <td style="border: 1px solid #ddd; padding: 10px; color: red;">❌ No support for audio/video</td>
    </tr>
    <tr>
        <td style="border: 1px solid #ddd; padding: 10px;">AI-driven insights</td>
        <td style="border: 1px solid #ddd; padding: 10px;">✅ Auto-generates charts, KPIs, and trends</td>
        <td style="border: 1px solid #ddd; padding: 10px; color: red;">❌ Only extracts text, no insights</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 10px;">Live Ideation</td>
        <td style="border: 1px solid #ddd; padding: 10px;">✅ Dashboards in <strong>10 minutes</strong>, visuals in <strong>5 seconds</strong></td>
        <td style="border: 1px solid #ddd; padding: 10px; color: red;">❌ Traditional BI tools take <strong>weeks</strong></td>
    </tr>
</table>


        <p>🎯 <strong>Why Is SmartCard AI Better than OCR?</strong></p>
        <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 10px;">✅ <strong>No Manual Data Entry:</strong> AI extracts data directly from images, documents, and videos.</li>
            <li style="margin-bottom: 10px;">✅ <strong>Instant Dashboards:</strong> Generates visuals in 5 seconds and full dashboards in 10 minutes.</li>
            <li style="margin-bottom: 10px;">✅ <strong>Real-Time Insights:</strong> Automates business intelligence from any data source.</li>
            <li style="margin-bottom: 10px;">✅ <strong>Ideal for Non-Technical Users:</strong> No need for coding or data science expertise.</li>
            <li style="margin-bottom: 10px;">✅ <strong>Shrinks Data Teams:</strong> A 6-member data team can be reduced to 1-2 experts with higher output.</li>
            <li style="margin-bottom: 10px;">✅ <strong>Faster ROI:</strong> Legacy tools take weeks; SmartCard AI accelerates dashboard creation by 10x 🚀</li>
        </ul>
    </section>

    <section style="padding: 20px;">
        <h2 style="color: #007BFF;">Example Use Cases</h2>
        <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 10px;">🔹 <strong>Finance Teams:</strong> Extracts financial reports from PDFs and auto generates revenue dashboards.</li>
            <li style="margin-bottom: 10px;">🔹 <strong>Retail & E-commerce:</strong> Scans receipts and inventory images to create sales analytics.</li>
            <li style="margin-bottom: 10px;">🔹 <strong>Healthcare:</strong> Analyzes medical reports and patient trends from scanned documents.</li>
            <li style="margin-bottom: 10px;">🔹 <strong>Manufacturing:</strong> Uses CCTV footage analysis for production insights.</li>
            <li style="margin-bottom: 10px;">🔹 <strong>HR & Compliance:</strong> Processes employee records and policy documents for workforce analytics.</li>
        </ul>
    </section>

    <section style="padding: 20px;">
        <p>With SmartCard AI, you can effortlessly generate dashboards from any visual data source accelerating decision making and business intelligence beyond OCR capabilities. 🚀</p>
    </section>

    `
  },
  {

    id: "13",
    answer: `
    <h2 style="color: #2c3e50;">Admins Can Easily Manage Orders, Invoices, and Billing Details</h2>
    <p>Through the <strong>SmartCard AI</strong> platform, admins can efficiently handle billing-related tasks. Here’s how:</p>

    <h3 style="color: #27ae60;">Go to the Pricing Page</h3>
    <ul>
        <li>✅ Navigate to the <strong>SmartCard AI Pricing Page</strong> to view available plans.</li>
        <li>✅ Select a suitable plan or upgrade your current subscription.</li>
    </ul>

    <h3 style="color: #27ae60;">Log in to Your Admin Account</h3>
    <ul>
        <li>✅ Click on <strong>Login</strong> and enter your Admin credentials.</li>
        <li>✅ Access the <strong>Admin Dashboard</strong>, where you can manage billing and payments.</li>
    </ul>

    <h3 style="color: #27ae60;">Manage Orders & Invoices</h3>
    <ul>
        <li>✅ <strong>View & Track Orders:</strong> See past purchases and active subscriptions.</li>
        <li>✅ <strong>Download Invoices:</strong> Access and download invoices for accounting purposes.</li>
        <li>✅ <strong>Update Payment Methods:</strong> Add or update credit cards or other payment methods.</li>
    </ul>

    <h3 style="color: #27ae60;">Modify Subscription & Billing Details</h3>
    <ul>
        <li>✅ Upgrade, downgrade, or cancel subscriptions as needed.</li>
        <li>✅ Set up auto-renewal or manage manual payments.</li>
        <li>✅ Update billing information.</li>
    </ul>

    <p>By following these steps, admins can seamlessly manage all billing aspects within <strong>SmartCard AI</strong>. 🚀</p>

`
  },
  {
    id: "14",
    answer: `

    <h2 style="color: #2c3e50;">SmartCard AI: A Scalable Solution for All Businesses</h2>
    <p>Yes, <strong>SmartCard AI</strong> is highly scalable, designed to support businesses of all sizes, from startups to large enterprises.</p>

    <h3 style="color: #27ae60;">What Makes SmartCard AI Scalable?</h3>
    <ul>
        <li>✅ <strong>Cloud-Based Architecture:</strong> Supports unlimited users and dashboards without performance slowdowns.</li>
        <li>✅ <strong>Handles Large Data Volumes:</strong> Processes millions of records in real time with AI-powered automation.</li>
        <li>✅ <strong>Supports Multiple Integrations:</strong> Seamlessly integrates with databases, Google Spreadsheets, and various other data sources.</li>
        <li>✅ <strong>Instant Dashboard Generation:</strong> Visuals in <strong>5 seconds</strong>, dashboards in <strong>10 minutes</strong>, unlike legacy tools that take weeks.</li>
        <li>✅ <strong>Auto-Optimization:</strong> Dynamically allocates computing resources for high performance, even under heavy workloads.</li>
        <li>✅ <strong>Multi-Tenant Support:</strong> Enables enterprises to manage multiple teams and clients under one system.</li>
    </ul>

    <h3 style="color: #27ae60;">🚀 How Does SmartCard AI Scale Across Industries?</h3>
    <ul>
        <li>🔹 <strong>Startups:</strong> Quickly generate dashboards with minimal resources.</li>
        <li>🔹 <strong>SMBs:</strong> Automate business intelligence without hiring a large data team.</li>
        <li>🔹 <strong>Enterprises:</strong> Manage global data analytics with AI-driven efficiency.</li>
        <li>🔹 <strong>Government & Healthcare:</strong> Handle large-scale data securely with compliance support.</li>
    </ul>

    <p>Whether your business grows from <strong>10 to 10,000 users</strong>, <strong>SmartCard AI</strong> ensures scalability, speed, and reliability without additional overhead. 🚀</p>


`

  },
  {

    id: "15",
    answer: `
 
    <p><strong>SmartCard AI</strong> is a versatile AI-powered analytics tool that automates data transformation, visualization, and dashboard creation in seconds. It is ideal for businesses that require real-time insights without coding or data science expertise.</p>

    <h3 style="color: #27ae60;">Key Industries That Benefit from SmartCard AI</h3>

    <h4 style="color: #2c3e50;">💰 Financial Services & Banking</h4>
    <ul>
        <li>✅ <strong>Risk Analysis & Fraud Detection:</strong> Identify anomalies using AI-powered analytics.</li>
        <li>✅ <strong>Automated Financial Reporting:</strong> Generate real-time financial insights.</li>
        <li>✅ <strong>Customer Segmentation:</strong> Analyze customer data for better decision-making.</li>
    </ul>

    <h4 style="color: #2c3e50;">🏥 Healthcare & Life Sciences</h4>
    <ul>
        <li>✅ <strong>Patient Analytics:</strong> Visualize and monitor patient trends and treatment effectiveness.</li>
        <li>✅ <strong>Medical Imaging & Diagnostics:</strong> Apply Vision Language Models for image-based analysis.</li>
        <li>✅ <strong>Healthcare Compliance & Reporting:</strong> Generate reports for regulatory compliance.</li>
    </ul>

    <h4 style="color: #2c3e50;">🛒 Retail & E-Commerce</h4>
    <ul>
        <li>✅ <strong>Customer Behavior Insights:</strong> Track shopping trends and predict demand.</li>
        <li>✅ <strong>Inventory Optimization:</strong> Automate stock analysis and reduce waste.</li>
        <li>✅ <strong>Sales Performance Monitoring:</strong> Generate real-time sales dashboards.</li>
    </ul>

    <h4 style="color: #2c3e50;">🏭 Manufacturing & Supply Chain</h4>
    <ul>
        <li>✅ <strong>Predictive Maintenance:</strong> Reduce downtime with AI-powered monitoring.</li>
        <li>✅ <strong>Supply Chain Optimization:</strong> Identify bottlenecks and streamline logistics.</li>
        <li>✅ <strong>Production Analytics:</strong> Improve efficiency with real-time operational insights.</li>
    </ul>

    <h4 style="color: #2c3e50;">📊 Marketing & Advertising</h4>
    <ul>
        <li>✅ <strong>Campaign Performance Tracking:</strong> Measure engagement across digital channels.</li>
        <li>✅ <strong>Customer Segmentation:</strong> Target audiences using AI-driven insights.</li>
        <li>✅ <strong>Competitor Analysis:</strong> Track trends and adjust strategies in real-time.</li>
    </ul>

    <h4 style="color: #2c3e50;">🏛️ Government & Public Sector</h4>
    <ul>
        <li>✅ <strong>Smart Governance & Policy Analysis:</strong> Use AI-driven insights for policy-making.</li>
        <li>✅ <strong>Crime & Fraud Prevention:</strong> Detect fraudulent activities using AI models.</li>
        <li>✅ <strong>Citizen Engagement Analytics:</strong> Improve public services based on data insights.</li>
    </ul>

    <h4 style="color: #2c3e50;">⚡ Energy & Utilities</h4>
    <ul>
        <li>✅ <strong>Power Consumption Monitoring:</strong> Analyze energy usage patterns.</li>
        <li>✅ <strong>Grid Performance Optimization:</strong> Identify inefficiencies in energy distribution.</li>
        <li>✅ <strong>Sustainability Reporting:</strong> Track carbon footprint and compliance.</li>
    </ul>

    <h4 style="color: #2c3e50;">🎓 Education & EdTech</h4>
    <ul>
        <li>✅ <strong>Student Performance Analytics:</strong> Identify learning gaps and improve outcomes.</li>
        <li>✅ <strong>Course Recommendation Systems:</strong> Use AI-driven insights for personalized learning.</li>
        <li>✅ <strong>Operational Efficiency:</strong> Optimize resource allocation and budget planning.</li>
    </ul>

    <h4 style="color: #2c3e50;">🚚 Logistics & Transportation</h4>
    <ul>
        <li>✅ <strong>Fleet Management & Route Optimization:</strong> Improve delivery efficiency.</li>
        <li>✅ <strong>Real-Time Shipment Tracking:</strong> Monitor logistics in real-time.</li>
        <li>✅ <strong>Warehouse Analytics:</strong> Optimize storage and inventory management.</li>
    </ul>

    <h4 style="color: #2c3e50;">🎬 Media & Entertainment</h4>
    <ul>
        <li>✅ <strong>Content Performance Analytics:</strong> Measure engagement across platforms.</li>
        <li>✅ <strong>Audience Sentiment Analysis:</strong> Understand viewer preferences using AI.</li>
        <li>✅ <strong>Advertising Revenue Optimization:</strong> Track ad performance and ROI.</li>
    </ul>

    <h3 style="color: #27ae60;">Why SmartCard AI?</h3>
    <ul>
        <li>✅ <strong>Faster Dashboard Creation:</strong> 5 seconds per visual, 10 minutes per dashboard.</li>
        <li>✅ <strong>No Coding Required:</strong> Designed for non-technical teams.</li>
        <li>✅ <strong>AI-Powered Insights:</strong> Automates analytics with natural language queries.</li>
        <li>✅ <strong>Scalable & Secure:</strong> Works for small businesses and large enterprises.</li>
    </ul>

    <p>No matter the industry, <strong>SmartCard AI</strong> simplifies data analysis, making decision-making faster and more efficient. 🚀</p>



    `
  },
  {

    id: "16",
    answer: `

    <p><strong>No, SmartCard AI</strong> is designed for ease of use, even for non-technical users. Unlike traditional BI tools that require coding or data science expertise, <strong>SmartCard AI</strong> enables natural language-based analytics with minimal learning effort.</p>

    <h3 style="color: #27ae60;">Why SmartCard AI Has a Minimal Learning Curve</h3>
    <ul>
        <li>✅ <strong>No Coding Required:</strong> Simply ask questions in natural language to generate insights.</li>
        <li>✅ <strong>Instant Visuals & Dashboards:</strong> 5 seconds per visual, 10 minutes per dashboard (compared to weeks in legacy tools).</li>
        <li>✅ <strong>No Data Science Expertise Needed:</strong> AI does the heavy lifting, eliminating complex data modeling.</li>
        <li>✅ <strong>Drag and Drop Simplicity:</strong> Users can interact with data visually without technical configurations.</li>
        <li>✅ <strong>Familiar Cloud-Based Interface:</strong> Works like modern SaaS applications with intuitive navigation.</li>
        <li>✅ <strong>Automated Data Processing:</strong> SmartCard AI cleans, transforms, and visualizes data instantly.</li>
        <li>✅ <strong>Live Ideation Support:</strong> Unlike legacy tools, SmartCard AI allows real-time dashboard creation without waiting weeks for ideation and development.</li>
    </ul>

    <h3 style="color: #27ae60;">Who Can Use SmartCard AI Without Training?</h3>
    <ul>
        <li>● <strong>Business Analysts & Decision Makers:</strong> Get insights without BI developers.</li>
        <li>● <strong>Marketing & Sales Teams:</strong> Analyze campaign performance in real time.</li>
        <li>● <strong>Finance & Operations:</strong> Automate reporting without Excel formulas.</li>
        <li>● <strong>Analytics Managers, Directors, & Heads of Analytics:</strong> Oversee data-driven strategies with ease.</li>
    </ul>

    <h3 style="color: #27ae60;">🚀 How Long Does It Take to Get Started?</h3>
    <ul>
        <li>🕒 <strong>Less than 10 minutes:</strong> Users can start building dashboards instantly after login.</li>
        <li>📖 <strong>No lengthy training programs:</strong> Unlike Power BI, Tableau, or Looker, which require weeks of training.</li>
    </ul>

    <h3 style="color: #27ae60;">Final Verdict</h3>
    <ul>
        <li>🔹 <strong>No steep learning curve:</strong> Just type, click, and analyze.</li>
        <li>🔹 <strong>Designed for speed and simplicity,</strong> making dashboards accessible to everyone.</li>
        <li>🔹 <strong>Reduces dependence on large data teams,</strong> allowing a 6-member team to shrink to 1 or 2 with higher efficiency.</li>
    </ul>

    <p><strong>SmartCard AI</strong> makes data analytics as simple as having a conversation. 🚀</p>


    `
  },
  {

  }
];

export const sections = [
  {
    id: "1",
    icon: () => <Filter />,
    label: "Which Gemini model should I use for enterprise?",
    path: "/faq/1",
  },
  {
    id: "2",
    icon: () => <Filter />,
    label: "Where would the chat history be stored?",
    path: "/faq/2",
  },
  {
    id: "3",
    icon: () => <Filter />,
    label:
      "Can I host my database in a specific country and then connect it to SmartCard AI ?",
    path: "/faq/3",
  },
  {
    id: "4",
    icon: () => <Filter />,
    label: "How to enhance the privacy and security of my data ?",
    path: "/faq/4",
  },
  {
    id: "5",
    icon: () => <Filter />,
    label: "Is this tool best for non-technical staff?",
    path: "/faq/5",
  },
  {
    id: "6",
    icon: () => <Filter />,
    label: "How long does it take to build a visual or widget?",
    path: "/faq/6",
  },
  {
    id: "7",
    icon: () => <Filter />,
    label: "How much time does it take to build a dashboard?",
    path: "/faq/7",
  },

  {
    id: "8",
    icon: () => <Filter />,
    label:
      "How can Power BI, Looker, Tableau, Qlik Sense developers benefit from migrating to SmartCard AI?",
    path: "/faq/8",
  },

  {
    id: "9",
    icon: () => <Filter />,
    label: "What is the ROI after migration from legacy tools?",
    path: "/faq/9",
  },
  {
    id: "10",
    icon: () => <Filter />,
    label: "Who are the ideal users of SmartCard AI ?",
    path: "/faq/10",
  },
  {
    id: "11",
    icon: () => <Filter />,
    label: "How do I share a dashboard to my management team ?",
    path: "/faq/11",
  },
  {
    id: "12",
    icon: () => <Filter />,
    label: "How can I apply a vision language model on documents , images and videos using SmartCard AI?",
    path: "/faq/12",
  },
  {

    id: "13",
    icon: () => <Filter />,
    label: "How can the admin manage billing ?",
    path: "/faq/13",

  },
  {

    id: "14",
    icon: () => <Filter />,
    label: "Is SmartCard AI scalable ?",
    path: "/faq/14",
  }
  ,
  {
    id: "15",
    icon: () => <Filter />,
    label: "For which industries can I use SmartCard AI ?",
    path: "/faq/15",
  },
  {
    id: "16",
    icon: () => <Filter />,
    label: "Is there a steep learning curve for SmartCard AI ?",
    path: "/faq/16",
  }

];
