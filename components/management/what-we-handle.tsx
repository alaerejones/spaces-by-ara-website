"use client"

import * as React from "react"
import {
  Users,
  Building,
  Wrench,
  MessageSquare,
  ClipboardCheck,
  Settings,
} from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Users,
    title: "Tenant Onboarding",
    description:
      "A structured onboarding process that helps create a better resident experience from day one.",
  },
  {
    icon: Building,
    title: "Occupancy Management",
    description:
      "We help keep residential properties organized and ready for long term occupancy.",
  },
  {
    icon: ClipboardCheck,
    title: "Facility Oversight",
    description:
      "Regular property oversight that helps maintain residential standards.",
  },
  {
    icon: Wrench,
    title: "Maintenance Coordination",
    description:
      "Repairs and maintenance managed through trusted service partners.",
  },
  {
    icon: MessageSquare,
    title: "Resident Communication",
    description:
      "Clear communication between management and residents.",
  },
  {
    icon: Settings,
    title: "Day to Day Operations",
    description:
      "Professional operational management that keeps residential properties running smoothly.",
  },
]

export function WhatWeHandle() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      id="management-services"
      ref={ref}
      className="py-20 lg:py-30 bg-background"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-[21px] md:text-[28px] lg:text-[36px] font-bold text-foreground leading-[120%] mb-4">
            What We Manage
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our residential property management services are designed to help property owners protect value while delivering a better living experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                "bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-light-bg dark:bg-olive flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-olive dark:text-accent-lime" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}