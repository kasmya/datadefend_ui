"use client";

import React from "react";
import { motion } from "framer-motion";

const customers = [
    { name: "HDFC Bank", logo: "🏦", industry: "Banking" },
    { name: "Apollo Hospitals", logo: "🏥", industry: "Healthcare" },
    { name: "Flipkart", logo: "🛒", industry: "E-commerce" },
    { name: "Tata Motors", logo: "🚗", industry: "Automotive" },
    { name: "Reliance Industries", logo: "⚡", industry: "Conglomerate" },
    { name: "Infosys", logo: "💻", industry: "IT Services" },
    { name: "Zomato", logo: "🍔", industry: "Food Tech" },
    { name: "ICICI Bank", logo: "🏦", industry: "Banking" },
    { name: "Max Healthcare", logo: "🏥", industry: "Healthcare" },
    { name: "Mahindra & Mahindra", logo: "🚜", industry: "Automotive" },
    { name: "PharmEasy", logo: "💊", industry: "HealthTech" },
    { name: "Swiggy", logo: "🍕", industry: "Food Tech" }
];

export function CustomerLogos() {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <p className="text-sm font-semibold text-[#f59e0b] uppercase tracking-wide mb-3">
                        Trusted by Industry Leaders
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-4">
                        500+ Companies Trust DataDefend
                    </h2>
                    <p className="text-lg text-gray-600">
                        From startups to Fortune 500 companies across BFSI, Healthcare, E-commerce & more
                    </p>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {[
                        { value: "500+", label: "Companies" },
                        { value: "10M+", label: "Consents/Month" },
                        { value: "99.96%", label: "Uptime" },
                        { value: "15+", label: "Industries" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-[#0e488b] mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-600 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Customer Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {customers.map((customer, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 group cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="text-center">
                                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                                    {customer.logo}
                                </div>
                                <h3 className="font-bold text-[#152645] mb-1">
                                    {customer.name}
                                </h3>
                                <p className="text-xs text-gray-500">
                                    {customer.industry}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonial */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-16 bg-gradient-to-br from-[#152645] to-[#0e488b] rounded-3xl p-8 md:p-12 text-center"
                >
                    <div className="max-w-3xl mx-auto">
                        <div className="text-6xl mb-6">⭐⭐⭐⭐⭐</div>
                        <blockquote className="text-xl md:text-2xl text-white/90 mb-6 italic">
                            "DataDefend made our DPDP compliance journey seamless. From consent management to vendor risk assessments, everything is automated and easy to use. We went live in just 10 days!"
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                                👤
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-white">Rajesh Kumar</p>
                                <p className="text-sm text-white/70">CISO, Leading Fintech Company</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
