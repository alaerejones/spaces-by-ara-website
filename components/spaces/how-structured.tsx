"use client"

import * as React from "react"
import { DoorOpen, Settings, Wallet } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const structures = [
  {
    icon: DoorOpen,
    title: "Private Rooms & Full Apartments",
    description:
      "Choose a private room in a shared apartment or a full apartment, all designed for comfortable long term living.",
  },
  {
    icon: Settings,
    title: "Professionally Managed",
    description:
      "We coordinate maintenance, keep shared spaces in excellent condition, and ensure every Ara Space stays well managed.",
  },
  {
    icon: Wallet,
    title: "Monthly Rent",
    description:
      "Our homes are structured for people who earn monthly, making long term renting more practical than traditional yearly payments.",
  },
]

export function HowStructured() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      id="why-tenants-choose"
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
            Why Our Tenants Choose Ara Space
          </h2>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            Everything about an Ara Space is designed to make long term living in Lagos simpler, more comfortable, and professionally managed.
          </p>
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
                <item.icon className="h-6 w-6 text-olive dark:text-accent-lime" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4">
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