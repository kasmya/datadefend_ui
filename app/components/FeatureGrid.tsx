"use client";

import React from "react";
import {
    FileCheck,
    Search,
    UserCog,
    ShieldAlert,
    BellRing,
    ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Universal Consent Manager",
        description: "Collect, track, and prove consent across Web, App, and WhatsApp with granular preference centers.",
        icon: FileCheck,
        colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    },
    {
        title: "AI Data Discovery",
        description: "Automatically scan and classify PII across your entire cloud estate in real-time.",
        icon: Search,
        colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    },
    {
        title: "DSAR Automation",
        description: "Respond to 'Right to Access' & 'Right to Erasure' requests in seconds, not days.",
        icon: UserCog,
        colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    },
    {
        title: "Vendor Risk Scoring",
        description: "Assess third-party processors with AI-driven risk questionnaires and continuous monitoring.",
        icon: ShieldAlert,
        colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    },
    {
        title: "Breach Notifications",
        description: "72-hour incident reporting workflows tailored for DPDPA & CERT-In requirements.",
        icon: BellRing,
        colSpan: "col-span-1 md:col-span-3 lg:col-span-3",
    },
];

export function FeatureGrid() {
    return (
        <section className="py-24 relative overflow-hidden bg-primary-light/30" id="platform">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                        The Complete Compliance Operating System
                    </h2>
                    <p className="text-lg text-text-muted">
                        Replace fragmented tools with a unified platform designed for the DPDPA lifecycle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${feature.colSpan} group relative rounded-2xl border border-gray-100 bg-white p-8 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-1`}
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                                <feature.icon className="w-24 h-24 text-accent" />
                            </div>

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                    <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-6 text-accent">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                                    <p className="text-text-muted leading-relaxed">{feature.description}</p>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-50 flex items-center text-accent font-semibold text-sm gap-2 opacity-100 group-hover:gap-3 transition-all">
                                    Learn more <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
