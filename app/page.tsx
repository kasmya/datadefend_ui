import { Hero } from "./components/Hero";
import { TrustBadges } from "./components/TrustBadges";
import { IndustryCompliance } from "./components/IndustryCompliance";
import { CustomerSegments } from "./components/CustomerSegments";
import { ValueProposition } from "./components/ValueProposition";
import { WhyChooseDataDefend } from "./components/WhyChooseDataDefend";
import { Navbar } from "./components/Navbar";
import { CTABanner } from "./components/CTABanner";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustBadges />
      <IndustryCompliance />
      <CustomerSegments />
      <ValueProposition />
      <WhyChooseDataDefend />
      <CTABanner />
      <Footer />
    </main>
  );
}
