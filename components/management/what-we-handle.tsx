"use client"

import * as React from "react"
import { Users, Building, Wrench, MessageSquare, ClipboardCheck, Settings } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Users,
    title: "Tenant structure and onboarding",
    description: "Systematic tenant screening and smooth onboarding process for new residents.",
  },
  {
    icon: Building,
    title: "Occupancy management",
    description: "Strategic occupancy planning to maintain optimal property utilization.",
  },
  {
    icon: ClipboardCheck,
    title: "Facility oversight",
    description: "Regular inspections and monitoring to maintain property standards.",
  },
  {
    icon: Wrench,
    title: "Maintenance coordination",
    description: "Timely repairs and preventive maintenance through trusted service partners.",
  },
  {
    icon: MessageSquare,
    title: "Resident communication",
    description: "Clear communication channels between management and residents.",
  },
  {
    icon: Settings,
    title: "Operational management",
    description: "Day-to-day operations handled professionally and efficiently.",
  },
]

export function WhatWeHandle() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 lg:py-30 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-[21px] md:text-[25px] lg:text-[33px] font-bold text-foreground leading-[115%] mb-4">
            What we handle.
          </h2>
          <p className="text-md text-muted-foreground max-w-2xl mx-auto">
            Comprehensive facility management services that ensure your residential buildings operate smoothly.
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
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-light-bg dark:bg-olive flex items-center justify-center mb-6">
                <service.icon className="h-7 w-7 text-olive dark:text-accent-lime" />
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
