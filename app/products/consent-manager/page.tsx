"use client";

import React from "react";
import { ProductLayout } from "../../components/ProductLayout";
import { CheckSquare, Globe, LayoutTemplate, ShieldCheck, Database, Hand } from "lucide-react";

export default function ConsentManagerPage() {
    const features = [
        {
            title: "Automated Workflows",
            description: "Streamline consent collection, updates, and revocation across all digital touchpoints automatically.",
            icon: CheckSquare,
        },
        {
            title: "Global Compliance",
            description: "Pre-built templates for DPDPA (India), GDPR, CCPA, and more, ensuring instant regulatory alignment.",
            icon: Globe,
        },
        {
            title: "Customizable Banners",
            description: "Full control over UI/UX to match your brand identity while maintaining legal compliance.",
            icon: LayoutTemplate,
        },
        {
            title: "Granular Preferences",
            description: "Empower users to manage specific consent types (marketing, analytics, functional) with ease.",
            icon: Hand,
        },
        {
            title: "Downstream Activation",
            description: "Sync consent signals with your marketing and analytics stacks to respect user choices instantly.",
            icon: Database,
        },
        {
            title: "Durable Audit Trail",
            description: "Immutable logs of every consent transaction to prove compliance during audits.",
            icon: ShieldCheck,
        },
    ];

    const benefits = [
        "Increase marketing opt-in rates with transparent UX.",
        "Eliminate regulatory fines with DPDPA-ready workflows.",
        "Build trust by giving users control over their data.",
        "Automate 'Do Not Track' signals effectively.",
    ];

    return (
        <ProductLayout
            title="Unified Consent Management"
            subtitle="Consent Manager"
            description="Simplify and optimize consent throughout the entire data lifecycle. Build trust and unlock the ethical potential of your data while ensuring DPDPA compliance."
            features={features}
            benefits={benefits}
        />
    );
}
