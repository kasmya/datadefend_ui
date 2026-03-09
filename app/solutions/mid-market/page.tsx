"use client";

import React from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { motion } from "framer-motion";
import { RefreshCw, FileCheck, Layers, ArrowRight, Zap, CheckCircle, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function MidMarketPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 md:px-6 bg-gradient-to-b from-[#f0f9ff] to-white">
                <div className="container mx-auto max-w-6xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0e488b]/10 text-[#0e488b] text-sm font-bold rounded-full mb-6"
                    >
                        <RefreshCw className="w-4 h-4" />
                        FOR MID-MARKET
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#152645] mb-6 leading-tight"
                    >
                        Continuous Compliance. <br />
                        <span className="text-[#0e488b]">Zero Fatigue.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10"
                    >
                        Stop chasing evidence manually. Automate your DPDPA, SOC 2, and ISO 27001 compliance
                        controls so your team can focus on growth, not spreadsheets.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-[#0e488b] hover:bg-[#09356b] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
                        >
                            Scale Your Compliance
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* The Challenge Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <FileCheck className="w-8 h-8 text-[#0e488b] mb-4" />
                                    <h4 className="font-bold text-[#152645] mb-2">Audit Fatigue</h4>
                                    <p className="text-sm text-gray-600">Endless screenshot requests distracting engineering.</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <Layers className="w-8 h-8 text-[#3b82f6] mb-4" />
                                    <h4 className="font-bold text-[#152645] mb-2">Framework Chaos</h4>
                                    <p className="text-sm text-gray-600">Managing DPDPA, ISO, and GDPR in separate silos.</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 col-span-2">
                                    <BarChart3 className="w-8 h-8 text-[#152645] mb-4" />
                                    <h4 className="font-bold text-[#152645] mb-2">Vendor Risk Blindspots</h4>
                                    <p className="text-sm text-gray-600">No visibility into the security posture of your growing vendor list.</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl font-bold text-[#152645] mb-6">
                                Growing Pains Shouldn't Mean Compliance Pains
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                As you scale, manual compliance breaks. You need a system that grows with you,
                                automatically mapping controls across frameworks to eliminate redundant work.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span className="text-[#152645] font-medium">Map once, comply everywhere (Unified Control Framework)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span className="text-[#152645] font-medium">Automated evidence collection from 7000+ integrations</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span className="text-[#152645] font-medium">Continuous control monitoring, not just point-in-time</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Spotlight */}
            <section className="py-20 px-4 bg-[#152645] text-white">
                <div className="container mx-auto max-w-6xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16">DataDefend for Scale</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="w-16 h-16 bg-[#0e488b] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">1</div>
                            <h3 className="text-xl font-bold mb-4">Integrate</h3>
                            <p className="text-white/70">Connect AWS, Azure, Jira, and HRIS. We pull evidence automatically.</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="w-16 h-16 bg-[#3b82f6] rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#152645] text-2xl font-bold">2</div>
                            <h3 className="text-xl font-bold mb-4">Automate</h3>
                            <p className="text-white/70">Tests run 24/7. Failing controls trigger alerts to Slack/Teams instantly.</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#152645] text-2xl font-bold">3</div>
                            <h3 className="text-xl font-bold mb-4">Report</h3>
                            <p className="text-white/70">Share live trust reports with customers. Reduce questionnaire turnaround time.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
