"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Award, Shield, CheckCircle } from "lucide-react";

const badges = [
    { name: "G2 Leader", rating: "4.8", icon: Star },
    { name: "Capterra", rating: "4.9", icon: Award },
    { name: "GetApp", rating: "4.7", icon: Shield },
    { name: "Software Advice", rating: "4.8", icon: CheckCircle },
];

const clients = [
    "HDFC Bank",
    "Tata Digital",
    "Reliance",
    "ICICI",
    "Infosys",
    "Wipro",
    "HCL Tech",
    "Tech Mahindra",
];

export function TrustBadges() {
    return (
        <section className="py-16 bg-white border-y border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                {/* Badges Row */}
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-12">
                    {badges.map((badge, index) => (
                        <motion.div
                            key={badge.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all duration-300"
                        >
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                                <badge.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-primary">{badge.name}</p>
                                <div className="flex items-center gap-1">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-3 h-3 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-500">{badge.rating}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Client Logos */}
                <div className="text-center">
                    <p className="text-sm text-gray-500 mb-6">Trusted by India's leading enterprises</p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {clients.map((client, index) => (
                            <motion.div
                                key={client}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group"
                            >
                                <div className="px-4 py-2 rounded-lg bg-gray-50 border border-transparent hover:border-gray-200 transition-all duration-300">
                                    <span className="text-sm font-semibold text-gray-400 group-hover:text-primary transition-colors">
                                        {client}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
