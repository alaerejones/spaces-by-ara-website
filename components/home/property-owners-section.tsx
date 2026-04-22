"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function PropertyOwnersSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 lg:py-30 bg-light-bg dark:bg-olive/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div
            className={cn(
              "relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden transition-all duration-700",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <Image
              src="/images/property-owner.jpg"
              alt="Property owner reviewing apartment plans"
              fill
              className="object-cover img-hover-scale"
              sizes="(max-width: 1021px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div
            className={cn(
              "transition-all duration-700 delay-200",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <h2 className="text-[21px] md:text-[25px] lg:text-[33px] font-bold text-foreground leading-[120%] mb-5">
              Professional facility management for residential buildings.
            </h2>
            <p className="text-md text-muted-foreground leading-relaxed mb-8">
              Spaces by Ara works with property owners and developers who want their residential buildings professionally managed. We handle tenant structure, occupancy, facility oversight, and daily management operations while ensuring properties remain in excellent condition.
            </p>
           <Button
  asChild
  size="lg"
  className="bg-olive text-white hover:bg-dark-green btn-glow dark:bg-accent-lime dark:text-dark-green dark:hover:bg-accent-lime/90 px-8"
>
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault()

      if (typeof window !== "undefined" && (window as any).calendar) {
        ;(window as any).calendar.schedulingButton.load({
          url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0EPe6QWxzLLC8cUvkxSabr7xM-JE_gCMKkHapG54GNdZN3JBIkDY52BAsRyuLgakohYe7HccFl?gv=true",
          color: "#CCFB6E",
          label: "Book a Discovery Call",
        })
      }
    }}
  >
    Book a Discovery Call
  </a>
</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
