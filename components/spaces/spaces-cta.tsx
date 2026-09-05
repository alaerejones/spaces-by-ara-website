"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function SpacesCta() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  const trackEvent = (eventName: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", eventName, {
        event_category: "CTA",
        event_label: "Spaces CTA",
      })
    }
  }

  return (
    <section ref={ref} className="py-20 lg:py-30 bg-dark-green">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={cn(
            "text-center max-w-2xl mx-auto transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-[21px] md:text-[28px] lg:text-[36px] font-bold text-white leading-[120%] mb-5">
            Ready to Rent an Ara Space?
          </h2>

          <p className="text-base md:text-lg text-white/80 leading-relaxed mb-10">
            Speak with our team to check current availability, book a viewing,
            and find the right Ara Space for your long term stay.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-accent-lime text-dark-green hover:bg-accent-lime/90 text-base font-semibold px-10 py-2"
          >
            <Link
              href="https://wa.link/zuwgh9"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("spaces_rent_cta")}
            >
              Rent Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}