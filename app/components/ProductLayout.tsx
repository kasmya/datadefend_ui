"use client";

import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Button } from "./ui/Button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProductFeature {
    title: string;
    description: string;
    icon?: React.ElementType;
}

interface ProductLayoutProps {
    title: string;
    subtitle: string;
    description: string;
    features: ProductFeature[];
    benefits: string[];
    heroImage?: React.ReactNode;
}

export function ProductLayout({
    title,
    subtitle,
    description,
    features,
    benefits,
    heroImage,
}: ProductLayoutProps) {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-primary">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-white">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-20 left-10 w-80 h-80 bg-primary-light rounded-full blur-[100px] opacity-70" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-light/20 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light border border-accent/20 text-accent text-sm font-medium mb-6"
                            >
                                {subtitle}
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight"
                            >
                                {title}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-lg text-text-muted mb-8 max-w-2xl mx-auto lg:mx-0 font-medium"
                            >
                                {description}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                            >
                                <Button size="lg" className="bg-accent hover:bg-mid-blue text-white shadow-lg shadow-accent/20">Book a Demo</Button>
                                <Button variant="outline" size="lg" className="border-gray-200 text-primary hover:bg-gray-50">Read Documentation</Button>
                            </motion.div>
                        </div>

                        {/* Hero Visual Placeholder */}
                        <div className="flex-1 w-full max-w-lg lg:max-w-none">
                            {heroImage ? heroImage : (
                                <div className="aspect-video rounded-xl border border-gray-100 bg-white shadow-2xl flex items-center justify-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-primary-light/30" />
                                    <div className="text-primary font-bold text-sm uppercase tracking-widest relative z-10">
                                        Product Interface Preview
                                    </div>
                                    {/* Abstract UI Elements */}
                                    <div className="absolute top-4 left-4 right-4 h-2 bg-gray-200 rounded-full" />
                                    <div className="absolute top-10 left-4 w-1/3 h-20 bg-gray-100 rounded-lg" />
                                    <div className="absolute top-10 right-4 w-1/2 h-20 bg-gray-50 rounded-lg border border-gray-100" />
                                    <div className="absolute bottom-4 left-4 right-4 h-24 bg-gray-100 rounded-lg" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-primary-light/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-4">Core Capabilities</h2>
                        <p className="text-text-muted">Everything you need to manage {title.split(' ')[0]} compliance effectively.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-xl border border-gray-100 bg-white shadow-lg shadow-accent/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                            >
                                {feature.icon && (
                                    <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                                <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits / Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="bg-primary rounded-3xl border border-primary-light/10 p-8 md:p-12 relative overflow-hidden">
                        {/* Decorative background for dark card */}
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />

                        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">Why Choose DataDefend?</h2>
                                <ul className="space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                                            <span className="text-gray-300">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <Button variant="ghost" className="pl-0 text-white hover:text-accent hover:pl-2 transition-all">
                                        Explore all features <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                                    <p className="text-white/50 font-medium">Benefit Visualization</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
