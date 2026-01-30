"use client";

import React from "react";
import { ProductLayout } from "../../components/ProductLayout";
import { Search, Radar, Cloud, Network, ShieldAlert, Code2 } from "lucide-react";

export default function DataDiscoveryPage() {
    const features = [
        {
            title: "Multicloud Scanning",
            description: "Connect to AWS, Azure, GCP, and on-prem SQL/NoSQL databases to find data wherever it lives.",
            icon: Cloud,
        },
        {
            title: "AI Classification",
            description: "Automatically detect and tag PII (Pan, Aadhaar, Phone) and sensitive data with 99% accuracy.",
            icon: Search,
        },
        {
            title: "Live Data Mapping",
            description: "Visualize data flow across your organization to identify risky transfers and storage locations.",
            icon: Network,
        },
        {
            title: "Dark Data Discovery",
            description: "Uncover shadow IT and forgotten datasets that pose the highest compliance risk.",
            icon: Radar,
        },
        {
            title: "Risk Scoring",
            description: "Assign risk scores to data assets based on sensitivity, volume, and exposure levels.",
            icon: ShieldAlert,
        },
        {
            title: "Developer API",
            description: "Integrate discovery into your CI/CD pipelines to catch PII leaks before production.",
            icon: Code2,
        },
    ];

    const benefits = [
        "Eliminate 'dark data' blind spots.",
        "Reduce storage costs by identifying redundant data.",
        "Accelerate DSAR response times with a searchable inventory.",
        "Proactively mitigate breach risks by knowing what you hold.",
    ];

    return (
        <ProductLayout
            title="AI-Driven Data Discovery"
            subtitle="Data Discovery"
            description="Gain complete visibility into your data landscape. Discover, classify, and map your data assets with AI-powered accuracy to ensure DPDPA compliance."
            features={features}
            benefits={benefits}
        />
    );
}
