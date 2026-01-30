import React from "react";
import { Lock, Server, ShieldCheck } from "lucide-react";

export function TrustSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-primary-light/50">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 rounded-l-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-accent/5 p-8 md:p-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                        Security First. Compliance Always.
                    </h2>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto mb-12">
                        Your data never leaves Indian soil. We adhere to the strictest global security standards to keep your enterprise safe.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="flex flex-col items-center group">
                            <div className="w-16 h-16 rounded-full bg-primary-light border border-white flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform duration-300">
                                <Lock className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-primary">End-to-End Encryption</h3>
                            <p className="text-sm text-text-muted mt-2">AES-256 for data at rest and TLS 1.3 for data in transit.</p>
                        </div>

                        <div className="flex flex-col items-center group">
                            <div className="w-16 h-16 rounded-full bg-primary-light border border-white flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform duration-300">
                                <Server className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-primary">100% Data Residency</h3>
                            <p className="text-sm text-text-muted mt-2">Hosted exclusively in MeitY empaneled data centers within India.</p>
                        </div>

                        <div className="flex flex-col items-center group">
                            <div className="w-16 h-16 rounded-full bg-primary-light border border-white flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform duration-300">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-primary">Global Standards</h3>
                            <p className="text-sm text-text-muted mt-2">ISO 27001, SOC 2 Type II, and HIPAA compliant infrastructure.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
