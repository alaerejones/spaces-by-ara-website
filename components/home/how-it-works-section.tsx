"use client"

import * as React from "react"
import { Calendar, Home, Settings } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Calendar,
    title: "Monthly rent structure",
    description:
      "Our Houses are designed for people who earn monthly. Instead of paying a full year upfront, residents pay rent in a structure that fits their income flow.",
  },
  {
    icon: Home,
    title: "Shared apartments today",
    description:
      "Our current Houses provide private rooms within shared apartments. Each resident has their own room while sharing living areas in well managed Houses.",
  },
  {
    icon: Settings,
    title: "More options coming",
    description:
      "Additional housing options including full apartments and furnished units will be introduced as the network of Spaces by Ara Houses grows.",
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
            Simple living designed for real life.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-light-bg dark:bg-olive flex items-center justify-center mb-6">
                <feature.icon className="h-7 w-7 text-olive dark:text-accent-lime" />
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-4">
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
