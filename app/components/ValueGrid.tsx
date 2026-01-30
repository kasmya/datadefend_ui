"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FileText,
    Bell,
    ShieldCheck,
    Clock,
    Globe,
    Lock
} from "lucide-react";

const values = [
    {
        icon: FileText,
        title: "Audit-Ready Reports",
        description: "Generate compliance reports for regulators in one click."
    },
    {
        icon: Bell,
        title: "Real-Time Alerts",
        description: "Get notified instantly when risks or breaches are detected."
    },
    {
        icon: ShieldCheck,
        title: "Security-First Architecture",
        description: "SOC 2 Type II and ISO 27001 certified infrastructure."
    },
    {
        icon: Clock,
        title: "Regulatory Updates",
        description: "Auto-updates for DPDPA amendments and new guidelines."
    },
    {
        icon: Globe,
        title: "Multi-Entity Support",
        description: "Manage compliance across subsidiaries from one dashboard."
    },
    {
        icon: Lock,
        title: "Zero-Trust Model",
        description: "End-to-end encryption with no data leaving Indian shores."
    },
];

export function ValueGrid() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                        Enterprise-Grade Compliance, <span className="text-accent">Simplified</span>
                    </h2>
                    <p className="text-lg text-text-muted">
                        Everything you need to stay ahead of regulators and build customer trust.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-6 rounded-xl border border-gray-100 bg-white hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                <value.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                            <p className="text-sm text-text-muted leading-relaxed">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
