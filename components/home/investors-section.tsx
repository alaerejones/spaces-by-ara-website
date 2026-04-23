"use client"

import * as React from "react"
import Link from "next/link"
import { Wallet, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const investmentTypes = [
  {
    icon: Wallet,
    title: "Invest with Funds",
    description:
      "Invest with funds and earn consistent returns through a structured income model. Choose an amount that works for you and receive steady payouts without being involved in management.",
  },
  {
    icon: Building,
    title: "Invest with Property",
    description:
      "Have a property in Lagos? Place it into a fixed investment term and earn steady returns while it is professionally managed. You retain ownership and receive income throughout the period.",
  },
]

export function InvestorsSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 lg:py-30 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-12 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-[21px] md:text-[25px] lg:text-[33px] font-bold text-foreground leading-[120%] mb-5">
            Invest in professionally managed residential property in Lagos
          </h2>
          <p className="text-md text-muted-foreground leading-relaxed">
            Choose how you want to invest. You can invest with funds or with an existing property. Spaces by Ara manages tenants, operations, and income delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {investmentTypes.map((type, index) => (
            <div
              key={type.title}
              className={cn(
                "bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-light-bg dark:bg-olive flex items-center justify-center mb-6">
                <type.icon className="h-7 w-7 text-olive dark:text-accent-lime" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {type.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {type.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={cn(
            "text-center transition-all duration-700 delay-500",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <Button
            asChild
            size="lg"
            className="bg-olive text-white hover:bg-dark-green btn-glow dark:bg-accent-lime dark:text-dark-green dark:hover:bg-accent-lime/90 px-8"
          >
            <Link href="/documents/investor-brochure.pdf">
              View Investment Details
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}