import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            
            <div className="container mx-auto px-4 md:px-6 py-20 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-[#152645] mb-4">Privacy Policy</h1>
                <p className="text-gray-600 mb-8">Last updated: February 3, 2026</p>

                <div className="prose prose-lg max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">1. Introduction</h2>
                        <p className="text-gray-700 mb-4">
                            DataDefend is a product of <span className="text-[#0e488b] font-semibold">Cybersecure Digital Intelligence Private Limited</span>. This Privacy Policy describes how we collect, use, and protect your personal information when you use our DPDPA compliance platform and related services.
                        </p>
                        <p className="text-gray-700 mb-4">
                            As a privacy compliance platform, we are committed to protecting your data and maintaining the highest standards of data protection in accordance with the Digital Personal Data Protection Act (DPDPA), 2023 and other applicable laws.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">2. Information We Collect</h2>
                        <h3 className="text-xl font-semibold text-[#152645] mb-3">2.1 Information You Provide</h3>
                        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                            <li>Account information (name, email, phone number, company details)</li>
                            <li>Payment and billing information</li>
                            <li>Communication preferences and correspondence</li>
                            <li>Data you upload to the platform for compliance management</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-[#152645] mb-3">2.2 Automatically Collected Information</h3>
                        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                            <li>Device information and IP address</li>
                            <li>Usage data and analytics</li>
                            <li>Cookies and similar tracking technologies</li>
                            <li>Log files and error reports</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">3. How We Use Your Information</h2>
                        <p className="text-gray-700 mb-4">We use your information to:</p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                            <li>Provide and maintain our compliance platform services</li>
                            <li>Process your transactions and manage your account</li>
                            <li>Send important updates, security alerts, and compliance notifications</li>
                            <li>Improve our services through analytics and research</li>
                            <li>Comply with legal obligations and prevent fraud</li>
                            <li>Provide customer support and respond to inquiries</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">4. Data Sharing and Disclosure</h2>
                        <p className="text-gray-700 mb-4">
                            We do not sell your personal information. We may share your data with:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                            <li><strong>Cybersecure Digital Intelligence Private Limited:</strong> Our parent company for consolidated operations and support</li>
                            <li><strong>Service Providers:</strong> Trusted third parties who assist in delivering our services</li>
                            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                            <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">5. Data Security</h2>
                        <p className="text-gray-700 mb-4">
                            We implement industry-standard security measures including:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                            <li>End-to-end encryption for data in transit and at rest</li>
                            <li>Regular security audits and penetration testing</li>
                            <li>ISO 27001 and SOC 2 Type II certified infrastructure</li>
                            <li>Role-based access controls and multi-factor authentication</li>
                            <li>24/7 security monitoring and incident response</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">6. Your Rights Under DPDPA</h2>
                        <p className="text-gray-700 mb-4">As a data principal, you have the following rights:</p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                            <li><strong>Right to Access:</strong> Request access to your personal data</li>
                            <li><strong>Right to Correction:</strong> Request correction of inaccurate data</li>
                            <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                            <li><strong>Right to Grievance Redressal:</strong> File complaints with our Data Protection Officer</li>
                            <li><strong>Right to Nominate:</strong> Nominate another individual to exercise your rights</li>
                        </ul>
                        <p className="text-gray-700 mb-4">
                            To exercise these rights, contact us at <a href="mailto:privacy@datadefend.com" className="text-[#0e488b] hover:underline">privacy@datadefend.com</a>
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">7. Data Retention</h2>
                        <p className="text-gray-700 mb-4">
                            We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Typical retention periods include:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                            <li>Account data: Duration of account plus 7 years for compliance</li>
                            <li>Transaction records: 7 years from date of transaction</li>
                            <li>Communication logs: 3 years from last interaction</li>
                            <li>Marketing data: Until consent is withdrawn</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">8. International Data Transfers</h2>
                        <p className="text-gray-700 mb-4">
                            Your data is primarily stored and processed within India. If we transfer data internationally, we ensure adequate safeguards are in place through standard contractual clauses and compliance with DPDPA requirements for cross-border data transfers.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">9. Children's Privacy</h2>
                        <p className="text-gray-700 mb-4">
                            Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will take steps to delete it promptly.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">10. Changes to This Policy</h2>
                        <p className="text-gray-700 mb-4">
                            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Continued use of our services after changes constitutes acceptance of the updated policy.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">11. Contact Us</h2>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <p className="text-gray-700 mb-2"><strong>Data Protection Officer</strong></p>
                            <p className="text-gray-700 mb-2">DataDefend (A Product of Cybersecure Digital Intelligence Private Limited)</p>
                            <p className="text-gray-700 mb-2">Email: <a href="mailto:dpo@datadefend.com" className="text-[#0e488b] hover:underline">dpo@datadefend.com</a></p>
                            <p className="text-gray-700 mb-2">Phone: +91-XXX-XXX-XXXX</p>
                            <p className="text-gray-700">Address: [Your Company Address], India</p>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
