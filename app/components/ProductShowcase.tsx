"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Shield,
    Database,
    AlertTriangle,
    TrendingUp,
    Users,
    FileText,
    CheckCircle2,
    PieChart,
    BarChart3,
    Activity
} from "lucide-react";

interface TabData {
    id: string;
    label: string;
    icon: React.ElementType;
    dashboard: React.ReactNode;
}

function ConsentDashboard() {
    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 relative overflow-hidden">
            {/* Floating Label */}
            <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                Live Preview
            </div>

            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="font-bold text-primary">Unified Consent Management</h3>
                    <p className="text-xs text-gray-500">Real-time consent tracking</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-green-600 font-medium">Live</span>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
                    <p className="text-xs text-blue-600 font-medium mb-1">Total Consents</p>
                    <p className="text-2xl font-bold text-blue-700">847K</p>
                    <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                        <TrendingUp className="w-3 h-3" /> +12.4%
                    </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
                    <p className="text-xs text-green-600 font-medium mb-1">Opt-in Rate</p>
                    <p className="text-2xl font-bold text-green-700">94.2%</p>
                    <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                        <TrendingUp className="w-3 h-3" /> +2.1%
                    </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
                    <p className="text-xs text-purple-600 font-medium mb-1">Withdrawals</p>
                    <p className="text-2xl font-bold text-purple-700">2.3K</p>
                    <p className="text-xs text-gray-500 mt-1">This month</p>
                </div>
            </div>

            {/* Progress Ring */}
            <div className="flex items-center gap-6">
                <div className="relative w-24 h-24">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#e5e7eb" strokeWidth="2" />
                        <motion.circle
                            cx="18" cy="18" r="16" fill="none" stroke="#2563eb" strokeWidth="2"
                            strokeDasharray="100" strokeDashoffset="6" strokeLinecap="round"
                            initial={{ strokeDashoffset: 100 }}
                            animate={{ strokeDashoffset: 6 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">94%</span>
                    </div>
                </div>
                <div className="flex-1">
                    <p className="text-sm font-semibold text-primary mb-2">Compliance Progress</p>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs">
                            <span className="w-3 h-3 rounded-full bg-blue-500" />
                            <span className="text-gray-600">Cookie Banner: Active</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                            <span className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="text-gray-600">Preference Center: Active</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                            <span className="w-3 h-3 rounded-full bg-yellow-500" />
                            <span className="text-gray-600">Mobile SDK: Pending</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function DiscoveryDashboard() {
    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 relative overflow-hidden">
            <div className="absolute -top-3 left-6 px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                AI-Powered
            </div>

            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="font-bold text-primary">Data Discovery Hub</h3>
                    <p className="text-xs text-gray-500">Automated PII scanning</p>
                </div>
                <Activity className="w-5 h-5 text-orange-500 animate-pulse" />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <p className="text-xs text-gray-500 mb-1">Sensitive Data</p>
                    <p className="text-xl font-bold text-primary">2.4K</p>
                    <p className="text-xs text-orange-500">fields detected</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <p className="text-xs text-gray-500 mb-1">Data Sources</p>
                    <p className="text-xl font-bold text-primary">127</p>
                    <p className="text-xs text-green-500">connected</p>
                </div>
            </div>

            {/* Overall DQ Score */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100 mb-4">
                <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-green-700">Overall DQ Score</p>
                    <motion.span
                        className="text-2xl font-bold text-green-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        92
                    </motion.span>
                </div>
                <div className="h-2 bg-green-100 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-green-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "92%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                </div>
            </div>

            {/* Risk Chart */}
            <div className="flex items-center gap-2">
                {[75, 45, 60, 30, 85, 55, 40].map((value, i) => (
                    <motion.div
                        key={i}
                        className="flex-1 bg-orange-100 rounded-t-lg relative overflow-hidden"
                        style={{ height: 60 }}
                        initial={{ height: 0 }}
                        animate={{ height: 60 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                        <motion.div
                            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-500 to-orange-400 rounded-t-lg"
                            initial={{ height: 0 }}
                            animate={{ height: `${value}%` }}
                            transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

function VendorDashboard() {
    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 relative overflow-hidden">
            <div className="absolute -top-3 left-6 px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                Risk Monitor
            </div>

            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="font-bold text-primary">Vendor Risk Overview</h3>
                    <p className="text-xs text-gray-500">Third-party monitoring</p>
                </div>
                <Shield className="w-5 h-5 text-purple-500" />
            </div>

            <div className="flex items-center gap-4 mb-6">
                <div className="relative w-20 h-20">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                        <motion.circle
                            cx="18" cy="18" r="14" fill="none" stroke="#9333ea" strokeWidth="4"
                            strokeDasharray="88" strokeDashoffset="8.8" strokeLinecap="round"
                            initial={{ strokeDashoffset: 88 }}
                            animate={{ strokeDashoffset: 8.8 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-purple-600">800</span>
                    </div>
                </div>
                <div>
                    <p className="font-bold text-primary">Vendor Score</p>
                    <p className="text-xs text-gray-500">Excellent Rating</p>
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-medium text-green-700">DPDPA</span>
                    </div>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded">Compliant</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-medium text-green-700">ISO 27001</span>
                    </div>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded">Certified</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                    <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium text-yellow-700">Next Audit</span>
                    </div>
                    <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-600 rounded">Mar 2027</span>
                </div>
            </div>
        </div>
    );
}

const tabs: TabData[] = [
    { id: "consent", label: "Unified Consent Management", icon: Shield, dashboard: <ConsentDashboard /> },
    { id: "discovery", label: "Data Discovery Hub", icon: Database, dashboard: <DiscoveryDashboard /> },
    { id: "vendor", label: "Vendor Risk Overview", icon: AlertTriangle, dashboard: <VendorDashboard /> },
];

export function ProductShowcase() {
    const [activeTab, setActiveTab] = useState("consent");

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-orange-600 bg-orange-100 rounded-full mb-4">
                        Interactive Demo
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-lg italic">Everything</span>{" "}
                        You Need for DPDPA Compliance
                    </h2>
                    <p className="text-lg text-text-muted">
                        Explore our live dashboards - click the tabs to see different modules in action
                    </p>
                </div>

                {/* Tab Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === tab.id
                                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                                        : "bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary"
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Dashboard Display */}
                <div className="max-w-2xl mx-auto">
                    <AnimatePresence mode="wait">
                        {tabs.map((tab) =>
                            activeTab === tab.id && (
                                <motion.div
                                    key={tab.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {tab.dashboard}
                                </motion.div>
                            )
                        )}
                    </AnimatePresence>
                </div>

                {/* Floating decorative elements */}
                <div className="hidden lg:block">
                    <motion.div
                        className="absolute left-[5%] top-1/2 w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-500 shadow-lg"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <PieChart className="w-8 h-8" />
                    </motion.div>
                    <motion.div
                        className="absolute right-[5%] top-1/3 w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-500 shadow-lg"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity }}
                    >
                        <BarChart3 className="w-8 h-8" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
