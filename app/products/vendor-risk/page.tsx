"use client";

import React from "react";
import { ProductLayout } from "../../components/ProductLayout";
import { Building2, FileBarChart, Siren, History, Users, RefreshCw } from "lucide-react";

export default function VendorRiskPage() {
    const features = [
        {
            title: "Inventory Management",
            description: "Centralized database for all third-party vendors, processors, and data sharing agreements.",
            icon: Building2,
        },
        {
            title: "Automated Assessments",
            description: "Send standardized security & privacy questionnaires to vendors and auto-score their responses.",
            icon: FileBarChart,
        },
        {
            title: "Risk Scoring",
            description: "Instant risk calculation based on vendor access levels, data volume, and security posture.",
            icon: Siren,
        },
        {
            title: "Continuous Monitoring",
            description: "Track vendor compliance status in real-time and get alerts for security degrade.",
            icon: RefreshCw,
        },
        {
            title: "Contract Lifecycle",
            description: "Manage DPA (Data Processing Agreements) renewals and compliance clauses.",
            icon: History,
        },
        {
            title: "Collaborative Review",
            description: "Invite internal stakeholders (Legal, Security) to review and approve vendor onboardings.",
            icon: Users,
        },
    ];

    const benefits = [
        "Secure your supply chain against data breaches.",
        "Ensure all data processors are DPDPA compliant.",
        "Reduce vendor onboarding time by 50%.",
        "Streamline audit evidence for third-party risks.",
    ];

    return (
        <ProductLayout
            title="Intelligent Vendor Risk"
            subtitle="Vendor Risk Management"
            description="Gain visibility into vendor privacy and security postures. Mitigate third-party risks and ensure compliance across your entire supply chain."
            features={features}
            benefits={benefits}
        />
    );
}
