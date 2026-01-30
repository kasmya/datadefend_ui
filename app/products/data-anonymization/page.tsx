"use client";

import React from "react";
import { ProductLayout } from "../../components/ProductLayout";
import { VenetianMask, Database, FileKey, Shuffle, LockKeyhole, EyeOff } from "lucide-react";

export default function AnonymizationPage() {
    const features = [
        {
            title: "Format-Preserving Encryption",
            description: "Encrypt data while maintaining its original format (e.g., maintain email format) for system compatibility.",
            icon: FileKey,
        },
        {
            title: "Dynamic Masking",
            description: "Mask sensitive fields in real-time at the application layer based on user roles.",
            icon: VenetianMask,
        },
        {
            title: "Pseudonymization",
            description: "Replace identifiers with reversible tokens to allow data analysis without exposing PII.",
            icon: Shuffle,
        },
        {
            title: "K-Anonymity Support",
            description: "Ensure individuals cannot be re-identified within a dataset by generalizing attributes.",
            icon: EyeOff,
        },
        {
            title: "Static Tokenization",
            description: "Permanently mask data for non-production environments like testing and staging.",
            icon: Database,
        },
        {
            title: "Re-identification Risk",
            description: "Automated scoring to assess the likelihood of re-identification attacks on your datasets.",
            icon: LockKeyhole,
        },
    ];

    const benefits = [
        "Safely use production data for testing and development.",
        "Share datasets with third parties without privacy risks.",
        "Comply with 'Purpose Limitation' principles of DPDPA.",
        "Unlock data value for analytics while respecting privacy.",
    ];

    return (
        <ProductLayout
            title="Anonymization & Pseudonymization"
            subtitle="Data Privacy Ops"
            description="Safeguard sensitive data while maintaining its utility. Use advanced masking and tokenization for secure development and analytics."
            features={features}
            benefits={benefits}
        />
    );
}
