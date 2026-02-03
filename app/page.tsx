import { Hero } from "./components/Hero";
import { MeityBadge } from "./components/MeityBadge";
import { TrustBadges } from "./components/TrustBadges";
import { IndustryCompliance } from "./components/IndustryCompliance";
import { CustomerSegments } from "./components/CustomerSegments";
import { ValueProposition } from "./components/ValueProposition";
import { WhyChooseDataDefend } from "./components/WhyChooseDataDefend";
import { Navbar } from "./components/Navbar";
import { CTABanner } from "./components/CTABanner";
import { Footer } from "./components/Footer";
import { ComplianceCalculator } from "./components/ComplianceCalculator";
import { CustomerLogos } from "./components/CustomerLogos";
import { FAQ } from "./components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <MeityBadge />
      <CustomerLogos />
      <TrustBadges />
      <IndustryCompliance />
      <CustomerSegments />
      <ValueProposition />
      <WhyChooseDataDefend />
      {/* Compliance Calculator Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-7xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#152645] mb-4">
            Test Your DPDP Compliance Score
          </h2>
          <p className="text-lg text-gray-600">
            Answer 7 quick questions to discover your compliance gaps
          </p>
        </div>
        <ComplianceCalculator />
      </section>
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
