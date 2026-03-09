"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, AlertTriangle, FileCheck, BarChart3, Lock, ArrowRight, Calendar, Activity, ClipboardCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export default function CompliancePrivacyPage() {
    const keyFeatures = [
        {
            icon: Activity,
            title: "Get Automated Risk Management",
            features: [
                "Unified risk management system for comprehensive oversight across all data operations",
                "Automate identification of potential risks across various processes and systems",
                "Centralized risk repository ensuring all risks are logged and tracked in one place",
                "Real-time risk scoring based on severity, likelihood, and business impact",
                "Integration with consent, DSAR, and data lifecycle modules for holistic risk view"
            ],
            color: "from-[#6366f1] to-[#8b5cf6]"
        },
        {
            icon: ClipboardCheck,
            title: "Assessment Module with Support for PIA, DPIA, TPRA",
            features: [
                "Privacy Impact Assessments (PIA) to identify risks to personal data privacy",
                "Data Protection Impact Assessments (DPIA) for high-risk data processing activities",
                "Third-Party Risk Assessments (TPRA) to evaluate vendor compliance and risks",
                "Pre-built questionnaire templates for ISO 27001, ISO 27701, DPDP compliance",
                "Custom assessment workflows with automated risk calculations and scoring"
            ],
            color: "from-[#3b82f6] to-[#2563eb]"
        },
        {
            icon: BarChart3,
            title: "Comprehensive Reporting & Analytics",
            features: [
                "Generate actionable reports for risks, compliance status, and audit readiness",
                "Real-time analytics dashboard tracking privacy compliance progress over time",
                "Customizable reporting with filters for departments, risk types, and time periods",
                "Data-driven decision-making with trend analysis and predictive insights",
                "One-click export for regulators, auditors, and executive stakeholders"
            ],
            color: "from-[#14b8a6] to-[#0d9488]"
        }
    ];

    const complianceMetrics = [
        { label: "Compliance Score", value: "94%", icon: BarChart3, color: "text-[#14b8a6]" },
        { label: "Data Processed", value: "847 GB", icon: Activity, color: "text-[#6366f1]" },
        { label: "Active Alerts", value: "3", icon: AlertTriangle, color: "text-[#3b82f6]" },
        { label: "Assessments Done", value: "28", icon: ClipboardCheck, color: "text-[#14b8a6]" }
    ];

    const benefits = [
        {
            icon: Lock,
            title: "Privacy by Design",
            description: "Build privacy into every process from day one with automated checks"
        },
        {
            icon: Shield,
            title: "Immutable Records",
            description: "Audit trails for every action stored in tamper-proof format"
        },
        {
            icon: Sparkles,
            title: "AI-Powered Insights",
            description: "Predictive analytics to identify compliance gaps before they become risks"
        },
        {
            icon: FileCheck,
            title: "Audit-Ready Reports",
            description: "Generate compliance reports for DPB audits in seconds"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-16 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-full mb-6">
                                <Shield className="w-4 h-4 text-[#6366f1]" />
                                <span className="text-sm font-semibold text-[#6366f1]">COMPLIANCE & PRIVACY</span>
                            </div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#152645] mb-6 leading-tight">
                                Seamless{" "}
                                <span className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
                                    Data Protection
                                </span>{" "}
                                with Built-in Compliance
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Achieve compliance through automated risk management, advanced assessments, and immutable records—ensuring privacy by design at each step.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Get Compliance Assessment
                                </Link>
                                <button className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-[#152645] font-semibold rounded-xl transition-all flex items-center justify-center gap-2 border border-gray-300 cursor-pointer">
                                    View Demo
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-2xl">
                                <div className="mb-6">
                                    <h3 className="text-[#152645] font-bold text-lg mb-4">Real-time Compliance Dashboard</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    {complianceMetrics.map((metric, idx) => (
                                        <div key={idx} className="p-4 bg-gray-100 rounded-xl">
                                            <metric.icon className={`w-6 h-6 ${metric.color} mb-2`} />
                                            <p className="text-gray-400 text-xs mb-1">{metric.label}</p>
                                            <p className={`${metric.color} font-bold text-2xl`}>{metric.value}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-4 bg-gradient-to-r from-[#6366f1]/10 to-[#8b5cf6]/10 rounded-xl border border-[#6366f1]/20">
                                    <p className="text-[#152645] text-sm font-semibold mb-2">✨ Centralized Risk Registry</p>
                                    <p className="text-gray-400 text-xs">Automated risk tracking • Real-time alerts • Audit-ready reports</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#152645] mb-4">
                            Complete DPDP Compliance Features
                        </h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                            From risk identification to audit reporting—everything you need for continuous compliance
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {keyFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 hover:border-gray-300 transition-all"
                            >
                                <div className="grid md:grid-cols-2 gap-8 items-start">
                                    <div>
                                        <div className={`inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r ${feature.color} rounded-xl mb-6`}>
                                            <feature.icon className="w-6 h-6 text-white" />
                                            <span className="font-bold text-white">{index + 1}</span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-[#152645] mb-4">
                                            {feature.title}
                                        </h3>
                                    </div>
                                    <div className="space-y-3">
                                        {feature.features.map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                                                <CheckCircle2 className="w-5 h-5 text-[#6366f1] flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-[#6366f1]/50 transition-all text-center"
                            >
                                <benefit.icon className="w-10 h-10 text-[#6366f1] mx-auto mb-4" />
                                <h4 className="text-lg font-bold text-[#152645] mb-2">{benefit.title}</h4>
                                <p className="text-gray-400 text-sm">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#6366f1] rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                        
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Free Compliance Gap Assessment
                            </h2>
                            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                Get a detailed analysis of your current compliance posture. Identify gaps and get a roadmap to DPDP readiness.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-white hover:bg-gray-100 text-[#152645] font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Get Free Assessment
                                </Link>
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all flex items-center justify-center gap-2 border border-white/20 cursor-pointer"
                                >
                                    Talk to Expert
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
