"use client"

import * as React from "react"
import { CheckCircle, Clock, Briefcase } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const benefits = [
  {
    icon: Briefcase,
    title: "Consistent Work",
    description: "Service partners gain access to consistent operational work across managed residential properties.",
  },
  {
    icon: CheckCircle,
    title: "Professional Standards",
    description: "We prioritize reliability, professionalism, and responsiveness in all partnerships.",
  },
  {
    icon: Clock,
    title: "Long-term Relationships",
    description: "We build lasting partnerships with service providers who demonstrate consistent quality.",
  },
]

export function WhyPartner() {
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
            Why partner with us.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={cn(
                "text-center transition-all duration-500",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-olive dark:bg-accent-lime flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="h-6 w-6 text-white dark:text-dark-green" />
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
