"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import {
    Shield,
    FileCheck,
    Users,
    Database,
    Lock,
    BarChart3,
    ArrowRight,
    CheckCircle,
    Zap,
    Bot,
    Clock,
    Target,
    Code,
    Scale,
    Laptop,
    RefreshCw,
    FileText,
    AlertCircle,
    Workflow,
    Sparkles,
    LineChart,
    Globe,
    Phone,

    Settings,
    GraduationCap,
    Headphones,

    Building2
} from "lucide-react";
import Link from "next/link";

const platformFeatures = [
    {
        icon: Shield,
        title: "Consent Management",
        description: "Collect, manage, and document user consent with DPDPA-compliant workflows. Multi-language support for 22 Indian languages.",
        highlights: ["Cookie consent banners", "Preference centers", "Consent receipts", "API integrations"]
    },
    {
        icon: Database,
        title: "Data Discovery & Mapping",
        description: "AI-powered discovery of personal data across your entire infrastructure. Automatic classification and data flow mapping.",
        highlights: ["7000+ integrations", "Real-time scanning", "Data lineage", "Risk scoring"]
    },
    {
        icon: FileCheck,
        title: "Privacy Impact Assessments",
        description: "Automate PIAs and DPIAs with AI-assisted risk analysis. Ensure compliance before launching new initiatives.",
        highlights: ["AI-filled assessments", "Risk recommendations", "Audit trails", "Template library"]
    },
    {
        icon: Users,
        title: "DSAR Automation",
        description: "Handle Data Subject Access Requests efficiently with automated workflows and response tracking.",
        highlights: ["Request portal", "Identity verification", "Auto-redaction", "Response tracking"]
    },
    {
        icon: Lock,
        title: "Vendor Risk Management",
        description: "Assess and monitor third-party vendors for data privacy compliance. Continuous risk monitoring.",
        highlights: ["Vendor assessments", "Risk scoring", "Contract management", "Continuous monitoring"]
    },
    {
        icon: BarChart3,
        title: "Compliance Dashboard",
        description: "Real-time visibility into your compliance posture. Track progress, identify gaps, and generate reports.",
        highlights: ["Real-time metrics", "Gap analysis", "Board reports", "Audit-ready exports"]
    }
];

const aiCapabilities = [
    {
        icon: Bot,
        title: "AI Auto-Fill",
        description: "Automatically populate privacy assessments, vendor questionnaires, and compliance forms with intelligent data extraction.",
        stat: "90%",
        statLabel: "Time Saved"
    },
    {
        icon: Sparkles,
        title: "Smart Classification",
        description: "AI-powered data discovery that automatically classifies personal data across databases, files, and cloud services.",
        stat: "7000+",
        statLabel: "Integrations"
    },
    {
        icon: RefreshCw,
        title: "Continuous Monitoring",
        description: "Real-time compliance monitoring that automatically detects and alerts on policy violations and risk changes.",
        stat: "24/7",
        statLabel: "Monitoring"
    },
    {
        icon: FileText,
        title: "Auto Documentation",
        description: "Automatically generate audit-ready documentation, consent receipts, and compliance reports.",
        stat: "100%",
        statLabel: "Audit Ready"
    }
];

const teamBenefits = [
    {
        team: "For Tech Teams",
        icon: Code,
        color: "from-blue-500 to-cyan-500",
        benefits: [
            "API-first architecture for seamless integration",
            "Pre-built SDKs for web, mobile, and backend",
            "Webhooks for real-time event notifications",
            "SSO and RBAC for enterprise security",
            "CI/CD pipeline integrations"
        ]
    },
    {
        team: "For Compliance Teams",
        icon: Scale,
        color: "from-purple-500 to-pink-500",
        benefits: [
            "Ready-made DPDPA compliance templates",
            "Automated regulatory change tracking",
            "One-click audit report generation",
            "Risk scoring and gap analysis",
            "Regulatory deadline reminders"
        ]
    },
    {
        team: "For Legal Teams",
        icon: FileCheck,
        color: "from-amber-500 to-orange-500",
        benefits: [
            "Contract clause library for vendors",
            "DSAR response workflow automation",
            "Privacy notice and policy templates",
            "Breach notification management",
            "Legal hold and litigation support"
        ]
    }
];

const processSteps = [
    {
        step: 1,
        title: "Connect",
        description: "Integrate DataDefend with your existing infrastructure in minutes using our 7000+ pre-built connectors.",
        icon: Globe
    },
    {
        step: 2,
        title: "Discover",
        description: "AI automatically scans and classifies all personal data across your systems, creating a comprehensive data map.",
        icon: Database
    },
    {
        step: 3,
        title: "Automate",
        description: "Set up automated workflows for consent, DSARs, and vendor assessments with intelligent AI assistance.",
        icon: Workflow
    },
    {
        step: 4,
        title: "Monitor",
        description: "Get real-time visibility into your compliance posture with continuous monitoring and instant alerts.",
        icon: LineChart
    }
];

export default function PlatformPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section - Plain Rounded Background */}
            <section className="px-4 md:px-6 pt-4 pb-12">
                <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#152645] rounded-[3rem]">

                    <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
                        <div className="text-center max-w-4xl mx-auto">
                            {/* Badge */}
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="inline-block px-4 py-1.5 text-sm font-bold tracking-wide text-[#152645] bg-[#3b82f6] rounded-full mb-6"
                            >
                                ALL-IN-ONE PLATFORM
                            </motion.span>

                            {/* Main Headline */}
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
                            >
                                Complete DPDPA Compliance,
                                <br />
                                <span className="text-[#a4d4ff]">In One Platform</span>
                            </motion.h1>

                            {/* Subheadline */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-6"
                            >
                                From consent management to vendor risk, DataDefend provides everything you need
                                to achieve and maintain DPDPA compliance.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
                            >
                                <Link
                                    href="/contact"
                                    className="px-6 py-3 bg-[#3b82f6] hover:bg-[#2563eb] text-[#152645] font-semibold rounded-full text-base shadow-xl shadow-amber-500/20 transition-all hover:scale-105 flex items-center gap-2 cursor-pointer"
                                >
                                    <Zap className="w-4 h-4" />
                                    Get Started Free
                                </Link>
                                <Link
                                    href="/pricing"
                                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full text-base backdrop-blur-sm transition-all flex items-center gap-2 group cursor-pointer"
                                >
                                    View Pricing
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>

                            {/* Trust Indicators */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-white/50"
                            >
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#3b82f6]" />
                                    <span>6 Powerful Modules</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#3b82f6]" />
                                    <span>7000+ Integrations</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#3b82f6]" />
                                    <span>AI-Powered Automation</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Automation Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0e488b]/10 text-[#0e488b] text-sm font-semibold rounded-full mb-4"
                        >
                            <Bot className="w-4 h-4" />
                            AI-POWERED AUTOMATION
                        </motion.span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-4">
                            Let AI Do the Heavy Lifting
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our AI engine automates 90% of compliance tasks, reducing manual effort and eliminating human error.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {aiCapabilities.map((cap, index) => (
                            <motion.div
                                key={cap.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all group overflow-hidden"
                            >
                                {/* Decorative gradient */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0e488b]/5 to-transparent rounded-bl-full" />

                                <div className="relative">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#0e488b] to-[#152645] rounded-xl flex items-center justify-center mb-4 text-white">
                                        <cap.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#152645] mb-2">{cap.title}</h3>
                                    <p className="text-sm text-gray-600 mb-4">{cap.description}</p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-bold text-[#3b82f6]">{cap.stat}</span>
                                        <span className="text-sm text-gray-500">{cap.statLabel}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Visual Graphic - AI Flow */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 bg-gradient-to-br from-[#152645] to-[#0e488b] rounded-3xl p-8 md:p-12 relative overflow-hidden"
                    >
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full" />
                            <div className="absolute bottom-10 right-10 w-60 h-60 border border-white rounded-full" />
                            <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                        </div>

                        <div className="relative grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    Compliance on Autopilot
                                </h3>
                                <p className="text-white/80 mb-6">
                                    DataDefend's AI continuously monitors your data landscape, automatically detecting new data sources,
                                    classifying personal information, and flagging compliance risks before they become problems.
                                </p>
                                <div className="space-y-3">
                                    {["Auto-detect sensitive data in real-time", "Predict compliance risks before they occur", "Generate audit reports with one click", "Learn from your organization's patterns"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#3b82f6]" />
                                            <span className="text-white/90">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Visual Dashboard Graphic - FIXED FOR MOBILE */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-6 border border-white/20 overflow-hidden">
                                <div className="flex items-center gap-2 mb-3 sm:mb-4 flex-wrap">
                                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-500" />
                                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-300" />
                                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-100" />
                                </div>
                                <div className="space-y-2 sm:space-y-3">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 sm:p-3 bg-white/10 rounded-lg text-xs sm:text-sm">
                                        <span className="text-white/90 line-clamp-1">Data Sources Scanned</span>
                                        <span className="text-[#3b82f6] font-bold mt-1 sm:mt-0">2,847</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 sm:p-3 bg-white/10 rounded-lg text-xs sm:text-sm">
                                        <span className="text-white/90 line-clamp-1">PII Records Classified</span>
                                        <span className="text-[#3b82f6] font-bold mt-1 sm:mt-0">1.2M+</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 sm:p-3 bg-white/10 rounded-lg text-xs sm:text-sm">
                                        <span className="text-white/90 line-clamp-1">Compliance Score</span>
                                        <span className="text-blue-400 font-bold mt-1 sm:mt-0">94%</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 sm:p-3 bg-white/10 rounded-lg text-xs sm:text-sm">
                                        <span className="text-white/90 line-clamp-1">Active Alerts</span>
                                        <span className="text-blue-400 font-bold mt-1 sm:mt-0">3</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 sm:py-20 px-2 sm:px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#152645] mb-4">
                            How DataDefend Works
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto line-clamp-2">
                            Get compliance-ready in 4 simple steps. Our AI handles the complexity so you can focus on your business.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#0e488b] via-[#3b82f6] to-[#0e488b] -translate-y-1/2 rounded-full" />
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={step.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100 text-center overflow-hidden"
                                >
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-full flex items-center justify-center text-white font-bold shadow-lg text-xs sm:text-base">
                                        {step.step}
                                    </div>
                                    <div className="mt-8 sm:mt-10">
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-[#e0f2fe] rounded-2xl flex items-center justify-center mb-3 sm:mb-4 text-[#0e488b]">
                                            <step.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                                        </div>
                                        <h3 className="text-base sm:text-xl font-bold text-[#152645] mb-2 line-clamp-1">{step.title}</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Benefits */}
            <section className="py-16 sm:py-20 px-2 sm:px-4 bg-gray-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-[#3b82f6]/10 text-[#3b82f6] text-xs sm:text-sm font-semibold rounded-full mb-4"
                        >
                            <Users className="w-4 h-4" />
                            BUILT FOR EVERY TEAM
                        </motion.span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#152645] mb-4">
                            One Platform for All Your Teams
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto line-clamp-2">
                            Whether you're in tech, compliance, or legal – DataDefend speaks your language and fits your workflow.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {teamBenefits.map((team, index) => (
                            <motion.div
                                key={team.team}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                            >
                                <div className={`w-14 h-14 bg-gradient-to-br ${team.color} rounded-2xl flex items-center justify-center mb-4 text-white`}>
                                    <team.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#152645] mb-4 line-clamp-1">{team.team}</h3>
                                <ul className="space-y-2">
                                    {team.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm">
                                            <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-600 line-clamp-1">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16 sm:py-20 px-2 sm:px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#152645] mb-4">
                            Everything You Need for DPDPA Compliance
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto line-clamp-2">
                            Six powerful modules working together to give you complete control over your data privacy operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {platformFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-lg hover:shadow-xl transition-shadow group overflow-hidden"
                            >
                                <div className="w-14 h-14 bg-[#e0f2fe] rounded-2xl flex items-center justify-center mb-4 text-[#0e488b] group-hover:bg-[#3b82f6] group-hover:text-white transition-colors">
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#152645] mb-3 line-clamp-1">{feature.title}</h3>
                                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{feature.description}</p>
                                <div className="space-y-2">
                                    {feature.highlights.map((highlight) => (
                                        <div key={highlight} className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 line-clamp-1">
                                            <CheckCircle className="w-4 h-4 text-[#0e488b]" />
                                            {highlight}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration Visual */}
            <section className="py-16 sm:py-20 px-2 sm:px-4 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-gray-100 overflow-hidden"
                    >
                        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                            <div>
                                <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold rounded-full mb-4 line-clamp-1">
                                    <Clock className="w-4 h-4" />
                                    QUICK SETUP
                                </span>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#152645] mb-4 line-clamp-1">
                                    Go Live in Under 2 Weeks
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 mb-6 line-clamp-2">
                                    With our guided onboarding, pre-built templates, and 7000+ integrations, you'll be compliance-ready
                                    faster than you ever thought possible.
                                </p>
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#e0f2fe] rounded-xl flex items-center justify-center text-[#0e488b] flex-shrink-0">
                                            <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#152645] line-clamp-1">Dedicated Onboarding Manager</h4>
                                            <p className="text-xs sm:text-sm text-gray-500 line-clamp-1">Personal guidance through every step</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                                    {["Salesforce", "AWS", "MongoDB", "Slack", "HubSpot", "Azure", "PostgreSQL", "Teams", "Shopify", "GCP", "MySQL", "Jira"].map((name, i) => (
                                        <motion.div
                                            key={name}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 }}
                                            className="aspect-square bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center text-xs font-medium text-gray-600 hover:border-[#0e488b] hover:bg-[#e0f2fe] transition-colors cursor-pointer overflow-hidden line-clamp-1 px-1"
                                        >
                                            {name}
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="text-center mt-4">
                                    <p className="text-xs sm:text-sm text-gray-500 line-clamp-1">
                                        And <span className="font-bold text-[#0e488b]">7000+ more</span> integrations
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Onboarding */}
            <section className="py-16 sm:py-20 px-2 sm:px-4">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-[#152645] to-[#0e488b] rounded-3xl p-6 sm:p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full" />
                            <div className="absolute bottom-10 right-10 w-60 h-60 border border-white rounded-full" />
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 line-clamp-1">
                                Your Journey to Compliance
                            </h2>
                            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-8 line-clamp-2">
                                Discover how we take you from zero to compliant in weeks, with a special consultation track for large enterprises involving C-Suite systematic planning.
                            </p>
                            <Link
                                href="/onboarding"
                                className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 bg-[#3b82f6] hover:bg-[#2563eb] text-[#152645] font-bold rounded-full transition-all shadow-lg hover:scale-105 line-clamp-1"
                            >
                                View Onboarding Process
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
