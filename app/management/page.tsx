import { Metadata } from "next"
import { ManagementHero } from "@/components/management/management-hero"
import { WhatWeHandle } from "@/components/management/what-we-handle"
import { WhoIsFor } from "@/components/management/who-is-for"
import { ManagementCta } from "@/components/management/management-cta"

export const metadata: Metadata = {
  title: "facility management | Spaces by Ara",
  description: "Professional residential facility management services in Lagos. We handle tenant structure, occupancy, facility oversight, and daily management operations.",
}

export default function ManagementPage() {
  return (
    <>
      <ManagementHero />
      <WhatWeHandle />
      <WhoIsFor />
      <ManagementCta />
    </>
  )
}
