"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Activity, Globe, ArrowRight } from "lucide-react";

const stats = [
    {
        value: "9000+",
        label: "Integrations",
        subtext: "9K+ Plugins to integrate with your consent stack",
        icon: Globe
    },
    {
        value: "5X",
        label: "Vendor Risk Assessment made easy!",
        icon: Shield
    },
    {
        value: "98.5%",
        label: "Accuracy on AI filled Privacy Impact Assessments!",
        icon: Activity
    }
];

export function MeityBadge() {
    return (
        <section className="py-16 md:py-20 px-4 md:px-6 cyber-bg relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px),
                                      radial-gradient(circle at 75% 75%, #3b82f6 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0e488b]/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-[#3b82f6]/20 border border-[#3b82f6]/30 rounded-full px-4 py-2">
                        <Shield className="w-5 h-5 text-[#3b82f6]" />
                        <span className="text-lg md:text-xl font-bold text-white">
                            Top 3 in Meity Code for Consent
                        </span>
                    </div>
                </motion.div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                    {/* Left - Stats - Cyber Glass Cards */}
                    <div className="flex flex-col justify-between">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="cyber-glass p-5 text-center hover:border-emerald-500/30 transition-all duration-300 group"
                                >
                                    {stat.icon && (
                                        <div className="mb-3 flex justify-center">
                                            <div className="p-2 bg-emerald-500/20 rounded-lg group-hover:bg-emerald-500/30 transition-colors">
                                                <stat.icon className="w-5 h-5 text-emerald-400" />
                                            </div>
                                        </div>
                                    )}
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                                        {stat.value}
                                    </div>
                                    <p className="text-sm text-gray-300 font-medium leading-tight">
                                        {stat.label}
                                    </p>
                                    {stat.subtext && (
                                        <p className="text-xs text-gray-500 mt-2">
                                            {stat.subtext}
                                        </p>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4 mt-8"
                        >
                            <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 group">
                                Explore Solutions
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="flex items-center gap-2 bg-transparent border border-white/10 hover:border-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                                <Lock className="w-4 h-4" />
                                Schedule Demo
                            </button>
                        </motion.div>
                    </div>

                    {/* Right - Testimonial Box */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative flex flex-col justify-between"
                    >
                        {/* Testimonial Container */}
                        <div className="relative rounded-2xl overflow-hidden cyber-glass shadow-2xl p-8 h-full flex flex-col justify-between">
                            <div>
                                {/* Stars aligned with text */}
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                
                                {/* Quote */}
                                <p className="text-lg text-gray-200 italic mb-6">
                                    "Implementing DPDPA requirements felt like a mountain until we found this platform. The AI-driven integration with our existing ERP and POS was seamless, providing us with instant, automated data mapping. We've moved from reactive manual assessments to a proactive, real-time compliance posture. It's a total game-changer for any high-volume business."
                                </p>
                                
                                {/* Attribution */}
                                <p className="text-sm text-gray-500">CISO — Largest Financial Services</p>
                            </div>
                            
                            {/* Decorative Elements */}
                            <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

