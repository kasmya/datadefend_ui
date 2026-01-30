"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/Button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [productMenuOpen, setProductMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const productLinks = [
        { name: "Consent Manager", href: "/products/consent-manager" },
        { name: "Data Discovery", href: "/products/data-discovery" },
        { name: "DSAR Automation", href: "/products/dsar-automation" },
        { name: "Vendor Risk", href: "/products/vendor-risk" },
        { name: "PIA Automation", href: "/products/pia-automation" },
        { name: "Data Anonymization", href: "/products/data-anonymization" },
        { name: "Breach Management", href: "/products/breach-management" },
        { name: "Audit Reporting", href: "/products/audit-reporting" },
        { name: "Trust Center", href: "/products/trust-center" },
    ];

    const navLinks = [
        { name: "Solutions", href: "/#solutions" },
        { name: "Our Story", href: "/#company" },
        { name: "Resources", href: "/#resources" },
        { name: "Partners", href: "/#partners" },
        { name: "Contact Us", href: "/#contact" },
    ];

    return (
        <>
            {/* Top Banner */}
            <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white text-center py-2 text-sm font-medium">
                <span className="mr-2">🎉</span>
                Deadline: <span className="font-bold">16 mo</span> | <span className="font-bold">11 days</span> until May 14, 2027
                <Link href="#" className="ml-2 underline hover:no-underline">Learn More →</Link>
            </div>

            <header
                className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
                        : "bg-white"
                    }`}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <img
                            src="/dad.svg"
                            alt="DataDefend Logo"
                            className="h-9 w-auto"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {/* Home */}
                        <Link
                            href="/"
                            className="px-4 py-2 text-sm font-medium text-primary hover:text-accent transition-colors"
                        >
                            Home
                        </Link>

                        {/* Product Dropdown */}
                        <div className="relative group">
                            <button
                                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary hover:text-accent transition-colors"
                                onMouseEnter={() => setProductMenuOpen(true)}
                                onClick={() => setProductMenuOpen(!productMenuOpen)}
                            >
                                Products <ChevronDown className="w-4 h-4" />
                            </button>

                            <div
                                className={`absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-2 mt-1 transition-all duration-200 origin-top-left ${productMenuOpen
                                        ? "opacity-100 scale-100 visible"
                                        : "opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible"
                                    }`}
                                onMouseLeave={() => setProductMenuOpen(false)}
                            >
                                <div className="grid grid-cols-1 gap-1">
                                    {productLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-primary-light hover:text-primary rounded-lg transition-colors font-medium"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-primary hover:text-accent transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden lg:flex items-center gap-3">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span className="text-lg">🌐</span>
                        </div>
                        <Button
                            size="sm"
                            className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/20 font-semibold px-5"
                        >
                            Demo
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden text-primary p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
                        >
                            <div className="flex flex-col p-4 gap-2">
                                <Link
                                    href="/"
                                    className="px-4 py-3 text-base font-medium text-primary hover:bg-primary-light rounded-lg"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Home
                                </Link>
                                <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    Products
                                </div>
                                {productLinks.slice(0, 4).map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="h-px bg-gray-100 my-2" />
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="px-4 py-3 text-base font-medium text-primary hover:bg-primary-light rounded-lg"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="h-px bg-gray-100 my-2" />
                                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                                    Book a Demo
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
}
