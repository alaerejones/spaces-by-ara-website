"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function PropertyOwnersSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  const trackEvent = (eventName: string) => {
    if (typeof window !== "undefined") {
      ;(window as any).gtag?.("event", eventName, {
        section: "property_management",
      })
    }
  }

  return (
    <section
      id="property-management"
      ref={ref}
      className="py-20 lg:py-30 bg-light-bg dark:bg-olive/20"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={cn(
              "relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden transition-all duration-700",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <Image
              src="/images/property-owner.jpg"
              alt="Residential property managed by Spaces by Ara in Lagos"
              fill
              className="object-cover img-hover-scale"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>

          <div
            className={cn(
              "transition-all duration-700 delay-200",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <h2 className="text-[25px] md:text-[25px] lg:text-[33px] font-bold text-foreground leading-[120%] mb-5">
              Have Your Residential Property Professionally Managed
            </h2>

            <p className="text-md text-muted-foreground leading-relaxed mb-8">
              Your property deserves more than occasional supervision. Spaces by Ara is a residential facility management company that keeps homes well maintained, resident ready, and professionally managed every day. We coordinate maintenance, oversee day to day operations, support better resident experiences, and help protect the long term value of your property.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-olive text-white hover:bg-dark-green btn-glow dark:bg-accent-lime dark:text-dark-green dark:hover:bg-accent-lime/90 px-8"
            >
              <Link
                href="/management"
                onClick={() => trackEvent("property_management_learn_more")}
              >
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}