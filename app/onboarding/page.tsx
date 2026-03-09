"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import {
    Calendar,
    CheckCircle,
    Phone,
    Users,
    Building2,
    Briefcase,
    ArrowRight,
    Target,
    Zap,
    LayoutDashboard,
    Shield,
    FileText,
    TrendingUp
} from "lucide-react";
import Link from "next/link";

const onboardingSteps = [
    {
        step: 1,
        title: "Discovery & Alignment",
        duration: "Week 1",
        description: "We start with a deep dive into your organization's specific needs, tech stack, and compliance goals.",
        items: [
            "Kick-off meeting with key stakeholders",
            "Comprehensive compliance posture assessment",
            "Technical infrastructure review",
            "Defining success metrics and KPIs"
        ]
    },
    {
        step: 2,
        title: "Strategy & Customization",
        duration: "Week 2",
        description: "Our experts design a tailored implementation plan that fits seamlessly into your existing workflows.",
        items: [
            "Custom implementation roadmap creation",
            "Data mapping strategy formulation",
            "Integration planning with existing tools",
            "Resource allocation and timeline finalization"
        ]
    },
    {
        step: 3,
        title: "Technical Implementation",
        duration: "Week 3-4",
        description: "We handle the heavy lifting of setting up the platform, integrating data sources, and configuring workflows.",
        items: [
            "Platform deployment and configuration",
            "API integrations and data connectors setup",
            "Automated discovery and classification launch",
            "Security and access control configuration"
        ]
    },
    {
        step: 4,
        title: "Training & Empowerment",
        duration: "Week 5",
        description: "We ensure your team is fully equipped to leverage the platform's power through targeted training sessions.",
        items: [
            "Role-specific training workshops (Legal, Tech, Admin)",
            "Best practices and playbook sharing",
            "Q&A sessions and hands-on labs",
            "Access to comprehensive knowledge base"
        ]
    },
    {
        step: 5,
        title: "Go-Live & Optimization",
        duration: "Week 6+",
        description: "Launch with confidence, backed by our dedicated support and continuous optimization reviews.",
        items: [
            "Supported go-live event",
            "Post-launch performance review",
            "Ongoing customer success check-ins",
            "Continuous compliance monitoring setup"
        ]
    }
];

const enterpriseConsultation = [
    {
        role: "CFO",
        focus: "Risk & ROI",
        description: "We align compliance strategies with financial risk mitigation and potential ROI from improved data efficiency.",
        icon: TrendingUp
    },
    {
        role: "CIO / CTO",
        focus: "Tech & Security",
        description: "Deep dive into technical architecture, security protocols, API scalability, and zero-trust implementation.",
        icon: Shield
    },
    {
        role: "CEO",
        focus: "Vision & Trust",
        description: "Strategic planning on how data privacy builds brand trust, customer loyalty, and long-term business value.",
        icon: Target
    },
    {
        role: "Legal Head",
        focus: "Regulatory Safety",
        description: "Detailed mapping of DPDPA clauses to platform controls to ensure 100% audit readiness and legal safety.",
        icon: FileText
    }
];

export default function OnboardingPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 bg-[#152645] relative overflow-hidden">
                {/* Background blobes */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0e488b] rounded-full blur-[120px] opacity-30 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[100px] opacity-10 pointer-events-none" />

                <div className="container mx-auto max-w-7xl relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-1.5 text-sm font-bold tracking-wide text-blue-300 bg-blue-500/10 rounded-full mb-6 border border-blue-400/20"
                    >
                        UNMATCHED SUPPORT
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                    >
                        A Partnership, <br />
                        <span className="text-[#a4d4ff]">Not Just a Platform</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10"
                    >
                        From rapid deployment to strategic enterprise consulting, we are with you at every step of your DPDPA compliance journey.
                    </motion.p>
                </div>
            </section>

            {/* Standard Onboarding Journey */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-4">
                            Your Path to Compliance Excellence
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our proven onboarding methodology ensures a smooth transition and rapid time-to-value for organizations of all sizes.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0e488b] via-blue-500 to-transparent -translate-x-1/2" />

                        <div className="space-y-12">
                            {onboardingSteps.map((step, index) => (
                                <motion.div
                                    key={step.step}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Content Card */}
                                    <div className={`flex-1 w-full ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                                            <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                                <span className="px-4 py-1.5 bg-[#e0f2fe] text-[#0e488b] text-sm font-bold rounded-full">
                                                    {step.duration}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-[#152645] mb-3 group-hover:text-[#0e488b] transition-colors">{step.title}</h3>
                                            <p className="text-gray-600 mb-6">{step.description}</p>
                                            <div className={`flex flex-col gap-2 ${index % 2 === 0 ? 'items-end' : 'items-start'}`}>
                                                {step.items.map((item, i) => (
                                                    <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                                                        {index % 2 === 0 && <span>{item}</span>}
                                                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                        {index % 2 !== 0 && <span>{item}</span>}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step Number Circle */}
                                    <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#0e488b] to-[#152645] rounded-full flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-lg border-4 border-white shrink-0">
                                        {step.step}
                                    </div>

                                    {/* Empty space for alternating layout */}
                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Enterprise Consultation Section */}
            <section className="py-24 px-4 bg-[#152645] text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                        <div className="flex-1">
                            <span className="text-blue-300 font-bold tracking-wider text-sm uppercase mb-2 block">For Large Enterprises</span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                Strategic Executive <br /> Consultation Month
                            </h2>
                            <p className="text-lg text-white/80 leading-relaxed">
                                For large enterprises, compliance is not just a tool—it's a strategic initiative.
                                We dedicate an entire initial month to high-level planning with your C-Suite to ensure
                                DPDPA alignment with your broader business goals.
                            </p>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl max-w-md">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-600 p-3 rounded-lg text-white">
                                        <Building2 className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Executive Alignment</h4>
                                        <p className="text-white/70 text-sm">We don't just speak code; we speak business. Our specialized team interfaces directly with your leadership.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {enterpriseConsultation.map((consult, index) => (
                            <motion.div
                                key={consult.role}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 text-white">
                                    <consult.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">{consult.role}</h3>
                                <span className="text-xs font-semibold text-blue-300 uppercase tracking-wide mb-3 block">{consult.focus}</span>
                                <p className="text-sm text-white/70">{consult.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-6">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-xl text-gray-600 mb-10">
                        Whether you need a rapid rollout or a strategic enterprise consultation, DataDefend is ready.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-lg hover:scale-105"
                        >
                            <Phone className="w-5 h-5" />
                            Book Consultation
                        </Link>
                        <Link
                            href="/platform"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-[#152645] border-2 border-[#152645] font-bold rounded-full transition-all hover:scale-105"
                        >
                            <LayoutDashboard className="w-5 h-5" />
                            Explore Platform
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
