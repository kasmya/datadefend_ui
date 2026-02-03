"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Users, Shield, Clock } from "lucide-react";

const features = [
    { icon: Zap, title: "300+ Integrations", description: "Connect with your existing tools and data sources in minutes" },
    { icon: Users, title: "Expert Guidance", description: "Lead auditor support throughout your compliance journey" },
    { icon: Shield, title: "Continuous Monitoring", description: "Real-time compliance tracking and automated evidence collection" },
    { icon: Clock, title: "Faster Audits", description: "Reduce audit preparation time by 80%" },
];

export function ValueProposition() {
    return (
        <section className="relative py-32 overflow-hidden bg-[#152645]">
            <div className="absolute inset-0 grid-pattern" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                        When compliance gets complex,
                        <br />
                        <span className="text-[#a4d4ff]">DataDefend</span> makes it simple
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 rounded-[2rem] bg-white/5 backdrop-blur-md border border-[#a4d4ff]/10 hover:bg-white/10 hover:border-[#f59e0b]/40 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[#0e488b]/30 flex items-center justify-center mb-6 group-hover:bg-[#0e488b]/50 transition-colors shadow-lg">
                                    <Icon className="w-7 h-7 text-[#a4d4ff] group-hover:text-[#f59e0b] transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
