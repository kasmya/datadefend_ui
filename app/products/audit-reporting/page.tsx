"use client";

import React from "react";
import { ProductLayout } from "../../components/ProductLayout";
import { FileBadge, ClipboardList, PenTool, LayoutDashboard, History, CheckCheck } from "lucide-react";

export default function AuditReportingPage() {
    const features = [
        {
            title: "One-Click Reports",
            description: "Generate comprehensive reports for Board meetings, auditors, or regulators instantly.",
            icon: FileBadge,
        },
        {
            title: "Evidence Collection",
            description: "Automatically link data points and logs to specific regulatory controls as proof of compliance.",
            icon: CheckCheck,
        },
        {
            title: "Audit Dashboards",
            description: "Real-time visibility into your compliance posture, gaps, and remediation progress.",
            icon: LayoutDashboard,
        },
        {
            title: "Remediation Tracking",
            description: "Findings management system to track non-compliance issues from discovery to closure.",
            icon: ClipboardList,
        },
        {
            title: "DPDPA Templates",
            description: "Pre-configured audit formats aligned with the latest Data Protection Board norms.",
            icon: PenTool,
        },
        {
            title: "Historical Archives",
            description: "Secure, tamper-proof storage of all past audit reports and evidence chains.",
            icon: History,
        },
    ];

    const benefits = [
        "Reduce audit preparation time by 80%.",
        "Eliminate 'scramble mode' before regulatory visits.",
        "Empower DPOs with data-driven compliance insights.",
        "Demonstrate accountability to the Board and Investors.",
    ];

    return (
        <ProductLayout
            title="Audit & Reporting"
            subtitle="Compliance Reporting"
            description="Streamline internal and external audits. Collect evidence automatically and generate board-ready compliance reports with ease."
            features={features}
            benefits={benefits}
        />
    );
}
