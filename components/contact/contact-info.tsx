"use client"

import * as React from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const contactDetails = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+234 805 809 2401",
    href: "https://wa.me/2348058092401",
    type: "link",
  },
  {
    icon: Mail,
    label: "General Enquiries",
    value: "Spacesbyara@gmail.com",
    href: "mailto:Spacesbyara@gmail.com",
    type: "link",
  },
  {
    icon: Mail,
    label: "Support",
    value: "Support@spacesbyara.com",
    href: "mailto:Support@spacesbyara.com",
    type: "link",
  },
  {
    icon: Mail,
    label: "Operations",
    value: "Operations@spacesbyara.com",
    href: "mailto:Operations@spacesbyara.com",
    type: "link",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
    type: "text",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    type: "text",
  },
]

export function ContactInfo() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.3 })

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="space-y-6">
        {contactDetails.map((detail, index) => {
          const Icon = detail.icon
          return (
            <div
              key={index}
              className="p-4 rounded-lg bg-muted/50 border border-border hover:border-olive dark:hover:border-accent-lime transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Icon className="h-6 w-6 text-olive dark:text-accent-lime" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    {detail.label}
                  </p>
                  {detail.type === "link" ? (
                    <Link
                      href={detail.href!}
                      target={detail.label === "WhatsApp" ? "_blank" : undefined}
                      rel={detail.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                      className="text-sm font-semibold text-foreground hover:text-olive dark:hover:text-accent-lime transition-colors break-all"
                    >
                      {detail.value}
                    </Link>
                  ) : (
                    <p className="text-sm font-semibold text-foreground">
                      {detail.value}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick Links */}
      <div className="mt-10 pt-8 border-t border-border">
        <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
        <div className="space-y-2">
          <Link
            href="/spaces"
            className="block text-sm text-muted-foreground hover:text-olive dark:hover:text-accent-lime transition-colors"
          >
            Browse Available Spaces
          </Link>
          <Link
            href="/faqs"
            className="block text-sm text-muted-foreground hover:text-olive dark:hover:text-accent-lime transition-colors"
          >
            Frequently Asked Questions
          </Link>
          <Link
            href="/invest"
            className="block text-sm text-muted-foreground hover:text-olive dark:hover:text-accent-lime transition-colors"
          >
            Investment Opportunities
          </Link>
        </div>
      </div>
    </div>
  )
}
