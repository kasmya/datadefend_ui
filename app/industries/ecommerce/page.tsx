"use client";

import React from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ShoppingCart, Package, Users, TrendingUp, Check, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const challenges = [
    { icon: ShoppingCart, title: "Customer Consent at Checkout", desc: "Marketing opt-ins during purchase journey" },
    { icon: Package, title: "Order & Delivery Data", desc: "Managing shipping and tracking information" },
    { icon: Users, title: "Third-party Sellers", desc: "Marketplace consent across multiple vendors" },
    { icon: TrendingUp, title: "Personalization vs Privacy", desc: "Recommendations while respecting consent" }
];

const solutions = [
    {
        title: "Checkout Consent Flow",
        desc: "Seamless consent collection without impacting conversion",
        features: ["One-click marketing consent", "Payment data consent", "Newsletter subscriptions", "Third-party sharing consent"]
    },
    {
        title: "Marketing Automation",
        desc: "DPDP-compliant email and SMS campaigns",
        features: ["Segmented consent tracking", "Unsubscribe automation", "Re-consent workflows", "Campaign consent reports"]
    },
    {
        title: "Marketplace Management",
        desc: "Vendor consent coordination for multi-seller platforms",
        features: ["Seller data sharing consent", "Customer-to-seller consent", "Logistics partner consent", "Payment gateway consent"]
    },
    {
        title: "Customer Data Rights",
        desc: "Automated DSAR and data deletion workflows",
        features: ["Self-service data download", "Account deletion automation", "Consent withdrawal handling", "Data portability"]
    }
];

const stats = [
    { value: "200+", label: "E-commerce Sites" },
    { value: "50M+", label: "Customers" },
    { value: "99.9%", label: "Checkout Uptime" },
    { value: "2.3%", label: "Conv. Impact" }
];

export default function EcommercePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-[#152645] via-[#0e488b] to-[#152645]">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                <ShoppingCart className="w-4 h-4 text-[#f59e0b]" />
                                <span className="text-sm font-semibold text-white">E-commerce Solutions</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                DPDP Compliance for E-commerce & Retail
                            </h1>
                            <p className="text-xl text-white/80 mb-8">
                                Collect consent at checkout, manage customer data rights, and stay compliant—without impacting conversions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Book E-commerce Demo
                                </Link>
                                <Link
                                    href="/pricing"
                                    className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all flex items-center justify-center gap-2 border border-white/20 cursor-pointer"
                                >
                                    View Pricing
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                                <div className="grid grid-cols-2 gap-6">
                                    {stats.map((stat, idx) => (
                                        <div key={idx} className="text-center">
                                            <div className="text-4xl font-bold text-[#f59e0b] mb-2">
                                                {stat.value}
                                            </div>
                                            <div className="text-sm text-white/70">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Challenges */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-4">
                            E-commerce Privacy Challenges
                        </h2>
                        <p className="text-lg text-gray-600">
                            Balance personalization with privacy compliance
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {challenges.map((challenge, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
                            >
                                <challenge.icon className="w-12 h-12 text-[#0e488b] mb-4" />
                                <h3 className="text-xl font-bold text-[#152645] mb-2">
                                    {challenge.title}
                                </h3>
                                <p className="text-gray-600">
                                    {challenge.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-4">
                            Built for High-Volume E-commerce
                        </h2>
                        <p className="text-lg text-gray-600">
                            Scale your compliance without slowing down sales
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {solutions.map((solution, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
                            >
                                <h3 className="text-2xl font-bold text-[#152645] mb-3">
                                    {solution.title}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {solution.desc}
                                </p>
                                <div className="space-y-3">
                                    {solution.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 bg-gradient-to-br from-[#152645] via-[#0e488b] to-[#152645]">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Scale Your E-commerce with Confidence
                    </h2>
                    <p className="text-xl text-white/80 mb-8">
                        Join 200+ online stores using DataDefend for DPDP compliance
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold rounded-xl transition-all shadow-lg cursor-pointer"
                    >
                        Schedule E-commerce Consultation
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
