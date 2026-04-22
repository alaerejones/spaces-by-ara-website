import { Metadata } from "next"
import { InvestHero } from "@/components/invest/invest-hero"
import { WhyInvest } from "@/components/invest/why-invest"
import { InvestmentStructures } from "@/components/invest/investment-structures"
import { WaitlistSection } from "@/components/waitlist-section"
import { InvestCta } from "@/components/invest/invest-cta"

export const metadata: Metadata = {
  title: "Invest | Spaces by Ara",
  description: "Invest in structured residential living in Lagos. Partner with Spaces by Ara for professionally managed housing investments.",
}

export default function InvestPage() {
  return (
    <>
      <InvestHero />
      <WhyInvest />
      <InvestmentStructures />
      <WaitlistSection
        title="Ready to Start Investing?"
        description="Join our investor waitlist and receive updates on new opportunities and investment details."
        subtitle="Get Early Access"
      />
      <InvestCta />
    </>
  )
}
