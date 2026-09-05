import { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contact Spaces by Ara | Monthly Rent, Property Management & Investments",
  description:
    "Contact Spaces by Ara for monthly rent apartments in Lagos, residential property management, investment opportunities, or service partnerships.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="py-20 lg:py-30 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}