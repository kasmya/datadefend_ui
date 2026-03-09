"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Shield, Target, Users, Award, TrendingUp, Heart, CheckCircle, ArrowRight, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const values = [
    { icon: Shield, title: "Privacy First", desc: "We believe data privacy is a fundamental right, not a checkbox" },
    { icon: Target, title: "Customer Success", desc: "Your compliance success is our only metric that matters" },
    { icon: Users, title: "Transparency", desc: "Clear pricing, honest timelines, no hidden surprises" },
    { icon: Heart, title: "Innovation", desc: "Continuous improvement to stay ahead of regulations" }
];

const team = [
    {
        name: "Rajesh Verma",
        role: "Founder & CEO",
        bio: "Former CISO with 15+ years in cybersecurity and compliance",
        linkedin: "#"
    },
    {
        name: "Priya Sharma",
        role: "Chief Product Officer",
        bio: "Ex-Product Lead at major tech company, expert in privacy tech",
        linkedin: "#"
    },
    {
        name: "Amit Patel",
        role: "Chief Technology Officer",
        bio: "Built scalable platforms for millions of users",
        linkedin: "#"
    },
    {
        name: "Neha Gupta",
        role: "VP Customer Success",
        bio: "Passionate about making compliance simple for everyone",
        linkedin: "#"
    }
];

const milestones = [
    { year: "2023", event: "DataDefend founded in Gurugram" },
    { year: "2024", event: "Launched India's first AI-powered DPDP platform" },
    { year: "2025", event: "Crossed 500+ enterprise customers" },
    { year: "2026", event: "Recognized as top 3 in MeitY Code for Consent" }
];

const stats = [
    { value: "500+", label: "Enterprise Customers" },
    { value: "10M+", label: "Consents Managed/Month" },
    { value: "99.96%", label: "Platform Uptime" },
    { value: "15+", label: "Industries Served" }
];

export default function AboutPage() {
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
                                <Shield className="w-4 h-4 text-[#3b82f6]" />
                                <span className="text-sm font-semibold text-white">About DataDefend</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Building India's Privacy-First Future
                            </h1>
                            <p className="text-xl text-white/80 mb-8">
                                We're on a mission to make DPDP compliance simple, automated, and accessible for every Indian enterprise.
                            </p>
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

            {/* Story Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-6">
                            Our Story
                        </h2>
                        <div className="space-y-4 text-lg text-gray-700 leading-relaxed text-left">
                            <p>
                                DataDefend was born from a simple observation: with the Digital Personal Data Protection Act 2023, India was about to face its biggest compliance challenge yet. Companies needed help, but existing solutions were either too complex, too expensive, or built for Western markets.
                            </p>
                            <p>
                                In 2023, we brought together a team of cybersecurity experts, privacy lawyers, and product engineers to build something different—a platform designed specifically for Indian enterprises, with Indian regulations, Indian languages, and Indian workflows in mind.
                            </p>
                            <p>
                                Today, DataDefend powers DPDP compliance for 500+ enterprises across 15 industries. From startups to Fortune 500 companies, from fintech to healthcare, we're helping India build a privacy-first digital economy.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-4">
                            Our Values
                        </h2>
                        <p className="text-lg text-gray-600">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0e488b] to-[#152645] flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#152645] mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">
                                    {value.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 bg-gradient-to-br from-[#152645] via-[#0e488b] to-[#152645]">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Join Us in Building India's Privacy Future
                    </h2>
                    <p className="text-xl text-white/80 mb-8">
                        Whether you're looking for a solution or want to join our team
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold rounded-xl transition-all shadow-lg cursor-pointer inline-flex items-center justify-center gap-2"
                        >
                            <CheckCircle className="w-5 h-5" />
                            Get Started
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all border border-white/20 cursor-pointer inline-flex items-center justify-center gap-2"
                        >
                            Contact Us
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
