"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle, XCircle, X } from "lucide-react";

interface ToastMessage {
    type: "success" | "error";
    text: string;
}

// Email validation regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [toast, setToast] = useState<ToastMessage | null>(null);

    // Auto-dismiss toast after 5 seconds
    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => setToast(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [toast]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setToast(null);

        // Validate email format
        if (!emailRegex.test(formState.email)) {
            setToast({ type: "error", text: "Please enter a valid email address." });
            return;
        }

        // Validate phone number (at least 10 digits)
        const phoneDigits = formState.phone.replace(/\D/g, "");
        if (phoneDigits.length < 10) {
            setToast({ type: "error", text: "Please enter a valid phone number (at least 10 digits)." });
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formState),
            });

            const data = await response.json();

            if (response.ok) {
                setToast({ type: "success", text: "Thanks for contacting us! We'll get back to you shortly." });
                setFormState({ name: "", email: "", phone: "", subject: "", message: "" });
            } else {
                setToast({ type: "error", text: data.message || "Failed to send message. Please try again." });
            }
        } catch (error) {
            console.error("Contact form error:", error);
            setToast({ type: "error", text: "Something went wrong. Please try again." });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-gray-50 pt-32 pb-24 px-4 md:px-6">
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
            <div className="container mx-auto max-w-7xl">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 text-sm font-bold tracking-wide text-[#152645] bg-[#3b82f6]/20 rounded-full mb-6"
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
                            <div className="w-12 h-12 bg-[#fef3c7] rounded-2xl flex items-center justify-center mb-6 text-[#2563eb]">
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
                                            placeholder="Sandeep"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address <span className="text-red-500">*</span></label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm focus:border-[#0e488b] focus:ring-2 focus:ring-[#0e488b]/10 outline-none transition-all"
                                            placeholder="sandeep@company.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={formState.phone}
                                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm focus:border-[#0e488b] focus:ring-2 focus:ring-[#0e488b]/10 outline-none transition-all"
                                        placeholder="+91 98765 43210"
                                        required
                                    />
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
                                    disabled={isLoading}
                                    className="w-full py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-[#152645] font-bold rounded-full shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    {isLoading ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}
