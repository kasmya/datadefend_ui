"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

const dataDefendFeatures = [
    "Top 6 in Meity Code For Consent",
    "On-Prem, Private-Cloud, SAAS",
    "7000+ Plugins for easy integration",
    "Simple License based fee",
    "Proven with multiple Industries!",
    "Scalable Technology, Beautiful UX"
];

const competitorLimitations = [
    "Complicated fee structure",
    "Need a lot of manual configuration",
    "On-Prem Deployments Not supported",
    "Few integrations, custom CR's",
    "Highly unscalable under load"
];

export function WhyChooseDataDefend() {
    return (
        <section className="py-20 px-4 md:px-6 bg-white">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-6"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#152645] mb-6">
                        Why choose{" "}
                        <span className="bg-[#f59e0b] px-4 py-1 rounded-xl">DataDefend</span>?
                    </h2>
                    <p className="text-xl md:text-2xl text-[#152645] max-w-4xl mx-auto">
                        <span className="bg-[#a4d4ff] px-3 py-1 rounded-lg font-semibold">
                            Gain Unprecedented Visibility
                        </span>{" "}
                        and Control Over Your Data
                    </p>
                </motion.div>

                {/* Comparison Cards */}
                <div className="grid lg:grid-cols-2 gap-8 items-start mt-16 relative">
                    {/* VS Badge - Positioned absolutely in center */}
                    <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="w-20 h-20 bg-[#0e488b] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl border-4 border-white">
                            VS
                        </div>
                    </div>

                    {/* DataDefend Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-10 rounded-[3rem] border-4 border-[#152645] shadow-xl relative"
                    >
                        {/* Decorative accent */}
                        <div className="absolute -top-3 -left-3 w-12 h-12">
                            <div className="w-full h-full border-l-4 border-t-4 border-[#152645] rounded-tl-3xl"></div>
                        </div>

                        <h3 className="text-3xl font-bold text-[#152645] mb-8">DataDefend</h3>

                        <div className="space-y-1 mb-6">
                            <p className="text-xs font-bold tracking-wider text-gray-500 uppercase">
                                Features Included:
                            </p>
                        </div>

                        <div className="space-y-4">
                            {dataDefendFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle className="w-6 h-6 text-[#0e488b] flex-shrink-0 mt-0.5" />
                                    <span className="text-[#152645] font-medium">{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom decorative line */}
                        <div className="mt-8 pt-4 border-t-2 border-[#152645]"></div>
                    </motion.div>

                    {/* Other Softwares Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-10 rounded-[3rem] border-4 border-[#152645] shadow-xl"
                    >
                        <h3 className="text-3xl font-bold text-[#152645] mb-8">Other Softwares</h3>

                        <div className="space-y-1 mb-6">
                            <p className="text-xs font-bold tracking-wider text-gray-500 uppercase">
                                Features Included:
                            </p>
                        </div>

                        <div className="space-y-4">
                            {competitorLimitations.map((limitation, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <X className="w-4 h-4 text-red-600" />
                                    </div>
                                    <span className="text-gray-600 font-medium">{limitation}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom decorative line */}
                        <div className="mt-8 pt-4 border-t-2 border-[#152645]"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
