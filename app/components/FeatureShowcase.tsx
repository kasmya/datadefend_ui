"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/Button";

interface FeatureShowcaseItem {
    title: string;
    subtitle: string;
    description: string;
    bullets: string[];
    image?: React.ReactNode;
}

const features: FeatureShowcaseItem[] = [
    {
        title: "AI-Powered Data Discovery",
        subtitle: "Find Every Byte of Sensitive Data",
        description: "Automatically scan databases, file systems, and cloud storage to discover PII, financial data, and health records with 99% accuracy.",
        bullets: [
            "Aadhaar, PAN, Phone detection",
            "Multi-cloud support (AWS, Azure, GCP)",
            "Real-time data mapping",
            "Shadow IT discovery"
        ]
    },
    {
        title: "Universal Consent Management",
        subtitle: "One Platform, Every Touchpoint",
        description: "Capture, store, and honor consent across web, mobile, and offline channels with legally compliant workflows.",
        bullets: [
            "Cookie banners & preference centers",
            "Mobile SDK for in-app consent",
            "Downstream sync to MarTech",
            "Durable audit logs"
        ]
    },
    {
        title: "Automated DSAR Fulfillment",
        subtitle: "From Request to Response in Minutes",
        description: "Reduce manual effort by 90% with automated identity verification, data retrieval, and secure delivery.",
        bullets: [
            "Self-service portal for data principals",
            "AI-powered redaction",
            "Configurable SLA tracking",
            "Encrypted data delivery"
        ]
    }
];

export function FeatureShowcase() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full mb-4">
                        Platform Deep Dive
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                        See How DataDefend <span className="text-accent">Works</span>
                    </h2>
                    <p className="text-lg text-text-muted">
                        Every module is designed for DPDPA compliance from the ground up.
                    </p>
                </div>

                <div className="space-y-24">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}
                        >
                            {/* Text Content */}
                            <div className="flex-1 max-w-xl">
                                <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-2 block">
                                    {feature.subtitle}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-text-muted mb-6 leading-relaxed">
                                    {feature.description}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {feature.bullets.map((bullet) => (
                                        <li key={bullet} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                            <span className="text-text-muted">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button variant="ghost" className="group text-accent hover:text-accent/80 pl-0">
                                    Learn more about {feature.title.split(" ")[0]}
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>

                            {/* Image/Mockup */}
                            <div className="flex-1 w-full">
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 via-purple-500/5 to-transparent rounded-3xl blur-xl" />
                                    <div className="relative bg-gray-50 rounded-2xl border border-gray-100 aspect-[4/3] flex items-center justify-center overflow-hidden shadow-lg">
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px]" />
                                        <div className="relative z-10 text-center p-8">
                                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
                                                <CheckCircle2 className="w-8 h-8 text-accent" />
                                            </div>
                                            <p className="text-sm font-semibold text-primary">{feature.title}</p>
                                            <p className="text-xs text-text-muted mt-1">Interactive Demo Coming Soon</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
