import React, { useEffect } from 'react';
import { BarChart, LayoutList, BookOpen, Users, Clock, TrendingUp, DollarSign, Eye } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Whysmartcardai = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="home fixed h-[calc(100vh-120px)] md:h-[calc(100vh-72px)] bottom-0 overflow-y-auto w-full text-white">
      <section className="max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-green-500" >Why SmartCard AI?</h1>
        <p className="text-center text-lg mt-2 text-black" >Smarter Insights, Faster Decisions, and Cost Savings</p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          
          <div className="bg-gray-50 border border-gray-200 bg-opacity-20 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-medium text-green-500">For BI Developers & Data Analysts</h2>
            <ul className="mt-4 text-black space-y-3">
              <li><BarChart className="inline-block mr-2" /> Instant Visualizations : Auto-generate insightful charts & dashboards.</li>
              <li><LayoutList className="inline-block mr-2" /> No More Manual Formatting : AI-driven layouts save time.</li>
              <li><BookOpen className="inline-block mr-2" /> Smart Data Storytelling : Transform numbers into narratives.</li>
              <li><Users className="inline-block mr-2" /> Effortless Collaboration : Instantly share dashboards.</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 bg-opacity-20 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-medium text-green-500">For Data Analytics Managers</h2>
            <ul className="mt-4 text-black space-y-3">
              <li><Clock className="inline-block mr-2" /> Reduce Bottlenecks : Eliminate report generation delays.</li>
              <li><LayoutList className="inline-block mr-2" /> AI-Driven Efficiency : Automate data visualization tasks.</li>
              <li><Eye className="inline-block mr-2" /> Consistent Insights : Standardized reports, minimal errors.</li>
              <li><TrendingUp className="inline-block mr-2" /> Scale BI Operations : Handle more projects effortlessly.</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 bg-opacity-20 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-medium text-green-500">For CEOs & CFOs</h2>
            <ul className="mt-4 text-black space-y-3">
              <li><Clock className="inline-block mr-2" /> Save Time : Real-time key insights.</li>
              <li><DollarSign className="inline-block mr-2" /> Reduce Costs : Minimize BI development expenses.</li>
              <li><TrendingUp className="inline-block mr-2" /> Stay Competitive : Identify trends and opportunities.</li>
              <li><Eye className="inline-block mr-2" /> Intelligent Dashboards : No technical expertise needed.</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12"  >
          <h2 className="text-2xl font-bold text-emerald-500">Transform Your Data into a Competitive Advantage</h2>
          <p className="mt-2 text-gray-800">✅ Reduce manual effort. ✅ Increase efficiency. ✅ Make smarter decisions.</p>
          {/* <a href="#" className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-600">🚀 Experience AI-Driven BI Now!</a> */}
        </div>
      </section>
    </div>
  );
};

export default Whysmartcardai;
