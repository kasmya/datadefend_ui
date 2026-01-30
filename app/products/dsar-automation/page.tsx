"use client";

import React from "react";
import { ProductLayout } from "../../components/ProductLayout";
import { UserCheck, FileText, Fingerprint, Clock, Lock, MessageSquare } from "lucide-react";

export default function DSARAutomationPage() {
    const features = [
        {
            title: "Self-Service Portal",
            description: "Secure, branded portal for data principals to submit Access, Erasure, or Correction requests.",
            icon: MessageSquare,
        },
        {
            title: "Identity Verification",
            description: "Automated MFA via Email/SMS to verify the identity of the requester before processing.",
            icon: Fingerprint,
        },
        {
            title: "Automated Fulfillment",
            description: "Workflows that trigger data retrieval across connected systems and collate results automatically.",
            icon: Clock,
        },
        {
            title: "Smart Redaction",
            description: "AI-powered redaction of third-party PII from documents before sharing them with the requester.",
            icon: FileText,
        },
        {
            title: "Secure Delivery",
            description: "Encrypted data delivery channels ensuring only the verified user can access their report.",
            icon: Lock,
        },
        {
            title: "Grievance Redressal",
            description: "Built-in workflows for handling complaints and grievances as mandated by DPDPA.",
            icon: UserCheck,
        },
    ];

    const benefits = [
        "Reduce cost per request by up to 90%.",
        "Eliminate manual errors and data leakage risks.",
        "Ensure strict adherence to SLA timelines.",
        "Improve customer trust with transparent processes.",
    ];

    return (
        <ProductLayout
            title="Automated DSAR Management"
            subtitle="Rights Automation"
            description="Fulfill Data Subject Access Requests (DSARs) efficiently and accurately. Minimize operational burden and legal risk with end-to-end automation."
            features={features}
            benefits={benefits}
        />
    );
}
