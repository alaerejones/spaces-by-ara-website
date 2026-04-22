"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

interface WaitlistSectionProps {
  title?: string
  description?: string
  subtitle?: string
}

export function WaitlistSection({
  title = "Be the first to know.",
  description = "New spaces, investment opportunities, and updates — straight to your inbox.",
  subtitle = "Get early access to premium spaces",
}: WaitlistSectionProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.3 })
  const [email, setEmail] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("[v0] Waitlist signup:", email)

    // Reset form
    setEmail("")
    setSubmitted(true)
    setIsSubmitting(false)

    // Reset submitted state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section
      ref={ref}
      className="py-16 lg:py-24 bg-gradient-to-r from-olive/10 via-transparent to-olive/10 dark:from-accent-lime/5 dark:via-transparent dark:to-accent-lime/5"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={cn(
            "max-w-2xl mx-auto text-center transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {subtitle && (
            <p className="text-sm font-semibold text-olive dark:text-accent-lime mb-3 uppercase tracking-wider">
              {subtitle}
            </p>
          )}
          <h2 className="text-[28px] md:text-[36px] font-bold text-foreground leading-[120%] mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting || submitted}
              className="flex-1 bg-white dark:bg-dark-green border-border"
            />
            <Button
              type="submit"
              disabled={isSubmitting || submitted}
              className="bg-olive text-white hover:bg-dark-green dark:bg-accent-lime dark:text-dark-green dark:hover:bg-accent-lime/90 whitespace-nowrap"
            >
              {isSubmitting
                ? "Joining..."
                : submitted
                  ? "Joined!"
                  : "Join the Waitlist"}
            </Button>
          </form>

          {submitted && (
            <p className="text-sm text-olive dark:text-accent-lime mt-4">
              Thank you! Check your email for updates.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
