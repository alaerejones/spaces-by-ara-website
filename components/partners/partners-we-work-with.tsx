"use client"

import * as React from "react"
import { Sparkles, Wrench, Users, Zap, Droplets, Shield } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const partnerTypes = [
  {
    icon: Sparkles,
    title: "Cleaning Companies",
    description: "Residential cleaning services that help maintain high living standards.",
  },
  {
    icon: Wrench,
    title: "Facility Maintenance",
    description: "Property maintenance teams supporting day to day residential operations.",
  },
  {
    icon: Users,
    title: "Artisan Networks",
    description: "Skilled professionals for repairs, installations, and finishing work.",
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description: "Licensed electricians for safe residential electrical work.",
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    description: "Reliable plumbing teams for water and drainage systems.",
  },
  {
    icon: Shield,
    title: "Security Services",
    description: "Security providers helping create safe residential environments.",
  },
]

export function PartnersWeWorkWith() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      id="partner-types"
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
            Who We Partner With
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We collaborate with service providers who help deliver exceptional residential experiences across Lagos.
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
              style={{ transitionDelay: `${index * 120}ms` }}
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