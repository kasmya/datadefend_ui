"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Calendar, CheckCircle, AlertTriangle, FileText, Shield, Users, Clock, Download, ArrowRight } from "lucide-react";
import Link from "next/link";

const keyChanges = [
    {
        title: "18-Month Implementation Period",
        description: "Businesses have until May 13, 2027 to achieve full DPDP compliance. Systems for consent collection, privacy notices, data rights, and security safeguards must be operational.",
        icon: Clock
    },
    {
        title: "Mandatory 1-Year Data Retention",
        description: "All businesses must retain personal data, traffic logs, and processing logs for minimum one year, with exceptions for regulatory requirements and specific use cases.",
        icon: FileText
    },
    {
        title: "Parental Consent Verification",
        description: "Children can self-declare parent details to initiate consent. Verification through existing records or DigiLocker authentication is now clarified.",
        icon: Users
    },
    {
        title: "90-Day Grievance Timeline",
        description: "Maximum 90-day response window for user grievances. Ticketing systems and SLAs are mandatory for timely resolution.",
        icon: AlertTriangle
    }
];

const obligations = [
    "Implement 6 security safeguards: encryption, access control, audit logs, backups, breach records, vendor contracts",
    "Deploy compliant consent notices in vernacular languages with clear purpose descriptions",
    "Verify parental consent for minors under 18 using government-authorized sources",
    "Enable data principal rights: access, correction, withdrawal, erasure, and complaints",
    "Meet Significant Data Fiduciary requirements: annual audits, algorithm assessments, transfer restrictions",
    "Assess third-party vendor security and privacy readiness with Data Processing Agreements",
    "Engage independent Consent Managers for consent records and user dashboards",
    "Report data breaches to affected users immediately and Data Protection Board within 72 hours",
    "Understand consent exemptions for research, voluntarily provided data, and legal obligations",
    "Prepare comprehensive data mapping and Record of Processing Activities (RoPA)"
];

const timeline = [
    {
        phase: "Immediate (Month 0)",
        actions: [
            "Data Protection Board framework is active",
            "Form multi-department DPDP implementation pod (Legal, InfoSec, Tech, Product, Ops)",
            "Map all data systems, stores, and vendors touching personal data",
            "Check if your organization qualifies as Significant Data Fiduciary (SDF)",
            "Inventory all user touchpoints where personal data is collected"
        ]
    },
    {
        phase: "Month 1-6",
        actions: [
            "Deploy DPDP-compliant consent/privacy notices at all collection points",
            "Lock down security safeguards: encryption, access controls, monitoring, backup",
            "Implement minimum 1-year log and data retention policy",
            "Create privacy center for data principal rights management",
            "Update vendor/processor contracts with DPDP-specific obligations and DPAs"
        ]
    },
    {
        phase: "Month 12",
        actions: [
            "Consent Manager registration provisions become active",
            "Integrate with registered Consent Manager platforms",
            "Ensure consent logs and dashboards are operational",
            "Begin independent audits if classified as SDF"
        ]
    },
    {
        phase: "Month 18 (May 13, 2027)",
        actions: [
            "Full compliance deadline - all provisions must be operational",
            "Complete privacy tech stack integration",
            "Conduct Data Protection Impact Assessments (DPIA) for SDFs",
            "Align DPDP with sectoral regulations (RBI/SEBI/IRDAI/IRDAI)",
            "Establish continuous compliance monitoring and audit calendar"
        ]
    }
];

const penalties = [
    { violation: "Security Failure: Not implementing reasonable security safeguards", amount: "₹250 Crore" },
    { violation: "Notification Failure: Not notifying DPB and affected users of breach", amount: "₹200 Crore" },
    { violation: "Children's Data: Breaching obligations regarding minors' data", amount: "₹200 Crore" },
    { violation: "SDF Obligations: Failure to appoint DPO, Data Auditor, or conduct audits", amount: "₹150 Crore" },
    { violation: "General Non-Compliance: Any other breach of Act or Rules", amount: "₹50 Crore" }
];

const faqs = [
    {
        question: "Who must comply with DPDP Act 2023?",
        answer: "Any business with physical presence in India processing personal data, or any business outside India offering goods/services to individuals in India. This includes Indian banks, foreign fintech apps with Indian users, and global companies with Indian branches."
    },
    {
        question: "What counts as personal data under DPDP?",
        answer: "Any digital data that can identify an individual including: PAN, Aadhaar, biometrics, transaction histories, bank statements, device IDs, IP addresses, user handles, and metadata used for profiling. Excludes data processed for purely personal/domestic purposes."
    },
    {
        question: "Do DPDP Rules apply to employee data?",
        answer: "Yes, employee data is covered. However, consent isn't needed for data processed for legitimate employment purposes (payroll, attendance, performance reviews, tax filing). Consent IS required for non-employment purposes like wellness programs or social events."
    },
    {
        question: "How long must I retain data?",
        answer: "Minimum 1 year for all businesses. Large platforms (e-commerce, gaming, social media) must retain for 3 years. Sectoral regulations (RBI, SEBI, IRDAI) take precedence if they require longer retention."
    },
    {
        question: "What is the deadline for DPDP compliance?",
        answer: "Full compliance is required by May 13, 2027 (18 months from notification). Consent Manager provisions activate at 12 months. Data Protection Board is already operational."
    },
    {
        question: "Do I need to appoint a Data Protection Officer (DPO)?",
        answer: "All organizations processing personal data should have a designated point of contact. Significant Data Fiduciaries (SDFs) must formally appoint a DPO and publish their contact details prominently."
    }
];

export default function DPDPGuidePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-[#152645] to-[#0e488b]">
                <div className="container mx-auto max-w-6xl text-center">
                    <div className="inline-flex items-center gap-2 bg-[#3b82f6] text-[#152645] px-4 py-2 rounded-full font-bold text-sm mb-6">
                        <Calendar className="w-4 h-4" />
                        Compliance Deadline: May 13, 2027
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        DPDP Rules 2025:<br />Complete Implementation Guide
                    </h1>
                    <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                        Everything Indian businesses need to know about Digital Personal Data Protection Act compliance, obligations, timelines, and penalties.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-[#152645] font-bold rounded-xl transition-all inline-flex items-center justify-center gap-2">
                            Get Compliance Roadmap
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a href="#official-pdfs" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all inline-flex items-center justify-center gap-2">
                            <Download className="w-5 h-5" />
                            Download Official PDFs
                        </a>
                    </div>
                </div>
            </section>

            {/* Summary Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-gray-200 border-l-4 border-l-[#3b82f6] p-8 rounded-2xl shadow-sm">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">Executive Summary</h2>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#3b82f6] flex-shrink-0 mt-0.5" />
                                <span><strong>MeitY has notified the final DPDP Rules</strong> — an 18-month compliance countdown has begun for all Indian businesses processing digital personal data.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#3b82f6] flex-shrink-0 mt-0.5" />
                                <span><strong>This guide consolidates all official documents</strong> and explains key differences between draft and final rules, so you don't need to piece together information from multiple sources.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#3b82f6] flex-shrink-0 mt-0.5" />
                                <span><strong>Practical implementation roadmap included</strong> — know what to prioritize now, what can wait, and what must be ready before the May 2027 deadline.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Official PDFs Section */}
            <section id="official-pdfs" className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-4 text-center">Official DPDP Documents</h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        All essential PDFs and notifications from Ministry of Electronics and Information Technology (MeitY) in one place.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <a href="https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf" target="_blank" rel="noopener noreferrer" className="p-6 border-2 border-gray-200 rounded-2xl hover:border-[#0e488b] hover:shadow-lg transition-all group">
                            <FileText className="w-8 h-8 text-[#0e488b] mb-4" />
                            <h3 className="text-xl font-bold text-[#152645] mb-2">Digital Personal Data Protection Act, 2023</h3>
                            <p className="text-gray-600 text-sm mb-4">The complete DPDP Act as passed by Parliament</p>
                            <span className="text-[#0e488b] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                Open PDF
                                <ArrowRight className="w-4 h-4" />
                            </span>
                            <p className="text-xs text-gray-500 mt-2">meity.gov.in • PDF</p>
                        </a>
                        <a href="https://www.meity.gov.in/static/uploads/2025/11/c56ceae6c383460ca69577428d36828b.pdf" target="_blank" rel="noopener noreferrer" className="p-6 border-2 border-gray-200 rounded-2xl hover:border-[#0e488b] hover:shadow-lg transition-all group">
                            <FileText className="w-8 h-8 text-[#0e488b] mb-4" />
                            <h3 className="text-xl font-bold text-[#152645] mb-2">Digital Personal Data Protection Rules, 2025</h3>
                            <p className="text-gray-600 text-sm mb-4">Final notified rules with implementation details</p>
                            <span className="text-[#0e488b] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                Open PDF
                                <ArrowRight className="w-4 h-4" />
                            </span>
                            <p className="text-xs text-gray-500 mt-2">meity.gov.in • PDF</p>
                        </a>
                        <a href="https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf" target="_blank" rel="noopener noreferrer" className="p-6 border-2 border-gray-200 rounded-2xl hover:border-[#0e488b] hover:shadow-lg transition-all group">
                            <FileText className="w-8 h-8 text-[#0e488b] mb-4" />
                            <h3 className="text-xl font-bold text-[#152645] mb-2">Notification on Enforcement Timelines</h3>
                            <p className="text-gray-600 text-sm mb-4">Official gazette notification on phased implementation under DPDP Act</p>
                            <span className="text-[#0e488b] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                Open PDF
                                <ArrowRight className="w-4 h-4" />
                            </span>
                            <p className="text-xs text-gray-500 mt-2">meity.gov.in • PDF</p>
                        </a>
                        <a href="https://www.meity.gov.in/static/uploads/2025/11/cc217843dc3bcb37b2b05bcc3b4e031f.pdf" target="_blank" rel="noopener noreferrer" className="p-6 border-2 border-gray-200 rounded-2xl hover:border-[#0e488b] hover:shadow-lg transition-all group">
                            <FileText className="w-8 h-8 text-[#0e488b] mb-4" />
                            <h3 className="text-xl font-bold text-[#152645] mb-2">Notification Establishing Data Protection Board</h3>
                            <p className="text-gray-600 text-sm mb-4">Establishment of DPB and operational framework</p>
                            <span className="text-[#0e488b] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                Open PDF
                                <ArrowRight className="w-4 h-4" />
                            </span>
                            <p className="text-xs text-gray-500 mt-2">meity.gov.in • PDF</p>
                        </a>
                    </div>
                </div>
            </section>

            {/* Key Changes Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-4 text-center">Draft vs Final: Key Changes</h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        Important changes from January 2025 draft rules to the final notified version
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {keyChanges.map((change, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
                                <change.icon className="w-10 h-10 text-[#3b82f6] mb-4" />
                                <h3 className="text-xl font-bold text-[#152645] mb-3">{change.title}</h3>
                                <p className="text-gray-700">{change.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Obligations Section */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-4 text-center">10 Key Compliance Obligations</h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        Essential requirements every data fiduciary must implement under DPDP Rules 2025
                    </p>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-gray-200 p-8 rounded-2xl shadow-sm">
                        <div className="grid md:grid-cols-2 gap-4">
                            {obligations.map((obligation, index) => (
                                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0e488b] text-white flex items-center justify-center font-bold text-sm">
                                        {index + 1}
                                    </div>
                                    <p className="text-gray-700 text-sm">{obligation}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-4 text-center">18-Month Implementation Roadmap</h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        Phased compliance checklist from now until May 13, 2027 deadline
                    </p>
                    <div className="space-y-6">
                        {timeline.map((phase, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 border-l-4 border-l-[#0e488b] shadow-md">
                                <h3 className="text-2xl font-bold text-[#152645] mb-4">{phase.phase}</h3>
                                <ul className="space-y-3">
                                    {phase.actions.map((action, actionIndex) => (
                                        <li key={actionIndex} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#0e488b] flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{action}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Penalties Section */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-4 text-center">Non-Compliance Penalties</h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        Financial deterrents designed to ensure serious data privacy compliance
                    </p>
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-200">
                        <div className="space-y-4">
                            {penalties.map((penalty, index) => (
                                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl border border-red-200">
                                    <div className="flex items-start gap-3 flex-1">
                                        <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 text-sm">{penalty.violation}</span>
                                    </div>
                                    <span className="text-2xl font-bold text-red-600 ml-4">{penalty.amount}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-4 text-center">Frequently Asked Questions</h2>
                    <p className="text-gray-600 text-center mb-12">
                        Quick answers to common DPDP compliance questions
                    </p>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                <h3 className="text-lg font-bold text-[#152645] mb-3">{faq.question}</h3>
                                <p className="text-gray-700">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-[#152645] to-[#0e488b]">
                <div className="container mx-auto max-w-4xl text-center">
                    <Shield className="w-16 h-16 text-[#3b82f6] mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Achieve DPDP Compliance with DataDefend
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Our AI-powered platform helps you implement consent management, data discovery, DSAR automation, and breach management — all in one integrated solution.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-[#152645] font-bold rounded-xl transition-all inline-flex items-center justify-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Schedule Compliance Demo
                        </Link>
                        <Link href="/products/consent-manager" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all inline-flex items-center justify-center gap-2">
                            Explore Platform
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
