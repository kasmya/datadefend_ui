"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formState);
        alert("Thanks for contacting us! We'll get back to you shortly.");
        setFormState({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <main className="min-h-screen bg-gray-50 pt-32 pb-24 px-4 md:px-6">
            <div className="container mx-auto max-w-7xl">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 text-sm font-bold tracking-wide text-[#152645] bg-[#f59e0b]/20 rounded-full mb-6"
                    >
                        GET IN TOUCH
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#152645] mb-6"
                    >
                        We'd love to hear from you
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600"
                    >
                        Have a question about DPDPA compliance? Need a demo?
                        Our team is ready to help you navigate India's data privacy landscape.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Email Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-8 rounded-[2.5rem] border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-[#e0f2fe] rounded-2xl flex items-center justify-center mb-6 text-[#0e488b]">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-[#152645] mb-2">Chat to sales</h3>
                            <p className="text-gray-500 mb-4">Speak to our friendly team.</p>
                            <a href="mailto:sales@datadefend.com" className="text-[#0e488b] font-semibold hover:underline">sales@datadefend.com</a>
                        </motion.div>

                        {/* Support Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white p-8 rounded-[2.5rem] border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-[#fef3c7] rounded-2xl flex items-center justify-center mb-6 text-[#d97706]">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-[#152645] mb-2">Chat to support</h3>
                            <p className="text-gray-500 mb-4">We're here to help.</p>
                            <a href="mailto:support@cybersec.enterprises" className="text-[#0e488b] font-semibold hover:underline">support@cybersec.enterprises</a>
                        </motion.div>

                        {/* Phone Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-white p-8 rounded-[2.5rem] border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-[#dbeafe] rounded-2xl flex items-center justify-center mb-6 text-[#0e488b]">
                                <Phone className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-[#152645] mb-2">Call us</h3>
                            <p className="text-gray-500 mb-4">Mon-Fri from 9am to 6pm IST</p>
                            <a href="tel:+911243534897" className="text-[#0e488b] font-semibold hover:underline">+91 0124 3534897</a>
                        </motion.div>

                        {/* Office Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className="bg-white p-8 rounded-[2.5rem] border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-[#dcfce7] rounded-2xl flex items-center justify-center mb-6 text-[#15803d]">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-[#152645] mb-2">Visit us</h3>
                            <p className="text-gray-500 mb-4">Visit our office HQ.</p>
                            <p className="text-[#0e488b] font-semibold">
                                Kamla Palace, 2, 2nd Floor,<br />
                                Old Jail Road, Near Sohna Chowk,<br />
                                Gurugram, Haryana - 122001
                            </p>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white p-8 md:p-12 rounded-[3rem] border border-gray-200 shadow-xl h-full"
                        >
                            <h2 className="text-2xl font-bold text-[#152645] mb-8">Send us a message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm focus:border-[#0e488b] focus:ring-2 focus:ring-[#0e488b]/10 outline-none transition-all"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm focus:border-[#0e488b] focus:ring-2 focus:ring-[#0e488b]/10 outline-none transition-all"
                                            placeholder="john@company.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        value={formState.subject}
                                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm focus:border-[#0e488b] focus:ring-2 focus:ring-[#0e488b]/10 outline-none transition-all"
                                        placeholder="How can we help?"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                                    <textarea
                                        id="message"
                                        rows={6}
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm focus:border-[#0e488b] focus:ring-2 focus:ring-[#0e488b]/10 outline-none transition-all resize-none"
                                        placeholder="Tell us about your requirements..."
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-[#f59e0b] hover:bg-[#d97706] text-[#152645] font-bold rounded-full shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}
