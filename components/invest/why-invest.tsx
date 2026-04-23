"use client"

import * as React from "react"
import { TrendingUp, Shield, Users, BarChart3 } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const benefits = [
  {
    icon: TrendingUp,
    title: "Growing Demand",
    description: "Urban professionals in Lagos continue to face increasing challenges with yearly rent structures.",
  },
  {
    icon: Shield,
    title: "Professional Management",
    description: "Spaces by Ara handles all daily operations, tenant management, and property upkeep.",
  },
  {
    icon: Users,
    title: "Consistent Occupancy",
    description: "Our model focuses on structured residential living designed around monthly income earners.",
  },
  {
    icon: BarChart3,
    title: "Structured Returns",
    description: "Investors participate through different structures depending on their investment goals.",
  },
]

export function WhyInvest() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 lg:py-30 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={cn(
            "max-w-3xl mb-12 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-[21px] md:text-[25px] lg:text-[33px] font-bold text-foreground leading-[115%] mb-6">
            Why invest in managed housing.
          </h2>
          <p className="text-md text-muted-foreground leading-relaxed">
            Urban professionals in Lagos continue to face increasing challenges with yearly rent structures. Spaces by Ara addresses this gap by organizing residential living for monthly income earners. This demand creates opportunities for investors to participate in a managed housing model focused on consistent occupancy and professional property management.
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
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-light-bg dark:bg-olive flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-olive dark:text-accent-lime" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-md leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
