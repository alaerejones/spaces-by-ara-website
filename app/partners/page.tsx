import { Metadata } from "next"
import { PartnersHero } from "@/components/partners/partners-hero"
import { PartnersWeWorkWith } from "@/components/partners/partners-we-work-with"
import { WhyPartner } from "@/components/partners/why-partner"
import { PartnersCta } from "@/components/partners/partners-cta"

export const metadata: Metadata = {
  title: "Partners | Spaces by Ara",
  description: "Partner with Spaces by Ara as a service provider. We work with cleaning companies, maintenance technicians, and facility management teams.",
}

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />
      <PartnersWeWorkWith />
      <WhyPartner />
      <PartnersCta />
    </>
  )
}
