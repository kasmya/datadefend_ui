"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Check,
    Shield,
    Database,
    Users,
    FileText,
    AlertTriangle,
    Lock,
    BarChart3,
    Settings,
    CheckCircle2
} from "lucide-react";

interface FeatureModule {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    priority: "Critical" | "High" | "Medium";
    benefits: string[];
}

const modules: FeatureModule[] = [
    {
        id: "consent",
        title: "Consent & Notice Manager",
        description: "Collect consent. Prove it. Let users withdraw it easily.",
        icon: Shield,
        priority: "Critical",
        benefits: [
            "Notice templates: data + purpose, rights, complaint mechanisms",
            "Free, specific, informed, unambiguous consent flows",
            "Easy withdrawal mechanisms",
            "Language support (English + 8th Schedule languages)"
        ]
    },
    {
        id: "dsar",
        title: "Data Principal Rights (DSR) Automation",
        description: "Fulfill requests in clicks, not weeks.",
        icon: Users,
        priority: "Critical",
        benefits: [
            "Automated info access: summary of data & processing",
            "Correction / updating / erasure workflows",
            "Public-facing request channels",
            "Grievance workflow (90-day response)"
        ]
    },
    {
        id: "discovery",
        title: "Data Discovery and Governance",
        description: "Know what you hold, where it lives, and why it exists.",
        icon: Database,
        priority: "High",
        benefits: [
            "Auto-discover personal data across systems",
            "Map to business purposes (RoPA-style)",
            "Flag high-risk identifiers (ID numbers, health, financial)",
            "Prioritize retention + security controls"
        ]
    },
    {
        id: "vendor",
        title: "Vendor & Data Processor Risk Management",
        description: "Secure your supply chain—because you're still accountable.",
        icon: Settings,
        priority: "Critical",
        benefits: [
            "Enforce processor contracts and evidence packs",
            "Continuous checks for access scope & sub-processors",
            "Track cross-border transfers with safeguards"
        ]
    },
    {
        id: "breach",
        title: "Breach Notification Engine",
        description: "Breach-ready operations, not breach-time chaos.",
        icon: AlertTriangle,
        priority: "Critical",
        benefits: [
            "Playbooks to notify Board + affected individuals",
            "Immediate intimation + 72-hour detailed report workflows",
            "Evidence bundle: timeline, data types, containment"
        ]
    },
    {
        id: "retention",
        title: "Retention & Erasure Orchestration",
        description: "Keep what you need. Delete what you don't.",
        icon: Lock,
        priority: "Medium",
        benefits: [
            "Erasure triggers: consent withdrawal or purpose fulfilled",
            "Processor erasure enforcement",
            "Clear erasure timelines & log retention (min 1 year)"
        ]
    }
];

const priorityColors = {
    Critical: "bg-red-100 text-red-600 border-red-200",
    High: "bg-orange-100 text-orange-600 border-orange-200",
    Medium: "bg-blue-100 text-blue-600 border-blue-200"
};

export function InteractiveFeatureGrid() {
    const [implemented, setImplemented] = useState<Set<string>>(new Set());

    const toggleImplemented = (id: string) => {
        setImplemented(prev => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

    const implementedCount = implemented.size;
    const totalCount = modules.length;
    const progress = Math.round((implementedCount / totalCount) * 100);

    return (
        <section className="py-24 bg-gradient-to-b from-primary-light/30 to-white">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-100 rounded-full mb-4">
                        Self-Assessment
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                        Everything You Need for{" "}
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-lg">DPDPA</span>{" "}
                        Compliance
                    </h2>
                    <p className="text-lg text-text-muted">
                        Click the checkmarks to track which modules you've implemented
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="max-w-md mx-auto mb-12">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-primary">Your Progress</span>
                        <span className="text-sm font-bold text-accent">{implementedCount}/{totalCount} modules</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-accent to-purple-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modules.map((module, index) => {
                        const isImplemented = implemented.has(module.id);
                        const Icon = module.icon;

                        return (
                            <motion.div
                                key={module.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative bg-white rounded-2xl border-2 p-6 transition-all duration-300 ${isImplemented
                                        ? "border-green-400 shadow-lg shadow-green-100"
                                        : "border-gray-100 hover:border-gray-200 hover:shadow-lg"
                                    }`}
                            >
                                {/* Priority Badge */}
                                <span className={`absolute top-4 left-4 px-2 py-0.5 text-xs font-semibold rounded border ${priorityColors[module.priority]}`}>
                                    {module.priority}
                                </span>

                                {/* Checkmark Button */}
                                <button
                                    onClick={() => toggleImplemented(module.id)}
                                    className={`absolute top-4 right-4 w-8 h-8 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${isImplemented
                                            ? "bg-green-500 border-green-500 text-white"
                                            : "bg-white border-gray-200 text-gray-400 hover:border-green-400 hover:text-green-400"
                                        }`}
                                >
                                    <Check className="w-5 h-5" />
                                </button>

                                {/* Content */}
                                <div className="mt-8">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${isImplemented ? "bg-green-100 text-green-600" : "bg-purple-100 text-purple-600"
                                        }`}>
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    <h3 className="text-lg font-bold text-primary mb-2">{module.title}</h3>
                                    <p className="text-sm text-text-muted mb-4">{module.description}</p>

                                    <ul className="space-y-2">
                                        {module.benefits.slice(0, 3).map((benefit, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                                <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isImplemented ? "text-green-500" : "text-gray-400"}`} />
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Implemented Badge */}
                                    <AnimatePresence>
                                        {isImplemented && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="mt-4 px-3 py-2 bg-green-50 border border-green-200 rounded-lg text-center"
                                            >
                                                <span className="text-sm font-semibold text-green-600">✓ You have this module</span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
