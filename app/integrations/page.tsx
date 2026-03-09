"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Database, Cloud, Mail, ShoppingCart, Users, Code, Lock, Globe, Webhook, FileJson, Zap, Check } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const integrationCategories = [
    {
        name: "CRM & Marketing",
        icon: Users,
        color: "from-blue-500 to-cyan-500",
        integrations: [
            { name: "Salesforce", desc: "Sync consent data with CRM records" },
            { name: "HubSpot", desc: "Manage contacts with consent tracking" },
            { name: "Zoho CRM", desc: "Automated consent workflows" },
            { name: "Freshworks", desc: "Real-time consent synchronization" }
        ]
    },
    {
        name: "Databases",
        icon: Database,
        color: "from-purple-500 to-pink-500",
        integrations: [
            { name: "MySQL", desc: "Direct database integration" },
            { name: "PostgreSQL", desc: "Automated data discovery" },
            { name: "MongoDB", desc: "NoSQL data mapping" },
            { name: "Oracle DB", desc: "Enterprise database support" },
            { name: "SQL Server", desc: "Microsoft SQL integration" },
            { name: "Cassandra", desc: "Distributed database support" }
        ]
    },
    {
        name: "Cloud Storage",
        icon: Cloud,
        color: "from-amber-500 to-orange-500",
        integrations: [
            { name: "AWS S3", desc: "Cloud storage scanning" },
            { name: "Google Cloud Storage", desc: "GCP integration" },
            { name: "Azure Blob Storage", desc: "Microsoft cloud support" },
            { name: "Dropbox", desc: "File storage integration" }
        ]
    },
    {
        name: "E-commerce",
        icon: ShoppingCart,
        color: "from-green-500 to-emerald-500",
        integrations: [
            { name: "Shopify", desc: "E-commerce consent management" },
            { name: "WooCommerce", desc: "WordPress integration" },
            { name: "Magento", desc: "Enterprise e-commerce" },
            { name: "BigCommerce", desc: "Multi-store support" }
        ]
    },
    {
        name: "Email & Communication",
        icon: Mail,
        color: "from-red-500 to-rose-500",
        integrations: [
            { name: "SendGrid", desc: "Email marketing consent" },
            { name: "Mailchimp", desc: "Marketing automation" },
            { name: "Twilio", desc: "SMS & communication consent" },
            { name: "Amazon SES", desc: "Email service integration" }
        ]
    },
    {
        name: "Authentication",
        icon: Lock,
        color: "from-indigo-500 to-purple-500",
        integrations: [
            { name: "Auth0", desc: "Identity management" },
            { name: "Okta", desc: "SSO integration" },
            { name: "Azure AD", desc: "Microsoft identity" },
            { name: "Firebase Auth", desc: "Google authentication" }
        ]
    }
];

const technicalFeatures = [
    { icon: Webhook, title: "RESTful APIs", desc: "Complete API access for custom integrations" },
    { icon: Code, title: "SDKs", desc: "Python, Node.js, Java, .NET SDKs available" },
    { icon: FileJson, title: "Webhooks", desc: "Real-time event notifications" },
    { icon: Zap, title: "Zapier", desc: "Connect to 5000+ apps instantly" },
    { icon: Globe, title: "OAuth 2.0", desc: "Secure authentication standard" },
    { icon: Database, title: "Bulk Import/Export", desc: "CSV, Excel, JSON support" }
];

export default function IntegrationsPage() {
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
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0e488b]/10 rounded-full mb-6">
                            <Zap className="w-4 h-4 text-[#0e488b]" />
                            <span className="text-sm font-semibold text-[#152645]">7000+ Integrations</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#152645] mb-6">
                            Integrate DataDefend<br />With Your Entire Stack
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Connect DataDefend to your CRM, databases, cloud storage, and more. Go live in days, not months.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold rounded-xl transition-all shadow-lg cursor-pointer"
                            >
                                Request Integration
                            </Link>
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-white hover:bg-gray-50 text-[#152645] font-semibold rounded-xl transition-all border-2 border-gray-200 cursor-pointer"
                            >
                                View API Docs
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Integration Categories */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-4">
                            Pre-Built Integrations
                        </h2>
                        <p className="text-lg text-gray-600">
                            Connect to popular platforms out-of-the-box
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {integrationCategories.map((category, idx) => (
                            <motion.div
                                key={category.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6`}>
                                    <category.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#152645] mb-4">
                                    {category.name}
                                </h3>
                                <div className="space-y-3">
                                    {category.integrations.map((integration) => (
                                        <div key={integration.name} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-gray-900">{integration.name}</p>
                                                <p className="text-sm text-gray-600">{integration.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Features */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-4">
                            Developer-Friendly Tools
                        </h2>
                        <p className="text-lg text-gray-600">
                            Build custom integrations with our powerful APIs and SDKs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technicalFeatures.map((feature, idx) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-200"
                            >
                                <feature.icon className="w-12 h-12 text-[#0e488b] mb-4" />
                                <h3 className="text-xl font-bold text-[#152645] mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Code Example */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#152645] mb-4">
                            Simple Integration
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get started with just a few lines of code
                        </p>
                    </div>

                    <div className="bg-[#152645] rounded-3xl p-8 md:p-12 shadow-2xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <pre className="text-green-400 font-mono text-sm md:text-base overflow-x-auto">
{`// Install DataDefend SDK
npm install @datadefend/sdk

// Initialize
import { DataDefend } from '@datadefend/sdk';

const dd = new DataDefend({
  apiKey: 'your_api_key_here',
  environment: 'production'
});

// Collect consent
await dd.consent.collect({
  userId: 'user_123',
  purpose: 'Marketing',
  language: 'hi' // 22 Indian languages supported
});

// Check consent status
const hasConsent = await dd.consent.check({
  userId: 'user_123',
  purpose: 'Marketing'
});

console.log('Consent granted:', hasConsent);`}
                        </pre>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 bg-gradient-to-br from-[#152645] via-[#0e488b] to-[#152645]">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Need a Custom Integration?
                    </h2>
                    <p className="text-xl text-white/80 mb-8">
                        Our team can build custom integrations for your specific needs
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold rounded-xl transition-all shadow-lg cursor-pointer"
                    >
                        Contact Integration Team
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
