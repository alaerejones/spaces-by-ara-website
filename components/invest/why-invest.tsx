"use client"

import * as React from "react"
import { TrendingUp, Shield, Users, BarChart3 } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const benefits = [
  {
    icon: TrendingUp,
    title: "Demand Driven",
    description:
      "Lagos continues to see demand for professionally managed homes with monthly rent, creating opportunities in long term residential living.",
  },
  {
    icon: Shield,
    title: "Professionally Managed",
    description:
      "Spaces by Ara oversees property operations, maintenance coordination, and resident management to keep homes running smoothly.",
  },
  {
    icon: Users,
    title: "Resident Focused",
    description:
      "Our model is built around working professionals, contractors, consultants, and people relocating within Lagos.",
  },
  {
    icon: BarChart3,
    title: "Flexible Investment Models",
    description:
      "Choose an investment structure that matches your level of participation while our team manages the day to day operations.",
  },
]

export function WhyInvest() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      id="investment-models"
      ref={ref}
      className="py-20 lg:py-30 bg-background"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={cn(
            "max-w-3xl mb-12 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-[21px] md:text-[28px] lg:text-[36px] font-bold text-foreground leading-[120%] mb-4">
            Why Investors Choose Spaces by Ara
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            We invest in a part of the market where demand is growing: professionally managed residential homes for long term living. Our role is to help turn that demand into a well managed residential experience while giving investors flexible ways to participate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={cn(
                "bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-light-bg dark:bg-olive flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-olive dark:text-accent-lime" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}