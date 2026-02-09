"use client";

import React, { useState, useEffect } from "react";
import { Linkedin, Twitter, ArrowRight, Mail, Facebook, Instagram, Youtube, MapPin, Phone, Globe, CheckCircle, XCircle, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface ToastMessage {
    type: "success" | "error";
    text: string;
}

const footerLinks = {
    Platform: [
        { name: "Consent Management", href: "/products/consent-manager" },
        { name: "Data Lifecycle Management", href: "/products/data-lifecycle" },
        { name: "Compliance & Privacy", href: "/products/compliance-privacy" },
        { name: "Third Party Risk Management", href: "/products/vendor-risk" },
        { name: "Cookie Consent", href: "/products/cookie-consent" },
        { name: "Integrations", href: "/integrations" },
    ],
    Solutions: [
        { name: "BFSI", href: "/industries/bfsi" },
        { name: "Healthcare", href: "/industries/healthcare" },
        { name: "E-commerce", href: "/industries/ecommerce" },
        { name: "Pricing", href: "/pricing" },
    ],
    Resources: [
        { name: "Blog", href: "/resources" },
        { name: "DPDP Guide", href: "/dpdp-guide" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Contact Us", href: "/contact" },
    ],
    Company: [
        { name: "About Us", href: "/about" },
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
    const [isLoading, setIsLoading] = useState(false);
    const [toast, setToast] = useState<ToastMessage | null>(null);

    // Auto-dismiss toast after 5 seconds
    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => setToast(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [toast]);

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setToast(null);

        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setToast({ type: "success", text: "Thanks for subscribing!" });
                setEmail("");
            } else {
                setToast({ type: "error", text: data.message || "Failed to subscribe. Please try again." });
            }
        } catch (error) {
            console.error("Subscribe error:", error);
            setToast({ type: "error", text: "Something went wrong. Please try again." });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <footer className="px-4 md:px-6 pb-6 mt-20">
            {/* Toast Notification */}
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: -50, x: "-50%" }}
                        className={`fixed top-24 left-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl ${toast.type === "success"
                            ? "bg-emerald-50 border border-emerald-200"
                            : "bg-red-50 border border-red-200"
                            }`}
                    >
                        {toast.type === "success" ? (
                            <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        ) : (
                            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                        )}
                        <p className={`font-medium ${toast.type === "success" ? "text-emerald-800" : "text-red-800"}`}>
                            {toast.text}
                        </p>
                        <button
                            onClick={() => setToast(null)}
                            className={`ml-2 p-1 rounded-full hover:bg-black/5 transition-colors ${toast.type === "success" ? "text-emerald-600" : "text-red-600"
                                }`}
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="relative bg-gradient-to-br from-[#152645] via-[#0e488b] to-[#152645] pt-20 pb-10 rounded-[3rem] overflow-hidden shadow-2xl">
                {/* Enhanced Background effects */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#a4d4ff]/20 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f59e0b]/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(164,212,255,0.1),transparent)]" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">

                    {/* Newsletter Section */}
                    <div className="border-b border-white/10 pb-12 mb-12">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="max-w-xl">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                    Stay ahead with DPDPA insights 🚀
                                </h3>
                                <p className="text-base text-white/80">
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
                                        className="w-full sm:w-80 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/50 pl-12 pr-4 py-3.5 rounded-full border border-white/20 focus:outline-none focus:border-[#a4d4ff]/50 focus:bg-white/15 transition-all"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="px-8 py-3.5 bg-[#f59e0b] hover:bg-[#d97706] text-[#152645] font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? "Subscribing..." : "Subscribe"}
                                    {!isLoading && <ArrowRight className="w-4 h-4" />}
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
                        {/* Brand Column */}
                        <div className="col-span-2">
                            <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
                                <img src="/dad.svg" alt="DataDefend Logo" className="h-10 w-auto brightness-0 invert group-hover:scale-105 transition-transform" />
                            </Link>
                            <p className="text-white/90 mb-6 max-w-sm leading-relaxed text-sm">
                                India's #1 AI-Powered DPDPA Compliance Platform. Trusted by 500+ enterprises to protect data and ensure compliance.
                            </p>
                        </div>

                        {/* Links Columns */}
                        {Object.entries(footerLinks).map(([section, links]) => (
                            <div key={section}>
                                <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">{section}</h4>
                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-white/70 hover:text-[#a4d4ff] transition-colors text-sm font-medium"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>



                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60 font-medium">
                        <p className="text-center md:text-left">© 2026 <a href="https://www.cybersec.enterprises/" target="_blank" rel="noopener noreferrer" className="text-[#a4d4ff] hover:text-white transition-colors">CYBERSEC</a> All rights reserved.</p>
                        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                            <Link href="/privacy" className="hover:text-[#a4d4ff] transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-[#a4d4ff] transition-colors">Terms of Service</Link>
                            <Link href="/cookies" className="hover:text-[#a4d4ff] transition-colors">Cookie Policy</Link>
                            <Link href="/security" className="hover:text-[#a4d4ff] transition-colors">Security</Link>
                        </div>
                    </div>

                    <div className="text-center mt-8 pt-8 border-t border-white/5">
                        <p className="text-xs text-white/40">Made with ❤️ in India 🇮🇳</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
