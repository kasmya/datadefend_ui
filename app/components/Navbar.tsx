"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Home", href: "/" },
    {
        name: "Products",
        href: "#",
        dropdown: [
            { name: "Consent Manager", href: "/products/consent-manager" },
            { name: "Data Discovery", href: "/products/data-discovery" },
            { name: "DSAR Automation", href: "/products/dsar" },
            { name: "Vendor Risk", href: "/products/vendor-risk" },
        ],
    },
    { name: "Resources", href: "/resources" },
    { name: "Contact Us", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Top Banner */}
            <div className="bg-[#b45309] text-white text-sm py-2 text-center">
                <span className="font-medium">
                    🎉 Deadline: 16 mo | 11 days until May 14, 2027{" "}
                    <Link href="/resources" className="underline hover:no-underline ml-1 text-[#fcd34d]">
                        Learn More →
                    </Link>
                </span>
            </div>

            {/* Main Navbar - Floating Pill Logic */}
            <div className={`sticky top-4 z-50 transition-all duration-300 ${scrolled ? "px-4 md:px-8" : "px-4 md:px-8"}`}>
                <nav
                    className={`transition-all duration-300 mx-auto bg-white/95 backdrop-blur-md shadow-xl rounded-full max-w-7xl border border-gray-100/50`}
                >
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex items-center justify-between h-16">
                            {/* Logo */}
                            <Link href="/" className="flex items-center gap-2 pl-2">
                                {/* Using dad.svg logo as requested - No Invert needed for white background */}
                                <img src="/dad.svg" alt="DataDefend Logo" className="h-8 w-auto" />
                            </Link>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex items-center gap-8">
                                {navItems.map((item) => (
                                    <div
                                        key={item.name}
                                        className="relative"
                                        onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <Link
                                            href={item.href}
                                            className={`flex items-center gap-1 font-medium transition-colors text-gray-700 hover:text-[#0e488b]`}
                                        >
                                            {item.name}
                                            {item.dropdown && <ChevronDown className="w-4 h-4" />}
                                        </Link>

                                        {/* Dropdown */}
                                        {item.dropdown && (
                                            <AnimatePresence>
                                                {activeDropdown === item.name && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                        className="absolute top-full left-0 mt-4 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 overflow-hidden p-2"
                                                    >
                                                        {item.dropdown.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                href={subItem.href}
                                                                className="block px-4 py-3 text-gray-700 hover:bg-[#a4d4ff]/10 hover:text-[#0e488b] transition-colors rounded-xl font-medium"
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className="hidden md:flex items-center gap-4 pr-2">
                                <Link
                                    href="#demo"
                                    className="flex items-center gap-2 px-6 py-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-[#152645] font-semibold rounded-full transition-colors shadow-lg shadow-amber-500/20"
                                >
                                    Demo
                                </Link>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`md:hidden p-2 text-[#152645]`}
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
                                className="md:hidden bg-white border-t rounded-b-3xl overflow-hidden shadow-xl"
                            >
                                <div className="container mx-auto px-4 py-4 space-y-4">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block text-gray-700 font-medium py-3 px-4 hover:bg-gray-50 rounded-xl"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <Link
                                        href="#demo"
                                        className="block w-full text-center px-5 py-4 bg-[#f59e0b] text-[#152645] font-semibold rounded-xl"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Book a Demo
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </div>
        </>
    );
}
