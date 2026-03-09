"use client";

import React from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Building2, Shield, Clock, TrendingUp, Check, AlertTriangle, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const challenges = [
    { icon: AlertTriangle, title: "RBI Digital Lending Guidelines", desc: "Complex consent requirements for loan processing" },
    { icon: Shield, title: "PCI-DSS Compliance", desc: "Card data protection alongside DPDP requirements" },
    { icon: Clock, title: "Real-time Consent", desc: "Instant consent verification for financial transactions" },
    { icon: Building2, title: "Multi-branch Operations", desc: "Centralized consent management across locations" }
];

const solutions = [
    {
        title: "Digital Lending Compliance",
        desc: "Automated consent collection compliant with RBI guidelines",
        features: ["LSP-compliant consent flows", "Aadhaar-based e-KYC consent", "Loan processing consent trails"]
    },
    {
        title: "Payment Data Protection",
        desc: "Secure handling of payment and card data with consent tracking",
        features: ["PCI-DSS aligned consent", "Transaction consent verification", "Payment gateway integration"]
    },
    {
        title: "Customer Onboarding",
        desc: "Streamlined KYC with DPDP-compliant consent collection",
        features: ["Video KYC consent", "Document collection consent", "Third-party verification consent"]
    },
    {
        title: "Risk Assessment Integration",
        desc: "Vendor and third-party risk management for financial services",
        features: ["Fintech vendor assessments", "Data processor evaluations", "Cloud service provider audits"]
    }
];

const stats = [
    { value: "50+", label: "Banks & NBFCs" },
    { value: "10M+", label: "Customers Protected" },
    { value: "99.99%", label: "Uptime SLA" },
    { value: "<100ms", label: "API Response" }
];

const complianceFrameworks = [
    "DPDP Act 2023",
    "RBI Digital Lending Guidelines",
    "RBI Master Direction on KYC",
    "PCI-DSS v4.0",
    "ISO 27001",
    "SOC 2 Type II"
];

export default function BFSIPage() {
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
                                <Building2 className="w-4 h-4 text-[#3b82f6]" />
                                <span className="text-sm font-semibold text-white">BFSI Solutions</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                DPDP Compliance for Banking & Financial Services
                            </h1>
                            <p className="text-xl text-white/80 mb-8">
                                Navigate RBI guidelines, digital lending norms, and DPDP Act requirements with DataDefend's purpose-built solution for BFSI.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Book BFSI Demo
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
                                            <div className="text-4xl font-bold text-[#3b82f6] mb-2">
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
                            BFSI-Specific Compliance Challenges
                        </h2>
                        <p className="text-lg text-gray-600">
                            Financial services face unique data protection requirements
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
                            Purpose-Built for Financial Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Complete DPDP compliance suite designed for BFSI operations
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

            {/* Compliance Frameworks */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-4">
                            Multi-Framework Compliance
                        </h2>
                        <p className="text-lg text-gray-600">
                            Stay compliant with all regulatory requirements
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {complianceFrameworks.map((framework, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                className="bg-gradient-to-br from-[#152645] to-[#0e488b] rounded-2xl p-6 text-center shadow-lg"
                            >
                                <Shield className="w-8 h-8 text-[#3b82f6] mx-auto mb-3" />
                                <p className="font-bold text-white text-sm">
                                    {framework}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Study */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
                    >
                        <div className="text-center mb-8">
                            <div className="text-6xl mb-4">🏦</div>
                            <h3 className="text-2xl font-bold text-[#152645] mb-2">
                                Leading NBFC Achieves 100% DPDP Compliance
                            </h3>
                            <p className="text-gray-600">
                                10M+ customers | 50+ branches | 100% RBI compliant
                            </p>
                        </div>

                        <blockquote className="text-lg text-gray-700 italic border-l-4 border-[#3b82f6] pl-6 mb-8">
                            "DataDefend helped us navigate RBI's digital lending guidelines while ensuring DPDP compliance. We went from manual consent tracking to fully automated workflows in just 2 weeks. The ROI was immediate—no regulatory fines and 40% faster customer onboarding."
                        </blockquote>

                        <div className="flex items-center gap-4 justify-center">
                            <div className="w-12 h-12 rounded-full bg-[#152645] flex items-center justify-center text-white text-xl">
                                AK
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-[#152645]">Amit Kumar</p>
                                <p className="text-sm text-gray-600">Chief Compliance Officer</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 bg-gradient-to-br from-[#152645] via-[#0e488b] to-[#152645]">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Secure Your Financial Services?
                    </h2>
                    <p className="text-xl text-white/80 mb-8">
                        Join 50+ banks and NBFCs using DataDefend for DPDP compliance
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold rounded-xl transition-all shadow-lg cursor-pointer"
                    >
                        Schedule BFSI Consultation
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
