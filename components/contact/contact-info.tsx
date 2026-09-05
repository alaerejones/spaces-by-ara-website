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
    href: "https://wa.link/hv3y8c",
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
    label: "Operations",
    value: "Operations@spacesbyara.com",
    href: "mailto:Operations@spacesbyara.com",
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
      <div className="space-y-5">
        {contactDetails.map((detail) => {
          const Icon = detail.icon

          return (
            <div
              key={detail.label}
              className="p-5 rounded-xl bg-muted/50 border border-border hover:border-olive dark:hover:border-accent-lime transition-colors"
            >
              <div className="flex gap-4">
                <Icon className="h-5 w-5 text-olive dark:text-accent-lime mt-1" />

                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {detail.label}
                  </p>

                  {detail.type === "link" ? (
                    <Link
                      href={detail.href!}
                      target={detail.label === "WhatsApp" ? "_blank" : undefined}
                      rel={detail.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                      className="font-semibold hover:text-olive dark:hover:text-accent-lime transition-colors break-all"
                    >
                      {detail.value}
                    </Link>
                  ) : (
                    <p className="font-semibold">{detail.value}</p>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-10 pt-8 border-t border-border">
        <h3 className="font-semibold mb-4">Explore More</h3>

        <div className="space-y-3">
          <Link href="/spaces" className="block hover:text-olive dark:hover:text-accent-lime">
            Find a Home
          </Link>

          <Link href="/management" className="block hover:text-olive dark:hover:text-accent-lime">
            Property Management
          </Link>

          <Link href="/invest" className="block hover:text-olive dark:hover:text-accent-lime">
            Investment Opportunities
          </Link>

          <Link href="/partners" className="block hover:text-olive dark:hover:text-accent-lime">
            Become a Service Partner
          </Link>

          <Link href="/faqs" className="block hover:text-olive dark:hover:text-accent-lime">
            Frequently Asked Questions
          </Link>
        </div>
      </div>
    </div>
  )
}