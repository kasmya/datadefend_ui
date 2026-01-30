"use client";

import React from "react";
import { Button } from "./ui/Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { DashboardPreview } from "./DashboardPreview";

export function Hero() {
    return (
        <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-gradient-to-b from-primary-light/30 via-white to-white">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[100px]" />
                <div className="absolute top-[30%] left-[5%] w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[80px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

                    {/* Badge with Flag */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-3 mb-8"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-100 via-white to-green-100 border border-gray-200 shadow-sm">
                            <span className="text-2xl">🇮🇳</span>
                            <span className="text-primary font-bold">India's #1</span>
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary mb-6 leading-[1.1]"
                    >
                        AI-Powered<br />
                        <span className="text-primary">DPDPA Compliance Platform</span>
                    </motion.h1>

                    {/* Feature Tags */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-wrap items-center justify-center gap-3 mb-6"
                    >
                        <span className="px-4 py-2 rounded-lg bg-yellow-100 text-yellow-800 font-semibold text-sm border border-yellow-200">
                            Consent
                        </span>
                        <span className="text-gray-400">,</span>
                        <span className="text-lg text-gray-600 font-medium">Data Governance, Vendor Risk, PIA and ROPA</span>
                    </motion.div>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-base md:text-lg text-gray-500 mb-10 max-w-2xl"
                    >
                        Proven Across BFSI, Healthcare, Pharma, Manufacturing & more!
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center gap-4"
                    >
                        <Button
                            size="lg"
                            className="group bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20 font-semibold px-8 py-4 text-base"
                        >
                            Platform Demo
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="group border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold px-8 py-4 text-base"
                        >
                            Understand DPDPA
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                </div>

                {/* Dashboard Preview */}
                <div className="mt-16 sm:mt-20">
                    <DashboardPreview />
                </div>
            </div>
        </section>
    );
}
