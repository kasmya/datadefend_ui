"use client";

import React from "react";
import { Calendar, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const complianceBadges = [
    { name: "SOC 2", icon: "🛡️" },
    { name: "ISO 27001", icon: "📋" },
    { name: "GDPR", icon: "🇪🇺" },
    { name: "DPDPA", icon: "🇮🇳" },
];

export function Hero() {
    return (
        <section className="px-4 md:px-6 pt-4 pb-12">
            <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#152645] rounded-[3rem]">
                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 grid-pattern" />

                {/* Glowing Edge Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0e488b]/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0e488b]/30 via-[#a4d4ff]/10 to-transparent" />
                    <div className="absolute top-0 bottom-0 left-0 w-64 bg-gradient-to-r from-[#a4d4ff]/10 to-transparent" />
                    <div className="absolute top-0 bottom-0 right-0 w-64 bg-gradient-to-l from-[#0e488b]/10 to-transparent" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
                    <div className="text-center max-w-4xl mx-auto">


                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
                        >
                            DPDPA Compliance,
                            <br />
                            Powered by <span className="text-[#a4d4ff]">AI</span>.
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-3"
                        >
                            Master your Data Governance, Vendor Risk, and ROPA in one click.
                        </motion.p>

                        {/* Industry Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex items-center justify-center gap-2 text-xs md:text-sm text-white/60 mb-6 flex-wrap"
                        >
                            <span className="font-semibold text-white/80">Industry-Tested:</span>
                            <span>BFSI</span>
                            <span className="text-blue-500">•</span>
                            <span>Healthcare</span>
                            <span className="text-blue-500">•</span>
                            <span>Pharma</span>
                            <span className="text-blue-500">•</span>
                            <span>Manufacturing</span>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
                        >
                            <Link
                                href="/contact"
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full text-base shadow-xl shadow-blue-500/20 transition-all hover:scale-105 flex items-center gap-2 cursor-pointer"
                            >
                                <Calendar className="w-4 h-4" />
                                Book a demo
                            </Link>
                            <Link
                                href="#learn-more"
                                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full text-base backdrop-blur-sm transition-all flex items-center gap-2 group cursor-pointer"
                            >
                                Learn more
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-white/50"
                        >
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-blue-500" />
                                <span>Enterprise-grade security</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-blue-500" />
                                <span>Get compliance-ready in weeks</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-blue-500" />
                                <span>Trusted by 500+ companies</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
