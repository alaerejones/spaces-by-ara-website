"use client"

import * as React from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function AboutSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section id="about" ref={ref} className="py-20 lg:py-30 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={cn(
            "max-w-3xl mx-auto text-center transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-[21px] md:text-[25px] lg:text-[33px] font-bold text-foreground leading-[120%] mb-6">
            About Spaces by Ara.
          </h2>
          <div className="space-y-6 text-md text-muted-foreground leading-relaxed">
            <p>
              Spaces by Ara is a property management company focused on improving how long term renting works in Nigeria.
            </p>
            <p>
              We manage residential homes and structure them for people who earn monthly and want stable housing without the financial pressure of annual rent payments.
            </p>
            <p>
              Our team oversees tenant structure, facility maintenance, and operational management to ensure each home is safe, organized, and well maintained.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
