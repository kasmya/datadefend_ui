import React from "react";
import { Linkedin, Twitter, Facebook } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-primary pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <img
                                src="/dad.svg"
                                alt="DataDefend Logo"
                                className="h-10 w-auto brightness-0 invert"
                            />
                        </Link>
                        <p className="text-text-muted mb-6 max-w-sm">
                            India's #1 AI-Powered DPDPA Compliance Platform. Helping enterprises automate privacy operations and build trust with their customers.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Platform</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-text-muted hover:text-accent transition-colors">Consent Manager</Link></li>
                            <li><Link href="#" className="text-text-muted hover:text-accent transition-colors">Data Discovery</Link></li>
                            <li><Link href="#" className="text-text-muted hover:text-accent transition-colors">Generic DSAR</Link></li>
                            <li><Link href="#" className="text-text-muted hover:text-accent transition-colors">Vendor Risk</Link></li>
                            <li><Link href="#" className="text-text-muted hover:text-accent transition-colors">Integrations</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-text-muted hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link href="#" className="text-text-muted hover:text-accent transition-colors">Careers</Link></li>
                            <li><Link href="#" className="text-text-muted hover:text-accent transition-colors">Customers</Link></li>
                            <li><Link href="#" className="text-text-muted hover:text-accent transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Resources</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-text-muted hover:text-accent transition-colors">Blog</Link></li>
                            <li><Link href="#" className="text-text-muted hover:text-accent transition-colors">DPDPA Guide</Link></li>
                            <li><Link href="#" className="text-text-muted hover:text-accent transition-colors">Legal Glossary</Link></li>
                            <li><Link href="#" className="text-text-muted hover:text-accent transition-colors">Help Center</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-text-muted text-sm">
                        © {new Date().getFullYear()} DataDefend Technologies Pvt Ltd. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-text-muted">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-xs text-text-muted/50">Made with ❤️ in India</p>
                </div>
            </div>
        </footer>
    );
}
