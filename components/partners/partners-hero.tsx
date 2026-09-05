"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PartnersHero() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  const trackEvent = (eventName: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", eventName, {
        event_category: "CTA",
        event_label: "Partners Hero",
      })
    }
  }

  const scrollToPartnerTypes = () => {
    trackEvent("partners_view_categories")

    document.getElementById("partner-types")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/service-partners.jpg"
          alt="Professional service partners supporting residential properties in Lagos"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-green/90 via-dark-green/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-green/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          className={`max-w-2xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-[32px] md:text-[44px] lg:text-[56px] font-bold text-white leading-[110%] mb-5 text-balance">
            Become a Spaces by Ara Partner
          </h1>

          <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-xl">
            We work with trusted service providers who help keep professionally managed homes across Lagos running at a high standard.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
            <Button
              size="lg"
              onClick={scrollToPartnerTypes}
              className="bg-accent-lime text-dark-green hover:bg-accent-lime/90 text-base font-semibold px-7 py-2"
            >
              Explore Partnership Categories
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-white/10 text-white hover:bg-white hover:text-dark-green text-base font-semibold px-7 py-2"
            >
              <Link
                href="https://wa.link/tvfwhd"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("partners_whatsapp")}
              >
                Partner With Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}