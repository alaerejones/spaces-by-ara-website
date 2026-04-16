import { Metadata } from "next"
import { FaqsHero } from "@/components/faqs/faqs-hero"
import { FaqsAccordion } from "@/components/faqs/faqs-accordion"
import { FaqsCta } from "@/components/faqs/faqs-cta"

export const metadata: Metadata = {
  title: "FAQs | Spaces by Ara",
  description: "Frequently asked questions about Spaces by Ara homes, monthly rent structure, facility management, and investment opportunities in Lagos.",
}

export default function FaqsPage() {
  return (
    <>
      <FaqsHero />
      <FaqsAccordion />
      <FaqsCta />
    </>
  )
}
