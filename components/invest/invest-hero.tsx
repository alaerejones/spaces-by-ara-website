"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function InvestHero() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  const trackEvent = (eventName: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", eventName, {
        event_category: "CTA",
        event_label: "Invest Hero",
      })
    }
  }

  const scrollToInvestmentOptions = () => {
    trackEvent("invest_view_models")

    document.getElementById("investment-options")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/investor-meeting.jpg"
          alt="Residential property investment meeting in Lagos"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-green/90 via-dark-green/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-green/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          className={`max-w-2xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-[32px] md:text-[44px] lg:text-[56px] font-bold text-white leading-[110%] mb-5 text-balance">
            Invest with Spaces by Ara
          </h1>

          <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-xl">
            Invest in professionally managed residential properties across Lagos with investment models designed for long term value and recurring income.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:flex-wrap">
            {/* Explore */}
            <Button
              size="lg"
              onClick={scrollToInvestmentOptions}
              className="bg-accent-lime text-dark-green hover:bg-accent-lime/90 text-base font-semibold px-7 py-2"
            >
              Explore Investment Options
            </Button>

            {/* WhatsApp */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-white/10 text-white hover:bg-white hover:text-dark-green text-base font-semibold px-7 py-2"
            >
              <Link
                href="https://wa.link/vb05el"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("invest_whatsapp")}
              >
                Invest Now
              </Link>
            </Button>

            {/* Brochure */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-white/10 text-white hover:bg-white hover:text-dark-green text-base font-semibold px-7 py-2"
            >
              <Link
                href="/documents/investor-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("invest_brochure_hero")}
              >
                Download Brochure
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}