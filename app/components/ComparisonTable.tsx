"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisonData = [
    { feature: "AI-Powered PII Discovery", datadefend: true, others: false },
    { feature: "Automated Data Mapping", datadefend: true, others: false },
    { feature: "DPDPA-Ready Templates", datadefend: true, others: false },
    { feature: "72-Hour Breach Reporting", datadefend: true, others: true },
    { feature: "Built-in Consent SDK", datadefend: true, others: false },
    { feature: "Indian Data Residency", datadefend: true, others: false },
    { feature: "Vendor Risk Scoring", datadefend: true, others: true },
    { feature: "Real-Time Compliance Dashboards", datadefend: true, others: false },
];

export function ComparisonTable() {
    return (
        <section className="py-24 bg-primary-light/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full mb-4">
                        Why DataDefend?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                        Built Different. <span className="text-accent">Built Better.</span>
                    </h2>
                    <p className="text-lg text-text-muted">
                        See how DataDefend stacks up against traditional privacy tools.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
                        {/* Header */}
                        <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-100">
                            <div className="p-4 text-sm font-semibold text-primary">Feature</div>
                            <div className="p-4 text-sm font-semibold text-center text-accent border-x border-gray-100 bg-accent/5">
                                DataDefend
                            </div>
                            <div className="p-4 text-sm font-semibold text-center text-gray-500">Others</div>
                        </div>

                        {/* Rows */}
                        {comparisonData.map((row, index) => (
                            <div
                                key={row.feature}
                                className={`grid grid-cols-3 ${index !== comparisonData.length - 1 ? "border-b border-gray-50" : ""}`}
                            >
                                <div className="p-4 text-sm text-primary font-medium">{row.feature}</div>
                                <div className="p-4 flex justify-center border-x border-gray-50 bg-accent/5">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                        <Check className="w-4 h-4 text-green-600" />
                                    </div>
                                </div>
                                <div className="p-4 flex justify-center">
                                    {row.others ? (
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                            <Check className="w-4 h-4 text-green-600" />
                                        </div>
                                    ) : (
                                        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                                            <X className="w-4 h-4 text-gray-400" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
