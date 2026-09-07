"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const enquiryTypes = [
  "Request Property Viewing",
  "Property Booking / Reservation",
  "Investment Enquiry",
  "Facility Management Enquiry",
  "Service Partnership Enquiry",
  "General Enquiry",
]

export function ContactForm() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.3 })

  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    property: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const whatsappNumbers: Record<string, string> = {
    "Request Property Viewing": "2348058092401",
    "Property Booking / Reservation": "2348058092401",
    "Investment Enquiry": "2348058092401",
    "Facility Management Enquiry": "2348058092401",
    "Service Partnership Enquiry": "2348058092401",
    "General Enquiry": "2348058092401",
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)

    const message = `🏠 *Spaces by Ara Enquiry*

*Name:* ${formData.name}

*Email:* ${formData.email}

*Phone:* ${formData.phone}

*Enquiry Type:* ${formData.enquiryType}

*Property:* ${formData.property || "Not specified"}

*Message:* ${formData.message || "Not provided"}

_Submitted from spacesbyara.com_`

    const phone =
      whatsappNumbers[formData.enquiryType] || "2348058092401"

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "contact_form_continue", {
        event_category: "Lead",
        event_label: formData.enquiryType || "General",
      })
    }

    window.open(url, "_blank")

    setIsSubmitting(false)
  }

  return (
    <div
      id="contact-form"
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="mb-8">
        <h2 className="text-[25px] md:text-[28px] lg:text-[36px] font-bold text-foreground mb-2">
          Send Us an Enquiry
        </h2>

        <p className="text-base text-muted-foreground leading-relaxed">
          Tell us what you're looking for and we'll prepare your message.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name *
            </label>
            <Input
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number *
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+234 XXX XXX XXXX"
            />
          </div>

          <div>
            <label
              htmlFor="enquiryType"
              className="block text-sm font-medium mb-2"
            >
              What can we help you with? *
            </label>

            <select
              id="enquiryType"
              name="enquiryType"
              required
              value={formData.enquiryType}
              onChange={handleChange}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
            >
              <option value="">Select an option</option>

              {enquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="property" className="block text-sm font-medium mb-2">
            Property of Interest
          </label>

          <Input
            id="property"
            name="property"
            value={formData.property}
            onChange={handleChange}
            placeholder="Optional"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Tell us more
          </label>

          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about what you're looking for..."
            className="min-h-32"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-olive py-6 text-base text-white hover:bg-dark-green dark:bg-accent-lime dark:text-dark-green dark:hover:bg-accent-lime/90"
        >
          {isSubmitting ? "Preparing..." : "Continue"}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          We'll prepare your message so you can continue the conversation.
        </p>

      </form>
    </div>
  )
}