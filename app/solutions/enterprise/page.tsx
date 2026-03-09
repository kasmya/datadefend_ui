"use client";

import React from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { motion } from "framer-motion";
import { Building2, ShieldCheck, Globe, Lock, ArrowRight, Activity, Users } from "lucide-react";
import Link from "next/link";

export default function EnterprisePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 md:px-6 bg-gradient-to-b from-[#152645] to-[#0e488b] text-white">
                <div className="container mx-auto max-w-6xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-sm font-bold rounded-full mb-6"
                    >
                        <Building2 className="w-4 h-4" />
                        FOR ENTERPRISE
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                    >
                        Uncompromised Security & <br />
                        <span className="text-[#3b82f6]">Defensible Governance.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10"
                    >
                        For organizations where failure is not an option. DataDefend provides the enterprise-grade
                        visibility, RBAC, and risk intelligence needed to manage compliance at scale.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-[#152645] font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
                        >
                            Request Enterprise Demo
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Enterprise Capabilities */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#152645] mb-4">Built for Complex Architectures</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Your ecosystem is vast and siloed. We unify risk visibility across on-prem, cloud, and hybrid environments.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 group hover:border-[#0e488b] transition-colors">
                            <div className="w-14 h-14 bg-[#e0f2fe] rounded-2xl flex items-center justify-center text-[#0e488b] mb-6 group-hover:bg-[#0e488b] group-hover:text-white transition-colors">
                                <Activity className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-[#152645] mb-3">Real-time Risk Intelligence</h3>
                            <p className="text-gray-600">Dynamic risk scoring that updates as new threats emerge or controls fail. Don't wait for the annual audit to find gaps.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 group hover:border-[#0e488b] transition-colors">
                            <div className="w-14 h-14 bg-[#e0f2fe] rounded-2xl flex items-center justify-center text-[#0e488b] mb-6 group-hover:bg-[#0e488b] group-hover:text-white transition-colors">
                                <Globe className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-[#152645] mb-3">Third-Party Risk Management</h3>
                            <p className="text-gray-600">Automate vendor assessments. Monitor your supply chain's security posture continuously with AI-driven insights.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 group hover:border-[#0e488b] transition-colors">
                            <div className="w-14 h-14 bg-[#e0f2fe] rounded-2xl flex items-center justify-center text-[#0e488b] mb-6 group-hover:bg-[#0e488b] group-hover:text-white transition-colors">
                                <ShieldCheck className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-[#152645] mb-3">Custom Governance Frameworks</h3>
                            <p className="text-gray-600">Go beyond standard frameworks. Build custom controls and internal policies that map specifically to your organizational structure.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enterprise Trust */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-[#152645] mb-6">
                                Security at Every Layer
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                We practice what we preach. DataDefend is built on a foundation of zero-trust architecture.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Lock className="w-6 h-6 text-[#0e488b] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-[#152645]">SSO & Granular RBAC</h4>
                                        <p className="text-sm text-gray-600">Enforce least-privilege access across teams and business units.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Users className="w-6 h-6 text-[#0e488b] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-[#152645]">Dedicated Support & SLAs</h4>
                                        <p className="text-sm text-gray-600">24/7 priority support with guaranteed response times and a dedicated account manager.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                            <h3 className="text-xl font-bold text-[#152645] mb-6">Enterprise Integration Ready</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {["Okta", "Active Directory", "ServiceNow", "Splunk", "Jira Data Center", "AWS GovCloud"].map((tool) => (
                                    <div key={tool} className="p-4 bg-gray-50 rounded-xl text-center text-sm font-medium text-gray-700">
                                        {tool}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
