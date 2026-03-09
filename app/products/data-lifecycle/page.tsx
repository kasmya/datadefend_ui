"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Search, Map, Trash2, Clock, Database, ArrowRight, Calendar, BarChart3, Lock, Zap, FolderSearch } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export default function DataLifecyclePage() {
    const keyFeatures = [
        {
            icon: FolderSearch,
            title: "Run Data Discovery with AI-Powered Classification",
            features: [
                "Accurately detect PII across structured and unstructured sources—SQL databases, CRMs, cloud storage, internal servers",
                "Automatic detection and classification of Aadhaar, PAN, name, DOB, email, phone numbers",
                "99.7% accuracy with machine learning models trained on Indian data patterns",
                "Scan across databases, files, APIs, and cloud platforms simultaneously",
                "Classification complete in minutes, not weeks—with detailed categorization reports"
            ],
            color: "from-[#6366f1] to-[#8b5cf6]"
        },
        {
            icon: Map,
            title: "Map Your Data with Automated Lineage Tracking",
            features: [
                "Map all personal data you collect to its source, purpose, and downstream usage",
                "Get detailed data lineage maps for complete visibility on data flows across systems",
                "Track data movement across 12+ system integrations in real-time",
                "Identify shadow IT and unauthorized data transfers automatically",
                "Visual data flow diagrams for compliance audits and risk assessments"
            ],
            color: "from-[#3b82f6] to-[#2563eb]"
        },
        {
            icon: Trash2,
            title: "Automate Data Deletion Per DPDP Requirements",
            features: [
                "Define data retention policies for different data types and processing purposes",
                "Automate deletion of user data when it's no longer necessary for original purpose",
                "Compliance with DPDP 1-year retention limits and legal hold requirements",
                "Scheduled deletion with verification and audit trails for every action",
                "Real-time alerts for data approaching retention limits across all systems"
            ],
            color: "from-[#14b8a6] to-[#0d9488]"
        }
    ];

    const dataCategories = [
        { name: "Personal Identifiers", count: "1,247", icon: Database },
        { name: "Financial Data", count: "689", icon: Lock },
        { name: "Aadhaar/PAN", count: "423", icon: FolderSearch },
        { name: "Health Records", count: "156", icon: BarChart3 }
    ];

    const benefits = [
        {
            icon: CheckCircle2,
            title: "Complete Visibility",
            description: "Full transparency into where personal data resides and how it flows"
        },
        {
            icon: Clock,
            title: "Automated Compliance",
            description: "Set policies once, enforce continuously across all systems"
        },
        {
            icon: Zap,
            title: "Fast Discovery",
            description: "Scan millions of records in minutes with AI-powered classification"
        },
        {
            icon: Search,
            title: "Risk Detection",
            description: "Identify unauthorized data storage and shadow IT automatically"
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#14b8a6]/10 border border-[#14b8a6]/20 rounded-full mb-6">
                                <Database className="w-4 h-4 text-[#14b8a6]" />
                                <span className="text-sm font-semibold text-[#14b8a6]">DATA LIFECYCLE MANAGEMENT</span>
                            </div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#152645] mb-6 leading-tight">
                                Automate Identification,{" "}
                                <span className="bg-gradient-to-r from-[#14b8a6] to-[#0d9488] bg-clip-text text-transparent">
                                    Classification & Deletion
                                </span>{" "}
                                of Personal Data
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Run data discovery across structured and unstructured data. Map data flows with automated lineage tracking. Delete data automatically after it has served its purpose or when retention period expires.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Start Data Discovery
                                </Link>
                                <button className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-[#152645] font-semibold rounded-xl transition-all flex items-center justify-center gap-2 border border-gray-300 cursor-pointer">
                                    View 2-Min Demo
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
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-gray-500">Data Discovery Progress</span>
                                        <span className="text-2xl font-bold text-[#14b8a6]">75%</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full w-3/4 bg-gradient-to-r from-[#14b8a6] to-[#0d9488]"></div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    {dataCategories.map((cat, idx) => (
                                        <div key={idx} className="p-4 bg-gray-100 rounded-xl">
                                            <cat.icon className="w-6 h-6 text-[#14b8a6] mb-2" />
                                            <p className="text-gray-400 text-xs mb-1">{cat.name}</p>
                                            <p className="text-[#152645] font-bold text-lg">{cat.count} found</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-4 bg-gradient-to-r from-[#14b8a6]/10 to-[#6366f1]/10 rounded-xl border border-[#14b8a6]/20">
                                    <p className="text-[#152645] text-sm font-semibold mb-2">✨ AI-Powered Discovery</p>
                                    <p className="text-gray-400 text-xs">2,515 Total PII • 99.7% Accuracy • Real-time Mapping</p>
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
                            3 Modules for Complete Data Control
                        </h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                            Discover, map, and manage your data lifecycle—from ingestion to deletion
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
                                                <CheckCircle2 className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-0.5" />
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
                                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-[#14b8a6]/50 transition-all text-center"
                            >
                                <benefit.icon className="w-10 h-10 text-[#14b8a6] mx-auto mb-4" />
                                <h4 className="text-lg font-bold text-[#152645] mb-2">{benefit.title}</h4>
                                <p className="text-gray-400 text-sm">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/*  */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-[#14b8a6] via-[#0d9488] to-[#14b8a6] rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                        
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Start Your Data Discovery Journey Today
                            </h2>
                            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                Scan your first 10,000 records free. Get complete visibility into your personal data landscape in minutes.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-white hover:bg-gray-100 text-[#152645] font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Get Started Free
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
