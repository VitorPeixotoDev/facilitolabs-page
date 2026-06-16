import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { EcosystemSection } from "@/components/landing/EcosystemSection";
import { ClimatePortfolioSection } from "@/components/landing/ClimatePortfolioSection";
import { NR1IntelligenceSection } from "@/components/landing/NR1IntelligenceSection";
import { ClosingCycleSection } from "@/components/landing/ClosingCycleSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <HeroSection />
        <EcosystemSection />
        <ClimatePortfolioSection />
        <NR1IntelligenceSection />
        <ClosingCycleSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
