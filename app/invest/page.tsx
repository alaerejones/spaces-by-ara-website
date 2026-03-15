import { Metadata } from "next"
import { InvestHero } from "@/components/invest/invest-hero"
import { WhyInvest } from "@/components/invest/why-invest"
import { InvestmentStructures } from "@/components/invest/investment-structures"
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
      <InvestCta />
    </>
  )
}
