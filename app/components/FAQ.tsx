"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What is DPDP Act and why should I care?",
        answer: "The Digital Personal Data Protection (DPDP) Act, 2023 is India's comprehensive data protection law. Organizations must comply by May 13, 2027, or face penalties up to ₹250 crore. It requires explicit consent for data processing, ensures user rights, and mandates secure data handling practices."
    },
    {
        question: "When do I need to take user consent?",
        answer: "You need user consent when collecting personal data for any purpose, sharing data with third parties, using data for purposes different from what was initially communicated, or retaining data beyond the original purpose of collection."
    },
    {
        question: "What is a Consent Manager under DPDP?",
        answer: "A Consent Manager is a registered entity with the Data Protection Board who acts as a single point of contact enabling users to give, manage, review, and withdraw their consent through an accessible, transparent platform. DataDefend provides MeitY-approved consent management solutions."
    },
    {
        question: "How long does it take to implement DataDefend?",
        answer: "Most organizations go live within 2 weeks. Our implementation includes: Week 1 - System integration, consent flow design, and data mapping. Week 2 - Testing, training, and go-live. Enterprise customers with complex requirements may need 3-4 weeks."
    },
    {
        question: "Do I need to take consent for cookies on my website?",
        answer: "While the DPDP Act's stance on cookies is evolving, if cookies are considered 'personal data' (as they can identify and profile users), you'll need explicit consent. We recommend implementing cookie consent banners to stay compliant with DPDP standards and global best practices."
    },
    {
        question: "What happens if I process personal data without consent?",
        answer: "Under the DPDP Act, processing personal data without valid consent can result in penalties up to ₹50 crores per instance. The Data Protection Board has the authority to investigate violations and impose fines based on the severity and nature of the breach."
    },
    {
        question: "Can I use DataDefend if my data is on-premise?",
        answer: "Yes! DataDefend offers both cloud (SaaS) and on-premise deployment options. Our on-premise solution gives you complete control over your data while still providing all compliance features including consent management, data discovery, and vendor risk assessment."
    },
    {
        question: "How does DataDefend handle multi-language consent?",
        answer: "DataDefend supports all 22 Indian languages mandated by the DPDP Rules. Our consent notices automatically adapt to user preferences, ensuring clear communication and valid consent collection regardless of the user's preferred language."
    },
    {
        question: "What's included in the free plan?",
        answer: "Our Starter plan includes: 3,000 consent collections/month forever at ₹0, basic cookie consent banners, email support, DPDP-compliant consent artifacts, multi-language support, basic analytics dashboard, API access, and community support. Perfect for startups and small businesses."
    },
    {
        question: "How secure is my data with DataDefend?",
        answer: "DataDefend is built with enterprise-grade security: ISO 27001 certified infrastructure, end-to-end encryption, regular security audits, SOC 2 Type II compliance, role-based access control, and 99.9% uptime SLA. We also offer on-premise deployment for maximum control."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#152645] mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600">
                        Everything you need to know about DPDP compliance and DataDefend
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left p-6 flex items-center justify-between cursor-pointer"
                            >
                                <h3 className="text-lg font-bold text-[#152645] pr-4">
                                    {faq.question}
                                </h3>
                                <ChevronDown
                                    className={`w-6 h-6 text-[#0e488b] flex-shrink-0 transition-transform duration-300 ${
                                        openIndex === index ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            <motion.div
                                initial={false}
                                animate={{
                                    height: openIndex === index ? "auto" : 0,
                                    opacity: openIndex === index ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-600 mb-4">Still have questions?</p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-3 bg-[#152645] hover:bg-[#0e488b] text-white font-semibold rounded-xl transition-all cursor-pointer"
                    >
                        Talk to an Expert
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
