"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Segment {
    id: string;
    label: string;
    title: string;
    description: string;
    link: string;
    gridPattern: number[][];
    color: string;
}

const segments: Segment[] = [
    {
        id: "startups",
        label: "FOR STARTUPS",
        title: "First-time Compliance for Startups",
        description: "Deals stall without DPDPA compliance. Every lost week is opportunity cost in revenue, growth, and product momentum.",
        link: "/solutions/startups",
        gridPattern: [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1]],
        color: "#152645",
    },
    {
        id: "mid-market",
        label: "FOR MID-MARKET",
        title: "Continuous Compliance for Mid-Market",
        description: "More standards and frameworks mean more evidence. Without automation, teams drown chasing evidence and audits require endless effort.",
        link: "/solutions/mid-market",
        gridPattern: [[1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 1]],
        color: "#0e488b",
    },
    {
        id: "enterprise",
        label: "FOR ENTERPRISE",
        title: "Risk Management for Enterprise",
        description: "Certifications don't prove resilience. Risks stay siloed, vendor gaps surface late, but customers and regulators expect defensible proof every day.",
        link: "/solutions/enterprise",
        gridPattern: [[1, 1, 1, 0], [1, 1, 1, 0], [1, 1, 1, 0], [0, 0, 0, 1]],
        color: "#1a5ca8",
    },
];

function GridIcon({ pattern, color }: { pattern: number[][]; color: string }) {
    return (
        <div className="grid grid-cols-4 gap-1.5 w-32 h-32 mb-6">
            {pattern.flat().map((active, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.02 }}
                    className={`w-full aspect-square rounded-full transition-colors ${active ? "" : "bg-[#a4d4ff]/30"}`}
                    style={active ? { backgroundColor: color } : undefined}
                />
            ))}
        </div>
    );
}

export function CustomerSegments() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-[#a4d4ff]/10">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#152645] mb-6">
                        Compliance Solutions for{" "}
                        <span className="text-[#0e488b]">Every Stage</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Whether you're seeking your first certification or scaling enterprise risk management,
                        DataDefend adapts to your unique challenges.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {segments.map((segment, index) => (
                        <motion.div
                            key={segment.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-[2.5rem] border border-[#a4d4ff]/50 p-10 hover:shadow-2xl hover:border-[#f59e0b]/30 transition-all duration-300"
                        >
                            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-wide text-[#152645] bg-[#f59e0b]/20 rounded-full mb-8">
                                {segment.label}
                            </span>
                            <GridIcon pattern={segment.gridPattern} color={segment.color} />
                            <h3 className="text-2xl font-bold text-[#152645] mb-4">{segment.title}</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">{segment.description}</p>
                            <a
                                href={segment.link}
                                className="inline-flex items-center gap-2 text-[#0e488b] font-bold hover:text-[#f59e0b] hover:gap-3 transition-all group-hover:underline text-lg"
                            >
                                Learn more
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
