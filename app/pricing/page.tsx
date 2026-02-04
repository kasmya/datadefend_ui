"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Check, X, ArrowRight, Zap, Shield, Sparkles, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const pricingPlans = [
    {
        name: "Starter",
        price: "₹0",
        period: "forever",
        description: "Perfect for startups and small businesses getting started with DPDP compliance",
        features: [
            "3,000 consent collections/month",
            "Basic cookie consent banner",
            "Email support",
            "DPDP-compliant consent artifacts",
            "Multi-language support (22 Indian languages)",
            "Basic analytics dashboard",
            "API access",
            "Community support"
        ],
        notIncluded: [
            "Data discovery & mapping",
            "Vendor risk assessments",
            "Priority support",
            "Custom integrations"
        ],
        cta: "Start Free Forever",
        highlight: false,
        badge: "Most Popular"
    },
    {
        name: "Professional",
        price: "₹49,999",
        period: "per month",
        description: "For growing businesses needing comprehensive compliance coverage",
        features: [
            "50,000 consent collections/month",
            "Advanced consent management",
            "Data discovery (up to 10 data sources)",
            "Privacy Impact Assessments (5/month)",
            "Vendor risk management (20 vendors)",
            "Priority email & chat support",
            "Custom consent workflows",
            "Advanced analytics & reporting",
            "DSAR automation",
            "Breach notification management",
            "Dedicated account manager",
            "99.9% SLA uptime"
        ],
        notIncluded: [
            "Unlimited data sources",
            "24/7 phone support"
        ],
        cta: "Start 14-Day Trial",
        highlight: true,
        badge: "Best Value"
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "contact us",
        description: "For large organizations with complex compliance needs",
        features: [
            "Unlimited consent collections",
            "Unlimited data sources",
            "Unlimited vendor assessments",
            "Unlimited PIAs/DPIAs",
            "On-premise deployment option",
            "24/7 phone support",
            "Dedicated compliance team",
            "Custom integrations",
            "Advanced security features",
            "Compliance consulting hours",
            "Training & onboarding",
            "99.99% SLA uptime",
            "Legal review support"
        ],
        notIncluded: [],
        cta: "Contact Sales",
        highlight: false,
        badge: "Enterprise"
    }
];

const comparisonFeatures = [
    { category: "Consent Management", features: ["Consent collections/month", "Multi-language support", "Cookie consent", "Consent API"] },
    { category: "Data Governance", features: ["Data discovery", "Data mapping", "DSAR automation", "Breach management"] },
    { category: "Risk & Compliance", features: ["Vendor assessments", "Privacy impact assessments", "Compliance dashboard", "Audit reports"] },
    { category: "Support", features: ["Support channels", "Response time", "Account manager", "Legal consultation"] }
];

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto max-w-7xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f59e0b]/10 rounded-full mb-6">
                            <Sparkles className="w-4 h-4 text-[#f59e0b]" />
                            <span className="text-sm font-semibold text-[#152645]">Simple, Transparent Pricing</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#152645] mb-6">
                            Start Free, Scale as You Grow
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            No hidden fees. No surprise charges. Get started with 3,000 free consent collections per month—forever.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pricingPlans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative rounded-3xl p-8 ${plan.highlight
                                        ? 'bg-gradient-to-b from-[#152645] to-[#0e488b] text-white shadow-2xl scale-105 border-2 border-[#f59e0b]'
                                        : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow'
                                    }`}
                            >
                                {plan.badge && (
                                    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-bold ${plan.highlight
                                            ? 'bg-[#f59e0b] text-white'
                                            : 'bg-[#152645] text-white'
                                        }`}>
                                        {plan.badge}
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-[#152645]'}`}>
                                        {plan.name}
                                    </h3>
                                    <div className="flex items-baseline gap-2 mb-3">
                                        <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-[#152645]'}`}>
                                            {plan.price}
                                        </span>
                                        <span className={`text-sm ${plan.highlight ? 'text-white/70' : 'text-gray-500'}`}>
                                            {plan.period}
                                        </span>
                                    </div>
                                    <p className={`text-sm ${plan.highlight ? 'text-white/80' : 'text-gray-600'}`}>
                                        {plan.description}
                                    </p>
                                </div>

                                <Link
                                    href="/contact"
                                    className={`block w-full text-center py-3 rounded-xl font-bold transition-all mb-6 cursor-pointer ${plan.highlight
                                            ? 'bg-[#f59e0b] hover:bg-[#d97706] text-white shadow-lg'
                                            : 'bg-[#152645] hover:bg-[#0e488b] text-white'
                                        }`}
                                >
                                    {plan.cta}
                                </Link>

                                <div className="space-y-3 mb-6">
                                    <p className={`text-sm font-semibold ${plan.highlight ? 'text-white' : 'text-[#152645]'}`}>
                                        Includes:
                                    </p>
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-[#f59e0b]' : 'text-green-500'
                                                }`} />
                                            <span className={`text-sm ${plan.highlight ? 'text-white/90' : 'text-gray-700'}`}>
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {plan.notIncluded.length > 0 && (
                                    <div className="pt-6 border-t border-gray-200/20 space-y-3">
                                        <p className={`text-sm font-semibold ${plan.highlight ? 'text-white/70' : 'text-gray-500'}`}>
                                            Not included:
                                        </p>
                                        {plan.notIncluded.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <X className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-white/40' : 'text-gray-400'
                                                    }`} />
                                                <span className={`text-sm ${plan.highlight ? 'text-white/60' : 'text-gray-500'}`}>
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Comparison */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-4">
                            Compare Plans in Detail
                        </h2>
                        <p className="text-gray-600">
                            Find the perfect plan for your compliance needs
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-[#152645] text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left font-semibold">Features</th>
                                        <th className="px-6 py-4 text-center font-semibold">Starter</th>
                                        <th className="px-6 py-4 text-center font-semibold bg-[#f59e0b]/20">Professional</th>
                                        <th className="px-6 py-4 text-center font-semibold">Enterprise</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="bg-gray-50">
                                        <td className="px-6 py-3 font-semibold text-[#152645]">Consent Management</td>
                                        <td></td>
                                        <td className="bg-[#f59e0b]/5"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-3 text-gray-700">Consent collections/month</td>
                                        <td className="px-6 py-3 text-center">3,000</td>
                                        <td className="px-6 py-3 text-center bg-[#f59e0b]/5">50,000</td>
                                        <td className="px-6 py-3 text-center">Unlimited</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-3 text-gray-700">Multi-language support</td>
                                        <td className="px-6 py-3 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                                        <td className="px-6 py-3 text-center bg-[#f59e0b]/5"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                                        <td className="px-6 py-3 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-6 py-3 font-semibold text-[#152645]">Data Governance</td>
                                        <td></td>
                                        <td className="bg-[#f59e0b]/5"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-3 text-gray-700">Data discovery sources</td>
                                        <td className="px-6 py-3 text-center"><X className="w-5 h-5 text-gray-400 mx-auto" /></td>
                                        <td className="px-6 py-3 text-center bg-[#f59e0b]/5">10</td>
                                        <td className="px-6 py-3 text-center">Unlimited</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-3 text-gray-700">DSAR automation</td>
                                        <td className="px-6 py-3 text-center"><X className="w-5 h-5 text-gray-400 mx-auto" /></td>
                                        <td className="px-6 py-3 text-center bg-[#f59e0b]/5"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                                        <td className="px-6 py-3 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-6 py-3 font-semibold text-[#152645]">Support</td>
                                        <td></td>
                                        <td className="bg-[#f59e0b]/5"></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-3 text-gray-700">Support channels</td>
                                        <td className="px-6 py-3 text-center text-sm">Email</td>
                                        <td className="px-6 py-3 text-center text-sm bg-[#f59e0b]/5">Email & Chat</td>
                                        <td className="px-6 py-3 text-center text-sm">24/7 Phone</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-3 text-gray-700">Account manager</td>
                                        <td className="px-6 py-3 text-center"><X className="w-5 h-5 text-gray-400 mx-auto" /></td>
                                        <td className="px-6 py-3 text-center bg-[#f59e0b]/5"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                                        <td className="px-6 py-3 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-12 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: "Is the Starter plan really free forever?",
                                a: "Yes! You can collect up to 3,000 consents per month at ₹0—forever. No credit card required, no hidden fees."
                            },
                            {
                                q: "Can I upgrade or downgrade my plan anytime?",
                                a: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately for upgrades and at the next billing cycle for downgrades."
                            },
                            {
                                q: "What payment methods do you accept?",
                                a: "We accept all major credit cards, debit cards, UPI, net banking, and wire transfers for Enterprise plans."
                            },
                            {
                                q: "Do you offer custom pricing for large enterprises?",
                                a: "Yes! Our Enterprise plan is fully customizable based on your specific needs. Contact our sales team for a tailored quote."
                            },
                            {
                                q: "What happens if I exceed my plan limits?",
                                a: "We'll notify you when you're approaching your limits. You can upgrade your plan or purchase additional capacity as needed."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                <h3 className="text-lg font-bold text-[#152645] mb-2">{faq.q}</h3>
                                <p className="text-gray-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 bg-gradient-to-br from-[#152645] via-[#0e488b] to-[#152645]">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Start Your DPDP Compliance Journey?
                    </h2>
                    <p className="text-xl text-white/80 mb-8">
                        Join 500+ companies already using DataDefend for compliance
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <Calendar className="w-5 h-5" />
                            Book a Demo
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white hover:bg-gray-100 text-[#152645] font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                        >
                            Start Free
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
