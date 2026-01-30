"use client";

import React from "react";
import { Building2, Stethoscope, ShoppingBag, Landmark } from "lucide-react";
import { Button } from "./ui/Button";

const industries = [
    {
        name: "BFSI",
        icon: Landmark,
        description: "RBI guideline alignment + DPDPA compliance for banks and fintechs.",
        benefits: ["Data Localization", "Consent Ledger", "Fraud Analytics"]
    },
    {
        name: "Healthcare",
        icon: Stethoscope,
        description: "Protect sensitive health data while ensuring seamless patient experiences.",
        benefits: ["Patient Consent", "Health ID Integration", "Data Erasure"]
    },
    {
        name: "E-commerce",
        icon: ShoppingBag,
        description: "Manage consumer consent at scale without hurting conversion rates.",
        benefits: ["Checkout Consent", "Marketing Preferences", "Loyalty Data"]
    },
    {
        name: "Enterprise",
        icon: Building2,
        description: "End-to-end governance for large organizations with complex data maps.",
        benefits: ["Employee Data", "Vendor Risk", "Global audits"]
    },
];

export function IndustrySolutions() {
    return (
        <section className="py-24 bg-white" id="solutions">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
                            Built for Your Sector's <br />
                            <span className="text-accent">Unique Privacy Needs</span>
                        </h2>
                        <p className="text-lg text-text-muted">
                            DataDefend offers specialized workflows tailored to the specific regulatory nuances of your industry.
                        </p>
                    </div>
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">View All Industries</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industries.map((industry) => (
                        <div key={industry.name} className="p-6 rounded-xl border border-gray-100 bg-white shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-accent/10 hover:border-accent/20 transition-all duration-300 group hover:-translate-y-1">
                            <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                <industry.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2">{industry.name}</h3>
                            <p className="text-text-muted text-sm mb-6 leading-relaxed">{industry.description}</p>

                            <ul className="space-y-3">
                                {industry.benefits.map(benefit => (
                                    <li key={benefit} className="flex items-center text-sm text-text-muted">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
