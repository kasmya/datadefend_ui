"use client";

import React from "react";
import { ProductLayout } from "../../components/ProductLayout";
import { Shield, FileCheck2, Share2, BarChart3, Unlock, Globe2 } from "lucide-react";

export default function TrustCenterPage() {
    const features = [
        {
            title: "Public Trust Portal",
            description: "A customer-facing, white-labeled page to showcase your live security and privacy posture.",
            icon: Globe2,
        },
        {
            title: "Document Sharing",
            description: "Securely share SOC2, ISO certificates, and Pen Test reports with prospects via NDA-gated links.",
            icon: Share2,
        },
        {
            title: "Questionnaire Auto-Fill",
            description: "Use AI to automatically answer lengthy Vendor Risk questionnaires from your enterprise customers.",
            icon: FileCheck2,
        },
        {
            title: "Access Control",
            description: "Revoke document access after a deal is closed or lost to maintain tight control over intellectual property.",
            icon: Unlock,
        },
        {
            title: "Deal Velocity Metrics",
            description: "Track how security transparency impacts your sales cycle duration and compliance blockers.",
            icon: BarChart3,
        },
        {
            title: "Sub-processor List",
            description: "Automatically maintain and publish your list of sub-processors to stay transparent.",
            icon: Shield,
        },
    ];

    const benefits = [
        "Shorten sales cycles by removing security blockers.",
        "Reduce the time spent filling out 300+ question spreadsheets.",
        "Turn compliance into a competitive advantage.",
        "Build instant credibility with enterprise buyers.",
    ];

    return (
        <ProductLayout
            title="Unified Trust Center"
            subtitle="Security Trust"
            description="Automate security sales enablement. Create a single source of truth for your compliance posture to build customer trust faster."
            features={features}
            benefits={benefits}
        />
    );
}
