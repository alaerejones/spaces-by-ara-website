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
  const [submitted, setSubmitted] = React.useState(false)
  const [error, setError] = React.useState(false)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)
    setError(false)

    const whatsappLinks: Record<string, string> = {
      "Request Property Viewing": "https://wa.link/zuwgh9",
      "Property Booking / Reservation": "https://wa.link/zuwgh9",
      "Investment Enquiry": "https://wa.link/vb05el",
      "Facility Management Enquiry": "https://wa.link/zz4zm7",
      "Service Partnership Enquiry": "https://wa.link/tvfwhd",
      "General Enquiry": "https://wa.link/hv3y8c",
    }

    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          enquiry: `Type: ${formData.enquiryType}\nProperty: ${formData.property}\nMessage: ${formData.message}`,
        }),
      })

      const waMessage =
        `🏠 *New Enquiry — Spaces by Ara*\n\n` +
        `*Type:* ${formData.enquiryType}\n` +
        `*Name:* ${formData.name}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Email:* ${formData.email}\n` +
        `*Property:* ${formData.property || "Not specified"}\n` +
        `*Message:* ${formData.message || "None"}\n\n` +
        `_Submitted via spacesbyara.com_`

      const waLink =
        whatsappLinks[formData.enquiryType] || "https://wa.link/hv3y8c"

      window.open(
        `${waLink}?text=${encodeURIComponent(waMessage)}`,
        "_blank"
      )

      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "contact_form_submit", {
          event_category: "Lead",
          event_label: formData.enquiryType || "General",
        })
      }

      setSubmitted(true)

      setFormData({
        name: "",
        email: "",
        phone: "",
        enquiryType: "",
        property: "",
        message: "",
      })

      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      console.error("Form submission error:", err)
      setError(true)
    } finally {
      setIsSubmitting(false)
    }
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
          Tell us what you're looking for and we'll continue the conversation on WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Full Name *
            </label>
            <Input
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
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
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              WhatsApp Number *
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+234 XXX XXX XXXX"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="enquiryType" className="block text-sm font-medium text-foreground mb-2">
              What can we help you with? *
            </label>

            <select
              id="enquiryType"
              name="enquiryType"
              required
              value={formData.enquiryType}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-olive dark:focus:ring-accent-lime"
            >
              <option value="">Select an option</option>
              {enquiryTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="property" className="block text-sm font-medium text-foreground mb-2">
            Property of Interest
          </label>
          <Input
            id="property"
            name="property"
            value={formData.property}
            onChange={handleChange}
            placeholder="Optional"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Tell us more
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about what you're looking for..."
            className="min-h-32"
            disabled={isSubmitting}
          />
        </div>

        {submitted && (
          <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-900/50 dark:bg-green-950/30">
            <p className="text-sm font-medium text-green-800 dark:text-green-200">
              ✓ You're all set.
            </p>
            <p className="mt-1 text-sm text-green-700 dark:text-green-300">
              We've prepared your message and opened the right WhatsApp conversation for your enquiry.
            </p>
          </div>
        )}

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900/50 dark:bg-red-950/30">
            <p className="text-sm text-red-800 dark:text-red-200">
              Something went wrong. Please try again or contact us directly on WhatsApp.
            </p>
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting || submitted}
          className="w-full bg-olive py-6 text-base text-white hover:bg-dark-green dark:bg-accent-lime dark:text-dark-green dark:hover:bg-accent-lime/90"
        >
          {isSubmitting
            ? "Sending..."
            : submitted
            ? "Message Prepared ✓"
            : "Continue to WhatsApp"}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          We'll take you to the correct WhatsApp conversation based on your enquiry.
        </p>
      </form>
    </div>
  )
}