"use client";

import React from "react";
import { ProductLayout } from "../../components/ProductLayout";
import { ClipboardCheck, Calculator, AlertTriangle, FileUp, Users2, ShieldQuestion } from "lucide-react";

export default function PIAPage() {
    const features = [
        {
            title: "Interactive Assessments",
            description: "Smart, logic-based questionnaires that adapt based on the type of data processing activity.",
            icon: ClipboardCheck,
        },
        {
            title: "Automated Risk Scoring",
            description: "Instantly calculate inherent and residual risk levels based on assessment responses.",
            icon: Calculator,
        },
        {
            title: "Remediation Suggestions",
            description: "AI-driven recommendations for controls and mitigations to lower identified privacy risks.",
            icon: AlertTriangle,
        },
        {
            title: "ROPA Integration",
            description: "Completed assessments automatically populate the customized Record of Processing Activities.",
            icon: FileUp,
        },
        {
            title: "Stakeholder Collaboration",
            description: "Assign sections to different teams (IT, Legal, Product) and track completion progress.",
            icon: Users2,
        },
        {
            title: "DPIA trigger logic",
            description: "Automated triggers to initiate a full DPIA when high-risk processing is detected.",
            icon: ShieldQuestion,
        },
    ];

    const benefits = [
        "Embed 'Privacy by Design' into product development.",
        "Standardize risk assessments across the enterprise.",
        "Reduce the time to complete PIAs by 60%.",
        "Maintain a central repository of all compliance checks.",
    ];

    return (
        <ProductLayout
            title="Automated Privacy Impact Assessments"
            subtitle="PIA & DPIA"
            description="Proactively identify and mitigate privacy risks. Streamline assessments with automated tools and centralized compliance documentation."
            features={features}
            benefits={benefits}
        />
    );
}
