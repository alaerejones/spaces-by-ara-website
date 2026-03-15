"use client"

import * as React from "react"
import { Home, Building2, Users, ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const structures = [
  {
    icon: Home,
    title: "Furnished Apartment Investment",
    description: "Investors participate in furnishing residential units designed for managed occupancy. Spaces by Ara handles tenant management, payments, and operational oversight.",
    features: [
      "Invest in fully furnished units",
      "Professional tenant management",
      "Maintenance coordination included",
      "Regular occupancy reports",
    ],
  },
  {
    icon: Building2,
    title: "Unfurnished Apartment Investment",
    description: "Investors provide residential units structured for long term occupancy while management oversees tenants and building operations.",
    features: [
      "Invest in unfurnished units",
      "Long-term tenant structure",
      "Building operations oversight",
      "Property upkeep management",
    ],
  },
  {
    icon: Users,
    title: "Property Owner Partnership",
    description: "Property owners with completed buildings can partner with Spaces by Ara as the facility manager. Management oversees tenants, building operations, and structured occupancy while owners receive agreed returns.",
    features: [
      "Partner with existing properties",
      "Full facility management",
      "Structured occupancy system",
      "Agreed return structure",
    ],
  },
]

export function InvestmentStructures() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 lg:py-30 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-[21px] md:text-[25px] lg:text-[33px] font-bold text-foreground leading-[115%] mb-4">
            Investment structures.
          </h2>
          <p className="text-md text-muted-foreground max-w-2xl mx-auto">
            Choose the investment model that aligns with your goals and level of involvement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {structures.map((structure, index) => (
            <div
              key={structure.title}
              className={cn(
                "bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 flex flex-col",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-light-bg dark:bg-olive flex items-center justify-center mb-6">
                <structure.icon className="h-7 w-7 text-olive dark:text-accent-lime" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {structure.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {structure.description}
              </p>
              <ul className="space-y-3 mt-auto">
                {structure.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-foreground">
                    <ArrowRight className="h-4 w-4 text-olive dark:text-accent-lime flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
