"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export function CTABanner() {
    return (
        <section className="py-24 px-4 md:px-6">
            <div className="container mx-auto">
                <div className="relative overflow-hidden bg-gradient-to-br from-[#152645] via-[#0e488b] to-[#152645] rounded-[3rem] shadow-2xl">
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 grid-pattern opacity-50" />

                    {/* Glowing orbs */}
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#a4d4ff]/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#0e488b]/30 rounded-full blur-[100px]" />

                    <div className="relative z-10 py-20 px-6 md:px-12 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-3xl mx-auto"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                                Ready to simplify your{" "}
                                <span className="text-[#a4d4ff]">DPDPA compliance</span>?
                            </h2>
                            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
                                Join 500+ Indian enterprises who trust DataDefend to automate their privacy operations
                                and stay continuously compliant.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="#demo"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#f59e0b] hover:bg-[#d97706] text-[#152645] font-semibold rounded-full shadow-xl transition-colors shadow-amber-500/20"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Book a demo
                                </Link>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium group px-6 py-4 rounded-full hover:bg-white/10 transition-colors"
                                >
                                    Contact sales
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>

                            {/* Trust indicators */}
                            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
                                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#f59e0b]" /> No credit card required</span>
                                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#f59e0b]" /> 14-day free trial</span>
                                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#f59e0b]" /> Setup in minutes</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
