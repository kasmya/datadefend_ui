"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
    Zap,
    Globe,
    FileText,
    Clock,
    Search,
    Settings,
    PieChart,
    ClipboardList,
    Activity,
    LogOut,
    ChevronRight,
    RefreshCw
} from "lucide-react";

// Sidebar Navigation Items
const sidebarItems = [
    { icon: BarChart3, label: "Dashboard", active: true },
    { icon: Shield, label: "Policy Assessment", active: false },
    { icon: Database, label: "Data Discovery", active: false },
    { icon: Users, label: "Consent", active: false },
    { icon: FileText, label: "Audit Logs", active: false },
    { icon: ClipboardList, label: "DSAR", active: false },
    { icon: PieChart, label: "Analytics", active: false },
    { icon: Activity, label: "Compliance", active: false },
    { icon: FileText, label: "Reports", active: false },
    { icon: Lock, label: "Vendor Risk", active: false },
    { icon: Settings, label: "Settings", active: false }
];

// Quick Actions
const quickActions = [
    { label: "Consent Templates", icon: Users },
    { label: "API & Keys", icon: Lock },
    { label: "View Violations", icon: AlertTriangle },
    { label: "New DSAR Request", icon: ClipboardList },
    { label: "Run Scan", icon: Database },
    { label: "Generate Report", icon: FileText }
];

// Recent Activity
const recentActivities = [
    { text: 'Consent template "KYC Data Collection" updated', time: 'Just now', type: 'success' },
    { text: 'DSAR request DSR-2026-009 auto-approved', time: '12m ago', type: 'success' },
    { text: 'New violation detected in Section 6', time: '28m ago', type: 'warning' },
    { text: 'Audit log export completed (JSON)', time: '1h ago', type: 'success' },
    { text: 'Data discovery scan finished - 3 new PII fields', time: '2h ago', type: 'success' }
];

// Top 3 Meity Sections
const topSections = [
    { 
        rank: 1,
        rankLabel: "Gold",
        title: "Section 4", 
        subtitle: "Data Principal Rights",
        score: 98, 
        type: "segmented",
        color: "emerald"
    },
    { 
        rank: 2,
        rankLabel: "Silver",
        title: "Section 5", 
        subtitle: "Obligations of Data Fiduciary",
        score: 94, 
        type: "trend",
        color: "emerald"
    },
    { 
        rank: 3,
        rankLabel: "Bronze",
        title: "Section 7", 
        subtitle: "Significant Data Fiduciary",
        score: 89, 
        type: "progress",
        color: "amber"
    }
];

// Integration logos
const integrationLogos = ['SAP', 'Oracle', 'Shopify', 'Tally', 'AWS', 'Azure', 'GCP Cloud'];

// Radial Progress Ring Component - smaller
function RadialProgress({ value }: { value: number }) {
    const circumference = 2 * Math.PI * 28;
    const offset = circumference - (value / 100) * circumference;
    
    return (
        <div className="relative w-16 h-16">
            <svg width="64" height="64" viewBox="0 0 64 64" className="transform -rotate-90">
                <circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="4"
                />
                <circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    className="transition-all duration-1000"
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-white">{value}</span>
            </div>
        </div>
    );
}

// Segmented Progress Bar - 5 individual rectangles
function SegmentedProgress({ filled = 5 }: { filled?: number }) {
    const segments = 5;
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: segments }).map((_, i) => (
                <div 
                    key={i} 
                    className={`w-[15px] h-1 rounded-sm ${i < filled ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50' : 'bg-white/10'}`}
                />
            ))}
        </div>
    );
}

// Trend Line Component
function TrendLine() {
    const heights = [30, 45, 35, 60, 50, 75, 65, 85];
    return (
        <div className="flex items-end gap-0.5 h-4">
            {heights.map((h, i) => (
                <div 
                    key={i} 
                    className="flex-1 bg-emerald-400 rounded-sm"
                    style={{ height: `${h}%` }}
                />
            ))}
        </div>
    );
}

// Sparkline for consents
function Sparkline() {
    const heights = [40, 55, 45, 70, 60, 85, 75, 90];
    return (
        <div className="flex items-end gap-0.5 h-6">
            {heights.map((h, i) => (
                <div 
                    key={i} 
                    className="w-1 bg-emerald-400 rounded-sm"
                    style={{ height: `${h}%` }}
                />
            ))}
        </div>
    );
}

export function AnimatedProductDemo() {
    const [complianceScore, setComplianceScore] = useState(0);

    // Animate compliance score
    useEffect(() => {
        const targetScore = 87;
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

    return (
        <div className="relative h-[600px] md:h-[700px] rounded-3xl overflow-y-auto cyber-bg border border-gray-800 shadow-2xl custom-scrollbar">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px),
                                      radial-gradient(circle at 75% 75%, #10B981 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}></div>
            </div>
            
            {/* Glow Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

            {/* Full Dashboard Layout */}
            <div className="absolute inset-0 flex">
                {/* Sidebar - Fixed width 260px */}
                <div className="w-[260px] bg-[#020617] flex flex-col border-r border-gray-800">
                    {/* Logo */}
                    <div className="p-6 border-b border-gray-800">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-white font-bold text-lg">DataDefend</span>
                        </div>
                    </div>

                    {/* Nav Items with Glow Bar on Active */}
                    <div className="flex-1 py-4 overflow-y-auto px-3">
                        {sidebarItems.map((item, idx) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className={`relative px-4 py-3 rounded-lg flex items-center gap-3 cursor-pointer transition-all mb-1 ${item.active 
                                    ? 'bg-emerald-500/10 text-emerald-400' 
                                    : 'text-gray-400 hover:bg-white/5 hover:text-gray-300'
                                }`}
                            >
                                {item.active && (
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-emerald-400 rounded-r-full shadow-lg shadow-emerald-400/50" />
                                )}
                                <item.icon className="w-5 h-5 flex-shrink-0" />
                                <span className="text-sm font-medium">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom - Logout */}
                    <div className="p-4 border-t border-gray-800">
                        <div className="px-4 py-3 text-gray-400 hover:text-gray-300 cursor-pointer flex items-center gap-3 rounded-lg hover:bg-white/5">
                            <LogOut className="w-5 h-5" />
                            <span className="text-sm">Logout</span>
                        </div>
                    </div>
                </div>
 
                {/* Main Content - 32px padding - Scrollable */}
                <div className="flex-1 flex flex-col overflow-y-auto p-8">
                    {/* Top Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <span className="text-white font-semibold text-lg">DPDPA Compliance Platform</span>
                            <span className="text-gray-500 text-sm">— Last updated 09:38 am</span>
                        </div>
                        <div className="flex items-center gap-4">
                            {/* Search */}
                            <div className="relative">
                                <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input 
                                    type="text" 
                                    placeholder="Search anything.." 
                                    className="bg-white/5 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 w-64"
                                />
                            </div>
                            {/* Notifications */}
                            <div className="relative">
                                <Bell className="w-5 h-5 text-gray-400" />
                                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
                            </div>
                            {/* User */}
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600" />
                        </div>
                    </div>
 
                    {/* Row 1: Compliance Radar - 4-column grid */}
                    <div className="grid grid-cols-4 gap-6 mb-6">
                        {/* Box 1: Score - Radial Circle */}
                        <motion.div 
                            className="cyber-glass rounded-xl p-4 flex flex-col items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="text-xs text-gray-400 mb-3">Compliance Score</div>
                            <RadialProgress value={complianceScore} />
                            <div className="text-lg font-bold text-white mt-2">{complianceScore}/100</div>
                            <div className="text-[10px] text-emerald-400 mt-1">+2.5% from last month</div>
                        </motion.div>
 
                        {/* Box 2: Consents - Sparkline right */}
                        <motion.div 
                            className="cyber-glass rounded-xl p-4 flex flex-col justify-between"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <div>
                                <div className="text-xs text-gray-400 mb-1">Active Consents</div>
                                <div className="text-2xl font-bold text-white">12,847</div>
                                <div className="text-[10px] text-emerald-400">+12% from last month</div>
                            </div>
                            <div className="flex justify-end">
                                <Sparkline />
                            </div>
                        </motion.div>
 
                        {/* Box 3: DSAR - Minimalist large number */}
                        <motion.div 
                            className="cyber-glass rounded-xl p-4 flex flex-col justify-between"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="text-xs text-gray-400 mb-1">Pending DSAR</div>
                            <div className="text-3xl font-bold text-white">23</div>
                            <div className="text-[10px] text-amber-400">- this week from last month</div>
                        </motion.div>

                        {/* Box 4: Violations - Warning icon with red glow */}
                        <motion.div 
                            className="cyber-glass rounded-xl p-4 flex flex-col justify-between"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-gray-400">Open Violations</span>
                                <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                                    <AlertTriangle className="w-4 h-4 text-red-400" style={{ filter: 'blur(0px)', boxShadow: '0 0 20px rgba(239, 68, 68, 0.8)' }} />
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-red-400">3</div>
                            <div className="text-[10px] text-amber-400">+1 new from last month</div>
                        </motion.div>
                    </div>

                    {/* Row 2: Meity Code Ranking - 3-column grid */}
                    <div className="mb-6">
                        <div className="grid grid-cols-3 gap-6">
                            {topSections.map((section, idx) => (
                                <motion.div
                                    key={section.rank}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`cyber-glass rounded-xl p-5 relative overflow-hidden min-h-[140px] ${section.rank === 1 ? 'border border-amber-500/50' : ''}`}
                                    style={section.rank === 1 ? { boxShadow: '0 0 10px rgba(245, 158, 11, 0.2)' } : {}}
                                >
                                    {/* Ghost Number - 80px, opacity 0.05 */}
                                    <span className="absolute -bottom-2 -right-2 text-[80px] font-bold text-white/5 select-none">
                                        {section.rank}
                                    </span>
                                    
                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Left: Rank Label */}
                                        <div className={`text-xs font-semibold mb-2 ${section.rank === 1 ? 'text-amber-400' : section.rank === 2 ? 'text-gray-300' : 'text-orange-400'}`}>
                                            {section.rankLabel}
                                        </div>
                                        
                                        {/* Center: Title and Score */}
                                        <div className="mb-auto">
                                            <div className="text-sm font-semibold text-white">{section.title}</div>
                                            <div className="text-[10px] text-gray-400">{section.subtitle}</div>
                                            <div className={`text-2xl font-bold mt-2 ${section.color === 'emerald' ? 'text-emerald-400' : 'text-amber-400'}`}>
                                                {section.score}%
                                            </div>
                                        </div>
                                        
                                        {/* Bottom Center: Progress */}
                                        <div className="mt-3">
                                            {section.type === 'segmented' && <SegmentedProgress />}
                                            {section.type === 'trend' && <TrendLine />}
                                            {section.type === 'progress' && (
                                                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                                    <div className="h-full bg-amber-400 rounded-full" style={{ width: '89%' }} />
                                                </div>
                                            )}
                                        </div>

                                        {/* Right: View Details button */}
                                        <div className="absolute right-4 top-4">
                                            <button className="px-3 py-1 rounded-md text-[10px] text-gray-400 border border-gray-700 hover:border-gray-500 hover:text-white transition-all">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
 
                    {/* Row 3: Split 40/60 - Quick Actions vs Activity */}
                    <div className="grid grid-cols-5 gap-6">
                        {/* Left: Quick Actions - 40% (2 columns) */}
                        <div className="col-span-2">
                            <div className="text-sm text-gray-400 mb-3">Quick Actions</div>
                            <div className="grid grid-cols-2 gap-3">
                                {quickActions.map((action, idx) => (
                                    <motion.button 
                                        key={action.label}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + idx * 0.05 }}
                                        className="action-btn flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-300 bg-white/5 border border-gray-700/50 hover:border-emerald-500/50"
                                    >
                                        <action.icon className="w-4 h-4" />
                                        {action.label}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Right: Recent Activity - 60% */}
                        <div className="col-span-3">
                            <div className="cyber-glass rounded-xl p-5 h-full">
                                <div className="text-sm text-gray-400 mb-4 flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    Recent Activity
                                </div>
                                <div className="relative">
                                    {/* Vertical Timeline Line - 40px from left */}
                                    <div className="absolute left-[40px] top-0 bottom-0 w-px bg-[#1E293B]"></div>
                                    
                                    <div className="space-y-3">
                                        {recentActivities.map((activity, idx) => (
                                            <div key={idx} className="flex items-center gap-4 relative">
                                                {/* Icon on timeline */}
                                                <div className={`z-10 w-5 h-5 rounded-full flex items-center justify-center ${activity.type === 'warning' ? 'bg-amber-500/20' : 'bg-emerald-500/20'}`}>
                                                    <div className={`w-2 h-2 rounded-full ${activity.type === 'warning' ? 'bg-amber-400' : 'bg-emerald-400'}`} 
                                                        style={{ boxShadow: activity.type === 'warning' ? '0 0 10px rgba(245, 158, 11, 0.8)' : '0 0 10px rgba(16, 185, 129, 0.8)' }}
                                                    />
                                                </div>
                                                {/* Text */}
                                                <div className="flex-1 text-sm text-gray-300">{activity.text}</div>
                                                {/* Timestamp - pushed to right */}
                                                <div className="text-xs text-gray-500 ml-auto">{activity.time}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Integrations */}
                    <div className="mt-6 flex items-center justify-center gap-8">
                        {integrationLogos.map((logo, idx) => (
                            <span key={logo} className="text-xs text-gray-600">{logo}</span>
                        ))}
                        <span className="text-xs text-emerald-400">+9000 more</span>
                    </div>
                </div>
            </div>

            {/* Live Demo Label */}
            <div className="absolute top-4 right-4 z-10">
                <span className="px-2 py-1 bg-emerald-500/20 backdrop-blur-md rounded-full text-emerald-400 text-[10px] font-medium flex items-center gap-1">
                    <Globe className="w-2 h-2" />
                    Live
                </span>
            </div>
        </div>
    );
}

