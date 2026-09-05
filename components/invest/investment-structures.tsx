"use client"

import * as React from "react"
import { Wallet, Building, ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const structures = [
  {
    icon: Wallet,
    title: "Invest with Capital",
    description:
      "Participate in Spaces by Ara's residential investment model by investing capital into professionally managed homes built for long term living in Lagos.",
    features: [
      "Flexible investment entry options",
      "Professionally managed residential homes",
      "Clear investment structure and reporting",
      "Long term value focused model",
    ],
  },
  {
    icon: Building,
    title: "Invest with Your Property",
    description:
      "Place your residential property into Spaces by Ara's managed housing model while retaining ownership and allowing our team to oversee day to day operations.",
    features: [
      "Retain ownership of your property",
      "Professional property management",
      "Maintenance coordination",
      "Structured residential management",
    ],
  },
]

export function InvestmentStructures() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section
  id="investment-options"
  ref={ref}
  className="py-20 lg:py-30 bg-secondary"
>


      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-[21px] md:text-[28px] lg:text-[36px] font-bold text-foreground leading-[120%] mb-4">
            Choose How You Want to Invest
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you're investing capital or contributing a residential property, Spaces by Ara offers professionally managed investment pathways built around long term residential living in Lagos.
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
              <div className="w-12 h-12 rounded-xl bg-light-bg dark:bg-olive flex items-center justify-center mb-6">
                <structure.icon className="h-6 w-6 text-olive dark:text-accent-lime" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                {structure.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {structure.description}
              </p>

              <ul className="space-y-3 mt-auto">
                {structure.features.map((feature) => (
                  <li
                    key={feature}
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