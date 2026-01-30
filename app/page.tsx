import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBadges } from "./components/TrustBadges";
import { FeatureGrid } from "./components/FeatureGrid";
import { FeatureShowcase } from "./components/FeatureShowcase";
import { ComparisonTable } from "./components/ComparisonTable";
import { IndustrySolutions } from "./components/IndustrySolutions";
import { ValueGrid } from "./components/ValueGrid";
import { TrustSection } from "./components/TrustSection";
import { CTABanner } from "./components/CTABanner";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-primary">
      <Navbar />
      <Hero />
      <TrustBadges />
      <FeatureGrid />
      <FeatureShowcase />
      <ComparisonTable />
      <IndustrySolutions />
      <ValueGrid />
      <TrustSection />
      <CTABanner />
      <Footer />
    </main>
  );
}
