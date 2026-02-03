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
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,72,139,0.2),transparent)]" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
                    <div className="text-center max-w-4xl mx-auto">


                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
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
                            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-4 font-medium"
                        >
                            Master your Data Governance, Vendor Risk, and ROPA in one click.
                        </motion.p>

                        {/* Industry Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex items-center justify-center gap-2 text-sm text-white/60 mb-10 flex-wrap"
                        >
                            <span className="font-semibold text-white/80">Industry-Tested:</span>
                            <span>BFSI</span>
                            <span className="text-[#f59e0b]">•</span>
                            <span>Healthcare</span>
                            <span className="text-[#f59e0b]">•</span>
                            <span>Pharma</span>
                            <span className="text-[#f59e0b]">•</span>
                            <span>Manufacturing</span>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                        >
                            <Link
                                href="#demo"
                                className="px-8 py-4 bg-[#f59e0b] hover:bg-[#d97706] text-[#152645] font-bold rounded-full text-lg shadow-xl shadow-amber-500/20 transition-all hover:scale-105 flex items-center gap-2"
                            >
                                <Calendar className="w-5 h-5" />
                                Book a demo
                            </Link>
                            <Link
                                href="#learn-more"
                                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full text-lg backdrop-blur-sm transition-all flex items-center gap-2 group"
                            >
                                Learn more
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-white/50"
                        >
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-[#f59e0b]" />
                                <span>Enterprise-grade security</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-[#f59e0b]" />
                                <span>Get compliance-ready in weeks</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-[#f59e0b]" />
                                <span>Trusted by 500+ companies</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
