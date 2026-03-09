"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Handshake, TrendingUp, Users, Award, Check, ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const partnerTypes = [
    {
        icon: Handshake,
        title: "Technology Partners",
        desc: "Integrate DataDefend with your platform and offer DPDP compliance to your customers",
        benefits: ["Revenue sharing", "Technical support", "Co-marketing", "API access"]
    },
    {
        icon: TrendingUp,
        title: "Reseller Partners",
        desc: "Sell DataDefend solutions to your enterprise clients and earn attractive commissions",
        benefits: ["Up to 30% commission", "Sales enablement", "Lead support", "Deal registration"]
    },
    {
        icon: Users,
        title: "Implementation Partners",
        desc: "Deliver DataDefend implementations and consulting services to your clients",
        benefits: ["Certified training", "Implementation fees", "Partner portal", "Priority support"]
    },
    {
        icon: Award,
        title: "Referral Partners",
        desc: "Refer clients to DataDefend and earn rewards for successful conversions",
        benefits: ["15% referral fee", "Simple process", "No technical work", "Track commissions"]
    }
];

const benefits = [
    "Access to India's leading DPDP compliance platform",
    "Comprehensive partner training and certification",
    "Dedicated partner success manager",
    "Co-marketing opportunities and MDF support",
    "Priority technical support for your clients",
    "Partner portal with sales tools and resources",
    "Recurring revenue opportunities",
    "Quarterly partner meetups and events"
];

const stats = [
    { value: "50+", label: "Active Partners" },
    { value: "30%", label: "Avg Commission" },
    { value: "500+", label: "Partner-led Deals" },
    { value: "₹2Cr+", label: "Partner Revenue" }
];

export default function PartnersPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-[#152645] via-[#0e488b] to-[#152645]">
                <div className="container mx-auto max-w-7xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                            <Handshake className="w-4 h-4 text-[#3b82f6]" />
                            <span className="text-sm font-semibold text-white">Partnership Program</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Grow Your Business with DataDefend
                        </h1>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                            Join our partner ecosystem and help enterprises across India achieve DPDP compliance while earning attractive revenues
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold rounded-xl transition-all shadow-lg cursor-pointer"
                        >
                            <Mail className="w-5 h-5" />
                            Become a Partner
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-[#0e488b] mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-600">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partner Types */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-4">
                            Choose Your Partnership Model
                        </h2>
                        <p className="text-lg text-gray-600">
                            Multiple ways to partner with DataDefend
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {partnerTypes.map((type, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0e488b] to-[#152645] flex items-center justify-center mb-6">
                                    <type.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#152645] mb-3">
                                    {type.title}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {type.desc}
                                </p>
                                <div className="space-y-3">
                                    {type.benefits.map((benefit, bIdx) => (
                                        <div key={bIdx} className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-4">
                            Partner Program Benefits
                        </h2>
                        <p className="text-lg text-gray-600">
                            Everything you need to succeed as a DataDefend partner
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {benefits.map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                                    className="flex items-start gap-3"
                                >
                                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-lg">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-4">
                            How to Get Started
                        </h2>
                        <p className="text-lg text-gray-600">
                            Simple onboarding process
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "1", title: "Apply", desc: "Submit partnership application" },
                            { step: "2", title: "Review", desc: "We evaluate your application" },
                            { step: "3", title: "Onboard", desc: "Get trained and certified" },
                            { step: "4", title: "Earn", desc: "Start selling and earning" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0e488b] to-[#152645] flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-[#152645] mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 bg-gradient-to-br from-[#152645] via-[#0e488b] to-[#152645]">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Partner with DataDefend?
                    </h2>
                    <p className="text-xl text-white/80 mb-8">
                        Join 50+ partners helping enterprises achieve DPDP compliance
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold rounded-xl transition-all shadow-lg cursor-pointer"
                    >
                        Apply for Partnership
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
