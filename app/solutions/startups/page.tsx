"use client";

import React from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { motion } from "framer-motion";
import { Rocket, Shield, Clock, CheckCircle, ArrowRight, Zap, Target } from "lucide-react";
import Link from "next/link";

export default function StartupsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 md:px-6 bg-gradient-to-b from-[#f0f9ff] to-white">
                <div className="container mx-auto max-w-6xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#152645]/10 text-[#152645] text-sm font-bold rounded-full mb-6"
                    >
                        <Rocket className="w-4 h-4" />
                        FOR STARTUPS
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#152645] mb-6 leading-tight"
                    >
                        Get Compliant. <span className="text-[#0e488b]">Close Deals.</span>
                        <br />
                        <span className="text-[#f59e0b]">Don't Slow Down.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10"
                    >
                        Don't let a lack of DPDPA compliance stall your next funding round or enterprise deal.
                        DataDefend gets you audit-ready in days, not months.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-[#f59e0b] hover:bg-[#d97706] text-[#152645] font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
                        >
                            Get Compliant Fast
                            <Zap className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* The Problem Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-[#152645] mb-6">
                                The "Not Now" Trap
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Startups often push compliance to "later". But "later" becomes "too late" when:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                                        <Clock className="w-4 h-4 text-red-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#152645]">Enterprise Deals Stall</h4>
                                        <p className="text-sm text-gray-600">Big customers demand proof of compliance (SOC 2, DPDPA) before signing.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                                        <Target className="w-4 h-4 text-red-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#152645]">Investors Walk Away</h4>
                                        <p className="text-sm text-gray-600">Due diligence flags data risks as a major liability.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                                        <Shield className="w-4 h-4 text-red-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#152645]">Product Momentum Dies</h4>
                                        <p className="text-sm text-gray-600">Retrofitting privacy into a mature product is 10x harder than starting right.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-[#152645] rounded-3xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0e488b] rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
                            <h3 className="text-2xl font-bold mb-6">DataDefend Startup Pack</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#f59e0b] font-bold text-xl">1</div>
                                    <div>
                                        <h4 className="font-bold">Instant Policies</h4>
                                        <p className="text-sm text-white/70">Generated in minutes, not weeks.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#f59e0b] font-bold text-xl">2</div>
                                    <div>
                                        <h4 className="font-bold">Auto-Discovery</h4>
                                        <p className="text-sm text-white/70">Find where your data lives automatically.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#f59e0b] font-bold text-xl">3</div>
                                    <div>
                                        <h4 className="font-bold">Consent Banner</h4>
                                        <p className="text-sm text-white/70">Drop-in code for instant compliance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#152645] mb-4">Why Startups Choose DataDefend</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <Zap className="w-10 h-10 text-[#f59e0b] mb-4" />
                            <h3 className="text-xl font-bold text-[#152645] mb-2">Speed to Value</h3>
                            <p className="text-gray-600">Get your compliance badge in days. Unblock sales and move on.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <Shield className="w-10 h-10 text-[#0e488b] mb-4" />
                            <h3 className="text-xl font-bold text-[#152645] mb-2">Grow with You</h3>
                            <p className="text-gray-600">Start simple. Unlock advanced features as you scale to mid-market.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <Target className="w-10 h-10 text-[#152645] mb-4" />
                            <h3 className="text-xl font-bold text-[#152645] mb-2">Startup Pricing</h3>
                            <p className="text-gray-600">Plans designed for seed-stage budgets. No massive enterprise contracts.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
