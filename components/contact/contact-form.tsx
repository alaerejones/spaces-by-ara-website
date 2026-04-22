"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function ContactForm() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.3 })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("[v0] Form submitted:", formData)

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setSubmitted(true)
    setIsSubmitting(false)

    // Reset submitted state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="bg-background border-border"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email *
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

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Subject *
          </label>
          <Input
            id="subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="What is this about?"
            className="bg-background border-border"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message *
          </label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about your enquiry..."
            className="bg-background border-border min-h-32"
            disabled={isSubmitting}
          />
        </div>

        {submitted && (
          <div className="p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900/50 rounded-lg">
            <p className="text-sm text-green-800 dark:text-green-200">
              Thank you for your message! We&apos;ll get back to you soon.
            </p>
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting || submitted}
          className="w-full bg-olive text-white hover:bg-dark-green dark:bg-accent-lime dark:text-dark-green dark:hover:bg-accent-lime/90"
        >
          {isSubmitting ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}
        </Button>
      </form>
    </div>
  )
}
