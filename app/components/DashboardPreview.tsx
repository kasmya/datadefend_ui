"use client";

import React from "react";
import {
    LayoutDashboard,
    Shield,
    Users,
    FileText,
    Settings,
    Bell,
    TrendingUp,
    AlertTriangle,
    CheckCircle2,
    Clock
} from "lucide-react";
import { motion } from "framer-motion";

export function DashboardPreview() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mx-auto max-w-5xl"
        >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-purple-500/10 to-accent/20 rounded-3xl blur-2xl opacity-60" />

            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Top Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-4">
                        <div className="w-full max-w-md mx-auto h-6 bg-white rounded-md border border-gray-200 flex items-center px-3">
                            <span className="text-xs text-gray-400">app.datadefend.ai/dashboard</span>
                        </div>
                    </div>
                    <Bell className="w-4 h-4 text-gray-400" />
                </div>

                <div className="flex">
                    {/* Sidebar */}
                    <div className="w-16 bg-primary py-4 flex flex-col items-center gap-4">
                        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                            <Shield className="w-4 h-4 text-white" />
                        </div>
                        <div className="w-full h-px bg-white/10" />
                        <NavIcon icon={LayoutDashboard} active />
                        <NavIcon icon={Users} />
                        <NavIcon icon={FileText} />
                        <NavIcon icon={AlertTriangle} />
                        <div className="flex-1" />
                        <NavIcon icon={Settings} />
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-4 bg-gray-50/50">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="text-sm font-bold text-primary">Compliance Dashboard</h3>
                                <p className="text-xs text-gray-500">Last updated: Just now</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    Live
                                </span>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-4 gap-3 mb-4">
                            <StatCard
                                label="Consent Rate"
                                value="94.2%"
                                trend="+2.4%"
                                trendUp
                                color="accent"
                            />
                            <StatCard
                                label="DSAR Requests"
                                value="127"
                                trend="12 pending"
                                color="purple"
                            />
                            <StatCard
                                label="Risk Score"
                                value="Low"
                                trend="3 issues"
                                color="green"
                            />
                            <StatCard
                                label="Compliance"
                                value="98%"
                                trend="DPDPA Ready"
                                trendUp
                                color="blue"
                            />
                        </div>

                        {/* Charts Row */}
                        <div className="grid grid-cols-2 gap-3">
                            {/* Donut Chart */}
                            <div className="bg-white rounded-xl border border-gray-100 p-3">
                                <h4 className="text-xs font-semibold text-primary mb-2">Consent by Channel</h4>
                                <div className="flex items-center gap-4">
                                    <div className="relative w-20 h-20">
                                        <svg viewBox="0 0 36 36" className="w-full h-full">
                                            <path
                                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                fill="none"
                                                stroke="#e5e7eb"
                                                strokeWidth="3"
                                            />
                                            <path
                                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                fill="none"
                                                stroke="#2e66cc"
                                                strokeWidth="3"
                                                strokeDasharray="65, 100"
                                                className="animate-[dash_1.5s_ease-out_forwards]"
                                            />
                                            <path
                                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                fill="none"
                                                stroke="#a4d4ff"
                                                strokeWidth="3"
                                                strokeDasharray="25, 100"
                                                strokeDashoffset="-65"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-xs font-bold text-primary">90%</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 text-xs">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-accent" />
                                            <span className="text-gray-600">Web: 65%</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-accent-light" />
                                            <span className="text-gray-600">Mobile: 25%</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-gray-200" />
                                            <span className="text-gray-600">Other: 10%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bar Chart */}
                            <div className="bg-white rounded-xl border border-gray-100 p-3">
                                <h4 className="text-xs font-semibold text-primary mb-2">Data Risk by Category</h4>
                                <div className="space-y-2">
                                    <BarItem label="PII Exposure" value={75} color="bg-red-400" />
                                    <BarItem label="Access Control" value={45} color="bg-yellow-400" />
                                    <BarItem label="Encryption" value={20} color="bg-green-400" />
                                    <BarItem label="Retention" value={35} color="bg-blue-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function NavIcon({ icon: Icon, active = false }: { icon: React.ElementType; active?: boolean }) {
    return (
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${active ? "bg-white/10 text-white" : "text-white/50 hover:text-white/80"
            }`}>
            <Icon className="w-5 h-5" />
        </div>
    );
}

function StatCard({
    label,
    value,
    trend,
    trendUp = false,
    color
}: {
    label: string;
    value: string;
    trend: string;
    trendUp?: boolean;
    color: string;
}) {
    const colorClasses: Record<string, string> = {
        accent: "bg-accent/10 text-accent",
        purple: "bg-purple-100 text-purple-600",
        green: "bg-green-100 text-green-600",
        blue: "bg-blue-100 text-blue-600",
    };

    return (
        <div className="bg-white rounded-xl border border-gray-100 p-3">
            <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">{label}</p>
            <p className="text-lg font-bold text-primary">{value}</p>
            <div className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium mt-1 ${colorClasses[color]}`}>
                {trendUp && <TrendingUp className="w-3 h-3" />}
                {trend}
            </div>
        </div>
    );
}

function BarItem({ label, value, color }: { label: string; value: number; color: string }) {
    return (
        <div>
            <div className="flex justify-between text-[10px] text-gray-600 mb-1">
                <span>{label}</span>
                <span>{value}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${value}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`h-full rounded-full ${color}`}
                />
            </div>
        </div>
    );
}
