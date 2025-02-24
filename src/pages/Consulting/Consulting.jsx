import React from 'react';
import { Rocket, LineChart, Timer, Sparkles } from 'lucide-react';

const Consulting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-bold text-gray-900">Consulting</h1>
          <h2 className="text-2xl text-gray-600">
            BI Development as service using AI prompt engineering
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Service leverages cutting edge AI to build stunning, interactive dashboards in just a few hours!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-12">
          {/* Speed Meets Precision */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <LineChart className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Speed Meets Precision</h3>
            </div>
            <p className="text-gray-600 pl-[52px]">
              No more delays, turn your data into sleek, customized dashboards within minutes, not months.
            </p>
          </div>

          {/* AI Powered Efficiency */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Rocket className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">AI Powered Efficiency</h3>
            </div>
            <p className="text-gray-600 pl-[52px]">
              Harness the power of AI to streamline your analytics and achieve unparalleled speed without compromising quality.
            </p>
          </div>

          {/* Why Wait? Act Now */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Timer className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Why Wait? Act Now</h3>
            </div>
            <p className="text-gray-600 pl-[52px]">
              Fast-track your business decisions with dashboards that deliver insights at the speed of thought. Perfect for startups, enterprises, and teams needing immediate results.
            </p>
          </div>

          {/* Your Data, Your Way */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Your Data, Your Way In No Time!</h3>
            </div>
            <p className="text-gray-600 pl-[52px]">
              Experience the future of BI today. Let us transform your data challenges into actionable insights, faster than ever before.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900">Ready to revolutionize your analytics?</h3>
          <p className="text-lg text-gray-600">Contact us now and let's build your next dashboard in record time!</p>
          <button className="bg-emerald-500 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-600 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consulting;