"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Shield,
    Database,
    Users,
    FileCheck,
    BarChart3,
    Lock,
    Bell,
    CheckCircle,
    AlertTriangle,
    TrendingUp,
    Zap,
    Globe,
    ShoppingCart,
    Building2,
    Laptop,
    Cloud,
    Server,
    FileText,
    Scale,
    Clock
} from "lucide-react";

const features = [
    {
        id: "discovery",
        title: "AI Data Discovery",
        icon: Database,
        color: "from-blue-500 to-cyan-500",
        description: "Auto-scan 9000+ data sources including POS, ERP, CRM systems",
        metrics: [
            { label: "Data Sources", value: "2,847", trend: "+12%" },
            { label: "PII Records", value: "1.2M", trend: "+8%" },
            { label: "Accuracy", value: "98.5%", trend: "✓" }
        ],
        rules: [
            "DPDPA Art. 4 - Personal data collection",
            "DPDPA Art. 6 - Lawful processing",
            "ISO 27701 - Privacy controls"
        ],
        integrations: ["SAP ERP", "Oracle POS", "Salesforce"],
        notification: "New database detected: MongoDB-Prod"
    },
    {
        id: "consent",
        title: "Consent Management",
        icon: Users,
        color: "from-green-500 to-emerald-500",
        description: "Collect & manage consent across all customer touchpoints",
        metrics: [
            { label: "Consents", value: "847K", trend: "+5%" },
            { label: "Languages", value: "22", trend: "India" },
            { label: "Compliance", value: "99.2%", trend: "✓" }
        ],
        rules: [
            "DPDPA Art. 7 - Valid consent",
            "DPDPA Art. 8 - Withdrawal rights",
            "RBI Guidelines - Customer consent"
        ],
        integrations: ["Shopify POS", "WooCommerce", "Razorpay"],
        notification: "12 new consent responses received"
    },
    {
        id: "dsar",
        title: "DSAR Automation",
        icon: FileCheck,
        color: "from-purple-500 to-pink-500",
        description: "Handle data subject requests with AI-powered automation",
        metrics: [
            { label: "Requests", value: "1,247", trend: "+18%" },
            { label: "Avg Time", value: "2.3 hrs", trend: "-40%" },
            { label: "Auto-Done", value: "94%", trend: "✓" }
        ],
        rules: [
            "DPDPA Art. 11 - Right to access",
            "DPDPA Art. 12 - Right to correction",
            "DPDPA Art. 13 - Right to erasure"
        ],
        integrations: ["Tally ERP", "Microsoft 365", "Zoho"],
        notification: "DSAR #1248 auto-completed"
    },
    {
        id: "vendor",
        title: "Vendor Risk Assessment",
        icon: Lock,
        color: "from-amber-500 to-orange-500",
        description: "Monitor third-party vendors for compliance & data risks",
        metrics: [
            { label: "Vendors", value: "342", trend: "+15%" },
            { label: "High Risk", value: "3", trend: "Alert" },
            { label: "Compliant", value: "97%", trend: "✓" }
        ],
        rules: [
            "DPDPA Art. 17 - Processor obligations",
            "SOC 2 Type II - Vendor security",
            "ISO 27001 - Third-party risks"
        ],
        integrations: ["AWS", "Azure", "GCP Cloud"],
        notification: "Vendor risk assessment completed"
    }
];

const sidebarItems = [
    { icon: BarChart3, label: "Dashboard", active: true },
    { icon: Database, label: "Data Map" },
    { icon: Users, label: "Consent" },
    { icon: FileCheck, label: "DSARs" },
    { icon: Lock, label: "Vendors" },
    { icon: Shield, label: "Compliance" }
];

const integrationLogos = [
    { name: "SAP", icon: Building2 },
    { name: "Oracle", icon: Server },
    { name: "Shopify", icon: ShoppingCart },
    { name: "Tally", icon: FileText },
    { name: "AWS", icon: Cloud },
    { name: "Azure", icon: Laptop }
];

export function AnimatedProductDemo() {
    const [activeFeature, setActiveFeature] = useState(0);
    const [complianceScore, setComplianceScore] = useState(0);

    // Auto-cycle through features
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % features.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Animate compliance score
    useEffect(() => {
        const targetScore = 94;
        const duration = 2000;
        const steps = 60;
        const increment = targetScore / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= targetScore) {
                setComplianceScore(targetScore);
                clearInterval(timer);
            } else {
                setComplianceScore(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, []);

    const currentFeature = features[activeFeature];
    const FeatureIcon = currentFeature.icon;

    return (
        <div className="relative aspect-[16/10] md:aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-[#152645] to-[#0e488b] shadow-2xl border-4 border-white/20">
            {/* Background Pattern */}
            <div className="absolute inset-0 grid-pattern opacity-20" />

            {/* Dashboard Layout */}
            <div className="absolute inset-0 flex">
                {/* Sidebar */}
                <div className="w-12 md:w-16 bg-white/5 backdrop-blur-sm border-r border-white/10 py-3 md:py-4 hidden sm:flex flex-col items-center gap-2 md:gap-3">
                    {sidebarItems.map((item, idx) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center cursor-pointer transition-all ${item.active
                                ? "bg-[#f59e0b] text-[#152645]"
                                : "text-white/50 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                        </motion.div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="flex-1 p-2 md:p-4 lg:p-6 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2 md:mb-3">
                        <div className="flex items-center gap-2">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 md:w-7 md:h-7 rounded-lg bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center"
                            >
                                <Zap className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-white" />
                            </motion.div>
                            <span className="text-white font-bold text-xs md:text-base">DataDefend</span>
                        </div>
                        <div className="flex items-center gap-1.5 md:gap-2">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-white/10 flex items-center justify-center"
                            >
                                <Bell className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-[#f59e0b]" />
                            </motion.div>
                            <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
                        </div>
                    </div>

                    {/* Metrics Row */}
                    <div className="grid grid-cols-4 gap-1.5 md:gap-2 mb-2 md:mb-3">
                        {/* Compliance Score */}
                        <motion.div
                            className="col-span-1 bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-1.5 md:p-2 border border-white/10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="text-[8px] md:text-[10px] text-white/60 mb-0.5">Compliance</div>
                            <div className="flex items-center gap-0.5">
                                <span className="text-sm md:text-lg font-bold text-green-400">{complianceScore}%</span>
                                <TrendingUp className="w-2.5 h-2.5 md:w-3 md:h-3 text-green-400" />
                            </div>
                        </motion.div>

                        {/* Feature Metrics */}
                        <AnimatePresence mode="wait">
                            {currentFeature.metrics.map((metric, idx) => (
                                <motion.div
                                    key={`${currentFeature.id}-${idx}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-1.5 md:p-2 border border-white/10"
                                >
                                    <div className="text-[8px] md:text-[10px] text-white/60 mb-0.5 truncate">{metric.label}</div>
                                    <div className="flex items-center gap-0.5">
                                        <span className="text-xs md:text-base font-bold text-white">{metric.value}</span>
                                        <span className={`text-[8px] md:text-[10px] ${metric.trend === "Alert" ? "text-amber-400" : "text-green-400"}`}>
                                            {metric.trend}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Main Content Area */}
                    <div className="grid grid-cols-3 gap-1.5 md:gap-3">
                        {/* Feature Card with Rules */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentFeature.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="col-span-2 bg-white/5 backdrop-blur-sm rounded-xl p-2 md:p-3 border border-white/10"
                            >
                                {/* Feature Header */}
                                <div className="flex items-center gap-2 mb-2">
                                    <div className={`w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-br ${currentFeature.color} flex items-center justify-center`}>
                                        <FeatureIcon className="w-3 h-3 md:w-4 md:h-4 text-white" />
                                    </div>
                                    <div>
                                        <span className="text-white font-semibold text-xs md:text-sm block">{currentFeature.title}</span>
                                        <span className="text-white/50 text-[8px] md:text-[10px] hidden md:block">{currentFeature.description}</span>
                                    </div>
                                </div>

                                {/* Progress Bars */}
                                <div className="space-y-1 mb-2">
                                    {[85, 92, 78].map((width, idx) => (
                                        <div key={idx} className="h-1.5 md:h-2 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${width}%` }}
                                                transition={{ duration: 1, delay: idx * 0.2 }}
                                                className={`h-full bg-gradient-to-r ${currentFeature.color} rounded-full`}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Compliance Rules */}
                                <div className="bg-white/5 rounded-lg p-1.5 md:p-2 border border-white/10">
                                    <div className="flex items-center gap-1 mb-1">
                                        <Scale className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#f59e0b]" />
                                        <span className="text-[8px] md:text-[10px] text-white/60 font-semibold">COMPLIANCE RULES</span>
                                    </div>
                                    <div className="space-y-0.5">
                                        {currentFeature.rules.map((rule, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + idx * 0.1 }}
                                                className="flex items-center gap-1"
                                            >
                                                <CheckCircle className="w-2 h-2 md:w-2.5 md:h-2.5 text-green-400 flex-shrink-0" />
                                                <span className="text-[7px] md:text-[9px] text-white/70 truncate">{rule}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Right Panel - Integrations & Activity */}
                        <div className="col-span-1 space-y-1.5 md:space-y-2">
                            {/* Integrations */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-1.5 md:p-2 border border-white/10">
                                <div className="flex items-center gap-1 mb-1.5">
                                    <Globe className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#f59e0b]" />
                                    <span className="text-[8px] md:text-[10px] text-white/60 font-semibold">INTEGRATIONS</span>
                                </div>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentFeature.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="space-y-1"
                                    >
                                        {currentFeature.integrations.map((int, idx) => (
                                            <motion.div
                                                key={int}
                                                initial={{ opacity: 0, x: 10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="flex items-center gap-1 bg-white/10 rounded-md px-1.5 py-0.5"
                                            >
                                                <div className="w-3 h-3 md:w-4 md:h-4 rounded bg-gradient-to-br from-blue-400/50 to-purple-400/50 flex items-center justify-center">
                                                    <Server className="w-1.5 h-1.5 md:w-2 md:h-2 text-white" />
                                                </div>
                                                <span className="text-[8px] md:text-[10px] text-white/80 font-medium">{int}</span>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                                <div className="mt-1.5 text-center">
                                    <span className="text-[7px] md:text-[9px] text-[#f59e0b]">+9000 more</span>
                                </div>
                            </div>

                            {/* Activity Feed */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-1.5 md:p-2 border border-white/10 hidden md:block">
                                <div className="flex items-center gap-1 mb-1">
                                    <Clock className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#f59e0b]" />
                                    <span className="text-[8px] md:text-[10px] text-white/60 font-semibold">ACTIVITY</span>
                                </div>
                                <div className="space-y-1">
                                    {[
                                        { icon: CheckCircle, text: "POS synced", color: "text-green-400" },
                                        { icon: Database, text: "ERP scan done", color: "text-blue-400" },
                                        { icon: AlertTriangle, text: "Risk flagged", color: "text-amber-400" }
                                    ].map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + idx * 0.15 }}
                                            className="flex items-center gap-1"
                                        >
                                            <item.icon className={`w-2 h-2 md:w-2.5 md:h-2.5 ${item.color}`} />
                                            <span className="text-[7px] md:text-[9px] text-white/70">{item.text}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Integration Bar */}
            <div className="absolute bottom-10 md:bottom-12 left-2 md:left-4 right-2 md:right-4">
                <div className="flex items-center justify-center gap-2 md:gap-4">
                    {integrationLogos.map((logo, idx) => (
                        <motion.div
                            key={logo.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 + idx * 0.1 }}
                            className="flex flex-col items-center gap-0.5"
                        >
                            <div className="w-5 h-5 md:w-7 md:h-7 rounded-lg bg-white/10 flex items-center justify-center">
                                <logo.icon className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-white/60" />
                            </div>
                            <span className="text-[6px] md:text-[8px] text-white/40">{logo.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Notification Bar */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentFeature.notification}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute bottom-2 md:bottom-3 left-2 md:left-4 right-2 md:right-4"
                >
                    <div className="flex items-center justify-between bg-white/10 backdrop-blur-md rounded-full px-2 md:px-3 py-1 md:py-1.5 border border-white/20">
                        <div className="flex items-center gap-1.5">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400"
                            />
                            <span className="text-white/80 text-[8px] md:text-[10px]">{currentFeature.notification}</span>
                        </div>
                        <span className="text-white/50 text-[8px] md:text-[10px]">Just now</span>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Feature Indicator Dots */}
            <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5">
                {features.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveFeature(idx)}
                        className={`h-1.5 md:h-2 rounded-full transition-all ${idx === activeFeature
                            ? "bg-[#f59e0b] w-4 md:w-6"
                            : "bg-white/30 hover:bg-white/50 w-1.5 md:w-2"
                            }`}
                    />
                ))}
            </div>

            {/* Label */}
            <div className="absolute top-2 md:top-3 right-2 md:right-3">
                <span className="px-1.5 md:px-2 py-0.5 md:py-1 bg-[#f59e0b]/20 backdrop-blur-md rounded-full text-[#f59e0b] text-[8px] md:text-[10px] font-medium flex items-center gap-0.5">
                    <Globe className="w-2 h-2 md:w-3 md:h-3" />
                    Live Demo
                </span>
            </div>
        </div>
    );
}
