"use client"

import * as React from "react"
import { Home, Building2, Landmark, Handshake } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Home,
    title: "Rent an Ara Space",
    description:
      "Move into professionally managed monthly rental apartments and homes in secure, accessible locations across Lagos. Available for long term living with furnished and unfurnished options.",
  },
  {
    icon: Building2,
    title: "Have Your Property Managed",
    description:
      "Keep your residential property occupied, maintained, and professionally managed while we handle day to day facility operations and resident experience.",
  },
  {
    icon: Landmark,
    title: "Explore Investment Opportunities",
    description:
      "Access residential property investment opportunities built around professionally managed homes with long term value in Lagos State.",
  },
  {
    icon: Handshake,
    title: "Become a Service Partner",
    description:
      "Work with Spaces by Ara as a trusted service partner supporting resident experiences across our properties.",
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
          <h2 className="text-[21px] md:text-[25px] lg:text-[33px] font-bold text-foreground leading-[120%]">
            One Company. Four Ways To Be Part of It.
          </h2>
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