import React from 'react';
import { TrendingUp, Award, Target, Brain, LightbulbIcon, ArrowRight } from 'lucide-react';

const Training = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-16">
                {/* Header */}
                <div className="text-center space-y-8">
                    <h1 className="text-5xl font-bold text-gray-900">Training</h1>
                    <h2 className="text-2xl text-gray-600">
                        Unlock Your Future with Generative BI Dashboards!
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        In today's fast-paced business world, speed is the ultimate currency. Companies are racing to deliver powerful insights through stunning dashboards at lightning speed, and they're looking for experts who can make it happen. Are you ready to be the one they're hunting for?
                    </p>
                </div>

                {/* Why Choose Us Section */}
                <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-8">Here's why you can't afford to miss this opportunity:</h3>

                    <div className="grid gap-8">
                        {/* Stay Ahead */}
                        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-emerald-100">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Stay Ahead of the Curve</h4>
                                    <p className="text-gray-600">
                                        Businesses are adopting Generative BI tools to outpace competitors. Without these skills, you risk being left behind.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Boost Career */}
                        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-emerald-100">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                                    <Award className="w-6 h-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Boost Your Career</h4>
                                    <p className="text-gray-600">
                                        Mastering Generative BI tools isn't just an advantage, it's a game-changer that makes you indispensable to any team.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Solve Real Problems */}
                        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-emerald-100">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                                    <Target className="w-6 h-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Solve Real Business Problems</h4>
                                    <p className="text-gray-600">
                                        Our hands on, workshop oriented training course teach you to tackle real world challenges and generate dashboards that impress in client and team meetings.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Learn Secrets */}
                        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-emerald-100">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                                    <Brain className="w-6 h-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Learn the Secrets of AI Driven Dashboards</h4>
                                    <p className="text-gray-600">
                                        Discover how to seamlessly integrate various data sources, prompt effectively, and create professional, stylized dashboards all in minutes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Investment Section */}
                <div className="bg-emerald-50 rounded-2xl p-8 space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                        <LightbulbIcon className="w-6 h-6 text-emerald-600" />
                        <h3 className="text-2xl font-semibold text-gray-900">Invest in Yourself Today</h3>
                    </div>
                    <p className="text-gray-600">
                        The demand for AI driven BI experts is skyrocketing. Don't wait until it's too late. Equip yourself with the knowledge and skills to stand out in this competitive job market.
                    </p>

                    {/* CTA */}
                    <div className="pt-6">
                        <button className="group bg-emerald-500 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-600 transition-colors flex items-center gap-2 mx-auto">
                            Sign Up Now
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-sm text-gray-500 text-center mt-4">
                            Seats are filling fast, secure your spot today to future proof your career and unlock endless opportunities in the world of Generative BI.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;