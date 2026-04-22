import { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contact Us | Spaces by Ara",
  description: "Get in touch with Spaces by Ara. Contact us for enquiries, partnerships, or support. We&apos;re here to help.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="py-20 lg:py-30 bg-background">
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
      </div>
    </>
  )
}
