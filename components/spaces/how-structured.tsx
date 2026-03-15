"use client"

import * as React from "react"
import { DoorOpen, Settings, Wallet } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const structures = [
  {
    icon: DoorOpen,
    title: "Private Rooms",
    description:
      "Residents have their own private bedroom within a shared apartment. Each home includes a shared kitchen, living area, and essential facilities maintained by management.",
  },
  {
    icon: Settings,
    title: "Managed Living",
    description:
      "Spaces by Ara manages the property, coordinates maintenance, and ensures the home operates smoothly. Residents benefit from structured house rules that keep the environment peaceful and organized.",
  },
  {
    icon: Wallet,
    title: "Designed for Monthly Earners",
    description:
      "Our housing structure exists for people who earn monthly income. Instead of yearly rent pressure, we structure living arrangements to be more realistic for modern working professionals.",
  },
]

export function HowStructured() {
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
          <h2 className="text-[21px] md:text-[25px] lg:text-[33px] font-bold text-foreground leading-[120%]">
            How our homes are structured.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {structures.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-light-bg dark:bg-olive flex items-center justify-center mb-6">
                <item.icon className="h-7 w-7 text-olive dark:text-accent-lime" />
              </div>
              <h3 className="text-l lg:text-xl font-semibold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
