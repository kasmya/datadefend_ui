"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Cookie, Zap, Globe2, Settings, Monitor, ArrowRight, Calendar, BarChart3, Shield, Code2 } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export default function CookieConsentPage() {
    const implementationSteps = [
        {
            step: "1",
            title: "Configure Cookie Banner",
            description: "Set up cookie banner language, permissions, and categories via the DataDefend Dashboard. Choose from 22 Indian languages and customize appearance to match your brand.",
            icon: Settings
        },
        {
            step: "2",
            title: "Add Script to Website",
            description: "Simply add the DataDefend Cookie Profile ID to your website footer. Takes just minutes with our lightweight, fast-loading script that won't slow down your site.",
            icon: Code2
        },
        {
            step: "3",
            title: "Go Live with DPDP-Compliant Collection",
            description: "Your website now has DPDP-compliant cookie consent collection with minimal user friction. Automatic categorization of essential, functional, analytics, and marketing cookies.",
            icon: Monitor
        },
        {
            step: "4",
            title: "Monitor & Analyze",
            description: "Track cookie consent data and analytics via the DataDefend Dashboard. Get insights on acceptance rates, user preferences, and compliance trends across your properties.",
            icon: BarChart3
        }
    ];

    const keyFeatures = [
        {
            icon: Zap,
            title: "Fast, Light-weight, Low Latency",
            features: [
                "Cookie banner loads in <50ms with minimal impact on page performance",
                "Optimized script size under 15KB for faster page loads and better SEO",
                "CDN-distributed globally for consistent low-latency experience worldwide",
                "Asynchronous loading ensures banner doesn't block page rendering",
                "Cached on user devices for repeat visits with zero load time"
            ],
            color: "from-[#f59e0b] to-[#d97706]"
        },
        {
            icon: Globe2,
            title: "Multi-language Support & Customization",
            features: [
                "Support for 22 Indian regional languages for inclusive user experience",
                "Fully customizable banner design to match your brand colors and style",
                "Granular cookie categories: Essential, Functional, Analytics, Marketing",
                "Pre-built templates for common use cases with one-click deployment",
                "Mobile-optimized design for seamless experience across all devices"
            ],
            color: "from-[#6366f1] to-[#8b5cf6]"
        },
        {
            icon: Shield,
            title: "DPDP-Compliant Storage & Reporting",
            features: [
                "Every cookie consent stored as MeitY-compliant consent artefact",
                "Immutable audit trails with timestamp, IP address, and user agent",
                "Real-time consent check API for verification before cookie placement",
                "Automatic consent expiry and renewal workflows per retention policies",
                "Exportable compliance reports for DPB audits and regulatory reviews"
            ],
            color: "from-[#14b8a6] to-[#0d9488]"
        }
    ];

    const pricingFeatures = [
        { icon: CheckCircle2, text: "10,000 cookie consents per month" },
        { icon: CheckCircle2, text: "Zero storage charges" },
        { icon: CheckCircle2, text: "Zero annual license fee" },
        { icon: CheckCircle2, text: "Unlimited consent checks via API" },
        { icon: CheckCircle2, text: "Multi-language support included" }
    ];

    const benefits = [
        {
            icon: Zap,
            title: "Instant Setup",
            description: "Go live in minutes with copy-paste integration"
        },
        {
            icon: Cookie,
            title: "User-Friendly",
            description: "Minimal clicks for users, maximum compliance for you"
        },
        {
            icon: BarChart3,
            title: "Analytics Dashboard",
            description: "Track acceptance rates and user preferences in real-time"
        },
        {
            icon: Shield,
            title: "DPDP Compliant",
            description: "Built for Indian data protection regulations"
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-full mb-6">
                                <Cookie className="w-4 h-4 text-[#f59e0b]" />
                                <span className="text-sm font-semibold text-[#f59e0b]">COOKIE CONSENT</span>
                            </div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#152645] mb-6 leading-tight">
                                Deploy a Fast,{" "}
                                <span className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] bg-clip-text text-transparent">
                                    Low-Latency
                                </span>{" "}
                                Cookie Banner on Your Website
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                DPDP is here—and you need to collect cookie consent from website visitors. Deploy a compliant but non-intrusive cookie banner across your websites in minutes.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Get Started Free
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
                                    <h3 className="text-[#152645] font-bold text-lg mb-4">Cookie Collection Metrics</h3>
                                </div>
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-xl">
                                        <span className="text-gray-500">Acceptance Rate</span>
                                        <span className="text-2xl font-bold text-[#14b8a6]">87%</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-xl">
                                        <span className="text-gray-500">Avg Load Time</span>
                                        <span className="text-2xl font-bold text-[#f59e0b]">42ms</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-xl">
                                        <span className="text-gray-500">Monthly Consents</span>
                                        <span className="text-2xl font-bold text-[#6366f1]">8,234</span>
                                    </div>
                                </div>
                                <div className="p-4 bg-gradient-to-r from-[#f59e0b]/10 to-[#d97706]/10 rounded-xl border border-[#f59e0b]/20">
                                    <p className="text-[#152645] text-sm font-semibold mb-2">✨ Simple & Fair Pricing</p>
                                    <p className="text-gray-400 text-xs">10,000 consents/month free • No storage fees • No hidden costs</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Implementation Steps */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#152645] mb-4">
                            Go Live in 4 Simple Steps
                        </h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                            From configuration to monitoring—deploy DPDP-compliant cookies in minutes
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

            {/* Key Features Section */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="space-y-12">
                        {keyFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12 hover:border-gray-300 transition-all"
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
                                            <div key={idx} className="flex items-start gap-3 p-3 bg-gray-100 rounded-xl hover:bg-gray-50 transition-all">
                                                <CheckCircle2 className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" />
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

            {/* Pricing CTA Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-[#f59e0b] via-[#d97706] to-[#f59e0b] rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                        
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                10,000 Cookie Consents/Month—₹0 Forever
                            </h2>
                            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                Get started with our irresistible offer. Perfect for live pilots and small-to-medium websites.
                            </p>
                            <div className="grid md:grid-cols-5 gap-4 mb-8 max-w-3xl mx-auto">
                                {pricingFeatures.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-left">
                                        <feature.icon className="w-5 h-5 text-white flex-shrink-0" />
                                        <span className="text-white/90 text-sm">{feature.text}</span>
                                    </div>
                                ))}
                            </div>
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
