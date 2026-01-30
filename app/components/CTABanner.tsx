"use client";

import React from "react";
import { Button } from "./ui/Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTABanner() {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/80" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/30 via-transparent to-transparent opacity-50" />

            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[80px]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Ready to Simplify Your <br />
                        <span className="text-accent-light">DPDPA Compliance?</span>
                    </h2>
                    <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
                        Join 500+ enterprises that trust DataDefend to automate privacy operations and build customer trust.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-xl group">
                            Start Free Trial
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                            Talk to Sales
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
