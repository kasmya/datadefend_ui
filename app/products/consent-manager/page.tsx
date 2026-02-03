"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Clock, Zap, Languages, FileCheck, Database, ArrowRight, Calendar, Webhook, Globe2, Sparkles } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export default function ConsentManagerPage() {
    const keyFeatures = [
        {
            icon: Languages,
            title: "Collect Consent with Minimal Drop-offs",
            features: [
                "User-friendly consent modals that load instantly with minimal latency",
                "Simplified consent flow with no unnecessary clicks for end-users",
                "Support for 22 Indian regional languages for inclusive compliance",
                "Mobile-optimized banners for seamless experience across devices",
                "Pre-populated consent categories based on industry best practices"
            ],
            color: "from-[#6366f1] to-[#8b5cf6]"
        },
        {
            icon: Database,
            title: "Store Consent in an Auditable Way",
            features: [
                "Every consent stored as MeitY-compliant consent artefact with clear audit trails",
                "No personal identifiers stored - ensuring privacy by design",
                "Sync consents across business and 3rd party databases with webhooks",
                "Real-time Consent Check API for instant verification",
                "Comprehensive reporting dashboard with exportable audit logs"
            ],
            color: "from-[#f59e0b] to-[#d97706]"
        },
        {
            icon: Shield,
            title: "Manage Consent per DPDP Requirements",
            features: [
                "Self-service privacy center for users to update or withdraw consents easily",
                "Configurable DSR forms with automated workflows and SLA tracking",
                "Automatic deletion instructions sent when consent is withdrawn",
                "Version control for consent policies with timestamped changes",
                "Integration with data lineage for downstream consent propagation"
            ],
            color: "from-[#14b8a6] to-[#0d9488]"
        }
    ];

    const implementationSteps = [
        {
            step: "1",
            title: "Configure in Dashboard",
            description: "Non-tech teams define consent workflows without dev effort. Set up consent categories, purposes, legal basis, and customization—all from the intuitive dashboard.",
            icon: Sparkles
        },
        {
            step: "2",
            title: "Generate Consent Payload",
            description: "Get a simple yet comprehensive consent API payload with all configurations. Our SDK generates ready-to-use code snippets for web, mobile, and server-side integration.",
            icon: FileCheck
        },
        {
            step: "3",
            title: "Integrate & Test",
            description: "Developers plug the payload into app/web flows and test in < 2 days. Our solutions engineers work with you to enable fast go-live with sandbox environments.",
            icon: Zap
        },
        {
            step: "4",
            title: "Go Live & Iterate",
            description: "Make subsequent changes to consent flows without touching integration code. Update policies, languages, and UI directly from the dashboard—no dev cycles needed.",
            icon: ArrowRight
        }
    ];

    const benefits = [
        {
            icon: CheckCircle2,
            title: "99.9% Uptime Guarantee",
            description: "Built on enterprise-grade infrastructure handling lakhs of transactions daily"
        },
        {
            icon: Clock,
            title: "Go Live in < 1 Week",
            description: "Fast implementation with pre-built templates and dedicated support"
        },
        {
            icon: Globe2,
            title: "Multi-channel Support",
            description: "Collect consents across web, mobile app, offline touchpoints seamlessly"
        },
        {
            icon: Webhook,
            title: "Real-time Synchronization",
            description: "Webhook support to sync consent status across your entire tech stack"
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-full mb-4">
                                <Shield className="w-4 h-4 text-[#f59e0b]" />
                                <span className="text-sm font-semibold text-[#f59e0b]">CONSENT MANAGEMENT</span>
                            </div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#152645] mb-4 leading-tight">
                                Go Live with DPDP-Compliant{" "}
                                <span className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] bg-clip-text text-transparent">
                                    Consent Management
                                </span>{" "}
                                in Less Than a Week
                            </h1>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Simplify consent collection, storage, and management across all digital touchpoints. 
                                Build trust with your users while ensuring DPDP compliance with MeitY-compliant consent artefacts.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Get Free Account
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
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-xl">
                                        <span className="text-gray-500">Consent Collections</span>
                                        <span className="text-2xl font-bold text-[#f59e0b]">11,452/min</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-xl">
                                        <span className="text-gray-500">System Uptime</span>
                                        <span className="text-2xl font-bold text-[#14b8a6]">99.96%</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-xl">
                                        <span className="text-gray-500">Avg Response Time</span>
                                        <span className="text-2xl font-bold text-[#6366f1]">&lt;150ms</span>
                                    </div>
                                    <div className="p-4 bg-gradient-to-r from-[#14b8a6]/10 to-[#6366f1]/10 rounded-xl border border-[#14b8a6]/20">
                                        <p className="text-[#152645] text-sm font-semibold mb-2">✨ Enterprise-Grade Infrastructure</p>
                                        <p className="text-gray-400 text-xs">Trusted by 500+ enterprises for mission-critical compliance</p>
                                    </div>
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
                            Complete Consent Lifecycle Management
                        </h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                            From collection to management—handle every aspect of DPDP-compliant consent with ease
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

            {/* Implementation Steps */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#152645] mb-4">
                            Get Started in 4 Simple Steps
                        </h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                            Implementation designed for speed—no complex integrations, no lengthy dev cycles
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {implementationSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:border-gray-300 transition-all group"
                            >
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-[#f59e0b] to-[#d97706] rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                                    {step.step}
                                </div>
                                <step.icon className="w-12 h-12 text-[#f59e0b] mb-6 mt-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold text-[#152645] mb-3">{step.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#f59e0b]/50 transition-all text-center"
                            >
                                <benefit.icon className="w-10 h-10 text-[#f59e0b] mx-auto mb-4" />
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
                                3,000 Consents Per Month—Free Forever
                            </h2>
                            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                Start building DPDP-compliant consent flows today. No credit card required. 
                                Zero hidden fees. Scale when you're ready.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-white hover:bg-gray-100 text-[#152645] font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Get Free Account
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
