"use client"

import * as React from "react"
import { Home, Building2, Landmark, Handshake } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Home,
    title: "Live better",
    description:
      "Professionally managed monthly rental homes in Lagos for people looking for stable long term living.",
  },
  {
    icon: Building2,
    title: "Own better",
    description:
      "Residential property management that keeps your property well maintained, professionally managed, and resident ready.",
  },
  {
    icon: Landmark,
    title: "Invest better",
    description:
      "Investment opportunities built around professionally managed residential properties with long term value in mind.",
  },
  {
    icon: Handshake,
    title: "Grow together",
    description:
      "Service partnerships that strengthen how residential properties are managed and experienced across Lagos.",
  },
]

export function HowItWorksSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      id="how-it-works"
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
          <h2 className="text-[21px] md:text-[25px] lg:text-[33px] font-bold text-foreground leading-[120%] mb-4">
            One company. Four ways to be part of it.
          </h2>

          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Whether you're looking for a home, managing a property, investing,
            or partnering with us, Spaces by Ara creates better residential
            experiences across Lagos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-light-bg dark:bg-olive flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-olive dark:text-accent-lime" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}