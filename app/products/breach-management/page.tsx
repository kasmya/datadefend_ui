"use client";

import React from "react";
import { ProductLayout } from "../../components/ProductLayout";
import { Siren, Clock4, FileWarning, Gavel, Scale, Megaphone } from "lucide-react";

export default function BreachManagementPage() {
    const features = [
        {
            title: "72-Hour Response",
            description: "Guided workflows to ensure incident reporting meets the strict 72-hour regulatory window.",
            icon: Clock4,
        },
        {
            title: "Impact Analysis",
            description: "Assess the severity of a breach to determine users impacted and potential harm.",
            icon: FileWarning,
        },
        {
            title: "CERT-In Reporting",
            description: "Auto-generate reports in the specific format required by CERT-In and the Data Protection Board.",
            icon: Gavel,
        },
        {
            title: "Incident Playbooks",
            description: "Pre-configured response plans for different types of incidents (Ransomware, Leak, Insider).",
            icon: Siren,
        },
        {
            title: "Legal Assessment",
            description: "Determine if a breach meets the 'significant harm' threshold requiring public disclosure.",
            icon: Scale,
        },
        {
            title: "Notification Engine",
            description: "Automate communications to affected data principals via email/SMS.",
            icon: Megaphone,
        },
    ];

    const benefits = [
        "Avoid massive penalties for late breach reporting.",
        "Orchestrate cross-functional response teams instantly.",
        "Maintain a defendable audit trail of your response.",
        "Minimize reputational damage with controlled disclosure.",
    ];

    return (
        <ProductLayout
            title="Breach Incident Management"
            subtitle="Breach Response"
            description="Orchestrate your response to data breaches. Ensure rapid reporting, accurate impact analysis, and compliance with DPDPA & CERT-In timelines."
            features={features}
            benefits={benefits}
        />
    );
}
