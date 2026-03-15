import { HeroSection } from "@/components/home/hero-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import { AvailableHomesSection } from "@/components/home/available-homes-section"
import { PropertyOwnersSection } from "@/components/home/property-owners-section"
import { InvestorsSection } from "@/components/home/investors-section"
import { PartnersSection } from "@/components/home/partners-section"
import { AboutSection } from "@/components/home/about-section"
import { FaqSection } from "@/components/home/faq-section"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <AvailableHomesSection />
      <PropertyOwnersSection />
      <InvestorsSection />
      <PartnersSection />
      <AboutSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}
