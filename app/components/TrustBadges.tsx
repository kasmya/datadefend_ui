"use client";

import React from "react";
import { motion } from "framer-motion";

const clients = [
    "HDFC Bank",
    "Tata Digital",
    "Reliance",
    "ICICI",
    "Infosys",
    "Wipro",
    "HCL Tech",
    "Tech Mahindra",
    "Bajaj Finserv",
    "Paytm",
    "Razorpay",
    "PhonePe",
];

export function TrustBadges() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                {/* Customer Count */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <span className="text-4xl md:text-5xl font-bold text-[#152645]">500+</span>
                    <span className="text-lg text-gray-500 ml-3">companies trust DataDefend</span>
                </motion.div>

                {/* Client Logos - Horizontal Scroll */}
                <div className="relative overflow-hidden mb-20">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

                    <motion.div
                        className="flex items-center gap-12"
                        animate={{ x: [0, -1200] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
                            },
                        }}
                    >
                        {[...clients, ...clients].map((client, index) => (
                            <div
                                key={`${client}-${index}`}
                                className="flex-shrink-0 px-6 py-3"
                            >
                                <span className="text-2xl font-bold text-[#a4d4ff]/60 hover:text-[#0e488b] transition-colors whitespace-nowrap">
                                    {client}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Video Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#152645] to-[#0e488b] shadow-2xl border-4 border-white/20">
                        <div className="absolute inset-0 grid-pattern opacity-30" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="w-24 h-24 bg-[#f59e0b] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform group text-[#152645]">
                                <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </button>
                        </div>
                        <div className="absolute bottom-8 left-8">
                            <span className="px-4 py-2 bg-[#a4d4ff]/20 backdrop-blur-md rounded-full text-white font-medium">
                                See DataDefend in action • 2:34
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
