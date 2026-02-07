"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const stats = [
    {
        value: "9000+",
        label: "Integrations",
        subtext: "9K+ Plugins to integrate with your consent stack"
    },
    {
        value: "5X",
        label: "Vendor Risk Assessment made easy!"
    },
    {
        value: "98.5%",
        label: "Accuracy on AI filled Privacy Impact Assessments!"
    }
];

export function MeityBadge() {
    return (
        <section className="py-12 md:py-16 px-4 md:px-6 bg-[#ede9fe]">
            <div className="container mx-auto max-w-7xl">
                {/* Header Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <span className="inline-block text-lg md:text-xl font-bold text-[#152645]">
                        <span className="bg-[#f59e0b] px-2 py-0.5 md:px-3 md:py-1 rounded-lg text-[#152645]">Top</span>{" "}
                        3 in Meity Code for Consent
                    </span>
                </motion.div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Stats */}
                    <div>
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-left"
                                >
                                    <div className="text-4xl md:text-5xl font-bold text-[#152645] mb-2">
                                        {stat.value}
                                    </div>
                                    <p className="text-sm text-[#152645]/80 font-medium leading-tight">
                                        {stat.label}
                                    </p>
                                    {stat.subtext && (
                                        <p className="text-xs text-[#152645]/60 mt-2">
                                            {stat.subtext}
                                        </p>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Decorative Wave */}
                        <svg className="w-48 h-8 text-[#8b5cf6]" viewBox="0 0 200 30" fill="none">
                            <path
                                d="M0 15 Q25 5, 50 15 T100 15 T150 15 T200 15"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                fill="none"
                            />
                        </svg>
                    </div>

                    {/* Right - Testimonial */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-left"
                    >
                        {/* Stars */}
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]" />
                            ))}
                        </div>

                        <blockquote className="text-lg md:text-xl italic text-[#152645] mb-6 leading-relaxed">
                            "Implementing DPDPA requirements felt like a mountain until we found this platform. The AI-driven integration with our existing ERP and POS was seamless, providing us with instant, automated data mapping. We've moved from reactive manual assessments to a proactive, real-time compliance posture. It's a total game-changer for any high-volume business."
                        </blockquote>

                        <div>
                            <p className="font-bold text-[#152645]">CISO</p>
                            <p className="text-sm text-[#152645]/70">Largest Financial Services</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
