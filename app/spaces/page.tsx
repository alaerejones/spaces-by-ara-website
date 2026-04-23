import { Metadata } from "next"
import { SpacesHero } from "@/components/spaces/spaces-hero"
import { HowStructured } from "@/components/spaces/how-structured"
import { WhatToExpect } from "@/components/spaces/what-to-expect"
import { CurrentOptions } from "@/components/spaces/current-options"
import { PrivateApartments } from "@/components/spaces/private-apartments"
import { WaitlistSection } from "@/components/waitlist-section"
import { SpacesCta } from "@/components/spaces/spaces-cta"

export const metadata: Metadata = {
  title: "Find a Home | Spaces by Ara",
  description: "Find professionally managed residential Homes in Lagos designed for monthly earners. Private rooms in shared apartments with structured living.",
}

export default function SpacesPage() {
  return (
    <>
      <SpacesHero />
      <HowStructured />
      <WhatToExpect />
      <CurrentOptions />
      <PrivateApartments />
      {/* <WaitlistSection
        title="Never Miss an Opportunity"
        description="Join our waitlist to get notified about new properties and exclusive deals."
      /> */}
      <SpacesCta />
    </>
  )
}
