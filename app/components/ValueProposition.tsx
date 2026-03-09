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
        <section className="relative py-16 md:py-20 overflow-hidden bg-[#152645]">
            <div className="absolute inset-0 grid-pattern" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto mb-12"
                >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                        When compliance gets complex,
                        <br className="hidden sm:block" />
                        <span className="text-[#a4d4ff]">DataDefend</span> makes it simple
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-[#a4d4ff]/20 shadow-sm hover:bg-white/10 hover:border-blue-400/40 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#0e488b]/30 flex items-center justify-center mb-4 group-hover:bg-[#0e488b]/50 transition-colors shadow-lg">
                                    <Icon className="w-6 h-6 text-[#a4d4ff] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
