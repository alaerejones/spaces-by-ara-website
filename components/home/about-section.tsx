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
              Spaces by Ara is a residential facility management company creating better living experiences across Lagos through professionally managed monthly rental apartments and homes.
            </p>

            <p>
              We manage homes people can move into, help property owners keep residential buildings professionally managed, create residential property investment opportunities, and work with trusted service partners who keep our properties running smoothly every day.
            </p>

            <p>
              We believe better homes create better lives, and that managing residential properties well should benefit residents, property owners, investors, and service partners alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}