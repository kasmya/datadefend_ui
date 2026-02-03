import { Hero } from "./components/Hero";
import { TrustBadges } from "./components/TrustBadges";
import { CustomerSegments } from "./components/CustomerSegments";
import { ValueProposition } from "./components/ValueProposition";
import { Navbar } from "./components/Navbar";
import { CTABanner } from "./components/CTABanner";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative z-50">
        <Navbar />
      </div>
      <Hero />
      <TrustBadges />
      <CustomerSegments />
      <ValueProposition />
      <CTABanner />
      <Footer />
    </main>
  );
}
