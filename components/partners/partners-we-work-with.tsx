"use client"

import * as React from "react"
import { Sparkles, Wrench, Users, Zap, Droplets, Shield } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const partnerTypes = [
  {
    icon: Sparkles,
    title: "Cleaning companies",
    description: "Regular cleaning and deep cleaning services for residential properties.",
  },
  {
    icon: Wrench,
    title: "Facility maintenance teams",
    description: "General maintenance and facility upkeep for residential buildings.",
  },
  {
    icon: Users,
    title: "Artisan networks",
    description: "Skilled tradespeople for various repair and installation work.",
  },
  {
    icon: Zap,
    title: "Electrical technicians",
    description: "Licensed electricians for electrical repairs and installations.",
  },
  {
    icon: Droplets,
    title: "Plumbing services",
    description: "Professional plumbers for water and drainage systems.",
  },
  {
    icon: Shield,
    title: "Security providers",
    description: "Security personnel and monitoring services for residential properties.",
  },
]

export function PartnersWeWorkWith() {
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
            Partners we work with.
          </h2>
          <p className="text-md text-muted-foreground max-w-2xl mx-auto">
            We collaborate with a range of service providers to ensure our residential properties are well maintained.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnerTypes.map((partner, index) => (
            <div
              key={partner.title}
              className={cn(
                "bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-light-bg dark:bg-olive flex items-center justify-center mb-6">
                <partner.icon className="h-6 w-6 text-olive dark:text-accent-lime" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {partner.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
