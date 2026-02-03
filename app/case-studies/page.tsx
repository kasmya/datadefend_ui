"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Building2, TrendingUp, Clock, Users, ArrowRight, Download, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const caseStudies = [
    {
        industry: "Banking & Finance",
        company: "Leading NBFC",
        logo: "🏦",
        challenge: "Managing consent for 10M+ customers across 50+ branches with real-time digital lending compliance.",
        solution: "Deployed DataDefend's BFSI solution with LSP-compliant flows, Aadhaar e-KYC integration, and automated consent verification.",
        results: [
            { metric: "10M+", label: "Customers Protected" },
            { metric: "2 weeks", label: "Go-live Time" },
            { metric: "40%", label: "Faster Onboarding" },
            { metric: "100%", label: "RBI Compliance" }
        ],
        testimonial: "DataDefend transformed our lending compliance. What used to take months now happens in real-time.",
        author: "Amit Kumar",
        role: "Chief Compliance Officer",
        downloadUrl: "/case-studies/nbfc-case-study.pdf"
    },
    {
        industry: "Healthcare",
        company: "Multi-specialty Hospital Chain",
        logo: "🏥",
        challenge: "Protecting patient data across 20 hospitals, managing clinical trial consents, and ensuring DPDP compliance for 5M+ patient records.",
        solution: "Implemented patient consent lifecycle management, EMR/EHR integration, and automated DSAR workflows.",
        results: [
            { metric: "5M+", label: "Patient Records" },
            { metric: "20", label: "Hospitals" },
            { metric: "99.99%", label: "Data Security" },
            { metric: "50ms", label: "Access Time" }
        ],
        testimonial: "DataDefend gave us the confidence to digitize patient records without compromising privacy.",
        author: "Dr. Priya Sharma",
        role: "Chief Medical Officer",
        downloadUrl: "/case-studies/healthcare-case-study.pdf"
    },
    {
        industry: "E-commerce",
        company: "Leading Online Marketplace",
        logo: "🛒",
        challenge: "Collecting consent from 50M+ customers without impacting checkout conversion, managing vendor data sharing.",
        solution: "Integrated checkout consent flows, marketplace vendor coordination, and automated marketing consent management.",
        results: [
            { metric: "50M+", label: "Customers" },
            { metric: "2.3%", label: "Conv. Impact" },
            { metric: "99.9%", label: "Uptime" },
            { metric: "500+", label: "Vendors" }
        ],
        testimonial: "We maintained our conversion rate while achieving full DPDP compliance. That's the DataDefend difference.",
        author: "Rahul Mehta",
        role: "Chief Technology Officer",
        downloadUrl: "/case-studies/ecommerce-case-study.pdf"
    }
];

export default function CaseStudiesPage() {
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
                            <CheckCircle className="w-4 h-4 text-[#f59e0b]" />
                            <span className="text-sm font-semibold text-white">Customer Success Stories</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Real Results from Real Companies
                        </h1>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto">
                            See how leading enterprises across India achieved DPDP compliance with DataDefend
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="space-y-16">
                        {caseStudies.map((study, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200"
                            >
                                {/* Header */}
                                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="text-5xl">{study.logo}</div>
                                        <div>
                                            <div className="text-sm font-semibold text-[#f59e0b] mb-1">
                                                {study.industry}
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold text-[#152645]">
                                                {study.company}
                                            </h2>
                                        </div>
                                    </div>
                                    <a
                                        href={study.downloadUrl}
                                        className="px-6 py-3 bg-[#0e488b] hover:bg-[#152645] text-white font-semibold rounded-xl transition-all flex items-center gap-2 cursor-pointer"
                                    >
                                        <Download className="w-4 h-4" />
                                        Download PDF
                                    </a>
                                </div>

                                {/* Content */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h3 className="text-lg font-bold text-[#152645] mb-3">
                                            The Challenge
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            {study.challenge}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#152645] mb-3">
                                            The Solution
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            {study.solution}
                                        </p>
                                    </div>
                                </div>

                                {/* Results */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 mb-8">
                                    <h3 className="text-lg font-bold text-[#152645] mb-6 text-center">
                                        Results Achieved
                                    </h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        {study.results.map((result, rIdx) => (
                                            <div key={rIdx} className="text-center">
                                                <div className="text-3xl md:text-4xl font-bold text-[#0e488b] mb-2">
                                                    {result.metric}
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    {result.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Testimonial */}
                                <div className="bg-gradient-to-br from-[#152645] to-[#0e488b] rounded-2xl p-6 md:p-8 text-white">
                                    <div className="flex items-start gap-4">
                                        <div className="text-4xl opacity-50">"</div>
                                        <div className="flex-1">
                                            <p className="text-lg mb-4 leading-relaxed">
                                                {study.testimonial}
                                            </p>
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl">
                                                    {study.logo}
                                                </div>
                                                <div>
                                                    <div className="font-bold">{study.author}</div>
                                                    <div className="text-sm text-white/70">{study.role}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-4">
                            Trusted by Industry Leaders
                        </h2>
                        <p className="text-lg text-gray-600">
                            Join 500+ enterprises protecting customer data with DataDefend
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-[#0e488b] mb-2">500+</div>
                            <div className="text-gray-600">Companies</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-[#0e488b] mb-2">10M+</div>
                            <div className="text-gray-600">Consents/Month</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-[#0e488b] mb-2">99.96%</div>
                            <div className="text-gray-600">Uptime</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-[#0e488b] mb-2">15+</div>
                            <div className="text-gray-600">Industries</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 bg-gradient-to-br from-[#152645] via-[#0e488b] to-[#152645]">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Write Your Success Story?
                    </h2>
                    <p className="text-xl text-white/80 mb-8">
                        Let's discuss how DataDefend can transform your compliance journey
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold rounded-xl transition-all shadow-lg cursor-pointer"
                    >
                        Start Your Journey
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
