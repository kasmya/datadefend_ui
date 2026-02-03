"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Star, TrendingUp, Users, Building2, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const customers = [
    { name: "HDFC Bank", logo: "🏦", industry: "Banking", size: "Enterprise", testimonial: "Best DPDP compliance platform" },
    { name: "Apollo Hospitals", logo: "🏥", industry: "Healthcare", size: "Enterprise", testimonial: "Transformed our patient data security" },
    { name: "Flipkart", logo: "🛒", industry: "E-commerce", size: "Enterprise", testimonial: "Seamless checkout consent integration" },
    { name: "Tata Motors", logo: "🚗", industry: "Automotive", size: "Enterprise", testimonial: "Comprehensive compliance solution" },
    { name: "Reliance Industries", logo: "⚡", industry: "Conglomerate", size: "Enterprise", testimonial: "Multi-industry compliance made easy" },
    { name: "Infosys", logo: "💻", industry: "Technology", size: "Enterprise", testimonial: "Perfect for IT service providers" },
    { name: "Zomato", logo: "🍕", industry: "Food Tech", size: "Mid-Market", testimonial: "Handles high-volume consent seamlessly" },
    { name: "ICICI Bank", logo: "🏛️", industry: "Banking", size: "Enterprise", testimonial: "RBI compliance in 2 weeks" },
    { name: "Max Healthcare", logo: "⚕️", industry: "Healthcare", size: "Mid-Market", testimonial: "Patient privacy is our priority" },
    { name: "Mahindra", logo: "🔧", industry: "Automotive", size: "Enterprise", testimonial: "Scalable for group companies" },
    { name: "PharmEasy", logo: "💊", industry: "HealthTech", size: "Mid-Market", testimonial: "Clinical data protection done right" },
    { name: "Swiggy", logo: "🛵", industry: "Food Tech", size: "Mid-Market", testimonial: "Fast implementation, faster delivery" }
];

const industries = [
    { name: "Banking & Finance", count: "50+", icon: "🏦" },
    { name: "Healthcare", count: "100+", icon: "🏥" },
    { name: "E-commerce", count: "200+", icon: "🛒" },
    { name: "Technology", count: "150+", icon: "💻" },
    { name: "Manufacturing", count: "80+", icon: "🏭" },
    { name: "Retail", count: "120+", icon: "🏪" }
];

const testimonials = [
    {
        quote: "DataDefend transformed our lending compliance. What used to take months now happens in real-time. The team's support during implementation was exceptional.",
        author: "Amit Kumar",
        role: "Chief Compliance Officer",
        company: "Leading NBFC",
        rating: 5
    },
    {
        quote: "We protect 5M+ patient records with DataDefend. The platform gives us confidence to digitize while maintaining strict privacy standards.",
        author: "Dr. Priya Sharma",
        role: "Chief Medical Officer",
        company: "Multi-specialty Hospital Chain",
        rating: 5
    },
    {
        quote: "We maintained our conversion rate while achieving full DPDP compliance. The checkout integration is seamless and our customers don't even notice it.",
        author: "Rahul Mehta",
        role: "Chief Technology Officer",
        company: "Leading Online Marketplace",
        rating: 5
    }
];

const stats = [
    { value: "500+", label: "Enterprise Customers" },
    { value: "10M+", label: "Consents/Month" },
    { value: "99.96%", label: "Platform Uptime" },
    { value: "15+", label: "Industries Served" }
];

export default function CustomersPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-[#152645] via-[#0e488b] to-[#152645]">
                <div className="container mx-auto max-w-7xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                            <Users className="w-4 h-4 text-[#f59e0b]" />
                            <span className="text-sm font-semibold text-white">Our Customers</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Trusted by India's Leading Enterprises
                        </h1>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                            500+ companies across 15 industries rely on DataDefend for DPDP compliance
                        </p>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-[#f59e0b] mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-white/70">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Customer Logos */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-4">
                            Trusted by Industry Leaders
                        </h2>
                        <p className="text-lg text-gray-600">
                            Companies that chose DataDefend for DPDP compliance
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {customers.map((customer, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all"
                            >
                                <div className="text-5xl mb-3">{customer.logo}</div>
                                <h3 className="font-bold text-[#152645] mb-1">{customer.name}</h3>
                                <div className="text-sm text-gray-500 mb-2">{customer.industry}</div>
                                <div className="text-xs text-[#f59e0b] font-semibold">{customer.size}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-4">
                            Serving Multiple Industries
                        </h2>
                        <p className="text-lg text-gray-600">
                            Industry-specific compliance solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {industries.map((industry, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-200"
                            >
                                <div className="text-5xl mb-4">{industry.icon}</div>
                                <h3 className="text-xl font-bold text-[#152645] mb-2">
                                    {industry.name}
                                </h3>
                                <div className="text-3xl font-bold text-[#0e488b]">
                                    {industry.count}
                                </div>
                                <div className="text-sm text-gray-500">Companies</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-4">
                            What Our Customers Say
                        </h2>
                        <p className="text-lg text-gray-600">
                            Real feedback from real companies
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-gradient-to-br from-[#152645] to-[#0e488b] rounded-3xl p-8 text-white"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]" />
                                    ))}
                                </div>
                                <p className="text-lg mb-6 leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                                <div className="border-t border-white/20 pt-4">
                                    <div className="font-bold">{testimonial.author}</div>
                                    <div className="text-sm text-white/70">{testimonial.role}</div>
                                    <div className="text-sm text-[#f59e0b] mt-1">{testimonial.company}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 bg-gradient-to-br from-[#152645] via-[#0e488b] to-[#152645]">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Join 500+ Companies Using DataDefend
                    </h2>
                    <p className="text-xl text-white/80 mb-8">
                        Start your DPDP compliance journey today
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold rounded-xl transition-all shadow-lg cursor-pointer inline-flex items-center justify-center gap-2"
                        >
                            <CheckCircle className="w-5 h-5" />
                            Get Started
                        </Link>
                        <Link
                            href="/case-studies"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all border border-white/20 cursor-pointer inline-flex items-center justify-center gap-2"
                        >
                            Read Case Studies
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
