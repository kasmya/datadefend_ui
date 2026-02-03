import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            
            <div className="container mx-auto px-4 md:px-6 py-20 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-[#152645] mb-4">Terms of Service</h1>
                <p className="text-gray-600 mb-8">Last updated: February 3, 2026</p>

                <div className="prose prose-lg max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">1. Agreement to Terms</h2>
                        <p className="text-gray-700 mb-4">
                            These Terms of Service ("Terms") govern your access to and use of DataDefend, a DPDPA compliance platform operated by <span className="text-[#0e488b] font-semibold">Cybersecure Digital Intelligence Private Limited</span> ("we," "us," or "our").
                        </p>
                        <p className="text-gray-700 mb-4">
                            By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our services.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">2. Description of Service</h2>
                        <p className="text-gray-700 mb-4">
                            DataDefend is an AI-powered compliance platform that helps organizations:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                            <li>Manage consent and data privacy compliance</li>
                            <li>Conduct data discovery and mapping</li>
                            <li>Automate DSAR (Data Subject Access Requests)</li>
                            <li>Perform vendor risk assessments</li>
                            <li>Manage breach notifications and compliance reporting</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">3. Account Registration</h2>
                        <p className="text-gray-700 mb-4">
                            To use DataDefend, you must:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                            <li>Provide accurate, current, and complete information during registration</li>
                            <li>Maintain the security of your account credentials</li>
                            <li>Promptly update account information if it changes</li>
                            <li>Accept responsibility for all activities under your account</li>
                            <li>Notify us immediately of any unauthorized access</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">4. Subscription and Payment</h2>
                        <h3 className="text-xl font-semibold text-[#152645] mb-3">4.1 Subscription Plans</h3>
                        <p className="text-gray-700 mb-4">
                            We offer various subscription plans with different features and pricing. Subscription fees are billed in advance on a monthly or annual basis.
                        </p>
                        
                        <h3 className="text-xl font-semibold text-[#152645] mb-3">4.2 Payment Terms</h3>
                        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                            <li>All fees are exclusive of applicable taxes</li>
                            <li>Payment must be made in Indian Rupees (INR)</li>
                            <li>Recurring charges will be automatically billed to your payment method</li>
                            <li>Failed payments may result in service suspension</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-[#152645] mb-3">4.3 Refund Policy</h3>
                        <p className="text-gray-700 mb-4">
                            Refunds are provided on a case-by-case basis within 30 days of purchase for annual plans. Monthly subscriptions are non-refundable.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">5. Acceptable Use</h2>
                        <p className="text-gray-700 mb-4">You agree not to:</p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                            <li>Violate any applicable laws or regulations</li>
                            <li>Infringe on intellectual property rights</li>
                            <li>Upload malicious code, viruses, or harmful content</li>
                            <li>Attempt to gain unauthorized access to our systems</li>
                            <li>Interfere with the proper functioning of the platform</li>
                            <li>Use the service for illegal or unauthorized purposes</li>
                            <li>Resell or redistribute our services without authorization</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">6. Intellectual Property Rights</h2>
                        <p className="text-gray-700 mb-4">
                            The DataDefend platform, including all content, features, and functionality, is owned by Cybersecure Digital Intelligence Private Limited and is protected by international copyright, trademark, and other intellectual property laws.
                        </p>
                        <p className="text-gray-700 mb-4">
                            You retain ownership of your data uploaded to the platform. By using our services, you grant us a limited license to process your data solely for providing the services.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">7. Data Processing and Privacy</h2>
                        <p className="text-gray-700 mb-4">
                            Our processing of your data is governed by our Privacy Policy and Data Processing Agreement. We act as a data processor for customer data uploaded to the platform, while customers act as data fiduciaries under DPDPA.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">8. Service Level Agreement (SLA)</h2>
                        <p className="text-gray-700 mb-4">
                            We strive to maintain 99.9% uptime for our services. Our SLA commitments include:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                            <li>24/7 platform availability (excluding scheduled maintenance)</li>
                            <li>Maximum 4 hours scheduled maintenance window per month</li>
                            <li>Service credits for downtime exceeding SLA commitments</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">9. Termination</h2>
                        <h3 className="text-xl font-semibold text-[#152645] mb-3">9.1 By You</h3>
                        <p className="text-gray-700 mb-4">
                            You may cancel your subscription at any time through your account settings or by contacting support. Cancellation will be effective at the end of your current billing period.
                        </p>

                        <h3 className="text-xl font-semibold text-[#152645] mb-3">9.2 By Us</h3>
                        <p className="text-gray-700 mb-4">
                            We may suspend or terminate your account if you violate these Terms, fail to pay fees, or engage in fraudulent activity. We will provide 30 days notice for termination without cause.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">10. Limitation of Liability</h2>
                        <p className="text-gray-700 mb-4">
                            To the maximum extent permitted by law, Cybersecure Digital Intelligence Private Limited and DataDefend shall not be liable for:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                            <li>Indirect, incidental, or consequential damages</li>
                            <li>Loss of profits, data, or business opportunities</li>
                            <li>Damages exceeding fees paid in the past 12 months</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">11. Warranty Disclaimer</h2>
                        <p className="text-gray-700 mb-4">
                            The services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that the services will be error-free or uninterrupted.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">12. Governing Law and Dispute Resolution</h2>
                        <p className="text-gray-700 mb-4">
                            These Terms are governed by the laws of India. Any disputes shall be resolved through arbitration in accordance with the Indian Arbitration and Conciliation Act, 1996, conducted in [City], India.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">13. Changes to Terms</h2>
                        <p className="text-gray-700 mb-4">
                            We reserve the right to modify these Terms at any time. Material changes will be notified via email at least 30 days before they take effect. Continued use of the services after changes constitutes acceptance.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">14. Contact Information</h2>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <p className="text-gray-700 mb-2"><strong>Cybersecure Digital Intelligence Private Limited (DataDefend)</strong></p>
                            <p className="text-gray-700 mb-2">Email: <a href="mailto:legal@datadefend.com" className="text-[#0e488b] hover:underline">legal@datadefend.com</a></p>
                            <p className="text-gray-700 mb-2">Support: <a href="mailto:support@datadefend.com" className="text-[#0e488b] hover:underline">support@datadefend.com</a></p>
                            <p className="text-gray-700">Address: [Your Company Address], India</p>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
