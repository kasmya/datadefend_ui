import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Shield, Lock, Eye, Server, CheckCircle, AlertTriangle } from "lucide-react";

export default function Security() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#152645] to-[#0e488b] py-20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <Shield className="w-16 h-16 text-[#f59e0b] mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Security & Compliance</h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                        Enterprise-grade security built into every layer of DataDefend, a product of{" "}
                        <span className="text-[#f59e0b] font-semibold">
                            Cybersecure Digital Intelligence Private Limited
                        </span>
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-6 py-20 max-w-6xl">
                {/* Certifications */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-[#152645] mb-8 text-center">Certifications & Compliance</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { name: "ISO 27001", desc: "Information Security Management" },
                            { name: "SOC 2 Type II", desc: "Service Organization Controls" },
                            { name: "GDPR", desc: "European Data Protection" },
                            { name: "DPDPA", desc: "India Digital Privacy Act" }
                        ].map((cert) => (
                            <div key={cert.name} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-200 text-center">
                                <div className="w-16 h-16 bg-[#0e488b] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-bold text-[#152645] mb-2">{cert.name}</h3>
                                <p className="text-sm text-gray-600">{cert.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Security Features */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-[#152645] mb-8">Security Infrastructure</h2>
                    
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl border-2 border-[#0e488b]/20 hover:border-[#0e488b] transition-all">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#0e488b] rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Lock className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#152645] mb-2">End-to-End Encryption</h3>
                                    <p className="text-gray-700 mb-3">All data is encrypted both in transit (TLS 1.3) and at rest (AES-256). Your sensitive information is protected at every stage.</p>
                                    <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                                        <li>TLS 1.3 for data in transit</li>
                                        <li>AES-256 encryption for data at rest</li>
                                        <li>Encrypted database backups</li>
                                        <li>Secure key management with HSM</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border-2 border-[#0e488b]/20 hover:border-[#0e488b] transition-all">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#0e488b] rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Server className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#152645] mb-2">Secure Infrastructure</h3>
                                    <p className="text-gray-700 mb-3">Enterprise-grade cloud infrastructure with redundancy and disaster recovery capabilities.</p>
                                    <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                                        <li>Multi-region data centers for redundancy</li>
                                        <li>Automated daily backups with 30-day retention</li>
                                        <li>DDoS protection and web application firewall</li>
                                        <li>Intrusion detection and prevention systems</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border-2 border-[#0e488b]/20 hover:border-[#0e488b] transition-all">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#0e488b] rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Eye className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#152645] mb-2">Access Control & Monitoring</h3>
                                    <p className="text-gray-700 mb-3">Granular access controls with comprehensive audit logging and real-time monitoring.</p>
                                    <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                                        <li>Role-based access control (RBAC)</li>
                                        <li>Multi-factor authentication (MFA)</li>
                                        <li>Single Sign-On (SSO) integration</li>
                                        <li>Comprehensive audit logs for all activities</li>
                                        <li>24/7 security monitoring and alerting</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Security Practices */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-[#152645] mb-8">Security Practices</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                            <h3 className="text-lg font-bold text-[#152645] mb-3">Regular Security Audits</h3>
                            <ul className="space-y-2 text-gray-700 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>Annual third-party security assessments</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                    <span>Quarterly penetration testing</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>Continuous vulnerability scanning</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>Bug bounty program for responsible disclosure</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                            <h3 className="text-lg font-bold text-[#152645] mb-3">Employee Security</h3>
                            <ul className="space-y-2 text-gray-700 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>Background checks for all employees</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>Regular security awareness training</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>Strict data access policies</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>NDA and confidentiality agreements</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                            <h3 className="text-lg font-bold text-[#152645] mb-3">Incident Response</h3>
                            <ul className="space-y-2 text-gray-700 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>24/7 security operations center (SOC)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>Documented incident response plan</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>Automated threat detection and response</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>Customer notification within 72 hours</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                            <h3 className="text-lg font-bold text-[#152645] mb-3">Data Protection</h3>
                            <ul className="space-y-2 text-gray-700 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>Data residency options (India, EU, US)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>Secure data deletion upon request</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>Data anonymization capabilities</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>Compliance with data localization requirements</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Responsible Disclosure */}
                <section className="mb-16">
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border-2 border-amber-200">
                        <div className="flex items-start gap-4">
                            <AlertTriangle className="w-10 h-10 text-[#f59e0b] flex-shrink-0" />
                            <div>
                                <h2 className="text-2xl font-bold text-[#152645] mb-3">Responsible Disclosure Program</h2>
                                <p className="text-gray-700 mb-4">
                                    We value the security community's efforts in helping us maintain the security of our platform. If you discover a security vulnerability, please report it responsibly.
                                </p>
                                <div className="bg-white p-4 rounded-xl border border-amber-200">
                                    <h3 className="font-bold text-[#152645] mb-2">How to Report</h3>
                                    <p className="text-gray-700 text-sm mb-2">Email: <a href="mailto:security@datadefend.com" className="text-[#0e488b] hover:underline font-medium">security@datadefend.com</a></p>
                                    <p className="text-gray-700 text-sm mb-2">PGP Key: Available upon request</p>
                                    <p className="text-gray-600 text-sm mt-3">We commit to acknowledging reports within 48 hours and providing updates every 7 days.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trust Center */}
                <section className="mb-16">
                    <div className="bg-[#152645] text-white p-8 rounded-2xl text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Trust Center</h2>
                        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                            Access our security documentation, compliance reports, and certifications in our Trust Center.
                        </p>
                        <a href="/trust-center" className="inline-flex items-center gap-2 px-6 py-3 bg-[#f59e0b] hover:bg-[#d97706] text-[#152645] font-semibold rounded-full transition-colors">
                            Visit Trust Center
                            <Shield className="w-5 h-5" />
                        </a>
                    </div>
                </section>

                {/* Contact */}
                <section>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">Security Contact</h2>
                        <p className="text-gray-700 mb-4">
                            For security-related inquiries or to report a vulnerability:
                        </p>
                        <div className="space-y-2 text-gray-700">
                            <p><strong>Email:</strong> <a href="mailto:security@datadefend.com" className="text-[#0e488b] hover:underline">security@datadefend.com</a></p>
                            <p><strong>Parent Company:</strong> <span className="text-[#0e488b] font-semibold">Cybersecure Digital Intelligence Private Limited</span></p>
                            <p><strong>Response Time:</strong> Within 48 hours for security issues</p>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
