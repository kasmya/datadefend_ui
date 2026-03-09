"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const industries = [
    {
        title: "BFSI:",
        description: "Banks, NBFCs, Fintechs, Insurance — Customer KYC, transaction data, loan records"
    },
    {
        title: "Healthcare & Pharma:",
        description: "Hospitals, Diagnostics, HealthTech, Drug manufacturers, CROs, Distributors — Clinical trial data, Patient records, health data, prescriptions"
    },
    {
        title: "E-commerce & Retail:",
        description: "Online marketplaces, retail chains, food delivery platforms"
    },
    {
        title: "Manufacturing & Automotive:",
        description: "Auto, Electronics, Industrial — Customer data, vendor data."
    },
    {
        title: "Travel & Hospitality:",
        description: "Airlines, hotels, travel aggregators, and booking platforms processing traveler information and payment details."
    },
    {
        title: "Others:",
        description: "Adtech, Media, Entertainment, Real Estate & Construction, Telecommunications and more"
    },
];

export function IndustryCompliance() {
    return (
        <section className="py-16 md:py-20 px-4 md:px-6 bg-gray-50">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#152645] mb-4">
                        <span className="bg-[#3b82f6] px-3 py-1 rounded-lg">DPDPA</span>{" "}
                        Affects All Industry
                    </h2>
                </motion.div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
                    {/* Left Side - Yellow Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-linear-to-br from-[#3b82f6] to-[#2563eb] p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col justify-between"
                    >
                        <div className="mb-6">
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#152645] italic mb-4 leading-tight">
                                ₹250 Crore penalties don't discriminate by industry.
                            </h3>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-[#152645] font-semibold text-sm md:text-base rounded-full transition-all shadow-lg hover:shadow-xl group w-fit"
                        >
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            Does DPDPA Apply to you?
                        </Link>
                    </motion.div>

                    {/* Right Side - White Card with Industries */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl"
                    >
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#152645] mb-6 text-center">
                            DPDPA Compliance is Mandatory Across All Sectors
                        </h3>

                        <div className="space-y-4">
                            {industries.map((industry, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-2"
                                >
                                    <CheckCircle className="w-5 h-5 text-[#0e488b] shrink-0 mt-0.5" />
                                    <div className="text-sm md:text-base">
                                        <span className="font-bold text-[#152645]">{industry.title}</span>{" "}
                                        <span className="text-gray-600">{industry.description}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
