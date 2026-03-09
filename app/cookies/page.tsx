import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function CookiePolicy() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            
            <div className="container mx-auto px-4 md:px-6 py-20 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-[#152645] mb-4">Cookie Policy</h1>
                <p className="text-gray-600 mb-8">Last updated: February 3, 2026</p>

                <div className="prose prose-lg max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">1. What Are Cookies?</h2>
                        <p className="text-gray-700 mb-4">
                            Cookies are small text files stored on your device when you visit our website. DataDefend, a product of <span className="text-[#0e488b] font-semibold">Cybersecure Digital Intelligence Private Limited</span>, uses cookies to enhance your experience, analyze usage, and provide personalized content.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">2. Types of Cookies We Use</h2>
                        
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-[#152645] mb-3">2.1 Strictly Necessary Cookies</h3>
                            <p className="text-gray-700 mb-2">These cookies are essential for the website to function properly.</p>
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-3">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-blue-300">
                                            <th className="text-left py-2 text-[#152645]">Cookie Name</th>
                                            <th className="text-left py-2 text-[#152645]">Purpose</th>
                                            <th className="text-left py-2 text-[#152645]">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr className="border-b border-blue-200">
                                            <td className="py-2">session_id</td>
                                            <td className="py-2">Maintains user session</td>
                                            <td className="py-2">Session</td>
                                        </tr>
                                        <tr className="border-b border-blue-200">
                                            <td className="py-2">csrf_token</td>
                                            <td className="py-2">Security protection</td>
                                            <td className="py-2">Session</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2">auth_token</td>
                                            <td className="py-2">User authentication</td>
                                            <td className="py-2">30 days</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-[#152645] mb-3">2.2 Performance Cookies</h3>
                            <p className="text-gray-700 mb-2">These cookies help us understand how visitors interact with our website.</p>
                            <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-3">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-green-300">
                                            <th className="text-left py-2 text-[#152645]">Cookie Name</th>
                                            <th className="text-left py-2 text-[#152645]">Purpose</th>
                                            <th className="text-left py-2 text-[#152645]">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr className="border-b border-green-200">
                                            <td className="py-2">_ga</td>
                                            <td className="py-2">Google Analytics tracking</td>
                                            <td className="py-2">2 years</td>
                                        </tr>
                                        <tr className="border-b border-green-200">
                                            <td className="py-2">_gid</td>
                                            <td className="py-2">Google Analytics identifier</td>
                                            <td className="py-2">24 hours</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2">_gat</td>
                                            <td className="py-2">Request rate throttling</td>
                                            <td className="py-2">1 minute</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-[#152645] mb-3">2.3 Functional Cookies</h3>
                            <p className="text-gray-700 mb-2">These cookies enable enhanced functionality and personalization.</p>
                            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mt-3">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-purple-300">
                                            <th className="text-left py-2 text-[#152645]">Cookie Name</th>
                                            <th className="text-left py-2 text-[#152645]">Purpose</th>
                                            <th className="text-left py-2 text-[#152645]">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr className="border-b border-purple-200">
                                            <td className="py-2">preferences</td>
                                            <td className="py-2">Store user preferences</td>
                                            <td className="py-2">1 year</td>
                                        </tr>
                                        <tr className="border-b border-purple-200">
                                            <td className="py-2">language</td>
                                            <td className="py-2">Language preference</td>
                                            <td className="py-2">1 year</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2">theme</td>
                                            <td className="py-2">UI theme preference</td>
                                            <td className="py-2">1 year</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-[#152645] mb-3">2.4 Targeting/Advertising Cookies</h3>
                            <p className="text-gray-700 mb-2">These cookies are used to deliver relevant advertisements and track campaign performance.</p>
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-3">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-blue-300">
                                            <th className="text-left py-2 text-[#152645]">Cookie Name</th>
                                            <th className="text-left py-2 text-[#152645]">Purpose</th>
                                            <th className="text-left py-2 text-[#152645]">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr className="border-b border-blue-200">
                                            <td className="py-2">_fbp</td>
                                            <td className="py-2">Facebook Pixel</td>
                                            <td className="py-2">3 months</td>
                                        </tr>
                                        <tr className="border-b border-blue-200">
                                            <td className="py-2">_gcl_au</td>
                                            <td className="py-2">Google Ads conversion</td>
                                            <td className="py-2">3 months</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2">li_sugr</td>
                                            <td className="py-2">LinkedIn tracking</td>
                                            <td className="py-2">3 months</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">3. Third-Party Cookies</h2>
                        <p className="text-gray-700 mb-4">We use the following third-party services that may set cookies:</p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                            <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                            <li><strong>Google Ads:</strong> For advertising and remarketing campaigns</li>
                            <li><strong>Facebook Pixel:</strong> For social media advertising</li>
                            <li><strong>LinkedIn Insight Tag:</strong> For B2B marketing analytics</li>
                            <li><strong>Hotjar:</strong> For heatmaps and user behavior analysis</li>
                            <li><strong>Intercom:</strong> For customer support chat functionality</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">4. How to Manage Cookies</h2>
                        <h3 className="text-xl font-semibold text-[#152645] mb-3">4.1 Cookie Consent Manager</h3>
                        <p className="text-gray-700 mb-4">
                            When you first visit our website, you'll see a cookie banner allowing you to accept or customize your cookie preferences. You can access this manager again by clicking the cookie settings link in the footer.
                        </p>

                        <h3 className="text-xl font-semibold text-[#152645] mb-3">4.2 Browser Settings</h3>
                        <p className="text-gray-700 mb-4">Most browsers allow you to manage cookie preferences:</p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                            <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                            <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                            <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                            <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-[#152645] mb-3">4.3 Opt-Out Links</h3>
                        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                            <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#0e488b] hover:underline">Google Analytics Opt-out</a></li>
                            <li><a href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noopener noreferrer" className="text-[#0e488b] hover:underline">Facebook Cookie Settings</a></li>
                            <li><a href="https://www.linkedin.com/psettings/guest-controls" target="_blank" rel="noopener noreferrer" className="text-[#0e488b] hover:underline">LinkedIn Cookie Controls</a></li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">5. Impact of Blocking Cookies</h2>
                        <p className="text-gray-700 mb-4">
                            Blocking or deleting cookies may impact your experience:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                            <li>Some features may not function properly</li>
                            <li>You may need to log in repeatedly</li>
                            <li>Personalization and preferences may be lost</li>
                            <li>Analytics data won't be collected for site improvement</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">6. DPDPA Compliance</h2>
                        <p className="text-gray-700 mb-4">
                            As a DPDPA-compliant platform, we ensure that:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                            <li>Consent is obtained before non-essential cookies are set</li>
                            <li>Cookie information is clearly disclosed</li>
                            <li>Users can withdraw consent at any time</li>
                            <li>Cookie data is processed securely and lawfully</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">7. Updates to This Policy</h2>
                        <p className="text-gray-700 mb-4">
                            We may update this Cookie Policy to reflect changes in our practices or legal requirements. The "Last updated" date at the top indicates when changes were made.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-[#152645] mb-4">8. Contact Us</h2>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <p className="text-gray-700 mb-2">For questions about our Cookie Policy:</p>
                            <p className="text-gray-700 mb-2"><strong>DataDefend (A Product of Cybersecure Digital Intelligence Private Limited)</strong></p>
                            <p className="text-gray-700 mb-2">Email: <a href="mailto:privacy@datadefend.com" className="text-[#0e488b] hover:underline">privacy@datadefend.com</a></p>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
