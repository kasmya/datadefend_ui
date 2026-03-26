"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Platform", href: "/platform" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact Us", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
    const [bannerVisible, setBannerVisible] = useState(true);

    const [timeLeft, setTimeLeft] = useState<{ months: number; days: number }>({ months: 0, days: 0 });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const targetDate = new Date("2027-05-14");
            const now = new Date();

            let months = (targetDate.getFullYear() - now.getFullYear()) * 12 + (targetDate.getMonth() - now.getMonth());
            let days = targetDate.getDate() - now.getDate();

            if (days < 0) {
                months--;
                const prevMonthDate = new Date(now.getFullYear(), now.getMonth(), 0);
                days += prevMonthDate.getDate();
            }

            setTimeLeft({ months, days });
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 60000 * 60);

        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearInterval(timer);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {/* Top Banner */}
            {bannerVisible && (
                <div className="bg-blue-800 text-white text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 md:px-6 relative">
                    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
                        <div className="flex-1 text-center">
                            <span className="font-medium">
                                🎉 Deadline: {timeLeft.months} mo | {timeLeft.days} days until May 13, 2027{" "}
                                <Link href="/dpdp-guide" className="underline hover:no-underline ml-1 text-blue-200">
                                    DPDP Rules Guide →
                                </Link>
                            </span>
                        </div>
                        <button
                            onClick={() => setBannerVisible(false)}
                            className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded cursor-pointer"
                            aria-label="Close banner"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}

            {/* Main Navbar - Floating Pill Logic */}
            <div className={`sticky z-50 transition-all duration-300 ${scrolled ? "top-0 mb-0" : "top-4 mb-4"} px-3 sm:px-4 md:px-6 lg:px-8 ${isOpen ? "md:px-6 lg:px-8" : ""}`}>
                <nav
                    className={`transition-all duration-300 mx-auto bg-white/95 backdrop-blur-md shadow-2xl ${isOpen ? "rounded-t-3xl md:rounded-full" : "rounded-full"} max-w-7xl border border-gray-100/50`}
                >
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex items-center justify-between h-14 sm:h-16 md:h-16">
                            {/* Logo */}
                            <Link href="/" className="flex items-center gap-2 pl-2" onClick={() => {
                                setIsOpen(false);
                                setMobileDropdown(null);
                            }}>
                                <img src="/dad.svg" alt="DataDefend Logo" className="h-7 sm:h-8 w-auto" />
                            </Link>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex items-center gap-8">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-sm sm:text-base font-medium transition-colors text-gray-700 hover:text-[#0e488b]"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className="hidden md:flex items-center gap-4 pr-2">
                                <Link
                                    href="/contact"
                                    className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors shadow-lg shadow-blue-500/20"
                                >
                                    Book Demo
                                </Link>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => {
                                    setIsOpen(!isOpen);
                                    if (!isOpen) setMobileDropdown(null);
                                }}
                                className={`md:hidden p-2 text-[#152645] relative z-50 cursor-pointer`}
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                className="md:hidden bg-white border-t border-gray-100 rounded-b-3xl overflow-hidden shadow-2xl"
                            >
                                <div className="px-4 sm:px-6 py-6 space-y-2 max-h-[calc(100vh-100px)] overflow-y-auto">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block text-base sm:text-lg text-gray-800 font-semibold py-4 px-6 hover:bg-gray-50 rounded-xl transition-all active:scale-[0.98] hover:shadow-md"
                                            onClick={() => {
                                                setIsOpen(false);
                                                setMobileDropdown(null);
                                            }}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <div className="pt-3 mt-3 border-t border-gray-100">
                                        <Link
                                            href="/contact"
                                            className="block w-full text-center px-5 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 active:scale-[0.98] transition-all"
                                            onClick={() => {
                                                setIsOpen(false);
                                                setMobileDropdown(null);
                                            }}
                                        >
                                            📅 Book a Demo
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>

                {/* Backdrop overlay for mobile menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10 md:hidden"
                            onClick={() => {
                                setIsOpen(false);
                                setMobileDropdown(null);
                            }}
                        />
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
