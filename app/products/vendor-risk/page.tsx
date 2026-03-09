"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, FileText, ClipboardCheck, Bell, Shield, ArrowRight, Calendar, Target, BarChart3, Lock } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export default function ThirdPartyRiskPage() {
    const keyFeatures = [
        {
            icon: ClipboardCheck,
            title: "Use Pre-built or Custom Questionnaire Templates",
            features: [
                "Pre-populated questionnaire repository for DPIA, TPRA, ISO 27001, ISO 27701 assessments",
                "Create and run your own templates with custom questionnaires tailored to your needs",
                "Support for multiple question types—dropdowns, multi-selects, paragraphs, file uploads",
                "Automated scoring and risk calculation based on vendor responses",
                "Version control for questionnaires with audit trails of all changes"
            ],
            color: "from-[#3b82f6] to-[#2563eb]"
        },
        {
            icon: Target,
            title: "Define and Track Privacy Risks via Central Risk Library",
            features: [
                "Identify risks based on assessment responses with automated risk detection",
                "Maintain centralized risk library and register across the entire organization",
                "Manage risk mitigation tasks by attaching them to individual risk register entries",
                "Real-time risk scoring with severity levels and business impact assessment",
                "Integration with compliance module for holistic risk-compliance view"
            ],
            color: "from-[#6366f1] to-[#8b5cf6]"
        },
        {
            icon: Bell,
            title: "Breach Management for Third Parties",
            features: [
                "Structured approach to detect, manage, and resolve data breaches involving vendors",
                "Identification and containment workflows to minimize damage and exposure",
                "Automated notification to affected users and regulatory authorities per DPDP requirements",
                "Vendor breach impact assessment with downstream data flow analysis",
                "Complete audit trail of breach response actions for regulatory compliance"
            ],
            color: "from-[#14b8a6] to-[#0d9488]"
        }
    ];

    const riskMetrics = [
        { label: "Vendors Assessed", value: "47", icon: BarChart3, color: "text-[#3b82f6]" },
        { label: "High Risk", value: "3", icon: AlertTriangle, color: "text-red-500" },
        { label: "Active Assessments", value: "12", icon: ClipboardCheck, color: "text-[#6366f1]" },
        { label: "Avg Risk Score", value: "72/100", icon: Target, color: "text-[#14b8a6]" }
    ];

    const benefits = [
        {
            icon: Lock,
            title: "Vendor Compliance",
            description: "Ensure all third parties meet DPDP standards before data sharing"
        },
        {
            icon: Shield,
            title: "Risk Mitigation",
            description: "Identify and address vendor risks before they become incidents"
        },
        {
            icon: FileText,
            title: "Audit Documentation",
            description: "Complete records of vendor assessments for regulatory audits"
        },
        {
            icon: Bell,
            title: "Breach Readiness",
            description: "Structured workflows for rapid vendor breach response"
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded-full mb-6">
                                <AlertTriangle className="w-4 h-4 text-[#3b82f6]" />
                                <span className="text-sm font-semibold text-[#3b82f6]">THIRD PARTY RISK MANAGEMENT</span>
                            </div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#152645] mb-6 leading-tight">
                                Run DPIA, PIA, TPRA{" "}
                                <span className="bg-gradient-to-r from-[#3b82f6] to-[#2563eb] bg-clip-text text-transparent">
                                    Assessments
                                </span>{" "}
                                Through One Unified Module
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Send DPIA, TPRA, PIA and other questionnaires to vendors. Get full customizability over questionnaires. Track vendor deletion and issue breach notices—all from one platform.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Start Risk Assessment
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
                                    <h3 className="text-[#152645] font-bold text-lg mb-4">Third-Party Risk Dashboard</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    {riskMetrics.map((metric, idx) => (
                                        <div key={idx} className="p-4 bg-gray-100 rounded-xl">
                                            <metric.icon className={`w-6 h-6 ${metric.color} mb-2`} />
                                            <p className="text-gray-400 text-xs mb-1">{metric.label}</p>
                                            <p className={`${metric.color} font-bold text-2xl`}>{metric.value}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-4 bg-gradient-to-r from-[#3b82f6]/10 to-[#2563eb]/10 rounded-xl border border-[#3b82f6]/20">
                                    <p className="text-[#152645] text-sm font-semibold mb-2">✨ Unified Risk Management</p>
                                    <p className="text-gray-400 text-xs">Automated scoring • Central risk library • Breach workflows</p>
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
                            Complete Vendor Risk Lifecycle
                        </h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                            From assessment to breach management—protect your organization from third-party risks
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
                                                <CheckCircle2 className="w-5 h-5 text-[#3b82f6] flex-shrink-0 mt-0.5" />
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
                                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-[#3b82f6]/50 transition-all text-center"
                            >
                                <benefit.icon className="w-10 h-10 text-[#3b82f6] mx-auto mb-4" />
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
                        className="bg-gradient-to-r from-[#3b82f6] via-[#2563eb] to-[#3b82f6] rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                        
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Start Managing Vendor Risks Today
                            </h2>
                            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                Assess your first 5 vendors free. Get complete visibility into third-party compliance and risk exposure.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-white hover:bg-gray-100 text-[#152645] font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Start Free Assessment
                                </Link>
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all flex items-center justify-center gap-2 border border-white/20 cursor-pointer"
                                >
                                    Schedule Demo
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
