"use client"

import * as React from "react"
import { Wallet, Building, ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const structures = [
  {
    icon: Wallet,
    title: "Invest with Funds",
    description:
      "Fund residential apartments in Lagos designed for steady rental income. You can invest in furnished or unfurnished units, while Spaces by Ara manages tenants, payments, and daily operations.",
    features: [
      "Access furnished and unfurnished units",
      "Tenant sourcing and rent collection handled",
      "Maintenance and operations managed",
      "Consistent income structure",
    ],
  },
  {
    icon: Building,
    title: "Invest with Property",
    description:
      "Place your residential property under Spaces by Ara management for a fixed investment period. We manage tenants, occupancy, maintenance, and income delivery while you receive structured returns.",
    features: [
      "Submit an existing residential property",
      "Full tenant and occupancy management",
      "Maintenance and upkeep handled",
      "Defined investment term with returns",
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
            Investment options
          </h2>
          <p className="text-md text-muted-foreground max-w-2xl mx-auto">
            Choose how you want to invest. You can invest with funds or place an existing property under management for structured returns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
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