"use client";

import React, { useState } from "react";
import { Linkedin, Twitter, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

const footerLinks = {
    Platform: [
        { name: "Consent Manager", href: "/products/consent-manager" },
        { name: "Data Discovery", href: "/products/data-discovery" },
        { name: "DSAR Automation", href: "/products/dsar" },
        { name: "Vendor Risk", href: "/products/vendor-risk" },
        { name: "Breach Management", href: "/products/breach-management" },
        { name: "Integrations", href: "/integrations" },
    ],
    Frameworks: [
        { name: "DPDPA", href: "/frameworks/dpdpa" },
        { name: "ISO 27001", href: "/frameworks/iso-27001" },
        { name: "SOC 2", href: "/frameworks/soc-2" },
        { name: "GDPR", href: "/frameworks/gdpr" },
        { name: "HIPAA", href: "/frameworks/hipaa" },
    ],
    Resources: [
        { name: "Blog", href: "/blog" },
        { name: "DPDPA Guide", href: "/resources/dpdpa-guide" },
        { name: "Compliance Checklist", href: "/resources/checklist" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Help Center", href: "/help" },
    ],
    Company: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers", badge: "We're hiring!" },
        { name: "Customers", href: "/customers" },
        { name: "Partners", href: "/partners" },
        { name: "Contact", href: "/contact" },
    ],
};

const g2Badges = [
    { label: "G2 Leader", icon: "🏆" },
    { label: "High Performer", icon: "⭐" },
    { label: "Momentum Leader", icon: "🚀" },
    { label: "Best Results", icon: "💎" },
];

export function Footer() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Subscribed:", email);
        alert("Thanks for subscribing!");
        setEmail("");
    };

    return (
        <footer className="px-4 md:px-6 pb-6">
            {/* Changed background to White/Light Blue for visibility */}
            <div className="relative bg-gradient-to-br from-white to-blue-50 pt-20 pb-10 rounded-[3rem] overflow-hidden border border-gray-100 shadow-xl">
                {/* Background effects - Softened for light theme */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#a4d4ff]/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0e488b]/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">

                    {/* Newsletter Section */}
                    <div className="border-b border-gray-200 pb-16 mb-16">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                            <div className="max-w-xl">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#152645] mb-3">
                                    Stay updated on DPDPA
                                </h3>
                                <p className="text-gray-600">
                                    Get the latest insights on data privacy regulations, compliance updates, and best practices delivered to your inbox.
                                </p>
                            </div>
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full sm:w-80 bg-white text-gray-800 pl-12 pr-4 py-3.5 rounded-full border border-gray-200 focus:outline-none focus:border-[#0e488b]/50 transition-colors shadow-sm"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="px-8 py-3.5 bg-[#f59e0b] hover:bg-[#d97706] text-[#152645] font-bold rounded-full transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                                >
                                    Subscribe
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
                        {/* Brand Column */}
                        <div className="lg:col-span-2">
                            <Link href="/" className="flex items-center gap-2 mb-6">
                                {/* Using dad.svg color logo - Removed Invert */}
                                <img src="/dad.svg" alt="DataDefend Logo" className="h-8 w-auto" />
                            </Link>
                            <p className="text-gray-600 mb-8 max-w-sm leading-relaxed">
                                India's #1 AI-Powered DPDPA Compliance Platform. Trusted by 500+ enterprises.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#0e488b] hover:text-white transition-all">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#0e488b] hover:text-white transition-all">
                                    <Twitter className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Links Columns */}
                        {Object.entries(footerLinks).map(([section, links]) => (
                            <div key={section}>
                                <h4 className="text-[#152645] font-bold mb-6">{section}</h4>
                                <ul className="space-y-4">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-gray-600 hover:text-[#0e488b] transition-colors text-sm flex items-center gap-2 font-medium"
                                            >
                                                {link.name}
                                                {link.badge && (
                                                    <span className="text-[10px] font-bold px-2 py-0.5 bg-[#f59e0b] text-[#152645] rounded-full">
                                                        {link.badge}
                                                    </span>
                                                )}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>



                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
                        <p>© 2026 DataDefend Technologies Pvt Ltd. All rights reserved.</p>
                        <div className="flex gap-8">
                            <Link href="/privacy" className="hover:text-[#0e488b] transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-[#0e488b] transition-colors">Terms of Service</Link>
                            <Link href="/cookies" className="hover:text-[#0e488b] transition-colors">Cookie Policy</Link>
                            <Link href="/security" className="hover:text-[#0e488b] transition-colors">Security</Link>
                        </div>
                    </div>

                    <div className="text-center mt-8 pt-8 text-[10px] text-gray-400 select-none">
                        Made with ❤️ in India
                    </div>
                </div>
            </div>
        </footer>
    );
}
