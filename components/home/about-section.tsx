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
            About Spaces by Ara
          </h2>

          <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
            <p>
              Spaces by Ara is building a better way to live, own, and manage residential properties in Lagos.
            </p>

            <p>
              We combine professionally managed monthly rental homes, residential facility management, and property investment into one ecosystem that works for tenants, property owners, investors, and trusted service partners.
            </p>

            <p>
              Every Space is managed with long term living in mind, because better homes create better experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}