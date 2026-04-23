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

    try {
      // 1. Save to Supabase via API route
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          enquiry: `Type: ${formData.enquiryType}\nProperty: ${formData.property}\nMessage: ${formData.message}`,
        }),
      })

      if (!response.ok) {
        console.error('error')
      }

      // 2. Open WhatsApp with pre-filled message
      const waMessage =
        `🏠 *New Enquiry — Spaces by Ara*\n\n` +
        `*Type:* ${formData.enquiryType || 'Not specified'}\n` +
        `*Name:* ${formData.name}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Email:* ${formData.email}\n` +
        `*Property:* ${formData.property || 'Not specified'}\n` +
        `*Message:* ${formData.message || 'None'}\n\n` +
        `_Submitted via spacesbyara.com_`

      const waUrl = `https://wa.me/2348058092401?text=${encodeURIComponent(waMessage)}`
      window.open(waUrl, '_blank')

      // 3. Reset and show success
      setFormData({
        name: "",
        email: "",
        phone: "",
        enquiryType: "",
        property: "",
        message: "",
      })
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 6000)

    } catch (err) {
      console.error('Form submission error:', err)
      setError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="mb-8">
        <h2 className="text-[21px] md:text-[25px] font-bold text-foreground mb-2">
          Send us an enquiry
        </h2>
        <p className="text-sm text-muted-foreground">
          Fill in the form below. We'll respond via WhatsApp within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Full Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="bg-background border-border"
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
              className="bg-background border-border"
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Phone and Enquiry Type */}
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
              className="bg-background border-border"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="enquiryType" className="block text-sm font-medium text-foreground mb-2">
              Enquiry Type *
            </label>
            <select
              id="enquiryType"
              name="enquiryType"
              required
              value={formData.enquiryType}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-olive dark:focus:ring-accent-lime"
            >
              <option value="">Select enquiry type...</option>
              {enquiryTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Property of Interest */}
        <div>
          <label htmlFor="property" className="block text-sm font-medium text-foreground mb-2">
            Property of Interest <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <Input
            id="property"
            name="property"
            type="text"
            value={formData.property}
            onChange={handleChange}
            placeholder="e.g. Ara's Premium 2 Bedroom, Boys Quarter Unit..."
            className="bg-background border-border"
            disabled={isSubmitting}
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about your enquiry, preferred dates, budget, or any questions..."
            className="bg-background border-border min-h-32"
            disabled={isSubmitting}
          />
        </div>

        {/* Success message */}
        {submitted && (
          <div className="p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900/50 rounded-lg">
            <p className="text-sm text-green-800 dark:text-green-200 font-medium">
              ✓ Enquiry sent successfully!
            </p>
            <p className="text-sm text-green-700 dark:text-green-300 mt-1">
              We have recieved your message, our team will be in touch within 24 hours.
            </p>
          </div>
        )}

        {/* Error message */}
        {error && (
          <div className="p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 rounded-lg">
            <p className="text-sm text-red-800 dark:text-red-200">
              Something went wrong. Please try again or contact us directly on WhatsApp.
            </p>
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting || submitted}
          className="w-full bg-olive text-white hover:bg-dark-green dark:bg-accent-lime dark:text-dark-green dark:hover:bg-accent-lime/90 py-6 text-base"
        >
          {isSubmitting ? "Sending..." : submitted ? "Enquiry Sent ✓" : "Send"}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          By submitting you agree to be contacted by Spaces by Ara via WhatsApp or email.
        </p>

      </form>
    </div>
  )
}