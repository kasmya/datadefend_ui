"use client";

import React from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Heart, Activity, FileText, Shield, Check, Clock, ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const challenges = [
    { icon: Activity, title: "Patient Data Privacy", desc: "Protecting sensitive health records and medical history" },
    { icon: FileText, title: "Clinical Trial Compliance", desc: "Managing consent for research and drug trials" },
    { icon: Shield, title: "Multi-stakeholder Data", desc: "Doctors, labs, pharmacies - complex data sharing" },
    { icon: Clock, title: "Real-time Access", desc: "Emergency access while maintaining consent records" }
];

const solutions = [
    {
        title: "Patient Consent Management",
        desc: "Complete consent lifecycle for healthcare services",
        features: ["Treatment consent tracking", "Research participation consent", "Data sharing with specialists", "Emergency access protocols"]
    },
    {
        title: "Clinical Trial Compliance",
        desc: "DPDP-compliant consent for pharmaceutical research",
        features: ["Informed consent documentation", "Participant withdrawal management", "Multi-site coordination", "Regulatory audit trails"]
    },
    {
        title: "Health Data Mapping",
        desc: "Discover and classify health data across systems",
        features: ["EMR/EHR integration", "Lab system scanning", "Pharmacy data mapping", "Diagnostic report classification"]
    },
    {
        title: "Third-party Integration",
        desc: "Manage consent with labs, pharmacies, and specialists",
        features: ["Lab consent workflows", "Pharmacy data sharing", "Insurance claim consent", "Telemedicine platforms"]
    }
];

const stats = [
    { value: "100+", label: "Hospitals" },
    { value: "5M+", label: "Patient Records" },
    { value: "99.99%", label: "Data Security" },
    { value: "<50ms", label: "Access Time" }
];

export default function HealthcarePage() {
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
                                <Heart className="w-4 h-4 text-[#3b82f6]" />
                                <span className="text-sm font-semibold text-white">Healthcare Solutions</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                DPDP Compliance for Healthcare & Pharma
                            </h1>
                            <p className="text-xl text-white/80 mb-8">
                                Protect patient data, ensure clinical trial compliance, and manage health records with DataDefend's healthcare-focused DPDP solution.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Book Healthcare Demo
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
                            Healthcare Data Protection Challenges
                        </h2>
                        <p className="text-lg text-gray-600">
                            Unique compliance requirements for medical and pharmaceutical data
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
                            Complete Healthcare Compliance Suite
                        </h2>
                        <p className="text-lg text-gray-600">
                            From patient consent to clinical trials, we've got you covered
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

            {/* CTA */}
            <section className="py-20 px-4 bg-gradient-to-br from-[#152645] via-[#0e488b] to-[#152645]">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Protect Patient Data with Confidence
                    </h2>
                    <p className="text-xl text-white/80 mb-8">
                        Join 100+ hospitals and healthcare providers using DataDefend
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold rounded-xl transition-all shadow-lg cursor-pointer"
                    >
                        Schedule Healthcare Consultation
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
