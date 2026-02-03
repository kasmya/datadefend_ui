"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function TransformCTA() {
    return (
        <section className="py-20 px-4 md:px-6 bg-white">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-[#152645] via-[#0e488b] to-[#152645] rounded-[3rem] overflow-hidden shadow-2xl relative"
                >
                    {/* Background decorative element */}
                    <div className="absolute top-0 right-0 w-1/3 h-full">
                        <svg viewBox="0 0 200 500" className="w-full h-full opacity-20">
                            <path d="M0 0 Q 100 250 0 500 L 200 500 L 200 0 Z" fill="#6366f1" />
                        </svg>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
                        {/* Left Side - Content */}
                        <div className="p-10 md:p-16">
                            {/* Icon */}
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8">
                                <FileText className="w-8 h-8 text-[#0e488b]" />
                            </div>

                            {/* Heading */}
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                Ready to{" "}
                                <span className="bg-[#f59e0b] px-3 py-1 rounded-xl text-[#152645]">
                                    Transform Your
                                </span>{" "}
                                Data Privacy and Governance Strategy?
                            </h2>

                            {/* CTA Button */}
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[#6366f1] hover:bg-[#4f46e5] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl group mt-6"
                            >
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                Book a Demo
                            </Link>
                        </div>

                        {/* Right Side - Dashboard Preview */}
                        <div className="p-8 md:p-12 flex items-center justify-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="relative w-full max-w-2xl"
                            >
                                {/* Dashboard Mockup */}
                                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white/10">
                                    {/* Using the generated dashboard image */}
                                    <img
                                        src="/datadefend_dashboard_mockup_1770098347727.png"
                                        alt="DataDefend Dashboard Preview"
                                        className="w-full h-auto"
                                    />
                                </div>

                                {/* Decorative glow effect */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-[#6366f1]/20 to-[#f59e0b]/20 rounded-3xl blur-2xl -z-10"></div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
